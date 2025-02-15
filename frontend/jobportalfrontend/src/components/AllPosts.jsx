import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Card,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [post, setPost] = useState(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate("/edit", { state: { id } });
  };

  useEffect(() => {
    const fetchInitialPosts = async () => {
      const response = await axios.get(`http://localhost:8080/jobPosts`);
      setPost(response.data);
    };
    fetchInitialPosts();
  }, []);

  const handleSearch = async (keyword) => {
    if (keyword) {
      const response = await axios.get(
        `http://localhost:8080/jobPosts/keyword/${keyword}`
      );
      setPost(response.data);
    } else {
      const response = await axios.get(`http://localhost:8080/jobPosts`);
      setPost(response.data);
    }
  };

  const handleDelete = (id) => {
    async function deletePost() {
      await axios.delete(`http://localhost:8080/jobPost/${id}`);
      console.log("Delete");
    }
    deletePost();
    window.location.reload();
  };

  return (
    <>
      <Box sx={{ margin: "2%" }}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search..."
          sx={{ width: "75%", padding: "2% auto" }}
          fullWidth
          onChange={(e) => {
            setQuery(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </Box>
      <Grid
  container
  spacing={2}
  sx={{
    margin: "auto",
    maxWidth: "100%",  // Ensure it doesn’t exceed the viewport
    justifyContent: "center",
    alignItems: "center",
    padding: "0 5%", // Add padding instead of margin if necessary
    overflowX: "hidden"
  }}
>

        {post &&
          post.map((p) => {
            return (
              <Grid key={p.id} item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    padding: "3%",
                    backgroundColor: "#ADD8E6",
                    wordWrap: "break-word",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "600" }}>
                    {p.postProfile}
                  </Typography>
                  <Typography sx={{ color: "#585858" }}>
                    Description: {p.postDesc}
                  </Typography>
                  <Typography variant="h6">
                    Experience: {p.reqExperience} years
                  </Typography>
                  <Typography>Skills: {p.postTechStack.join(" . ")}</Typography>
                  <DeleteIcon onClick={() => handleDelete(p.postId)} />
                  <EditIcon onClick={() => handleEdit(p.postId)} />
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Search;
