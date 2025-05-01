import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/categories/0');
  }, [navigate]);

  return null;
};

export default Home;