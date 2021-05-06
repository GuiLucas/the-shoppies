import React from 'react';

//	Components
import AppController from '../appController/AppController';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

//	Styling
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

export default AppWrapper;
