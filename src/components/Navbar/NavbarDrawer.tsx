import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import CloseIcon from "@mui/icons-material/Close";

import { Link } from "react-router-dom";

const NavbarDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleClose = () => setIsDrawerOpen(false);
  return (
    <>
      {/* hamburger menu icon to open drawer starts*/}
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        color="inherit"
        className="block rounded md:hidden"
        size="small"
      >
        <MenuIcon />
      </IconButton>
      {/* hamburger menu icon to open drawer ends */}

      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor="top"
      >
        {/* list displaying icon, name app and links */}
        <List className=" bg-custom-secondary">
          <ListItem className="flex justify-between">
            <Stack direction={"row"}>
              <Link
                className="inline-flex space-x-2"
                to={"/"}
                // className="flex w-full flex-row justify-between space-x-4"
                onClick={() => setIsDrawerOpen(false)}
              >
                {/* icon and app name starts */}
                <ListItemButton
                  className="h-[30px] min-w-[24px] p-0"
                  disableGutters
                >
                  <EdgesensorHighRoundedIcon />
                </ListItemButton>

                <Typography variant="h6">Phone E-commerce</Typography>
              </Link>
            </Stack>
            {/* icon and app ends */}

            {/* X icon to close the drawer */}
            <IconButton
              className="h-[30px] flex-grow-0 rounded"
              size="small"
              onClick={() => setIsDrawerOpen(false)}
            >
              <CloseIcon />
            </IconButton>
            {/* x icon ends */}
          </ListItem>
          <Divider />

          {/* links starts */}
          <ListItem onClick={handleClose}>
            <Link to={"/"} className="w-full">
              <ListItemButton LinkComponent={"a"} className="rounded-md">
                Latest Phones
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem onClick={handleClose}>
            <Link to={"/brands"} className="w-full">
              <ListItemButton LinkComponent={"a"} className="rounded-md">
                Phone Brands
              </ListItemButton>
            </Link>
          </ListItem>
          {/* links ends */}
        </List>
      </Drawer>
    </>
  );
};

export default NavbarDrawer;
