/// Lodash Example
console.log("Redux Starter Project!11!");

let outputColor: string = "background: #222; color: #bada55; font-size: 20px";

import { pipe } from "lodash/fp";
import { produce } from "immer";

let username: string = "        Chris   ";
let message: string = "Good Afternoon";

const trim = (name: string) => name.trim();
const generateMessage = (message: string) => (name: string) =>
    `Hello ${name}, ${message}!`;
const convertToUpper = (text: string) => text.toUpperCase();

let outputFunction = pipe(trim, generateMessage(message), convertToUpper);

const output = (outputText: any) =>
    console.log(`%c ${outputText}`, outputColor);
output(outputFunction(username));

// Excercise 1
// 1. Update the object properties price to $10 and rating to 4.8
// 2. Update arrayOfBooks 1st Index so that "Book2" becomes "Book4"

type Book = {
    author: string;
    metadata: {
        name: string;
        price: string;
        rating: number;
    };
};

const book: Book = {
    author: "Robert Kiyosaki",
    metadata: {
        name: "Rich Chad Poor Soyjack",
        price: "$8",
        rating: 4.7,
    },
};
// solution with spread operator
const book2: Book = {
    ...book,
    metadata: {
        ...book.metadata,
        price: "$10",
        rating: 4.8,
    },
};

// solution with Immer
const book3 = produce(book, (draft) => {
    draft.metadata.price = "$20";
    draft.metadata.rating = 5;
});

const arrayOfBooks = ["Book1", "Book2", "Book3"];
const arrayOfBooks2 = arrayOfBooks.map((val) =>
    val === "Book2" ? "Book4" : val
);

console.log(book);
console.log(book2);
console.log(book3);
console.log(arrayOfBooks2);
