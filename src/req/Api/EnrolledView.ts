import http from "../options/UrlView"
import headers from "../options/HeadersView"

async function createEnrolled(idUser, role, classGroup, finalGrade, frequency){
    const path = `/enrolled/create`
    const req = await http.post(path, {idUser: idUser, role: role, classGroup:classGroup, finalGrade:finalGrade, frequency: frequency}, {headers: await headers.headers()})
    return req
}

async function readEnrolled(){
    const path = `/enrolled`
    const req = await http.get(path, await headers.headers())
    return req
}
async function readEnrolledById(id){
    const path = `/enrolled/${id}`
    const req = await http.get(path, await headers.headers())
    return req
}
async function updateEnrolled(id, idUser,role, classGroup, finalGrade, frequency){
    const path = `/enrolled/update/${id}`
    const req = await http.put(path, {idUser: idUser, role: role, classGroup:classGroup, finalGrade:finalGrade, frequency: frequency}, await headers.headers())
    return req
}
async function deleteEnrolled(id){
    const path = `/enrolled/delete/${id}`
    const req = await http.delete(path, await headers.headers())
    return req
}