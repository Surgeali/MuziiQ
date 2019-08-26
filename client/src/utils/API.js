import axios from "axios";

export default {

    // getUser: function() {
    //     return axios.get("/api/users");
    // },
    
    //Save user to database
    saveUser: function(username) {
        return axios.post("/api/users", userData);
    }
}