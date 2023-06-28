function mapImpl(numbers,func)
{
    result=[]
    for(var i=0;i<numbers.length;i++)
    {
        let t=func(numbers[i]);
        result.push(t);
    }
    return result;
}
function multiply10(num)
{
    return num*10;
}
function multiply5(num)
{
    return num*5;
}

nums=[2,3,4,5]
n=mapImpl(nums,multiply10);
console.log(n);
m=mapImpl(nums,multiply5);
console.log(m);