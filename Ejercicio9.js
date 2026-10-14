let usuario_correcto = "Admi"
    let contraseña_correcta = "1234"

    let usuario_ingresado = "Admi"
    let contraseña_ingresada = "1234"

    if (usuario_correcto == usuario_ingresado){
        if (contraseña_correcta == contraseña_ingresada){
            console.log("Acceso concedido");
        }else {
            console.log("Contraseña incorrecta");}  
        }else {
            console.log("Usuario no encontrado");
        }