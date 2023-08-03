import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import useStyles from './style';

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {

  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 600px)');

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact bootrapURLKeys={{key: 'AIzaSyBFunsUmQ7N12nT29zMLRFg_srdOdtHSUo'}} 
        defaultCenter={coordinates} center={coordinates} 
          defaultZoom={14} margin={[50, 50, 50, 50]} options={''} 
          onChange={(e) => {
            setCoordinates({lat: e.center.lat, lng: e.center.lng});
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
          } } 
          onChildClick={(child)=> setChildClicked(child)}>
            
            {places?.map((place, i)=>(
              <div className={classes.markerContainer} key={i}
                 lat={Number(place.latitude)} lng={Number(place.longitude)}>

                  { !isDesktop ? (
                    <LocationOnOutlined color='primary' fontSize='large'/>
                  ) : (
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant='subtitle2' gutterBottom>
                        {place.name}
                      </Typography>

                      <img className={classes.pointer} src={place.photo ? place.photo.images.large.url : 
                          'https://publish.purewow.net/wp-content/uploads/sites/2/2020/12/littlebeettable-healthy-restaurants-nyc.jpg'} 
                          alt={place.name} />

                      <Rating size='small' value={Number(place?.rating)} readOnly/>
                    </Paper>
                  )}
              </div>
            ))}

      </GoogleMapReact>
    </div>
  )
}

export default Map;