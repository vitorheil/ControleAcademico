import http from "../options/UrlView"
import headers from "../options/HeadersView"

async function createRole(name, actions){
    const path = `/roles/create`
    const req = await http.post(path, {name: name, actions: actions}, await headers.headers())
    return req
}

async function readRole(){
    const path = `/roles`
    const req = await http.get(path, await headers.headers())
    return req
}
async function readRoleById(id){
    const path = `/roles/${id}`
    const req = await http.get(path, await headers.headers())
    return req
}
async function updateRole(name,workLoad,menu, classes){
    const path = `/roles/update/${id}`
    const req = await http.put(path, {name: name, workLoad: workLoad, menu:menu, classes:classes}, await headers.headers())
    return req
}
async function deleteRole(id){
    const path = `/roles/delete/${id}`
    const req = await http.delete(path, await headers.headers())
    return req
}