import React from 'react';
import styles from './AppHeader.module.css';

const AppHeader = () => {
	return (
		<header className={styles.appHeader}>
			<h1 className={styles.mainHeader}>The Shoppies</h1>
		</header>
	);
};

export default AppHeader;
