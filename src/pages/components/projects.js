import * as React from "react"
import {Grid, Typography, Card, CardContent} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		paddingTop: 10,		
		paddingBottom: 10,		
	},
});

// markup
const Projects = () => {

	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography >
					This is a project
				</Typography>
			</CardContent>
		</Card>

	)
}

export default Projects 