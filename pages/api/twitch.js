// This is where all the logic for your Twitch API will live!
export default async (req, res) => {
  try {
		if(req.method === 'POST') {
			// post == surely some data has come
			const { data } = req.body;
			res.status(200).json({ data });
		}
	} catch(error) {
		console.log(error.message);
		res.status(500).send();
	}
}