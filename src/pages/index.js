import * as React from "react"
import { Helmet } from "react-helmet"
import {
      Grid, 
      Typography, 
      MuiThemeProvider,
    } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import Projects from "./components/projects.js"
import Layout from "./components/layout.js"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typewriter from 'typewriter-effect';
import Contact from "./components/contact.js"
import scrollTo from 'gatsby-plugin-smoothscroll';
import Resume from './static/resume.pdf';


const useStyles = makeStyles((theme) => ({
	root: {
      paddingTop: 10,
      paddingBottom: 10, 
	},
  main: {
      marginTop: 200,
  },
  name: {
    fontFamily: 'Noto Serif TC',
    textAlign: "center",
    color: 'white',
    marginBottom: 50,
  },
  text: {
      fontFamily: 'Noto Serif TC',
      textAlign: "center",
      color: 'white',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
      },
  },
  divider: {
      width: '30%',
      align: 'center',
      border: '1px solid red',
      marginBottom: 60,
  },
  projects: {
    marginTop: 180,
    marginBottom: 120,
  },
  icon: {
    color: 'red',
    textAlign: 'center',
  },
  highlight: {
    color: 'red',
    borderBottom: '1px solid red',
    fontFamily: 'Noto Serif TC', 
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },

}));

const IndexPage = () => {
  const classes = useStyles();
  return (
      <main >
          <Helmet>
            <meta charSet="utf-8" name="viewport" content="initial-scale=1" />
            <title>Nathan Kubczak</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300&display=swap" rel="stylesheet"/>
          </Helmet>
          <Layout>
            <MuiThemeProvider >
               <Grid className={classes.main} container direction="column">
                {/* Main Content */}
                <Grid  item container>
                  <Grid item xs={false} sm={2}></Grid>
                  <Grid className={classes.centerContent} item xs={12} sm={8}>
                    {/* Name and bio */}
                    <Grid item className={classes.root}>
                      <Typography  className={classes.name} variant="h3">Hi, I'm Nathan Kubczak</Typography>
                      <hr className={classes.divider}></hr>

                      <Grid item style={{textAlign: 'center'}}>
                      <Typography  style={{marginBottom: 80, display: 'inline-block'}} className={classes.text} variant="h5">
                          I'm a&nbsp; 
                      </Typography>
                      <Typography variant="h5" style={{display: 'inline-block'}} className={classes.text}>
                          <Typewriter
                            options={{
                              strings: ['computer science student', 'software developer', 'coding enthusiast'],
                              autoStart: true,
                              loop: true,
                            }}
                          />
                      </Typography>
                      </Grid>
                      
                      

                      <Grid style={{textAlign: 'center'}} item>
                        <Typography style={{display: 'inline-block'}} className={classes.text} variant="h5">
                            Please feel free to take a look at my&nbsp; 
                        </Typography>
                        <Typography style={{display: 'inline-block', cursor: 'pointer'}} className={classes.highlight} variant="h5">
                          <a style={{color: 'inherit', textDecoration: 'none'}} href={Resume} target='blank'>resume</a>
                          </Typography>
                        <Typography style={{display: 'inline-block'}} className={classes.text} variant="h5">&nbsp;or&nbsp;</Typography>
                        <Typography onClick={() => scrollTo('#contact')} style={{marginBottom: 150, display: 'inline-block', cursor: 'pointer'}} className={classes.highlight} variant="h5">
                          contact me!
                        </Typography>
                        
                      </Grid>
                      

                      <Grid className={classes.icon}>
                        <ExpandMoreIcon style={{fontSize: '60'}}/>
                      </Grid>

                    </Grid>

                    {/* Projects */}
                    <Grid className={classes.projects} item>
                      <Typography  className={classes.text} variant="h5">Recent Projects</Typography>
                      <hr style={{width: '20%', align: 'center', color:'white'}}></hr>
                      <Projects />
                    </Grid>

                    <hr className={classes.divider}></hr>
                    
                    <Contact/>

                  </Grid>
                  <Grid item xs={false} sm={8}></Grid>
                </Grid>
              </Grid>
            </MuiThemeProvider>         
          </Layout>
      </main>
  )
}

export default IndexPage
