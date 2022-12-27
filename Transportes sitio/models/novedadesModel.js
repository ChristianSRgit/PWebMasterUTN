var pool = require('./bd');

//lista las novedades con una consulta select * from bd

async function getNovedades(){
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}

async function deleteNovedadesById(id){
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

module.exports = {getNovedades, deleteNovedadesById};