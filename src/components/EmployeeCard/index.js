import React from "react";
import "./style.css";

function EmployeeCard({lastName, firstName, email, phone, picture, removeEmployee, id}) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={`${firstName}-${lastName}`} src={picture} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {`${firstName} ${lastName}`}
          </li>
          <li>
            <strong>Email:</strong> {email} 
          </li>
          <li>
            <strong>Phone Number:</strong> {phone}
          </li>
        </ul>
      </div>
      <button onClick={() => removeEmployee(id)} className="remove btn btn-sm btn-danger">
        X
      </button>
    </div>
  );
}

export default EmployeeCard;
