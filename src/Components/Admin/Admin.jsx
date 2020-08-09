import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Admin.module.css';
import DisplayForms from '../Forms/DisplayForms.jsx';

class Admin extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			x: "",
			activeForm: "",
			web3: props.web3
		}
		this.accounts = props.accounts;
		this.contract = props.contract;
	}
	
	addPatient = async => {
		console.log('add new patient');
		this.setState({
			 x:"Patient",
			 activeForm: "PatientForm"
		});
	}
	addDoctor = async => {
		console.log("add new doctor");
		this.setState({
			 x:"Add Doctor",
			 activeForm: "AddDoctorForm"
		});
	}
	assignDoctor = async => {
		console.log("Assign a new doctor");
		this.setState({
			 x:"Assign Doctor",
			 activeForm: "AssignDoctorForm"
		});
	}

	render(){
		
		return (
		<div>
			<center><h2 className="display-2">Patient List</h2></center>
			<center><h2 className="display-2">Roles that Admin can perform</h2></center>
			<br />
			<br />
			<div className={styles.buttonFormDisplay}>
				<Button variant="info" onClick={this.addPatient}>Add a new Patient</Button>
				<Button variant="info" onClick={ this.addDoctor }>Add a new Doctor</Button>
				<Button variant="info" onClick={ this.assignDoctor }>Add a new Admin</Button>
			</div>
			<br />
			<br />
			<DisplayForms activeForm={this.state.activeForm}/>
		</div>
	)
	}
}

export default Admin;