import React from 'react';
import { Table, Skeleton } from 'antd';
import './MissionsTable.css';

interface Mission {
  mission_name: string;
  launch_date_utc: string;
}

interface MissionsTableProps {
  data: Mission[];
  loading: boolean;
  error?: Error;
}

const MissionsTable: React.FC<MissionsTableProps> = ({ data, loading, error }) => {

  const columns = [
    {
      title: 'Mission Name',
      dataIndex: 'mission_name',
      key: 'mission_name',
    },
    {
      title: 'Launch Date',
      dataIndex: 'launch_date_utc',
      key: 'launch_date_utc',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
  ];

  const skeletonRows = Array.from({ length: 10 }, (_, index) => (
    <Skeleton
      key={index}
      active
      title={false}
      paragraph={{ rows: 1, width: ['100%', '80%'] }}
      style={{ marginBottom: '8px' }}
    />
  ));


  const tableData = data.map((launch) => ({
    key: launch.mission_name,
    mission_name: launch.mission_name,
    launch_date_utc: launch.launch_date_utc,
  }));

  return <div className='tableContainer'>

    <div className='tableWrapper '>
    {loading ? (
         <div>
           {skeletonRows}
         </div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <Table columns={columns} dataSource={tableData} pagination={false} />
        )}
    </div>
    
    </div>
};

export default MissionsTable;
