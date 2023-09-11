import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getSearchResults } from "../services/phoneApi";
import axios from "axios";

const SearchResultsContainer = () => {
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState<any>();

  // useEffect(() => {
  //   // Check if searchQuery is defined and not empty
  //   if (searchQuery) {
  //     const apiUrl = `https://phonewise.onrender.com/api/search?q=${searchQuery}`;

  //     fetch(apiUrl)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         // Handle the data received from the API
  //         setSearchResults(data);
  //       })
  //       .catch((error) => {
  //         // Handle any errors that occurred during the fetch
  //         console.error("Fetch error:", error);
  //       });
  //   }
  // }, [searchQuery]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(
          `https://phonewise.onrender.com/api/search?q=${searchQuery}`
        );
        if (resp.status === 200) {
          setSearchResults(resp.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchQuery]);

  console.log(searchResults);

  return (
    <div>
      {searchResults &&
        searchResults.map((item: any, index) => (
          <h1 key={index}>
            {item.phone_name} {index}
          </h1>
        ))}
    </div>
  );
};

export default SearchResultsContainer;
