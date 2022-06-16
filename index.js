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
	},
	{
		username: 'bobesponja', 
		tweet: "eu amo o hub"
	},
	{
		username: 'bobesponja', 
		tweet: "eu amo o hub"
	},
	{
		username: 'bobesponja', 
		tweet: "eu amo o hub"
	},
	{
		username: 'bobesponja', 
		tweet: "eu amo o hub"
	},
	{
		username: 'bobesponja', 
		tweet: "eu amo o hub"
	},
	{
		username: 'bobesponja', 
		tweet: "eu amo o hub"
	},
	{
		username: 'bobesponja', 
		tweet: "eu amo o hub"
	},
	{
		username: 'bobesponja', 
		tweet: "eu amo o hub"
	},
	{
		username: 'bobesponja', 
		tweet: "eu amo o hub"
	},
	{
		username: 'bobesponja', 
		tweet: "eu amo o hub"
	}
];

app.get("/tweets", (_, res) => {
	let last_tweets = [];
	for(let i = 0; i < tweets.length && i < 10; i++){
		let avatar = "";
		for(let j = 0; j < usuarios.length; j++){
			if(tweets[i].username === usuarios[j].username)
				avatar = usuarios[j].avatar;
		}
		last_tweets.push({
			username: tweets[i].username,
			avatar: avatar,
			tweet: tweets[i].tweet
		});
	}
	res.send(last_tweets);
});

app.listen(5000);