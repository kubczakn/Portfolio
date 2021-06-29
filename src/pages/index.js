import * as React from "react"
import {Grid, Typography, Divider} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import Projects from "./components/projects.js"
import Header from "./components/header.js"
import Contact from "./components/contact.js"


const useStyles = makeStyles({
	root: {
      marginTop: 10,
      marginBottom: 10 
	},
});

const IndexPage = () => {
  const classes = useStyles();
  return (
      <main>
          <title>Home Page</title>
          <Grid container direction="column">
              {/* Top Header */}
              <Header/>

              {/* Main Content */}
              <Grid item container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                  {/* Name and bio */}
                  <Typography className={classes.text} align={'center'} >Nathan Kubczak</Typography>

                  <Divider className={classes.root}/>

                  {/* Projects */}
                  <Projects />

                  {/* Contact Info */}
                  <Contact />

                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>

              {/* Footer */}

          </Grid>
      </main>
  )
}

export default IndexPage
