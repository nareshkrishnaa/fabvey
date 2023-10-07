function evenNatNum(){
    let n = parseInt(document.getElementById("n").value);
    let resultString="";
    let sum=0;
    
    if(n>0){
        let i = 0;
        let sum=0;
        let resultString ="";
        while(n>0){
            i+=2;
            resultString = resultString+i+" ";
            sum+=i;
            n--;
        }
        document.getElementById("resultString").textContent=resultString;
      document.getElementById("resultSum").innerHTML=sum;

    }else{

      resultString="ERROR !! Enter a even natural number";  
      document.getElementById("resultString").textContent=resultString;
      document.getElementById("resultSum").innerHTML=resultString;

    }

    

}