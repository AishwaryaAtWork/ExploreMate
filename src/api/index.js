import axios from 'axios';

export const getPlacesData = async(type, bounds)=>{
    try {
        const { data: { data } } = await axios.get(
          `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
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