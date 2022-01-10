import React, { useState } from "react";
import database from "../firebasedata";
import { ref, set } from "firebase/database";

const AddForm = () => {
  const [setvalue, setSetvalue] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  let name, value;
  const getuserdata = (e) => {
    name = e.target.name;
    value = e.target.value;

    setSetvalue({ ...setvalue, [name]: value });
  };

  const dataPost = async (e) => {
    e.preventDefault();
    const { name, email, phone, address } = setvalue;

    if (name && email && phone && address) {

      const data = await set(ref(database,phone), {
        name,
        email,
        phone,
        address
      }).then(data=>{
        setSetvalue({
          name: "",
          email: "",
          phone: "",
          address: "",
        });
        console.log(data);
        alert("Add Data Successful");
      })
      
    } else {
      alert("Please Fill The Form");
    }
  };

  return (
    <div className="container">
      <div className="m-3 card border-success">
        <div className="card-header bg-transparent border-success">
          Add Data To Firebase
        </div>
        <form className="m-3" method="POST">
          <input
            className="form-control mb-3"
            name="name"
            type="text"
            placeholder="Enter FullName"
            value={setvalue.name}
            onChange={getuserdata}
            autocomplete="off"
            required
          />
          <input
            className="form-control mb-3"
            name="email"
            type="email"
            placeholder="Enter Your Email"
            value={setvalue.email}
            onChange={getuserdata}
            autocomplete="off"
            required
          />
          <input
            className="form-control mb-3"
            name="phone"
            type="number"
            placeholder="Enter Your Phone Number"
            value={setvalue.phone}
            onChange={getuserdata}
            autocomplete="off"
            required
          />
          <input
            className="form-control mb-3"
            name="address"
            type="text"
            placeholder="Enter Your Address"
            value={setvalue.address}
            onChange={getuserdata}
            autocomplete="off"
            required
          />
          <button type="submit" className="btn btn-primary" onClick={dataPost}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
