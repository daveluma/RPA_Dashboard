import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";

function Search() {
    return (
      <div className="App">
          <h1>Automations</h1>

          <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Ad", field: "name" },
            { title: "Soyad", field: "surname" },
            { title: "Doğum Y", field: "birthYear", type: "numeric" },
            {
              title: "Doğum Yeri",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlurfa" },
            },
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
          ]}
          title="Demo Title"
        />
      </div>
      </div>
    )
  }
  
  export default Search;
  