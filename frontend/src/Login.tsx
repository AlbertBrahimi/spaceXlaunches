import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: { username: string; password: string }) => {
    setLoading(true);
    try {
      interface LoginResponse {
        success: boolean;
        token?: string;
        message?: string;
      }

      const response = await axios.post<LoginResponse>('http://localhost:5000/login', values);
      if (response.data.success) {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token); 
        } else {
          throw new Error('Token is undefined');
        }
        message.success('Login successful');
        navigate('/missions');
      } else {
        message.error('Invalid credentials');
      }
    } catch (error: any) {
      console.error('Login failed:', error);
      message.error(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: '0 auto', padding: '50px 0' }}>
      <h2>Login</h2>
      <Form
        name="login"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
