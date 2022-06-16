import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

let usuarios = [
	{
		username: 'bobesponja', 
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
	}
];

let tweets = [
	{
		username: 'bobesponja', 
		tweet: "eu amo o hub"
	}
];

app.listen(5000);