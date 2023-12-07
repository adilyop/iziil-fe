import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highcharts-gantt.src";


class GanttChart extends Component {
    constructor(props) {
        super(props);
        const data = [];
        props.taskList.forEach(taskData => {
            taskData.subTask.forEach(subtaskData => {
                const tempSubTask = {
                    name: subtaskData.label,
                    start: new Date(subtaskData.start).getTime(),
                    end: new Date(subtaskData.end).getTime(),
                    color: subtaskData.status == "TODO" ? "#E6E6FA" :
                        subtaskData.status == "INPROGREE" ? "#FFD700" :
                            subtaskData.status == "PENDING" ? "#990000" : "#7b9f20", // green #7b9f20 yellow #FFD700 red #990000
                    id: subtaskData.label
                }
                data.push(tempSubTask)
            });
        });
        this.state = {
            // To avoid unnecessary update keep all options in the state.
            chartOptions: {
                yAxis: {
                    type: "treegrid",
                    uniqueNames: true,
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [
                    {
                        data: data
                    },

                ],
                plotOptions: {
                    series: {
                        point: {
                            events: {
                                // mouseOver: this.setHoverData.bind(this)
                            }
                        },
                        grouping: true
                        // minPointLength: 10
                    }
                }
            },
            hoverData: null
        };
    }

    // setHoverData = e => {
    //     // The chart is not updated because `chartOptions` has not changed.
    //     // this.setState({ hoverData: e.target.category });
    // };

    // updateSeries = () => {
    //     // The chart is updated only with new options.

    //     const randomId = Math.random();
    //     const newChild = {
    //         name: "Child 1" + randomId,
    //         id: "child" + randomId,
    //         parent: "parent",
    //         start: 1558504800000,
    //         end: 1558512000000,
    //         color: "rgba(0,255,255,0.6)",
    //         y: 0
    //     };

    //     const randomId2 = Math.random();
    //     const newChild2 = {
    //         name: "Child 1" + randomId,
    //         id: "child" + randomId2,
    //         parent: "parent",
    //         start: 1558504800000,
    //         end: 1558512000000,
    //         color: "rgba(0,255,255,0.6)",
    //         y: 1
    //     };

    //     const newData = [...this.state.chartOptions.series[0].data, newChild];
    //     const newData2 = [...this.state.chartOptions.series[1].data, newChild2];

    //     this.setState({
    //         chartOptions: {
    //             series: [
    //                 {
    //                     data: newData
    //                 },
    //                 {
    //                     data: newData2
    //                 }
    //             ]
    //         }
    //     });
    // };

    render() {
        const { chartOptions, hoverData } = this.state;

        return (
            <div className="w-full">
                <HighchartsReact
                    constructorType="ganttChart"
                    highcharts={Highcharts}
                    options={chartOptions}
                />
            </div>
        );
    }
}

export default GanttChart;
