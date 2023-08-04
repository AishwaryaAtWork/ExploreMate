import React, { useEffect, useState } from 'react';
import { getPlacesData } from './api';

import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {

    const [places, setPlaces] = useState([]);
    const [filteredPlaces , setFilteredPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    
    const [isLoading, setIsLoading] = useState(false);

    const [childClicked, setChildClicked] = useState(null);

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    
    useEffect(()=>{
      navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
        setCoordinates({lat: latitude, lng: longitude});
      });
    },[]);

    useEffect(()=>{
      const filteredPlaces = places.filter((place)=> place.rating > rating);
      setFilteredPlaces(filteredPlaces);

    },[rating, places]);

    useEffect(()=>{
      setIsLoading(true);

      if(bounds.sw && bounds.ne){ 
        getPlacesData(type, bounds)
        .then((data)=>{
          setPlaces(data?.filter((place)=> place.name && place.num_reviews > 0));
          
          setFilteredPlaces([]);
          setIsLoading(false);
        })
      }
    },[type, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>

            <List places={filteredPlaces?.length ? filteredPlaces : places} childClicked={childClicked} 
                isLoading={isLoading} type={type} setType={setType} rating={rating} setRating={setRating}/>

        </Grid>

        <Grid item xs={12} md={8}>
          <div style={{marginTop: '1rem'}}>
            <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} 
              places={filteredPlaces?.length ? filteredPlaces : places} setChildClicked={setChildClicked}/>
          </div>

        </Grid>
      </Grid>
    </>
  )
}

export default App;