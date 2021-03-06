# Google Keep Clone
Google Keep Clone built with React🚀, FaunaDb✨ and Netlify’s Serverless Functions🤩

### Features
Create, Read, Update and Delete Notes.

## Technology Used
* **React** (FrontEnd)
    * **Styled-Components** 
* **Fauna Db** (cloud database)
* **Netlify**
    * **Servesless functions**
    * **Hosting**

### Fauna Db Setup
* Create a Database in [Fauna DB](https://dashboard.fauna.com/) and generate a KEY.
* Create a `.env` file in the root directory of the project, and place the database KEY inside it as shown below
``` env
    FAUNA_SECRET_KEY=YOUR-DATABASE-KEY
```
* Create a new collection called **notes** and add a first document with structure similar to the object shown below
``` javascript
    {
        title:"My Favorite Food items",
        text:"apples 🍎,chocolate 🍫, ice cream 🍦"
    }
```
* Create an Index for retriving all Notes by running the below query in fauna db shell from the project dashboard page
``` javascript
    CreateIndex({
        name: "note_sort_by_ts_desc",
        source: Collection("notes"),
        values: [{ field: ["ts"], reverse: true }, { field: ["ref"] }]
    })
```

### To run this on Local machine
* Install [netlify-cli](https://docs.netlify.com/cli/get-started/) tool by typing `npm install netlify-cli -g` from command line
* Clone the repo, install all the dependcies from package.json by typing `npm install` in command line
* Run app by typing `netlify dev`
