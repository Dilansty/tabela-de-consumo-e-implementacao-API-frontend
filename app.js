'use strict'

import {getContatos, postContato, putContato, deleteContato} from "./contatos.js"

const novoContato = {
"nome": "Allan Almeida Mudado/diferente",
"celular": "11 9 5209-9749",
"foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
"email": "ana@gmail.com",
"endereco": "Av. São Joaquim, 234",
"cidade": "Labaxurias cabarabas"
}

//console.log(await putContato(10, novoContato))
console.log(await deleteContato(10))