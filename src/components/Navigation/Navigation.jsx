import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={css.container}>
      <h2 className={css.header}>Navigation</h2>
    </div>
  );
}

// export default function UserTodos() {
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.header}>User Todos</h2>
//       {/* <ul className={styles.list}>
//                 {todos.map((todo) => (
//                     <li
//                         key={todo.id}
//                         className={
//                             todo.completed ? styles.completed : styles.pending
//                         }
//                     >
//                         {todo.todo}
//                     </li>
//                 ))}
//             </ul> */}
//     </div>
//   );
// }
