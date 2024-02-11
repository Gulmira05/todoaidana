import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
interface ITodo {
  id: number;
  name: string;
  email: string;
  img: string;
}

const Menu = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("todo") as string) || []
  );

  function editProduct(el: ITodo) {
    localStorage.setItem("edit", JSON.stringify(el));
    navigate("/edit");
  }
  function deleteProduct(id: number) {
    let newData = JSON.parse(localStorage.getItem("todo") as string) || [];
    newData = newData.filter((el: ITodo) => el.id !== id);
    localStorage.setItem("todo", JSON.stringify(newData));
    setProduct(newData);
  }
  return (
    <div>
      {product.map((el: ITodo) => (
        <>
          <h1>{el.name}</h1>
          <h1>{el.email}</h1>;
          <img className="img" src={el.img} alt="" />;
          <button onClick={() => deleteProduct(el.id)}>Delete</button>
          <button onClick={() => editProduct(el)}>edit</button>
        </>
      ))}
    </div>
  );
};

export default Menu;
