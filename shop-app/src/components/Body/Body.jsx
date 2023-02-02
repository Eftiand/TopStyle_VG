import { Home } from "./views/Home";
import { Routes, Route } from "react-router-dom";
import { Error } from "./views/Error";
import { Login } from "./views/Login";
import { Cart } from "./views/Cart";
import { CheckOut } from "./views/CheckOut";

export const Body = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/CheckOut" element={<CheckOut />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}
