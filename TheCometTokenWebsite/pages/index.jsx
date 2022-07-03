import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Features from '@components/landing/Features';
import Hero from '@components/landing/Hero';
import { Container, Divider } from '@mui/material';
// import Social from '@components/landing/Social';

const Homepage = () => {
  const router = useRouter();
  let id = router.asPath.match(/#([a-z0-9]+)/gi);

  useEffect(() => {
    if (id) {
      let element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    } else window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [id]);

  return (
    <>
      <Container maxWidth="lg">
        <Hero
          title="Welcome to COMET Token"
          subtitle="We are a meme token for ordinary people on Ergo.
          “It’s like bitcoin but 1000x better.(Just like the coins it has)”
          – Jose"
        />
        <Divider sx={{ mb: 10 }} />
        <Features />
        </Container>
    </>
  );
};

export default Homepage;
