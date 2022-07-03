import { Typography, Container } from '@mui/material';
import PageTitle from '@components/PageTitle';
import MuiNextLink from '@components/MuiNextLink';
import Image from 'next/image';





const About = () => {
  return (
    <>
        <Container maxWidth="760px" sx={{ maxWidth: '760px', mx: 'auto' }}>
            <PageTitle 
                title="White-paper"
                subtitle="OUR MISSION(THERE IS NO MISSION)"
            />

            <Typography variant="h3">
                What is Comet?
            </Typography>
            <Typography variant="p">
            Meme money for ordinary people.
            $COMET was created in response to stagnation in the memecoin ecosystem. It doesn't implement any technical nor economic ready-to-use ideas to add value but uses the known advantages of blockchain systems. This token was created to provide light-hearted fun for everyone and bring more people into the Ergo ecosystem.
            </Typography>

            <Typography variant="h3">
                The objective
            </Typography>
            
            <Image
            src="/tokenomics.png"
            alt="tokenomics"
            layout="responsive"
            width="350"
            height="350"
            priority={true}
          /> 

            <Typography variant="p">
            The objective is to expand the $COMET token as far and wide as possible, use it on tipbots, make it available on every DEX and CEX possible, use it for NFTs and every other blockchain application imaginable. In the early stages of the token the 4 founding Cometeers will guide the process, but they will gradually pass the responsibility to the community and then disappear like my father when he went to buy cigarettes.            
            </Typography>

            <Typography variant="h3">
            Treasury funds
            </Typography>

            <Typography variant="p">
            Treasury funds could be used to pay for ads, burning, providing liquidity to Dexes. Whatever the community decides, there is only one requirement that should be always respected. Every amount spent on promoting/developing $COMET should also be used to promote Ergo, either directly or through the Ergo Foundation.            </Typography>
           
            <Typography variant="h3">
            Exchange liquidity:
            </Typography>

            <Typography variant="p">
            The liquidity pair for $COMET/$ERG will come 100% from the presale, there are plans to bring more funds to it so the slippage allows smooth swapping.Initially the refundable ico will have an allocation of 42.069% of the total supply.
            </Typography>
            <Typography variant="p">
            But there is a high chance that not all of it gets bought, that's why we will provide staking and mining of $COMET emission schedule 
            </Typography>

            <Typography variant="p">
            Mining 50% of the non sold ico: This emission will follow ERG emission schedule (EIP 0027) and will be set up with GetBLok so miners get $COMET on top of their $ERG rewards
            We think this is the fairest method of distribution and also incentives miners to have their own wallets instead of setting up an exchange wallet
            </Typography>

            <Typography variant="p">
              Staking 50% of the non sold ico: This emission will follow ErgoPad emission schedule, because we will either copy their code or use Paideia to build a DAO with $COMET as the governance token.
              *Add founder locking to the roadmap, we need to ask Blasen for it lol. I have the contracts if he wants
            </Typography>

           

        </Container>
    </>
  );
};

export default About;