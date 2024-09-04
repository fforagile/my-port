let loggedIn = false;
let email;
let password;

while(!loggedIn){
    email = window.prompt(`enter your email`);
    password = window.prompt(`enter your password`);
    if( email === "balotelli@gmail.com" && password === "prince"){
        loggedIn = true;
        console.log('you are loggedIn!');

    }
    else{
        console.log('invalid credentials! please try again');
    }
}