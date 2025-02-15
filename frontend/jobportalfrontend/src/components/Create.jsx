 import React, { useState } from "react";
 import axios from "axios";
 import { Typography, TextField, Button, Paper, Box } from "@mui/material";
 import { useNavigate } from "react-router-dom";

 const initial = {
   postId: "",
   postProfile: "",
   redExperience: 0,
   postTechStack: [],
   postDesc: "",
 };

 const Create = () => {
   const skillSet = [
     { name: "Javascript" },
     { name: "Java" },
     { name: "Python" },
     { name: "Django" },
     { name: "Rust" },
   ];

   const navigate = useNavigate();
   const [form, setForm] = useState(initial);

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log("Form data before submission:", form); // Log the form data before sending
     axios
       .post("http://localhost:8080/jobPost", form)
       .then((resp) => {
         console.log("Response data:", resp.data);
         navigate("/"); // Navigate after successful submission
       })
       .catch((error) => {
         console.error(
           "Error:",
           error.response ? error.response.data : error.message
         );
         alert("Failed to create job post. Please try again."); // Provide user feedback
       });
   };

   const { postId, postProfile, redExperience, postDesc } = form;

   const handleChange = (e) => {
     const { name, value, checked } = e.target;
     if (checked) {
       setForm((prevForm) => ({
         ...prevForm,
         postTechStack: [...prevForm.postTechStack, value],
       }));
     } else {
       setForm((prevForm) => ({
         ...prevForm,
         postTechStack: prevForm.postTechStack.filter(
           (skill) => skill !== value
         ),
       }));
     }
   };

   return (
     <Paper sx={{ padding: "1%" }} elevation={0}>
       <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
         Create New Post
       </Typography>
       <form autoComplete="off" noValidate onSubmit={handleSubmit}>
         <Box
           sx={{
             display: "flex",
             justifyContent: "center",
             flexDirection: "column",
           }}
         >
           <TextField
             min="0"
             type="number"
             sx={{ width: "50%", margin: "2% auto" }}
             onChange={(e) => setForm({ ...form, postId: e.target.value })}
             label="Enter your Post ID"
             variant="outlined"
             value={postId}
           />
           <TextField
             type="string"
             sx={{ width: "50%", margin: "2% auto" }}
             required
             onChange={(e) => setForm({ ...form, postProfile: e.target.value })}
             label="Job-Profile"
             variant="outlined"
             value={postProfile}
           />
           <TextField
             min="0"
             type="number"
             sx={{ width: "50%", margin: "2% auto" }}
             required
             onChange={(e) =>
               setForm({ ...form, redExperience: e.target.value })
             }
             label="Years of Experience"
             variant="outlined"
             value={redExperience}
           />
           <TextField
             type="string"
             sx={{ width: "50%", margin: "2% auto" }}
             required
             multiline
             rows={4}
             onChange={(e) => setForm({ ...form, postDesc: e.target.value })}
             label="Job-desc"
             variant="outlined"
             value={postDesc}
           />
           <Box sx={{ margin: "1% auto" }}>
             <h3>Please mention required skills</h3>
             <ul>
               {skillSet.map(({ name }, index) => (
                 <li key={index}>
                   <div>
                     <div>
                       <input
                         type="checkbox"
                         id={`custom-checkbox-${index}`}
                         name={name}
                         value={name}
                         onChange={handleChange}
                       />
                       <label htmlFor={`custom-checkbox-${index}`}>
                         {name}
                       </label>
                     </div>
                   </div>
                 </li>
               ))}
             </ul>
           </Box>
           <Button
             sx={{ width: "50%", margin: "2% auto" }}
             variant="contained"
             type="submit"
           >
             Submit
           </Button>
         </Box>
       </form>
     </Paper>
   );
 };

 export default Create;