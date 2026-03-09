function calculate(operation){
    let number1=Number(document.getElementById("number1").value);
    let number2=Number(document.getElementById("number2").value);
    let result=0;

    if(operation=="toplama"){
        result=number1+number2;
    }
    else if(operation=="vurma"){
        result=number1*number2;
    }
    else if(operation=="cixma"){
        result=number1-number2;
    }
    else if(operation=="bolme"){
        if (number2 !== 0) {
            result = number1 / number2;
        }
        else{
            result = "Error";
        }
    }
    document.getElementById("result").value=result;
}
