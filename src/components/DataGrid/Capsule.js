import { Card, Row, Typography } from "antd";

const { Text } = Typography;
const Capsule = ({ item, isLoading = false }) => {
  const { capsule_serial, original_launch, type } = item;
  const formattedDate = new Date(original_launch).toLocaleString();
  return (
    <Card
      className="card-item"
      title={capsule_serial}
      loading={isLoading}
      hoverable
    >
      <Row>
        <Text>Type : {type}</Text>
      </Row>
      <Text>Launch Date : {formattedDate}</Text>
    </Card>
  );
};

export default Capsule;
