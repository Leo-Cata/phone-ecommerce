import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const DesktopSearchBar = () => {
  return (
    <TextField
      className="hidden md:block"
      size="small"
      id="search-input"
      label="Search"
      variant="standard"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default DesktopSearchBar;
