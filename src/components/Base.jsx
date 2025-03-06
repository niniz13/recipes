import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';

const Base = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Base;
