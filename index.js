import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json()) // for parsing application/json
//app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

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

app.post('/sign-up', (req, res) => {
	let {username, avatar} = req.body;
	usuarios.push({username: username, avatar: avatar});
	console.log(usuarios);
	res.send("OK");
});

app.post('/tweets', (req, res) => {
	let {username, tweet} = req.body;
	tweets.unshift({username: username, tweet: tweet});
	console.log(tweets[0]);
	res.send("OK");
});

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