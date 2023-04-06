import React, {useEffect, FC} from 'react';
import {Routes, Route} from "react-router-dom";
import {useAppDispatch} from "./services";
import {getBrands} from "./services/reducers/dataSlice";
import {getAllClothes} from "./services/reducers/cartSlice";
import {publicRoutes} from "./router";
import {getClothes} from "./services/reducers/filtrationSlice";

import clothesData from "./assets/products.json"
import brandsData from "./assets/brands.json"

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getClothes(clothesData))
    dispatch(getBrands(brandsData))
    dispatch(getAllClothes(clothesData))
  }, [dispatch])

  return (
    <>
      <Routes>
        {publicRoutes.map(({path, component: Component}, index) => (
          <Route
            element={<Component/>}
            path={path}
            key={index}/>
        ))}
      </Routes>
    </>
  );
};

export default App;
