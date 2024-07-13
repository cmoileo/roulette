import './App.css'
import { useState } from 'react';
import { Wheel } from 'react-custom-roulette'

const data = [
    { option: '', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '', style: { backgroundColor: 'red' } },
    { option: '', style: { backgroundColor: 'blue' } },
    { option: '', style: { backgroundColor: 'yellow' } }
]

function App() {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(2);

    const handleSpinClick = () => {
        const fixedPrizeNumber = 3;
        setPrizeNumber(fixedPrizeNumber);
        setMustSpin(true);
    };

    return (
        <>
            <div>
                <h1>Code couleur :</h1>
                <div style={{display: "flex", gap: "30px", alignItems:"center"}}>
                    <div style={{backgroundColor: 'green', minWidth: '30px', height: '30px'}}></div>
                    <p>Stage de chameur de serpent</p>
                </div>
                <div style={{display: "flex", gap: "30px", alignItems:"center"}}>
                    <div style={{backgroundColor: 'blue', minWidth: '30px', height: '30px'}}></div>
                    <p>Atelier chasse et pêche avec G&G (Gerard Depardieu et Gerard Larcher)</p>
                </div>
                <div style={{display: "flex", gap: "30px", alignItems:"center"}}>
                    <div style={{backgroundColor: 'red', minWidth: '30px', height: '30px'}}></div>
                    <p>Un place en VIP pour le derby Saint-Médard/Saint-Aubin</p>
                </div>
                <div style={{display: "flex", gap: "30px", alignItems:"center"}}>
                    <div style={{backgroundColor: 'yellow', minWidth: '30px', height: '30px'}}></div>
                    <p>Un bon pour un stage de plongée aux îles Gili</p>
                </div>
                <h2>Bon anniversaire ;)</h2>
            </div>
            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                spinDuration={0.6}
                onStopSpinning={() => {
                    setMustSpin(false);
                }}
            />
            <button onClick={handleSpinClick}>SPIN</button>
        </>
    );
}

export default App
