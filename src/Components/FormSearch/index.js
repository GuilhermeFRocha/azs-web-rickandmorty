import React from "react";
import Style from "./formSearch.module.css";

function FormSearch({ setSearchParams, searchParams }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={Style.contentInput}>
        <input
          type="text"
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
          placeholder="Search"
        />
        {searchParams.length ? (
          <button type="button" onClick={() => setSearchParams("")}>
            X
          </button>
        ) : (
         <p> <img src="../../img/lupa-para-a-escola.png" alt="" /></p>
        )}
      </div>
      
    </form>
    
  );
}

export default FormSearch;
