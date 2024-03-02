# Function Paradigm Notes

- Functions are first-class object

A higher-order function is a function which takes function as a parameter or which returns the function or both.

## Lodash: Pipe & Compose

When feeding the output of a function into a series of functions, the code can become messy. Lodash to the rescue with these functions for improving readability.

```
const result = generateMessage(convertToUpper(trim(name)))
```

Here we have nested functions, lots of parameters, looks like some goddamn Excel shit, impossible to read.

```
const composeFunction = compose(generateMessage,convertToUpper,trim)
const result = composeFunction(name)
```

Compose solves this readability issue, though the functions are still applied right-to-left.

```js
const pipeFunction = pipe(trim,convertToUpper,generateMessag)
const result = pipeFunction(name)
```

pipe goes one better, reversing the order and making it even easier to follow!

This all allows for is use of the functional programing paradigm, but makes it much easier to follow.

### Currying

When you have functions which return functions, it becomes difficult to pass parameters to the nest function.

Currying is the process of passing variables down this chain.

- Pure Functions always return the same output for a given input. They tend to be simple, with no dates, API calls etc...
- JavaScript strings are immutable, makes for safer code.

