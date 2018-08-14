var date=new Date();
var hour=date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();
var str;
if(hour<5){
    str="凌晨好！";
}else if(hour<8){
    str="早上好！";
}else if(hour<11){
    str="上午好！";
}else if(hour<13){
    str="中午好！";
}else if(hour<16){
    str="下午好！";
}else if(hour<20){
    str="晚上好！";
}else{
    str="太晚了，休息吧！";
}
document.write("现在时间：  "+hour+":"+min+":"+sec+"<br>"+str); 
