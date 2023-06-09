import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';




function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
	var name1 = [    "Anatomy",     "Physiology",     "Microbiology",     "Biochemistry",     "Genetics",     "Evolution",     "Ecology",     "Marine Biology",     "Botany",     "Zoology",     "Immunology",     "Cell Biology",     "Developmental Biology"];

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
    "title": generateName(),
    "description": "Demo data"

    
    
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ accesso };
  http.post(url+'training-course/course-category/', payload, { headers });

}