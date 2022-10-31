import http from "../options/UrlView"
import headers from "../options/HeadersView"

async function viewAllFinalGradeAndFrequency(id){
    const path = `/student/${id}`
    const req = await http.get(path, {headers: await headers.headers()})
    return req
}
async function viewFinalGradeAndFrequency(id){
    const path = `/student/notes/${id}`
    const req = await http.get(path, {headers: await headers.headers()})
    return req
}
async function viewRegister(id){
    const path = `/student/enrolled/${id}`
    const req = await http.get(path, {headers: await headers.headers()})
    return req
}