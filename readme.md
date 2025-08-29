

 Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
getElementById → one element by id.
getElementsByClassName → many elements by class.
querySelector → first element that matches CSS selector.
querySelectorAll → all elements that match CSS selector.
Returns all matching elements as a NodeList (array-like).
2. How do you **create and insert a new element into the DOM**?
Create a new element using document.createElement().
Add content to it using textContent or innerHTML.
Insert it into the DOM using methods like appendChild(), prepend(), or insertBefore().
3. What is **Event Bubbling** and how does it work?
Event bubbling means the event starts from the target element and moves upward through its ancestors.
4. What is **Event Delegation** in JavaScript? Why is it useful?
Event Delegation = handling events at the parent instead of every child.
Useful for performance, dynamic elements, and cleaner code.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault() → Stops the element’s default behavior.
stopPropagation() → Stops the event from bubbling to parent elements.
