const Historial = require('../models/historial'); 
const historialCtrl = {} 
 
historialCtrl.getHistoriales = async (req, res) => { 
    var historiales = await Historial.find(); 
    res.json(historiales); 
} 

historialCtrl.createHistorial = async (req, res) => { 
    var historial = new Historial(req.body); 
    try { 
        await historial.save(); 
        res.json({ 
            'status': '1', 
            'msg': 'historial guardado.'}) 
    } catch (error) { 
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando operacion.'}) 
    } 
} 


historialCtrl.getHistorialPorProducto = async (req, res) => {
    const productoID = req.params.idProducto;
    try {
        const historial = await Historial.find({ producto: productoID }).populate("producto");
        res.json(historial);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error procesando la operacion'
        });
    }
}

module.exports = historialCtrl; 