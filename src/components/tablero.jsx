export const Square = ({seleccionarLetra, filaIndex, letraIndex, children, className}) => {
    const updateBoard = () => {
        seleccionarLetra(filaIndex, letraIndex)
    }

    return(
        <div onClick={updateBoard} className={className} id={filaIndex + "" + letraIndex}>
            <p>{children}</p>
        </div>
    )
}