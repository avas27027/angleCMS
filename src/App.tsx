import { Route, Routes } from "react-router-dom";

import IndexPage from "@/routes/index";
import DocsPage from "@/routes/docs";
import Views from "@/routes/views/views";
import SchemeTable from "@/routes/schemeTable";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/users" />
      <Route element={<SchemeTable />} path="/:path"></Route>
      <Route element={<Views />} path="/views" />
    </Routes>
  );
}

export default App;
