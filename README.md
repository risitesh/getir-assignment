# GETIR Assignment

Folder structure

1. server.js
    - entry point of the application
    - has DB connection

2. app.js
    - handling the entry point for routes

3. routes
    - all end-points will be listed here

4. controllers
    - logic of any endpoint or services will be written here

5. models
    - schemas
        - has the schema definitions
    - contains database related queries and logics

6. tests
    - contains test cases


How to run?

1. create an .env file in the main directory
2. Add `MONGODB_URL='url for the connection'` in the .env file
3. Run `npm install`
4. Run `npm start`
5. It'll run on port 3000
6. To run test cases, run `npm test`
7. Health Check - 
    - `baseURL/health`
8. Get Records
    - POST URL
    - `baseURL/api/records`
    - Request Body should contain in application/json
        - startDate (required), should be in the format of YYYY-MM-DD
        - endDate (required), should be in the format of YYYY-MM-DD
        - minCount (required), should be valid number greater than 0
        - maxCount (required), should be valid number greater than 0