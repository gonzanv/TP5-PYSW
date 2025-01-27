const Producto = require('../models/producto'); 
const Historial = require('../models/historial'); 
const productoCtrl = {} 
 
productoCtrl.getProductos = async (req, res) => { 
    var productos = await Producto.find(); 
    res.json(productos); 
} 

productoCtrl.getProductosDestacados = async (req, res) => {
    try {
        var productosDestacados = await Producto.find({ destacado: true });
        res.json(productosDestacados);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        });
    }
}

productoCtrl.getProducto = async (req, res) => { 
    const producto = await Producto.findById(req.params.id); 
    res.json(producto); 
} 

productoCtrl.createProducto = async (req, res) => { 
    var producto = new Producto(req.body); 
    try { 
        await producto.save(); 
        res.json({ 
            'status': '1', 
            'msg': 'Producto guardado.'}) 
    } catch (error) { 
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando operacion.'}) 
    } 
 
} 
 
productoCtrl.editProducto = async (req, res) => { 
    const anteriorPrecio = await Producto.findById(req.body._id); 
    const vproducto =  new Producto(req.body); 
    const vhistorial = new Historial({
        monto: anteriorPrecio.precio,
        fecha: new Date(),
        producto: vproducto._id
    })
    vhistorial.save();
    try { 
        await Producto.updateOne({_id: req.body._id}, vproducto); 
        res.json({ 
            'status': '1', 
            'msg': 'Producto updated' 
        })         
    } catch (error) { 
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando la operacion' 
        })       
    } 
} 
 
productoCtrl.deleteProducto = async (req, res)=>{ 
    try { 
        await Producto.deleteOne({_id: req.params.id}); 
        res.json({ 
            status: '1', 
            msg: 'Producto removed'
        })    
    } catch (error) { 
        res.status(400).json({ 
            'status': '0', 
            'msg': 'Error procesando la operacion' 
        })   
    } 
} 

module.exports = productoCtrl; 