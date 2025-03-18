// import { useEffect, useState } from "react"
// import { fetchUsers } from "../userService"

// export default function UsersPages () {
//     const [users, setUsers] = useState([])

//     useEffect(() => {
//         async function getUsets() {
//             try {
//                 const data = await fetchUsers()
//                 setUsers(data)
//             } catch {
//         console.error(users);
//             }
//         }
//         getUsets()
//     }, [])

//     return 'users'
// }