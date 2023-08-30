// const { getQuote } = require("onepiecequotes");
// { getQuote } from "onepiecequotes";
//console.log(getQuote(2));

import { getQuote } from "./onepiecequotes2/index.js";

let randNum = Math.floor(Math.random()*5);


document.getElementById("btn").addEventListener("click",() => {
    console.log((randNum));
    document.getElementById("quote").innerHTML = getQuote(randNum);
});




