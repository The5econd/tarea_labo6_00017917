var productos = [];
var registroVENTA = [];
function agregar(){
        let codigo = prompt('codigo');
        let descripcion= prompt('descripcion');
        let tipo = prompt('tipo de producto');
        let precioCOMPRA = prompt('precio de compra');
        let precioVENTA = prompt('precio de venta');
        let stock = prompt('stock')
        productos.push({codigo, descripcion, tipo, precioCOMPRA, precioVENTA, stock});
        registroVENTA.push(0);
}
function modificarStock(){
    if(productos === undefined || productos.length == 0){
        console.log("la lista de productos esta vacia, agregue antes de modificar")
    }
    else{
        let flag = 1;
        let codigo = prompt('ingrese el codigo del producto que desea cambiar el stock')
        for(let i = 0; i < productos.length; i++){
            if (productos[i].codigo == codigo){
                let nuevoSTOCK = prompt('ingrese el nuevo stock que desea');
                productos[i].stock = nuevoSTOCK;
                flag = flag + 1;
            }
        }
        if(flag == 1){
            console.log('no se encontro el codigo que ingreso')
        }
    }
}

function regiVen_redu_Stock(){
    if(productos === undefined || productos.length == 0){
        console.log("la lista de productos esta vacia, agregue antes de registrar")
    }
    else{
        let flag = 1;
        let k = prompt('ingrese el codigo del producto del que quiere registrar venta')
        let h = prompt('ingrese la cantidad del producto vendido')
        for(let i = 0; i < productos.length; i++){
            if (productos[i].codigo == k){
                registroVENTA[i] += (1*h);
                productos[i].stock = (productos[i].stock-h);
                flag = flag + 1;
            }
        }
        if(flag == 1){
            console.log('no se encontro el codigo ')
            console.log(' ')
        }else{
            for(let i = 0; i < productos.length; i++){
                console.log("PRODUCTO REGISTRADO------codigo de producto: " + productos[i].codigo + 
                "  numero de ventas: " + registroVENTA[i] + "  stock: " + productos[i].stock);
            }
        }
    }
}
function mostrarPromedio(){
    if(registroVENTA === undefined || registroVENTA.length == 0 ){
        console.log("la lista de productos esta vacia, agregue antes de mostrar promedio")
    }
    else{
        let total = 0;
        let promedio = 0;
        for(let i = 0; i < registroVENTA.length; i++){
            total = total + (registroVENTA[i]);
        }
        promedio = promedio + (total/registroVENTA.length);
        console.log('el promedio de las ventas realizadas hasta ahorita es: ' + promedio)

    }
}
function stockCero(){
    if(productos === undefined || productos.length == 0){
        console.log("la lista de productos esta vacia, no hay nada que mostrar")
    }
    else{
        let flag = 1;
        for(let i = 0; i < productos.length; i++){
            if(productos[i].stock == 0){
                console.log("codigo: " + productos[i].codigo +
                            "   descripcion: " +productos[i].descripcion + 
                            "   tipo: " +productos[i].tipo +
                            "   precio de compra: " +productos[i].precioCOMPRA +
                            "   precio de venta: " +productos[i].precioVENTA)
                flag = flag + 1;
            } 
        }
        if(flag == 1){
            console.log('no hay productos con stock de 0')
        }
    }
}
function menu(){
    var n = true;
    while(n){
        console.log('////////////////MENU//////////////')
        console.log('Agregar: presione 1');
        console.log('Modificar stock: presione 2');
        console.log('Registrar venta y reducir stock: presione 3');
        console.log('MOstrar el promedio de ventas: presione 4');
        console.log('Mostrar productos con stock de 0: presione 5');
        console.log('Salir: presione 6');
        switch(prompt('ELIGA UN NUMERO DEL MENU MOSTRADO')){
            case "1":
                agregar();
                break;
            case "2":
                modificarStock();
                break;
            case "3":
                regiVen_redu_Stock();
                break;
            case "4":
                mostrarPromedio();
                break;
            case "5":
                stockCero();
                break;
            case "6":
                n = false;
                break;
            default:
                console.log('por favor ingrese un numero valido');
        }
    }
}
