import React, { useState, useRef } from "react";

function MyForm() {
  const [inputs, setInputs] = useState({});
  const myFormRef = useRef(null);
  const myFormRefLname = useRef(null);
  const myFormRefMail = useRef(null);
  const myFormRefConMail = useRef(null);

  const handleChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.mail === inputs.confirmmail) {
      alert("Registration is successful!");
      document.getElementById("confirm").innerHTML = "Confirm your mail:";
      document.getElementById("confirm").style.color = "black";
      document.getElementById("confirmMail").style.borderColor = "gray";
      //console.log(inputs);
      addCookies();
      //console.log(document.cookie);
      removeValues();
    } else {
      document.getElementById("confirm").innerHTML = "Mail doesn't match!";
      document.getElementById("confirm").style.color = "red";
      document.getElementById("confirmMail").style.borderColor = "red";
    }
  };

  function removeValues() {
    setInputs("");
    myFormRef.current.value = "";
    myFormRefLname.current.value = "";
    myFormRefMail.current.value = "";
    myFormRefConMail.current.value = "";
  }

  function addCookies() {
    let name = "Fname=" + inputs.username + ";";
    let sname = "Sname=" + inputs.lastname + ";";
    let mail = "Mail=" + inputs.mail + ";";

    document.cookie = name + ";";
    document.cookie = sname + ";";
    document.cookie = mail + ";";
  }

  return (
    <div className="App shadow border rounded-3">
      <fieldset className="shadow-lg m-1 p-3">
        <div className="d-block text-end">
          <a
            href="https://react-bootstrap.netlify.app/forms/overview/"
            rel="noreferrer"
            target="_blank"
            className="p-1"
          >
            Help
          </a>
          <a
            href="https://translate.google.se/"
            rel="noreferrer"
            target="_blank"
            className="p-1"
          >
            Language
          </a>
        </div>
        <h3 className="text-center text-success m-3">Register</h3>

        <form onSubmit={handleSubmit} className="m-3 p-5">
          <h6 className="mb-3">Enter your details to register</h6>
          <hr />
          <div className="row shadow p-3">
            <div className="col-12">
              <label>
                Enter your First name:
                <input
                  ref={myFormRef}
                  type="text"
                  name="username"
                  value={inputs.username}
                  onChange={handleChange}
                  className="form-control"
                  required
                />{" "}
              </label>
            </div>
            <div className="col-12">
              <label>
                Enter your Last name:
                <input
                  ref={myFormRefLname}
                  type="text"
                  name="lastname"
                  value={inputs.lastname}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </label>
            </div>
            <div className="col-12">
              <label>
                Enter your mail:
                <input
                  ref={myFormRefMail}
                  type="email"
                  name="mail"
                  value={inputs.mail}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </label>
            </div>
            <div className="col-12">
              <label>
                <span id="confirm">Confirm your mail:</span>
                <input
                  ref={myFormRefConMail}
                  type="email"
                  name="confirmmail"
                  value={inputs.confirmmail}
                  onChange={handleChange}
                  className="form-control"
                  required
                  id="confirmMail"
                />
              </label>
              <br />
              <button
                type="submit"
                className="mt-3 me-2 btn btn-success"
                id="button"
              >
                Register
              </button>
              <button
                type="button"
                className="btn btn-success mt-3"
                onClick={removeValues}
              >
                Cancel
              </button>
            </div>{" "}
          </div>
        </form>
      </fieldset>
    </div>
  );
}
export default MyForm;
