import * as React from "react"
import {Grid, Typography, AppBar, Toolbar} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		paddingBottom: 10,		
	},
	bar: {
		backgroundColor: 'white',
		border: 'none',
		boxShadow: 'none',
	},
	text: {
		color: 'black'
	}
});

// markup
const Header = () => {

	const classes = useStyles();

	return (
		<Grid item xs={12} className={classes.root}>
			<AppBar className={classes.bar} position="static">
				<Toolbar>
					<Typography className={classes.text} variant="h6">
						Nathan Kubczak
					</Typography>
				</Toolbar>
			</AppBar>
		</Grid>
			
	)
}

export default Header 