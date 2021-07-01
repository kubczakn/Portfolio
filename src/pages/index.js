import * as React from "react"
import { Helmet } from "react-helmet"
import {Grid, Typography, Divider} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";
import Projects from "./components/projects.js"
import Layout from "./components/layout.js"
import Header from "./components/header.js"
import Contact from "./components/contact.js"
import Background from "./images/cool-background.png";

const useStyles = makeStyles({
	root: {
      paddingTop: 10,
      paddingBottom: 10, 
	},
  main: {
  },
  text: {
  },
  centerContent: {
      backgroundColor: 'white',
  }
});

const IndexPage = () => {
  const classes = useStyles();
  return (
      <main >
          <Helmet>
            <meta charSet="utf-8" />
            <title>Home Page</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <Layout>
                <Grid className={classes.main} container direction="column">

                  <Grid item container>
                      <Grid item xs={1}></Grid>
                      <Grid item xs={10}>
                         <Header/> 
                      </Grid>
                      <Grid item xs={1}></Grid>
                  </Grid>

                  {/* Main Content */}
                  <Grid  item container>
                    <Grid item xs={2}></Grid>
                    <Grid className={classes.centerContent} item xs={8}>
                      {/* Name and bio */}
                      <Grid item className={classes.root}>
                        <Typography variant="h5">Projects</Typography>
                      </Grid>



                      <Grid item>
                          <Divider></Divider>
                      </Grid>


                      {/* Projects */}
                      <Grid item>
                        <Projects />
                      </Grid>
                    

                      {/* Contact Info */}
                      {/* <Contact /> */}

                    </Grid>
                    <Grid item xs={2}></Grid>
                  </Grid>
                </Grid>
          </Layout>
      </main>
  )
}

export default IndexPage
