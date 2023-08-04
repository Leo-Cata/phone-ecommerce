import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from '@mui/material'
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded'
import NavbarDrawer from './NavbarDrawer'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position="static" className="bg-custom-secondary">
      <Toolbar>
        <IconButton
          size="small"
          edge="start"
          aria-label="logo"
          className="cursor-pointer text-custom-text">
          <Link to={'/'}>
            <EdgesensorHighRoundedIcon />
          </Link>
        </IconButton>
        <Typography variant="h6" className="flex-grow">
          <Link to={'/'}>Phone E-commerce</Link>
        </Typography>

        {/* links buttons */}
        <Stack
          direction={'row'}
          spacing={2}
          className="hidden text-white md:block">
          <Button color="inherit" variant="text">
            <Link to={'/'}>
              <Typography variant="subtitle1">Latest</Typography>
            </Link>
          </Button>
          <Button color="inherit" variant="text">
            <Link to={'/brands'}>
              <Typography variant="subtitle1">Phone Brands</Typography>
            </Link>
          </Button>
        </Stack>

        {/* mobile menu */}
        <NavbarDrawer />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
