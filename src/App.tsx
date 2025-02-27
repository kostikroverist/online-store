import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./page/Home";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
  );
}

export default App;
