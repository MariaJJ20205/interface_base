import React from "react";
import '../../src/Styles/carta.css'

const Carta = () => {

    return(
        <div className="conta">
            <div className="cartitas">
            <img src="https://www.brainstormindia.com/images/resources/web.jpg" alt="Carta" className="Cartas" />
            <h4>Proyecto 1</h4>
            <p className="parrafoo">Proyecto de juego con colores</p>
            <a href="https://github.com/MariaJJ20205/WindowsForm_Game">Ver más</a>

            </div>

            <div className="cartitas">
            <img src="https://www.paginas-web.site/wp-content/uploads/2020/07/la-importancia-del-desarollo-web-en-nuestra-actualidad.jpg" alt="Carta" className="Cartas" />
            <h4>Proyecto 2</h4>
            <p className="parrafoo">Proyecto de juego piedra, papel o tijera</p>
            <a href="https://github.com/MariaJJ20205/PRIMERA-ENTREGA">Ver más</a>
            </div>

            <div className="cartitas">
            <img src="https://1.bp.blogspot.com/-autmgEV78Zs/YRdGqelBGQI/AAAAAAAAAvY/4WqJRRoxnZExqILA8vny2qgPHSE9I6VhQCLcBGAsYHQ/s784/vector-web-development-web-banner.jpg" alt="Carta" className="Cartas" />
            <h4>Proyecto 3</h4>
            <p className="parrafoo">Proyecto de bases de datos</p>
            <a href="https://github.com/MariaJJ20205/Administraci-n-bases-de-datos">Ver más</a>
            </div>
    </div>
    )
}

export default Carta