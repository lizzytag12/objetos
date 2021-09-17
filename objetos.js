//1)a) Crear un constructor de personas con las siguientes características: Nombre, apodo, hobbies, película favorita, lugar de residencia. 


/* personaSergio ={
    "Nombre":"sergio",
    "apodo":"serch",
    "hobbies":"Tomar fotografías",
    "películaFavorita":"13hr los soldados de bengasi",
    "lugarResidencia":"Barranquilla, Colombia"
}
personaLucho ={
    "Nombre":"luciano",
    "apodo":"lucho",
    "hobbies":"escuchar musica",
    "películaFavorita" : "el señor de los anillos",
    "lugarResidencia":"Pergamino, Buenos Aires, Argentina  ",
}
personavicky ={
    "Nombre":"victoria",
    "apodo":"vico",
    "hobbies":"bailar",
    "películaFavorita":"the Advengers",
    "lugarResidencia":"Cordoba Capital, Argentina"
 } */
 
  /* class Persona {
     
    constructor ( nombre, apodo, hobbies, peliculaFavorita, lugarResidencia){

        this.Nombre =nombre;
        this.apodo=apodo;
        this.hobbies=hobbies;
        this.peliculaFavorita=peliculaFavorita;
        this.lugarResidencia=lugarResidencia;

        this.info=()=>{
            console.log("Mi nombre es "+ this.Nombre + ", Mi apodo es "+ this.apodo + ", Mi hobbie es "+ this.hobbies + ", Mi peli favorita es " + this.peliculaFavorita + ", vivo en "+ this.lugarResidencia);

        }

    }

 }
 const personaSergio = new Persona ("sergio","serch","tomar fotografias, ver series","13hr los soldados de bengasi","barranquilla, Colombia")
 console.log(personaSergio);
 
 const personaLucho= new Persona ("luciano", "lucho", "escuchar musica", "el señor de los anillos","Pergamino, Buenos Aires, Argentina")
console.log(personaLucho);
 const personaVicky =new Persona ("Viky","Vico","bailar","the Advengers","Cordoba Capital, Argentina")
 console.log(personaVicky); */


//b)b) Agregarle un método que muestre por consola un mensaje personalizado presentándose con su nombre y características definidas.
 /* personaSergio.info();
 personaVicky.info();
 personaLucho.info();
 */
 //a) Crear un tipo de objeto “cuenta bancaria” que tenga los siguientes datos: Tipo de cuenta (Caja de ahorro, o cuenta corriente), saldo, titular y red que opera (link o Banelco).

let retiroDeCash;
let nuevoSaldo;
let depositoDeCash;
let nuevoDeposito;
let cambioCuenta;
let nuevaCuenta;

 class CuentaBancaria{
     
    constructor(tipoDeCuenta, saldo, titular, red){

        this.tipoDeCuenta = tipoDeCuenta;
        this.saldo=saldo;
        this.titular=titular;
        this.red=red;
        

        this.info=()=>{
            
         alert("Su saldo actual  es de $"+ this.saldo); 
        }
        this.cambiarSaldo= function(nuevoSaldo){
            retiroDeCash=parseInt(prompt("Cuanto dinero desea retirar de su cuenta?"));
             nuevoSaldo=(this.saldo)-retiroDeCash
             this.saldo=nuevoSaldo;
            alert("usted esta retirando $"+ retiroDeCash + " su saldo restante  ahora es de $"+ this.saldo)
        
        }
        this.depositoDinero= function(nuevoDeposito){
            depositoDeCash=parseInt(prompt("Cuanto dinero desea depositar de su cuenta?"));
             nuevoDeposito=this.saldo+depositoDeCash;
             this.saldo=nuevoDeposito;
            alert("usted esta depositanto $"+ depositoDeCash + " su saldo incrementó a $"+this.saldo)
        
        } 
        this.saludo=()=>{
            alert("Bienvenido "+ this.titular + " a su red Banelco");

        }
        this.mostrar=()=>{
            alert("Bienvenido "+this.titular + " le informamos que su saldo es de $"+this.saldo);
        }
        this.crearCuenta=()=>{
            cambioCuenta =parseInt(prompt("Elija el numero de la cuenta que desea crear:\n1)Caja de Ahorro \n2)Cuenta Corriente")) ;
            if(cambioCuenta==1){
                this.tipoDeCuenta ="Caja de Ahorro";
                alert("su " + this.tipoDeCuenta + " ha sido creada con Exito")
            }else{
                this.tipoDeCuenta="Cuenta Corriente";
                alert("su " + this.tipoDeCuenta + " ha sido creada con Exito")
            }
            
        }
     }
 } 

 const usuario = new CuentaBancaria ("caja de ahorro",5000,"Raymond","Banelco")
 console.log(usuario);
  
 //b) Incluir la acción de retirar dinero, que reciba un parámetro y actualice el nuevo valor del saldo.
 
/*  usuario.info(); */
 
 /*  usuario.cambiarSaldo(nuevoSaldo); 
 */

 //c) Incluir la acción de depositar dinero, que recibe un parámetro y actualice el nuevo valor del saldo.

/* usuario.depositoDinero(nuevoDeposito) */

//d) Incluir la acción de mostrar un saludo personalizado al titular, dandole la bienvenida a su red. (“Ej: Bienvenida Claudia a la red Banelco”).

/* usuario.saludo(); */

//e) Incluir la acción de mostrar el saldo.

/* usuario.mostrar(); */

//f) Incluir otras acciones que consideren
/* usuario.crearCuenta(); */

  
    




