



// let count = 0;
// function counter(){
//     count = count + 1;
//     console.log(count);
//     document.getElementById('countElement').innerText = count;


// }

// document.getElementById('incrementBtn').addEventListener('click', counter);

// function save(){
//     console.log(count)
// }







// let bonusPoint = 50;
// console.log(bonusPoint+50) 
// console.log(bonusPoint/2)
// console.log(bonusPoint+20)


// function countNumber(){
//   console.log(42)

// }
// countNumber()

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;
// let totalSum = lap1+lap2+lap3

// function countSum (){

//     console.log(totalSum)
// }
// countSum()


// let lapsCompleted = 0;

// function incrementLabs (){
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }
// incrementLabs()

// let button = document.getElementById("butoni");
// button.addEventListener("click", getAlbums);
// function getAlbums() {
//     let inputi = document.getElementById("albumId").value;
//     console.log("Inside getAlbums", inputi);
//     fetch(`https://jsonplaceholder.typicode.com/albums/${inputi}`)
//         .then(response => response.json())
//         .then((result) => {
//             console.log("Rezultati:", result)
//             display(result);
//         });
// }
// function display(result) {
//     let outputDiv = document.createElement("div");
//     outputDiv.id = "output";
//     let id = document.createElement("p");
//     let title = document.createElement("p");
//     let userID = document.createElement("p");
//     id.textContent = `Id: ${result.id}`;
//     title.textContent = `Title: ${result.title}`;
//     userID.textContent = `User Id: ${result.userId}`;
//     outputDiv.appendChild(id);
//     outputDiv.appendChild(title);
//     outputDiv.appendChild(userID);
//     let container = document.querySelector(".container");
//     container.appendChild(outputDiv);
// }
// Krijoni 3 inpute title, body, userId dhe nje button.Ne klik te butonit beni nje thirrje ne backend
//  per te krijuar nje Postim te ri ne databaze duke perdorur kete endpoint "
const title = document.getElementById("title")
const userId = document.getElementById("userId")
const body = document.getElementById("body");
let buton = document.getElementById("btn");
buton.addEventListener("click", updateProduct);

function updateProduct(){
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        
            title: title.value,
            body: body.value,
            userId: userId.value,
          
    }),
  })
    .then((result) => result.json())
    .then((json) => {
      console.log("Added user:", json);
    });
}





























