import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(express.json()) // for parsing application/json
//app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let usuarios = [
	{
		username: 'Bob Esponja', 
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
	},
	{
		username: 'Heráclito', 
		avatar: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Heraclitus%2C_Johannes_Moreelse.jpg" 
	},
	{
		username: 'Arthur Schopenhauer', 
		avatar: "https://www.revistaprosaversoearte.com/content/uploads/2020/05/arthur-schopenhauer-1-1068x802.jpg" 
	},
	{
		username: 'Friedrich Nietzsche', 
		avatar: "https://contraosacademicos.com.br/wp-content/uploads/2020/04/Lista_de_Leitura_Ordenada_Nietzsche-1.jpg" 
	},
	{
		username: 'Protágoras',
		avatar: "https://static.todamateria.com.br/upload/57/6d/576df00672819-protagoras.jpg"
	},
	{
		username: 'René Descartes',
		avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg"
	},
	{
		username: 'Monkey D. Luffy',
		avatar: "https://i1.sndcdn.com/avatars-xZb8MS9peo3DljjZ-UJZM3g-t240x240.jpg"
	},
	{
		username: 'Immanuel Kant',
		avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Immanuel_Kant_%28painted_portrait%29.jpg/416px-Immanuel_Kant_%28painted_portrait%29.jpg"
	},
	{
		username: 'Platão',
		avatar: "https://1.bp.blogspot.com/-1qEeK4a0_mM/XW-rUvPDe0I/AAAAAAAAgvQ/LsB74SvCMGgxtc3ToZ0kf1OGaZ7tlq5-QCLcBGAs/w680/platao-filosofia.jpg"
	}
];

let tweets = [
	{
		username: 'Heráclito', 
		tweet: "Não se pode pisar duas vezes no mesmo rio."
	},
	{
		username: 'Arthur Schopenhauer', 
		tweet: "A vida é um processo constante de morrer."
	},
	{
		username: 'Friedrich Nietzsche',
		tweet: "Deus está morto."
	},
	{
		username: 'Protágoras',
		tweet: "O homem é a medida de todas as coisas."
	},
	{
		username: 'René Descartes',
		tweet: "Penso, logo existo"
	},
	{
		username: 'Monkey D. Luffy',
		tweet: "Eu não quero conquistar nada, só acho que a pessoa com mais liberdade do mundo é o rei dos piratas!"
	},
	{
		username: 'Friedrich Nietzsche',
		tweet: "O que não provoca minha morte faz com que eu fique mais forte."
	},
	{
		username: 'Immanuel Kant',
		tweet: "Podemos julgar o coração de um homem pela forma como ele trata os animais."
	},
	{
		username: 'Platão',
		tweet: "Quem comete uma injustiça é sempre mais infeliz que o injustiçado."
	},
	{
		username: 'Bob Esponja', 
		tweet: "eu amo o hub"
	}
];

function validURL(str) {
	const pattern = /^(http(s)?:\/\/).+\.com.+$/i;
	return pattern.test(str);
  }

app.post('/sign-up', (req, res) => {
	let {username, avatar} = req.body;
	if(username === "" || avatar === ""){
		res.status(400).send('Todos os campos são obrigatórios!');
		return;
	}
	if(!validURL(avatar)){
		res.status(400).send('Url invalida');
		return;
	}
	usuarios.push({username: username, avatar: avatar});
	console.log(usuarios);
	res.status(201).send("OK");
});

app.post('/tweets', (req, res) => {
	let {username, tweet} = req.body;
	if(username === "" || tweet === ""){
		res.status(400).send('Todos os campos são obrigatórios!');
		return;
	}
	tweets.unshift({username: username, tweet: tweet});
	console.log(tweets[0]);
	res.status(201).send("OK");
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

app.get("/tweets/:USERNAME", (req, res) => {
	const username = req.params.USERNAME;
	let user = usuarios.find(e => e.username === username);
	let user_tweets = [];
	for(let i = 0; i < tweets.length; i++){
		if(tweets[i].username === username){
			user_tweets.push({
				username: username,
				avatar: user.avatar,
				tweet: tweets[i].tweet
			});
		}
	}
	res.send(user_tweets);
});

app.listen(5000);