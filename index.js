import inquirer from 'inquirer';
inquirer
  .prompt([
    {
        "name":"url",
        "message":"Type your URL"
    }
  ])
  .then((answers) => {
    const url=answers.url;
    console.log(url);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });