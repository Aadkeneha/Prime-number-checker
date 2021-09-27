var number = document.querySelector("#num");
var result = document.querySelector("#output");
var btnclick = document.querySelector("#check");


function checkprimenumber(cnum){

    pnum = Number(cnum);
    m = pnum/2;
    count=0
    
    if (pnum===0 || pnum===1){
        result.innerText="The given number is neither a prime number nor a composite number."
    }
    else
    {
        for(var i=2;i<=m;i++){      
            if(pnum%i==0){      
             result.innerText="The given number is not a prime number."   
             var count=1;      
             break;      
            }  
        }
    }

    if (count==0 && number!=0){
        result.innerText="The given number is a prime number."
    }
}

btnclick.addEventListener("click",checkprimenumber(number))