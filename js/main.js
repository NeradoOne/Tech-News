
let locked = true;
const user = {
    usuario: 'admin',
    contraseña: 'admin'
}
const acceder = () => {
    if (locked) { 
        let usuario = prompt('Ingrese Usuario:');
        let contraseña = prompt('Ingrese Contraseña:');
        if (usuario == user.usuario && contraseña == user.contraseña) {
            locked = false;
            alert('Bienvenido, ha ingresado bajo los permisos de Administrador')
        } else {
            alert('Recuerde que usuario y contraseña por defecto son: admin/admin')
            acceder()
        }   
    }
}
acceder()