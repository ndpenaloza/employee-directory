// Dependencies
import React, { Component } from 'react';
import EmployeeTable from './EmployeeTable';
import API from '../../utils/API';



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
            // console.log(res.data.results)
            this.setState({ results: res.data.results})
        );
        };


    render() {
        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.map(result => (
                            <EmployeeTable
                            image = {result.picture}
                            name = {result.name}
                            email = {result.email}
                            phone = {result.phone}
                            />
                        ))};
                                
                    </tbody>
                </table>
            </div>       
        );
    }
}

export default Table;