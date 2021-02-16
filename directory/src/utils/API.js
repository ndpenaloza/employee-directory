// Dependencies
import axios from 'axios';

// Random User Generator 
export default {
    roster: function() {
        return axios.get('https://randomuser.me/api/?results=100')
    }
};