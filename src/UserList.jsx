import { useEffect, useState } from 'react'

function UserList() {
  let [users, setUsers] = useState([])
  let [loader, setLoader] = useState(false)

  let url = "http://localhost:3000/users"

  async function getUsers() {
    let response = await fetch(url)
    let data = await response.json()

    console.log(data)

    setUsers(data)
    setLoader(false)
  }

  useEffect(() => {
    setLoader(true)
    getUsers()
  }, [])

  async function deleteUser(id) {
    console.log("clicked" +'/'+ id)

    let response = await fetch(url +'/'+ id, {
      method: "DELETE"
    })

    if (response.ok) {
      alert("User Deleted")
      getUsers()
    } else {
      alert("Something went wrong..")
    }
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">
          Getting Users Through API
        </h1>

        <ul className="flex w-full border-2 justify-between">
          <li className="font-bold">Name</li>
          <li className="font-bold">Age</li>
          <li className="font-bold">Action</li>
        </ul>

        {!loader ? (
          users.map((user) => (
            <ul
              key={user.id}
              className="flex w-full border justify-between"
            >
              <li>{user.name}</li>
              <li>{user.age}</li>
              <li>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="border bg-red-300"
                >
                  Delete
                </button>
              </li>
            </ul>
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </>
  )
}

export default UserList