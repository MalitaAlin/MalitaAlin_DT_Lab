// Sample of how the compression tree should look like.
// A0 is the father (the root of the tree)
// each level introduce a byte in the final code 
// each node could have maximum 2 children (L - left (introduce a "0") and 
// R - right (introduce a "1"))
// the node name should contain the name of previous visited nodes.
// ex.: A0LR - Level 2, code: 01

// binary tree "IT IS BETTER LATER THAN NEVER"
function huffman2(){
var treeData =
  { };

// Set the dimensions and margins of the diagram
var margin = {top: 20, right: 90, bottom: 30, left: 90},
    width = 3060 - margin.left - margin.right,
    height = 1000 - margin.top - margin.bottom;

	
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
      });

  // Add labels for the nodes
  nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x", function(d) {
          return d.children || d._children ? -13 : 13;
      })
      .attr("text-anchor", function(d) {
          return d.children || d._children ? "end" : "start";
      })
      .text(function(d) { return d.data.name; });

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
      .data(links, function(d) { return d.id; });

  // Enter any new links at the parent's previous position.
  var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function(d){
        var o = {x: source.x0, y: source.y0}
        return diagonal(o, o)
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
}
//////////////

class HuffmanNode {
  //constructor, Time O(1) Space O(1)
  constructor(ch,  frequency,  left,   right) {
      this.ch = ch;
      this.frequency = frequency;
      this.left = left;
      this.right = right;
  }  
}



class HuffmanCoding {
  //All steps to create huffman code
  constructor() {}
  getCode(input) {
      var freqMap = this.buildFrequencyMap(input); 
      var nodeQueue = this.sortByFrequence(freqMap);
      this.root = this.buildTree(nodeQueue);
      var codeMap = this.createHuffmanCode(this.root);
      return codeMap;
  }

  //Step 1: Create char frequency map from input string, Time O(s) Space O(m), 
//s is number of chars in input string, m is number of unique chars
  buildFrequencyMap(input) {
      var map = new Map();
      for (let i = 0; i < input.length; i++) {
          let ch = input.charAt(i);
          if (!map.has(ch)) {
              map.set(ch, 1);
          } else {
              let val = map.get(ch);
              map.set(ch, ++val);
          }
      }
      return map;
  }
  //Step 2: Create queue of nodes from map and sort by frequency, Time O(mlogm) Space O(m)
  sortByFrequence(map) {
      var queue = [];
      for (let entry of map.entries())
          queue.push(new HuffmanNode(entry[0], entry[1], null, null));
      queue.sort((a,b) => a.frequency - b.frequency )
      return queue;
  }  
  //Step 3: Build frequency-sorted binary tree from sorted list, return root
  //Time O(m) Space O(n), m is unique chars in string, n is nodes in tree n=2m-1 
  buildTree(nodeQueue) {              
      while (nodeQueue.length > 1) { //build tree from ground up starting from low frequency
          let node1 = nodeQueue.shift();
          let node2 = nodeQueue.shift();
          let node = new HuffmanNode('', node1.frequency + node2.frequency, node1, node2);  
          nodeQueue.push(node);
      }
      return nodeQueue.shift();
  }
//Step 4: Create Huffman code map by preorder of the tree, Time O(n) Space O(m+n)
  createHuffmanCode(node) {
    var map = new Map();
    this.createCodeRec(node, map, "");
    return map;
  }
  
  //Preorder of the tree using recursion, Time O(n) Space O(n), n is number of nodes in the tree
  createCodeRec(node, map,  s) {
    if (node.left == null && node.right == null) {
      map.set(node.ch, s);
          return;
      }    
    this.createCodeRec(node.left, map, s + '0');
    this.createCodeRec(node.right, map, s + '1' );
  }
  //Step 5. Use huffman code to encode the input string, Time O(s) Space O(o)
  //s is input string length, o is output string length
  encode(codeMap, input) {
      var s = ""
      for (let i = 0; i < input.length; i++) {
          s += codeMap.get(input.charAt(i));
      }
      return s;
  }
  //Step 6: decode
  //Time O(o), Space O(s), o is coded message length, s is original message input
decode(coded) {
    var s = ""
    var curr = this.root;
    for (let i = 0; i < coded.length; i++) {
        curr = coded.charAt(i) == '1' ? curr.right : curr.left;
        if (curr.left == null && curr.right == null) {
            s += curr.ch;
            curr = this.root;
        }
    }
    return s;
}
}


function huffman(){
  let string=document.getElementById("inputstring").value;
  var input = string;
var huffman1 ;
huffman1= new HuffmanCoding();       
var codeMap = huffman1.getCode(input);
console.log(codeMap);
var encoded = huffman1.encode(codeMap, input);
//string.length*8 represents nr of bits needed for a non-compressed representation
var ratio=1-encoded.length/(string.length*8);
console.log("Compression Ratio:"+ratio+" %");
console.log("encoding string: " + encoded); 
var decode = huffman1.decode(encoded);
console.log("decoding string: " + decode);
}


