import preloader from "../../../assets/images/__Iphone-spinner-1.gif";
import React from "react";

let Preloader = (props: string) => {
<div style={{backgroundColor: 'white'}}>
    <img src={preloader} />
</div>
};

export default  Preloader;