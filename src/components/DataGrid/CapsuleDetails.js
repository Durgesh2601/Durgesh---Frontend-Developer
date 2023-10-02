import { Modal, Row, Table, Typography } from "antd";
import { getTransformedData } from "../../utils/helperMethods";

const { Text, Title } = Typography;

const CapsuleDetails = ({
  currCapsule,
  setCurrCapsule,
  isModalVisible,
  setIsModalVisible,
}) => {
  const { missions, transformedData } = getTransformedData(currCapsule);

  const handleCloseModal = () => {
    setCurrCapsule(null);
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Flight",
      dataIndex: "flight",
      key: "flight",
    },
  ];

  return (
    <Modal
      open={isModalVisible}
      destroyOnClose
      onCancel={handleCloseModal}
      title={currCapsule?.capsule_serial}
      onOk={handleCloseModal}
    >
      {transformedData?.map((item, index) => (
        <Row key={`${item?.key}--${index}`}>
          <Text>
            {item?.key} : <b>{item?.value}</b>
          </Text>
        </Row>
      ))}
      {missions?.length > 0 && (
        <>
          <Row className="missions">
            <Title level={4}>Missions</Title>
          </Row>
          <Table columns={columns} dataSource={missions} pagination={false} />
        </>
      )}
    </Modal>
  );
};

export default CapsuleDetails;
