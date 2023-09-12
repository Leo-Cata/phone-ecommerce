import { Pagination } from "@mui/material";
import { ButtonInputAndPages } from "../types/types";
import scrollToTop from "../utils/scrollToTop";

const CustomPagination = ({
  handlePage,
  numberOfPages,
  currentPage,
}: ButtonInputAndPages) => {
  //page provided by MUI as a secondary argument, first argument 'event' is set to _ because it is not utilized, therefore needs to be'_' so it doesn't throw an error because it is not used
  return (
    <>
      {numberOfPages > 1 ? (
        <Pagination
          count={numberOfPages}
          page={currentPage}
          onChange={(_, page) => {
            handlePage(page);
            scrollToTop();
          }}
        />
      ) : (
        <>{/* if there is only 1 page don't render anything */}</>
      )}
    </>
  );
};

export default CustomPagination;
