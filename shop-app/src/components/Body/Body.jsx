import { Home } from "./views/Home";
import { Routes, Route } from "react-router-dom";
import { Error } from "./views/Error";

export const Body = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        


        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}
