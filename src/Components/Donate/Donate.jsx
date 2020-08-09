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
        console.log("Public Records Data: " + publicRecordsArray);
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
        } catch(err) {
        console.log(err);
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <center><h1 className="display-2">Donate to our patients</h1></center>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Patient Name</th>
                        <th>Disease</th>
                        <th>Eth Address</th>
                        <th>Donate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><Button variant="success">Donate 0.01 Eth</Button></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td><Button variant="success">Donate 0.01 Eth</Button></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td><Button variant="success">Donate 0.01 Eth</Button></td>
                        </tr>
                    </tbody>
                    </Table>
            </div>
        )
    }
}
