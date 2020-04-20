const connection = require('../database/connection');
const crypto = require('crypto');
module.exports = {
    async index(request,response){
        console.log()
        const ongs = await connection('ongs').select('*');
        return response.json(ongs); 
    },
    async create(request,response){
        const {nome,email,whatsapp,cidade,uf} = request.body;
        console.log({nome,email,whatsapp,cidade,uf});
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf,
        });
        return response.json({id});
    }

}