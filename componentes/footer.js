
class footers extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`
        <footer class="pie-pag">
        <div class="one">
            <div class="box">
                <figure>
                    <a href="#">
                        <img src="img/logo2-footer.png" alt="logo-pagina">
                    </a>
                </figure>
            </div>
            <div class="box">
                <h2>Integrantes</h2>
                <p>Leonardo Polo</p>
                <p>Jose Arias</p>
                <p>Rafael Butron</p>
                <p>Jesus Cuelo</p>
            </div>
            <div class="box">
                <h2>Correo</h2>
                <p>lpolo6886@cues.edu.co</p>
                <p>jarias6858@cues.edu.co</p>
                <p>rbutron6867@cues.edu.co</p>
                <p>jcuello6891@cues.edu.co</p>
            </div>
        </div>


    </footer>
        `
    }
}

window.customElements.define("footer-web", footers)