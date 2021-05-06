import React from 'react';

import './Modal.css';

const Modal = (props) => {
	return (
		<div className='modal'>
			<div className='modal-content'>
				<p className='text-info'>{props.info}</p>
			</div>
		</div>
	);
};

export default Modal;
