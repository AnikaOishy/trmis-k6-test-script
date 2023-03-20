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
	var name1 =   [
    "Remittances from overseas Bangladeshis",
    "Foreign direct investment",
    "Export earnings",
    "International aid and grants",
    "Loans from international financial institutions such as the World Bank and Asian Development Bank",
    "Private sector investment",
    "Foreign currency reserves",
    "Donations from international organizations and non-governmental organizations",
    "Tourism revenue",
    "Income from natural resources such as gas and coal"
    ];

 

	var name2 = ["SalesMAn", "Admin" , "IT Executive", "Marketing Executive", "Developer", "Nurse", "Doctor"];

	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]);
	return name;

}
function generateAame(){
	var name1 = 

 

  [
    "Remittances from overseas Bangladeshis are an essential source of foreign exchange and have played a crucial role in the country's economic development.",
    "Foreign direct investment can bring in much-needed capital and expertise, but the government must ensure that investors comply with labor and environmental standards.",
    "Export earnings, particularly from the garment sector, are a significant source of foreign exchange, but there are concerns about the sector's labor practices and its reliance on low-wage labor.",
    "International aid and grants can help fund development projects and social programs, but they are often tied to conditions that may not align with the country's priorities.",
    "Loans from international financial institutions can be useful in financing infrastructure and other development projects, but there is a risk of debt distress if the country is unable to repay the loans.",
    "Private sector investment can bring in capital and create jobs, but there are concerns about corruption and the lack of regulatory oversight.",
    "Foreign currency reserves are important for maintaining financial stability, but they can be depleted quickly in times of economic crisis.",
    "Donations from international organizations and non-governmental organizations can support social programs and humanitarian relief efforts, but there is a risk of dependency on aid.",
    "Tourism revenue has the potential to create jobs and generate foreign exchange, but the industry has been slow to develop in Bangladesh due to security concerns and infrastructure challenges.",
    "Income from natural resources such as gas and coal can provide a significant source of revenue, but there are concerns about environmental damage and the impact on local communities."
    ];
	var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) ;
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
    "remarks": generateAame()
 
    
  });
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ accesso };
  http.post(url+'settings/source-of-funds/', payload, { headers });

}