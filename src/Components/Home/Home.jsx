import React from 'react';
import { Feature } from '../Feature/Feature';
import { ManageCard } from '../ManageCard/ManageCard.jsx';
import styles from './Home.module.css';

export class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			web3: null
		}
		this.setState = {
			web3: props.web3
		}
	}
	
	render(){
		return (
			<div>
				<div className={styles.top}></div>
				<Feature />				
				<ManageCard />
			</div>
		)
	}
}