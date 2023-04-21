import linkedin from "../img/linkedin.png"

export const Footer = () => {
    return(
        <div className="footer">
            <a href="https://www.linkedin.com/in/adriel-machado-50892025a/" target="_blank"><img src={linkedin} className="linkedin"/></a>
            <p>Contáctame por LinkedIn</p>
        </div>
    )
}