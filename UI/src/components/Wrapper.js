import React, { Component } from "react";
import { User } from "../includes";

const Wrapper = WrappedComponent => {
  return class extends Component {
    render() {
      if (User.isLogin()) {
        return (
            <WrappedComponent {...this.props} />
        );
      } else {
        this.props.history.push("/");
        return null;
      }
    }
  };
};
export default Wrapper;
