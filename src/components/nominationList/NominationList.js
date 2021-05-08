import React from 'react';
import styles from './NominationList.module.css';

const NominationList = (props) => {
	return (
		<section className={styles.nominationList}>
			<h2 className={styles.nominationsH2}>Nominations</h2>
			{props.nominationList.length === 0 ? (
				<h3 className={styles.nominationsH3}>
					You don't have nominations, yet.
				</h3>
			) : (
				<ul className={styles.nominationsContent}>{props.nominationList}</ul>
			)}
		</section>
	);
};

export default NominationList;
