# _React + Material UI Template_ #

The React + Material UI template was built to help in getting any basic application requiring authentication started. 

## _Setup_ ##

## .env file
To begin create a file called `/.env` to the root of the project. 

Add the following :

```
REACT_APP_BASE_URL=http://localhost:4001/
REACT_APP_API_URL=http://localhost:8080/
REACT_APP_IS_PRODUCTION=0
REACT_APP_SIDEBAR_TITLE=React + Material-UI
REACT_APP_APP_BAR_TITLE=React + Material-UI Template
REACT_APP_COPYRIGHT=Copyright © 2020 M.A.D. Computer Consulting LLC
```
Replace the Base Url and the API Url appropriately.

Install Node Modules

```
npm i
```

Start the Application

```
npm start
```

Build the Application for production use

```
npm build
```


## _Getting Started_ ##

Once you have everything setup you are ready to begin creating your application.

### _Common Pages and Sections_ ###
_Copyright_

The Copyright section is included in most of the main pages of the application, you can change the content, or simply edit the `REACT_APP_COPYRIGHT` to the string of choice in the `.env` file.

_Quick Access Links_

The quick access links section can be used for easy navigation to common sections of your application. By default we have a few of these setup already for you.

#### _Quick Access_
1. _Home_
2. _Search_
3. _Login_

#### _Extra_
1. _Post_
2. _Investor Information_
3. _Policies_

#### _News_
1. _Highlights_
2. _Newsletter_
3. _FAQ_

#### _Connecting_
1. _Register_
2. _Forgot Password_
3. _Contact Us_

Feel free to changes these per your needs.

