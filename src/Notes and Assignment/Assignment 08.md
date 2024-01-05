## 1. How do you created Nested Routes react-router-dom configuration ?

react-router is used to create the routing inside the application, It can help to navigate to different pages.

```Javascript
const router = createBrowserRouter([
   {
      path: "/", // show path for routing It use for the main path which means, first route in the nested route.
      element: <Parent />, // It will show the component, in the first nested routes.
      errorElement: <Error />, // show error component for path is different, or is not listed
      children: [ // show children component for routing, after the parent routing
         {
            path: "/path",
            element: <Child />
            children: [{ // this is the way of creating the sub route for configuration.
                path: "/child",
                element: <SubChild />,
            }]
         }
      ],
   }
])
```

## 2. Read about createHashRouter, createMemoryRouter from React Router docs ?

`createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL". Other than that, it is functionally the same as createBrowserRouter

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

## What is the order of life cycle method calls in Class Based Components?

- order of lifecycle method is as below:

1.  Constructor()
2.  render()
3.  componentDidMount()
4.
