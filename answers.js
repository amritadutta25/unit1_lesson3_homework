//-----------------------
// Easy Going
// -----------------------

// Write a for loop that will log the numbers 1 through 20.

for (let i=1; i<=20; i++)
{
    console.log(i)
}

//-----------------------
// Easy Going
// -----------------------

// Write a for loop that will log only the even numbers in 0 through 200.
for (let i=0; i<=200; i=i+2)
{
    console.log(i)
}

//-----------------------
// Fizz Buzz
// -----------------------

// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (let i=1; i<=100; i++)
{   
    // if number is divisible by 3 and 5: (number % 3) will be equal to 0 if the number is divisible by 3 
    // and (number % 5) will be equal to 0 if the number is divisible by 5
    if ((i%3 === 0) && (i%5 === 0))
    {
        console.log("FizzBuzz")
    }
    // if number is divisible by 3: number % 3 will be equal to 0 if the number is divisible by 3
    else if (i%3 === 0)
    {
        console.log('Fizz')
    }
    // if number is divisible by 5: number % 5 will be equal to 0 if the number is divisible by 5
    else if (i%5 === 0)
    {
        console.log('Buzz')
    }
    else 
    {
        console.log(i)
    }
}