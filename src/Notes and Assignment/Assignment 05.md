## What is the difference between `Named export`, `Default export`, and `*` as export ?

1.`Named export` - It is allow to export multiple values from the same module, we can export them individually and as well import them as well.

```Javascript
// ModuleA
export const name = "Harshil";
export function fullName() {
    return "Harshil Suthar"
};

// ModuleB
import { name } from './ModuleA';
import { fullName } from './ModuleA';
```

2. `Default export` - It will allow to export one whole module at a time, we can import whole module. It is generally useful to import components in react.

```Javascript
// ModuleA
export default function fullName() {
    return "Harshil Suthar"
}

// ModuleB
import fullName from './ModuleA';
```

3. `* as export`

- It will allow to export whole module which has multiple properties or function, and it will consider as the object or property in another module. we can access any property with `.` notation.

```Javascript
// ModuleA
export const name = "Harshil";
export function fullName() {
    return "Harshil Suthar"
};

// ModuleB
import * as ModuleA from './ModuleA';
```

## What is the importance of `config.js` file ?

- It is very important file for centralize data, like API keys, environment-specific variables, features and other customizable option, The developer can easily modify and update the file without making code change. encryption keys and password and token can be store at one place, we can use that without exposing the data security. In the team work, it is very specific file where all team member will have the same configuration.

## what are React Hooks ?

- React hooks are features update after 16.8 update. It gives you a function components, and do not require to use the classes in the react hooks, before this updates, logic were encapsulated within the class components like `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`. It is very complex method.
- `useState`: allows function components to have local state variable and function to update variable
- `useEffect`: It replace the lifecycle method like `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`.

- There are plenty of other hooks available to work on

## Why do we need useState Hooks ?

- it provide the way to store and update the state within components. enabling to manage dynamic data and trigger re-render when the state change
- each call to `useState` creates a separate state variable and associate to setter function. This flexibility makes easy to use the same variable at different place by using setter function.
