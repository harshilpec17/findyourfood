## Is JSX is mandatory for React ?

- JSX is the syntactic sugar for React, It is not the mandatory components, you can also use the plain Javascript to run the environment. When we use the JSX, we need compilation tool and special setup like `Bable` environment, which will convert code into production ready simple Javascript. on the other side (without JSX), we do not need special environment. we can use the react API to compile our code and use react functionality.

## Is ES6 is mandatory for the React ?

- ES6 is not mandatory for the React, we can use the classes and other functionality to write the code. but, es6 is widely using and safe for production. ES6 will give the functionality like, `Arrow function`, `template literal`, `classes`, `Destructuring`, `modules`. it will increase the productivity.

## How can i write comment is JSX ?

- we can write the comment in the curly braces. It will not compile in the production area. or else, JSX will consider that as the string, it will break everything.

## what is <React.Fragment></React.Fragment> and <></> ?

- it will let a group a list without adding extra node to DOM. both are same with different notation.

## what is virtualDOM ?

- It is concept where ideal `virtualDOM` it is the UI memory, and synced with the `RealDOM`. it called reconciliation. It will enable the declarative API of the react. You can tell the react to update particular state, it will update to realDOM. It is cost effective process where, Real DOM will keep the memory of previous update and when new update of any UI come, it will only update the particular state.
- Virtual DOM is additional layer between, real DOM and file.

## what is Reconciliation in React ?

- When we use the React virtual DOM to update the UI of the webpage, It will update the particular part of webpage. However, re-rendering of whole page is very costly operation. React will predict which state will be update by using diffing algorithm.
- It will check the difference between previous update and new update.when new update come, Instead of breaking off whole DOM tree. React will keep the memory of it. Once it update the new state, it will quickly check previous memory and update particular state.
- React will check the `key` of sibling and keep the memory of it. once new node has added it will do the mutation to the previous memory instead rebuild the DOMTree.

## what is React fibre ?

- prior 2016, React is using call stack method for executing the task. It is creating the problem to update the UI of the webpage. Now, React using React-fibre. which will make the execution asynchronous. Now, React can decide to priority to certain task. Pause the task, reuse the same DOM tree, and abort the execution is three main aspect of it.

## why we need a keys in React ? when do we need keys in React ?

- Keys will give the unique identity to the list of an element. It will be easy for React to update, delete, reuse the particular element in the React. It will make the process faster update. It will provide the stable identity inside the React.

## can we use `index` as the keys in React ?

- certainly, we can use the `index` as the `key`, However, It will lead to the problem when we modify or add the new component at the beginning of the list. React has to rerender whole list instead of particular component. It is costly operation. sometimes, it will re-render the data in the different order then the normal one.

## what is props in React ? ways to

- Props stands for the property, it is argument which is passed into the components. It is reusable state.

## what is config driven UI ?

- It the `Configure Driven User Interface`, which means, data are dynamically design rather than hard coded value. It is used to dynamically design webpages, where layout, components, data binding, layout and rules, can be dynamically controlled.
