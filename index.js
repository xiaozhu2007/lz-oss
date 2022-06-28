#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:lz19986912007@163.com");
          console.log("\nDone, see you soon.\n");
        }
      },
      {
        name: `Send Pig2333 an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:pig2333minecraft@yeah.net");
          console.log("\nDone, see you soon.\n");
        }
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Ok, bye.\n");
        }
      }
    ]
  }
];

const data = {
  name: chalk.bold.green("        甜力怕"),
  handle: chalk.white("@xiaozhu2007"),
  work: `${chalk.white("Senior Front-end Developer at")} ${chalk
    .hex("#341f7c")
    .bold("SecurityScorecard")}`,
  blog: chalk.gray("https://medium.com/") + chalk.whiteBright("@xiaozhu2007"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("xiaozhu2007"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~xiaozhu2007"),
  github: chalk.gray("https://github.com/") + chalk.green("xiaozhu2007"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("xiaozhu2007"),
  web: chalk.cyan("https://xiaozhu2007.github.io/"),
  npx: chalk.red("npx") + " " + chalk.white("xiaozhu2007"),

  labelWork: chalk.white.bold("       Work:"),
  labelBlog: chalk.white.bold("     Medium:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
  [
    `${data.name} / ${data.handle}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    `${data.labelBlog}  ${data.blog}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelnpm}  ${data.npm}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic(
      "I'm curious, enthusiastic and student most of the time."
    )}`,
    `${chalk.italic("The rest of the time I write code that others can read.")}`
  ].join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: "single",
    borderColor: "green"
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} on the links above`,
  '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());