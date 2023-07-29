function display(number) {
    document.getElementById('value').value+=number; 
}
function calculate() {
    var value = document.getElementById('value').value;
    var answer = eval(value)
    document.getElementById('value').value=answer;
}
function clr(){
    document.getElementById('value').value=''
}