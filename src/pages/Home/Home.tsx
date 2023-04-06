import React, {FC} from 'react';
import home from "./home.module.css"
import Cards from "../../components/Cards/Cards"
import Pagination from "../../components/Pagination/Pagination";
import BtnInfo from "../../components/BtnInfo/BtnInfo";
import Modal from "../../components/Modal/Modal";
import Filtration from "../../components/Filtration/Filtration";

const Home: FC = () => {
  return (
    <div className={home.home}>
      <div className={home.home__content}>
        <div className={home.home__cards}>
          <span className={home.home__content__block}>
            <h1 className={home.home__title}>Каталог товаров</h1>
            <BtnInfo/>
          </span>
          <Cards/>
        </div>
        <Pagination/>
      </div>
      <Modal>
        <Filtration/>
      </Modal>
    </div>
  );
};

export default Home;
