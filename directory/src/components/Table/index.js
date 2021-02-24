// Dependencies
import React, { Component } from 'react';
import API from '../../utils/API';
import uuid from 'react-uuid';
// import { useSortBy } from 'react-table';
import './style.css'



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
        )
        .catch (err => console.log(err));
        };

    sort = event => {
        event.preventDefault();
        this.state.results.sort((a, b) => {
            // if (a.name.last > b.name.last) return 1;
            // if (a.name.last < b.name.last) return -1;
            if (a.name.last < b.name.last ) {
                return a.name.last - b.name.last;
            } else {
                return b.name.last - a.name.last; 
            }
            }
         )
    }


    render() {
        return(
            <div>
                <nav>
                    <input placeholder='Search name...'/>
                </nav>
                <table className='table table-striped table-hover'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Image</th>
                            <th>Name<button onClick={this.sort} type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="caret white"></span>
                                <span className="sr-only">Toggle Dropdown</span>
                                </button>
                            </th>
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