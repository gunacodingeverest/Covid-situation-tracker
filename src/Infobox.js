import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Infobox";

function Infobo({ title, cases }) {
  return (
    <Card
      className="card1"
      style={{
        width: "15em",
        height: "7em",
        backgroundColor: "transparent",
        border: "1px solid gold",
      }}
    >
      <CardContent>
        <Typography
          style={{
            color: "red",
            fontWeight: "bold",
            fontFamily: "Play",
            fontSize: "1.2rem",
          }}
        >
          {title}
        </Typography>
        <Typography>
          <h3 className="cases">
            <span>Today: </span> {cases}
          </h3>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Infobo;
