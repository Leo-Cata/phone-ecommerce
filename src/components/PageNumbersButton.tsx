import { ButtonGroup, Button } from "@mui/material";
import { ButtonInputAndPages } from "../types/types";
import scrollToTop from "../utils/scrollToTop";
const PageNumbersButtons = ({
  handlePage,
  numberOfPages,
  page,
}: ButtonInputAndPages) => {
  //create an array mapping from 0+1 to the length of the number of pages
  const pageNumbers = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1
  );

  return (
    // whatever number of the page is on, makes it looks 'active'
    <ButtonGroup aria-label="page number" className="bg-custom-secondary ">
      {pageNumbers.map((pageNumber) => (
        <Button
          onClick={() => {
            handlePage(pageNumber);
            scrollToTop();
          }}
          key={pageNumber}
          value={pageNumber}
          className={page === pageNumber ? "bg-custom-primary " : ""}
          aria-label={`page number ${pageNumber}`}
        >
          {pageNumber}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default PageNumbersButtons;
