// function to generate markdown for README


// I need these: 
// Githhub Name and repo, Title, Description, Table of Contents, Installation, Usage, License, 
// Contributing, Tests, and Questions
function generateMarkdown(data) {
  return `

  
  # ${data.title}
  
  ## Description
  
  ${data.description}

  ## Table of Contents:

  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation
  
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  
  ${data.license}

  ## Contributing
  If you would like to contribute to this project, here's how!
  
  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions
  If you have any questions feel free to reach me through email or through Github!
  
  Email address: ${data.email}
  
  Github Username: ${data.username}

  Github Profile: www.github.com/${data.username}/

  ---
  Thank you for stopping by! Stay Classy!
  
  `;
}

module.exports = generateMarkdown;
