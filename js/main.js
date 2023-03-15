function presionar(){
    alert("me estas presionando...")
}

//Como si fuera el main()...
window.onload = function(){
    alert("Hola!!!")

    //Agregamos eventos de forma dinamica
    var subtitulo = document.getElementById('subtitulo')
    //Click
    subtitulo.addEventListener("click",presionar)

    //Agregamos evento al slider
    var semestre = document.getElementById("semestre")

    /*Notese que se puso el evento onchange y que el manejador
    de eventos es "anonimo"*/
    semestre.addEventListener("change", function(){
        //recuperamos el valor, notese que this hace referencia a "semestre"
        let sem = this.value
        //alert('Semestre ='+sem)

        //accedemos al nodo sem para imprimir de forma dinamica
        //revisar que ocurre en el arbol de etiquetas
        let s = document.getElementById('s')
        s.innerHTML="<mark>"+sem+"</mark>"

        
    })

    let texto = document.getElementById('texto')
        texto.addEventListener("keypress", function(){

            //recuperamos valor
            let txt = document.getElementById('txt')
            let valor = this.value
            //alert('evalor='+valor)

            //Lo ponemos en la caja deshabilitada...
            txt.value = valor
        })
}