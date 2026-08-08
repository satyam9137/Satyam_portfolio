import Navbar from './components/navbar'
import Home from './components/Home'
import About from './About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
// import Experience from './components/Experience'
import Contact from './components/Contact'
import VisitorCounter from './components/VisitorCounter'
// ...


function App() {
  return (
    <section id="center">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Contact />
      <VisitorCounter />
      <Footer />
    </section>
  )
}

export default App


// import axios from "axios"
// import { useState, useEffect } from "react"
// export default function Signup() {
//   const [users, setUsers] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [formData, setFormData] = useState(
//     {
//       name: "",
//       email: "",
//       password: ""
//     }
//   );
//   useEffect(() => {
//     fetchUsers();
//   }, []);
// const deleteUser = async (id) => {
//   try {
//     await axios.delete(`http://localhost:3000/deleteUser/${id}`);

//     alert("User deleted successfully");

//     // Fetch updated users
//     fetchUsers();

//   } catch (error) {
//     console.log(error);
//   }
// };
// const handleUpdate = (user) => {
//   setFormData({
//     name: user.name,
//     email: user.email,
//     password: user.password,
//   });

//   setEditId(user._id);
// };
//   const fetchUsers = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/users");

//       const data = await response.json();

//       if (response.ok) {
//         setUsers(data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//  const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     let response;

//     if (editId) {
//       response = await axios.put(
//         `http://localhost:3000/updateUser/${editId}`,
//         formData
//       );
//     } else {
//       response = await axios.post(
//         "http://localhost:3000/signup",
//         formData
//       );
//     }

//     alert(response.data.message);

//     fetchUsers();

//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//     });

//     setEditId(null);

//   } catch (error) {
//     console.log(error);
//   }
// };
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   return (
//     <>
//       <div style={{ maxWidth: "400px", margin: "50px auto" }}>
//         <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", backgroundColor: "black", color: "white", padding: "20px", borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}>
//           <h2>Registration Page</h2>
//           <br></br>
//           <label>Name</label>
//           <input placeholder="Enter your name" style={{ backgroundColor: "gray", color: "black" }} type="text" name="name" value={formData.name} onChange={handleChange} />
//           <br></br>
//           <label>Email</label>
//           <input placeholder="Enter your email" style={{ backgroundColor: "gray", color: "black" }} type="email" name="email" value={formData.email} onChange={handleChange} /><br>
//           </br>
//           <label>Password</label>
//           <input placeholder="Enter your password" style={{ backgroundColor: "gray", color: "black" }} type="password" name="password" value={formData.password} onChange={handleChange} /><br></br>
//           <button type="submit">
//   {editId ? "Update" : "Submit"}
// </button>
//         </form>

//         <h2>Users List</h2>
// <table
//   border="1"
//   cellPadding="10"
//   style={{
//     margin: "20px",
//     width: "100%",
//     textAlign: "left",
//     border: "2px solid cyan",
//   }}
// >
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>Email</th>
//       <th>Password</th>
//       <th>Delete</th>
//       <th>Update</th>
//     </tr>
//   </thead>

//   <tbody>
//     {users.map((user) => (
//       <tr key={user._id}>
//         <td>{user.name}</td>
//         <td>{user.email}</td>
//         <td>{user.password}</td>

//         <td>
//           <button
//             style={{ cursor: "pointer" }}
//             onClick={() => deleteUser(user._id)}
//           >
//             Delete
//           </button>
//         </td>

//         <td>
//           <button
//             style={{ cursor: "pointer" }}
//             onClick={() => handleUpdate(user)}
//           >
//             Update
//           </button>
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>
//       </div>
//     </>

//   )
// }