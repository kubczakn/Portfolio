import * as React from "react"
import {Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles({
	root: {
		paddingTop: 10,
		paddingBottom: 10,
		marginBottom: 40,
	},
	icons: {
		fontSize: 75,
		color: 'white',
	}
});

const Contact = () => {

	const classes = useStyles();

	return (
		<Grid item container direction="row" alignItems="center" justify="center" spacing={10}  className={classes.root}>
			<Grid item >
				<GitHubIcon className={classes.icons}/>
			</Grid>
			<Grid item >
				<LinkedInIcon className={classes.icons}/>	
			</Grid>
			<Grid item >
				<MailOutlineIcon className={classes.icons}/>	
			</Grid>
			{/* <GitHubIcon className={classes.icons}/>
			<LinkedInIcon className={classes.icons}/>	
			<MailOutlineIcon className={classes.icons}/>	 */}
		</Grid>	
	)
}

export default Contact 