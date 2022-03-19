
const locked = true;
const user = {
    usuario: 'admin',
    contraseña: 'admin'
}
const acceder = () => {
    if (locked) { 
        let usuario = prompt('Ingrese Usuario:');
        let contraseña = prompt('Ingrese Contraseña:');
        if (usuario == user.usuario && contraseña == user.contraseña) {
            const locked = false;
            alert('Bienvenido, ha ingresado bajo los permisos de Administrador')
        } else {
            alert('Recuerde que usuario y contraseña por defecto son: admin/admin')
            acceder()
        }   
    }
}
acceder()

//Comentrarios de ejemplo
const comments = [
    {name: 'Willy87', comment: 'Lookslike a original Gameboy!'},
    {name: 'Nate', comment: 'I’m glad this turned out well. I haven’t seen done in person yet, but I got into the GBA modding scene a couple months ago and it’s nuts how good those old games look on a modern screen. Also, if anyone is curious, modding a new screen and even USB-C charging on a GBS SP with a new metal shell is pretty easy if the Pocket is hard to get or out of your price range. (It’s also just a fun project.)'},
    {name: 'PhilSwn', comment: 'This article is begging for photos/video of GBC and GBA games running on it.'},
    {name: 'Mattopotamus', comment: 'There is something really nice about old school gaming with just A+B and a directional pad. I can play games like Turtles in Time and Contra for hours.'}
]
//Funcion que carga los comentarios
const loadComments = () => {
    //Reestablece la lista de comentarios
    document.querySelector('#comments').innerHTML = '';
    //Recorre el array de comentarios
    for (const comment in comments) {
        //Uso de template para insertar los comentarios en el html
        let comentario = `
            <h4 class='comments-name'>${comments[comment].name}</h4>
            <p  class='comments-comment'>${comments[comment].comment}</p>
            `;
        document.querySelector('#comments').innerHTML += comentario;

    }
    const commentsCounter = document.querySelector('#commentsCounter');
    commentsCounter.textContent = comments.length;
}
loadComments()


const newComment = e => {
    e.preventDefault();
// Compueba si el cmpo de comentarios esta vacio
    if (commentBox.value == ''){
        alert('Please type your comment')
    } else {
        //En caso que este el comentario se envie sin nombre, se le asigna la etiqueta de anonimo al mismo
            comment = {name: commentName.value == '' ? 'anonymous' : commentName.value, comment: commentBox.value}
            comments.push(comment)
            commentName.value = '';
            commentBox.value = '';
    loadComments()
}
}
const commentBox = document.querySelector('#commentBox')
const commentName = document.querySelector('#commentName')
const btnCreatre = document.querySelector('#btnCreateComment');
btnCreatre.addEventListener('click', newComment)

