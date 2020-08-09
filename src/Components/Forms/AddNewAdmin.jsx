import React from 'react';
import { Form, Button, Jumbotron, Col } from 'react-bootstrap';

export class AddNewAdmin extends React.Component{
    constructor(){
        super();
        this.state={
            adminAddress: '',
            adminName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = async(event) => {
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
        this.handleAddNewAdmin(this.state.adminAddress);
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

  render(){
      return (
          <div>
              <Jumbotron>
                  <h3 className="display-5">Assign a Doctor</h3>
                  <Form>
                    <Form.Text>Fill the details of the new Admin</Form.Text>
                    <Form.Row>
                        <Col>
                            <Form.Control
                            name="AdminName"
                            type="text"
                            placeholder="Enter Admin Name"
                            onChange={this.handleChange}
                            required
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                name="AdminAddress"
                                type="text"
                                placeholder="Enter Admin Eth Address"
                                onChange={this.handleChange}
                                required
                            />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            label="Tick if the entered info is correct"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Add Admin
                    </Button>
                  </Form>
              </Jumbotron>
          </div>
      )
  }
}