import { useState } from 'react'
import TipButton from './components/TipButton';
import './App.css'
import CustomTip from './components/CustomTip';

function App() {
  const [billInput, setBillInput] = useState("");
  const [tipPercent, setTipPercent] = useState(0);

  
  const bill = parseInt(billInput) || 0;
  const tipAmount = bill * (tipPercent/100);
  const total = bill + tipAmount; 

  
  
  return (
    <>
    <div id="tip-container">
      <h1 id="heading">Tip Calculator</h1>
      <label htmlFor="bill-input"><h2 className="input-label">Bill</h2></label>
      <input id="bill-input" type="number" value={billInput} min="0" onChange={(e) => setBillInput(e.target.value)}/>
      <h2 className="input-label">Tip</h2>
      <div className="tip-grid">
        <TipButton className="tip-button" value="10" setTip={setTipPercent}></TipButton>
        <TipButton className="tip-button" value="15" setTip={setTipPercent}></TipButton>
        <TipButton className="tip-button" value="20" setTip={setTipPercent}></TipButton>
      </div>
      <div className="custom-tip">
          <p id="custom-tip-label">Or Custom (%): </p>
          <CustomTip setTip={setTipPercent}></CustomTip>
        </div>
      <div id="output-container">
        <p className="output">{"Tip Amount: $"+Number(tipAmount).toFixed(2) +" ("+tipPercent+"%)"|| "No input received"}</p>
        <p className="output">{"Total Amount: $"+Number(total).toFixed(2) || "No input received"}</p>
      </div>
    </div>
    </>
  )
}

export default App
