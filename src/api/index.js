import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '02b8292e88msh4958c2aba1b9b93p1cf366jsnc29de2fac017',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async()=>{
    try {
        const { data: { data } } = await axios.get(URL, options);
        return data;

    } catch (error) {
        console.log(error);
    }
}