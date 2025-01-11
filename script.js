let a = Number(prompt("1 - raqamni kiriting"));
let b = prompt(`Tanlang \n 1)+ \n 2)/ \n 3)* \n 4)-`);
let c = Number(prompt("2 - raqamni kiriting"));

let d = document.createElement("div");
document.body.appendChild(d);
d.style.width = '500px';
d.style.height = '150px';
d.style.backgroundColor = 'yellow';
d.style.margin = '100px auto';
d.style.display = 'flex';
d.style.justifyContent = 'space-evenly';
d.style.alignItems = 'center';

let d1 = document.createElement("div");
d.appendChild(d1);
d1.textContent = `${a}`;
d1.style.width = '50px';
d1.style.height = '50px';
d1.style.border = '1px solid black';
d1.style.textAlign = 'center';
d1.style.alignContent = 'center'

let d2 = document.createElement("div");
d.appendChild(d2);
d2.style.width = '50px';
d2.style.height = '50px';
d2.style.border = '1px solid black';
d2.style.textAlign = 'center';
d2.style.alignContent = 'center'

let d3 = document.createElement("div");
d.appendChild(d3);
d3.textContent = `${c}`;
d3.style.width = '50px';
d3.style.height = '50px';
d3.style.border = '1px solid black';
d3.style.textAlign = 'center';
d3.style.alignContent = 'center'

let d22 = document.createElement("div");
document.body.appendChild(d22); 
d22.textContent = "create";
d22.style.width = '300px';
d22.style.height = '50px';
d22.style.backgroundColor = 'green';
d22.style.color = 'white';
d22.style.textAlign = 'center';
d22.style.margin = '20px auto';
d22.style.alignContent = 'center'

let d33 = document.createElement("div");
document.body.appendChild(d33);
d33.style.width = '300px';
d33.style.height = '100px';
d33.style.backgroundColor = 'red';
d33.style.color = 'white';
d33.style.textAlign = 'center';
d33.style.alignContent = 'center'
d33.style.margin = '30px auto';

if (b == "1") {
    d2.textContent = '+';
} else if (b == "2") {
    d2.textContent = '/';
} else if (b == "3") {
    d2.textContent = '*';
} else if (b == "4") {
    d2.textContent = '-';
}

d22.addEventListener("click", function () {
    if (b == "1") {
        d33.textContent = `Natija: ${a + c}`;
    } else if (b == "2") {
        d33.textContent = `Natija: ${a / c}`;
    } else if (b == "3") {
        d33.textContent = `Natija: ${a * c}`;
    } else if (b == "4") {
        d33.textContent = `Natija: ${a - c}`;
    }
});
