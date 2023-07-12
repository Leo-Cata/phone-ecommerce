import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Drawer, IconButton, Stack, Typography } from '@mui/material'

const NavbarDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
  return (
    <>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        anchor="right">
        <Stack direction={'column'} className="hidden text-white md:block">
          <Typography className="text-black">Brand List</Typography>
          <Typography className="text-black">Latest</Typography>
          <Typography className="text-black">Top by interest</Typography>
          <Typography className="text-black">Top by fans</Typography>
        </Stack>
      </Drawer>
    </>
  )
}

export default NavbarDrawer
