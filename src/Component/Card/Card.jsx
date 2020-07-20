import React from "react";
import style from "./Card.module.css";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import cx from "classnames";
import CountUp from "react-countup";

const Cardd = ({ data }) => {
  if (!data) {
    return "loading";
  }
  const { confirmed, deaths, lastUpdate, recovered } = data;
  return (
    <div className={style.container}>
      <Grid container justify="center" spacing={3}>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(style.card, style.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(style.card, style.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recoverd
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of Recoverd</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(style.card, style.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of Deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cardd;
