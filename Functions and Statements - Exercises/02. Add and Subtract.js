function sum(num1,num2)
{
    return num1+num2;
}

function substract(num1,num2,num3) 
{
    let result=sum(num1,num2);
    console.log(result-num3);
}

substract(23,6,10);