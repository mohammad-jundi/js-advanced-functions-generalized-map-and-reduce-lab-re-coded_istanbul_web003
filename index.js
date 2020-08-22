// Add your functions here
function map(str , fn ){   
    let result = []
    for (let i = 0; i< str.length ; i++ ){
        result.push(fn(str[i]));
    }
    return result
}

function reduce(str, fn, start) {
    const k = Object.keys(str)
    let i = 1 

    if(start){
        i = 0
    } else {
        start = str[k[0]]
    }

    for(i; i < k.length; i++){
        start = fn(start, str[k[i]])
    }
    return start
}