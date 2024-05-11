import React from "react";
import "../css/loader.css";

export const Loader = () => {
    return <div className=" spinner-grow text-info" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
};
