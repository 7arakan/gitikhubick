let fn = (a) =>{
    a = String(a);
    a = a.split('');
    let arr = a.map(el => Number(el)**a.length);
    arr = arr.reduce((a, b)=> a+b)
    a = a.join('')
    return arr == +a ? true : false
}
console.log(fn(7))
console.log(fn(371))
console.log(fn(1652))