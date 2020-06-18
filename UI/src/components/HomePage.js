import React from "react";
import { connect } from "react-redux";
import { userLogout } from "../includes/actions";
import Employee  from "./employees.js";
import Details from "./details.js"
import EMP from "./emp.js";

import "./index.css"
// https://codepen.io/forobor/pen/GEaLgB?editors=0110

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees:EMP
    }
  }

  onUserLogout = () => {
    this.props.userLogout();
    this.props.history.push("/");
  }

  getData = (e)=>{
    //this.props.history.push("/details")
    this.props.history.push({
      pathname: '/details',
      employeeData: e,
    });
    
  }
  handleChange = (event)=>{


    var searchQuery = event.target.value;
    if(searchQuery == "all"){
      this.setState({
        employees: EMP
     });
    }else{

      var displayedContacts = EMP.filter((el)=> {
          var searchValue = el.emp_department;
          return searchValue.indexOf(searchQuery) !== -1;
      });

      this.setState({
        employees: displayedContacts
      });
    }
     
  }

  render() {
    
    return (
      <div className="homepage container mt-3">
      <div className="contacts">
                      <h5 className="heading">Employee Directory &nbsp;&nbsp;<span onClick={this.onUserLogout}><i class="fa fa-power-off"></i></span></h5>
                      {/* <input type="text" className="search-field" onChange={this.handleSearch} /> */}
                      <select id="dept" className="search-field" 
                         onChange={this.handleChange} 
                      >
                        <option value="all">All</option>
                        <option value="Development">Development</option>
                        <option value="Accounts">Accounts</option>
                      </select>
                      <hr/>
                      <ul className="contacts-list">
                          {
                             this.state.employees.map((el) => {
                                 return <Employee
                                     key={el.emp_id}
                                     name={el.emp_name}
                                     department={el.emp_department}
                                     designation= {el.emp_designation}
                                     experience= {el.emp_experience}
                                     salary= {el.emp_salary}
                                     image={el.emp_photo_path}
                                     address={el.emp_address}
                                     sendData={this.getData}
                                 />;
                             })
                          }
                      </ul>
                  </div>
      </div>

    )
  }
}
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  userLogout: userLogout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

 {/* <li className="nav-item float-right">
              <button className="btn btn-primary" onClick={this.onUserLogout}>Logout</button>
            </li> */}