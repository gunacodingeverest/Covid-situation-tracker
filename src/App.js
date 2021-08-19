import React, { useState, useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Select from "@material-ui/core/Select";
import "./App.css";
import Info from "./Infobox";
import Info1 from "./Info1";
import Info2 from "./Info2";

import Table from "./Tabl";
import { sortData } from "./util";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const GetCountryDetails = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countrie = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = sortData(data);
          setCountries(countrie);
          setTableData(sortedData);
        });
    };
    GetCountryDetails();
  }, []);
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
        setCountry(countryCode);
      });
  };

  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <h3 style={{ fontFamily: "Play", color: "red" }}>COVID-19 TRACKER</h3>

          <FormControl className="app_dropdown">
            <Select
              variant="outlined"
              value={country}
              onClick={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="hol" style={{ padding: "10px" }}>
          <Info2 title="Total Population" total={countryInfo.population} />
        </div>
        <div
          className="ho"
          style={{ backgroundColor: "white", borderRadius: "20px" }}
        >
          <div
            className="app_stats"
            style={{ marginBottom: "15px", padding: "15px" }}
          >
            <Info title="Caronavirus cases" cases={countryInfo.todayCases} />
          </div>
          <div
            className="app_stats"
            style={{ marginBottom: "15px", padding: "15px" }}
          >
            <Info title="Recovered" cases={countryInfo.todayRecovered} />
          </div>
          <div
            className="app_stats"
            style={{ marginBottom: "15px", padding: "15px" }}
          >
            <Info title="Deaths" cases={countryInfo.todayDeaths} />
          </div>
          <div
            className="app_stats"
            style={{ marginBottom: "15px", padding: "15px" }}
          >
            <Info1 title="Caronavirus cases" total={countryInfo.cases} />
          </div>
          <div
            className="app_stats"
            style={{ marginBottom: "15px", padding: "15px" }}
          >
            <Info1 title="Recovered" total={countryInfo.recovered} />
          </div>
          <div
            className="app_stats"
            style={{ marginBottom: "15px", padding: "15px" }}
          >
            <Info1 title="Deaths" total={countryInfo.deaths} />
          </div>
          <div
            className="app_stats"
            style={{ marginBottom: "15px", padding: "15px" }}
          >
            <Info1 title="Active" total={countryInfo.active} />
          </div>
          <div
            className="app_stats"
            style={{ marginBottom: "15px", padding: "15px" }}
          >
            <Info1 title="Critical" total={countryInfo.critical} />
          </div>
          <div
            className="app_stats"
            style={{ marginBottom: "15px", padding: "15px" }}
          >
            <Info1 title="Tests" total={countryInfo.tests} />
          </div>

          <div
            className="app_stats"
            style={{ marginBottom: "15px", padding: "15px" }}
          >
            <Info1
              title="Tests Per One Million"
              total={countryInfo.testsPerOneMillion}
            />
          </div>
          <div
            className="app_stats"
            style={{ marginBottom: "15px", padding: "15px" }}
          >
            <Info1
              title="Cases Per One Million"
              total={countryInfo.casesPerOneMillion}
            />
          </div>
          <div
            className="app_stats"
            style={{ marginBottom: "15px", padding: "15px" }}
          >
            <Info1
              title="Deaths Per One Million"
              total={countryInfo.deathsPerOneMillion}
            />
          </div>
        </div>
      </div>
      <Card className="app_right" style={{ marginTop: "2em" }}>
        <CardContent>
          <h3>Cases by country</h3>
          <Table countries={tableData} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
