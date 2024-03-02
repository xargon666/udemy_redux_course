# How does Redux Work?

There are two key parts of redux to learn:
1. Store 
    - Acts as a centralized database for an application's state.
    - Facilitates access to application state from anywhere in the app.
    - Helps in managing state changes without excessive prop drilling or re-rendering.

2. Reducer
    - A **pure function** that takes the current state and an action as parameters.
    - Processes actions to update the state in the store.
    - Returns an updated state based on the provided action.

Reducer takes two parameters:
    1. State : The current state of the application
    2. Actions : Changes you want to make to the state.

The reducer takes the state and actions to the store, then returns an **updated state**.
