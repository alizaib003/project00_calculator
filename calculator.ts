import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

const welcome = async () => {
  let rainbowTitle = chalkanimation.rainbow("Lets start calculation");
  await sleep();
  rainbowTitle.stop();
};

await welcome();

type IType = {
  num1: number;
  num2: number;
  operator: string;
};

async function askQuestion() {
  let respose: IType = await inquirer.prompt([
    {
      name: "operator",
      type: "list",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
      message: chalk.yellow("Which operator do you want to use"),
    },
    {
      name: "num1",
      type: "number",
      message: chalk.red("Enter your first number"),
    },
    {
      name: "num2",
      type: "number",
      message: chalk.green("Enter your second number"),
    },
  ]);

  if (respose.operator === "Addition") {
    let ans = respose.num1 + respose.num2;
    console.log(chalk.bgGreenBright("Answer: ", ans));
  } else if (respose.operator === "Subtraction") {
    let ans = respose.num1 - respose.num2;
    console.log(chalk.blue("Answer: ", ans));
  } else if (respose.operator === "Multiplication") {
    let ans = respose.num1 * respose.num2;
    console.log(chalk.gray("Answer: ", ans));
  } else if (respose.operator === "Division") {
    let ans = respose.num1 / respose.num2;
    console.log(chalk.bgBlue("Answer: ", ans));
  }
}
askQuestion();
