function filterImpl(nums,func)
{
    result=[]
    for(var i=0;i<nums.length;i++)
    {
        if(func(nums[i]))
        {
            result.push(nums[i]);
        }
    }
    return result;
}

function checkAge(age)
{
    return age>=18;
}
nums=[20,9,60,7,15]
console.log(filterImpl(nums,checkAge)); 