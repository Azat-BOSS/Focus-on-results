import React, {FC} from 'react';
import {MenuItem, Select} from "@mui/material";
import {TBrand} from "../../utils/types/type";
import {useAppDispatch} from "../../services";
import selectS from "./select.module.css"
import {ISelectUi} from "../../utils/interfaces/interface";
const SelectComp: FC<ISelectUi> = ({action, value, items, textSelect}) => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <Select
        className={selectS.select}
        sx={{fontSize: "15px"}}
        value={value}
        defaultValue={"All Brands"}
        displayEmpty
        onChange={(evt) => dispatch(action(evt.target.value))}>
        {items.map((el: TBrand, idx: number) => (
          <MenuItem
            key={idx}
            sx={{
            fontSize: "15px",
            padding: "1rem",
          }} value={el.value}>{el.value}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectComp;
