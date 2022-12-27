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

async function insertNovedad(obj){
    try{
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query, [obj])
        return rows;

    }catch(error){
        console.log(error);
        throw error;
    }
}

//update novedades

async function getNovedadesById(id){
    var query = 'select from novedades where id = ?';
    var rows = await pool.query(query,[id]);
    return rows[0];
}







module.exports = {getNovedades, deleteNovedadesById, insertNovedad, getNovedadesById};