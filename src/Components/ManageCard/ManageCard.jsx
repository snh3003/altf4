import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import styles from './ManageCard.module.css';

export const ManageCard = () => {

    function handleClickAdmin(){
        window.location.replace("https://snh3003.github.io/altf4/admin");
        
    }

    function handleClickDonote(){
        window.location.replace("https://snh3003.github.io/altf4/donate");    
    }

    function handleClickDoctor(){
        window.location.replace("https://snh3003.github.io/altf4/doctor");    
    }

    return (
        <div className={styles.cardbg}>
            <br />
            <br />
            <center><h2 className="display-3">Manage patients data</h2></center>
            <br />
            <br />
            <CardGroup className="container-fluid">
                <Card bg="success">
                    <center>
                    <Card.Header>Are you an Admin?</Card.Header>
                    <Card.Body>
                    <Card.Title> Want to add a new patient? Add a new admin? or doctor? </Card.Title>
                    <Button variant="dark" onClick={handleClickAdmin}>Click here</Button>
                    </Card.Body>
                    </center>
                </Card>
                <Card bg="primary">
                    <center>
                        <Card.Header>Donor?</Card.Header>
                        <Card.Body>
                        <Card.Title> Want to donate money for treatment of our patients? </Card.Title>
                        <Button variant="dark" onClick={handleClickDonote}>Click here</Button>
                        </Card.Body>
                    </center>
                </Card>
                <Card bg="info">
                    <center>
                        <Card.Header>Are you a doctor?</Card.Header>
                        <Card.Body>
                        <Card.Title> Want to add or update patient's record? </Card.Title>
                        <Button variant="dark" onClick={handleClickDoctor}>Click here</Button>
                        </Card.Body>
                    </center>
                </Card>
            </CardGroup>
            <br />
            <br />      
            <hr />            
        </div>
    )
}