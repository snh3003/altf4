import React from 'react';
import PatientForm from './PatientForm';
import { AddDoctorForm } from './AddDoctorForm.jsx';
// import { AssignDoctorForm } from './AssignDoctorForm.jsx';
import { AddNewAdmin } from './AddNewAdmin';
const DisplayForms = ({ activeForm }) => {
   if(activeForm === 'PatientForm'){
    return(
        <div>
            <center>
                <h2 className="display-3"> Patient Form</h2>
                <PatientForm />    
            </center>
            
        </div>
    )
   } else if (activeForm === 'AddDoctorForm'){
    return(
        <div>
            <center>
                <h2 className="display-3"> Add Doctor Form</h2>
                <AddDoctorForm />
            </center>
            
        </div>
    )
   }else{
    return(
        <div>
            <center>
                <h2 className="display-3"> Add a new admin</h2>
                <AddNewAdmin />    
            </center>
            
        </div>
    )
   }
}

export default DisplayForms;