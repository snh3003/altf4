import React from 'react';
import { Button, Card} from 'semantic-ui-react';

export class AssignDoctor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            patientsArray: []
        }
        this.accounts = props.accounts;
        this.contract = props.contract;
    }

    componentDidMount = () => {
        console.log(this.state.patientsArray);
        this.handleShowAllPatients();
    }

    //adminDashBoard show all patients
    handleShowAllPatients = async () => {
        try {
            // alert('check 0');
        var count = await this.contract.methods.patientMappingCount().call();
        console.log(count);
        let patientsArray = [];
        // alert("check 1");
        for (let i = 0; i < count; i++) {
            var x = await this.contract.methods.patientMapping(i).call();
            patientsArray.push(x);
        }
        // alert('check 2');
        this.setState({
            patientsArray: patientsArray
        })
        // alert('check 3');
        console.log("All Patients: " + JSON.stringify(this.state.patientsArray));   
        } catch (err) {
        console.log(err);
        }
        
    }

    render(){
        const patientList = this.state.patientsArray.map((i, index) => 
            <Card key={index}>
                <Card.Content>
                    <Card.Header>{i.name}</Card.Header>
                    <Card.Meta><strong>Eth Address</strong> {i.patientAddress}</Card.Meta>
                    <Card.Meta><strong>Email:</strong> {i.email}</Card.Meta>
                    <Card.Meta><strong>Phone Number:</strong> {i.phoneNo}</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='blue'>
                        Assign Doctor
                    </Button>
                    </div>
                </Card.Content>
            </Card>
        )
        return (
            <div>
                <center><h1 className="display-3">Patient List</h1>
                <Card.Group>
                  {patientList}
                </Card.Group>
                </center>
            </div>
        )
    }
}
