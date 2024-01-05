import UserClass from "./UserClass";
import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  // componentDidMount() {}
  render() {
    console.log("parent render");

    return (
      <>
        <h1>Hello I am About page</h1>;
        <UserClass />
      </>
    );
  }
}

export default AboutUs;
