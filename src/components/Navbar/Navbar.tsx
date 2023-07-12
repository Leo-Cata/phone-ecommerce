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

const Navbar = () => {
  // const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null)
  // const isOpen = Boolean(anchorElement)

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorElement(event.currentTarget)
  // }
  // const handleClose = () => {
  //   setAnchorElement(null)
  // }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="logo"
          className="text-white">
          <EdgesensorHighRoundedIcon />
        </IconButton>
        <Typography variant="h6" className="flex-grow">
          Phone Ecommerce
        </Typography>

        {/* links buttons */}
        <Stack
          direction={'row'}
          spacing={2}
          className="hidden text-white md:block">
          <Button color="inherit" variant="text">
            Brand List
          </Button>
          <Button color="inherit" variant="text">
            Latest
          </Button>
          <Button color="inherit" variant="text">
            Top by interest
          </Button>
          <Button color="inherit" variant="text">
            Top by fans
          </Button>
        </Stack>
        {/* mobile menu */}
        <NavbarDrawer />
        {/* menu button */}
        {/* <IconButton
          color="inherit"
          size="large"
          id="mobile-button"
          aria-controls={isOpen ? 'mobile-menu' : undefined}
          onClick={handleClick}
          className="block md:hidden">
          <MenuIcon />
        </IconButton> */}
        {/* menu and items to display */}
        {/* <Menu
          id="mobile-menu"
          anchorEl={anchorElement}
          open={isOpen}
          MenuListProps={{ 'aria-labelledby': 'mobile-button' }}
          onClose={handleClose}>
          <MenuItem>Brand List</MenuItem>
          <MenuItem>Latest</MenuItem>
          <MenuItem>Top by interest</MenuItem>
          <MenuItem>Top by fans</MenuItem>
        </Menu> */}
        {/* mobile menu ends */}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
