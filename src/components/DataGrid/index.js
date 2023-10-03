import { useState } from "react";
import { Col, Empty, Pagination, Row } from "antd";
import Capsule from "./Capsule";
import { ITEMS_PER_PAGE } from "../../constants";
import { getCurrentPageData } from "../../utils/helperMethods";
import CapsuleDetails from "./CapsuleDetails";
import "./index.css";

const DataGrid = ({
  isLoading,
  data,
  currPageData,
  setCurrPageData,
  currentPage,
  setCurrentPage,
}) => {
  const [currCapsule, setCurrCapsule] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const currPageData = getCurrentPageData(data, page);
    setCurrPageData(currPageData);
  };

  return (
    <>
      {currPageData?.length > 0 ? (
        <>
          <Row className="data-grid" justify="center">
            {currPageData?.map((item) => (
              <Col key={item?.capsule_serial} span={5}>
                <Capsule
                  {...{ item, isLoading, setCurrCapsule, setIsModalVisible }}
                />
              </Col>
            ))}
          </Row>
          <Row className="container-sub" justify="center">
            <Pagination
              defaultCurrent={1}
              current={currentPage}
              total={data?.length}
              pageSize={ITEMS_PER_PAGE}
              onChange={(page) => handlePageChange(page)}
            />
          </Row>
        </>
      ) : (
        <Row className="container-sub">
          <Empty />
        </Row>
      )}
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
