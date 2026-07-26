import { useState } from 'react'

function CustomTip({ setTip }){

    return (
        <input type="number" onChange={((e) => setTip(e.target.value))}/>
    );
}

export default CustomTip