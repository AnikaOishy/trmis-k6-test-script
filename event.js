
import http from 'k6/http';

import accesso from './token.js';
import url from './url.js';
// import trainerPhoneNumber from './trainerphone.js';


// console.log(trainerPhoneNumber)

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
    var name1 = ["Md. Omar Faruk", "Md. Nazibul Haque", "Md. Hasibul Islam", "Nasrin Jahan Nipa", "Chondon Mondal", "Mst. Taslima Akter", "Md. Zakaria", "Imran Ali", "Mst. Sharmin Akter", "Md. Millat Hossain", "Md. Ariful Islam", "Taharul Islam", "Parvej Mosharof", "Khairunnahar", "Shibly Akter", "Md. Tamim Islam", "Nasrin Akter", "Md. Zahid Ali", "Md. Mahbub Hossain", "Md. Sabbir Ahmed"];

	var name2 = ["pop","punch","quit","reply","representative","resist","rip","rub","silly","smile","spell","stretch","stupid","tear","temporary","tomorrow","wake","wrap","yesterday","Thomas","Tom","Lieuwe",];

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]);
	return name;

}

function generateName1(){
  var name1 = ["abandoned","able","absolute","adorable","adventurous","academic","acceptable","acclaimed","accomplished","accurate","aching","acidic","acrobatic","active","actual","adept","admirable","admired","adolescent","adorable","adored","advanced","afraid","affectionate","aged","aggravating","aggressive","agile","agitated","agonizing","agreeable","ajar","alarmed","alarming","alert","alienated","alive","all",];

var name2 = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn", "Abigail", "Emily", "Elizabeth", "Mila", "Ella", "Avery", "Sofia", "Camila", "Aria", "Scarlett", "Victoria", "Madison", "Luna", "Grace", "Chloe", "Penelope", "Layla", "Riley", "Zoe", "Natalie", "Leah", "Hannah", "Lillian", "Evelyn", "Addison", "Aubree", "Ellie", "Stella", "Natalie", "Zoey", "Jasmine", "Hazel", "Natalie", "Aurora", "Brooklyn", "Bella", "Claire", "Skylar", "Liliana", "Natalie", "Aubree", "Rylee", "Allison", "Brooklyn", "Brielle", "Adalyn", "Raelynn", "Maria", "Athena", "Ximena", "Avery", "Aaliyah", "Jordyn", "Mackenzie", "Adalynn", "Harmony", "Adeline", "Ryleigh", "Melody", "Isabelle", "Brooklyn", "Arya", "Annabelle", "Kaylee", "Aaliyah", "Aurora", "Hailee", "Jasmine", "Gianna", "Aubree", "Bella", "Autumn", "Makayla", "Avery", "Brooklyn", "Brooklynn", "Bella", "Adalynn", "Raelynn", "Maria", "Lydia", "Peyton", "Makayla", "Avery", "Mariana", "Avery", "Eleanor", "Cameron", "Adalyn", "Makayla", "Avery", "Aria", "Avery", "Maria", "Naomi", "Avery", "Avery", "Mackenzie", "Autumn", "Makayla", "Avery", "Avery", "Maria", "Mackenzie", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery", "Maria", "Makayla", "Maria", "Avery", "Avery"];

var name = capFirst(name2[getRandomInt(0, name2.length + 1)]);
return name;

}


function generateDes(){
  var name1 = ["Md. Omar Faruk", "Md. Nazibul Haque", "Md. Hasibul Islam", "Nasrin Jahan Nipa", "Chondon Mondal", "Mst. Taslima Akter", "Md. Zakaria", "Imran Ali", "Mst. Sharmin Akter", "Md. Millat Hossain", "Md. Ariful Islam", "Taharul Islam", "Parvej Mosharof", "Khairunnahar", "Shibly Akter", "Md. Tamim Islam", "Nasrin Akter", "Md. Zahid Ali", "Md. Mahbub Hossain", "Md. Sabbir Ahmed"];

var name2 = ["pop","punch","quit","reply","representative","resist","rip","rub","silly","smile","spell","stretch","stupid","tear","temporary","tomorrow","wake","wrap","yesterday","Thomas","Tom","Lieuwe",];

var name = capFirst(name2[getRandomInt(0, name2.length + 1)]);
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


        
          "status": 3,
          "name": generateName(),
          "number_of_participants": 2147483647,
          "participants": 235345,
          "description": "string",
          "budget": 2147483647,
          "type": 1,
          "organization": 18,
          "coordinator": 22,
          "schedule": 2,
          "facilitator": [
            123456
          ]
        
  
    
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ accesso };
  http.post(url+'event/', payload, { headers });
}
