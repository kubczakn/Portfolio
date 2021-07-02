import * as React from "react"
import {Grid, Typography, Card, CardContent, CardMedia} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import HaikuPic from "../static/images/haiku.jpg";
import RestPic from "../static/images/aa-eats.jpg";
import EtchPic from "../static/images/etch.jpg";
import Wallpaper from "../static/images/wallpaper.jpg";
import TicTac from "../static/images/tic.png";
import SpotifyPic from "../static/images/spotify.jpg";

const useStyles = makeStyles({
	root: {
		paddingTop: 10,		
		paddingBottom: 10,		
		backgroundColor: 'transparent', 
		border: 'none',
		boxShadow: 'none',
	},
	text: {
		paddingTop: 10,		
		paddingBottom: 5,
		color: 'white',
		fontFamily: 'Noto Serif TC',
	},
	media: {
		borderRadius: 25,
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
});

// markup
const Projects = () => {

	const classes = useStyles();

	return (
		<Grid item container spacing={10}>
			<Grid item sm={6}>
				<Card className={classes.root}>
					<CardContent>
						<CardMedia 
							image={RestPic}
							className={classes.media}
						/>
						<Typography className={classes.text} gutterBottom variant="h5" component="h2">
							Ann Arbor Eats	
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
							App that allows users to rate their favorite Ann Arbor restaurants.
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
							Built using Spring Boot, React, and Material-UI.
						</Typography>
					</CardContent>
				</Card>
			</Grid>

			<Grid item sm={6}>
				<Card className={classes.root}>
					<CardContent>
						<CardMedia 
							image={HaikuPic}
							className={classes.media}
						/>
						<Typography className={classes.text} gutterBottom variant="h5" component="h2">
							Haiku Generator	
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
							Django application that generates Haikus based on data from the WikiQuotes API. 
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
							Users can select Haikus based on either a positive or negative sentiment rating. 
						</Typography>
					</CardContent>
				</Card>
			</Grid>

			<Grid item sm={6}>
				<Card className={classes.root}>
					<CardContent>
						<CardMedia 
							image={Wallpaper}
							className={classes.media}
						/>
						<Typography className={classes.text} gutterBottom variant="h5" component="h2">
							Wallpaper Generator	
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
							Python script that uses web scraping to randomly generate a desktop wallpaper. 
						</Typography>
					</CardContent>
				</Card>
			</Grid>

			<Grid item sm={6}>
				<Card className={classes.root}>
					<CardContent>
						<CardMedia 
							image={EtchPic}
							className={classes.media}
						/>
						<Typography className={classes.text} gutterBottom variant="h5" component="h2">
							Etch-A-Sketch	
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
							Etch-A-Sketch program written in Java.
						</Typography>
					</CardContent>
				</Card>
			</Grid>

			<Grid item sm={6}>
				<Card className={classes.root}>
					<CardContent>
						<CardMedia 
							image={SpotifyPic}
							className={classes.media}
						/>
						<Typography className={classes.text} gutterBottom variant="h5" component="h2">
							Artist Tracker	
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
							Python script that creates new playlists for a Spotify user by filtering
							other playlists by artists.
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
							Utilizes the Spotify Web API.
						</Typography>
					</CardContent>
				</Card>
			</Grid>

			<Grid item sm={6}>
				<Card className={classes.root}>
					<CardContent>
						<CardMedia 
							image={TicTac}
							className={classes.media}
						/>
						<Typography className={classes.text} gutterBottom variant="h5" component="h2">
							Tic-Tac-Toe
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
							Simple tic-tac-toe game written in C++.
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	)
}

export default Projects 