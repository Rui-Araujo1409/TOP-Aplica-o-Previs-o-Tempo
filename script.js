// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Paredes%20de%20Coura?unitGroup=metric&key=GD3BYWX9NS5K7JR33T6S23368&contentType=json

const local = "Paredes de Coura";
const urlAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${local}?unitGroup=metric&key=GD3BYWX9NS5K7JR33T6S23368&contentType=json`

const fetchDadosTempo = async (url) => {
    const resposta = await fetch(url);
    const respostaObj = await resposta.json();
    return respostaObj;
}

console.log(fetchDadosTempo(urlAPI))

