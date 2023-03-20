
import http from 'k6/http';

import accesso from './token.js';
import url from './url.js';



function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
    var name1 = ["BRAC","IDDS","GFATM","GOB"];

	var name2 = ["pop","punch","quit","reply","representative","resist","rip","rub","silly","smile","spell","stretch","stupid","tear","temporary","tomorrow","wake","wrap","yesterday","Thomas","Tom","Lieuwe",];

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]);
	return name;

}

function generateRemark(){
  var name1 = ["International development organization", "Non-profit organization focused on infectious diseases", "Global fund to fight AIDS, tuberculosis and malaria", "Government of Bangladesh"];

var name2 = ["pop","punch","quit","reply","representative","resist","rip","rub","silly","smile","spell","stretch","stupid","tear","temporary","tomorrow","wake","wrap","yesterday","Thomas","Tom","Lieuwe",];

var name = capFirst(name1[getRandomInt(0, name1.length + 1)]);
return name;

}

export const options = {
  scenarios: {
    my_scenario1: {
      executor: 'constant-arrival-rate',
      duration: '5s', // total duration
      preAllocatedVUs: 5, // to allocate runtime resources     preAll

      rate: 1, // number of constant iterations given `timeUnit`
      timeUnit: '1s',
    },
  },
};

export default function () {
  const payload = JSON.stringify({

    
        "name": generateName(),
        "serial_no": Math.floor(Math.random() * 100000),
        "remarks": generateRemark()
  
    
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ accesso };
  http.post(url+'settings/organizations/', payload, { headers });
}
