import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBrandBySlug } from "../services/phoneApi";
import { BrandsPhoneList, Phones } from "../types/types";
import { AxiosResponse } from "axios";
import PhoneCards from "../components/PhoneCards";
import CustomTypography from "../components/CustomTypography";
import CustomPageButtonGroup from "../components/CustomPageButtonGroup";

const PhoneListContainer = () => {
  //get the brand slug when the user clicks on the brand list
  const { brandSlug } = useParams();

  //set the array of phones
  const [brandsPhones, setBrandsPhones] = useState<Phones[]>();

  const [page, setPage] = useState(1);

  const [numberOfPages, setNumberOfPages] = useState(1);

  //fetch the list of phones for said brand
  useEffect(() => {
    const fetchBrandsPhones = async () => {
      try {
        if (brandSlug) {
          const response: AxiosResponse<BrandsPhoneList> = await getBrandBySlug(
            brandSlug,
            page
          );
          setNumberOfPages(response.data.data.last_page);
          const brandsPhones: Phones[] = response.data.data.phones;
          setBrandsPhones(brandsPhones);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBrandsPhones();
  }, [brandSlug, page]);

  const handlePage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      {brandsPhones && (
        <>
          <CustomTypography
            textVariant="h3"
            displayedText={`${brandsPhones[0].brand} Phones`}
          />
          <PhoneCards brandsPhones={brandsPhones} />
          <CustomPageButtonGroup
            handlePage={handlePage}
            numberOfPages={numberOfPages}
            page={page}
          />
        </>
      )}
    </>
  );
};

export default PhoneListContainer;
