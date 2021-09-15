 // Main entry point of your app
import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
	const [favoriteChannels, setFavoriteChannels] = useState([]);

	const addStreamChannel = async (event) => {
		event.preventDefault();
		const { value } = event.target.elements.name;
		
		if(value) {
			// CALL Twitch API
			// OUR_APP_URL/twitch/api
			const path = `https://${window.location.hostname}`;

			const response = await fetch(`${path}/api/twitch`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify({ 'data': value })
			});

			const json = await response.json();
			console.log(json);

			setFavoriteChannels(prevState => [...prevState, value]);
			event.target.elements.name.value = "";
		}
	}

	const RenderForm = () => (
		<div className={styles.formContainer}>
			<form onSubmit={ (e) => addStreamChannel(e) }>
				<input id="name" placeholder="Twitch Channel Name" type="text" required />
				<button type="submit">Add Streamer</button>
			</form>
		</div>
	)

  return (
    <div className={styles.container}>
      <Head>
        <title>🎥 Personal Twitch Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.inputContainer}>
        <RenderForm />
      </div>
    </div>
  )
}

export default Home