/* eslint no-undef: "off"*/
import {addNotification, getTxUrl, getWalletAddress, showMsg} from "./helpers";
import {txFee} from "./consts";
import {currentBlock, getBalance} from "./explorer";
import {colTuple, encodeByteArray, encodeHex, encodeNum} from "./serializer";
import axios from "axios";

let ergolib = import('ergo-lib-wasm-browser')




function yoroiDisconnect() {
    showMsg('Disconnected from Wallet wallet', true)
    localStorage.removeItem('wallet');
}

export async function setupYoroi(isFirst = false) {
    if (typeof ergo_request_read_access === "undefined") {
        showMsg('You must install Nautilus-Ergo dApp Connector to be able to connect to site', true)
    } else {
        if (isFirst) {
            window.removeEventListener("ergo_wallet_disconnected", yoroiDisconnect);
            window.addEventListener("ergo_wallet_disconnected", yoroiDisconnect);
        }
        let hasAccess = await ergo_check_read_access()
        if (!hasAccess) {
            let granted = await ergo_request_read_access()
            if (!granted) {
                if (isFirst) showMsg('Wallet access denied', true)
            } else {
                if (isFirst) showMsg('Successfully connected to Wallet')
                return true
            }
        } else return true
    }
    return false
}

export async function getYoroiAddress() {
    let res = await setupYoroi()
    if (res) return await ergo.get_change_address();
    return null
}

export async function yoroiSendFunds(need, addr, block, registers={}, notif=true) {
    const wasm = await ergolib

    // await setupYoroi()
    let have = JSON.parse(JSON.stringify(need))
    have['ERG'] += txFee
    let ins = []
    const keys = Object.keys(have)

    const allBal = await getYoroiTokens()
    if (keys.filter(key => key !== 'ERG').filter(key => !Object.keys(allBal).includes(key) || allBal[key].amount < have[key]).length > 0) {
        showMsg('Not enough balance in the wallet!', true)
        return
    }

    for (let i = 0; i < keys.length; i++) {
        if (have[keys[i]] <= 0) continue
        const curIns = await ergo.get_utxos(have[keys[i]].toString(), keys[i]);
        if (curIns !== undefined) {
            curIns.forEach(bx => {
                have['ERG'] -= parseInt(bx.value)
                bx.assets.forEach(ass => {
                    if (!Object.keys(have).includes(ass.tokenId)) have[ass.tokenId] = 0
                    have[ass.tokenId] -= parseInt(ass.amount)
                })
            })
            ins = ins.concat(curIns)
        }
    }
    if (keys.filter(key => have[key] > 0).length > 0) {
        showMsg('Not enough balance in the wallet! ', true)
        return
    }

    const fundBox = {
        value: need['ERG'].toString(),
        ergoTree: wasm.Address.from_mainnet_str(addr).to_ergo_tree().to_base16_bytes(),
        assets: keys.filter(key => key !== 'ERG').map(key => {
            return {
                tokenId: key,
                amount: need[key].toString()
            }
        }),
        additionalRegisters: registers,
        creationHeight: block.height
    }

    const feeBox = {
        value: txFee.toString(),
        creationHeight: block.height,
        ergoTree: "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
        assets: [],
        additionalRegisters: {},
    }

    const changeBox = {
        value: (-have['ERG']).toString(),
        ergoTree: wasm.Address.from_mainnet_str(getWalletAddress()).to_ergo_tree().to_base16_bytes(),
        assets: Object.keys(have).filter(key => key !== 'ERG')
            .filter(key => have[key] < 0)
            .map(key => {
                return {
                    tokenId: key,
                    amount: (-have[key]).toString()
                }
            }),
        additionalRegisters: {},
        creationHeight: block.height
    }

    const unsigned = {
        inputs: ins.map(curIn => {
            return {
                ...curIn,
                extension: {}
            }
        }),
        outputs: [fundBox, changeBox, feeBox],
        dataInputs: [],
        fee: txFee
    }

    let tx = null
    try {
        tx = await ergo.sign_tx(unsigned)
    } catch (e) {
        showMsg('Error while sending funds from Wallet!', true)
        return
    }
    const txId = await ergo.submit_tx(tx)

    console.log('Nautilus tx id', txId)
    if (notif) {
        if (txId !== undefined && txId.length > 0)
            showMsg('The operation is being done with Wallet, please wait...')
        else
            showMsg('Error while sending funds using Wallet!', true)
    }
    return txId
}

export async function getYoroiTokens() {
    await setupYoroi()
    const addresses = (await ergo.get_used_addresses()).concat(await ergo.get_unused_addresses())
    let tokens = {}
    for (let i = 0; i < addresses.length; i++) {
        (await getBalance(addresses[i])).tokens.forEach(ass => {
            if (!Object.keys(tokens).includes(ass.tokenId))
                tokens[ass.tokenId] = {
                    amount: 0,
                    name: ass.name,
                    tokenId: ass.tokenId
                }
            tokens[ass.tokenId].amount += parseInt(ass.amount)
        })
    }
    return tokens
}


async function fulfillWithTimeLimit(timeLimit, task, failureValue){
    let timeout;
    const timeoutPromise = new Promise((resolve, reject) => {
        timeout = setTimeout(() => {
            resolve(failureValue);
        }, timeLimit);
    });
    const response = await Promise.race([task, timeoutPromise]);
    if(timeout){ //the code works without this but let's be safe and clean up the timeout
        clearTimeout(timeout);
    }
    return response;
}


export async function signTx(transaction_to_sign){
    // let sellerTx;
    let tx;
    console.log("Transaction To Sign", transaction_to_sign)

    try {
        tx = await ergo.sign_tx(transaction_to_sign)
    } catch (e) {
        console.log(e)
        showMsg('Error while sending funds!', true)
        return
    }
    const txId = await fulfillWithTimeLimit(8000, ergo.submit_tx(tx), 0);

    console.log('tx id', txId)
    if (true) {
        if (txId !== undefined && txId.length > 0 & window.confirm('The Transtaction was sent. Click ok to redirect on the ergo explorer page.' + txId))

            window.open("https://explorer.ergoplatform.com/en/transactions/" + txId)

        else
            showMsg('dApp Error: Please consolidate your wallet (perform any intra-wallet transaction)', true)
    }
    return txId
}


export async function do_swap(price){


    price=parseFloat(price)
    price = price * 1000000000
    console.log(price)



    const wasm = await ergolib
    const user = await ergo.get_change_address()
    const blockHeight = await currentBlock();


    const p2s = "KNcyFMHkYdLH89uhYKL3FTAf9rJ3iHAE99Kn4UHAiy3BEjpo6RxxSWMhuzgxSWksuv4Rz7qkUyqaLNtRfQoHQ64MQD2QAz3XQE9QpjZDf7XXAcBa5wdxAGqapYk39hmhtEB8VqKUD5ouiotAuAKd9PmeiaddTz2Yo1C9rjKghpZU1G6obLzJhYgwwCa4TavW2WunBnZQCDSDS7aWzKNL4RYhNR4bZHPyFEJDWGGy3b5kzvqFnsQS5y8muz8AfbqU26xWUknTxcgyFnb9ongJZKEEx5RnuEXzyW8hreGQSvB95P5mN6LgxJTDn66rM3wmrVWbFYgdo2KihyUCgLC18Goig7TSFG9g9CC497A8yGFhrBDhSa1psE21mDxc4SkoTsqGbw8SFZTMmR5d7eW1eva9pW11hbW8YgWRDgYajEyYyGG6btDRJbXPLRwpnT9s3HtiSPu19w88Xp8ixL4a1yMh16z4j4d49b17G9rZCn6cHrdvibibjjKSv1uMuZk18dUzWFj7Cg9pph8hQF4DYyfQS5xNFjdMpBMSaA4KjwqzpkKf8rr2yDNZGP6qAnSzaHxmDZMGbA4oe2XcWSKaTyEGiEj9AARnpxzoyRMJghw3FXwMcD8f8yBSfAiAJbAkMtuETFXQZvCs1Dpev1jCruGwNBV"

    let need = {ERG: price}
    // Get all wallet tokens/ERG and see if they have enough
    let have = JSON.parse(JSON.stringify(need))
    have['ERG'] += txFee

    let ins = []
    const keys = Object.keys(have)

    for (let i = 0; i < keys.length; i++) {
        if (have[keys[i]] <= 0) continue
        const curIns = await ergo.get_utxos(have[keys[i]].toString(), keys[i]);
        if (curIns !== undefined) {
            curIns.forEach(bx => {
                have['ERG'] -= parseInt(bx.value)
                bx.assets.forEach(ass => {
                    if (!Object.keys(have).includes(ass.tokenId)) have[ass.tokenId] = 0
                    have[ass.tokenId] -= parseInt(ass.amount)
                })
            })
            ins = ins.concat(curIns)
        }
    }
    if (keys.filter(key => have[key] > 0).length > 0) {
        showMsg('Not enough balance in the wallet!', true)
        return
    }

    let swapBoxResp = await axios.get(`https://api.ergoplatform.com/api/v1/boxes/unspent/byAddress/`+p2s).catch((err) => {
        console.log("Error when calling explorer");
    })
    let swapBox = swapBoxResp.data.items[Math.floor(Math.random() * 18)]
    console.log(swapBoxResp.data.items)
    if ((swapBox.assets[1].amount - 15*price/100000) < 2){return}

    console.log(swapBox)

    // -----------Output boxes--------------
    let registers = {
        R4: await encodeHex(swapBox.boxId),
    };
    console.log(swapBox.assets[0].value)

    const swapBoxOutput = {
        value: swapBox.value + price,
        ergoTree: wasm.Address.from_mainnet_str(p2s).to_ergo_tree().to_base16_bytes(), // p2s to ergotree (can do through node or wasm)
        assets: [
            {
                tokenId: swapBox.assets[0].tokenId ,
                amount: parseInt(swapBox.assets[0].amount) - 15*price/100000
            },
            {
                tokenId: swapBox.assets[1].tokenId,
                amount: swapBox.assets[1].amount - 15*price/100000
            }
        ],
        additionalRegisters: registers,
        creationHeight: blockHeight.height
    }



    const feeBox = {
        value: txFee.toString(),
        creationHeight: blockHeight.height,
        ergoTree: "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
        assets: [],
        additionalRegisters: {},
    }

    const inputList = ins.map(curIn => {
        return {
            ...curIn,
            extension: {}
        } // this gets all user eutxo boxes
    })
    swapBox.extension = {}

    const inputBoxes = inputList.concat(swapBox)

    // Change calculation
    let box;
    let changeAssets = []
    for (box of inputList){
        let asset;
        for (asset of box.assets){
            changeAssets.push(asset)
        }
    }

    let changeBox = {
        value: (-have['ERG']).toString(),
        ergoTree: wasm.Address.from_mainnet_str(user).to_ergo_tree().to_base16_bytes(),
        assets: changeAssets,
        additionalRegisters: {},
        creationHeight: blockHeight.height
    }
    const asset0 =  {
        tokenId: swapBox.assets[0].tokenId ,
        amount: 15*price/100000
    }
    const asset1 =  {
        tokenId: swapBox.assets[1].tokenId ,
        amount: 15*price/100000
    }

    changeBox.assets.push(asset0)
    changeBox.assets.push(asset1)

    const transaction_to_sign = {
        inputs: inputBoxes,
        outputs: [swapBoxOutput, changeBox, feeBox],
        dataInputs: [],
        fee: txFee
    }

    return await signTx(transaction_to_sign)

}


export async function do_refund(cometIn){
    cometIn = parseInt(cometIn/3)*3
    let ergValue = 100000*cometIn/15
    console.log(cometIn)

    const wasm = await ergolib
    const user = await ergo.get_change_address()
    const blockHeight = await currentBlock();


    const p2s = "KNcyFMHkYdLH89uhYKL3FTAf9rJ3iHAE99Kn4UHAiy3BEjpo6RxxSWMhuzgxSWksuv4Rz7qkUyqaLNtRfQoHQ64MQD2QAz3XQE9QpjZDf7XXAcBa5wdxAGqapYk39hmhtEB8VqKUD5ouiotAuAKd9PmeiaddTz2Yo1C9rjKghpZU1G6obLzJhYgwwCa4TavW2WunBnZQCDSDS7aWzKNL4RYhNR4bZHPyFEJDWGGy3b5kzvqFnsQS5y8muz8AfbqU26xWUknTxcgyFnb9ongJZKEEx5RnuEXzyW8hreGQSvB95P5mN6LgxJTDn66rM3wmrVWbFYgdo2KihyUCgLC18Goig7TSFG9g9CC497A8yGFhrBDhSa1psE21mDxc4SkoTsqGbw8SFZTMmR5d7eW1eva9pW11hbW8YgWRDgYajEyYyGG6btDRJbXPLRwpnT9s3HtiSPu19w88Xp8ixL4a1yMh16z4j4d49b17G9rZCn6cHrdvibibjjKSv1uMuZk18dUzWFj7Cg9pph8hQF4DYyfQS5xNFjdMpBMSaA4KjwqzpkKf8rr2yDNZGP6qAnSzaHxmDZMGbA4oe2XcWSKaTyEGiEj9AARnpxzoyRMJghw3FXwMcD8f8yBSfAiAJbAkMtuETFXQZvCs1Dpev1jCruGwNBV"

    // await setupYoroi()
    let need = {ERG: 1000000}
    need['3fa9e93e0f4c15a18354db818a9a2401d06d551ca2d939ea012f4cf7c69c1d00'] = cometIn
    need['0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b'] = cometIn
    let have = JSON.parse(JSON.stringify(need))
    let ins = []
    const keys = Object.keys(have)

    const allBal = await getYoroiTokens()
    if (keys.filter(key => key !== 'ERG').filter(key => !Object.keys(allBal).includes(key) || allBal[key].amount < have[key]).length > 0) {
        showMsg('Not enough balance in the wallet! ', true)
        return
    }

    for (let i = 0; i < keys.length; i++) {
        if (have[keys[i]] <= 0) continue
        const curIns = await ergo.get_utxos(have[keys[i]].toString(), keys[i]);
        if (curIns !== undefined) {
            curIns.forEach(bx => {
                have['ERG'] -= parseInt(bx.value)
                bx.assets.forEach(ass => {
                    if (!Object.keys(have).includes(ass.tokenId)) have[ass.tokenId] = 0
                    have[ass.tokenId] -= parseInt(ass.amount)
                })
            })
            ins = ins.concat(curIns)
        }
    }
    if (keys.filter(key => have[key] > 0).length > 0) {
        showMsg('Not enough balance in the wallet! ', true)
        return
    }
    let swapBoxResp = await axios.get(`https://api.ergoplatform.com/api/v1/boxes/unspent/byAddress/`+p2s).catch((err) => {
        console.log("Error when calling explorer");
    })
    let tempBox = swapBoxResp.data.items[Math.floor(Math.random() * 18)]
    let swapBox
    if (tempBox.value - txFee < ergValue) {
        let box
        for (box of swapBoxResp.data.items){
            if (box.value - txFee > ergValue){
                swapBox = JSON.parse(JSON.stringify(box));
                console.log("Value of box" , box.value - txFee)
                console.log("guilt" , box.value - txFee > ergValue)


            }
        }
    }
    else {
        swapBox = JSON.parse(JSON.stringify(tempBox));

    }
    console.log(swapBoxResp.data.items)

    console.log(swapBox)
    if (swapBox === undefined) {showMsg('Failure to find contract with enough funds for your request! Try a smaller swap.! ', true)
        return}

    // -----------Output boxes--------------
    let registers = {
        R4: await encodeHex(swapBox.boxId),
    };

    console.log(swapBox.value)
    console.log(ergValue)
    const swapBoxOutput = {
        value: swapBox.value - ergValue,
        ergoTree: wasm.Address.from_mainnet_str(p2s).to_ergo_tree().to_base16_bytes(), // p2s to ergotree (can do through node or wasm)
        assets: [
            {
                tokenId: swapBox.assets[0].tokenId ,
                amount: (BigInt(swapBox.assets[0].amount) + BigInt(cometIn)).toString()
            },
            {
                tokenId: swapBox.assets[1].tokenId,
                amount: swapBox.assets[1].amount + cometIn
            }
        ],
        additionalRegisters: registers,
        creationHeight: blockHeight.height
    }


    const feeBox = {
        value: txFee.toString(),
        creationHeight: blockHeight.height,
        ergoTree: "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
        assets: [],
        additionalRegisters: {},
    }

    const inputList = ins.map(curIn => {
        return {
            ...curIn,
            extension: {}
        } // this gets all user eutxo boxes
    })
    swapBox.extension = {}

    const inputBoxes = inputList.concat(swapBox)

    let changeBox = {
        value: (-have['ERG']+ergValue).toString(),
        ergoTree: wasm.Address.from_mainnet_str(user).to_ergo_tree().to_base16_bytes(),
        assets: Object.keys(have).filter(key => key !== 'ERG')
            .filter(key => have[key] < 0)
            .map(key => {
                return {
                    tokenId: key,
                    amount: (-have[key]).toString()
                }
            }),
        additionalRegisters: {},
        creationHeight: blockHeight.height
    }

    const transaction_to_sign = {
        inputs: inputBoxes,
        outputs: [swapBoxOutput, changeBox, feeBox],
        dataInputs: [],
        fee: txFee
    }

    return await signTx(transaction_to_sign)

}



export async function do_refund_old(cometIn){
    cometIn = parseInt(cometIn/3)*3
    let ergValue = 100000*cometIn/15
    console.log(cometIn)

    const wasm = await ergolib
    const user = await ergo.get_change_address()
    const blockHeight = await currentBlock();


    const p2s = "2H6HqR1dqVGgeKHW9gVTohsfr48MUwqsWbnqMp6EmuNtC2n1ndJGtnTauA53xBXn9kJfprUNZEezDtczyb3X6mxk1pdV4rMEoB4ypiQwoiqM8k6cyNVzuSZaY4mN8LsF2pwxLASzX3KmHqEt9HJuCeoEoq6usR4vB4PSPWghUmqLPG69SignKTtuyqn7mNHN5os3Sp2UdaeFTnkT3a45KWq4iheMFFNrJa7CEG8ZYJWg9CiYr2vSpYRuFp4YvwT46J4QHeXnJBW74VMoDCqK1x8Qda2AryRC3USCrffQwZ4oucQL69WeX66TkAKzSoowWDqzBd4msiqF4GGc2h9UwQV7T1rpKPEpwqfFmR2a9CkEQmjNx76aGUGEaRoLip8sMJ55GemfYxwvqoZMjUZnwGgpW67JHcWfqsu8kEttGATNc19H9FtvXxxgQqAUGu9X1UKf8FVuRM7pd4CY5vyFNtpoRByR6KdqdGymFcAKVh3wHWyBqxHy8nyYK2zCqxdpTjf2RUKQXyWscBZFsoMF33qx7nLikLWpgHKFuZ9pymuf3AaETjVQ8VfUmna3DtiNtEuz4ZcG14hj9Mx6gL2uMYmBNLAiLNLYF5Mb4iy4Cg2CKW6rjw46NnVZJxEEMFw7xKQ5LZXBZ6dB72"

    // await setupYoroi()
    let need = {ERG: 1000000}
    need['a699d8e6467a9d0bb32d84c135b05dfb0cdddd4fc8e2caa9b9af0aa2666a3a6f'] = cometIn
    need['0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b'] = cometIn
    let have = JSON.parse(JSON.stringify(need))
    let ins = []
    const keys = Object.keys(have)

    const allBal = await getYoroiTokens()
    if (keys.filter(key => key !== 'ERG').filter(key => !Object.keys(allBal).includes(key) || allBal[key].amount < have[key]).length > 0) {
        showMsg('Not enough balance in the wallet! ', true)
        return
    }

    for (let i = 0; i < keys.length; i++) {
        if (have[keys[i]] <= 0) continue
        const curIns = await ergo.get_utxos(have[keys[i]].toString(), keys[i]);
        if (curIns !== undefined) {
            curIns.forEach(bx => {
                have['ERG'] -= parseInt(bx.value)
                bx.assets.forEach(ass => {
                    if (!Object.keys(have).includes(ass.tokenId)) have[ass.tokenId] = 0
                    have[ass.tokenId] -= parseInt(ass.amount)
                })
            })
            ins = ins.concat(curIns)
        }
    }
    if (keys.filter(key => have[key] > 0).length > 0) {
        showMsg('Not enough balance in the wallet! ', true)
        return
    }
    let swapBoxResp = await axios.get(`https://api.ergoplatform.com/api/v1/boxes/unspent/byAddress/`+p2s).catch((err) => {
        console.log("Error when calling explorer");
    })
    let tempBox = swapBoxResp.data.items[Math.floor(Math.random() * 20)]
    let swapBox
    if (tempBox.value - txFee < ergValue) {
        let box
        for (box of swapBoxResp.data.items){
            if (box.value - txFee > ergValue){
                swapBox = JSON.parse(JSON.stringify(box));
                console.log("Value of box" , box.value - txFee)
                console.log("guilt" , box.value - txFee > ergValue)


            }
        }
    }
    else {
        swapBox = JSON.parse(JSON.stringify(tempBox));

    }
    console.log(swapBoxResp.data.items)

    console.log(swapBox)
    if (swapBox === undefined) {showMsg('Failure to find contract with enough funds for your request! Try a smaller swap.! ', true)
        return}

    // -----------Output boxes--------------
    let registers = {
        R4: await encodeHex(swapBox.boxId),
    };

    console.log(swapBox.value)
    console.log(ergValue)
    const swapBoxOutput = {
        value: swapBox.value - ergValue,
        ergoTree: wasm.Address.from_mainnet_str(p2s).to_ergo_tree().to_base16_bytes(), // p2s to ergotree (can do through node or wasm)
        assets: [
            {
                tokenId: swapBox.assets[0].tokenId ,
                amount: (BigInt(swapBox.assets[0].amount) + BigInt(cometIn)).toString()
            },
            {
                tokenId: swapBox.assets[1].tokenId,
                amount: swapBox.assets[1].amount + cometIn
            }
        ],
        additionalRegisters: registers,
        creationHeight: blockHeight.height
    }


    const feeBox = {
        value: txFee.toString(),
        creationHeight: blockHeight.height,
        ergoTree: "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
        assets: [],
        additionalRegisters: {},
    }

    const inputList = ins.map(curIn => {
        return {
            ...curIn,
            extension: {}
        } // this gets all user eutxo boxes
    })
    swapBox.extension = {}

    const inputBoxes = inputList.concat(swapBox)

    let changeBox = {
        value: (-have['ERG']+ergValue).toString(),
        ergoTree: wasm.Address.from_mainnet_str(user).to_ergo_tree().to_base16_bytes(),
        assets: Object.keys(have).filter(key => key !== 'ERG')
            .filter(key => have[key] < 0)
            .map(key => {
                return {
                    tokenId: key,
                    amount: (-have[key]).toString()
                }
            }),
        additionalRegisters: {},
        creationHeight: blockHeight.height
    }

    const transaction_to_sign = {
        inputs: inputBoxes,
        outputs: [swapBoxOutput, changeBox, feeBox],
        dataInputs: [],
        fee: txFee
    }

    return await signTx(transaction_to_sign)

}