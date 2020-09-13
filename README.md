<p align="center">
  <img src="https://raw.githubusercontent.com/jadsondorneles/tkmanagement/21ede5e00cf3046450956920a6158de73a23d6ae/back-end/src/assets/img/logo.svg" width="auto" height="125px" />
</p>

##

#### API: https://tkmanagement.herokuapp.com/api/task

## What it is
TK Management is a simplified task manager. Fast, casual and simple to use.

# Back-end

## How to run the project
First install NodeJS according to your O.S
Once installed open the directory in the terminal or vscode and run the following command

To execute the project it is necessary to install its dependencies. To do this, run the following command.
###### `npm install`

To run the project in development mode, use the following command.
###### `npm dev`

To run the project in production mode, use the following command.
###### `npm start`

To run the application tests run the following command.
###### `npm test`


## Usage

List of Tasks
##### GET - https://tkmanagement.herokuapp.com/api/task

###### Return Example
    [
        {
            "documents": [],
            "_id": "5f5e53491daa610017e3be05",
            "name": "Task 01",
            "customer": "Tesla",
            "due_date": "2020-09-10T00:00:00.000Z",
            "legal_date": "2020-09-11T00:00:00.000Z",
            "fine": true,
            "createdAt": "2020-09-13T17:13:45.468Z",
            "updatedAt": "2020-09-13T17:13:45.468Z",
            "__v": 0
        }, 
        {
            "documents": [],
            "_id": "5f5e53491daa6100ee7edbe99",
            "name": "Task 02",
            "customer": "Microsoft",
            "due_date": "2020-09-13T00:00:00.000Z",
            "legal_date": "2020-09-14T00:00:00.000Z",
            "fine": true,
            "createdAt": "2020-09-17T17:13:45.468Z",
            "updatedAt": "2020-09-19T17:13:45.468Z",
            "__v": 0
        }
    ]`

    
Specific Task
##### GET - https://tkmanagement.herokuapp.com/api/task/<id_task>

###### Return Example
    [{
        "documents": [],
        "_id": "5f5e53491daa610017e3be05",
        "name": "Task 01",
        "customer": "Tesla",
        "due_date": "2020-09-10T00:00:00.000Z",
        "legal_date": "2020-09-11T00:00:00.000Z",
        "fine": true,
        "createdAt": "2020-09-13T17:13:45.468Z",
        "updatedAt": "2020-09-13T17:13:45.468Z",
        "__v": 0
    }]`


Create Task
##### POST - https://tkmanagement.herokuapp.com/api/task

###### Body Data Example
    {
        "name": "Task 01",
        "customer": "Tesla",
        "due_date": "2020-09-10",
        "legal_date": "2020-09-11",
        "fine": true
    }`

###### Return
    {
        result: true,
        message: 'Task created successfully'
    }`


Update Task
##### PATCH - https://tkmanagement.herokuapp.com/api/task/<id_task>

###### Body Data Example
    {
        "name": "Task Update 01",
        "customer": "Tesla",
        "due_date": "2020-09-10",
        "legal_date": "2020-09-11",
        "fine": true
    }`

###### Return
    {
        result: true,
        message: 'Task updated successfully'
    }`


Delete Task
##### DELETE - https://tkmanagement.herokuapp.com/api/task/<id_task>

###### Body Data Example
    {
        "name": "Task Update 01",
        "customer": "Tesla",
        "due_date": "2020-09-10",
        "legal_date": "2020-09-11",
        "fine": true
    }`

###### Return
    {
        result: true,
        message: 'Task removed successfully'
    }`


Insert Document in Task
##### POST - https://tkmanagement.herokuapp.com/api/task/document/<id_task>

###### Upload FormData File with Max Size 2MB

###### Return
    {
        result: true,
        message: 'Document uploaded successfully'
    }`


Delete Document in Task
##### DELETE - https://tkmanagement.herokuapp.com/api/task/document/<id_task>/<id_document>

###### Return
    {
        result: true,
        message: 'Document removed successfully'
    }`


## Libraries Used
 
#### Dotenv
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

#### Express
Fast, unopinionated, minimalist web framework for node.

#### Mongoose
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

#### Morgan
HTTP request logger middleware for node.js

#### Multer
Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

#### Jest
A comprehensive JavaScript testing solution. Works out of the box for most JavaScript projects. Fast, interactive watch mode only runs test files related to changed files. Capture snapshots of large objects to simplify testing and to analyze how they change over time.

#### Supertest
HTTP assertions made easy via superagent.
