function naming(){

  let CC = parseInt(document.getElementById("main").value);
  let YY = parseInt(document.getElementById("name").value);
  let MM=parseInt(document.getElementById("Form").value);
  let DD=parseInt(document.getElementById("akan").value);

  let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sartuday"];
  let femaleNames=["Akosua", "Adwoa","Abenaa","Akua","Yaa"," Afua","Ama"];
  let maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
 
  if(CC.value =="" || YY.value =="" || MM.value =="" || DD.value ==""){
      alert("No blank values allowed");
  }

  let  gender = document.querySelector('input[name="gender"]:checked').value;
  let  dayOfTheWeek = parseInt( ( (CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;

  if(gender==="male") {
    if(dayOfTheWeek===0){
      alert("You were born on: " + day[0]);
      alert("Your Akan name is: " + maleNames[0]);
    } else if(dayOfTheWeek===1){
      alert("You were born on: " + day[1]);
      alert("Your Akan name is: " + maleNames[1]);
    } else if(dayOfTheWeek===2){
      alert("You were born on: " + day[2]);
      alert("Your Akan name is: " + maleNames[2]);
    } else if(dayOfTheWeek===3){
      alert("You were born on: " + day[3]);
      alert("Your Akan name is: " + maleNames[3]);
    } else if(dayOfTheWeek===4){
      alert("You were born on: " + day[4]);
      alert("Your Akan name is: " + maleNames[4]);
    } else if(dayOfTheWeek===5){
      alert("You were born on: " + day[5]);
      alert("Your Akan name is: " + maleNames[5]);
    } else if(dayOfTheWeek===6){
      alert("You were born on: " + day[6]);
      alert("Your Akan name is: " + maleNames[6]);
    }



