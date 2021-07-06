import * as React from "react"
import {Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles( (theme) => ({
	root: {
		paddingTop: 10,
		paddingBottom: 10,
		marginBottom: 40,
	},
	icons: {
		fontSize: 75,
		color: 'white',
		transition: 'transform 0.5s',
		'&:hover': {
			transform: 'scale(0.95)',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.5rem',
		      },
	}
}));

const Contact = () => {

	const classes = useStyles();

	return (
		<Grid id="contact" item container direction="row" alignItems="center" justify="center" spacing={10}  className={classes.root}>
			<Grid item >
			<a href = "https://github.com/kubczakn" style={{textDecoration: "none"}} target="blank">
						<GitHubIcon className={classes.icons}/>	
			</a>
			</Grid>
			<Grid item >
			<a href = "https://www.linkedin.com/in/nathan-kubczak/" style={{textDecoration: "none"}} target="blank">
						<LinkedInIcon className={classes.icons}/>	
			</a>
			</Grid>
			<Grid item >
			<a href = "mailto:nathankubczak@gmail.com" style={{textDecoration: "none"}} target="blank">
						<MailOutlineIcon className={classes.icons}/>	
			</a>
			</Grid>
			
		</Grid>	
	)
}

export default Contact 