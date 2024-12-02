import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { experimentalStyled as styled } from "@mui/material/styles";

type PostProps = {
  id: number;
  body: string;
  title: string;
  onEditPost: (post: IPost) => {};
  onDeletePost: (id: number) => {};
};

const cardActionStyle = {
  alignSelf: "stretch",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  p: 0,
};

const cardStyle = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0.4em",
};

export const Post = ({
  id,
  title,
  body,
  onEditPost,
  onDeletePost,
}: PostProps) => (
  <Card sx={cardStyle}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {body}
      </Typography>
    </CardContent>
    <CardActions disableSpacing sx={cardActionStyle}>
      <Button
        size="small"
        onClick={() => {
          onEditPost({ id, title, body, userId: 11 });
        }}
      >
        <EditIcon />
      </Button>
      <Button
        size="small"
        onClick={() => {
          onDeletePost(id);
        }}
      >
        <DeleteIcon />
      </Button>
    </CardActions>
  </Card>
);
