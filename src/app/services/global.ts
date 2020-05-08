
export class Student{

	constructor(
	public name: string,
	public lastName: string,
	public img: string,
	public grade: string,
	public register: number,
	public tutors: string,
	public calificaciones: any,
	public userName: string,
	public password: string,
	public credential: string
		){}
};

export class Teacher{

	constructor(
	public name: string,
	public lastName: string,
	public age: number,
	public img: string,
	public matter: string,
	public register: number,
	public startDate: number,
	public userName: string,
	public credential: string
		){}
};

export class Manager{

	constructor(
	public name: string,
	public lastName: string,
	public age: number,
	public img: string,
	public tutors: string,
	public _userName: string,
	public credential: string,
	public hash : string,
	public salt: string
	){}
};

export class Calificaciones{

	constructor(
	public calMath: number,
	public calSoc: number,
	public calNat: number,
	public calSpan: number,
	public calIngl: number,
	public calCivic: number,
	public calArt: number,
	public calSport: number
	){}
}