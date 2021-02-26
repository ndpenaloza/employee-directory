// Dependencies
import React, { Component } from 'react';
import API from '../../utils/API';
import uuid from 'react-uuid';

class Table extends Component {
    state = {
        results: [],
        searchNFilter: []
    }

    // After component loads, run searchRoster
    componentDidMount = () => {
        this.searchRoster();
    }  

    // Calls API, gets employess and displays in alphabetical order on load
    searchRoster = () => {
        API.roster()
        .then((res) => {
            let results = res.data.results.sort((n,p) => {
                if (n.name.last < p.name.last) {
                    return -1;
                } else {
                    return 1;
                }
            })
            return this.setState({
                results: results,
                searchNFilter: ''
            })
        })
        .catch(err => console.log(err));
    }

    // Sorts employees by last name
    handleSort = e => {
        e.preventDefault();
        
        let alphaOrder = this.state.results.reverse();

        if (this.state.results) {
            this.setState({
                results: alphaOrder
            })
        } else {
            console.log(`There's no roster!!`)
        }
    }

    // Takes value of input
    handleInputChange = e => {
        e.preventDefault();
        this.setState({
            results: this.state.results,
            searchNFilter: e.target.value
         })
    }


    render () {
        return (
            <div>
                <nav style={{backgroundColor:'#F5DF4D', height: 50, paddingTop:10}}>
                    <input placeholder='Search name...' onChange={this.handleInputChange}/>
                </nav>  
                <table className='table table-striped table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Image</th>
                            <th>Name<button onClick={this.handleSort} type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="caret"></span>
                                <span className="sr-only">Toggle Dropdown</span>
                                </button>
                            </th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.state.results
                      .filter(result => {
                          return ((`${result.name.first} ${result.name.last}`).toLowerCase().includes(this.state.searchNFilter.toString().toLowerCase()))
                      }).map(result => {
                        return (
                            <tr key={uuid()}>
                                <td><img src={result.picture.medium} alt={result.name.first + ' ' + result.name.last}/></td>
                                <td>{result.name.first} {result.name.last}</td>
                                <td>{result.email}</td>
                                <td>{result.phone}</td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
            </div>       
        );
    }
}

export default Table;