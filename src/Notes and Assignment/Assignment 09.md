## 1. When and why do we need lazy()?

### React docs

- Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.

To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

### roughNotes

- Parcel will bundle the whole Javascript file, if its very large one file, it will make the application really slow. there is process that we follow to make the Js file into smaller chunks

it known as codeSplitting, chunking, dynamic bundling, lazy loading, on demand loading, dynamic imports.bundle should have enough code to one feature. its logical bundling, which means when we click or access the feature, then only it will load the page, and necessary file will be called. its called lazy loading.

```Javascript
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```

it will not import the component as the normal import, it will use the `lazy()` keyword, which require the call back function, it also has the import function will take the path as the arguments, it will split the code.

## 2. what is Suspense ?

- The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.

### roughNotes

- react give the amazing keyword called `suspense` will take the fallback which will show during the process is carried out, some shimmer UI or a loading screen. It will wait and then it will show the original component.

- `Suspense`, we require the suspense as when we try to access the file, React will try to use the code which is not yet available. It will throw the error. it requires something while that process is being carried out.

```Javascript
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

```

## 3. Why we got this error: A component was suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix this, updates that suspend should be wrapped with start transition? How does suspense fix this error ?

- Javascript is the synchronous single threaded language, as it will work, It tries to execute the code which is yet to be available. it will caught into the error

1. `A component was suspended while responding to synchronous input` : This part of the error message means that a React component, which is responsible for rendering a part of the user interface, has encountered a situation where it tried to suspend while still processing synchronous input.

In React, suspending means that a component needs to wait for some asynchronous operation (e.g., fetching data, lazy-loading components) to complete before it can continue rendering. Suspense allows the component to display a fallback UI (usually a loading indicator) during this waiting period.

2. `This will cause the UI to be replaced with a loading indicator`: When a component suspends, React will attempt to show the fallback UI to the user, indicating that data is being loaded or some other operation is in progress. However, due to the error in handling the suspense and synchronous input, the fallback UI might not display correctly, or it might not be shown at all.

3. `To fix this, updates that suspend should be wrapped with start transition`: The error message suggests a solution to fix the issue. When you have asynchronous operations that cause a component to suspend, you need to wrap those suspenseful updates with the "start transition" logic. This logic tells React to handle the suspense in a controlled manner, showing the fallback UI correctly and allowing the component to resume rendering once the asynchronous task is completed.

## 4. Advantages and disadvantages of using code splitting pattern ?

- ### Disadvantages
- `Increased load time` - code splitting is meant to make application faster, However, when we split a too many code split, it still requires the some additional dependency to be called out, also every time, user try to fetch the data. Instead of showing the content, it will show the loader.

- `Dependency and plugin universal` - code splitting is require and also it require each split code will work with universal dependency as it need to bundle to that code split.

### advantages

- `Lower bandwidth Usage`- smaller code chunks can be downloaded very easily, on slower internet connection as it will make app faster

- `caching and browser storage optimization` - When code is split into smaller pieces, browsers can cache individual chunks more effectively. Subsequent visits to the same application can benefit from cached components, leading to faster load times and improved overall performance.

- `Faster Initial Load Times`: By splitting the code into smaller chunks, the initial load time of your application can be significantly reduced. Users don't have to download the entire application code upfront, only the essential parts needed to render the initial view. This can lead to faster page load times and a smoother user experience.

## 5. when do we need and why do we need suspense?

- `suspense` is a used in lazy loading and code splitting, as it mention earlier in this assignment,

- `Data Fetching and asynchronous operation` - When the code is being executed, dependency or any other data being fetched from the the API, it will take the time, Instead of showing the empty placeholder and card or skeleton of the application, suspense allows to shows the fallback UI or Loading indicator.

- `Error handling` - When the asynchronous operation is carried out, suspense can show the error boundaries, and preventing the application from crashing and provide the better user experience.

---

# custom Hooks and rough notes from lecture

## single responsibility principle

- modularity is breaks down the code in the smaller fragment, it will easier to test that particular test, it will catch the bug very easily as it has smaller fragment, it will be more reusable, testable, manageable

keep the component as light as possible.

## custom hooks

- it is just the utility function, It will generally store in the utils, So it is custom functionality which will reusable at any place. In simple terms, It is custom function, store in different component in form of hooks that will require and used at different place.

## it is not necessary to use the work `use` for hooks at starting of the declaration, it will work the fine without of it, but for industry standard practice, we do need to use the word `use`
