function validarFormulario(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();
    let direccion = document.getElementById("direccion").value.trim();

    if (!nombre) {
        alert("El campo nombre es obligatorio.");
        return;
    }

    if (!telefono) {
        alert("El campo teléfono es obligatorio.");
        return;
    }

    if (!email) {
        alert("El campo email es obligatorio.");
        return;
    }

    if (!direccion) {
        alert("El campo dirección es obligatorio.");
        return;
    }

    if (!email.includes("@")) {
        alert("El email debe contener el @.");
        return;
    }

    if (telefono.length < 9) {
        alert("El teléfono debe contener solo números y tener 9 dígitos.");
        return;
    }

    if (direccion.length < 15) {
        alert("La dirección debe tener mínimo 15 caracteres.");
        return;
    }

    let confirmacion = confirm("¿Quieres enviar el pedido?");
    if (confirmacion) {
        alert("Pedido enviado.");
        event.target.submit();
    } else {
        alert("El pedido no se ha enviado.");
    }
}

function actualizarContador() {
    let instrucciones = document.getElementById("comentarios");
    let contador = document.getElementById("contador_caracteres");
    let caracteresRestantes = 100 - instrucciones.value.length;
}
