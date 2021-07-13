// var num1=152;
// var num2 = num1;
// var sum = 0;
// // console.log(num1 ** 3);

// while(num1!=0){
//     let digit=num1%10;
//     console.log(digit);
//    sum +=digit*digit*digit;
//     // console.log(sum);

//     num1=parseInt(num1/10);
    

// }
// if (Math.max(sum) == num2){
//     console.log(`the number is an armstrong number`);
// }
// else{
//     console.log(`the number is not an armstrongnumber`);
// }


for (i=100;i<=999;i++)
{
    let j=i;
    let sum=0;
    while(j!=0)
    {
        let digit=j%10;
        sum+=digit*digit*digit;
        j=parseInt(j/10)

    }
    if(Math.max(sum)==i)
    {
        console.log(i);
    }
}
