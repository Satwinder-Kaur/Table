import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { Div1, Form1 } from "./styled";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: [{ name: "", roll: "", class: "" }]
    };
  }

  handleInput = (e, data) => {
    const { newData } = this.state;
    newData[data] = e.target.value;
    this.setState({ newData });
  };


  render() {
    return (
      <Form1>
        <Div1>
          <p>Add New Entry In Table</p>
        </Div1>
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input
            type="text"
            name={this.name}
            id="Name"
            placeholder="Student Name"
            onChange={e=>this.handleInput(e,'name')}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Roll">Roll-No</Label>
          <Input
            name={this.roll}
            id="Roll"
            placeholder="Roll-No"
            onChange={e=>this.handleInput(e,'name')}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Class">Class</Label>
          <Input
            name={this.class}
            id="Class"
            placeholder="Class"
            onChange={e=>this.handleInput(e,'name')}
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form1>
    );
  }
}
export default Forms;
