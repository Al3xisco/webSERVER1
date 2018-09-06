
const controller={
  visualizar:(req,res)=>{
        res.render('index');
      },

  listar:(req,res)=>{
    req.getConnection((error,conexion)=>{
      conexion.query('select * from futbol',(error, datos)=>{
        if(error){
        res.json(error); 
      }
      console.log('Datos de futbol');
        res.render('datosservidor',{
          data:datos
        });
      });
    });
  },

  listarfutbol:(req,res)=>{
    req.getConnection((error,conexion)=>{
      conexion.query('select * from futbol',(error, datos)=>{
        if(error){
        res.json(error); 
      }
      console.log('Tabla de futbol');
        res.render('tablafutbol',{
          data:datos
        });
      });
    });
  }

}
//-----------------------------------------------

module.exports=controller;




