const axios = require('axios');

/**
 * @author yuu2dev
 * 간단한 날씨 알아보기 앱
 */

// 2번째는 주소로 함
const address = process.argv[2];

if (address === undefined) {
    console.error('주소가 입력되지 않았습니다.', address);
    return;
}

const mapboxKEY = null;
const mapboxAPI = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json`;
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

    } catch (error) {
        console.log(error.message);
    }
}

get();