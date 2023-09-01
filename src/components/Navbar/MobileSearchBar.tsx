import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const MobileSearchBar = () => {
  return (
    <TextField
      className="mx-1 w-full bg-[#ffffffcc]/[0.08]"
      size="small"
      id="search-input"
      label="Search"
      variant="outlined"
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

export default MobileSearchBar;
