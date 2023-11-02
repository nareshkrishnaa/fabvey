    let count = document.getElementById("count").value;
    console.log("sfsdfsd");
    console.log(count);







let likebutton = document.getElementById("like");
console.log(likebutton);
let dislikebutton = document.getElementById("dislike");
console.log(dislikebutton);

likebutton.addEventListener("click",handleLikeClick);
dislikebutton.addEventListener("click",handleDisLikeClick);

let resetbutton = document.getElementById("reset");
resetbutton.addEventListener("click",resetFunction);
function resetFunction(){
    document.getElementById("count").value = 0;
}


function handleLikeClick(){
    console.log(count);
    count++;
    document.getElementById("count").value = count;

}

function handleDisLikeClick(){
    console.log(count);
    count--;
    document.getElementById("count").value = count;
}