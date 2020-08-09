import React from 'react';
import { Table, Button} from 'react-bootstrap';
import styles from './Donate.module.css';

export class Donate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            publicRecordsArray: []
        }
        this.accounts = props.accounts;
        this.contract = props.contract;
    }

    componentDidMount = () => {
        console.log(this.state.publicRecordsArray);
        this.handlePublicMedicalRecord();
    }

    //donate dashboard
    //table
    handlePublicMedicalRecord = async () => {
        try {
        let count = await this.contract.methods.publicRecordsMappingCount().call();
        let publicRecordsArray = [];
        for (let i = 0; i < count; i++){
            var x = await this.contract.methods.publicRecordsMapping(i).call();
            publicRecordsArray.push(x);
        }
        this.setState({
            publicRecordsArray: publicRecordsArray
        })
        console.log("Public Records Data: " + JSON.stringify(publicRecordsArray));
        } catch (err) {
        console.log(err);
        }
        
    }

    //donate dashboard
    //button in every public medical record to donate
    handleDonateFunds = async (id) => {
        try {
            
        var x = await this.contract.methods.donateFunds(id)
        .send({
            from: this.accounts[0],
            gas: 300000,
            value: 10000000000000000
        })

        alert("Thank you for donating");

        } catch(err) {
        console.log(err);
        }
    }

    render(){
        const publicRecords = this.state.publicRecordsArray.map((i, index) => 
            <tr>
                <td>{i.id}</td>
                {/* <td>Mark</td> */}
                <td>{i.name}</td>
                <td>{i.patientAddressToDonateFunds}</td>
                <td><Button variant="success" onClick={(event) =>
                        this.handleDonateFunds(i.id)
                    }>Donate 0.01 Eth</Button></td>
            </tr>
        )
        return(
            <div className="container-fluid">
                <center><h1 className="display-2">Donate to our patients</h1></center>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Medical Condition</th>
                        <th>Patient Address</th>
                        <th>Donate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {publicRecords}
                    </tbody>
                    </Table>
            </div>
        )
    }
}
