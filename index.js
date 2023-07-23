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

function one(n){

    if (n === 0){
        return 0;
      }
        let steps = 0;
        while (n != 1) {
            if (n % 2 == 0) {
                n = n / 2;
            } else if (n == 3 || n % 4 == 1) {
                n = n - 1;
            } else {
                n = n + 1;
            }
            steps++;
        }
        return steps;
    }
    
    console.log(one(15));
