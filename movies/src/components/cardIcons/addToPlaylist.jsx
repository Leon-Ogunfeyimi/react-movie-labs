import React, { useContext } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);  // use context

  const handleAddToMustWatch = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);            // call handler
  };

  return (
    <IconButton 
      aria-label="add to playlist" 
      onClick={handleAddToMustWatch}  
    >
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;
