import { useEffect } from 'react';
import Header from './components/Header';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/cards');
  }, [navigate]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
