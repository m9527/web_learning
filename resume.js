function skin1(){
    var ol=document.getElementById("l2");
        ol.href = "style_1.css";
    }
    
function skin2(){
    var ol=document.getElementById("l2");
        ol.href = "style_2.css";
    }
function skin3(){
    var ol=document.getElementById("l2");
        ol.href = "style_3.css";
    }

window.onload=function(){
    function time(){
        var inn=document.getElementById("time");
        var date = new Date();
        var month = date.getMonth()+1;
        var year=date.getFullYear();
        var day=date.getDate();
        var week = date.getDay();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var week1;
        function toDbl(n){
            if (n < 10){
                return "0"+n;
            }else{
                return " " +n;
            }
        }
        switch(week)
        {
            case 0: week1='星期日'; break;
            case 1: week1='星期一'; break;
            case 2: week1='星期二'; break;
            case 3: week1='星期三'; break;
            case 4: week1='星期四'; break;
            case 5: week1='星期五'; break;
            case 6: week1='星期六'; break;
        }
        inn.innerHTML=year+'年'+month+'月'+day+'日'+week1+"<br>"+toDbl(hour)+':'+toDbl(min)+':'+toDbl(sec);
        setInterval(time,1000);
    } 
    time();
function hello(){
    var ha=document.getElementById("hao");
    var fan = new Date();
    var hour = fan.getHours();
        if(hour<5){
            ha.innerHTML="凌晨好！";
        }else if(hour<8){
            ha.innerHTML="早上好！";
        }else if(hour<11){
            ha.innerHTML="上午好！";
        }else if(hour<13){
            ha.innerHTML="中午好！";
        }else if(hour<16){
            ha.innerHTML="下午好！";
        }else if(hour<20){
            ha.innerHTML="晚上好！";
        }else{
            ha.innerHTML="太晚了，休息吧！";
        }
        
}   
hello();
}


