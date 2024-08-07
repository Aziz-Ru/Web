# React Basic To Advance
React is a powerful JavaScript library for building dynamic and interactive user interfaces (UIs). It is developed by Facebook. React is known for its component-based architecture which allows you to create reusable UI elements, making complex web applications easier to manage and maintain. React is used to build single-page applications.

## Features of React
- ### 1. JSX (JavaScript Syntax Extension)
  JSX combines HTML and JavaScript, allowing you to embed JavaScript objects within HTML elements.It enhances code readability and simplifies UI development.
- ### 2. Virtual DOM (Document Object Model)
  React uses a virtual DOM, which is an exact copy of the real DOM.When there are modifications in the web application, React updates the virtual DOM first and then computes the differences between the real DOM and the virtual DOM.This approach minimizes unnecessary re-rendering and improves performance
- ### One-way Data Binding
  React follows one-way data binding, where data flows from parent components to child components.Child components cannot directly return data to their parent components, but they can communicate with parents to modify states based on provided inputs.
- ### Components
  React divides web pages into reusable and immutable components.Component-based development simplifies code organization and maintenance.Each component can have its own state and props.there are two types of component first functional component and class component.
## ReactJS Lifecycle
React component lifecycle refers to the sequence of events that occur during the lifespan of a React component, from its creation to its destruction.
- ### Initialization
  This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
- ### Mounting Phase
    - Constructor: The constructor method initializes the component. It’s where you set up initial state and bind event handlers.
    - render(): This method returns the JSX representation of the component. It’s called during initial rendering and subsequent updates.
    - componentDidMount(): After the component is inserted into the DOM, this method is invoked. Use it for side effects like data fetching or setting timers.
- ###  Updating Phase
  - componentDidUpdate(prevProps, prevState): Called after the component updates due to new props or state changes. Handle side effects here
  - shouldComponentUpdate(nextProps, nextState): Determines if the component should re-render. Optimize performance by customizing this method.
  - render(): Again, the render() method reflects changes in state or props during updates.
- ### Unmounting Phase
  - componentWillUnmount(): Invoked just before the component is removed from the DOM. Clean up resources (e.g., event listeners, timers).
 

