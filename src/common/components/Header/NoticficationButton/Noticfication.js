import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

export const Noticfication = ({ data }) => {
  const { title, description } = data;
  return (
    <ListItem button>
      <ListItemText primary={title} secondary={description} />
    </ListItem>
  );
};
