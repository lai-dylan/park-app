import "./index.scss";
import React, {useState} from "react";
import {Button, Form, Input, message} from "antd";
import {useNavigate} from "react-router-dom";
import {login} from "@/api/user.ts";

type FieldType = {
  username: string,
  password: string,
}

const initialValues: FieldType = {
  username: "admin",
  password: "admin"
};

const FormStyle1 = {
  width: "100%",
  backgroundColor: "#fff",
};

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      await form.validateFields();
      const {username, password} = form.getFieldsValue();

      const result = await login({
        username,
        password
      });

      localStorage.setItem("token", result.data.token);
      message.success("登录成功");
      setTimeout(() => {
        navigate("/", {replace: true});
      }, 1000);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-bg">
        <Form
          form={form}
          name="basic"
          labelCol={{span: 5}}
          wrapperCol={{span: 13}}
          style={FormStyle1}
          initialValues={initialValues}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="用户名"
            name="username"
            rules={[{required: true, message: "用户名不能为空"}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item<FieldType>
            label="密码"
            name="password"
            rules={[{required: true, message: "密码不能为空"}]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" onClick={handleLogin} loading={loading} style={{width: "100%"}}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;