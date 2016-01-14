var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    storage : {},
    front : 0,
    back : 0
  };
  _.extend(instance, queueMethods);
  return instance;

};

var queueMethods = {
  enqueue : function(value){
    this.storage[this.back] = value;
    this.back += 1;
  },

  dequeue : function(){
    if (this.front < this.back){
      var result = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
      return result;
    }
  },

  size : function(){
    return this.back - this.front;
  }
};


