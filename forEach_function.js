function forEachImpl(numbers,func)
{
    for(var i=0;i<numbers.length;i++)
    {
        if(func.length==2)
        {
            func(numbers[i],i);
        }
        else if(func.length==1)
        {
            func(numbers[i]);
        }
    }
}
function display1(string,idx)
{
    console.log(idx+": "+string);
}
function display2(string)
{
    console.log(string);
}
fruits=['apple','orange','banana']
forEachImpl(fruits,display1);
forEachImpl(fruits,display2);