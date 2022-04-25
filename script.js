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

function carsList(){
    const cars = ['saab', 'volvo', 'BMW'];
    const uiListElement = document.getElementById('car_types');
    for(let carItem = 0; carItem<cars.length; carItem++){
        const element = cars[carItem];
        const node = document.createElement('li');
        const textnode = document.createTextNode(element);
        node.appendChild(textnode);
        uiListElement.appendChild(node);

    }
}
carsList()

function loopsMap(){
    //create a map

    const fruits = new Map([
        ['apples', 500],
        ['banans', 300],
        ['oranges', 200]
    ])

    //console.log(fruits);

    fruits.forEach(function(value, key){
        console.log('key' + key + 'value' + value)
    })
}

loopsMap();