import React from 'react';

import styles from './Modal.module.css';

const Modal = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.modalContent}>
				<p className={styles.textInfo}>{props.info}</p>
			</div>
		</div>
	);
};

export default Modal;
