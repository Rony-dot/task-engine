import React from "react";
import "../css/loader.css";

export const Loader = () => {
    return <div className="mt-5 row justify-content-md-center" >
        <div className=" mt-5 col-md-auto">
            <div className="mt-5 spinner-grow text-info" role="status" style={{ height: "100px", width: "100px" }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div >
};
