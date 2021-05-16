# email-input

## Live demo
https://chain-tough-mustang.glitch.me/

## How to use
### Import script into your html
```<script src="/vendor/email-input/email-input.js"></script>```

### Import css into your css files or in your html
```@import './vendor/email-input/styles/styles.css';```

### Place a div in the html as a wrapper for email inputs
```<div id="emails-input"></div>```

### In your js initialize the component using the constructor
````
var containerNode = document.getElementById('emails-input');
let emailsInput = new EmailsInput(containerNode, {
  placeholder: 'add more people',
  onChange: function (emails) {
    //subscribe to email changes here
    console.log(emails);
  }
});
````

## Following public functions are available
### ```addEmail```
Adds random email to the list.
> This method requires refactoring, it adds a random email, rather it should take email as input and add that, the random generation should be out of this function.

### ```getEmailCount```
Return integer indicating how many emails are in the list

### ```getAllEmails```
Return array of email objects

### ```replaceEmails```
Takes string array as input for emails and replaces all the values in the current list with the new one

