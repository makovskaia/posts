import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

type HeaderProps = {
  onCreatePost: () => void;
};
const style = {
  padding: "0.2em",
};
export function Header({ onCreatePost }: HeaderProps) {
  return (
    <AppBar sx={style} position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          align="left"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Posts
        </Typography>
        <Button variant="outlined" color="inherit" onClick={onCreatePost}>
          New Post
        </Button>
      </Toolbar>
    </AppBar>
  );
}
