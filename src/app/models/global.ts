
// Para el login

export class userDataLogin{

	constructor(
		public userName,
		public password

		){

	}

}

//Modelo Usuario 

export class userModel {

	constructor(
		public name: string,
		public userName: string,
		public password: string,
		public cal: string,
		public privileges: string,
		public personalData: string
		){}
}

//Modelo calificaciones

export class calModel {

	constructor(
		public math: number,
		public soc: number,
		public nat: number,
		public esp: number,
		public arte: number,
		public MyC: number,
		public ingles: number,
		public Deprte: number
		){}
}

// Modelo Información personal

export class personalModel{

	constructor(
		public grade: string,
		public phone: number,
		public email: string,
		public address: string,
		public gender: string,
		public age: number,
		public tutor1: string,
		public phoneTutor1: number,
		public emailTutor1: string,
		public tutor2: string,
		public phoneTutor2: number,
		public emailTutor2: string,
		public affliction: string
		){}
}