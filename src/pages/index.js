import * as React from "react"
import {Grid, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";



// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Grid container direction="column">
        <Grid item xs={12} ></Grid>
        <Grid item container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Typography align={'center'} >Nathan Kubczak</Typography>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    </main>
  )
}

export default IndexPage
