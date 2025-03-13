export const ETDB_CONFIG = {
    BASE_URL:'',
    API_KEY: process.env.EXPO_PUBLIC_API_KEY,
    headers:{
        accept: '',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`

    }
}

export const fetchList = async ({query}: {query: string}) => {
    const endpoint = '';
    const response = await fetch(endpoint, {method: 'GET', headers: ETDB_CONFIG.headers});

    if(!response.ok){
        //@ts-ignore
        throw new Error('Faild to fetch list', response.statusText);
    }

    const data = await response.json();
    return data.results;

}