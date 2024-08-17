import React from 'react';
import { useGetMissionsQuery } from './graphql/hooks.ts';

const MissionsTable: React.FC = () => {
  const { data, loading, error } = useGetMissionsQuery();
  return (
    <table>
      <thead>
        <tr>
          <th>Mission Name</th>
          <th>Launch Date</th>
        </tr>
      </thead>
      <tbody>
        {data?.launchesPast.map((launch) => (
          <tr key={launch.mission_name}>
            <td>{launch.mission_name}</td>
            <td>{new Date(launch.launch_date_utc).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App: React.FC = () => (
  <div className="App">
    <h1>SpaceX Missions</h1>
    <MissionsTable />
  </div>
);

export default App;
