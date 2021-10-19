import React from 'react';
import * as d3 from 'd3';
import { useD3 } from './useD3';
const D3Graph = ({ data }) => {
    const ref = useD3(
        (svg) => {// set the dimensions and margins of the graph
            var width = window.innerWidth - 200,
                height = window.innerHeight - 100;

            // append the svg object to the body of the page
            var svg = d3.select("#my_dataviz")
                .append("svg")
                .attr("width", width)
                .attr("height", height)

            // create dummy data -> just one element per circle
            var data = [{
                "name": "A"
            }, {
                "name": "B"
            }, {
                "name": "C"
            }, {
                "name": "D"
            }, {
                "name": "E"
            }, {
                "name": "F"
            }, {
                "name": "G"
            }, {
                "name": "H"
            }]

            // Initialize the circle: all located at the center of the svg area
            var node = svg.append("g")
                .selectAll("circle")
                .data(data)
                .enter()
                .append("circle")
                .attr("r", 25)
                .attr("cx", width / 2)
                .attr("cy", height / 2)
                .style("fill", "#f0ffff")
                .style("fill-opacity", 0.1)
                .attr("stroke", "#00ffff")
                .style("stroke-width", 1)
                .call(d3.drag() // call specific function when circle is dragged
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended));

            // Features of the forces applied to the nodes:
            var simulation = d3.forceSimulation()
                .force("center", d3.forceCenter().x(width / 2).y(height / 2)) // Attraction to the center of the svg area
                .force("charge", d3.forceManyBody().strength(1)) // Nodes are attracted one each other of value is > 0
                .force("collide", d3.forceCollide().strength(.1).radius(30).iterations(1)) // Force that avoids circle overlapping
                .force('attract', d3.forceRadial(0, width / 2, height / 2).strength(0.05))

            // Apply these forces to the nodes and update their positions.
            // Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
            simulation
                .nodes(data)
                .on("tick", function (d) {
                    node
                        .attr("cx", function (d) {
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            return d.y;
                        })
                });

            // What happens when a circle is dragged?
            function dragstarted(event, d) {
                if (!event.active) simulation.alphaTarget(.03).restart();
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(event, d) {
                d.fx = event.x;
                d.fy = event.y;
            }

            function dragended(event, d) {
                if (!event.active) simulation.alphaTarget(.03);
                d.fx = null;
                d.fy = null;
            }
        }
    );

    return (<div id="my_dataviz"></div>
    );
}

export default D3Graph;