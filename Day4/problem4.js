let bauser="abc@com";
let bapass="ab123@45";
let louser="abc@com";
let lopass="ab123@45";
if(bauser==louser){
  if(bapass==lopass){
    console.log("user can login");
  }else{
    console.log("Incorrect password");
  }
}else{
  console.log("Invalid");
}