import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
function Info21({ title, cases, total }) {
  return (
    <div>
      <Card
        className="card1"
        style={{
          width: "15em",
          height: "7em",
          marginLeft: "6px",
          backgroundColor: "transparent",
          border: "1px solid black",
        }}
      >
        <CardContent>
          <Typography
            style={{
              color: "darkblue",
              fontWeight: "bold",
              fontFamily: "Play",
              fontSize: "1.2rem",
            }}
          >
            {title}
          </Typography>

          <Typography>
            <h3>
              <span>Total: </span>
              {total}
            </h3>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Info21;
