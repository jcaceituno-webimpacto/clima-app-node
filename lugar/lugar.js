const axios=require('axios');


const getLugarLatLng=async(dir)=>{
    const encodedUrl=encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 1000,
        headers: {'X-RapidAPI-Key': '05cc245f84mshecaabdb003de525p16615bjsnf66a0bd5a07f'}
    });
    
    const resp=await instance.get();

    if(resp.data.Results.length===0){
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data=resp.data.Results[0];

    const direccion=data.name;
    const lat=data.lat;
    const lng=data.lon;
    
    
    return {
        direccion,
        lat,
        lng
    }
}


module.exports={
    getLugarLatLng
}