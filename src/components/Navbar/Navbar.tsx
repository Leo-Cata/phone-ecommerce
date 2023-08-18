import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import NavbarDrawer from "./NavbarDrawer";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // nav bar
    <AppBar position="static" className="bg-custom-secondary">
      <Toolbar>
        {/* icon and app name starts */}
        <Link to={"/"}>
          <IconButton
            size="small"
            edge="start"
            aria-label="logo"
            className="cursor-pointer text-custom-text"
          >
            <EdgesensorHighRoundedIcon />
          </IconButton>
        </Link>
        <Typography variant="h6" className="flex-grow">
          <Link to={"/"}>Phone E-commerce</Link>
        </Typography>
        {/* icon and app name ends */}

        {/* links buttons starts*/}
        <Stack
          direction={"row"}
          spacing={2}
          className="hidden text-white md:block"
        >
          <Link to={"/"}>
            <Button color="inherit" variant="text" className="">
              <Typography variant="subtitle1">Latest</Typography>
            </Button>
          </Link>
          <Link to={"/brands"}>
            <Button color="inherit" variant="text">
              <Typography variant="subtitle1">Phone Brands</Typography>
            </Button>
          </Link>
        </Stack>
        {/* links buttons ends*/}

        {/* mobile menu */}
        <NavbarDrawer />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
