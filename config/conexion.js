const mongoose = require("mongoose");
// const url = "mongodb://localhost/test";
const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.gursr.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

// import database configuration
//import configDatabase from '../config/database';

// import all models sequelize
//import User from '../app/models/User';

// Add models to array
// const models = [];

class Db {
	constructor() {
		this.init();
		this.mongo();
	}

	init() {
		//this.connection = new Sequelize(configDatabase);
		//models.map(model => model.init(this.connection));
	}

	mongo() {
		this.mongoConnection = mongoose
			.connect(url, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true,
			})
			.then(() => console.log("conectado a mongod"))
			.catch((e) => {
				console.log("no se pudo concetar a mongod");
				// console.log(`el erro de conexion es: ${e}`)
				this.mongo();
			});
	}
}

module.exports = new Db();