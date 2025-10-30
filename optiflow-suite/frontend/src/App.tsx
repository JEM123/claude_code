import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { routes } from '@routes/index';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { checkAuth } from '@features/auth/authSlice';

function App() {
  const dispatch = useAppDispatch();
  const { isLoading, isAuthenticated } = useAppSelector(state => state.auth);
  const routing = useRoutes(routes);

  useEffect(() => {
    // Check if user is authenticated on app load
    const token = localStorage.getItem('accessToken');
    if (token) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  if (isLoading && !isAuthenticated) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return <>{routing}</>;
}

export default App;
