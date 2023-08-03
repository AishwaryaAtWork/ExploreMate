import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async(bounds)=>{
    try {
        const { data: { data } } = await axios.get(URL, {
          params: {
            bl_latitude: bounds.sw.lat,
            tr_latitude: bounds.ne.lat,
            bl_longitude: bounds.sw.lng,
            tr_longitude: bounds.ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '02b8292e88msh4958c2aba1b9b93p1cf366jsnc29de2fac017',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;

    } catch (error) {
        console.log(error);
    }
}