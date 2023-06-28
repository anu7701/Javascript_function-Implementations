function reduceImpl(numbers,func)
{
    accumulate=numbers[0];
    for(var i=1;i<numbers.length;i++)
    {
        accumulate=func(accumulate,numbers[i]);
    }
    return accumulate;
}
function sub(total,num)
{
    return total-num;
}
function add(total,num)
{
    return total+num;
}
function addRound(total,num)
{
    return total+Math.round(num);
}
console.log(reduceImpl([1,2,3,4,5],add));
console.log(reduceImpl([175,50,25],sub));
console.log(reduceImpl([15.5,2.3, 1.1, 4.7],addRound));