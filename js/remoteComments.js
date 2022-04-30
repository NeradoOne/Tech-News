const commentsCounter = document.querySelector('#commentsCounter');

const URL = "https://jsonplaceholder.typicode.com/comments"
const loadRemoteComments = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#comments').innerHTML = '';
            for (let i = 0; i < 10; i++) {
                //Uso de template para insertar los comentarios en el html
                let comentario = `
                <h4 class='comments-name'>${data[i].name}</h4>
                <p  class='comments-comment'>${data[i].body}</p>
                `;
                document.querySelector('#comments').innerHTML += comentario;
            }
        })
        .catch((error) => {console.error(error)})
        .finally(data => commentsCounter.textContent = document.getElementsByTagNameNS('*', 'h4').length)
}

loadRemoteComments()

const postRemoteComment = (name, comment) => {
    
    fetch(URL , {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            body: comment,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            let cName = document.createElement('h4');
            cName.textContent = json.name;
            let c = document.createElement('p');
            c.textContent = json.body;
            document.querySelector('#comments').prepend(c);
            document.querySelector('#comments').prepend(cName);
        })
        .catch((error) => {console.error(error)})
        .finally(data => {
            commentsCounter.textContent = document.getElementsByTagNameNS('*', 'h4').length;
            document.querySelector('#floating').classList.toggle('lds-dual-ring');
        })
}

const newComment = e => {
    e.preventDefault();
    // Compueba si el campo de comentarios esta vacio
    if (commentBox.value == '') {
        alert('Please type your comment')
    } else {

        document.querySelector('#floating').classList.toggle('lds-dual-ring');
        //En caso que este el comentario se envie sin nombre, se le asigna la etiqueta de anonimo al mismo
        postRemoteComment(commentName.value == '' ? 'anonymous' : commentName.value, commentBox.value)
        commentName.value = '';
        commentBox.value = '';
    }
}

const commentBox = document.querySelector('#commentBox')
const commentName = document.querySelector('#commentName')
const btnCreatre = document.querySelector('#btnCreateComment');
btnCreatre.addEventListener('click', newComment)