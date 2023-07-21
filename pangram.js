
const inputvalue=document.getElementById('inputval');
const inputstring=inputvalue.value;
const isPangram = ()=> {
    console.log("yes");
    let abcs='abcdefghijklmnopqrstuvwxyz'.split('');
    let sentenceL=inputstring.toLowerCase();
    for(let i=0 ; i < abcs.length; i++){
        if(sentenceL.indexOf(abcs[i])<0) 
            return false}
        return true
    };
    const btn = document
    .getElementById("btn")
    .addEventListener("click", function () {
        document.getElementById("output").textContent =
            isPangram(inputvalue.value);
        console.log(isPangram(inputvalue.value));
    });