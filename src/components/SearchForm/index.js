import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import { formFields } from "../../constants";
import "./index.css";

const { Title } = Typography;

const SearchForm = ({ onSearch }) => {
  const [form] = Form.useForm();

  const getComponent = (field) => {
    switch (field?.type) {
      case "select":
        return (
          <Select placeholder={field?.label}>
            {field?.options?.map((option) => (
              <Select.Option key={option?.value} value={option?.value}>
                {option?.label}
              </Select.Option>
            ))}
          </Select>
        );
      case "date":
        return (
          <DatePicker style={{ width: "100%" }} placeholder={field?.label} />
        );
      default:
        return <Input placeholder={field?.label} />;
    }
  };

  return (
    <>
      <Row align="center">
        <Title level={2}>Cosmic Capsule Compass</Title>
      </Row>
      <Form form={form} onFinish={onSearch}>
        <Row className="form-fields" align="center">
          {formFields.map((field) => (
            <Col span={9} key={field?.id}>
              <Form.Item name={field?.name}>{getComponent(field)}</Form.Item>
            </Col>
          ))}
          <Col span={9}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default SearchForm;
