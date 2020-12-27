// import React, { useState } from "react";
// import {
//   StyledInput,
//   StyledSubmissionButton,
//   StyledForm,
//   StyledLabel,
//   InputPageContainer,
// } from "./Management/NewDishModal/StyledDishModal";

// function MenuManager() {
//   const [price, setPrice] = useState("");
//   const [name, setName] = useState("");
//   const [desc, setDesc] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     //   api.login(email, password);
//   };
//   return (
//     <InputPageContainer>
//       {/* <PageHeader> New Dish </PageHeader> */}
//       <StyledForm onSubmit={handleSubmit}>
//         <StyledLabel>Name</StyledLabel>
//         <StyledInput
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <StyledLabel>Price</StyledLabel>
//         <StyledInput
//           type="int"
//           id="price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />

//         <StyledLabel>Description</StyledLabel>
//         <StyledInput
//           type="text"
//           id="desc"
//           value={desc}
//           onChange={(e) => setDesc(e.target.value)}
//         />

//         <StyledSubmissionButton>Submit</StyledSubmissionButton>
//       </StyledForm>
//     </InputPageContainer>
//   );
// }

// export default MenuManager;
