import http from "../options/UrlView"
import LocalForage from "localforage"
import headers from "../options/HeadersView"

// interface users{
//     id: string,
//     cpf: string,
//     email: string,
//     name: string,
//     surname: string,
//     password: string,
//     telephone: string,
//     adress: string,
//     register: Array<string>,
// }

async function loginUser(cpf, password){
    const path = `/login`;
    const req = await http.post(path, { cpf: cpf, password: password }, {headers: await headers.headers()});

    if (req.headers.headers['authorization']) {

        await LocalForage.setItem('Authorization', req.headers.headers['authorization'])
        await LocalForage.setItem('username', req.data.data.name)

    }
    return req
}

async function createUser(cpf, email, name, surname, password, telephone, address, register){
    const path = `/users/create`
    const req = await http.post(path, {cpf: cpf, email: email, name: name, surname: surname, password: password, telephone: telephone, address: address, register: register }, {headers: await headers.headers()});
    return req
}

async function readUser(){
    const path = `/users`
    const req = await http.get(path,  {headers: await headers.headers()} )
    return req
}

async function readUserById(id){
    const path = `/users/${id}`
    const req = await http.get(path, {headers: await headers.headers()} )
    return req
}

async function updateUser(id,cpf, email, name, surname, password, telephone, address, register){
    const path = `/users/update/${id}`
    const req = await http.put(path, {cpf: cpf, email: email, name:name, surname:surname, password:password, telephone:telephone, address:address, register:register}, {headers: await headers.headers()})
    return req
}

async function deleteUser(id) {
    const path = `/users/delete/${id}`
    const req = await http.delete(path, {headers: await headers.headers()})
    return req
}

async function logout(){
    const path = `/logout`
    const req = await http.get(path, {headers: await headers.headers()})
    return req
}