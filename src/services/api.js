const API_URL = 'https://api.adviceslip.com/advice';

const fetchApi = async () =>{
    try{
        const res = await fetch(API_URL);
        return res.json()
    }catch(err){
        throw new Error(err);
    }
}
export {fetchApi}