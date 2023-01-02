import React from "react";
import DirectlySon from "./DirectlySon";

export default props => {
    return (
        <div>
            <DirectlySon name="Bruno" age={17} bool={true}/>
            <DirectlySon name="Ana" age={21} bool={false}/>
        </div>
    )
}