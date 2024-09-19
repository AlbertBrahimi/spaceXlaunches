import React from 'react';
import { Typography, Row, Col } from 'antd';
import { RocketOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Header = () => {
  return (
    <Row justify="center" align="middle" style={{ background: '#001529', padding: '20px' }}>
      <Col>
        <Title level={1} style={{ color: '#fff', margin: 0 }}>
          <RocketOutlined style={{ color: '#2230f5', fontSize: '2rem', marginRight: '10px' }} />
          SpaceX Missions
        </Title>
      </Col>
    </Row>
  );
};

export default Header;
