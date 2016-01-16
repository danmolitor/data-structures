var Set = function() {
    var set = Object.create(setPrototype);
    set._storage = [];
    return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
    //this._storage[item] = true;
    //this._storage.push(item);
     this._storage[item] = item;

};

setPrototype.contains = function(item) {
    // for (var i = 0; i < this._storage.length; i++) {
    //     if (!!(this._storage[i] === item)) {
    //         return true;
    //     }
    // }
    // // return false;
    if (this._storage[item]){
      return true;
    } else {
      return false;
    }

};

setPrototype.remove = function(item) {
    // for (var i = 0; i < this._storage.length; i++) {
    //     if (this._storage[i] === item) {
    //         delete this._storage[item];
    //     }
    // }
    delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//Add === O(1);
//Contains && Remove === O(1) or O(n)
//if it has to iterate to find using the IF statement and delete.