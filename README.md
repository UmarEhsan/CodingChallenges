# CodingChallenges
A repository for all the coding challenges i have had been asked during my interview.

Grocery App Challenge
GroceryApp class, which receives a list of products, each one with name and votes.
The app should render an unordered list, with a list item for each product.
When a user clicks the ‘+’ button, the votes for the product increase by one. When a user clicks
the ‘-‘ button, the votes for the product decrease by one.
By appropriately using React state and props, implement the ‘ +’ vo te a n d ‘-‘ vo te logic.
Keep the state in the topmost component, while the Product component should accept props.
Also implement the ability to add new products. When a new product is added, it’s new vote
count will be 0. The new product should appear in the list of groceries.
For example, passing the following array as products prop to GroceryApp

[{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
and clicking the '+' button next to the Oranges should result in HTML
