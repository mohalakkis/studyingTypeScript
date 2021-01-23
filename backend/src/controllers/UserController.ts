import { Request, Response } from 'express';
import EmailService from '../services/EmailService';


const users = [
	{ name: 'Mohamed Lakkis', email: 'mohamed@lakkis.com.br' },
];
export default {
	async index(req: Request, res: Response) {
		return res.json(users);
	},
	async create(req: Request, res: Response) {
		const emialService = new EmailService();

		emialService.sendMail(
			{ name: 'mohamed lakkis', email: 'mohamed@lakkis.com.br' },
			{ sudject: 'Bem vindo', body: 'heloooooooooooo' }
		);
		return res.send();
	}
};
