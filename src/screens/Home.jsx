import { Grid2, Typography } from '@mui/material';
import Base from '../components/Base';

const Home = () => {
  return (
    <Base>
      <Grid2
        display='flex'
        alignItems='center'
        sx={{
          backgroundImage: 'url(/img/home.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <Grid2 sx={{ width: '400px', marginLeft: '100px' }}>
          <Typography
            sx={{
              fontFamily: 'DM Serif Display, sans-serif',
              fontSize: '3.75rem',
              lineHeight: '1.1',
              textTransform: 'capitalize',
            }}
          >
            Welcome to Niniz Recipes !
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              marginTop: '10px',
            }}
          >
            You will find plenty of recipes that will make you fall in love. You
            can also try the random recipe if you want to spice up your meal
          </Typography>
        </Grid2>
      </Grid2>
    </Base>
  );
};

export default Home;
