let x = document.getElementById("me");
x.innerHTML = "Hello Nevis";

let y = document.getElementsByClassName("sampleclass");
y[0].innerHTML = 'wecome home';

let z = document.getElementsByTagName("p");
y[0].innerHTML = 'keep pushing';

let a = document.getElementsByClassName('btn');


let array = ['nairobi', 'kisumu', 'mombasa'];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log('element'+ ""+  element);
    
}
array.forEach(
    element =>{
        console.log(`element ${element}`)
    }
)

function myfunction () {
    let arr = ['yellow', 'green', 'blue'];
    let randcolor = Math.floor(Math.random()*arr.length);
    document.getElementsByTagName('body').style.background = randcolor;
}