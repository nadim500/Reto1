var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');


app.get('/',function(req,res){
	res.send('Estas en la raiz, pon "/endpoint1 o /endpoint2" para ver el resultado');
})

app.get('/endpoint1',function( req, res){
	var cantidad = _.random(5,9);
	var usuarios = _.times(cantidad,function(){
		var randomUuid = faker.random.uuid();
		var randomNombre = faker.name.firstName();
		var randomContenido = faker.lorem.sentences();
		var randomFecha = faker.date.past();
		var randomImage = faker.image.avatar();
		return{
			uuid: randomUuid,
			nombre: randomNombre,
			contenido: randomContenido,
			fecha: randomFecha,
			imagen: randomImage
		}
	});
	res.json(usuarios)
})

app.get('/endpoint2',function( req,res){
	var cantidad = _.random(5,9);
	var usuarios = _.times(cantidad,function(){
		var randomPrimerNombre = faker.name.firstName();
		var randomApellido = faker.name.lastName();
		var randomAreaTrabajo = faker.name.jobArea();
		var randomTelefono = faker.phone.phoneNumber();
		var randomCorreo = faker.internet.email();
		var randomTarjetaCredito = faker.helpers.createCard();
		return{
			primerNombre : randomPrimerNombre,
			apellido : randomApellido,
			areaTrabajo : randomAreaTrabajo,
			telefono : randomTelefono,
			correo : randomCorreo,
			tarjetaCredito : randomTarjetaCredito
		}

	});
	res.json(usuarios);
})

app.listen(3000);