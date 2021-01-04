
/* $('"Моя цель"').mouseenter(function(){
    $(this).toggleClass('blue')
});
$('"Моя цель"').mouseleave(function(){
    $(this).toggleClass('blue')
}); */

var treeData =
  {
  "name": "Моя цель",
  "value": 75,
  "type": "black",
  "level": "red",
  "db_id": "14882280",
  "male": 51,
  "female": 24,
  "children":[
{
    "name": "Operation",
    "value": 40,
    "type": "black",
    "level": "green",
    "male": 23,
    "female": 17,
    "db_id": "0",
    "children": [
      {
        "name": "Top Management",
        "value": 3,
        "type": "grey",
        "level": "red",
        "male": 3,
        "female": 0,
        "children": [
          {
            "name": "Operation Manager",
            "value": 1,
            "type": "steelblue",
            "level": "orange",
            "male": 1,
            "female": 0
          },
          {
            "name": "Account Strategist",
            "value": 1,
            "type": "steelblue",
            "level": "red",
            "male": 1,
            "female": 0
          },
          {
            "name": "Product Management Executive",
            "value": 1,
            "type": "steelblue",
            "level": "red",
            "male": 1,
            "female": 0
          }
        ]
      },
      {
        "name": "Junior Level",
        "value": 23,
        "type": "grey",
        "level": "green",
        "male": 10,
        "female": 13,
        "children": [
          {
            "name": "Analyst",
            "value": 10,
            "type": "steelblue",
            "level": "orange",
            "male": 7,
            "female": 3
          },
          {
            "name": "Intern",
            "value": 5,
            "type": "steelblue",
            "level": "red",
            "male": 0,
            "female": 5
          },
          {
            "name": "Research Associate",
            "value": 1,
            "type": "steelblue",
            "level": "red",
            "male": 0,
            "female": 1
          },
          {
            "name": "Search Marketing Analyst",
            "value": 1,
            "type": "steelblue",
            "level": "red",
            "male": 1,
            "female": 0
          },
          {
            "name": "Search Marketing Associate",
            "value": 6,
            "type": "steelblue",
            "level": "red",
            "male": 2,
            "female": 4
          }
        ]
      },
      {
        "name": "Middle Management",
        "value": 14,
        "type": "grey",
        "level": "green",
        "male": 10,
        "female": 4,
        "children": [
          {
            "name": "Account Manager",
            "value": 1,
            "type": "steelblue",
            "level": "orange",
            "male": 1,
            "female": 0
          },
          {
            "name": "Account Planner",
            "value": 8,
            "type": "steelblue",
            "level": "red",
            "male": 6,
            "female": 2
          },
          {
            "name": "Senior Analyst",
            "value": 5,
            "type": "steelblue",
            "level": "red",
            "male": 3,
            "female": 2
          }
        ]
      }
    ]
  },
  {
    "name": "Technology",
    "value": 32,
    "type": "black",
    "level": "red",
    "male": 26,
    "female": 6,
    "children":[
      {
        "name": "Top Management",
        "value": 6,
        "type": "grey",
        "level": "red",
        "male": 6,
        "female": 0,
        "children": [
          {
            "name": "Engineering Manager",
            "value": 1,
            "type": "grey",
            "level": "red",
            "male": 1,
            "female": 0
          },
          {
            "name": "Product Manager",
            "value": 1,
            "type": "grey",
            "level": "red",
            "male": 1,
            "female": 0
          },
          {
            "name": "Associate Product Lead",
            "value": 1,
            "type": "grey",
            "level": "red",
            "male": 2,
            "female": 0
          },
          {
            "name": "Associate Architect",
            "value": 1,
            "type": "grey",
            "level": "red",
            "male": 1,
            "female": 0
          },
          {
            "name": "Principal Consultant",
            "value": 1,
            "type": "grey",
            "level": "red",
            "male": 1,
            "female": 0
          }
        ]
      },
      {
        "name": "Junior Level",
        "value": 21,
        "type": "grey",
        "level": "red",
        "male": 16,
        "female": 5,
        "children":[
          {
            "name": "System Administrator",
            "value": 1,
            "type": "grey",
            "level": "red",
            "male": 1,
            "female": 0
          },
          {
            "name": "Support Engineer",
            "value": 1,
            "type": "grey",
            "level": "red",
            "male": 1,
            "female": 0
          },
          {
            "name": "Software Enginner",
            "value": 6,
            "type": "grey",
            "level": "red",
            "male": 6,
            "female": 0
          },
          {
            "name": "Associate Software Enginner",
            "value": 13,
            "type": "grey",
            "level": "red",
            "male": 8,
            "female": 5
          },
        ]
      },
      {
        "name": "Middle Management",
        "value": 6,
        "type": "grey",
        "level": "red",
        "male": 4,
        "female": 1,
        "children":[
          {
            "name": "Database Administrator",
            "value": 1,
            "type": "grey",
            "level": "red",
            "male": 0,
            "female": 1
          },
          {
            "name": "Quality Assurance Lead",
            "value": 1,
            "type": "grey",
            "level": "red",
            "male": 1,
            "female": 0
          },
          {
            "name": "Senior Software Engineer",
            "value": 2,
            "type": "grey",
            "level": "red",
            "male": 2,
            "female": 0
          },
          {
            "name": "UX Designer",
            "value": 1,
            "type": "grey",
            "level": "red",
            "male": 1,
            "female": 0
          },
        ]
      }
    ]
  },
  {
    "name": "HR & Admin",
    "value": 3,
    "type": "black",
    "level": "red",
    "male": 2,
    "female": 1,
    "children":[
      {
        "name": "Top Management",
        "value": 2,
        "type": "black",
        "level": "red",
        "male": 2,
        "female": 0,
        "children":[
          {
            "name": "Director",
            "value": 1,
            "type": "black",
            "level": "red",
            "male": 1,
            "female": 0
          },
          {
            "name": "HR Manager",
            "value": 1,
            "type": "black",
            "level": "red",
            "male": 1,
            "female": 0
          }
        ]
      },
      {
        "name": "Middle Management",
        "value": 1,
        "type": "black",
        "level": "red",
        "male": 0,
        "female": 1,
        "children":[
          {
            "name": "Front Office Executive",
            "value": 1,
            "type": "black",
            "level": "red",
            "male": 0,
            "female": 1
          }
        ]
      }
    ]
  },
  {"name": "HR",
    "value": 3,
    "type": "black",
    "level": "red",
    "male": 2,
    "female": 1
   },
   {
   "name": "Admin",
    "value": 3,
    "type": "black",
    "level": "red",
    "male": 2,
    "female": 1
	},

]
};

// Set the dimensions and margins of the diagram
var margin = {top: 20, right: 90, bottom: 30, left: 90},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var colorScale = d3.scaleLinear()
    .domain([0, 1])
		.range(['red', 'green']);
var widthScale = d3.scaleLinear()
		.domain([1,80])
		.range([1, 10]);

// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate("
          + margin.left + "," + margin.top + ")");

var i = 0,
    duration = 750,
    root;

// declares a tree layout and assigns the size
var treemap = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
root = d3.hierarchy(treeData, function(d) { return d.children; });
root.x0 = height / 2;
root.y0 = 0;

// Collapse after the second level
root.children.forEach(collapse);

update(root);

// Collapse the node and all it's children
function collapse(d) {
  if(d.children) {
    d._children = d.children
    d._children.forEach(collapse)
    d.children = null
  }
}

function update(source) {

  // Assigns the x and y position for the nodes
  var treeData = treemap(root);

  // Compute the new tree layout.
  var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

  // Normalize for fixed-depth.
  nodes.forEach(function(d){ d.y = d.depth * 180});

  // ****************** Nodes section ***************************

  // Update the nodes...
  var node = svg.selectAll('g.node')
      .data(nodes, function(d) {return d.id || (d.id = ++i); });

  // Enter any new modes at the parent's previous position.
  var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function(d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on('click', click);

  // Add Circle for the nodes
  nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style("fill", function(d) {
          return d._children ? "lightsteelblue" : "#fff";
      })
  		.style("stroke", function(d){return colorScale(d.data.female/(d.data.female + d.data.male))});

  // Add labels for the nodes
  nodeEnter.append('text')
      .attr("dy", ".35em")
            .attr('db_id', nodeEnter['db_id'])

      .attr("x", function(d) {
          return d.children || d._children ? -13 : 13;
      })
      .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
      })
      .text(function(d) { return d.data.name; })
  		.style("fill", function(d){return colorScale(d.data.female/(d.data.value))});

  // UPDATE
  var nodeUpdate = nodeEnter.merge(node);

  // Transition to the proper position for the node
  nodeUpdate.transition()
    .duration(duration)
    .attr("transform", function(d) {
        return "translate(" + d.y + "," + d.x + ")";
     });

  // Update the node attributes and style
  nodeUpdate.select('circle.node')
    .attr('r', 10)
    .style("fill", function(d) {
        return d._children ? "lightsteelblue" : "#fff";
    })
    .attr('cursor', 'pointer');


  // Remove any exiting nodes
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) {
          return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

  // On exit reduce the node circles size to 0
  nodeExit.select('circle')
    .attr('r', 1e-6);

  // On exit reduce the opacity of text labels
  nodeExit.select('text')
    .style('fill-opacity', 1e-6);

  // ****************** links section ***************************

  // Update the links...
  var link = svg.selectAll('path.link')
      .data(links, function(d) { return d.id; })
  		.style('stroke-width', function(d){
        return widthScale(d.data.value)
      });

  // Enter any new links at the parent's previous position.
  var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function(d){
        var o = {x: source.x0, y: source.y0}
        return diagonal(o, o)
      })
  		.style('stroke-width', function(d){
        return widthScale(d.data.value)
      });

  // UPDATE
  var linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate.transition()
      .duration(duration)
      .attr('d', function(d){ return diagonal(d, d.parent) });

  // Remove any exiting links
  var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function(d) {
        var o = {x: source.x, y: source.y}
        return diagonal(o, o)
      })
  		.style('stroke-width', function(d){
        return widthScale(d.data.value)
      })
      .remove();

  // Store the old positions for transition.
  nodes.forEach(function(d){
    d.x0 = d.x;
    d.y0 = d.y;
  });

  // Creates a curved (diagonal) path from parent to the child nodes
  function diagonal(s, d) {

    path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

    return path
  }

  // Toggle children on click.
  function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
    update(d);
  }
}
