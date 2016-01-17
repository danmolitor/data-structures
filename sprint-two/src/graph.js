// ###Graph Solution

// Instantiate a new graph
var Graph = function() {
    this.graph = {};

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.graph[node] = [];
    // console.log(this.graph[node]);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    if (this.graph[node]) {
        return true;
    } else {
        return false;
    }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    if (this.graph[node]) {
        delete this.graph[node];
    }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    for (var i = 0; i < this.graph[fromNode].length; i++) {
        if (this.graph[fromNode][i] === toNode){
          return true;
        }
        else {
          return false;
        }
    }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    // this.graph[fromNode].addNode(toNode);
    // this.graph[toNode].addNode(fromNode);

    // this.graph[toNode][fromNode] = true;
    // this.graph[fromNode][toNode] = true;

     this.graph[toNode].push(fromNode);
     this.graph[fromNode].push(toNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // delete this.graph[fromNode][toNode];
  // delete this.graph[toNode][fromNode];

  // this.graph[fromNode].pop(toNode);
  // this.graph[toNode].pop(fromNode);

  for (var i = 0; i < this.graph[fromNode].length; i++) {
    // console.log(this.graph[fromNode][i]);
    if (this.graph[fromNode][i] === toNode){
      this.graph[fromNode].splice(i, 1);

    }
  }
  for (var j = 0; j < this.graph[toNode].length; j++) {
    // console.log(this.graph[fromNode][j]);
    if (this.graph[toNode][j] === fromNode){
      // this.graph[toNode].splice(j, 1);
      this.graph[toNode][j] = false;
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.graph, function(value, key){
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
