import { Button, Col, Form, Input, Row, Typography } from "antd";
import { formFields } from "../../constants";
import "./index.css";

const { Title } = Typography;

const SearchForm = () => {
  const [form] = Form.useForm();
  return (
    <>
      <Row align="center">
        <Title level={2}>Cosmic Capsule Compass</Title>
      </Row>
      <Form form={form}>
        <Row className="form-fields" align="center">
          {formFields.map((field) => (
            <Col span={9} key={field?.id}>
              <Form.Item name={field?.name}>
                <Input placeholder={field?.label} />
              </Form.Item>
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
