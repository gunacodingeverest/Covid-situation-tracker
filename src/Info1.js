import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
function Info12({ title, cases, total }) {
  return (
    <div>
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
          <h2 className="cases">{cases}</h2>
          <Typography>
            <h3>
              {" "}
              <span>Total: </span>
              {total}
            </h3>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Info12;
