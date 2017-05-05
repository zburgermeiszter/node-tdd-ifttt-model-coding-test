# IFTTT model (coding test)

## Task Spec
Create a Trigger and Action based application which allows the building 
of Applets to perform an Action based on the state of a Trigger.
See IFTTT as an example of what you're trying to achieve (ignore the 
idea of services and assume that incoming data is available within the 
system).
If you're unaware of IFTTT then check out the wikipedia article for more
info.
 
__Trigger__: receives an input and decides whether a conditional has 
                been met
__Action__: perform a task
__Applet__: glue which joins a Trigger to an Action
 
## Use Cases
Two use cases are defined below as examples of Trigger and Action 
pairings (Applets). Assume that we should be able to build an Applet 
from any Trigger and Action pairing.
 
1. When leaving work I want to send a text message to my SO to let them 
    know I'll be home shortly.
2. Every Monday at 9pm I want to send an email to myself to remind me to
    put the bins out.
 
Please create an application which will perform the requested use cases.
 
## Notes
Please use a programming language / framework of your choice, be it the
one you feel most comfortable with or one you want a chance to play with.
Please include notes and instructions for how to run any code.

## Installation and usage
```
npm install -g mocha chai babel-cli
npm install
npm run test
```
To launch run `npm start`

## Docker usage

To build the Docker image: `docker build -t ifttt-model .`
To run it: `docker run -t --rm ifttt-model`