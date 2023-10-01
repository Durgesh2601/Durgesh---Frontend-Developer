import { Card } from "antd";

const Capsule = ({ item, loading = false, isLoading }) => {
  const { capsule_serial, } = item;
  return <Card title={capsule_serial} loading={isLoading} hoverable>

  </Card>;
};

export default Capsule;
