import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserAdd() {
  let url = "http://localhost:3000/users";
  let navigate = useNavigate();

  let [name, SetName] = useState("");
  let [age, SetAge] = useState("");

  async function addUser() {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    });

    if (response.ok) {
      alert("User Added");
      navigate("/users");
    } else {
      alert("User Not Added");
    }
  }

  return (
    <>
      <div>
        <h1>Add User</h1>
        <input
          className="border m-2"
          type="text"
          placeholder="Enter Name"
          onChange={(event) => SetName(event.target.value)}
        />
        <input
          className="border m-2"
          type="text"
          placeholder="Enter Age"
          onChange={(event) => SetAge(event.target.value)}
        />
        <button
          className="border w-30 m-2 bg-red-200"
          onClick={addUser}
        >
          Add User
        </button>
      </div>
    </>
  );
}