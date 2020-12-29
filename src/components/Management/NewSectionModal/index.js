import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import {
  StyledInput,
  StyledSubmissionButton,
  StyledForm,
  StyledLabel,
  InputPageContainer,
} from "./StyledSectionModal";

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
          New Section
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddSection edit= {props.editModal}/>
      </Modal.Body>
    </Modal>
  );
  }

const AddSection = ({edit}) => {
    const [name, setName] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //   api.login(email, password);
    };
    return (
      <InputPageContainer>
        {/* <PageHeader> New Dish </PageHeader> */}
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>Section Name</StyledLabel>
          <StyledInput
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
  
          <StyledSubmissionButton>Submit</StyledSubmissionButton>
          <h1> {edit} </h1>
        </StyledForm>
        
      </InputPageContainer>
    );
  }

export default NewDishModal;
