
import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateAddress(){
  var numb = getRandomInt(1, 25) ;
  var name1 = ["Sadar Hospital Narail",    "UHC Kalia",    "UHC Lohagara",    "RTRL, Chest Disease Hospital",    "UHC Digholia",    "Chest Disease Clinic",    "UHC Shoilkupa",    "UHC Moheshpur",    "UHC Kotchandpur",    "UHC Kaliganj",    "UHC Horinakundu",    "UHC Gangni",    "UHC Jiban Nagar",    "UHC Damurhuda",    "UHC Alamdanga",    "UHC Khoksa",    "UHC Daulatpur",    "UHC Mirpur"];
  var addre = (numb+" "+name1[getRandomInt(0, name1.length + 1)]+" Road").toString();
  return addre;

}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var name1 = ["Sadar Hospital Narail",    "UHC Kalia",    "UHC Lohagara",    "RTRL, Chest Disease Hospital",    "UHC Digholia",    "Chest Disease Clinic",    "UHC Shoilkupa",    "UHC Moheshpur",    "UHC Kotchandpur",    "UHC Kaliganj",    "UHC Horinakundu",    "UHC Gangni",    "UHC Jiban Nagar",    "UHC Damurhuda",    "UHC Alamdanga",    "UHC Khoksa",    "UHC Daulatpur",    "UHC Mirpur"];

 

	var name2 = ["Boxoffice","Training center","House","Agency","Company"];

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]);
	return name;

}



export const options = {
  scenarios: {
    my_scenario1: {
      executor: 'constant-arrival-rate',
      duration: '10s', // total duration
      preAllocatedVUs: 11, // to allocate runtime resources     preAll

      rate: 1, // number of constant iterations given `timeUnit`
      timeUnit: '1s',
    },
  },
};

export default function () {
  const payload = JSON.stringify({

    
        "name": generateName(),
  
        "address": generateAddress(),

        "division": 1,
        "district": 1,
        "sub_district": 1,

        "lat_long":	{"latitude": 30.7128,
        "longitude": -54.0060}
    
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+accesso };
  http.post(url+'training-center/', payload, { headers });
}
