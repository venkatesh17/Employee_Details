import React from 'react'


class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        var empData = this.props.location.employeeData;
        var empImage = empData ? empData.image : ""
        var name = empData ? empData.name : ""
        var address = empData ? empData.address:""
        var department = empData ? empData.department:""
        var designation = empData ? empData.designation:""
        var experience = empData ? empData.experience:""
        var Salary = empData ? empData.salary:""
 
        return (
            <div className="details">
                <div className="homepage container mt-3">
                    <div className="contacts">
                        {empData ? <div>
                                        <div className="contact">
                                            <div className="bgImage" >
                                                <img className="contact-image" src={empImage}
                                                    width="60px" height="60px"
                                                />
                                            <div className="contact-name"> {name} </div>
                                            <div className="info"> {designation} </div>
                                            </div>

                                        </div>
                                        <div className="contact-info">
                                           <button className="btn-primary">Details</button>
                                           <button>Hierarchy</button>
                                        </div> <hr/> 
                                        <div className="contact-info">
                                            <div className="info">Department</div>
                                            <div className="contact-name"> {department} </div>
                                        </div> <hr/>
                                        {/* <div className="contact-info">
                                            <div className="info">Designation</div>
                                            <div className="contact-name"> {designation} </div>
                                        </div> <hr/> */}
                                        <div className="contact-info">
                                            <div className="info">Experience</div>
                                            <div className="contact-name"> {experience} </div>
                                        </div> <hr/>
                                        <div className="contact-info">
                                            <div className="info">Salary</div>
                                            <div className="contact-name"> {Salary} </div>
                                        </div> <hr/>
                                        <div className="contact-info">
                                            <div className="info">Address</div>
                                            <div className="contact-name"> {address} </div>
                                        </div> <hr/>
                            </div> : ""
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default Details;