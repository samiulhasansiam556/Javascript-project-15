

let name = document.getElementById("name");

name.addEventListener("keyup", (event)=>{
    document.getElementById("name1").innerHTML = event.target.value;
});


let mail = document.getElementById("mail");

mail.addEventListener("keyup", (event)=>{
    document.getElementById("mail1").innerHTML = event.target.value;
});

let tp = 0;
let items = ["somossa", "puri", "roll", "muri"];
items.forEach(item => {
    let input = document.getElementById(item);
    input.addEventListener("change", (event) => {
        let price = 10; // Assuming each item has a price of 10
        let quantity = event.target.value;
        let amount = price * quantity;
        let newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${item.charAt(0).toUpperCase() + item.slice(1)}</td> <td>${price}</td> <td>${quantity}</td> <td>${amount}</td>`;
        document.getElementById("divt").appendChild(newRow);
        tp +=amount;
        document.getElementById("ta").innerHTML = `<h3 id="ta">Total Amount: ${tp} </h3>`;
    });
});

  

// let somossa = document.getElementById("somossa"); // No element with id "somossa" in HTML provided

// // Fixed event listener and interpolation syntax
// somossa.addEventListener("keyup", (event) => {
//     let sp = 10;
//     let sq = event.target.value;
//     document.getElementById("divt").innerHTML = `<td>Somossa</td> <td>${sp}</td> <td>${sq}</td> <td>${sp * sq}</td>`;
//     // Corrected interpolation syntax and added missing <td> tags
// });

// let puri = document.getElementById("puri"); // No element with id "somossa" in HTML provided

// // Fixed event listener and interpolation syntax
// puri.addEventListener("keyup", (event) => {
//     let pp = 10;
//     let pq = event.target.value;
//     document.getElementById("divt").innerHTML = `<td>Puri</td> <td>${pp}</td> <td>${pq}</td> <td>${pp * pq}</td>`;
//     // Corrected interpolation syntax and added missing <td> tags
// });


// let roll = document.getElementById("roll");
// roll.addEventListener("keyup", (event) => {
//     let rp = 10;
//     let rq = event.target.value;
//     document.getElementById("divt").innerHTML = `<td>Roll</td> <td>${rp}</td> <td>${rq}</td> <td>${rp * rq}</td>`;
//     // Corrected interpolation syntax and added missing <td> tags
// });

// let muri = document.getElementById("muri"); // No element with id "somossa" in HTML provided

// // Fixed event listener and interpolation syntax
// muri.addEventListener("keyup", (event) => {
//     let mp = 10;
//     let mq = event.target.value;
//     document.getElementById("divt").innerHTML = `<td>Muri</td> <td>${mp}</td> <td>${mq}</td> <td>${mp * mq}</td>`;
//     // Corrected interpolation syntax and added missing <td> tags
// });