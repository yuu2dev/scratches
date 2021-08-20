const axios = require('axios');

/**
 * @author yuu2dev
 * 간단한 날씨 알아보기 앱
 */

// 2번째 인자는 영문주소 (ex. tong-yeong, busan ...)
const address = process.argv[2];

const mapboxKEY = null;
const mapboxAPI = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json`;
const weatherstackKEY = null;
const weatherstackAPI = 'http://api.weatherstack.com/current';

if (address === undefined) {
    console.error('주소가 입력되지 않았습니다.', address);
    return;
}

const get = async () => {
    try {
        const mapbox = await axios.get(mapboxAPI, {
            params: {
                access_token: mapboxKEY,
                launguage: 'ko'
            }
        });
        
        feature = mapbox.data.features.shift();
        let lon = feature.center[0];
        let lat = feature.center[1];
        
        const weatherstack = await axios.get(weatherstackAPI, {
            params: {
                access_key: weatherstackKEY,
                query: `${lat},${lon}`,
                units: 'm',
            }
        });
        console.info(weatherstack.data);
        return Promise.resolve({
            location: feature,
            weather: weatherstack.data
        });
    } catch (error) {
        return Promise.reject(error.message);
    }
}

get();