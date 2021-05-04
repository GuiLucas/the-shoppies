import React from 'react';

import './Modal.css';

const Modal = (props) => {
	return (
		<div className='modal'>
			<div className='modal-content'>
				<h1 className='text-info'>{props.info}</h1>
			</div>
		</div>
	);
};

export default Modal;
