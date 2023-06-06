class headers extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <header class="principal">
        <div class="logo"><a href="index.html">
            <img src="img/logofr.png" alt="logo-pag"></a>
        </div>

        <nav>
            <ul class="nav-menu">
                <li><a href=""></a></li>
                <li><a href="">Equipos</a></li>
                <li><a href="posiciones.html">Posiciones</a></li>
                <li>  
                    <a >Estadisticas</a>
                    <ul class="nav-submenu">
                        <li><a href="max-gol.html">Goles</a></li>
                        <li><a href="max-ass.html">Asistencias</a></li>
                    </ul>
                </li>
                <li><a href="calendario.html">Calendario</a></li>
            </ul>
        </nav>
    </header>
        
        `

    }
}

window.customElements.define("header-web",headers)