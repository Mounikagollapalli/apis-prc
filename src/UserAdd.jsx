import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserAdd() {
  let url = "http://localhost:3000/users/";

  let navigate = useNavigate();

  let [name, SetName] = useState("");
  let [age, SetAge] = useState("");

  async function addUser() {
    try {
      await axios.post(url, { name, age });
      alert("User Added");
      navigate("/users");
    } catch (error) {
      console.log(error);
    }

    // let response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name, age }),
    // });

    // if (response.ok) {
    //   alert("User Added");
    //   navigate("/users");
    // } else {
    //   alert("User Not Added");
    // }
  }

  return (
    <>
      <div>
        <h1>Add User</h1>

        <div>
         {/* className="border flex justify-center align-middle m-4" > */}

        <label>Enter Name:</label>
        <input
          className="border m-2"
          type="text"
          placeholder="Enter Name"
          onChange={(event) => SetName(event.target.value)}
        />

        <label>Enter Age:</label>
        <input
          className="border m-2"
          type="text"
          placeholder="Enter Age"
          onChange={(event) => SetAge(event.target.value)}
        />


        </div>

        <button
          className="border w-30 m-2 bg-red-200 align-middle"
          onClick={addUser}
        >
          Add User
        </button>
      </div>
    </>
  );
}