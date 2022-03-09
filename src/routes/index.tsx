import {
  BrowserRouter,
  Routes as RoutesContainer,
  Route,
} from "react-router-dom";

import { Login } from "../views";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route path="login" element={<Login />} />
      </RoutesContainer>
    </BrowserRouter>
  );
};

export default Routes;
