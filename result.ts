import chalk from"chalk";

let pointsEarned:number = 0

async function result(a:boolean) {
    if( a == true ){
     console.log(chalk.green.bold("\nGreat! your answer is correct"));
     pointsEarned = pointsEarned + 10;
    }else{
        console.log(chalk.red.bold("\n Sorry! your answer is wrong"));
    }
   return pointsEarned;
} 
export default result;