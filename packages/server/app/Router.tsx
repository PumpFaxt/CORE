import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./layouts";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout.Default />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
