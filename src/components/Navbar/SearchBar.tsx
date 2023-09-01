import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { MobileSearchBar } from "../../types/types";

const SearchBar = ({ isForMobile }: MobileSearchBar) => {
  //gets boolean and implements styles and variant for mobile or desktop
  return (
    <TextField
      className={`${
        isForMobile ? "mx-1 w-full bg-[#ffffffcc]/[0.08]" : "hidden md:block"
      }`}
      size="small"
      id="search-input"
      label="Search"
      variant={`${isForMobile ? "outlined" : "standard"}`}
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

export default SearchBar;
