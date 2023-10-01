import { Typography, Row } from "antd";
import "./index.css";

const { Title } = Typography;

const Navbar = () => {
  return (
    <Row className="navbar">
      <Title level={4}>SpaceX</Title>
    </Row>
  );
};
export default Navbar;
