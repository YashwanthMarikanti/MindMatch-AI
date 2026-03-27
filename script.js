function match(){

let input =
document.getElementById("problem").value.toLowerCase()

let output = ""

if(input.includes("bike")){

output = `
Best Match: TVS Raider 125

Why?
✔ Best mileage
✔ Affordable
✔ Comfortable

Score:
TVS Raider 125 — 92%
Pulsar 150 — 80%
Xtreme 125R — 85%
`
}

else if(input.includes("laptop")){

output = `
Best Match: ASUS Vivobook

Why?
✔ Performance
✔ Battery
✔ Price

Score:
ASUS — 90%
HP — 85%
Dell — 80%
`
}

else{

output = `
Best Match Found!

AI recommends the most balanced option
based on price, performance, and value.
`
}

document.getElementById("output").innerHTML = output

}
