import React from 'react';
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
            <div>
                This is donation dashboard
            </div>
        )
    }
}
