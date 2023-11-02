let submitbutton = document.getElementById("submit");

submitbutton.addEventListener("click",myfunction);

function myfunction(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    console.log(height);
    console.log(weight);

    if(height<0){
        document.getElementById("height-error").innerHTML = "Enter valid height.";
    }
    if(weight<0){
        document.getElementById("weight-error").innerHTML = "Enter valid weight.";
    }if(weight>0 && height>0){
        height = height / 100;
        let bmi = weight/(height*height);
        console.log(bmi);
        bmi = bmi.toFixed(1);
        console.log(bmi);
        document.getElementById("result").innerHTML=bmi;

        
    }
}
