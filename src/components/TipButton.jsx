import { useState } from 'react' 

function TipButton({ value, setTip } ){
    
    

    return (<>
    
        <button className="tip-button" onClick={() => setTip(value)}>{value+"%"}</button>
        
        </>
    )
}

export default TipButton