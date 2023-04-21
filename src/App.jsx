import { useState } from 'react'
import "./App.css";
import { Square } from "./components/tablero";
import { Qwerty } from "./components/teclado";
import { Ganador } from './components/ganador';
import { Navbar } from "./components/navbar"
import { Footer } from './components/footer';
import confetti from "canvas-confetti";

function App() {

  const [palabrasAleatorias, setPalabrasAleatorias] = useState([
    ["a","m","i","g","o"],
    ["j","u","e","g","o"],
    ["t","a","b","l","a"],
    ["m","e","s","s","i"],
    ["a","u","t","o","s"],
    ["v","o","l","a","r"],
    ["r","i","m","a","r"],
  ])

  const [palabraAleatoria, setPalabraAleatoria] = useState(
    palabrasAleatorias[Math.floor(Math.random() * palabrasAleatorias.length)]
  );

  const [tablero, setTablero] = useState([
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
  ])

  const [letterSelected, setLetterSelected] = useState({
    filaIndex:0,
    letraIndex:0,
  });

  const [filaTerminada, setFilaTerminada] = useState([
    false,
    null,
    null,
    null,
    null,
    null,
  ])
  
  const [color, setColor] = useState([
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
  ])
  
  const [ganastePerdiste, setGanastePerdiste] = useState(null)
  
  // SELECCIONAR LOS CASILLEROS
  const seleccionarLetra = (filaIndex, letraIndex) => {
    if(filaTerminada[filaIndex] === false) {
      setLetterSelected({filaIndex:filaIndex, letraIndex:letraIndex})
    }
  }
  // _____________________________________________________
  
  // TECLADO, PONER LAS LETRAS EN SU CASILLERO
  const letraACambiar = (children) => {
    const nuevoTablero = [...tablero];
    nuevoTablero[letterSelected.filaIndex][letterSelected.letraIndex] = children
    setTablero(nuevoTablero)
    if(letterSelected.letraIndex < 4) {
      const siguienteLetra = letterSelected.letraIndex + 1
      setLetterSelected({...letterSelected, letraIndex:siguienteLetra})
    }
  }
  // _____________________________________________________
  
  // BOTON ENVIAR 
  const submitTablero = () => {
    const nuevaFilaTerminada = [...filaTerminada]
    for(let i = 0; i < 6; i++) {
      if(filaTerminada[i] === false) {
        if(!tablero[i].includes(null)) {
          nuevaFilaTerminada[i] = true
          nuevaFilaTerminada[i+1] = false
          setFilaTerminada(nuevaFilaTerminada)
          incluyeNoIncluye(tablero[i], i)
          checkWord(tablero[i])
          setLetterSelected({filaIndex:i+1, letraIndex:0})
        }
        else {
          alert("No hay suficientes letras")
        }
      }
    }
  }
  // _____________________________________________________
  
  // MISMO INDICE - ESTA INCLUIDA - NO ESTA INCLUIDA
  
  const incluyeNoIncluye = (arrayPalabraIdentificar, fila) => {
    let arrayPalabraVerdadera = [...palabraAleatoria]
    let arrayPalabraIdentificable = [...arrayPalabraIdentificar]
    let setearColor = [...color[fila]]
    let copiaColor = [...color]
    for(let i = 0; i < palabraAleatoria.length ; i++) {
      if(arrayPalabraIdentificable[i] === arrayPalabraVerdadera[i]) {    
        setearColor[i] = "verde"
        arrayPalabraVerdadera[i] = undefined
        arrayPalabraIdentificable[i] = null
      }
    }
    for(let i = 0; i < palabraAleatoria.length ; i++) {
      if(arrayPalabraVerdadera.sort().includes(arrayPalabraIdentificable[i])) {
        setearColor[i] = "amarillo"
        arrayPalabraVerdadera[i] = undefined
        arrayPalabraIdentificable[i] = null
      } else if (arrayPalabraIdentificable[i] !== null) {
        setearColor[i] = "gris"
      }
    }
    copiaColor[fila] = setearColor
    setColor(copiaColor)
  }
  
  // _____________________________________________________
  
  // BOTON BORRAR ----
  
  const deleteLetra = () => {
    if(tablero[letterSelected.filaIndex][letterSelected.letraIndex] === null && letterSelected.letraIndex > 0) {
      const letraAnterior = letterSelected.letraIndex - 1
      setLetterSelected({...letterSelected, letraIndex:letraAnterior})
    }
    const newTable = [...tablero]
    newTable[letterSelected.filaIndex][letterSelected.letraIndex] = null
    setTablero(newTable)
  }
  // _____________________________________________________
  
  // CHEQUEAR SI GANASTE O PERDISTE
  const checkWord = (arrayWord) => {
    const palabraSeleccionada = palabraAleatoria
    if(arrayWord.join("") === palabraSeleccionada.join("")) {
      setTimeout(confetti, 2050)
      setTimeout(ganaste, 2100)
    }
    if(!filaTerminada.includes(null) && !filaTerminada.includes(null)) {
      setTimeout(perdiste, 2100)
    }
  }
  // _____________________________________________________
  

  // RESETEAR GAME

  const handleClickReset = () => {
    setGanastePerdiste(null)
    setColor([
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
    ])
    setFilaTerminada([
      false,
      null,
      null,
      null,
      null,
      null,
    ])
    setLetterSelected({
      filaIndex:0,
      letraIndex:0,
    })
    setTablero([
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
      [null,null,null,null,null],
    ])
  }

  // _____________________________________________________

  const ganaste = () => {
    setGanastePerdiste(true)
    setPalabraAleatoria(
      palabrasAleatorias[Math.floor(Math.random() * palabrasAleatorias.length)]
    )
  }
  const perdiste = () => {
    setGanastePerdiste(false)
    setPalabraAleatoria(
      palabrasAleatorias[Math.floor(Math.random() * palabrasAleatorias.length)]
    )
  }

  return (
    <main className="App">
      <Navbar />
      <div className='tabla'>
        {
          tablero.map((fila, indiceFila) => {
            return(
              <div className='fila' key={indiceFila}>
                {
                  tablero[indiceFila].map((letra, indiceLetra) => {
                    return <Square 
                            seleccionarLetra={seleccionarLetra} 
                            key={indiceFila + "" + indiceLetra} 
                            filaIndex={indiceFila}
                            letraIndex={indiceLetra}
                            className={`${letterSelected.letraIndex === indiceLetra && letterSelected.filaIndex === indiceFila
                                ? "letra bordado"
                                : "letra"} ${
                                  color[indiceFila][indiceLetra]
                                } ${color[indiceFila][indiceLetra]}${indiceLetra} ${
                                  letterSelected.filaIndex === indiceFila
                                  ? "cursor-pointer"
                                  : "cursor-default"
                                }`
                            }
                            >
                              {letra}
                          </Square>
                  })
                }                        
              </div>
            )
          })
        }
        <Qwerty letraACambiar={letraACambiar} submitTablero={submitTablero} deleteLetra={deleteLetra}></Qwerty>
      </div>
      <Ganador ganastePerdiste={ganastePerdiste} handleClickReset={handleClickReset}></Ganador>
      <Footer />
    </main>
  )
}

export default App
