// import { Link, useLocation } from "react-router";
import css from "./MovieList.module.css";

export default function MovieList() {
  return (
    <div>
      <ul className={css.list}>
        <li>
          <p>this MovieList</p>
        </li>
      </ul>
    </div>
  );
}

// export default function UserList({ users }) {
//   const location = useLocation();
//   return (
//     <ul className={css.list}>
//       {users.map((user) => (
//         <li key={user.id} className={css.listItem}>
//           <h3 className={css.username}>
//             {user.firstName} {user.lastName}
//           </h3>
//           <p className={css.text}>{user.email}</p>
//           <p className={css.text}>{user.phone}</p>

//           <Link
//             to={`/dashboard/${user.id}`}
//             className={css.link}
//             state={location}
//           >
//             Details
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }
