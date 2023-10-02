import { useState, useEffect, useCallback } from "react";
import { Col, Pagination, Row } from "antd";
import axios from "axios";
import Capsule from "./Capsule";
import { ITEMS_PER_PAGE } from "../../constants";
import { getCurrentPageData } from "../../utils/helperMethods";
import "./index.css";
import CapsuleDetails from "./CapsuleDetails";

const DataGrid = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currPageData, setCurrPageData] = useState([]);
  const [currCapsule, setCurrCapsule] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // get data from api
  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.get(apiUrl);
      const data = response?.data;
      setData(data);
      const currPageData = getCurrentPageData(data, currentPage);
      setCurrPageData(currPageData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const currPageData = getCurrentPageData(data, page);
    setCurrPageData(currPageData);
  };

  return (
    <>
      {currPageData?.length > 0 && (
        <Row className="data-grid" justify="center">
          {currPageData?.map((item) => (
            <Col key={item?.capsule_serial} span={5}>
              <Capsule
                {...{ item, isLoading, setCurrCapsule, setIsModalVisible }}
              />
            </Col>
          ))}
        </Row>
      )}
      <Row className="pagination" justify="center">
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={data?.length}
          pageSize={ITEMS_PER_PAGE}
          onChange={(page) => handlePageChange(page)}
        />
      </Row>
      {currCapsule && (
        <CapsuleDetails
          {...{
            currCapsule,
            setCurrCapsule,
            isModalVisible,
            setIsModalVisible,
          }}
        />
      )}
    </>
  );
};

export default DataGrid;
