import Delete from "../img/delete.png"

export const Qwerty = ({letraACambiar, submitTablero, deleteLetra}) => {
    const updateLetra = (event) => {
        letraACambiar(event.target.value)
    }

    const deleteLetraTeclado = () => {
        deleteLetra()
    }

    return(
        <div className="teclado">
            <div className="teclado-fila">
                <button onClick={updateLetra} value="q">q</button>
                <button onClick={updateLetra} value="w">w</button>
                <button onClick={updateLetra} value="e">e</button>
                <button onClick={updateLetra} value="r">r</button>
                <button onClick={updateLetra} value="t">t</button>
                <button onClick={updateLetra} value="y">y</button>
                <button onClick={updateLetra} value="u">u</button>
                <button onClick={updateLetra} value="i">i</button>
                <button onClick={updateLetra} value="o">o</button>
                <button onClick={updateLetra} value="p">p</button>
            </div>
            <div className="teclado-fila">
                <button onClick={updateLetra} value="a">a</button>
                <button onClick={updateLetra} value="s">s</button>
                <button onClick={updateLetra} value="d">d</button>
                <button onClick={updateLetra} value="f">f</button>
                <button onClick={updateLetra} value="g">g</button>
                <button onClick={updateLetra} value="h">h</button>
                <button onClick={updateLetra} value="j">j</button>
                <button onClick={updateLetra} value="k">k</button>
                <button onClick={updateLetra} value="l">l</button>
                <button onClick={updateLetra} value="ñ">ñ</button>
            </div>
            <div className="teclado-fila">
                <button onClick={submitTablero} value="enviar">Enviar</button>
                <button onClick={updateLetra} value="z">z</button>
                <button onClick={updateLetra} value="x">x</button>
                <button onClick={updateLetra} value="c">c</button>
                <button onClick={updateLetra} value="v">v</button>
                <button onClick={updateLetra} value="b">b</button>
                <button onClick={updateLetra} value="n">n</button>
                <button onClick={updateLetra} value="m">m</button>
                <button onClick={deleteLetraTeclado} value="borrar">
                    <img src={Delete}/>
                </button>
            </div>
        </div>
    )
};