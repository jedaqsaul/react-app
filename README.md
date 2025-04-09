# My Learning Journey

Welcome to my personal learning notes repository! Here, I'll be documenting everything I learn as I dive into different technologies, tools, and frameworks. This will serve as my reference guide as I go along, and a place to track what I’ve accomplished.

### What i will be learning

- Building components
- Rendering markup with jsx
- Managing state
- Passing input via props
- Debugging React apps

#### Creating a ListGroup Component

- install bootstrap to give our application a modern look and feel
- Bootstrap is a common css library
- In my project i used npm to install bootstrap@5.2.3
- used this line {import "bootstrap/dist/css/bootstrap-grid.css";} to import it to main.tsx
- It is a common and important practice to have a component folder for all components
- A component CANNOT return more than one element
- if multiple elements, enclose in Fragment imported from react or
- use empty tags <>

#### Rendering Lists

- How can we dynamically generate the list?
  -In JSX for loops do not exists
  - when rendering a list of items we should give each item a unique key(when using the map method)

#### Conditional Rendering

- JSX does not support if statements, so we can store the condition in a variable then embedd it in the code
- We can use a ternary operator in jsx

#### Handling events

- In react each element has a property called onclick
- We have to specify the type of event for type safety eg MouseEvent- This is called type annotation
- Beauty of typescript: auto-completion, type safety and it become easier to refactor/restructure our code

#### Managing state

- let us try to highlight an item when we click it
- use a css class in bootstrap called active
  -A hook - this is a function that allows us to tap into built in features in react
- useState tells react that we have a component that will change over time;
