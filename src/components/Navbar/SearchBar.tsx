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

  //first type is for submitting a form, second form is when clicking with mouse, third event is when pressing on mobile
  const handleSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLElement>
      | React.TouchEvent<HTMLElement>
  ) => {
    event.preventDefault();
    if (searchQuery.length >= 3) {
      nav(`/search/${searchQuery}`);

      if (isForMobile) {
        handleClose();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${isForMobile ? "w-full" : ""}`}>
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
            <InputAdornment
              position="start"
              onClick={handleSubmit}
              onTouchStart={handleSubmit}
              className="cursor-pointer"
            >
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
