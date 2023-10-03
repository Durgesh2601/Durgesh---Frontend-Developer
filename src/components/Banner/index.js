import { Row } from "antd";
import BannerImg from "../../assets/banner.png";
import "./index.css";

const Banner = () => {
  return (
    <Row className="banner" align="center">
      <img src={BannerImg} alt="banner" className="banner-img" />
    </Row>
  );
};

export default Banner;
