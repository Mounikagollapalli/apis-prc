import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserUpdate() {
    let { id } = useParams();
    let navigate = useNavigate();

    let url = "http://localhost:3000/users/";

    let [name, setName] = useState("");
    let [age, setAge] = useState("");

    async function getUser() {
        let response = await fetch(url + id);
        response = await response.json();

        setName(response.name);
        setAge(response.age);
    }

    useEffect(() => {
        getUser();
    }, []);

    async function UpdateUser() {
        try {
            await axios.put(url + id, { name, age });
            alert("User Updated");
            navigate("/users");
        } catch (error) {
            console.log(error);
        }

        // console.log(name,age)
        // let response=await fetch(url+id,{
        //     method:'PUT',
        //     body: JSON.stringify({name,age})
        // });
        // response=await response.json()
        // console.log(response)

        // if(response){
        //     alert("user updated")
        // }else{
        //     alert("something went wrong")
        // }
    }

    return (
        <>
            <div className="border flex justify-center m-4 align-middle">
                <div>
                    <label>Enter Name:</label>
                    <input
                        className=" border m-4"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter a New Name.."
                    />
                    <br />

                    <label>Enter Age:</label>
                    <input
                        className=" border m-4"
                        type="text"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                        placeholder="Enter a New Age.."
                    />
                    <br />

                    <button
                        onClick={UpdateUser}
                        className="border w-30 m-6 bg-red-200"
                    >
                        Update
                    </button>
                </div>
            </div>
        </>
    );
}