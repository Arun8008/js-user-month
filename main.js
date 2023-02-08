/*---------User Month--------*/


let k=parseInt(prompt("Enter The Month"))
date.setHours(k);
var d=date.getHours();
if(0<=d && d<=3){
  document.write("Spring")
  document.write("<br>")
}
else if(4<=d && d<=7){
  document.write("Summer")
  document.write("<br>")
}
else if(8<=d && d<=11){
  document.write("Winter")
  document.write("<br>")
}
else{
   document.write("ERROR")
}