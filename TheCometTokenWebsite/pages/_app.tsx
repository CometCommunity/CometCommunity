import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import '/styles/globals.css';
import theme from '../styles/theme';
import Layout from '@components/layout/Layout';
import { SnackbarProvider } from 'notistack';
import { WalletProvider } from '../utils/WalletContext';
import { AddWalletProvider } from '../utils/AddWalletContext';
import { SearchProvider } from '../utils/SearchContext';
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const exitCompleter = () => {
	if (typeof window !== 'undefined') {
		window.scrollTo({top: 0, left: 0, behavior: 'instant'})
	}
}

function MyApp({ Component, pageProps }: AppProps) {

	const emotionCache = clientSideEmotionCache;
	const router = useRouter();



	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>CometToken</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes" />
			</Head>
			{/* MUI Theme Provider */}
			<ThemeProvider theme={theme}>
				
				<SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} maxSnack={3} dense> 
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
						<AddWalletProvider>
						<WalletProvider>
						<SearchProvider>
						<AnimatePresence exitBeforeEnter onExitComplete={exitCompleter}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className={`app-container`}
								key={router.route}
							>
							
								<Layout>
									<Component {...pageProps}/>
								</Layout>
								
							</motion.div>
						</AnimatePresence>
						</SearchProvider>
						</WalletProvider>
						</AddWalletProvider>
				</SnackbarProvider>
				
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
