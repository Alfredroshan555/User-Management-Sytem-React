import React from "react";
import { useState } from "react";
import {
  Icon,
  Table,
  Form,
  Input,
  Modal,
  Header,
  Button,
  Radio,
  Select,
  Image,
} from "semantic-ui-react";

const List = () => {
  // User Information
  const userData = [
    {
      id: 1,
      name: "Anoop Krishnan",
      email: "anoop@gmail.com",
      exp: "2 years 3 months",
    },
    {
      id: 2,
      name: "Deepak Chopra",
      email: "deepak@gmail.com",
      exp: "3 years 3 months",
    },
  ];
  const [data, setData] = useState(userData);
  // New user information
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [exp, setExp] = useState("");
  const [open, setOpen] = React.useState(false);

  // Remove User
  const removeUser = (id) => {
    setData(data.filter((i) => i.id !== id));
  };
  const addUser = (name, email, exp) => {
    setOpen(false);
    if (name !== "" && email !== "" && exp !== "") {
      const user = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        email: email,
        exp: exp,
      };
      setData([...data, user]);
    }
  };


  return (
    <>
      <Modal
        closeIcon
        open={open}
        trigger={<Button inverted color='green'>Add User</Button>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header icon="archive" content="Add New User Here" />
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                control={Input}
                label="Name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Field
                control={Input}
                label="Email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Field
                control={Input}
                label="Experience"
                placeholder="Experience"
                onChange={(e) => setExp(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={() => addUser(name, email, exp)}>
            <Icon name="checkmark"  /> Add
          </Button>
        </Modal.Actions>
      </Modal>

      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Avatar</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Experience</Table.HeaderCell>
            <Table.HeaderCell>Remove User</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((i) => {
            return (
              <Table.Row>
                <Table.Cell>
                  <Image
                    avatar
                    src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                  />
                </Table.Cell>
                <Table.Cell>{i.name}</Table.Cell>
                <Table.Cell>{i.email}</Table.Cell>
                <Table.Cell>{i.exp}</Table.Cell>
                <Table.Cell>
                  <Icon
                    className="trash"
                    onClick={() => removeUser(i.id)}
                  ></Icon>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default List;
