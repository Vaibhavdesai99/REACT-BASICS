import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const fnameInput = (e) => {
    // console.log(e.target.value);
    setFname(e.target.value);
  };
  const LnameInput = (e) => {
    setLname(e.target.value);
  };
  const EmialInput = (e) => {
    setemail(e.target.value);
  };
  const phoneInput = (e) => {
    setPhone(e.target.value);
  };

  // const AllInputfields = {
  //   fname,
  //   Lname,
  //   email,
  //   phone
  // };
  const FormSubmitHandler = (e) => {
    e.preventDefault();
    if (fname === "" || Lname === "" || email === "" || phone === "") {
      setError(true);
    } else {
      console.log("FormSubmitted Successfully");
      setError(false);
    }
  };
  return (
    <div className="App">
      <form onSubmit={FormSubmitHandler}>
        {error && <div>Error : missing Input Field </div>}
        <h1>Validating Form</h1>
        <label>FirstName</label>
        <input type="text" onChange={fnameInput} value={fname} />
        <br />
        <label>lastName</label>
        <input type="text" onChange={LnameInput} value={Lname} />
        <br />
        <label>Email</label>
        <input type="email" onChange={EmialInput} value={email} />
        <br />
        <label>PhoneNmber</label>
        <input type="number" onChange={phoneInput} value={phone} />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}
