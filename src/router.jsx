import { Router, Route } from "react-router-dom";
import { App }  from "./App";
import { Blog }  from "./pages/Blog";

export const Routes = () => {
  return (
    <Router>
      <Route index element={<App />} />
      <Route path="/blog" element={<Blog />} />
    </Router>
  );
};