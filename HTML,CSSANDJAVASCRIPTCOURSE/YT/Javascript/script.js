// console.log("javascript is ready");

// var number = 5;
// var string = 'Hello There'
// var isready = true;

// for (var i =0; i<10; i++){
//     console.log(i);
// }

// document.getElementById('box').innerHTML = string;


// if (number == 10){
//     console.log('yeah buddy');
// } else {
//     console.log('!Nope!');
// }
// // document.getElementById('box').innerHTML = number + 5;

// document.getElementById('box').innerHTML = number + 5; 


var groceries = ['apple', 'bananas', 'orange'];

// for (var i =0; i<groceries.length; i++){
//     console.log(groceries[i]);
// }

function listgroceries(){
    for (var i =0; i<groceries.length; i++){
        console.log(groceries[i]);
    }
}

listgroceries();


document.getElementById('box').addEventListener('click', function(){
    alert('I got clicked');
});