function calculate(){
    let finalval=document.querySelector("#operator").value;
    let evaluation=eval(finalval);
    document.querySelector("#operator").value=evaluation;
}
function display(value){
  document.querySelector("#operator").value+=value;
}
function reset(){
    document.querySelector("#operator").value="";
}