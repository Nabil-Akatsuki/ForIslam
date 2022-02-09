export function sourates (){
    return fetch('../../assets/data/quran.json', {
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    });
}
