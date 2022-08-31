import apiMock from "./apiMock.js";
import {requestHttp} from "./Services/apiServices.js";
import { writeToExcel } from "./Services/ExcelServices.js";

console.log("Chamando API REST...")
const rawData = await requestHttp("https://restcountries.com/v3.1/all")
console.log("Dados retornados com sucesso!")
console.log("Tratando dados e gerando a planilha...")

writeToExcel(rawData);

//writeToExcel(apiMock)

//Durante o desenvolvimento a response da api foi mockada no arquivo apiMock para facilitar o processo de teste da aplicação, ja que a api estava apresentando instabilidade e demora na resposta.