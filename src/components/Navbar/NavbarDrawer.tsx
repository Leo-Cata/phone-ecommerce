import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
  Divider,
} from '@mui/material'
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded'
import CloseIcon from '@mui/icons-material/Close'

import { Link } from 'react-router-dom'

const NavbarDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const handleClose = () => setIsDrawerOpen(false)
  return (
    <>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        color="inherit"
        className="block"
        size="small">
        <MenuIcon />
      </IconButton>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor="top">
        <List className=" bg-custom-secondary">
          <ListItem>
            <Link
              to={'/'}
              className="flex w-full flex-row justify-between space-x-4">
              <Stack direction={'row'} spacing={1}>
                <ListItemButton
                  className="h-[30px] min-w-[24px] p-0"
                  disableGutters>
                  <EdgesensorHighRoundedIcon />
                </ListItemButton>
                <Typography variant="h6">Phone E-commerce</Typography>
              </Stack>
              <ListItemButton
                className="h-[30px] flex-grow-0"
                disableGutters
                onClick={() => setIsDrawerOpen(false)}>
                <CloseIcon />
              </ListItemButton>
            </Link>
          </ListItem>
          <Divider />
          <ListItem onClick={handleClose}>
            <ListItemButton LinkComponent={'a'}>
              <Link to={'/'}>Latest Phones</Link>
            </ListItemButton>
          </ListItem>
          <ListItem onClick={handleClose}>
            <ListItemButton LinkComponent={'a'}>
              <Link to={'/brands'}>Phone Brands</Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default NavbarDrawer
