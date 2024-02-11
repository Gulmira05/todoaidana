import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

interface ITodo {
  id: number;
  name: string;
  email: string;
  img: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const handlSumbut = () => {
    if (name === "" || email === "" || img === "") {
      return;
    }
    let obj: ITodo = {
      id: Date.now(),
      name: name,
      email: email,
      img: img,
    };
    let data = JSON.parse(localStorage.getItem("todo") as string) || [];
    data.push(obj);
    localStorage.setItem("todo", JSON.stringify(data));
    navigate("/menu");
  };
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h1>Todo</h1>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="text"
            onChange={(e) => setImg(e.target.value)}
            placeholder="img"
          />
          <button onClick={handlSumbut}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
