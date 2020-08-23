import React, { Component } from "react";
import API from "./utils/API";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";


class App extends Component {
  
  state = {
    result: [],
    search: "",
    filter: "",
    filterBy: "lastName",
    currentSort: "default",
    sortField: ""
  };

  
  componentDidMount() {
    API.search().then(res => {
      console.log(res)
      this.setState({
        result: res.data.results.map((employee, index) => ({
          lastName: employee.name.last,
          firstName: employee.name.first,
          email: employee.email,
          phone: employee.phone,
          key: index,
          picture: employee.picture.large
        })).sort( (a,b) => (a.lastName > b.lastName) ? 1 : -1)
      })
    })
    .catch(err => console.log(err));
  }
  
  removeEmployee = key => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const newEmployeeArr = this.state.result.filter(employee => employee.key !== key);
    // Set this.state.friends equal to the new friends array
    this.setState({ result: newEmployeeArr });
  };

  filterEmployees = key => {
    const filterResult = this.state.result.filter(employee => employee.lastName.toLowerCase().includes(key.toLowerCase()));

    filterResult.sort((a,b) => (a.firstName > b.firstName) ? 1 : -1)

    this.setState({
      result: filterResult
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, value } = event.target;

    this.filterEmployees(value);
    this.setState({
      [name] : value
    });

    this.filterEmployees(value);
    this.filterEmployees(this.state.search);

  };

  handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({
      [name] : value
    });

  };
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <div className="container">
          <div className="row">
           <div className="col-lg-12">  
              <SearchBar 
              value={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              />
            </div> 
          </div>
          <div className="row">
          {[...this.state.result].map(employee=> (
            <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.key}
            key={employee.key}
            lastName={employee.lastName}
            firstName={employee.firstName}
            email={employee.email}
            phone={employee.phone}
            picture={employee.picture}
            />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;