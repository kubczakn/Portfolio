import * as React from "react"
import {Grid, Typography, AppBar, Toolbar} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		paddingBottom: 10,		
	},
});

// markup
const Header = () => {

	const classes = useStyles();

	return (
		<Grid item xs={12} className={classes.root}>
			<AppBar position="static">
				<Toolbar>
				<Typography variant="h6">
					This is the header
				</Typography>
				</Toolbar>
			</AppBar>
		</Grid>
			
	)
}

export default Header 