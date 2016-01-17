var HashTable = function() {
    this._limit = 8;
    //this._count = 0; (Re-sizing)
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
        var tupal = bucket[i];
        if (tupal[0] === key) {
            tupal[1] = value;
            found = true;
            break;
        }

    }
    // if no key was found
    // insert a new tuple
    if (!found) {
        bucket.push([key, value]);
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
        var tupal = bucket[i];
        if (tupal[0] === key) {
            return tupal[1];
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
    // splice
    // return tuple[1]
    for (var i = 0; i < bucket.length; i++) {
        var tupal = bucket[i];
        if (tupal[0] === key) {
            bucket.splice(i, 1);
            return tupal[1];
        }
    }

    return null;
    // return null

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//var newHash = HashTable();
//newHash._limit = 8;
//newHash._storage = LimitedArray(8);

//newHash._storage = var LimitedArray = function(8){
//                                      var storage = [];

//                                      var limitedArray = {};
//                                          limitedArray.get = function(index){
//                                          checkLimit(index);
//                                          return storage[index];
//                                        };
//                                        limitedArray.set = function(index, value){
//                                          checkLimit(index);
//                                          storage[index] = value;
//                                        };
//                                        limitedArray.each = function(callback){
//                                          for(var i = 0; i < storage.length; i++){
//                                            callback(storage[i], i, storage);
//                                          }
//                                        };

//                                          var checkLimit = function(index){
//                                            if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
//                                            if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
//                                          };

//                                          return limitedArray;
//                                        };
