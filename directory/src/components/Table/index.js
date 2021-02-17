import React from 'react';
import API from '../../utils/API';
import { Component } from "react";


class Table extends Component {
    state = {
        results: []
    }


// After component loads, run searchRoster
componentDidMount = () => {
    this.searchRoster();
}

searchRoster = () => {
    API.roster()
    .then((res) => 
        this.setState({ results: res.data.results})
    );
    };

    render() {
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>    
                            <td ></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;