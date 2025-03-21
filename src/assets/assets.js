import pizza_1 from "./pizza_1.jpg";
import pizza_2 from "./pizza_5.jpg";
import pizza_3 from "./pizza_3.jpg";
import pizza_4 from "./pizza_4.jpg";
import salad_1 from "./salad_1.jpg";

export const food_list = [
  {
    id: "1",
    name: "Veg Salad",
    image: salad_1,
    price: 12,
    description: "Fresh greens with feta and olives.",
  },
  {
    id: "2",
    name: "Lasagna Pizza",
    image: pizza_1,
    price: 14,
    description: "Lasagna flavors on a pizza base.",
  },
  {
    id: "3",
    name: "Paparoni Pizza",
    image: pizza_2,
    price: 12,
    description: "Spicy paparoni on cheesy crust.",
  },
  { id: "4", 
    name: "Cheese Pizza",
     image: pizza_3, 
    price: 20, 
    description: "Loaded with melted cheese.", 
  },
  { id: "5", name: "Meat Pizza",
     image: pizza_4,
     price: 15, 
    description: "A mix of fresh meat toppings.", 
  }
];
