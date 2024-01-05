# Functional Components to Class Components

In React, we all are using functional components. It is recommended way by the react team. Understanding of class-based components is very important for the Interview purpose, So many code base is still in class based component. It is necessary for the company to.

- class-based components is a simple Javascript class, that is denoted by the keyword `class` followed by the name of the class which extends to the `React.Component` will have `render()` method, it will return some piece of JSX. It will be exported like same as Javascript functional components.

```Javascript

class UserClass extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <h1>Name: {this.props.name} </h1>
        )
    }
}

export default UserClass;

```

---

When we need to pass props in a class component, we typically use the `constructor`. The constructor method holds the props and allows us to set the initial state of the component. To pass a value to props we need to use the keyword `this.props`, by the time of accessing we need to pass desire value to the components as shown below.

```Javascript
import UserClass from "./UserClass";

const AboutUs = () => {
  return (
    <>
      <h1>Hello I am About page</h1>;
      <UserClass name={"Harshil"} />
    </>
  );
};

export default AboutUs;
```

---

## Importance of the `super()` method.

The `super()` method is a refer as the parent class constructor.

By calling `super()` within the constructor, we ensure that the parent class constructor is invoked first and performs its necessary operations. Once the parent constructor has been executed, we can then use the `this` keyword inside the child component to access the props.

Note: It is important to note that using `this` before calling `super()` will result in an error because it violates the order of execution. JavaScript enforces the rule that the parent class constructor must be called before accessing the child class's properties. Therefore, it is necessary to invoke `super()` first to allow the parent class constructor to execute properly.

It is not necessary to pass the `props` to `super()`, it still would work as a time of execution React will pass the props to `this`. but, between, `super()` and `this` execution `props` will stand as undefined. It is recommended to use the props as it will be helpful during time of debugging.

---

## How to use the state variables in class-based components?

In functional components, we use `hooks` that will update the state variable as per the recent updates in React. However, In a class-based component we use the `object` of to update the state variable. `this.state` is common for all the state variables that would be assigned in the components. we can use the multiple state variable in a single big object, as I am using `increase` state variable in the same object.

Note: In recent updates, we are using the react `hooks` to assign a value to a state variable. However, behind the scene react is converting that as a big object like class-based components.

```Javascript

class UserClass extends React.Component {
    constructor(props){
        super(props)

        // State variable
        this.state = {
        count: 0,
        increase: 1
    };
    }
    render(){
        return (
            <h1>Name: {this.props.name} </h1>
            <h2> count: {this.state.count} </h2>
            <h2> increase: {this.state.increase} </h2>
        )
    }
}

export default UserClass;

```

---

## How to update state variables in class-based components?

In a functional component, we use the `set{variable}` name like `setCount`, `setIncrease`, `setDisplay` kind of method in the hooks to update or reassign the state variable `const [count, setCount] = useState(0);`. Have you ever thought ? How it would be done in class-based components?

```Javascript
class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
      </>
    );
  }
}

// we are updating the `count` state, on click of the button `Increase`.

// You can use the Reset button and decrease counter button to update the state variable for practice, copy and paste the without comment parenthesis to make it work.

    /*
        <button
          onClick={() =>
            this.setState({
              count: (this.state.count = 0),
            })
          }
        >
          Reset
        </button>
    */

    /*
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrease
        </button>
    */

```

In the above example, we are updating the `count` state, onclick of the button `Increase`. In the example, `setState` is a method that will update the count value.

- To access any state variable other than `count` inside an object, we can use the `setState` method, and specify the state variable for a change.

## Render phase and Commit phase part of React lifecycle.

- when application is updating, there are two phases that will work.

1. Render phase - where the constructor is called, super is called and, react render the page. once Parent render and child render is finished, it will go to the next phase called commit phase

2. Commit phase - where the `ComponentDidMount` or API is called. and application loads in the browser. However, React will call the API for the first child Component, then goes to second child, if all the child API is called, then react will call the parent API.

---

React will first update the DOM as its expensive for the lifecycle, once DOM is updated by reconciliation. then React will fill the data with of `componentDidmount`. If react calls the data first and then update the DOM it will be very expansive process and it takes time to have a data from the server.
