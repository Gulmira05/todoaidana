import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
interface ITodo {
  id: number;
  name: string;
  email: string;
  img: string;
}

// let arr = [
//   { id: 1707641371710, name: "sultan" },
//   { id: 1707641582702, name: "emir" },
// ];
// console.log(
//   arr.map((el) => {
//     if (el.id === 1707641371710) {
//       return { ...el, name: (el.name = "sultan mamutbekov") };
//     }
//     return el;
//   })
// );

const Edit = () => {
  const [obj, setObj] = useState(
    JSON.parse(localStorage.getItem("edit") as string) || []
  );
  const navigate = useNavigate();
  const [name, setName] = useState<string>(obj.name);
  const [email, setEmail] = useState<string>(obj.email);
  const [img, setImg] = useState<any>(obj.img);

  function newEdit() {
    let oldData = JSON.parse(localStorage.getItem("todo") as string) || [];
    oldData.map((el: ITodo) => {
      if (el.id === obj.id) {
        return {
          ...el,
          name: (el.name = name),
          email: (el.email = email),
          img: (el.img = img),
        };
      }
      return el;
    });
    localStorage.setItem("todo", JSON.stringify(oldData));
    navigate("/");
  }

  return (
    <>
      <div id="edit">
        <div className="edit">
          <h2>edit</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="nameEdit"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="emailEdit"
          />
          <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="imgEdit"
          />
          <button onClick={newEdit}>edit</button>
        </div>
      </div>
    </>
  );
};

export default Edit;
