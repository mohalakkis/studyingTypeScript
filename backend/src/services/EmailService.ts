interface ImailTo {
	name: string;
	email: string;
}

interface ImailMassage {
	sudject: string;
	body: string;
	attachment?: string[];
}

class EmailService {
	sendMail(to: ImailTo, message: ImailMassage) {
		console.log(`Email enviado para ${to.name}: ${message.sudject}`)
	};
};

export default EmailService;
