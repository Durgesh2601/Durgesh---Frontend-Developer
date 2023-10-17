import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import DataGrid from "../components/DataGrid";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import { getCurrentPageData, getFilteredData } from "../utils/helperMethods";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currPageData, setCurrPageData] = useState([]);
  const [fetchData, setFetchData] = useState(false);
  // get data from api
  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.get(apiUrl);
      const data = response?.data;
      setAllData(data);
      setData(data);
      const currPageData = getCurrentPageData(data, currentPage);
      setCurrPageData(currPageData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);

  useEffect(() => {
    getData();
  }, [getData]);

  const onSearch = (values) => {
    setCurrentPage(1);
    const filteredData = getFilteredData(values, allData);
    setData(filteredData);
    const getPageData = getCurrentPageData(filteredData, currentPage);
    setCurrPageData(getPageData);
  };

  return (
    <>
      <Navbar />
      <Banner />
      <SearchForm {...{ onSearch, setFetchData }} />
      <DataGrid
        {...{
          isLoading,
          data,
          currPageData,
          setCurrPageData,
          currentPage,
          setCurrentPage,
        }}
      />
    </>
  );
};

export default Homepage;
