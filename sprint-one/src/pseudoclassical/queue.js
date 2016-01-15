var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
this.storage = {};
this.back = 0;
this.front = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.back] = value;
  this.back += 1;
};

Queue.prototype.dequeue = function(){
  if (this.front < this.back){
    var result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;
    return result;
  }
};

Queue.prototype.size = function(){
  return this.back - this.front;
};


