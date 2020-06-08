import React from 'react';

 const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            width: "80%",
            alignItems:'center',
            marginLeft:60,
            alignSelf:'center',
            marginTop:20,
            height:0.1
        }}

    />
);
export default ColoredLine;