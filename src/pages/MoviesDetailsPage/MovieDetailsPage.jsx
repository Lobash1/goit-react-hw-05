export default function MovieDetailsPage() {
  return (
    <div>
      <h2>this is MovieDetailsPage</h2>
    </div>
  );
}

// import { useEffect, useRef, useState } from "react";
// import {
//   Link,
//   NavLink,
//   Outlet,
//   useLocation,
//   useParams,
// } from "react-router-dom";
// import { fetchUserById } from "../userService";
// import UserInfo from "../components/UserInfo/UserInfo";

// export default function UserDetailsPage() {
//   const { userId } = useParams();
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const location = useLocation();
//   const backLinkHref = useRef(location.state);

//   useEffect(() => {
//     async function getUsers() {
//       try {
//         setIsLoading(true);
//         setError(false);
//         const data = await fetchUserById(userId);
//         setUser(data);
//       } catch {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     getUsers();
//   }, [userId]);

//   return (
//     <div>
//       <Link to={backLinkHref.current}>GO bACK</Link>

//       {isLoading && <b> Loading.....</b>}
//       {error && <b> Error.....</b>}
//       {user && <UserInfo user={user} />}

//       <ul>
//         <li>
//           <NavLink to="posts">Posts</NavLink>
//         </li>
//         <li>
//           <NavLink to="todos">Todos</NavLink>
//         </li>
//       </ul>
//       <Outlet />
//     </div>
//   );
// }
