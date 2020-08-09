import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SerugoMedico.json";
import getWeb3 from "./getWeb3";
import { NavBar } from './Components/NavBar/NavBar';
import { Home } from './Components/Home/Home';
import { Doctor } from './Components/Doctor/Doctor';
import { Donate } from './Components/Donate/Donate.jsx';
import { AssignDoctor } from './Components/AssignDoctor/AssignDoctor';
import Admin from './Components/Admin/Admin';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Portis from '@portis/web3';
// import Web3 from 'web3';

const IPFS = require('ipfs-api');
const ipfs = new IPFS({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
});

class App extends Component {
  constructor(){
    super();
    this.state = { storageValue: 0, web3: null, accounts: null, contract: null };
  }
  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.

      // this.biconomy = new Biconomy(Web3, {apiKey: "LbOkM_BNx.b0a7a913-3db2-420e-a1d6-9ba4c8485367"});
      // const Web3 = new Web3(this.biconomy);
      // const customNode = {
      //   nodeUrl: 'https://rpc-mumbai.matic.today/',
      //   chainId: 80001,
      // };
      
      // const portis = new Portis('a7d2b587-1e58-465a-8b1e-2456836445bc', customNode);
      // this.web3 = new Web3(portis.provider);
      this.web3 = await getWeb3();
        // Use web3 to get the user's accounts.
        this.accounts = await this.web3.eth.getAccounts();
        console.log("Accounts from metamask: " + this.accounts);
        // Get the contract instance.
        this.networkId = await this.web3.eth.net.getId();
        console.log("Matic network ID: " + this.networkId);

        this.contract = new this.web3.eth.Contract(
        SimpleStorageContract.abi,
        SimpleStorageContract.networks[this.networkId] && SimpleStorageContract.networks[this.networkId].address,
        );
        console.log("Contract Instance : " + this.contract);
         
        // await this.handleDonorCount();

        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.

      this.setState({
        web3: this.web3,
        contractAddress: SimpleStorageContract.networks[this.networkId].address
      });
      console.log("Web3 Obj : " + this.state.web3);
      // portis.isLoggedIn().then(({ error, result }) => {
      //   console.log(error, result);
      // });
      // this.handleAddNewAdmin(0xb7d2662Df637fFDFB4de27D58126802477B96b6d);
      // alert("Donor data retrieved from contract");
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error(error);
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.  ${ JSON.stringify(error)}`
      );
      
    }
  };

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
  //patient dashboard
  //being called in handleRetrieveMedicalRecords
  handleRetrieveMedicalRecordsCount = async (address) => {
    try {
      var x = await this.contract.methods.retrieveMyMedicalRecordCount(address).call();
      console.log(`Patient medical records count: ${x}`);
    } catch (err) {
      console.log(err);
    }
  }
  //patient dashboard
  handleRetrieveMedicalRecords = async (address) => {
    try {
      const count = this.handleRetrieveMedicalRecordsCount(address);
      let medicalRecords = [];
      for (let i = 0; i < count; i++) {
        var x = await this.contract.methods.retrieveMyMedicalRecordCount(address, i).call();
        medicalRecords.push(x);
      }
      this.setState({
        medicalRecords: medicalRecords
      })
      console.log("Patient Medical Records" + this.state.medicalRecords);
    } catch (err) {
      console.log(err);
    }

  }
  //doctor dashboard
  handleAddMedicalRecord = async (patientId, medicalRecordName, ipfsHash) => {
    var x = await this.contract.methods.addMedicalRecord(
      patientId,
      medicalRecordName,
      ipfsHash
    ).send({ from: this.accounts[0] });
    console.log("Added medical record" + x);
  }
  //admin dashboard
  handleAddNewDoctor = async (docName, docAddress, docSpec) => {
    try {
      var x = await this.contract.methods(
        docName,
        docAddress,
        docSpec
      )
        .send({ from: this.accounts[0] });
      console.log("Added new doctor" + x);
    } catch (err) {
      console.log(err);
    }
  }
  //admin dashboard
  handleAddNewpatient = async (patientName, email, phoneNo, patientAddress) => {
    try {
      var x = await this.contract.methods.addNewPatient(
        patientName,
        email,
        phoneNo,
        patientAddress
      )
      .send({
        from: this.accounts[0]
      });
      console.log("New Patient Added" + x);
    } catch (err) {
      console.log(err);
    }
    
  }
  //admin dashboard
  handleAddNewAdmin = async (newAdminAddress) => {
    try {
      var x = await this.contract.methods.addNewAdmin(
        newAdminAddress
      )
        .send({ from: this.accounts[0] });
    console.log("Added new Admin" + x);
    } catch (err) {
      console.log(err);
    }
    
  }
  //adminDashBoard show all patients
  handleShowAllPatients = async () => {
    try {
      var count = await this.contract.methods.getPatientMappingCount().call();
      let patientsArray = [];
      for (let i = 0; i < count; i++) {
        var x = await this.contract.methods.patientMapping(i).call();
        patientsArray.push(x);
      }
      this.setState({
        patientsArray: patientsArray
      })
      console.log("All Patients: " + this.state.patientsArray);
    } catch (err) {
      console.log(err);
    }
    
  }
  //admin dashboard show all patients me jo patiens ka data dikhega, 
  //har patient data card me ye function call karne k lie button hoga
  handleAssignDoctor = async (docAddress, patientId, patientAddress) => {
    try {
      var x = await this.contract.methods.assignDoctor(docAddress, patientId, patientAddress)
      .send({ from: this.accounts[0] });
      console.log("Doc Assigned" + x);
    } catch (err) {
      console.log(err);
    }
  }

  //medical record file upload functions
  //to be used is addNewMedicalRecord page
    //capture medical record file
    captureMedicalFile = (event) => {
      event.stopPropagation()
      event.preventDefault()
      const file = event.target.files[0]
      let reader = new window.FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloadend = () => this.convertToBuffer(reader)
    };
    //converting file to buffer
    convertToBuffer = async (reader) => {
      const buffer = await Buffer.from(reader.result);
      this.setState({ buffer });
    };
    //upload file on ipfs
    handleUploadToIpfs = async () => {
      try {
        var x = await ipfs.add(this.state.buffer, (err, ipfsHash) => {
          console.log(err, ipfsHash);
          //setState by setting ipfsHash to ipfsHash[0].hash 
          this.setState({ ipfsHash: ipfsHash[0].hash });
        })
      } catch (err) {
        console.log(err);
      }
    }

  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path='/altf4' component={() => <Home contract={this.contract} accounts = {this.accounts} web3={this.state.web3}/>} />
            <Route path="/altf4/doctor" component={() => <Doctor contract={this.contract} accounts = {this.accounts} web3={this.state.web3}/>} />
            <Route path="/altf4/admin" component={() => <Admin contract={this.contract} accounts = {this.accounts}  web3={this.state.web3} />} />
            <Route path="/altf4/donate" component={() => <Donate contract={this.contract} accounts = {this.accounts} web3={this.state.web3} />} />
            <Route path="/altf4/assigndoctor" component={() => <AssignDoctor contract={this.contract} accounts = {this.accounts} web3={this.state.web3} />} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
