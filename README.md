#   PoC | AutoFi

<img src="./assets/logopata.png" alt= “” width="200">

## Assestment
### Create an interaction with a website where the URL tutorialspoint.com/html/html_iframes.htm is loaded and the program navigates into the page below “Document content goes here…“, interacts with the “About us” link, then returns the URL of the new page, a list of all URLs on the page, a list of all buttons on the page, a list of all text input fields on the page, then creates an account and logs into the site. The output should be both via console and output to the appended file.

## ---------

> **Note**:
We identify that there is an iframe inside the other main iframe

We use Cypress tool to develop the test suite integrated with Cucumber and Gherkin.


#### You need to install

* Node
* npm


#### Instruction to run the test

Clone this repo
+ run `npm install`


We could run Cypress In Browser

+ `npx cypress open`

or run in console

+ `npx cypress run --spec "cypress/e2e/features/Tutorialspoint.feature" --browser chrome`




```
project  
│
└───cypress
│   │
│   └───e2e
│       │
│       └───features (Gherkin file with test cases description)
│       │
│       └───page-objects (POM files with models)
│       │
│       └───steps (Code)

```


Example of test execution

![image](./assets/img1.png)

![image](./assets/img2.png)

##### A video execution example

https://github.com/marianosckerl/poc-tutorialspoint/assets/14279644/639cb2eb-ea13-43c0-8ffe-ac1f1ee303a0
