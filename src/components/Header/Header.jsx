import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import useStyles from './style'
import { Search } from '@material-ui/icons';

const Header = ({setCoordinates}) => {

  const classes = useStyles();

  const [autocomplete, setAutocomplete] = useState(null);

  const onPlaceChanged =()=>{
    const lat = autocomplete?.getPlace().geometry.location.lat();
    const lng = autocomplete?.getPlace().geometry.location.lng();

    setCoordinates({lat, lng});
  }

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.title}>
          ExploreMate
        </Typography>

        <Box display='flex'>
          <Typography variant='h6' className={classes.title}>
            Explore new places
          </Typography>

          <Autocomplete onLoad={(autoC) => setAutocomplete(autoC)} 
            onPlaceChanged={onPlaceChanged}>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>

              <InputBase placeholder='Search...' classes={{root: classes.inputRoot, input: classes.inputInput}}/>
            </div>
          </Autocomplete>

        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Header;