import { useState } from "react";
import { Stack, IconButton, Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { PhoneImagesSliderProps } from "../../types/types";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";

const PhoneImagesSlider = ({
  phoneImages,
  phoneName,
}: PhoneImagesSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  //when pressing the button, update the index, if the index is equal to the length of the images, the reminder will be 0, wrapping around the array
  const handleNextClick = () => {
    const newIndex = (imageIndex + 1) % phoneImages.length;
    setImageIndex(newIndex);
  };

  const handlePreviousClick = () => {
    const newIndex = (imageIndex - 1 + phoneImages.length) % phoneImages.length;
    setImageIndex(newIndex);
  };

  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={2}
      >
        <IconButton
          aria-label="previous"
          className="rotate-180 transform"
          onClick={handlePreviousClick}
        >
          <NavigateNextIcon />
        </IconButton>

        <Stack className="h-[200px] w-full min-w-[220px] max-w-[500px] sm:h-[600px]">
          <img
            src={phoneImages[imageIndex]}
            alt={`${phoneName} image`}
            className="h-full object-contain"
          />
        </Stack>

        <IconButton onClick={handleNextClick} aria-label="next">
          <NavigateNextIcon />
        </IconButton>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        spacing={2}
        className="mt-3"
      >
        {phoneImages &&
          phoneImages.map((img, index) => (
            <HorizontalRuleRoundedIcon
              key={img}
              className={`${
                index === imageIndex ? "" : "opacity-10"
              }  h-fit cursor-pointer text-4xl `}
              onClick={() => setImageIndex(index)}
            />
          ))}
      </Stack>
    </Box>
  );
};

export default PhoneImagesSlider;
