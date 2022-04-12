import React from "react";
import style from "../style.module.css";
import Table from "./Table";
import Spinner from "./Spinner";
import Select from "./Select";
import { sortData, sortToAsc, sortToDsc } from "./lib/sortingData";

import { useEffect, useState } from "react";
const sortingNames = ["name", "email", "salary", "age", "dob"];
const sortingTypes = ["asc", "dsc"];
export default function Master() {
  let [data, setDatas] = useState([]);
  let [sortName, setSortName] = useState("name");
  let [sortType, setSortType] = useState("asc");
  useEffect(() => {
    fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
      .then((data) => data.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);

  let sortNameHandler = (e) => {
    setSortName(e.target.value);
  };
  let sortTypeHandler = (e) => {
    setSortType(e.target.value);
  };
  let getDataBySorting = (data) => {
    return sortType == "asc"
      ? sortData(data.slice(), sortName, sortToAsc)
      : sortData(data.slice(), sortName, sortToDsc);
  };
  let dataShow = () => {
    let getSortedData = getDataBySorting(data.slice());
    return <Table datas={getSortedData} />;
  };
  return (
    <div className={`${style.maincontainer} container `}>
      {!data.length ? (
        <Spinner type="spinner-grow" color="text-warning" />
      ) : (
        <div className="row  ">
          <div className="col-md-12 d-flex justify-content-end gap-1">
            <div>
              <p className="m-0 text-bg fw-bold">asc||dsc</p>
              <Select
                sortingHandler={sortTypeHandler}
                defaultval={sortType}
                options={sortingTypes}
              />
            </div>
            <div>
              <p className="m-0 text-bg fw-bold">sorting</p>
              <Select
                sortingHandler={sortNameHandler}
                defaultval={sortName}
                options={sortingNames}
              />
            </div>
          </div>
          <div className={`${style.wraper} col-md-12 my-2`}>{dataShow()}</div>
        </div>
      )}
    </div>
  );
}
