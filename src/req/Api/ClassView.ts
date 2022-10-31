import http from "../options/UrlView"
import headers from "../options/HeadersView"

async function createClass(name, vacancy,dateStart,dateEnd,enrroled,subject){
    const path = `/classes/create`
    const req = await http.post(path, {name: name, vacancy: vacancy, dateStart:dateStart, dateEnd:dateEnd, enrroled:enrroled, subject: subject}, await headers.headers())
    return req
}

async function readClass(){
    const path = `/classes`
    const req = await http.get(path, await headers.headers())
    return req
}
async function readClassById(id){
    const path = `/classes/${id}`
    const req = await http.get(path, await headers.headers())
    return req
}
async function updateClass(id, name, vacancy,dateStart,dateEnd,enrroled,subject){
    const path = `/classes/update/${id}`
    const req = await http.put(path, {name: name, vacancy: vacancy, dateStart:dateStart, dateEnd:dateEnd, enrroled:enrroled, subject: subject}, await headers.headers())
    return req
}
async function deleteClass(id){
    const path = `/classes/delete/${id}`
    const req = await http.delete(path, await headers.headers())
    return req
}