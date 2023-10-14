#!/usr/bin/env node
// Quiz --- inquirer,chalk,node-banner
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import result from "./result.js";
import{ q1,q2,q3,q4,q5} from "./question.js";
//  import { setTimeout } from "timers/promises";

// async function banner() {
//      await new Promise((res)=>{
//               showBanner ('\n QUIZ')
//               setTimeout(res,2000);
//      });
// }

// (async () => {
//     await showBanner('Quiz', '');
// })();// immediately invoke function expression ... IIFE

async function show() {
    await showBanner("Quiz")
}
await show();


// let totalpoints = 0;
 let answer1 = await q1();
 let score= await result (answer1);
//  totalpoints = score
let answer2 =await q2 ();
score= await result (answer2);
// totalpoints = totalpoints + score

let answer3 =await q3 ();
score= await result (answer3);


let answer4 =await q4 ();
score= await result (answer4);

let answer5 =await q5 ();
score= await result (answer5);


 console.log(score);





 