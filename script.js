// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Paredes%20de%20Coura?unitGroup=metric&key=GD3BYWX9NS5K7JR33T6S23368&contentType=json

const localInput = document.querySelector("#inputLocal");

const submeterLocal = document.querySelector("#submeterLocal");

submeterLocal.addEventListener("click", () => {
    const local = localInput.value;
    const urlAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${local}?unitGroup=metric&key=GD3BYWX9NS5K7JR33T6S23368&contentType=json`
   fetchDadosTempo(urlAPI);
   

})




 const fetchDadosTempo = async (url) => {
        const resposta = await fetch(url);
        const respostaObj = await resposta.json();
        const respostaSumário = await respostaObj.description;
        console.log(respostaSumário);
        const textoSumário = document.querySelector(".sumario"); 
        textoSumário.textContent = respostaSumário;
    };
