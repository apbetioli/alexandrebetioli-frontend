import React from "react";
import { ResponsiveBarCanvas } from "@nivo/bar";

class QuizChart extends React.Component {
  render() {
    return (
      <ResponsiveBarCanvas
        data={this.props.data}
        keys={["value"]}
        indexBy="caracteristica"
        margin={{ top: 50, right: 100, bottom: 50, left: 250 }}
        padding={0.2}
        groupMode="grouped"
        layout="horizontal"
        colors={{ scheme: "set2" }}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'valor',
          legendPosition: 'middle',
          legendOffset: 36
      }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={0}
        labelSkipHeight={0}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        animate={true}
        maxValue={10}
        motionStiffness={90}
        motionDamping={15}
      />
    );
  }
}

export default QuizChart;
