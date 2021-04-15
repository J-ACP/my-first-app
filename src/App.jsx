import {useState} from "react";
const App=() =>{
    const [counter,setCounter]=useState(0);
    const [salto,setSalto]=useState(1);
    const addSalto=() =>{
        setSalto(salto + 1);
    }

    const substractSalto=() =>{
        setSalto(salto - 1);
    }

    const add=() =>{
        setCounter(counter + salto);
    }

    const substract=() =>{
        setCounter(counter - salto);
    }
    return(
        <>
        <main>
            <div>
                <h3>Salto</h3>
                <h1>{salto}</h1>
                <div>
                    <button onClick={addSalto}>Sumar</button>
                    <button onClick={substractSalto}>Restar</button>
                    <button onClick={()=> setSalto(1)}>Reset</button>
                </div>
                
            </div>
            <div>
                <h3>Contador</h3>
                <h1>{counter}</h1>
                <div>
                    <button onClick={add}>Sumar</button>
                    <button onClick={substract}>Restar</button>
                    <button onClick={()=> setCounter(0)}>Reset</button>
                </div>
                
            </div>
        </main>
        </>
    );
}


export default App;
