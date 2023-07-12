import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material'
import { Link } from 'react-router-dom'

const NavbarDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const handleClose = () => setIsDrawerOpen(false)
  return (
    <>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        color="inherit"
        className="block md:hidden"
        size="small">
        <MenuIcon />
      </IconButton>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor="right">
        <List className="space-y-10">
          <ListItem onClick={handleClose}>
            <ListItemButton LinkComponent={'a'}>
              <Link to={'/'}>Brand List</Link>
            </ListItemButton>
          </ListItem>
          <ListItem onClick={handleClose}>
            <ListItemButton LinkComponent={'a'}>
              <Link to={'/latest'}>Latest</Link>
            </ListItemButton>
          </ListItem>
          <ListItem onClick={handleClose}>
            <ListItemButton LinkComponent={'a'}>
              <Link to={'/interest'}>Top by interest</Link>
            </ListItemButton>
          </ListItem>
          <ListItem onClick={handleClose}>
            <ListItemButton LinkComponent={'a'}>
              <Link to={'/fans'}>Top by fans</Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default NavbarDrawer
