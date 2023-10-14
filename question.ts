import inquirer from "inquirer";
import chalk from "chalk";


 export async function q1() {
   const ans1 = await inquirer.prompt([
    {
        name:"question1",
        type:"list",
        message:" \n Q1: when pakistan came into being? \n",
        choices:["14 Aug 1947" ,"15 Aug 1947", "23 March 1947"]

    }
   ]);
    return(ans1.question1 == "14 Aug 1947");

};



export async function q2() {
    const ans2 = await inquirer.prompt([
     {
         name:"question2",
         type:"list",
         message:" \n Q2: who was first prime minister of pakistan? \n",
         choices:["Allama iqbal" ,"Muhammad Ali Jinnah", "liaquat Ali Khan"]
 
     }
    ]);
     return(ans2.question2 == "liaquat Ali Khan");
 
 };
export async function q3() {
    const ans3 = await inquirer.prompt([
     {
         name:"question3",
         type:"list",
         message:" \n Q3: who wrote National anthem  of pakistan? \n",
         choices:[  "Chaudry Rehmat Ali", "Allama iqbal","Hafeez Jalandhri "]
 
     }
    ]);
     return(ans3.question3 == "Hafeez Jalandhri");
 
 };
export async function q4() {
    const ans4 = await inquirer.prompt([
     {
         name:"question4",
         type:"list",
         message:" \n Q4: In which year did pakistan win the cricket world cup? \n",
         choices:["1993", "1997" ,"1992","1973"]
 
     }
    ]);
     return(ans4.question4 == "1992");
 
 };
 
export async function q5() {
    const ans5 = await inquirer.prompt([
     {
         name:"question5",
         type:"list",
         message:" \n Q5: which is the longest river in pakistan? \n",
         choices:["River Ravi", "River Sindh" ,"River Chenab","River Sutlej"]
 
     }
    ]);
     return(ans5.question5 == "River Sindh");
 
 };
 
 
 
 