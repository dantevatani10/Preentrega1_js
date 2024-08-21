//mensaje de bienvenida
alert("¡Bienvenido a Hamburguesas Caballito!");
alert("A continuación, te pediremos tu nombre y dirección para tomar tu pedido. Para cancelar la orden, simplemente presiona cancelar.");

// Solicitar el nombre del usuario
var nombre = prompt("¿Cuál es tu nombre?");
console.log("Nombre del cliente:", nombre);

if (nombre) {
    // Pedir la dirección de envío
    var direccion = prompt("Por favor, ingresa tu dirección de envío:");
    console.log("Dirección de envío:", direccion);

    // Revisar si hay una dirección
    if (direccion) {
        // Saludo personal en base al nombre
        alert("¡Hola " + nombre + "! A continuación tomaremos tu pedido.");

        // Opciones de hamburguesas y precios
        const hamburguesas = [
            { nombre: "Hamburguesa Clásica", precio: 5000 },
            { nombre: "Hamburguesa Doble", precio: 7000 },
            { nombre: "Hamburguesa Vegetariana", precio: 6000 }
        ];

        // Mostrar las opciones de hamburguesas
        let menuHamburguesas = "Selecciona el número de la hamburguesa que deseas:\n";
        for (let i = 0; i < hamburguesas.length; i++) {
            menuHamburguesas += `${i + 1}. ${hamburguesas[i].nombre} - $${hamburguesas[i].precio.toLocaleString()}\n`;
        }

        let eleccionHamburguesa = prompt(menuHamburguesas);
        console.log("Elección de hamburguesa:", eleccionHamburguesa);

        eleccionHamburguesa = parseInt(eleccionHamburguesa);

        if (eleccionHamburguesa >= 1 && eleccionHamburguesa <= hamburguesas.length) {
            let hamburguesaSeleccionada = hamburguesas[eleccionHamburguesa - 1];
            alert("Has elegido: " + hamburguesaSeleccionada.nombre);
            console.log("Hamburguesa seleccionada:", hamburguesaSeleccionada);

            // Seleccion de guarnicion
            alert("Elige tu acompañamiento:");
            const acompanamientos = [
                { nombre: "Papas Fritas", precio: 2000 },
                { nombre: "Papas Fritas con Cheddar y Panceta", precio: 3000 }
            ];

            let menuAcompanamientos = "Selecciona el número del acompañamiento:\n";
            for (let i = 0; i < acompanamientos.length; i++) {
                menuAcompanamientos += `${i + 1}. ${acompanamientos[i].nombre} - $${acompanamientos[i].precio.toLocaleString()}\n`;
            }

            let eleccionAcompanamiento = prompt(menuAcompanamientos);
            console.log("Elección de acompañamiento:", eleccionAcompanamiento);

            eleccionAcompanamiento = parseInt(eleccionAcompanamiento);

            if (eleccionAcompanamiento >= 1 && eleccionAcompanamiento <= acompanamientos.length) {
                let acompanamientoSeleccionado = acompanamientos[eleccionAcompanamiento - 1];
                alert("Has elegido: " + acompanamientoSeleccionado.nombre);
                console.log("Acompañamiento seleccionado:", acompanamientoSeleccionado);

                // Selección de bebida
                alert("Elige tu bebida:");
                const bebidas = [
                    { nombre: "Coca Cola", precio: 3000 },
                    { nombre: "Sprite", precio: 3000 },
                    { nombre: "Agua", precio: 1500 }
                ];

                let menuBebidas = "Selecciona el número de la bebida:\n";
                for (let i = 0; i < bebidas.length; i++) {
                    menuBebidas += `${i + 1}. ${bebidas[i].nombre} - $${bebidas[i].precio.toLocaleString()}\n`;
                }

                let eleccionBebida = prompt(menuBebidas);
                console.log("Elección de bebida:", eleccionBebida);

                eleccionBebida = parseInt(eleccionBebida);

                if (eleccionBebida >= 1 && eleccionBebida <= bebidas.length) {
                    let bebidaSeleccionada = bebidas[eleccionBebida - 1];
                    alert("Has elegido: " + bebidaSeleccionada.nombre);
                    console.log("Bebida seleccionada:", bebidaSeleccionada);

                    // Preguntar si desea agrandar el combo
                    let agrandarCombo = prompt("¿Deseas agrandar el combo por $1000 adicionales? Responde 'Sí' o 'No'");
                    console.log("Respuesta para agrandar el combo:", agrandarCombo);

                    // Calcular el precio total
                    let precioTotal = hamburguesaSeleccionada.precio + acompanamientoSeleccionado.precio + bebidaSeleccionada.precio;

                    // Validar la respuesta en base al combo
                    if (agrandarCombo.toLowerCase() === "sí" || agrandarCombo.toLowerCase() === "si") {
                        precioTotal += 1000;
                        console.log("Precio después de agrandar el combo:", precioTotal);
                    } else if (agrandarCombo.toLowerCase() !== "no") {
                        alert("Respuesta no válida. Procederemos sin agrandar el combo.");
                    }

                    // Confirmar el pedido con el usuario
                    let confirmarPedido = confirm(`Confirmar el pedido:\nHamburguesa: ${hamburguesaSeleccionada.nombre}\nAcompañamiento: ${acompanamientoSeleccionado.nombre}\nBebida: ${bebidaSeleccionada.nombre}\nPrecio total: $${precioTotal.toLocaleString()}\nDirección de envío: ${direccion}\n\n¿Deseas confirmar el pedido?`);

                    if (confirmarPedido) {
                        // Mostrar el precio total y tiempo estimado de entrega
                        alert(`El pedido será enviado a la dirección: ${direccion}. El tiempo estimado de entrega es de 20 minutos. ¡Gracias por tu compra, ${nombre}!`);
                        console.log("Pedido confirmado:", {
                            nombre: nombre,
                            direccion: direccion,
                            hamburguesa: hamburguesaSeleccionada.nombre,
                            acompanamiento: acompanamientoSeleccionado.nombre,
                            bebida: bebidaSeleccionada.nombre,
                            precioTotal: precioTotal
                        });
                    } else {
                        alert("Pedido cancelado, nos vemos la proxima.");
                        console.log("Pedido cancelado por el usuario.");
                    }

                } else {
                    alert("Selección de bebida no válida. El Pedido sera cancelado.");
                }
            } else {
                alert("Selección de acompañamiento no válida. El Pedido sera cancelado.");
            }
        } else {
            alert("Selección de hamburguesa no válida. El Pedido sera cancelado.");
        }
    } else {
        alert("No se ingreso una dirección de envío. El Pedido sera cancelado.");
    }
} else {
    alert("Pedido Cancelado, nos vemos la proxima!");
}
