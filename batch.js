
import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var name1 = ["coursecat1","coursecat2","coursecat3","coursecat4"];
	var name2 = ["Evening","Morning","Afternoon","Night","Company"];

	var name = name1[getRandomInt(0, name1.length + 1)];
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
    
        // "name": generateName(),
        // "duration": getRandomInt(10,50),
        // "coordinator": getRandomInt(1,22),
        // "organization": getRandomInt(2,19),
        // "source_of_fund": getRandomInt(2,5),
        // "collaboration": getRandomInt(1,5),
        // "training-center":getRandomInt(1,9),
        // "training_course_schedule": 7,
        // "initial_cost": 1000,
        // "final_cost": 100000,
        // "status":1
        // "name": generateName(),
        // "duration": 20,
        // "coordinator": 1,
        // "organization": 1,
        // "source_of_fund": 1,
        // "collaboration": 1,
        // "training-center":1,
        // "training_course_schedule": 1,
        // "initial_cost": 1000,
        // "final_cost": 100000,
        // "status":3


        "name": generateName(),
         "status": getRandomInt(1,3),
        "duration": 10,
        "initial_cost": 15,
        "final_cost": 95,
        "coordinator": getRandomInt(1,2),
        "organization": getRandomInt(1,2),
        "source_of_fund": getRandomInt(1,2),
        "training_course_schedule": getRandomInt(13,19)


      
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ accesso };
  http.post(url+'batch/', payload, { headers });
}
