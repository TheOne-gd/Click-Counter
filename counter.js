let countNum = parseInt(localStorage.getItem("count")) || 0;
const count1 = document.getElementById("countNum");
count1.textContent = countNum;

function countup(){
    countNum++;
    localStorage.setItem("count", countNum);
    count1.textContent = countNum;
}
function reset(){
    countNum=0;
    localStorage.setItem("count", countNum);
    count1.textContent = countNum;
}