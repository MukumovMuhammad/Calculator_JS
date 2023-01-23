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




// Arrays

const array = ['a', 'b', 'c', 'd']

// push
array.push('apple');
console.log(array);

// pops
array.pop();
console.log(array);

// unshift
array.unshift("apple")

// splice
// array.splice(start_index, delete_count, Element we wanna add)

array.splice(1,2, "apple" ,"window")

console.log(array)