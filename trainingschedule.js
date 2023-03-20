
import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';



function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

// function generateName(){
// 	var name1 = ["coursecat1","coursecat2","coursecat3","coursecat4"];
// 	var name2 = ["Evening","Morning","Afternoon","Night","Company"];

// 	var name = name1[getRandomInt(0, name1.length + 1)] + '-' + name2[getRandomInt(0, name2.length + 1)];
// 	return name;

// }
function generatefirst(){
	var name1 = [
    "2023-01-01",
    "2023-01-08",
    "2023-01-15",
    "2023-01-22",
    "2023-01-29",
    "2023-02-05",
    "2023-02-12",
    "2023-02-19",
    "2023-02-26",
    "2023-03-05",
    "2023-03-12",
    "2023-03-19",
    "2023-03-26",
    "2023-04-02",
    "2023-04-09",
    "2023-04-16",
    "2023-04-23",
    "2023-04-30",
    "2023-05-07",
    "2023-05-14"
  ];
  
  
	var name2 = ["Evening","Morning","Afternoon","Night","Company"];

	var name = name1[getRandomInt(0, name1.length + 1)];
	return name;

}
function generatelast(){
	var name1 = [
    "2023-01-07",
    "2023-01-14",
    "2023-01-21",
    "2023-01-28",
    "2023-02-04",
    "2023-02-11",
    "2023-02-18",
    "2023-02-25",
    "2023-03-04",
    "2023-03-11",
    "2023-03-18",
    "2023-03-25",
    "2023-04-01",
    "2023-04-08",
    "2023-04-15",
    "2023-04-22",
    "2023-04-29",
    "2023-05-06",
    "2023-05-13",
    "2023-05-20"
  ];
  
	var name2 = ["Evening","Morning","Afternoon","Night","Company"];

	var name = name1[getRandomInt(0, name1.length + 1)];
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

    
        // "training_course": getRandomInt(22,23),
        // "training_center": getRandomInt(80,90),
        "training_course": getRandomInt(1,5),
        "training_center": getRandomInt(1,5),
        "start_date": generatefirst(),
        "end_date": generatelast()
      
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+accesso };
  http.post(url+'training-course/training-schedule/', payload, { headers });
}
