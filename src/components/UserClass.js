import React from "react";
import UserContext from "./UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);

    // inside constructor is the best place to create state variable in class based component
    // this.state is a big object which stores all the state variables so no need to create this. state again like
    //functional component
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Khemchand7");
    const json = await data.json();
    //console.log(json);
    this.setState({ userInfo: json });
  }

  render() {
    const { count, count2 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>Count: {this.state.count}</h1> */}
        {/*  it is one way or we can also do destructure on the fly */}

        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          count Increase
        </button>

        <h1>Count2: {count2}</h1>
        <div>
          Logged In User:
          <UserContext.Consumer>
            {(data) => <h2>{data.loggedInUser}</h2>}
          </UserContext.Consumer>
        </div>
        {/* <img src="https://avatars.githubusercontent.com/u/124715350?v=4"></img> */}
        <h2>Name:{name}</h2>
        <h3>location: {location}</h3>
        <h4>Contact: khemchandk360@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
