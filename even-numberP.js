function evenNumbers ( ){
    let count = 0;
    for ( let i=1; i<=20; i++){
        // console.log(i);
        if( i%2 ==0){
            count = count + 1;
        }
    }
    return count;
}
// console.log(evenNumbers());

// Print all odd numbers from 1-20
function oddNumberPrint (n){
    let count = 0;
    for( let i=1; i < n; i++){
        if ( i%2 != 0){
            count = count + 1;
        }
    }
    return count;
}
// console.log( oddNumberPrint(30));

function oddN (){
    for( let i=0; i<=20; i++){
        if ( i%2 == 0){
            console.log( i)
        }
    }
}
// console.log( oddN());

// count numbers divisible by 3 from 1-n
function cnuntNumbersDivisibleBy3(n){
    let count = 0;
    for ( let i = 1; i<n.length; i++){
        // console.log(i)
        if ( i%3 == 0){
            count = count + 1;
        }
    }
    return count;
}

const numbers= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 30, 31, 90, 80, 41, 31, 54, 40, ];
let count = cnuntNumbersDivisibleBy3(numbers);
console.log(count);