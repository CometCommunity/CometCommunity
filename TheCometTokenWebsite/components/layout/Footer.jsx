import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@components/MuiNextLink';
import { List, ListItem, SvgIcon, IconButton, Divider } from '@mui/material';
// import { styled } from '@mui/system';
// import theme from 'styles/theme';
import MuiNextLink from '@components/MuiNextLink';
import Image from 'next/image'

/* const BackgroundContainer = styled('div')(({ theme }) => ({
	zIndex: '-100',
	pointerEvents: 'none'
}));

const BackgroundSVG = styled('svg')(({ theme }) => ({
	width: '800px',
	height: '264px',
	position: 'absolute',
	bottom: '0',
	left: '-400px',
}));
 */
const Footer = () => {
	return (
		<>
			{/* Footer illustration 
			<BackgroundContainer aria-hidden="true" variant='inherit'>
					<BackgroundSVG fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.4">
							<circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fillOpacity=".4" />
							<defs>
								<radialGradient id="footerglow_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 0 400) scale(315.089)">
										<stop stopColor="#3ABAB4" />
										<stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
								</radialGradient>
							</defs>
					</BackgroundSVG>
			</BackgroundContainer>*/}

			<Divider sx={{ mt: 6, mb: 6 }} />

			<Grid container spacing={1} sx={{ justifyContent: 'space-between' }}>
				<Grid item xs={12} md={4}>
					<MuiNextLink activeClassName='active' href='/'>
								<IconButton sx={{ mb: '2rem' }}>
								<Image src="/favicon-32x32.png" alt="Comet Logo" width="32" height="32" />
									{/* <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
										<linearGradient id="b" x2="32" y1="8" y2="8" gradientUnits="userSpaceOnUse">
											<stop stopColor="#3ABAB4" offset=".2813"/>
											<stop stopColor="#7F9CF5" offset="1"/>
										</linearGradient>
										<polygon points="27.3 4.7 16 0 4.7 4.7 0 16 7.8 16 10.2 10.2 16 7.8 21.8 10.2 24.2 16 32 16" fill="url(#b)"/>
										<linearGradient id="a" x2="32" y1="24" y2="24" gradientUnits="userSpaceOnUse">
											<stop stopColor="#3ABAB4" offset=".2864"/>
											<stop stopColor="#3ABAB4" stopOpacity="0" offset="1"/>
										</linearGradient>
										<polygon points="24.2 16 21.8 21.8 16 24.2 10.2 21.8 7.8 16 0 16 4.7 27.3 16 32 27.3 27.3 32 16" fill="url(#a)"/>
									</svg> */}
								</IconButton>
							</MuiNextLink>
				</Grid>
				<Grid item xs={6} md={2}>
					<Typography variant='inherit' sx={titleStyles}>COMET</Typography>
					<List>
						<ListItem disableGutters sx={listItemStyles}>
							<Link activeClassName='active' href='/about' sx={linkStyles}>
								Whitepaper
							</Link>
						</ListItem>	
						<ListItem disableGutters sx={listItemStyles}>
							<Link activeClassName='active' href='/RoadMap' sx={linkStyles}>
								RoadMap
							</Link>
						</ListItem>
						<ListItem disableGutters sx={listItemStyles}>
							<Link activeClassName='active' href='/ICO' sx={linkStyles}>
								Refundable ICO
							</Link>
						</ListItem>				
					</List>
				</Grid>
				<Grid item xs={6} md={2}>
					<Typography variant='inherit' sx={titleStyles}>SOCIAL</Typography>
					<List>
						<ListItem disableGutters sx={listItemStyles}>
							<Link activeClassName='active' href='https://t.me/CometErgoCommunity' sx={linkStyles} target="_blank" rel="noreferrer">
								Telegram
							</Link>
						</ListItem>
						<ListItem disableGutters sx={listItemStyles}>
							<Link activeClassName='active' href='https://t.me/+ZsIUlNHS1as4MGVk' sx={linkStyles} target="_blank" rel="noreferrer">
								TG Shillarmy
							</Link>
						</ListItem>
						<ListItem disableGutters sx={listItemStyles}>
							<Link activeClassName='active' href='https://twitter.com/CometMooning' sx={linkStyles} target="_blank" rel="noreferrer">
								Twitter
							</Link>
						</ListItem>
						<ListItem disableGutters sx={listItemStyles}>
							<Link activeClassName='active' href='https://discord.gg/p4A9KD5GRg' sx={linkStyles} target="_blank" rel="noreferrer">
								Discord
							</Link>
						</ListItem>
						<ListItem disableGutters sx={listItemStyles}>
							<Link activeClassName='active' href='https://www.instagram.com/comet_token/' sx={linkStyles} target="_blank" rel="noreferrer">
								Instagram
							</Link>
						</ListItem>
						<ListItem disableGutters sx={listItemStyles}>
							<Link activeClassName='active' href='https://github.com/CometCommunity' sx={linkStyles}>
								Github
							</Link>
						</ListItem>
					</List>
				</Grid>
			</Grid>

			<Grid container spacing={1} sx={bottomStyles}>
				<Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
					<Typography variant='inherit' sx={textStyles}>© 2021 Comet. All rights reserved.</Typography>
				</Grid>
				<Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'center' } }}>
					<Link activeClassName='active' href='/privacypolicy' sx={linkStyles}>
						Privacy Policy
					</Link>
				</Grid>
				<Grid item xs={12} md={4} sx={{ display: 'flex', textAlign: { xs: 'center', md: 'right' }, justifyContent: { xs: 'center', md: 'flex-end' } }}>
						<List sx={{ display: 'flex' }}>
				<ListItem sx={socialStyles}>
					<Link sx={{ display: 'flex', justifyContent: 'center' }} href="https://twitter.com/CometMooning" aria-label="Twitter" title="Twitter" target="_blank">
						<SvgIcon sx={{ width: '32px', height: '32px' }} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
							<path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
						</SvgIcon>
					</Link>
				</ListItem> 
				<ListItem sx={socialStyles}>
					<Link sx={{ display: 'flex', justifyContent: 'center' }} href="https://discord.gg/p4A9KD5GRg" aria-label="Discord" title="Discord" target="_blank">
						<SvgIcon sx={{ width: '32px', height: '32px' }} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
							<path d="m24.242 9.115c-2.865-2.144-5.61-2.084-5.61-2.084l-.28.321c3.406 1.022 4.989 2.524 4.989 2.524-4.873-2.683-11.079-2.663-16.148 0 0 0 1.643-1.583 5.249-2.604l-.2-.241c0 0-2.725-.06-5.609 2.084 0 0-2.885 5.189-2.885 11.58 0 0 1.683 2.885 6.111 3.025 0 0 .741-.882 1.342-1.643-2.544-.761-3.506-2.344-3.506-2.344 1.599 1 3.215 1.626 5.229 2.023 3.277.674 7.353-.019 10.398-2.023 0 0-1.002 1.623-3.626 2.364.601 .741 1.322 1.603 1.322 1.603 4.427-.14 6.11-3.025 6.11-3.005 0-6.391-2.885-11.58-2.885-11.58zm-12.541 9.717c-1.122 0-2.044-.982-2.044-2.204.082-2.927 4.026-2.918 4.087 0 0 1.222-.902 2.204-2.043 2.204zm7.312 0c-1.122 0-2.043-.982-2.043-2.204.09-2.921 3.984-2.922 4.087 0 0 1.222-.901 2.204-2.044 2.204z" />
						</SvgIcon>
					</Link>
				</ListItem>
				<ListItem sx={socialStyles}>
					<Link sx={{ display: 'flex', justifyContent: 'center'  }}  href="https://github.com/CometCommunity" aria-label="Github" title="Github" target="_blank">
						<SvgIcon sx={{ width: '32px', height: '32px' }} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
							<path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
						</SvgIcon>
					</Link>
				</ListItem>
				<ListItem sx={socialStyles}>
					<Link sx={{ display: 'flex', justifyContent: 'center' }}  href="https://t.me/CometErgoCommunity" aria-label="Telegram" title="Telegram" rel="noreferrer" target="_blank">
						<SvgIcon sx={{ width: '32px', height: '32px' }} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.153 15.71C11.631 13.759 14.616 12.473 16.11 11.852 20.376 10.078 21.262 9.77 21.84 9.759 21.967 9.757 22.251 9.789 22.435 9.938 22.591 10.064 22.633 10.234 22.654 10.354 22.674 10.473 22.7 10.746 22.68 10.959 22.448 13.387 21.448 19.281 20.939 22.002 20.724 23.153 20.3 23.539 19.89 23.576 18.998 23.658 18.32 22.987 17.456 22.421 16.105 21.534 15.341 20.983 14.029 20.118 12.512 19.119 13.495 18.569 14.359 17.672 14.586 17.437 18.516 13.862 18.592 13.538 18.601 13.497 18.61 13.346 18.52 13.266 18.431 13.186 18.298 13.214 18.202 13.235 18.067 13.266 15.907 14.694 11.723 17.518 11.11 17.939 10.555 18.144 10.058 18.133 9.509 18.121 8.454 17.823 7.67 17.568 6.708 17.255 5.944 17.09 6.01 16.559 6.045 16.282 6.426 16 7.153 15.71Z" />
						</SvgIcon>
					</Link>
				</ListItem>
				{/*
				<ListItem className="ml-4">
					<Link className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" href="#0" aria-label="Instagram">
						<svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
							<circle cx="20.145" cy="11.892" r="1" />
							<path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
							<path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
						</svg>
					</Link>
				</ListItem>
				<ListItem className="ml-4">
					<Link className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" href="#0" aria-label="Linkedin">
						<svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
						</svg>
					</Link>
				</ListItem>*/}
						</List>
				</Grid>
			</Grid>
		</>
	);
};

const titleStyles = {
	'& span': {
		color: (theme) => theme.palette.text.primary,
	},
	fontWeight: 'normal',
	fontSize: 14,
};

const textStyles = {
	color: (theme) => theme.palette.text.secondary,
	fontSize: 14,
};

const linkStyles = {
	color: (theme) => theme.palette.text.secondary,
	textDecoration: 'none',
	'&:hover': {
		textDecoration: 'underline',
	},
	fontSize: 14,
};

const listItemStyles = {
	lineHeight: 0.7,
	fontSize: 14,
};

const bottomStyles = {
	pt: 4,
	// fontSize: 14,
	display: 'flex',
	justifyContent: {
		xs: 'center',
		md: 'space-between',
	},
};

const socialStyles = {
	mx: 1,
	p: 0,
	background: (theme) => theme.palette.background.paper
	, borderRadius: '15px' 
}
/* 
const backgroundStyles = {
	ml: 24,
} */

export default Footer;
