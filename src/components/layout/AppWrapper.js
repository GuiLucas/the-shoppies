import React from 'react';

//	Components
import AppController from '../appController/AppController';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

//	Styling
import styles from './AppWrapper.module.css';

const AppWrapper = () => {
	return (
		<div className={styles.wrapper}>
			<AppHeader />
			<AppController />
			<AppFooter />
		</div>
	);
};

export default AppWrapper;
