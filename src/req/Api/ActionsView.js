import http from "../options/UrlView"
import headers from "../options/HeadersView"

async function createAction(name, methods){
    const path = `/actions/create`
    const req = await http.post(path, {name: name, methods: methods}, {headers: await headers.headers()})
    return req
}

async function readAction(){
    const path = `/actions`
    const req = await http.get(path, {headers: await headers.headers()})
    return req
}
async function readActionById(id){
    const path = `/actions/${id}`
    const req = await http.get(path, {headers: await headers.headers()})
    return req
}
async function updateAction(name,methods){
    const path = `/actions/update/${id}`
    const req = await http.put(path, {name: name, methods:methods}, {headers: await headers.headers()})
    return req
}
async function deleteAction(id){
    const path = `/actions/delete/${id}`
    const req = await http.delete(path, {headers: await headers.headers()})
    return req
}
async function addMethodInActions(method){
    const path = `/actions/methods`
    const req = await http.patch(path,{method:method},{headers: await headers.headers()})
    return req
}
async function deleteActionsInRole(method){
    const path = `/actions/methods/delete`
    const req = await http.delete(path,{method:method}, {headers: await headers.headers()})
    return req
}