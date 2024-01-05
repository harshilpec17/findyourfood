## 1. What is Microservice ?

- Microservices architecture refers and allow to large application to be separated into smaller independent parts,with each part having its own realm of responsibility.To serve one single request, a microservice can make so many internal calls to different ports to complete a whole request.

- Microservice architecture has several benefits

1. `Scalability` ->>> Microservices are working independently, It is very easy to add scale or update any feature without disturbing any other microservice in the system.

- If a particular service experiences more demand, we can scale the service, and when it has lower demand we can roll back a service without taking down whole application !!

2. `Failure safety` ->>> If a bug detect in a application, more likely it will not disturb any other microservices. on the other hand, If there are failure in Monolithic architecture, it will collapse all other services.

- the main benefits of it as it will prevent the cascading failures of an application

3. `Program language independency` ->>> It can be deployed, maintain, scale and update in any programming language, developer can choose the the best language and build a feature deploy as a independent service

- it can connect to the any service which is available to the internet-connected service. it call and make a interaction with it.

4.  `Simpler to deploy and use` ->>> one feature can develop stand alone and also we can deploy the feature across the site.

- `Payment Gateway` or `Register` can be used at different places without redesign whole application.

5. `Data security` ->>> When application system architecture break down into smaller chunks, It is very easy to safe guard some of the APIs and sensitive information at low cost.

- If business require some of the data stored under some guideline,It is very easy to maintain that.

6. `Team Optimization and Flexibility` ->>> Smaller team tend to work efficiently rather than bigger organization. It will easier to manage and also it will have greater focus to build new feature of the Microservices

- When Company need to hire a new talent, It would be so much easier to pool the talent in the market. It doesn't require a too much prerequisites.
- Company can secure the core data and architecture to themselves and collaborate with the other third party services without reliving too much sensitive information.

# Disadvantages

Every technology has the two side of it. It is very important to know about it before fall into love of it.

`Initially Hard to Adopt` ->>> It will save the cost in a long run. but, Initially it is costly operation to have hoisting environment as well the security and maintenance.

- Company need to have a skilled team which can handle all the protocol of the services. It is very easy to get into costly operation rather than productive and cheaper operation

`APIs handling and debugging complexity` ->>> When every service is connected with thousand of APIs. If there are changes in the API, It is very important to have that changes to other services or adaptation to a new changes.It is very critical to maintain pattern of APIs

- Once, developer hit to a bug, It is very high chances to have a bug from other microservices. It requires a high skills to trace the problem in the code.

# Conclusion

-It works on agile methodology. Microservices are widely used approach for developing features, maintain, perform specific function and cloud-native approach for development.

## 2. what is monolithic architecture ?

- It is one single large application, different components will combined at one place and make whole single application.

## Example :

- E-commerce application has a all component like authorization, order tracking system, inventory management. This application has the several components. User sees the website user-Interface, also has the backend service like authorization, payment gateway system. all this different component will concise at one place and deploy the application at different place like mobile, desktop is called monolith architecture.

## Benefits:

- Simple to deploy, test as you can make end to end script for testing method. simple to develop.

## Disadvantages.

- Hard to maintain, as It is very large and complex application, understand a whole application and develop a new feature is hard. It will slow down the application
- If there are any bug in the system, whole system will turn down, It is challenging to solve that at minimum time.
- When we need to adopt the new technology, it is very hard to convert to it as well as he costly.

## 3. Difference between monolith and microservice architecture.

- both service has the advantages and disadvantages, However, It is good to start with monolith and then convert into the microservice architecture. It will help to run a application with new technology.

## 4. Why do we need a useEffect Hook ?

- `useEffect hook` is a replacement of `componentDidMount()`, `componentWillMount()`, `componentWillUnmount`. If there is any operation like API call, fetching a data, or setting up the timer, we do need a `useEffect()`. when we setup this kind on service, It will trigger the side-effects, to handle that we use the `useEffect()`.
- After every render the side-effect is thrown away to handle an `useEffect` very well.
- It will not block the browser from updating a screen.
- It will be optimized in a way, after certain dependency has been executed. `useEffect()` will come into play.

```Javascript
useEffect(() => {
    setCurrentState("true");
}, [currentState])

// It will call the callback function when currentState is updated.

//-----------------//
useEffect(() => {
    setCurrentState("true");
})

// if We do not pass any dependency array, it will trigger after every render, Which will make a unnecessary calls to server

```

## 5. What is optional chaining ?

- `?.` this is the symbol for optional chaining.

- `optional chaining ` is way to access the `object's property` or calls a `function`. When we try to access the object property or function which is not available, in that case, it will throw an error. However, in optional chaining it will return the `null` or `undefined`.
- When we have the nested `object of array`, without a `optional chaining`, we do need to use the `if else` statement, which is really hard to follow along at the nested level.

## 6. What is `Shimmer UI` ?

- `shimmer` is a way to show a user that, what is going to be on the screen, it is a exact replica original UI, which will be printed on the screen. When we call the `API` from the server, it will take around 3 to 5 second to display on the screen. Usually, any user will not spend more than 3 second on a blank screen to wait for the data, It will give an impression for a slow webpage, to avoid the shimmer webpage and loading screen, we will use the `shimmer`.

## 7. What is the difference between `JS expression and JS statement` ?

- `Js expression` returns a value that will use in the application

```Javascript
console.log(2) // will return 2
"foo".toUpperCase() // will return "FOO"

// In a react we can wrap them up inside the curly braces to use the Javascript expression
```

- `Js statement` will not return any value, it is a way to tell a program to behave in a such a way

```Javascript
let x;
if() {}

// In react we can wrap them up inside the ( ) to use the Javascript statement
```

- js statement are rigid structure which concise in a program. where expression is a details we fill inside the statement.

## 8. What is conditional Rendering, explain with code example

- It works same way as the Javascript conditioning statement like `if else` and `ternary` operator, we can use the `if else` statement to wait until `API` calls is fulfilled until then we can show the `shimmer` component to user.

## 9. What is CORS ?

- Cross-Origin Resource Sharing is a way for `https` request to load the data if its origin from the other than its own. Its a mechanism to verify the whether its safe to allow to handle cross-origin or not.

## 10. What is async and await ?

- `async` makes a any function or execution asynchronize wrap them into promise, which means Javascript is single threaded synchronous language by nature. So when we need to call an `API` we need to wait until `API` calls return, If there are any function which is depend on the `API DATA`. it will try to execute then it will throw an error. In a result, whole application will crash. when we put `async` before the any function we are making that function asynchronism, It will work side by side with Javascript execution and return a promise.
- `await` is only work with `async`, it will make a wait, which means unless promise is `resolve` or `reject`, it will wait until get an answer. It will stop the execution of Javascript until the `promise` comes back with answer. So, in this case when we call the `API` from the server and we make the data `await`, execution will stop until we get the data and then run the application without an error.

## 11. What is the use of const json = await data.json(); in getRestaurants() ?

```Javascript
await // will wait until the data comes from the server
data.json() // will convert a data into Json formate to use in the application show either cards of restaurants or the menu list

getRestaurants() // is a function will get the whole data from swiggy API
```
