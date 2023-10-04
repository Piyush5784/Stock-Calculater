const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#Quantity");
const currentPrice = document.querySelector("#current-price");
const button = document.querySelector("#btn");
const output = document.querySelector(".message");

button.addEventListener("click", calculate);

function calculate() {

    const ip = parseFloat( initialPrice.value);
    const q = parseFloat( quantity.value);
    const cp = parseFloat( currentPrice.value);

    console.log(ip,q,cp)
    console.log("loss",ip > cp)
    console.log("profit", ip<cp)


    
    if (ip < cp) {
        const profit = q * (cp - ip);
        const profitPercentage = (cp/ip) * 100;
        console.log(profitPercentage)
        displayOutput("Yay!! Your Profit is " + profit + " and profit Percentage is " + Math.floor(profitPercentage) + "% :)")
    }
    else if (ip > cp) {
        const loss = q * (ip - cp);
        const lossPercentage = (ip/cp) * 100;
        displayOutput("Whoops!! Your Loss is " + loss + " and loss Percentage is " + Math.floor(lossPercentage) + " % :(");

    }
    else if (cp === ip) {
        displayOutput("No pain No gain, and no gain no pain :) ");
    }


}

function displayOutput(message) {
    output.innerText = message;
    
}

