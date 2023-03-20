import http from 'k6/http';
import accesso from './token.js';
import url from './url.js';



function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateDivision(){
	

 

	

	var names = getRandomInt(1, 9)
	return names;

}


function generateName(){
	var name1 = ["Orientation on TB for Program Organizers (PO) and TLCA",
  "Training on TB care for community clinic health care provider",
  "One day orientation of field staff and store keeper on LTBI at district",
  "Training of Doctors (3 Days) on diagnosis of child TB",
  "5-Day training on X-Ray, EP, DRTB, IC, TB/HIV for Medical doctors & Child TB",
  "3-Day Training/refresher on PMDT for doctors",
  "2-Day training for mid-level staff on DRTB and IC",
  "2-Day training on field level Ambulatory MDR-TB patient management",
  "1-Day training /retraining HIV counselor and other staff to identify and refer TB suspects",
  "2-Day refresher training for CDH/NIDCH and UHC for scale up shorter & Longer regimen (Central/ Division)",
  "3-Day Management training for DSMOs",
  "1-Day orientation on sputum collection and transportation from peripheral laboratory to GeneXpert Centre (NTRL/RTRL)",
  "2-Day training of doctors on TOT for TPT",
  "3-Day Training of doctor on diagnosis of Child TB",
  "2-Day training/retraining on Procurement and Supply Chain Management & Logistics for TLCA & Storekeeper",
  "2-Day Financial Management training for DSMO/POs/Statistician/Accountant",
  "Refresher Training on electronic indent (WIMS)",
  "1-Day Orientation and training for field workers on presumptive TB identification, referral and DOT",
  "1-Day Training on TB Care for Community Clinic Health Care Provider (CHCP)",
  "2-Day training on EQA Lab",
  "1-Day orientation at Medical College Hospital",
  "1-Day Training of Health Worker on childhood TB (Divisional Level)",
  "One day orientation for working group in every treatment centre of LTBI involving GOB and implementing partners at district level on LTBI including filling up recording and reporting format",
  "1-Day Training for Capacity building on producing periodic analytic report and data use and analysis for decision making using electronic recording and reporting system (Upazila Manager, DSMO, PO and NGO Supervisor at urban) (For Districts)",
  "6-Day Training on LED microscopy",
  "3-Day training on GeneXpert Testing",
  "14-Day training of lab staffs on Culture and DST",
  "Basic Training of Community Health Workers",
  "Refresher Training for Lab Technician",
  "Technical Assistance, Capacity Building (Basic Training on TB, HIV, COVID-19, TPT)",
  "Basic Training on Truenat Implementation",
  "GX EQA training of MT Labs",
  "Training on Extra Pulmonary TB (EP-TB) and Stool Sample Processing for GeneXpert and Culture and workshop with clinicians",
  "Preventive and Routine Maintenance of TB Laboratory Equipment",
  "Training on e-Learning platform",
  "Training on GX/MTB/XDR operation and implementation",
  "Training on QMS and monitoring and supervision of RTRLs and GX sites"];


	var name = name1[getRandomInt(0, name1.length + 1)];
	return name;

}

function generateDescr(){
	var name1 = ["Orientation ",
  "Training",
  "One day orientation",
  "Training",
  "5-Day training",
  "3-Day Training",
  "2-Day training ",
  "2-Day training ",
  "1-Day training ",
  "2-Day refresher ",
  "3-Day Management",
  "1-Day orientatiection ",
  "2-Day training ",
  "3-Day Training ",
  "2-Day training",
  "2-Day Financialing ",
  "Refresher Training",
  "1-Day Orientation ",
  "1-Day Training",
  "2-Day training ",
  "1-Day orientation",
  "1-Day Training ",
  "One day orientation",
  "1-Day Training ",
  "6-Day Training on LED microscopy",
  "3-Day training on GeneXpert Testing",
  "14-Day training of lab staffs on Culture and DST",
  "Basic Training of Community Health Workers",
  "Refresher Training for Lab Technician",
  "Technical ",
  "Basic ",
  "GX EQA ",
  "Training ",
  "Preventive ",
  "Training ",
  "Training ",
  "Training "];


	var name = name1[getRandomInt(0, name1.length + 1)];
	return name;

}
function generateObj(){
	var name1 = [" TLCA",
  "Training on TB care ",
  " LTBI  ",
  "Diagnosis of child TB",
  "X-Ray, EP, DRTB, IC, TB/HIV for Medical doctors & Child TB",
  "Training/refresher on PMDT for doctors",
  "training for mid-level staff on DRTB and IC",
  "training on field level Ambulatory MDR-TB patient management",
  "refresher training for CDH/NIDCH and UHC for scale up shorter & Longer regimen (Central/ Division)",
  "Management training for DSMOs",
  "orientation on sputum collection and transportation from peripheral laboratory to GeneXpert Centre (NTRL/RTRL)",
  "training of doctors on TOT for TPT",
  "Training of doctor on diagnosis of Child TB",
  "training/retraining on Procurement and Supply Chain Management & Logistics for TLCA & Storekeeper",
  "Financial Management training for DSMO/POs/Statistician/Accountant",
  "Refresher Training on electronic indent (WIMS)",
  "Orientation and training for field workers on presumptive TB identification, referral and DOT",
  "Training on TB Care for Community Clinic Health Care Provider (CHCP)",
  "training on EQA Lab",
  "orientation at Medical College Hospital",
  "Training of Health Worker on childhood TB (Divisional Level)",
  "orientation for working group in every treatment centre of LTBI involving GOB and implementing partners at district level on LTBI including filling up recording and reporting format",
  "Training for Capacity building on producing periodic analytic report and data use and analysis for decision making using electronic recording and reporting system (Upazila Manager, DSMO, PO and NGO Supervisor at urban) (For Districts)",
  "Training on LED microscopy",
  "training on GeneXpert Testing",
  "training of lab staffs on Culture and DST",
  "Community Health Workers",
  "Lab Technician",
  "(Basic Training on TB, HIV, COVID-19, TPT)",
  "Basic Training on Truenat Implementation",
  "GX EQA training of MT Labs",
  "Training on Extra Pulmonary TB (EP-TB) and Stool Sample Processing for GeneXpert and Culture and workshop with clinicians",
  " TB suspects",
  "Preventive and Routine Maintenance of TB Laboratory Equipment",
  "Training on e-Learning platform",
  "Training on GX/MTB/XDR operation and implementation",
  "Training on QMS and monitoring and supervision of RTRLs and GX sites"];


	var name = name1[getRandomInt(0, name1.length + 1)];
	return name;

}


export const options = {
  scenarios: {
    my_scenario1: {
      executor: 'constant-arrival-rate',
      duration: '20s', // total duration
      preAllocatedVUs: 21, // to allocate runtime resources     preAll

      rate: 1, // number of constant iterations given `timeUnit`
      timeUnit: '1s',
    },
  },
};

export default function () {
  const payload = JSON.stringify({
    
        "title": generateName(),
        "description": generateDescr(),
        "code": Math.floor(Math.random() * 1000),
      
     
        "course_category": getRandomInt(1,7),
        
  
        

    
    
  });
  
  const headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+ accesso };
  http.post(url+'training-course/', payload, { headers });
  

}
