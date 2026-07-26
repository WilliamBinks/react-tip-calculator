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
      <h1>Tip Calculator</h1>
      <label for="bill-input"><h2>Enter Bill Amount</h2></label>
      <input id="bill-input" type="number" value={billInput} min="0" onChange={(e) => setBillInput(e.target.value)}/>
      <h2>Tip</h2>
      <div className="tip-grid">
        <TipButton value="10" setTip={setTipPercent}></TipButton>
        <TipButton value="15" setTip={setTipPercent}></TipButton>
        <TipButton value="20" setTip={setTipPercent}></TipButton>
        <div className="custom-tip">
          <p>Or Custom (%): </p>
          <CustomTip setTip={setTipPercent}></CustomTip>
        </div>
      </div>
      
      <p>{"Tip Amount: $"+Number(tipAmount).toFixed(2)|| "No input received"}</p>
      <p>{"Total Amount: $"+Number(total).toFixed(2) || "No input received"}</p>
    </>
  )
}

export default App
