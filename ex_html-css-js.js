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

    let confirmacion = confirm("¿Quieres confirmar y enviar tu pedido ahora?");
    if (confirmacion) {
        alert("¡Gracias por tu pedido,"[nombre]);
        event.target.submit();
    } else {
        alert("El pedido no se ha enviado.");
    }
}
let preciosHamburguesa = {
    Clásica: 5,
    BBQ: 7,
    Especial: 8
};

let preciosIngredientes = {
    : 1,
    : 1.5,
    : 2,
    : 2,
    : 1
};

function calcularPrecio() {
    let tamañoSeleccionado = document.querySelector('input[name="tamaño"]:checked');
    let precioTamaño = tamañoSeleccionado ? preciosTamaño[tamañoSeleccionado.value] : 0;

    let ingredientesSeleccionados = document.querySelectorAll('input[name="ingredientes"]:checked');
    let precioIngredientes = 0;
    ingredientesSeleccionados.forEach(ingrediente => {
        precioIngredientes += preciosIngredientes[ingrediente.value];
    });

    let precioTotal = precioTamaño + precioIngredientes;

    document.getElementById("precio_total").textContent = `Precio total: ${precioTotal.toFixed(2)}€`;
}
