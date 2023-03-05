const nodemailer = require('nodemailer');

const mail = `
<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
	<tr>
		<td style="padding: 0">
			<img style="padding: 0; display: block" src="https://www.startechup.com/wp-content/uploads/January-11-2021-Nodejs-What-it-is-used-for-and-when-where-to-use-it-for-your-enterprise-app-development.jpg" width="100%">
		</td>
	</tr>
	
	<tr>
		<td style="background-color: #ecf0f1">
			<div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
				<h2 style="color: #487f2d; margin: 0 0 7px">Correo de Prueba!</h2>
				<p style="margin: 2px; font-size: 15px">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque assumenda excepturi velit autem non mollitia voluptatem, explicabo dicta quidem veritatis consequatur iste, tenetur accusamus commodi consectetur distinctio? Velit, sed esse?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, porro culpa asperiores libero tempora totam! Possimus incidunt, nisi, numquam labore autem corporis aliquam a quo facilis at impedit, aperiam eos.
                </p>
				<div style="width: 100%; margin:20px 0; text-align: center">
					<a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #19053a" href="https://www.youtube.com/@cp_dev/featured">Ir al canal</a>	
				</div>
			</div>
		</td>
	</tr>
</table>
`

const sendMail = async () => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true,
        port: 465,
        auth: {
            user: "user123@gmail.com", // dirección del remitente
            pass: "hjppmusehjpiqljk"
        }
    });

    await transporter.sendMail({
        from: "user123@gmail.com", // dirección del remitente
        to: "user456@gmail.com", // usuario que recibe
        subject: "CORREO DE PRUEBA", // asunto del correo
        text: "Correo de prueba", // Texto plano
        html: mail // HTML
    });

    console.log('Message sent');
};

sendMail();