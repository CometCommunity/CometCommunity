import { Typography, Container } from '@mui/material';
import PageTitle from '@components/PageTitle';

const PrivacyPolicy = () => {
  return (
    <>
        <Container maxWidth="760px" sx={{ maxWidth: '760px', mx: 'auto' }}>
            <PageTitle 
                title="Privacy Policy"
            />
            
            <Typography variant="p">
                This website stores your wallet data in LocalStorage on your browser, which is saved on your computer but not on the comet servers. When you interact with the Dashboard and any of the dApps, your data is included in a server request but never stored. 
            </Typography>

            <Typography variant="p">
                LocalStorage persists when you leave this website, but is never shared with others. To delete it, just click the button at the top where your wallet is saved, and select &quot;remove wallet.&quot; 
            </Typography>
        </Container>
    </>
  );
};

export default PrivacyPolicy;