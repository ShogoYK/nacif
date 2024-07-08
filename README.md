
# Contacts List

## Requirements
- NodeJs (The version used here is the 20.1)
- NPM
- Git
- A PostgreSQL database in your machine

## Installation 
1) Open your terminal in your desired directory and execute the following command to clone the repository in your machine:

```
git clone https://github.com/ShogoYK/nacif.git
```
2) Now you should have a folder named nacif and you can now follow the installation process to each of the ends of the application

## Front-end Installation 
1) Open your terminal in the frontend directory and execute the following command:
```npm install```
2) To run the front-end, you can do it in two ways:
a) 
```npm run dev``` 

b) 
```npm run build``` 
and then 
```npm run preview```

## Back-end Installation
1) Open your terminal in the backend directory and execute the following command:
```npm install```

2) Make a copy of the .env.example and rename it to .env

3) In the .env file, fill the following:
PORT=<the port you want the project to run in>

JWT_SECRET=<A string of the secret used for the jwt token encryption (you can put any string you want, for test purposes)>

DATABASE_URL=<The url to your postgresql databse connection>

4) Run the following to migrate the prisma changes to your database
```prisma migrate dev --name init ```

5) You can run the back-end with either of the commands:
a)
 ```npm run dev```

b) 
```npm start```

## API Routes:

For the following steps, you should be familiarized with HTTP requests in a RESTFUL API, and we will consider that the port used is the port 8000, but you should change it in the request URL if you changed it in the .env file

### Login
The login request is a POST request in the following URL:

http://localhost:8000/auth/login

And the body of the request MUST contain the following:
```
{
    "email": "the email registred in the database",
    "password": "the password linked to the email"
}
```
You will be returned a token that have to be used in all the following requests

### All the following Routes

A important note!
All the following routes MUST have a Authorization header in the request, meaning you should be logged in to perform all the next actions. The requests should follow like this:

```
headers: {
    Authorization: ex4mpLeOfARan0mT0k3n
}
```

### Get all my Contacts

This is a GET request that should be done in the URL:

http://localhost:8000/contacts/all

This request must have a "Authorization" header, containing the token got through the login route


### Add new contact

This is a POST request that should be done in the URL:

http://localhost:8000/contacts/add

The body of the request must have the name and the number of the contact you want to add, like the following: 

```
{
    "name": "Example of a name",
    "number": "33010102"
}
```

Please note that the name have to be unique to your contact list, so you can't add same-name contacts

### Delete Contact 

This is a DELETE route and it is done by the contact ID.

http://localhost:8000/contacts/delete/

You can only delete contacts to YOUR list (the user logged in).
It can be done with a body containing the id of the contact, like the following:
```
{
    "id": "1"
}
```

### Edit Contact

This is a PUT route and it can be done by the id of the contact.

http://localhost:8000/contacts/edit/

It can alse be included in the body the edited name or edited number of the contact you want to edit. Note that if some or neither of the last fields are passed through the body, the contact will keep the same information as before the action

```
{
    "name": "New Name",
    "number": "33333333"
}
```

### Get Contact By ID

You can also get a single contact via ID, passed as a URL query parameter.


http://localhost:8000/contacts/:id 

