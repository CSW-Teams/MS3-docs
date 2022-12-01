import React from "react";
import Histogram from 'react-chart-histogram';

class Isto extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const labels = ['Luca Fiscariello', 'Daniele La prova', 'Domenico Verde', 'Giovanni Cantone', "Martina Salvati"];
    const data = [324, 45, 472,300,125];
    const options = {
        xLabel: "az",
        fillColor: "#00B3C9",
        strokeColor: "#00B3C9"
      };    return (
      <div>
        <Histogram
            xLabels={labels}
            yValues={data}
            width="1200"
            height="700"
            options={options}
        />
      </div>
    )
  }
}


export default Isto;
