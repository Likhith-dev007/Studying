// const button1 = document.getElementById('btn1');
// const button2 = document.getElementById('btn2');
// const h1 = document.getElementById('abc')
// let count = 0;

// button1.addEventListener('click', function() {
//   count++;
//   console.log(count);

//   //create an element

//   const li = document.createElement('li')
//   li.innerHTML = '<b>something</b>' + count
//   li.style.backgroundColor = "red"


//   //append tht element

//   h1.appendChild(li)
  
// });

// button2.addEventListener('click', function() {
//   count--;
//   console.log(count);

//   const li = document.createElement('li')
//   li.innerHTML = '<b>something</b>' + count


//   //append tht element

//   h1.appendChild(li)
// });



// const li = document.createElement('li')
// // const text = document.createTextNode('sentence' + count)
// li.textContent = 'dynaimc'+ count;
// // li.appendChild(text)
// h1.appendChild(h1)




//ES6


   const isafunction = (b) => {
    b = 200* b;
    console.log(b)

   }


isafunction(1000)
 

const arrayy = [1,2,3,4,5,6]
for(let i=0; i<arrayy.length; i++){
  const el = arrayy[i]

}

const newmap = arrayy.map(function(element){
  console.log(element)
  return 100

})

console.log(arrayy, newmap)



let consray = `djnjended



cejrfrf
frjnjmsncjdnj`
console.log(consray)



const promobj = fetch('/data.json')
promobj.then(Response => {
  const promobj2 = Response.json()
  promobj2.then(data => {
    console.log(data)
  })
  return null
}).then(finaldata => {
  console.log('final dats is ', finaldata)
})
