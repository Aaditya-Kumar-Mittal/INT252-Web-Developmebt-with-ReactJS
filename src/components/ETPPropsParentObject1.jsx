import React from "react";
import ETPPropsChildObject1 from "./ETPPropsChildObject1";

function ETPPropsParentObject1() {
  const fruitBasket = [
    { name: "Apple", icon: "🍎", price: 1.2 },
    { name: "Banana", icon: "🍌", price: 0.5 },
    { name: "Cherry", icon: "🍒", price: 2.0 },
    { name: "Mango", icon: "🥭", price: 1.8 },
    { name: "Grapes", icon: "🍇", price: 2.5 },
    { name: "Orange", icon: "🍊", price: 1.1 },
    { name: "Strawberry", icon: "🍓", price: 2.8 },
  ];
  return (
    <div>
      <h1>Parent Component</h1>
      <ETPPropsChildObject1 basket={fruitBasket} />
    </div>
  );
}

export default ETPPropsParentObject1;
