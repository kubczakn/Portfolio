import * as React from "react"
import {Grid, Typography, Card, CardContent, CardMedia} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import HaikuPic from "../static/images/haiku.jpg";
import RestPic from "../static/images/aa-eats.jpg";
import EtchPic from "../static/images/etchPic.jpg";
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
		transition: 'transform 0.5s',
		'&:hover': {
			transform: 'scale(0.95)',
		}
	},
	hover: {

	}
});

// markup
const Projects = () => {

	const classes = useStyles();

	return (
		<Grid item container spacing={10}>
			<Grid item sm={6}>
				<Card className={classes.root}>
					<CardContent>
						<a href = "https://github.com/kubczakn/Ann-Arbor-Eats" style={{textDecoration: "none"}} target="blank">
							<CardMedia 
								image={RestPic}
								className={classes.media}
							/>
						</a>
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
						<a href = "https://github.com/kubczakn/Quotes" style={{textDecoration: "none"}} target="blank"> 
						<CardMedia 
								image={HaikuPic}
								className={classes.media}
							/>
						</a>
						
						<Typography className={classes.text} gutterBottom variant="h5" component="h2">
							Haiku Generator	
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
							Django application that generates haikus based on data from the WikiQuotes API. 
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
						<a href = "https://github.com/kubczakn/Wallpaper" style={{textDecoration: "none"}} target="blank"> 
							<CardMedia 
									image={Wallpaper}
									className={classes.media}
								/>
						</a>
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
						<a href = "https://github.com/kubczakn/Etch-A-Sketch" style={{textDecoration: "none"}} target="blank"> 
							<CardMedia 
									image={EtchPic}
									className={classes.media}
								/>
						</a>
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
						<a href = "https://github.com/kubczakn/spotify-recycle" style={{textDecoration: "none"}} target="blank"> 
							<CardMedia 
									image={SpotifyPic}
									className={classes.media}
								/>
						</a>
						<Typography className={classes.text} gutterBottom variant="h5" component="h2">
							Spotify Recycle Bin
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
							Application that allows Spotify users to recover and store deleted tracks in a recycle bin.
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
							Utilizes Flask and the Spotipy library for the Spotify Web API.
						</Typography>
					</CardContent>
				</Card>
			</Grid>

			<Grid item sm={6}>
				<Card className={classes.root}>
					<CardContent>
						<a href = "https://github.com/kubczakn/Tic-Tac" style={{textDecoration: "none"}} target="blank"> 
							<CardMedia 
									image={TicTac}
									className={classes.media}
								/>
						</a>
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