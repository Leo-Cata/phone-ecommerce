import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { MobileSearchBar } from "../../types/types";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";

//gets boolean and implements styles and variant for mobile or desktop
const SearchBar = ({ isForMobile, handleClose }: MobileSearchBar) => {
  const [searchQuery, setSearchQuery] = useState("");

  const nav = useNavigate();

  //get the value of the input text and save it
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery) nav(`/search/${searchQuery}`);
    handleClose();
  };

  return (
    <form onSubmit={HandleSubmit} className={`${isForMobile ? "w-full" : ""}`}>
      <TextField
        className={`${
          isForMobile ? "mx-1 w-full bg-[#ffffffcc]/[0.08]" : "hidden md:block"
        }`}
        size="small"
        id="search-input"
        label="Search"
        value={searchQuery}
        onChange={handleChange}
        variant={`${isForMobile ? "outlined" : "standard"}`}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
