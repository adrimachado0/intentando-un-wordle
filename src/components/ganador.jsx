
export const Ganador = ({ganastePerdiste, handleClickReset}) => {
    if(ganastePerdiste === null) return null
    return(
        <section className='winner'> 
            <div className='text'>
                <h2 className="win">
                    {
                        ganastePerdiste === true
                        ? "Felicidades, has ganado"
                        : "Lo siento, has perdido"
                    }
                </h2>
                <p>Prueba</p>
                <footer className="boton-ganador">
                    <button onClick={handleClickReset}>Empezar denuevo</button>
                </footer>  
            </div>
        </section>

    ) 
}