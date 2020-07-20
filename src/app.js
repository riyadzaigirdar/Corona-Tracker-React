import React from "react";
import { Cardd, Chart, CountryPicker } from "./Component";
import { fetchData } from "./api";
import style from "./app.module.css";
import corona from "./coronaimg.jpg";

class App extends React.Component {
  state = {
    data: null,
    country: "",
  };

  async componentDidMount() {
    const response = await fetchData();
    this.setState({ data: response });
  }

  async handleCountryChange(country) {
    const response = await fetchData(country);
    this.setState({ data: response, country: country });
  }
  render() {
    const { data, country } = this.state;
    return (
      <div className={style.container}>
        <img className={style.image} src={corona} alt="Corona Image"></img>
        <Cardd data={data} />
        <CountryPicker handle={this.handleCountryChange.bind(this)} />
        <Chart country={country} data={data} />
      </div>
    );
  }
}

export default App;
