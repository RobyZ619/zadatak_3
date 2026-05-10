import { kartice } from "./KarticePodaci";

// 1/4 Read od CRUD
async function get(){
    return {data: kartice}
}

async function getBySifra(sifra) {
    return {data: kartice.find(k => k.sifra === parseInt(sifra))}
}

// 2/4 Create od CRUD
async function dodaj(kartica){
    if(kartice.length === 0){
        kartica.sifra = 1
    } else {
        kartica.sifra = kartice[kartice.length - 1].sifra + 1
    }
    kartice.push(kartica)
}

// 3/4 Update od CRUD
async function promjeni(sifra, kartica) {
    const index = nadiIndex(sifra)
    kartice[index] = {...kartice[index], ...kartica}
}

function nadiIndex(sifra){
    return kartice.findIndex(k => k.sifra === parseInt(sifra))
}

export default{
    get,
    getBySifra,
    dodaj,
    promjeni
}
