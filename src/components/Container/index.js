import React, { Component } from "react";
import SearchFilter from "../SearchFilter";
import EmployeeTable from "../EmployeeTable";
import API from "../../utils/API";

class Container extends Component {
    state = {
      search: "",
      results: [],
      sorted:""
    };

    //when the component first loads search for employees using the API
    componentDidMount() {
        API.getEmployees()
        .then(response => {
            this.setState({results:response.data.results})
           
        })
        .catch(err => console.log(err));
    }

    //handle the input change of the search box
    handleInputChange = (event) => {
      this.setState({ search: event.target.value });
    };

    //sort the array of employee objects by name
    sortbyName = () =>{
      const copyArray = [...this.state.results]
      if (this.state.sorted === "" || this.state.sorted === 'desc') {
        copyArray.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
        this.setState({results : copyArray})
        this.setState({sorted:'asc'});
      } else {
        copyArray.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1)
        this.setState({results : copyArray})
        this.setState({sorted:'desc'});
      }
    };

    render() {
        return (
          <div className= "container">
            <SearchFilter
                search={this.state.search}
                handleInputChange={this.handleInputChange}
            />
            <EmployeeTable
                results={this.state.results} 
                searchTerm={this.state.search}
                sortByName={this.sortbyName} 
            />
          </div>
        );
      }



}

export default Container;