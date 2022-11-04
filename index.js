let students;
let fruit = 'Orange'

students = 'sade'
console.log(students)
console.log(fruit)

let num1 = 23
let test = false

console.log(typeof(test))
console.log(typeof(num1).toString)

console.log(1+3*3)

console.log(`abcd`)
 

  if(num1 == test){
    console.log('num1 is normal')
  }else{
    console.log('num1 is abnormal')
  }


  let age = 20
  if(age >18){
    console.log('permission is granted')
  }else if(age >= 18){
    console.log('permission granted')
  } else{
    console.log('permission denied')
  }
    

  let num3 = 100.009
  console.log(Math.floor(num3))
  console.log(Math.trunc(num3))


  let firstName = 'Abdulrahman Oloyede'

  console.log(firstName.length)
  console.log(firstName.toUpperCase())
  console.log(firstName.toLowerCase())


   let arr = [10,2,3,4,5,6,7,8,9]
  // console.log(arr.length)
  // console.log(arr.push(56))



//for(begin,condition,step){
//}

//for(let i = 0; i < arr.length; i+= 2){
 //       console.log(arr[i] )
 //       console.log(arr[i] )
//}


//function
  //  function sum(parameters){
 //function body
 //return
 //   }

//given an array of number find the sum
//let arr = [1,2,3,4,5,6,7,8,9]

function sumNumber(arr){
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        sum += arr[i];    
    }

    return sum;
}
console.log("The sum of the array value is: "+ sumNumber([1,2,3,4,5,6,7,8,9]));
console.log("The sum of the Second array is: "+ sumNumber([100,56,78,09]));