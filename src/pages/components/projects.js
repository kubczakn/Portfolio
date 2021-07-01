import * as React from "react"
import {Grid, Typography, Card, CardContent, CardMedia, CardActionArea} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import HaikuPic from "../images/haiku.jpg";

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
							image={HaikuPic}
							className={classes.media}
						/>
						<Typography className={classes.text} gutterBottom variant="h5" component="h2">
							Lizard
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
						across all continents except Antarctica
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
							Lizard
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
						across all continents except Antarctica
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
							Lizard
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
						across all continents except Antarctica
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
							Lizard
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
						across all continents except Antarctica
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
							Lizard
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
						across all continents except Antarctica
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
							Lizard
						</Typography>
						<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
						across all continents except Antarctica
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	)
}

export default Projects 