import React from 'react';
import AppController from '../appController/AppController';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import './AppWrapper.css';

const AppWrapper = () => {
	return (
		<div className='wrapper'>
			<AppHeader />
			<AppController />
			<AppFooter />
		</div>
	);
};
//TODO Add Footer
export default AppWrapper;
