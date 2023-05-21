import { useState } from "react";

function List() {
  const clothes = [
    { id: 1, name: "Blazer", price: "29.99", src: "/src/images/blazer.jpg" },
    {
      id: 2,
      name: "Pink Jacket",
      price: "34.99",
      src: "/src/images/pink-jacket.jpg",
    },
    {
      id: 3,
      name: "Red Shirt",
      price: "14.99",
      src: "/src/images/red shirt.jpg",
    },
  ];

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
    <button>Basket {count}</button>
    <ul>
      {clothes.map((item) => (
        <li key={item.id}>
          <img src={item.src} alt={item.name} className="images" />
          <button onClick={handleIncrement}>{item.name}</button>
        </li>
      ))}
    </ul>
    </>
  );
}

export default List;
