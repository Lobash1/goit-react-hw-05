export default function MoviesPage() {
  return (
    <div>
      <h2>this is MoviesPage</h2>
    </div>
  );
}

// import { useEffect, useState } from "react";
// import { fetchUsers } from "../userService";
// import UserList from "../components/UserList/UserList";
// import { useSearchParams } from "react-router-dom";
// import { useDebounce } from "use-debounce";

// export default function UsersPages() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get("query") ?? "";

//   const [debaunceQuery] = useDebounce(query, 300);

//   const changeSearchText = (event) => {
//     const nextParams = new URLSearchParams(searchParams);

//     if (event.target.value !== "") {
//       nextParams.set("query", event.target.value);
//     } else {
//       nextParams.delete("query");
//     }

//     setSearchParams(nextParams);
//   };

//   useEffect(() => {
//     async function getUsers() {
//       try {
//         setLoading(true);
//         setError(false);
//         const data = await fetchUsers(debaunceQuery);
//         setUsers(data);
//       } catch {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }

//     getUsers();
//   }, [debaunceQuery]);

//   return (
//     <div>
//       <input type="text" value={query} onChange={changeSearchText} />
//       <h1>Users admin</h1>
//       {loading && <b>Loading users...</b>}
//       {error && <b>Whoops there was an Error, plz reload the page...</b>}
//       {users.length > 0 && <UserList users={users} />}
//     </div>
//   );
// }
