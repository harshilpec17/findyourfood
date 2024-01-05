import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.name + "child constructor called");
  }

  async componentDidMount() {
    const data = await fetch("https://randomuser.me/api/");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(this.state.userInfo);
    // console.log(this.props.name + "child Component DidMount");
  }

  render() {
    // console.log(this.state.userInfo.info);
    // console.log(this.props.name + "child render called");

    return (
      <>
        <h1>I am {this.state.userInfo.info.seed}</h1>
        {/* <h2>Count: {this.state.count}</h2>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increase
          </button> */}
        {/* <button
          onClick={() =>
            this.setState({
              count: (this.state.count = 0),
            })
          }
        >
          Reset
        </button> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrease
        </button> */}
      </>
    );
  }
}

export default UserClass;
