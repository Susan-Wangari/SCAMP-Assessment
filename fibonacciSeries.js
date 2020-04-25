function fibonacci(result,length){
    let a = result[0],
        b = result[1],
        c,
        count = 2;

        while(count< length){
            c = a + b;
            a = b;
            b = c;
           result.push(c);
            count ++;
        }
        return result;
}
console.log(fibonacci([1,2],8));
        























