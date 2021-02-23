// Dependencies
import React, { Component } from 'react';
import API from '../../utils/API';
import uuid from 'react-uuid';



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
                        <tr key={uuid()}>
                            <td><img src={result.picture.medium} alt={result.name.first + ' ' + result.name.last}/></td>
                            <td>{result.name.first} {result.name.last}</td>
                            <td>{result.email}</td>
                            <td>{result.phone}</td>
                        </tr>
                      ))}

                    </tbody>
                </table>
            </div>       
        );
    }
}

export default Table;