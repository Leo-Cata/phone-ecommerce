import { useState } from "react";
import { Stack, IconButton, Box, Tooltip } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { PhoneImagesSliderProps } from "../../types/types";
import HorizontalRuleRoundedIcon from "@mui/icons-material/HorizontalRuleRounded";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";

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
        justifyContent={phoneImages.length > 1 ? "space-evenly" : "center"}
        alignItems={"center"}
        spacing={2}
      >
        <IconButton
          aria-label="previous"
          className={`rotate-180 transform ${
            phoneImages.length > 1 ? "" : "hidden"
          }`}
          onClick={handlePreviousClick}
        >
          <NavigateNextIcon className="text-2xl sm:text-4xl" />
        </IconButton>

        <Stack className="flex h-[200px] w-full min-w-[220px] max-w-[500px] sm:h-[600px]">
          {phoneImages.length ? (
            <img
              src={phoneImages[imageIndex]}
              alt={`${phoneName} image`}
              className="h-full object-contain"
            />
          ) : (
            <Tooltip title="Image Not Found" placement="right">
              <DeviceUnknownIcon className=" h-full w-full" />
            </Tooltip>
          )}
        </Stack>

        <IconButton
          onClick={handleNextClick}
          aria-label="next"
          className={phoneImages.length > 1 ? "" : "hidden"}
        >
          <NavigateNextIcon className="text-2xl sm:text-4xl" />
        </IconButton>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        spacing={2}
        className="mt-3"
      >
        {phoneImages.length > 1 &&
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
