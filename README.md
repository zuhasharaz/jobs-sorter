**JOBS SORTER**

**The Challenge**

- The function which I have created takes jobs as an input.
- The jobs can only be completed if the job it is dependant on, is completed first in the jobs collection.
- The function returns the jobs in order depending on the order in which they have been completed first.

## Process

- The string input is converted into an object which is used to loop through to check if the key is the same value as 
the key value pair.
- If the job has no dependencies and is not in the final array then it is pushed into the orderedJobs array.
- If however, a job does have a dependency and the key and key value pair are in the array, it returns an error message 
that jobs cant have depend on themselves.
- If there are no keys and key value pairs in the final array, then they are pushed into the orderedJobs array in the
correct job order.

## Prerequisites

You will need to install Node.jsversion 7.9.0 on your local machine.

[Node.js](https://nodejs.org/en/) - Devlopment environment


## Installing

Fork and clone this repo 

```http
https://github.com/zuhasharaz/jobs-sorter.git
```
Using the terminal cd to the cloned directory.

To install all of the dependencies in this file, enter the following command:

```http
npm install
```

This project uses mocha and chai for testing purposes.
To make sure everything is running correctly, run the following command:

```http
npm test
```

## Built with
- [Node.js](https://nodejs.org/en/)
- [Mocha](https://mochajs.org/)
- [Chai](http://www.chaijs.com/)

## Author

Zuha Sharaz