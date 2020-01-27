import React from "react";
import { Div, Table1, Label1, Div1, Form1 } from "./styled";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { MdDelete, MdModeEdit } from "react-icons/md";

//import Forms from './form';
const Mystudents = [
  { id: 1, name: "Abc", roll_no: "1711", class: "MCA" },
  { id: 2, name: "Pqr", roll_no: "1711", class: "MCA" },
  { id: 3, name: "Xyz", roll_no: "1711", class: "MCA" }
];

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: Mystudents,
      modal: false,
      selectedItem: null,
      selectedIndex: null,
      name: "",
      classs: "",
      roll: ""
    };
    this.initialState = this.state;
  }

  // clear = e => {
  //   if ((e.target.value.match("") = "")) {
  //     this.setState({
  //       name: e.target.value,
  //       roll: e.target.value,
  //       class: e.target.value
  //     });
  //   }
  // };

  userData = e => {
    let Name = this.state.name;
    Name = e.target.value;
    this.setState({ name: Name });
  };
  userRoll = e => {
    let Roll = this.state.roll;
    Roll = e.target.value;
    this.setState({ roll: Roll });
  };
  userClass = e => {
    let Cla = this.state.classs;
    Cla = e.target.value;
    this.setState({ classs: Cla });
  };

  addData = () => {
    const newData = [...this.state.students];
    console.log("hello", this.state.name);
    if (
      this.state.name === "" ||
      this.state.roll === "" ||
      this.state.classs === ""
    ) {
      alert("field required");
    } else {
      newData.push({
        name: this.state.name,
        roll_no: this.state.roll,
        class: this.state.classs
      });
      this.setState({ students: newData });
    }
  };

  toggle = index => {
    this.setState({
      modal: !this.state.modal,
      selectedItem: this.state.students[index],
      selectedIndex: index
    });
  };

  delete = index => {
    let students = [...this.state.students];
    students.splice(index, 1);
    this.setState({ students });
  };

  editName = (event, index) => {
    let students = [...this.state.students];
    //console.log(item);
    students[index].name = event.target.value;
    this.setState({ students });
  };

  editRoll = (event, index) => {
    let students = [...this.state.students];
    //console.log(item);
    students[index].roll_no = event.target.value;
    this.setState({ students });
  };

  editClass = (event, index) => {
    let students = [...this.state.students];
    //console.log(item);
    students[index].class = event.target.value;
    this.setState({ students });
  };
  discard = index => {
    this.setState({
      students: [
        { id: 1, name: "Abc", roll_no: "1711", class: "MCA" },
        { id: 2, name: "Pqr", roll_no: "1711", class: "MCA" },
        { id: 3, name: "Xyz", roll_no: "1711", class: "MCA" }
      ]
    });
  };

  render() {
    const { selectedItem, selectedIndex } = this.state;
    //const { name, roll,classs } = newData;
    return (
      <Div>
        <Form1>
          <Div1>
            <p>Add New Entry In Table</p>
          </Div1>
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input
              type="text"
              name="name"
              id="Name"
              placeholder="Student Name"
              onChange={this.userData}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Roll">Roll-No</Label>
            <Input
              name="roll"
              id="Roll"
              placeholder="Roll-No"
              onChange={this.userRoll}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Class">Class</Label>
            <Input
              name="classs"
              id="Class"
              placeholder="Class"
              onChange={this.userClass}
            />
          </FormGroup>

          <Button onClick={this.addData}>Add</Button>
        </Form1>
        <Modal
          isOpen={this.state.modal}
          toggle={() => {
            this.toggle();
            this.discard();
          }}
        >
          <ModalHeader
            toggle={() => {
              this.toggle();
              this.discard();
            }}
          >
            Edit Your Data
          </ModalHeader>
          <ModalBody>
            <Label1>Name : </Label1>
            <input
              value={selectedItem ? selectedItem.name : ""}
              onChange={e => this.editName(e, selectedIndex)}
            ></input>
            <br></br>
            <Label1>Roll-No : </Label1>
            <input
              value={selectedItem ? selectedItem.roll_no : ""}
              onChange={e => this.editRoll(e, selectedIndex)}
            ></input>
            <br></br>
            <Label1>Class : </Label1>
            <input
              value={selectedItem ? selectedItem.class : ""}
              onChange={e => this.editClass(e, selectedIndex)}
            ></input>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{if (
      this.state.name === "" ||
      this.state.roll === "" ||
      this.state.classs === ""
    ) {
      alert("field required")
    }else{
      this.toggle()
    }}}>
              Save
            </Button>
            <Button
              color="secondary"
              onClick={() => {
                this.toggle();
                this.discard();
              }}
            >
              Discard
            </Button>
          </ModalFooter>
        </Modal>
        <Div1>
          <p>STUDENT DATA</p>
        </Div1>
        <Table1>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Roll No.</th>
              <th>Class</th>
            </tr>
          </thead>

          {this.state.students.map((item, index) => (
            <tbody>
              <th>{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.roll_no}</td>
              <td>{item.class}</td>
              <td className="fl">
                <Button className="mrg" onClick={() => this.toggle(index)}>
                  <MdModeEdit />
                </Button>
                <Button className="delete" onClick={this.delete}>
                  <MdDelete />
                </Button>
              </td>
            </tbody>
          ))}
        </Table1>
      </Div>
    );
  }
}

export default Student;
