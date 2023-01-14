function  cal(param){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result;

    
    if(param ==="+"){
        result = parseFloat(num1) + parseFloat(num2);
        document.getElementById("result").value = Math.round(result);
        console.log(result);
    }else if(param === "-"){
        result = parseFloat(num1) - parseFloat(num2);
        document.getElementById("result").value = Math.round(result);
        console.log(result);

    }else if(param === "*"){
        result = parseFloat(num1) * parseFloat(num2);
        document.getElementById("result").value = Math.round(result);
        console.log(result);

    }else if(param === "/"){
        result = parseFloat(num1) / parseFloat(num2);
        document.getElementById("result").value = Math.round(result);
        console.log(result);

    }
}