import React from "react";


class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    onClick = ()=>{
        this.props.sendData(this.props);
    }

    render(){
    return(
     <li className="contact">
            <img className="contact-image" src={this.props.image} 
                width="60px" height="60px"  onClick={this.onClick}
                />
            <div className="contact-info">
            <div className="contact-name"> {this.props.name} </div>
            <div className="info"> {this.props.designation} </div>
            </div>
        </li>
        )
    }
}

export default Employee


