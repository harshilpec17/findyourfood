## 1. what are the various ways to add images into our APP? Explain with code example ?

- We can use the public URL that is available on CDN. We can use the link of it and added into our code base.

```Javascript
<img src="https://reactjs.org/logo-og.png" alt="React Image" />

```

- we can add the Image file inside our project store it into a URL formate at once place and import it in our project at our desire page

```Javascript
import reactLogo from "./reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}

```

- we can add the Image file into our asset folder and, we can import a file at desire location. This is the best practice in the industry, as you need to add so many images at one folder and give them a unique name.

```Javascript
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

- we can use the Image file URL structure and we can add an id at the end and concatinate the URL to make one whole image, this the best practice when you need to add so many images to one place

```Javascript
import {reactLogoURL} from "./reactLogo";
export default function App() {
  return <img src={reactLogoURL + uniqueId } alt="react logo" />
}

```

## 2. What would happen if we do console.log(useState())?

- it will return the `Array`, which has the two property `[undefined, function]`. Where the `0` `index`, its state like a variable, we did not declare as it undefined. `1` `index` we will have the Function which is use to manipulate the state variable.

## 3. How will `useEffect` behave with and without `dependency Array` at what is best practices ?

## Best Approach

`useEffect` hooks is mainly use to call a API, some of the best practices includes.

- never create a hooks outside the component. and on the top after declaring the component.
- never use the useState inside the condition,loop, function, it will create inconsistency in the program.

## How the `useEffect` will behave

- Basic syntax on the `useEffect` hooks is normal callback function and dependency array,

```Javascript
useEffect(()=> {
  // Basic syntax

},[])
```

### `with dependency Array`

- when we add the dependency array it will render `only one time` at initial render, It will not re-render at every update.

```Javascript
useEffect(()=> {

  console.log("It will render at initial level only");

},[])
```

#### `with dependency Array and condition`

- when we add the `condition` to dependency array, it will render when the `condition`, is changed.

```Javascript
useEffect(()=> {

  // Render when condition is changed

},[Condition])
```

## `Without dependency Array`

- when we do not add `empty Array` or `Array with condition`, It will render at every render cycle of any component, `useEffect` will be called and it makes a operation very costly

```Javascript
useEffect(()=> {

  console.log("I will render at every render cycle")

})
```

## 3. What are the React-router? What is component and How we will use it ? What is the difference between `Client Side Routing` and `Server Side Routing`?

## Client Side Routing

- IT is the approach of the `React` library and `Angular` framework. In simple terms, When we request some website on the browser.

1. It will make a request to server to fetch the data.
2. It will send the Minimal `HTML` require to load the page (Usually client will see the `ShimmerUI` or `loader` or `skeleton of cards and button`), along with `CSS` and `Javascript` code, once we send the all data to `client`. We move to next step.
3. it must be `SEO Friendly`, which means, data should be interpreted by the Search engine. Now, Server will compile the whole page and show it to user.
4. Now, User can interact with page. If user request the new Page, or would like to access the feature. Now, server will update the those component only. All other component, will remain the same.

## Benefits

- User Experience went through the roof, website is really fast, It is very easy to interact and also, dynamic webpages can be accessible.
- Faster page load, at minimum bandwidth user can see something, and all other file will be downloaded at own speed. Once, all file has been downloads, It is very easy to change the page.
- Server can load the High traffic, as server do not have to make every page. server will send the data, which can be done faster
- It will distinguish between `backend` and `frontend`, as it will be easier to manage team. `backend` will make a API from the Database, and `frontend` can focus on the UserInterface.

## Drawbacks

- Once we write the code, it should be compatible with browser, and It should be `SEO` friendly, otherwise, user will face the bad experience
- When Server send the large amount of data to client, It is hard for slower device to interact with the pages. `RAM` of device can not manage the process.
- Every device has to enabled with the `Javascript access`, Now, `Frontend` people has to work hard to manage the data.

## Server Side Rendering

It is older approach to interact with the `User`.

1. When user request the Website by clicking on the `link`, It will try to fetch the data from the server.
2. once, server gets the request, it compiles the whole `HTML PAGE` with `CSS` and `Javascript`, and send it to the User, client will see the first page on the website. by this approach, It is really fast initial loading.
3. When user clicks on the `button` and try to interact with the website, basically, It requesting again to the server to fetch the data to bring the new page.
4. Server has to compile the new page according to request and `Dynamic Data`, and send it to the user. It may take little bit of time.

This is how the older website used to work

## Benefits.

- It does not have to be `SEO friendly`, as server already building whole HTML page at server side.
- It is really fast initial render, as t loads quickly, Server has the `high computing power`, which can lead the faster load
- When device has the low latency, or low computing power, it can work easily as client side does not have to do the much work
- every device doesn't have to be the `Javascript enabled`. Only `HTML` and `CSS` can do the much of the work
- website, like `wordpress`, `drupal`, `shopify`, `GoDaddy` has few `HTML` page and doesn't has to be much interactivity can be done on the `SSR`

## Drawbacks

- `Server Cost` would be very High, as user request new page after a minimal change, and server has to build the page again
- `Slow during high traffic`, as server has to bear all the loads, It will make a slower the process, server has to be optimized at higher level
- `slow to upgrade`, When we add a new features, it is really hard for a server to optimized and remain at same speed service.
- `Facebook, Instagram` could not be build by this approach, as it very dynamic and rapid changing websites.

---

## React-router

- React router is a dependency, which gives a power to navigate a different page on the website. by this approach you do not have to write so many `if else` condition to navigate the page

`Outlet` is a fantastic tools which, you have to inserted at one place, where, different children routing will be added as per user request. We have to specify the different children routing, as it will be replaced at the `outlet`. (when we console the outlet component, it will not show the outlet instead of that, It will show the `children` as outlet is kind on bowl where request children route will be filled)

- For better approach to link a page, we do not have to write the `anchor tag`, as it will be rerender the whole page and makes a costly operation. Instead of that we will use the `link component` which will reload the particular page or component, not the whole page.
