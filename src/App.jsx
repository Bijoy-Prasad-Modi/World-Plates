import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ViewHome,
  ViewRecipeSingle,
  ViewRecipeList,
  ViewTypeList,
  ViewError,
  ViewSearchResult,
} from "./views";
import BaseLayout from "./layouts/BaseLayout"; 

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<ViewHome />} />
            <Route path="recipes/search" element={<ViewSearchResult />} />
            <Route
              path="recipes/:typeOf/:typeName"
              element={<ViewRecipeList />}
            />
            <Route path="recipes/:id" element={<ViewRecipeSingle />} />
            <Route path="types/:typeId" element={<ViewTypeList />} />
            <Route path="*" element={<ViewError />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
