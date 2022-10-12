import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [fullData, setFullData] = useState({fname: "",lname: "",email: "",phone: "",});

  const inputEvent = (e) => {
    setFullData({
      ...fullData,
      [e.target.name]: e.target.value,
    });
    // const { name, value } = e.target;
    // setFullName((prevState) => {
    //   return {
    //     ...prevState,
    //     [name]: value,
    //   };
    // });
  }
  const onSubmits = (e) => {
    e.preventDefault();
    console.log(fullData);
  }

  return (
    <>
      <div className="myform1">
        <div className="myform1_1">
          <form className="rowg" onSubmit={onSubmits}>
            <h2>{fullData.fname}</h2>
            <h2>{fullData.lname}</h2>
            <h2>{fullData.email}</h2>
            <h2>{fullData.phone}</h2>

            <div className="col-up">
              <div className="col-md1">
                <label for="inputFirstName" className="form-label">First Name</label>
                <label for="inputLastName" className="form-label">Last Name</label>
                <label for="inputEmailId" className="form-label">Email id</label>
                <label for="inputPhoneNumber" className="form-label" >Phone Number</label>
              </div>
              <div className="col-md1">
                <input type="text" className="form-control" name="fname" onChange={inputEvent} value={fullData.fname} />
                <input type="text" className="form-control" name="lname" onChange={inputEvent} value={fullData.lname} />
                <input type="email" className="form-control" name="email" onChange={inputEvent} value={fullData.email} />
                <input type="number" className="form-control" name="phone" onChange={inputEvent} value={fullData.phone} />
              </div>
            </div>

            <div className="col-dn">
              <button type="submit" className="btn">Sign in</button>
            </div>

          </form>
        </div>
      </div>


    </>
  );
}

export default Form;