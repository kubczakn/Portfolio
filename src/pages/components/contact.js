import * as React from "react"
import {Grid, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		paddingTop: 10,
		paddingBottom: 10 
	},
});

const Contact = () => {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography align="center">This is the contacts section</Typography>
		</div>	
	)
}

export default Contact 