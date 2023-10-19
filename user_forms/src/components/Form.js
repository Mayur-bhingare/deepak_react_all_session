import { useState } from "react";

let Form = () => {
  let initialForm = {
    userName: "",
    email: "",
    mobile: "",
    address: "",
  };

  // state
  let [newUser, setNewUser] = useState({ ...initialForm });
  let [userList, setUserList] = useState([]);

  let inputChange = (event) => {
    let { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  let reset = () => {
    setNewUser({ ...initialForm });
  };

  let saveData = () => {
    let _userList = [...userList];
    _userList.push({ ...newUser });
    setUserList(_userList);
    reset();
    alert("User Registration Done Successfully.");
    // setUserList([...userList, { ...newUser }]);
  };
  return (
    <>
      <section className="col-lg-6 col-md-6 col-8 mt-3 m-auto border-1 shadow-sm p-4">
        <p className="text-center h3 text-primary ">User Registration</p>
        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              value={newUser.userName}
              onChange={inputChange}
              name="userName"
            />
            <label htmlFor="">Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={newUser.email}
              onChange={inputChange}
              name="email"
            />
            <label htmlFor="">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Mobile Number"
              value={newUser.mobile}
              onChange={inputChange}
              name="mobile"
            />
            <label htmlFor="">Mobile Number</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Enter Address"
              rows={4}
              style={{ resize: "none" }}
              value={newUser.address}
              onChange={inputChange}
              name="address"
            ></textarea>
            <label htmlFor="">Address</label>
          </div>

          <div className="mb-3 text-center ">
            <button
              className="btn btn-success "
              type="button"
              onClick={saveData}
            >
              <i className="fa fa-floppy-o" aria-hidden="true"></i> Save
            </button>
            <button
              className="btn btn-outline-danger ms-2"
              type="button"
              onClick={reset}
            >
              <i className="fa fa-history" aria-hidden="true"></i> Reset
            </button>
          </div>
        </form>
      </section>
      <section className="col-10 m-auto">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th width="10%">Sr No</th>
              <th width="28%">First</th>
              <th width="17%">Email</th>
              <th width="17%">Mobile</th>
              <th width="27%">Address</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((value, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{value.userName}</td>
                  <td>{value.email}</td>
                  <td>{value.mobile}</td>
                  <td>{value.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Form;
