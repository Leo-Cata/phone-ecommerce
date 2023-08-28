import InterestContainer from "../containers/InterestContainer";
import FansContainer from "../containers/FansContainer";
import CustomTypography from "./CustomTypography";

const FansAndInterest = () => {
  //display the interest and fans section below the cards
  return (
    <>
      <CustomTypography
        displayedText="Most Searched And Fan Favorites"
        textVariant="h4"
      />
      <div className="flex w-full flex-col items-center space-y-10 lg:flex-row lg:justify-evenly lg:space-x-10 lg:space-y-0">
        <InterestContainer />
        <FansContainer />
      </div>
    </>
  );
};

export default FansAndInterest;
