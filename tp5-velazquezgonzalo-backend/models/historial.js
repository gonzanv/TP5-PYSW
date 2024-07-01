const mongoose = require('mongoose'); 
const Producto = require('./producto');
const {Schema} = mongoose; 
const HistorialSchema = new Schema({ 
    monto: {type:Number, required: true},
    fecha: {type:String, required: true},
    producto: {type: Schema.Types.ObjectId, ref: Producto, required: true}
}) 
 
module.exports = mongoose.models.Historial || mongoose.model('Historial', HistorialSchema); 