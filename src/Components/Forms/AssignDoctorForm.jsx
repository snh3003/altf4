import React from 'react';
import { Form, Button, Jumbotron, Col } from 'react-bootstrap';

export class AssignDoctorForm extends React.Component{
    constructor() {
        super();
        this.state = {
          docAddress: "",
          patientId: "",
          patientAddress: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(event) {
        // e.g.: send to remote API
        event.preventDefault();
        console.log("state", this.state);
        this.handleAssignDoctor(this.state.docAddress, this.state.patientId, this.state.patientAddress);
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
    
      render() {
        return (
          <div className="container-fluid">
            <Jumbotron>
              <h3 className="display-5">Assign a Doctor</h3>
              <Form>
                <Form.Text className="text-muted">
                  We'll never share your details with anyone else.
                </Form.Text>
                <Form.Row>
                  <Col>
                    <Form.Control
                      name="DocID"
                      type="text"
                      placeholder="Enter Doctor ID"
                      onChange={this.handleChange}
                      required
                    />
                  </Col>
                </Form.Row>
                <br />
                <Form.Text>Patient ID: {this.state.patientID}</Form.Text>
                <Form.Text>Patient Address: {this.state.patientAdd}</Form.Text>
                <br />
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Tick if the entered info is correct"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                  Assign Doctor
                </Button>
              </Form>
            </Jumbotron>
          </div>
        );
      }
    }