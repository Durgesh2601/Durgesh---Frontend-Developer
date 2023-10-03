import { useState } from "react";
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
import { DATE_PICKER_FORMAT, formFields } from "../../constants";
import "./index.css";

const { Title } = Typography;

const SearchForm = ({ onSearch, setFetchData }) => {
  const [isDisabled, setIsDisabled] = useState(true);
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
          <DatePicker
            showTime
            style={{ width: "100%" }}
            placeholder={field?.label}
            format={DATE_PICKER_FORMAT}
          />
        );
      default:
        return <Input placeholder={field?.label} />;
    }
  };

  const handleResetFilters = () => {
    form.resetFields();
    setFetchData((prev) => !prev);
    setIsDisabled(true);
  };

  const handleFormFieldsChange = () => {
    const values = form.getFieldsValue();
    const isDisabled = Object.values(values).every(
      (value) => value === undefined || value === ""
    );
    setIsDisabled(isDisabled);
  };

  return (
    <>
      <Row justify="center">
        <Title style={{ textAlign: "center" }} level={2}>
          Cosmic Capsule Compass
        </Title>
      </Row>
      <Form
        form={form}
        onFinish={onSearch}
        onFieldsChange={handleFormFieldsChange}
      >
        <Row className="form-fields" align="center">
          {formFields.map((field) => (
            <Col xs={24} sm={12} md={9} key={field?.id}>
              <Form.Item name={field?.name}>{getComponent(field)}</Form.Item>
            </Col>
          ))}
          <Col xs={24} sm={12} md={5}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Search
            </Button>
          </Col>
          <Col xs={24} sm={12} md={4}>
            <Button
              danger
              style={{ width: "100%" }}
              onClick={handleResetFilters}
              disabled={isDisabled}
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
