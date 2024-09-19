import React from 'react';
import { Table, Skeleton, Pagination, Tag } from 'antd';
import { RocketOutlined, CalendarOutlined } from '@ant-design/icons';
import './MissionsTable.css';

interface Mission {
  mission_name: string;
  launch_date_utc: string;
}

interface MissionsTableProps {
  data: Mission[];
  loading: boolean;
  error?: Error;
  onPageChange: (page: number) => void;
  currentPage: number;
}

const MissionsTable: React.FC<MissionsTableProps> = ({ data, loading, error, onPageChange, currentPage }) => {
  const columns = [
    {
      title: (
        <span>
          <RocketOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
          Mission Name
        </span>
      ),
      dataIndex: 'mission_name',
      key: 'mission_name',
      render: (text: string) => <span className="missionName">{text}</span>,
    },
    {
      title: (
        <span>
          <CalendarOutlined style={{ color: '#1890ff', marginRight: '8px' }} />
          Launch Date
        </span>
      ),
      dataIndex: 'launch_date_utc',
      key: 'launch_date_utc',
      render: (date: string) => {
        const isFutureDate = new Date(date) > new Date();
        return (
          <Tag color={isFutureDate ? 'green' : 'volcano'}>
            {new Date(date).toLocaleDateString()}
          </Tag>
        );
      },
    },
  ];

  const skeletonRows = Array.from({ length: 10 }, (_, index) => (
    <Skeleton
      key={index}
      active
      title={false}
      paragraph={{ rows: 1, width: ['100%', '70%'] }}
      className="skeletonRow"
    />
  ));

  const tableData = data.map((launch) => ({
    key: launch.mission_name,
    mission_name: launch.mission_name,
    launch_date_utc: launch.launch_date_utc,
  }));

  return (
    <div className="tableContainer">
      <div className="tableWrapper">
        {loading ? (
          <div>{skeletonRows}</div>
        ) : error ? (
          <div className="error">Error: {error.message}</div>
        ) : (
          <>
            <Table
              columns={columns}
              dataSource={tableData}
              pagination={false}
              rowClassName="fancyRow"
            />
            <div className="paginationWrapper">
              <Pagination
                current={currentPage}
                total={50} 
                pageSize={10} 
                onChange={onPageChange}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MissionsTable;
