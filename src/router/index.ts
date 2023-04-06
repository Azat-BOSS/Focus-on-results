import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import CardInfo from "../pages/CardInfo/CardInfo";

export const publicRoutes = [
  {component: Home, path: "/", exact: true},
  {component: Cart, path: "/cart", exact: true},
  {component: CardInfo, path: "/card/:id", exact: true},
]