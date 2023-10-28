
var totalActivos = sessionStorage.getItem("activos");
var totalPasivos = sessionStorage.getItem("pasivos");
var totalPatrimonio1 = sessionStorage.getItem("total");

const patrimonioNeto = document.getElementById('patrimonioNeto');
patrimonioNeto.textContent = "$" + totalPatrimonio1;

console.log(totalPatrimonio1)


function calcularActivos() {

   
    var Casa = document.getElementById('Casa').value;
    var Acciones = document.getElementById('Acciones').value;
    var Bonos = document.getElementById('Bonos').value;
    var FondoDeEmergencia = document.getElementById('FondoDeEmergencia').value;
    var fondosComunesdeInversion = document.getElementById('fondosComunesdeInversion').value;
    var CuentasCorrientes = document.getElementById('CuentasCorrientes').value;
    var CuentasDeAhorro = document.getElementById('CuentasDeAhorro').value;
    var Coches = document.getElementById('Coches').value;
    var OtrosVehiculos = document.getElementById('OtrosVehiculos').value;
    var Coleccionables = document.getElementById('Coleccionables').value;
    var Joyas = document.getElementById('Joyas').value;
    var OtrosArticulosDeLujo = document.getElementById('OtrosArticulosDeLujo').value;

    var valorTotal = (parseInt(Casa) + parseInt(Acciones) + parseInt(Bonos) +
        parseInt(FondoDeEmergencia) + parseInt(fondosComunesdeInversion) + parseInt(CuentasCorrientes)
        + parseInt(CuentasDeAhorro) + parseInt(Coches) + parseInt(OtrosVehiculos) + parseInt(Coleccionables)
        + parseInt(Joyas) + parseInt(OtrosArticulosDeLujo));
    console.log(valorTotal);
    sessionStorage.setItem("activos", valorTotal)
}

function calcularPasivos() {

    var DeudaDeCasa = document.getElementById('DeudaDeCasa').value;
    var DeudaDeTv = document.getElementById('DeudaDeTv').value;
    var DeudaDeAuto = document.getElementById('DeudaDeAuto').value;
    var PrestamosPersonales = document.getElementById('PrestamosPersonales').value;
    var TarjetasDeCredito = document.getElementById('TarjetasDeCredito').value;
    var PrestamosParaEstudiantes = document.getElementById('PrestamosParaEstudiantes').value;
    var PrestamosDeInversiones = document.getElementById('PrestamosDeInversiones').value;
    var PrestamosDeSeguroDeVida = document.getElementById('PrestamosDeSeguroDeVida').value;
    var OtrosPrestamosAPlazos = document.getElementById('OtrosPrestamosAPlazos').value;
    var OtrasDeudas = document.getElementById('OtrasDeudas').value;

    var pasivoTotal = (parseInt(DeudaDeCasa) + parseInt(DeudaDeTv) + parseInt(DeudaDeAuto) +
        parseInt(PrestamosPersonales) + parseInt(TarjetasDeCredito) + parseInt(PrestamosParaEstudiantes) +
        parseInt(PrestamosDeInversiones) + parseInt(PrestamosDeSeguroDeVida) + parseInt(OtrosPrestamosAPlazos) +
        parseInt(OtrasDeudas))

    console.log(pasivoTotal);
    sessionStorage.setItem("pasivos", pasivoTotal);


}

function calcularMontos() {
    calcularActivos();
    calcularPasivos();
    totalPatrimonio = (parseInt(sessionStorage.getItem("activos")) - parseInt(sessionStorage.getItem("pasivos")));
    sessionStorage.setItem("total", totalPatrimonio);
    window.location.reload();
}
