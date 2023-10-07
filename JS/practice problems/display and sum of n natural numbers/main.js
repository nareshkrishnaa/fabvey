function natNum(){
    let n = parseInt(document.getElementById("n").value);
    let resultString="";
    let sum=0;
    for (let i = 1; i <= n; i++) {
        resultString=resultString+" "+i;
        sum+=i;
      }
      console.log(resultString);
      document.getElementById("resultString").textContent=resultString;
      document.getElementById("resultSum").innerHTML=sum;

}