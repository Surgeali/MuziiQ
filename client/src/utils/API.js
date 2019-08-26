import axios from "axios";

export default {

    // getUser: function() {
    //     return axios.get("/api/users");
    // },
    
    //Save user to database
    saveUser: function(user) {
        console.log('user', user);
        return axios.post("/api/users/register", user);
    }
}

// doubleNumber: function(x, y) {
//     return x*2 + " " + y
// }

// const doubleNumber = function () {
//     return x*2
// }

// function doubleNumber() {
//     return x*2
// }

// const doubleNumber = x => x*2;

// let num = 10;
// doubleNumber('apples', 5);
