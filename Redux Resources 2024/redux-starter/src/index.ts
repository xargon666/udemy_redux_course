console.log("Redux Starter Project!11!");

let outputColor:string = 'background: #222; color: #bada55; font-size: 20px'

import {compose, pipe} from "lodash/fp"

let username = "        Chris   "

const trim = (name: string) => name.trim()
const generateMessage = (name: string) => `Hello ${name}, Good Morning!!!`
const convertToUpper = (name: string) => name.toUpperCase()

let outputFunction = pipe(trim,generateMessage,convertToUpper)
console.log(`%c ${outputFunction(username)}`, outputColor)
