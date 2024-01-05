HOC(Higher order component)-its a function will take the component and returns the component.

- it enhancer component

Example -: in the swiggy application it take the component card get the `promoted`, data and return the new card, which has the `promoted` label on the TOP.

Controlled and uncontrolled component, lift up state

- lift up state

controlled uncontrolled component

when state is manged by the parent to tell the component to update the state is called controlled component, but when the component is stand alone and updating its own state is called the uncontrolled component.

prop drilling: when we need to update the props, we pass the data from parent to children but what if we want to pass the data from multiple children to parent,

Props Drilling-

data flows in the one direction, you cannot pass the data to last child, you have to pass through the intermediate parent or children of the component. it does not require to use by the intermediate parent. its called prop drilling. that problem can be solved by the react context

logged user name can be use at any level inside the application.

Theme need anywhere in the app, for that data we can hold it in the context, and then we can use at any place.

Generally, context is outside of the component.

we can create context anywhere in the application, then we can use the data from the create context by using the hooks called useContext to use it.

dont put the all the data inside the Context, some data require put inside the useContext. some is not

userContext.Consumer component is the class based way to access the context.it use the call back function to use it.

`UserContext.Provider` will provide the new value will override the default value.we can use the two `UserContext.Provider` for the different value

```Javascript
<UserContext.Consumer>
{(data) => console.log(data) }
</UserContext.Consumer>
```

best way is by using the `useContext`

## What is Prop Drilling ?

- when you need to pass the data as the props to the multiple child to finally access it, its called the `Prop Drilling`.
- Prop drilling occurs when a parent component passes data down to its children and then those children pass the same data down to their own children. This process can continue indefinitely.

### Problems associated with the prop Drilling ?

1. Code Duplication

- As the we pass the props down the road, we are tend to have the same code at multiple level, Which makes app hard to maintain and the debug it

2. Increased Cognitive load

- As the number of hierarchy increased in the component, it hard to maintain it, as developer would have to start from the parent to child to their child to find out the exact problem in the code

## What is lifting the state up ?

- When one event in the application has the simentenously impact on the other event, to this kind of execution we use the lifting the state up. To do this, we pass the child state to nearest common parent in the hierarchy. store the state inside the props and pass in to the children again. which simulate the two event together.
- Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code.

### Example :- In this Example, when we type something in the first input box, we need show the exact same thing in the second input box

### Two child input box, not connected together.

```Javascript
import { useState } from 'react';

export default function SyncedInputs() {
  return (
    <>
      <Input label="First input" />
      <Input label="Second input" />
    </>
  );
}

function Input({ label }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}


```

### Lifting the state up

```Javascript
import { useState } from 'react';

export default function SyncedInputs() {
    const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Input label="First input" value={text} onChange={handleChange} />
      <Input label="Second input" value={text} onChange={handleChange} />
    </>
  );
}

function Input({ label, value, onChange }) {


  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

```

## What are Context Provider and Context Consumer ?
