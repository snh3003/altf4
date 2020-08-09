import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import styles from './ManageCard.module.css';

export const ManageCard = () => {

    function handleClick(){
        window.location.replace("https://www.w3schools.com");
    }

    return (
        <div className={styles.cardbg}>
            <center><h2 className="display-3">Manage patients data</h2></center>
            <CardGroup className="container-fluid">
                <Card bg="info">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title> Card Title </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    <Button variant="dark" onClick={handleClick}>Go somewhere</Button>
                    </Card.Body>
                    
                </Card>
                <Card bg="primary">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title> Card Title </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    <Button variant="dark" onClick={handleClick}>Go somewhere</Button>
                    </Card.Body>
                    
                </Card>
            </CardGroup>
            <br />
            <CardGroup className="container-fluid">
                <Card bg="info">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title> Card Title </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    <Button variant="dark" onClick={handleClick}>Go somewhere</Button>
                    </Card.Body>
                    
                </Card>
                <Card bg="primary">
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                    <Card.Title> Card Title </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    <Button variant="dark" onClick={handleClick}>Go somewhere</Button>
                    </Card.Body>
                    
                </Card>
            </CardGroup>      
            <hr />            
        </div>
    )
}