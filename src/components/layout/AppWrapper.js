import React from 'react';
import AppController from '../appController/AppController';
import AppHeader from './AppHeader';

const AppWrapper = () => {
	return (
		<>
			<AppHeader />
			<AppController />
		</>
	);
};
//TODO Add Footer
export default AppWrapper;
