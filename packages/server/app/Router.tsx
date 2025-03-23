import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layouts";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Chats from "./pages/Chats";
import Portfolio from "./pages/Portfolio";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout.Default />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="chats" element={<Chats />} /> 
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
