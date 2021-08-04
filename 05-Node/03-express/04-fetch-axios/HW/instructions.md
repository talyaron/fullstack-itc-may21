create server-client app

in the server create an array of students (preferbly with a clouser)  

in the client, the user can add a student information ({name, age, id, avarage_grade})
the client send the added student information to the server. the server store the information on the array.

the user will enter the student id. in the client use 2 route requests. the user will get the information with on of two buttons.. one button will get the information with "params" and the second with "query".
the results will be showen on the DOM


Please don't forget to create a file named .gitignore, and add inside of it the following lines:


```sh
node_modules/
```

This line what is going to do, is to avoid git to upload the node_modules folder, which we don't want. Why? Because we can always reconstruct the dependencies from package.json by running

```sh
npm install
```

If you have already pushed without this file, please create it as mentioned and run the following line in your folder:

```sh
git rm --cached node_modules
git add .
git commit -m "Removed node_modules"
```
