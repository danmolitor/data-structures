var HashTable = function() {
    this._limit = 8;
    this._count = 0;
    this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
    var idx = getIndexBelowMaxForKey(key, this._limit);

    // this._storage.set(i, value);

    // =========================================================

    //Psuedocode from Lecture

    // Retrieve a bucket
    var bucket = this._storage.get(idx);

    // if !exist, create it
    if (!bucket) {
        bucket = [];
        this._storage.set(idx, bucket);
    }

    var found = false;

    // Iterate over bucket
    // key exists?
    //update it
    for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        if (tuple[0] === key) {
            tuple[1] = value;
            found = true;
            break;
        }

    }
    // if no key was found
    // insert a new tuple
    if (!found) {
        bucket.push([key, value]);
        this._count++;
        if (this._count > this._limit * 0.75) {
            this._resize(this._limit * 2);
        }
    }
};

HashTable.prototype.retrieve = function(key) {
    var idx = getIndexBelowMaxForKey(key, this._limit);
    // return this._storage.get(i);

    // =========================================================

    //Psuedocode from Lecture

    // Retrieve a bucket
    //If !bucket
    // return null;
    var bucket = this._storage.get(idx);
    if (!bucket) {
        return null;
    }

    // Iterate over bucket
    //var tuple = bucket[i]
    // if tuple[0] === k
    // return tuple[1]
    for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        if (tuple[0] === key) {
            return tuple[1];
        }
    }

    return null;
    //return null
};

HashTable.prototype.remove = function(key) {

    var idx = getIndexBelowMaxForKey(key, this._limit);
    // this._storage.set(i, null);

    // =========================================================

    //Psuedocode from Lecture

    // Retrieve a bucket and set it to a variable

    //If !bucket
      // return null;
    var bucket = this._storage.get(idx);

    if (!bucket) {
        return null;
    }

    // Iterate over bucket
      //var tuple = bucket[i]
      // if tuple[0] === k
        // splice
    for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        if (tuple[0] === key) {
            bucket.splice(i, 1);

            //Decrement the count by 1
            this._count--;

            //If the count drops to a quarter of the storage limit
            if (this._count < this._limit * 0.25) {
              //We will resize the storage
                this._resize(this._limit / 2);
            }
            // return tuple[1]
            return tuple[1];
        }
    }
    //return null;
    return null;

};

HashTable.prototype._resize = function(newLimit){

//store the current storage set up of keys and values
  var oldStorage = this._storage;

  //We set a new set of variables, creating a new storage with the newLimit.
  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._count = 0;

//Save the current context of this
  var context = this;

  //Iterate over old storage and re-insert
  oldStorage.each(function(bucket){

    //iterate over old storage
if ( !bucket ) {
  return ;
}

//for each bucket, we insert the key and value of each tuple
//back into insert, rehashing them and re placing them.
    for (var i = 0; i < bucket.length; i++){
      var tuple = bucket[i];
      context.insert(tuple[0], tuple[1]);
    }
  });

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

 //Insert  === O(n)
 //Retrieve === O(n)
//Remove === O(n)
