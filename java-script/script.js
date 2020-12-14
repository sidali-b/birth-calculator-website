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





