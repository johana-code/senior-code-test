# Senior Code Test
Senior Code Test

### Johana Mbuguah

# Language:
- NodeJS
- ReactJS ( NextJs )


# Environment Set Up:
	
- Install NodeJs LTS version(12.x.x) from https://nodejs.org/en/
- Clone the Senior code test repository
- cd into the senior code test folder
- Run `npm install` on the terminal to install all packages
- NB: Question 3:
	- cd into the q3/ice-fire folder
	- run `npm install` to install all packages


# Testing

 - ### Question 1 and Question 2

	- run the command `npm run test` from the root of the senior code test repository in order to run all test suites for Question 1 and Question 2

	
- ### Question 3

	- cd into the q3/ice-fire folder
	- run `npm install` to install all packages
	- run `npm start` to start the application
	- visit the application on `http://localhost:3000`
	- result should look like below:
	---
	![Question 3 Result](https://github.com/r2g/senior_code_test/blob/master/ice_fire.JPG)

 - ### Question 4

	- cd into the q4 directory
	- run the command `node index.js` to start the IoU API server
	- access the api server on `http://localhost:3333`

	NB: The Question 4 runs off a local high performance JSON database 

	#### Add User:

	 - POST http://127.0.0.1:3333/add

		payload
		```json
			{
				"user" : {
					"name" : "Wangu"
				}
			}
		```

	#### Get Users:

	- GET http://127.0.0.1:3333/users

		payload
		```json
			{
				"users" : [
					"Mbula",
					"Mbuguah",
					"Ruthie",
					"Wangu"
				]
			}
		```

	#### Add IoU

	- POST http://127.0.0.1:3333/iou

		```json
			{
				"lender" : "Mbula", 
				"borrower":"Ruthie", 
				"amount": 8.2
			}
		```
	
	#### Delete User:

	- POST http://127.0.0.1:3333/delete

		```json
			{
				"user" : {
					"name" : "Ruthie"
				}
			}
		```



