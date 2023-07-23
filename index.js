function solution(){
    let subs = 5 - 4;
    let add = 5 + 4;
    let result = subs.toString() + add.toString();
    console.log(result);
}

solution();

function factor(){
    let results = [27, 36, 45, 54, 63, 72];

    let division = results[0] / 3;

    for (let i = 1; i < results.length; i++) {
        if (results[i] % division != 0) {
            return false;
        }
    }
    return true;
}

console.log(factor()); // true o false dependiendo de los datos

