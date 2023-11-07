//-----------------------
// Easy Going
// -----------------------

// Write a for loop that will log the numbers 1 through 20.

for (let i=1; i<=20; i++)
{
    console.log(i)
}

//-----------------------
// Get Even
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

//-----------------------
// Wild Wild Life
// -----------------------

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = plantee[2] + 1

// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City"

// 3. Give D'Art a second hometown by adding "Hawkins".
dart.push("Hawkins")

// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy"

console.log(plantee, wolfy, dart)


//-----------------------
// Yell at the Ninja Turtles
// -----------------------

// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

// 2. Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

for (let ninja of ninjaTurtles)
{
    console.log(ninja.toUpperCase())
}

//-----------------------
// Methods, Revisited
// -----------------------
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas',
'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus',
'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Console log: the index of Titanic
function checkIndex(value,index)
{
    // if value is Titanic, then print the index
    if (value === 'Titanic')
    {
        console.log("Index of Titanic is: " + index)
    }
}
// Using forEach to get value and index of each array element
favMovies.forEach(checkIndex)

// 1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort()

// .sort() method sorted the array element in alphabetical order. This method permanently alters the array elements.
// Console log below shows the fanMovies array is now in alphabetical order.
console.log(favMovies)

// 2. Use the method pop
favMovies.pop() // removed the last element 'Volver'

// 3. push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy") // added "Guardians of the Galaxy" at the end of the array

// 4. Reverse the array
favMovies.reverse() // reversed the array elements and now "Guardians of the Galaxy" is the first element

// 5. Use the shift method
favMovies.shift() // removed the first array element which is "Guardians of the Galaxy"

// 6. unshift - what does it return?
const unshiftValue = favMovies.unshift("Godfather") 
console.log("unshift() return value: " + unshiftValue) // it added the given element, here 'Godfather' to the start of the array 
                                                    //    and returned the length of updated array. It permanently altered the array.

// 7. splice "Django Unchained" and add "Avatar" //TODO

// get the index of "Django Unchained"
const indexDjango = favMovies.indexOf('Django Unchained')

// at position indexDjango, remove the element and add Avatar in its place (in short, replace Django Unchained with Avatar)
favMovies.splice(indexDjango, 1, 'Avatar' )
// yes it permanently altered the array

// 8. slice the last half of the array //TODO
const middle = Math.round((favMovies.length) / 2)
favMovies.slice(middle)
// no slice() doesn't permanently alter the array, it returns the selected portion of array elements

// 9. //TODO
const slicedArray = favMovies.slice(middle)
console.log(slicedArray) // gives the last half elements of the array from index middle (here, index 10) to end of the array

// 10. console.log your final results
console.log(favMovies)

// console.log the index of "Fast and Furious"  //TODO
console.log(favMovies.indexOf("Fast and Furious"))  
// we didn't remove Fast and Furious since slice doesn't alter the array. We get the index of Fast and Furios as index 14

// we declared the variable favMovies with const, and yet, we were allowed to change the array.
// Declaring an array with const still lets use re-assign/update its elements because the array variable, in this case favMovies,
// doesn't hold the array elements/values. favMovies variable holds the memeory address of the first array element or the reference to the array.
// Hence, chaning array elements isn't changing the reference and so it is not chnaging the const value


//-----------------------
// Where is Waldo
// -----------------------
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];


// Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(1,1) // whereIsWaldo.splice(index to be removed, no. of elements to remove)

// Change "Neff" to "No One"
whereIsWaldo[1].splice(2,1,"No One")  // whereIsWaldo.splice(index to be replaced, no. of elements to remove, string to replace the element)
console.log(whereIsWaldo)

// Access and console.log "Waldo"
console.log(whereIsWaldo[2][1][1])  // 2 gives ["Petunia", ["Baked Goods", "Waldo"]], 1 gives ["Baked Goods", "Waldo"], 1 gives "Waldo"


//-----------------------
// Excited Kitten
// -----------------------
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

for (let i=1; i<=20; i++)
{
    console.log("Love me, pet me! HSSSSSS!")
}

// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", 
// or "...why does the red dot always get away..." at random.

const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (let i=1; i<=20; i++)
{   
    if (i%2 === 0) // for even number in loop
    {   
        const randomTalk = Math.round(Math.random()*(kittyTalk.length-1))
        console.log(kittyTalk[randomTalk])
    }
}

//-----------------------
// Find the Median
// -----------------------
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Find the median number in the following nums array, then console.log that number.

// sort the array
nums.sort()

const indexMiddle = Math.floor(nums.length/2) // getting the index of the middle element
console.log(nums[indexMiddle])




