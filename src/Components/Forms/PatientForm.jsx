import React from 'react';
import { Form, Button, Jumbotron, Col } from 'react-bootstrap';

class PatientForm extends React.Component {
    constructor() {
      super();
      this.state = {
        patientName: "",
        age: null,
        sex: "",
        email: "",
        patientAddress: "",
        phoneNo: null
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
      this.handleAddNewpatient(this.state.patientName, this.state.email, this.state.phoneNo, this.state.patientAddress);
    }
  
    render() {
      return (
        <div className="container-fluid">
          <Jumbotron>
            <h3 className="display-5">Enter Patient info</h3>
            <Form>
              <Form.Text className="text-muted">
                We'll never share your details with anyone else.
              </Form.Text>
              <Form.Row>
                <Col>
                  <Form.Control
                    name="patientName"
                    type="text"
                    placeholder="Patient name"
                    onChange={this.handleChange}
                    required
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="age"
                    type="number"
                    placeholder="Patient Age"
                    onChange={this.handleChange}
                    required
                  />
                </Col>
                <Col>
                  <Form.Control
                    name="sex"
                    type="text"
                    placeholder="Patient Sex"
                    onChange={this.handleChange}
                    required
                  />
                </Col>
              </Form.Row>
              <br />
              <Form.Group>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="phoneNo"
                  type="number"
                  placeholder="Phone number"
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="patientAddress"
                  type="text"
                  placeholder="Patient Eth Address"
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Tick if the entered info is correct"
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                Submit
              </Button>
            </Form>
          </Jumbotron>
        </div>
      );
    }
  }

export default PatientForm;