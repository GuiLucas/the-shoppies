import React from 'react';
import styles from './AppFooter.module.css';

const AppFooter = () => {
	return (
		// prettier-ignore
		<footer className={styles.footer}>
			<p>
				Made by <a className={styles.footerLink} href='https://github.com/GuiLucas' target='_blank' rel='noreferrer'>
					Guilherme Lucas
				</a>
				.
			</p>
		</footer>
	);
};

export default AppFooter;
