import { Row } from "antd";
import BannerImg from "../../assets/banner.png";
import "./index.css";

const Banner = () => {
  return (
    <Row className="banner" align="center">
      <img src={BannerImg} alt="banner" height={550} width={"90%"} />
    </Row>
  );
};

export default Banner;
