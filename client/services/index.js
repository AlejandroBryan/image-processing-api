import http from './http'

const get = async ()=>{
    return await http.get('/images/')
 }

 const upload = async (file)=>{
     return await http.post('/images/upload'+ file)
 }

 const gallery = async ()=>{
    return await http.get('/images/gallery')
 }
// eslint-disable-next-line import/no-anonymous-default-export
 export default{
    get,
    upload,
    gallery

 }