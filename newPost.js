const _ = require("lodash");
const inquirer = require('inquirer');
const fs = require('fs');
const tagsObject = require('./data/tags.json');
const technologyObject = require('./data/technology.json');

const questions = [
  {
    type : "input",
    name : `name`,
    message : "Post Name: ",
    default: "coding",
  },
  {
    type : "input",
    name : `category`,
    message : "Post Category: ",
  },
  {
    type : "checkbox",
    name : `tags`,
    message : "Tags: ",
    choices: [...tagsObject, ...technologyObject],
  },
];

function buildPost(answers){
  console.log(answers);
  
  const fileName = `${_.replace(answers.name, " ", "-")}.md`;

  console.log(fileName);
  
  const fileData = 
`---
draft: true
title: "${answers.name}"
coverImage: "/assets/blog/placeholder-cover.jpg"
date: "${new Date().toISOString()}"
category: ${answers.category}
tags:
    ${answers.tags.map(t => `- ${t}`).join("\n    ")}
---
`
  console.log(fileData)
  
  const dir = '_posts'

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  fs.writeFile(`${dir}/${fileName}`, fileData, (err) => {
    if (err) throw err;
    console.log('File is created successfully.');
  });
}

function startPrompt(){
  inquirer
    .prompt(questions)
    .then(answers => {
      buildPost(answers);
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
        console.log("error")
      }
    });
}

startPrompt()