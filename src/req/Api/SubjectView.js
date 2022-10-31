import http from "../options/UrlView"
import headers from "../options/HeadersView"

async function createSubject(name,workLoad,menu, classes){
    const path = `/subjects/create`
    const req = await http.post(path, {name: name, workLoad: workLoad, menu:menu, classes:classes}, {headers: await headers.headers()})
    return req
}

async function readSubject(){
    const path = `/subjects`
    const req = await http.get(path, {headers: await headers.headers()})
    return req
}
async function readSubjectById(id){
    const path = `/subjects/${id}`
    const req = await http.get(path, {headers: await headers.headers()})
    return req
}
async function updateSubject(name,workLoad,menu, enrolled){
    const path = `/subjects/update/${id}`
    const req = await http.put(path, {name: name, workLoad: workLoad, menu:menu, enrolled:enrolled}, {headers: await headers.headers()})
    return req
}
async function deleteSubject(id){
    const path = `/subjects/delete/${id}`
    const req = await http.delete(path, {headers: await headers.headers()})
    return req
}