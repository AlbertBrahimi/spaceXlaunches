// src/App.tsx
import React, { useState } from 'react';
import MissionsTable from './UI/MissionsTable.tsx';
import { useGetMissionsQuery } from './graphql/hooks.ts';
import Header from './Header.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10; 
  const offset = (currentPage - 1) * limit;

  const { data, loading, error } = useGetMissionsQuery({
    variables: { limit, offset },
    fetchPolicy: "network-only"
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const missionsData = data?.launchesPast || [];

  return (
    <div className="App">
     <Header />
      <MissionsTable
        data={missionsData}
        loading={loading}
        error={error}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
