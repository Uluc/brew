import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import {
  StyledInput,
  StyledSubmissionButton,
  StyledForm,
  StyledLabel,
  InputPageContainer,
} from "./StyledDishModal";

function NewDishModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Dish
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddDish/>
      </Modal.Body>
    </Modal>
  );
}

const AddDish = () => {
    const [price, setPrice] = useState("");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //   api.login(email, password);
    };
    return (
      <InputPageContainer>
        {/* <PageHeader> New Dish </PageHeader> */}
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>Name</StyledLabel>
          <StyledInput
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
  
          <StyledLabel>Price</StyledLabel>
          <StyledInput
            type="int"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
  
          <StyledLabel>Description</StyledLabel>
          <StyledInput
            type="text"
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
  
          <StyledSubmissionButton>Submit</StyledSubmissionButton>
        </StyledForm>
      </InputPageContainer>
    );
  }

export default NewDishModal;
