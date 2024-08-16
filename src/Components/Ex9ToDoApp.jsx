import React from "react";
import { FaSearch } from "react-icons/fa";

function Ex9ToDoApp() {
  return (
    <div className="ex9">
      <div className="main-container">
        <div className="header-add-search">
          <div className="search">
            <FaSearch className="icon"/>
            <input type="text" placeholder="Search Task" />
          </div>
          <div className="add-task">
            <div className="btn">Create +</div>
          </div>
        </div>
        <div className="to-do-list">
          <div className="filter-div">
            <div className="total-task">Total Lists</div>
            <div className="filters">
              <div >Date Created</div>
              <div >By Status</div>
              <div >Full View</div>
            </div>
          </div>
          <div className="to-do-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Ex9ToDoApp;
