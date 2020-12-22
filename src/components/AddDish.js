import React, { useState } from "react";

function MenuManager() {
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //   api.login(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      
      <label>Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Price</label>
      <input
        type="int"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label>Description</label>
      <input
        type="text"
        id="desc"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

    </form>
  );
}

export default MenuManager;
