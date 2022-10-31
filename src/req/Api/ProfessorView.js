import http from "../options/UrlView"
import headers from "../options/HeadersView"


async function GiveGradeAndFrequency(finalGrade,frequency){
    const path = `/professor/${id}`
    const req = await http.put(path, {finalGrade: finalGrade, frequency:frequency}, {headers: await headers.headers()})
    return req
}