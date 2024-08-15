const day=document.getElementById("day")
const month=document.getElementById("month");
const year=document.getElementById("year");
const date= new Date();
const currentDay=date.getDate();
const currentMonth=date.getMonth()+1;
const currentYear=date.getFullYear(); 



const dashYear=document.getElementById("dash-year");
const dashMonth=document.getElementById("dash-month");
const dashDays= document.getElementById("dash-days")


const dayError=document.getElementById("day-error");
const monthError=document.getElementById("month-error");
const yearError=document.getElementById("year-error");


function calculateAge(){
     errorFunction();
     dashYear.innerHTML=currentYear-year.value;
     dashMonth.innerHTML=currentMonth-month.value;
     

     if(dashMonth.innerHTML<0){
          dashYear.innerHTML-=1;
          dashMonth.innerHTML=currentMonth+(12-month.value);
     }

 
     else if(day.value<currentDay){
          dashDays.innerHTML=currentDay
     }
     else if(day.value>currentDay){
          dashDays.innerHTML=day.value-currentDay;
     }
   
     
     
}

function errorFunction(){

   
     if(day.value>31){
          day.style.borderColor="hsl(0, 100%, 67%)";
          month.style.borderColor="hsl(0, 100%, 67%)";
          year.style.borderColor="hsl(0, 100%, 67%)"
          dayError.innerHTML="Must be a valid day";
          dashDays.innerHTML="--";
          dashMonth.innerHTML="--";
          dashYear.innerHTML="--";
          
     }
     else if(month.value>12){
          month.style.borderColor="hsl(0, 100%, 67%)";
          monthError.innerHTML="Must be a valid month";
          dashDays.innerHTML="--";
          dashMonth.innerHTML="--";
          dashYear.innerHTML="--";

     }
     else if(year.value>currentYear){
          year.style.borderColor="hsl(0, 100%, 67%)"
          yearError.innerHTML="Must be in the past";
          dashDays.innerHTML==="--";
          dashMonth.innerHTML==="--";
          dashYear.innerHTML==="--";

     }
     else if(day.value===""||month.value===""||year.value===""){
          day.style.borderColor="hsl(0, 100%, 67%)";
          dayError.innerHTML="This field is required";
          month.style.borderColor="hsl(0, 100%, 67%)";
          monthError.innerHTML="This field is required";
          year.style.borderColor="hsl(0, 100%, 67%)";
          yearError.innerHTML="This field is required";
          dashDays.innerHTML="--";
          dashMonth.innerHTML="--";
          dashYear.innerHTML="--";

     }
    else if(day.value=" "){
     dayError.innerHTML=""
     day.style.borderColor="hsl(0, 0%, 86%)";
    }
    else if(month.value=" "){
     monthError.innerHTML="";
     year.style.borderColor="hsl(0, 0%, 86%)";
    }
 
    else if(year.value=" "){
     yearError.innerHTML="";
     year.style.borderColor="hsl(0, 0%, 86%)";
    }

    else if(month.value===2 &&day.value>28 && year.value%4 !==0){
     dayError.innerHTML="Must be a valid day";
     day.style.borderColor="hsl(0, 100%, 67%)";
     month.style.borderColor="hsl(0, 100%, 67%)";
     dashDays.innerHTML="--";
     dashMonth.innerHTML="--";
     dashYear.innerHTML="--";
    }

}


document.addEventListener("keydown", (e) => {
     if (e.key==="Enter"){
          calculateAge()
     }
     else{
          
     }})

