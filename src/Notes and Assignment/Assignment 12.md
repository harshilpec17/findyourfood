redux and react are different, it work on the data layer.use wisely when is require.

Application become easier to debug.

React-redux and vanilla redux was the way of using the redux, It was very conventional way to write it. It was very hard to configure it.

Redux team come up with and idea, which is solve the major 3 problems.

- Configure a Redux store is too complicated.
- Redux require the lot of packages to work
- Redux require too much boilerplate code to work.

redux store is like the big object, which has the central store. any component can access it.

slices of the redux store, it like a small portion of the redux store. whenever you need to store anything inside the redux store, we are creating the logical slices inside the store.

- something like, card data which has the information regarding the card.

- user slices which has the user information

---

## This is write data

when we click the add button, it dispatches an action. it calls a function known as the reducer will modify the cart basically, it will modify the slice of the store.

## How can we read the data.

selector will read the data, it known as the subscribing to the store.

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- slice(cartSlice)
- dispatch(action)
- selector (is the hooks comes from the react-redux library)

please subscribe to the need part of the store, don't subscribe to the whole store, it will hit the performance. if you subscribe to whole store, when something changes to the any slice it will hit the store and performance will hit

reducer is one big reducer, when we are writing a slice, we are creating the multiple reducer function so that can known as the reducers.

older redux tells the DON'T MUTATE STATE,
new redux toolkit says that we have to MUTATE THE STATE.

## Older version

```Javascript
// Older redux - "DON'T MUTATE THE STATE" and return a state is mandatory
// In that case, we are doing a below modification

const newState = [...state];
newState.items.push(action.payload);
return newState;

```

## Newer version

```Javascript
// Newer redux = "WE HAVE TO MUTATE STATE" and return a state is NOT mandatory
// redux still do the same thing as the older version behind the state by using the immer library, it will know the difference between older state and newer state and show the newer state on the UI .

// state = [], it will not mutate the state it just giving a reference to it, it make the changes locally, it will not make the changes to the original state. it will just the modify the local state to empty array but not the original state array.


// console.log(current(state)) it will use the read the object

// as per RTK either we can return the state as the empty return { items: [] } or with some modification, or we can mutate the state state.items.length = 0;.....In both cases it will modify the original state.

state.items.push(action.payload);

```
