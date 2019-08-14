import { key } from './key';
export async function getApi(cityName: string) {
  let serviceDataURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${key}`;
  const responseData = await fetch(serviceDataURL);
  if (responseData.status === 200) {
    // success
    const data = await responseData.json();
    return data;
  }
  {
    // nodata
    console.log('there is no api data');
  }
}
