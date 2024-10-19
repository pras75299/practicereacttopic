import { useContext } from "react";
import "./App.css";
import Item from "./component/Item";
import Cart from "./component/Cart";
function App() {
  return (
    <>
      <Item name="Macbook" price={1000} />
      <Item name="Disk" price={1200} />
      <Item name="Pendrive" price={100} />
      <Item name="Case" price={200} />
      <Cart />
    </>
  );
}

export default App;
