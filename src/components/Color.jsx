import React, { useState } from 'react';

const Color = () => {

    // input 값으로 색을 입력하면 해당 색으로 변경하는 useState 생성
    const [colorValue, setColorValue] = useState("");
    const [colors, setColors] = useState("");

    const colorInput = (c) => {
        setColorValue(c.target.value);
    }
    const colorChange = () => {
        setColors(colorValue);
    }

    return (
        <div className='color'>
            <h3 style={{color : colors}}>Color Change Example</h3>
            <input type="text" value={colorValue} onChange={colorInput}/>
            <button onClick={colorChange}>set</button>
        </div>
    );
};

export default Color;