# Vickys Code Chanllange

## Description

This Github repository contains a code Challenge for Vicky . An innovate StartUp
 

## Table Of Content

- [Installation](#Installation)
    - [Commands](#commands)
    - [run](#run)
- [Usage](#Usage)
    - [guide](#guide)
- [Deploy](#Deploy)


# Installation

## Commands


To install the packages (remember: cd functions/)
```bash
npm install 
```

npm run 
## Run

    To initialize the application you can choose between the following commands 

test with all the emulators 
```bash
npm run dev 
```

test with functions emulator only
```bash
npm run serve
```

#Usage

##Guide


after npm run dev 
![links emulator](https://i.imgur.com/9DXpGFj.png)

Open the View Emulator UI With this following link 

Use Postman to call the functions locaclly and save tasks
![links emulator](https://i.imgur.com/neDodOw.png)

this will be the result
![links emulator](https://i.imgur.com/Ozsnk7g.png)

you can view logs in firebase emulator UI here
![links emulator](https://i.imgur.com/PPP6KAA.png)


#Deploy 

To deploy the firebase functions just create and push a new github commit. Github actions will make the job 


```bash
git add .
git commit -m "your commit"
git push
```

I must admit, create a workflow for github actions its a little bit tricky because you need to give extra permissions to google cloud service account to GHA can deploy successfully the functions. 

But its not a big deal...