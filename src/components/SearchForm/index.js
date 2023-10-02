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

const SearchForm = ({ onSearch, setFetchData }) => {
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

  const handleResetFilters = () => {
    form.resetFields();
    setFetchData((prev) => !prev);
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
          <Col span={5}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Search
            </Button>
          </Col>
          <Col span={4}>
            <Button
              danger
              style={{ width: "100%" }}
              onClick={handleResetFilters}
            >
              Clear Filters
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default SearchForm;
