/** @jsx jsx */
import { Footer as ThemeFooter, Flex, useColorMode, jsx } from 'theme-ui';

const Footer = () => {
	const [ colorMode, setColorMode ] = useColorMode();
	const isDark = colorMode === `dark`;
	const toggleColorMode = (e: any) => {
		setColorMode(isDark ? `light` : `dark`);
	};

	return (
		<ThemeFooter>
			<button
				sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
				onClick={toggleColorMode}
				type="button"
				aria-label="Toggle dark mode"
			>
				{isDark ? `Light` : `Dark`}
			</button>
			Copyright &copy; {new Date().getFullYear()}. All rights reserved.
			<br />
			<Flex
				sx={{
					justifyContent: `center`,
					alignItems: `center`,
					mt: 3,
					color: `text`,
					fontWeight: `semibold`,
					a: { color: `text` }
				}}
			/>
		</ThemeFooter>
	);
};

export default Footer;
