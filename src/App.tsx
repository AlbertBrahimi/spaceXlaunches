import React from 'react';
import MissionsTable from './UI/MissionsTable.tsx';
import { useGetMissionsQuery } from './graphql/hooks.ts';

const App: React.FC = () => {
  const { data, loading, error } = useGetMissionsQuery();

  const missionsData = data?.launchesPast || [];

  return (
    <div className="App">
      <h1>SpaceX Missions</h1>
      <MissionsTable data={missionsData} loading={loading} error={error} />
    </div>
  );
};

export default App;
