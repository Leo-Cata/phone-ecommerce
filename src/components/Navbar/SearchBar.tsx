import { TextField, InputAdornment, FormHelperText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { MobileSearchBar } from "../../types/types";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";

//gets boolean and implements styles and variant for mobile or desktop
const SearchBar = ({ isForMobile, handleClose }: MobileSearchBar) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [error, setError] = useState<boolean>(false);

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

    //if the searchQuery is longer than 3 characters, search, else set error to true which will display a FormHelperText below the search bar
    if (searchQuery.length >= 3) {
      setError(false);
      nav(`/search/${searchQuery}`);
      if (isForMobile) {
        handleClose();
      }
    } else setError(true);
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
        error={error}
      />
      <FormHelperText>
        {error ? "Your search should be at least 3 characters long" : ""}
      </FormHelperText>
    </form>
  );
};

export default SearchBar;
