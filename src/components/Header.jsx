import { Box, Typography, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/recipes/${searchTerm}`);
    }
  };

  return (
    <Box
      sx={{
        height: '100px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '35vw',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            cursor: 'pointer',
            textTransform: 'uppercase',
            transition: 'ease 0.3s',
            ':hover': {
              color: '#4f5666',
            },
          }}
          onClick={() => navigate('/random/recipe')}
        >
          Random Meal
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            cursor: 'pointer',
            textTransform: 'uppercase',
            transition: 'ease 0.3s',
            ':hover': {
              color: '#4f5666',
            },
          }}
        >
          Area
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            cursor: 'pointer',
            textTransform: 'uppercase',
            transition: 'ease 0.3s',
            ':hover': {
              color: '#4f5666',
            },
          }}
        >
          Category
        </Typography>
      </Box>
      <Box
        sx={{
          width: '30vw',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'DM Serif Display, sans-serif',
            fontSize: '3rem',
            lineHeight: '1.1',
            textTransform: 'capitalize',
            cursor: 'pointer',
            transition: 'ease 0.3s',
            ':hover': {
              color: '#4f5666',
            },
          }}
          onClick={() => navigate('/')}
        >
          Niniz Recipes
        </Typography>
      </Box>
      <Box
        sx={{
          width: '35vw',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <TextField
          variant='standard'
          placeholder='Search a recipe'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            ),
            sx: {
              border: 'solid 1px #4f5666',
              borderRadius: '50px',
              padding: '8px 15px',
              '&:before': {
                border: 'none',
              },
              '&:after': {
                border: 'none',
              },
              '&:hover:not(.Mui-disabled):before': {
                borderBottom: 'none',
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
