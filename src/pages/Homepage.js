import Banner from "../components/Banner";
import DataGrid from "../components/DataGrid";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SearchForm />
      <DataGrid />
    </>
  );
};

export default Homepage;
