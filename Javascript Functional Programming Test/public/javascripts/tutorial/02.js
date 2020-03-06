var Queue = function() {
  var items = [];
  //入队
  this.enqueue = function(element) {
    items.push(element);
  };
  //出队
  this.dequeue = function() {
    return items.shift();
  };
  //检查首项
  this.front = function() {
    return items[0];
  };
  //检查是否为空
  this.isEmpty = function() {
    return items.length === 0;
  };
  //长度
  this.size = function() {
    return items.length;
  };
};

var chuanhua = function(names, number) {
  var q = new Queue();
  for (var i = 0; i < names.length; i++) {
    q.enqueue(names[i]);
    //重要部分
  }
  var taotai;
  while (q.size() > 1) {
    for (var i = 0; i < number - 1; i++) {
      q.enqueue(q.dequeue());
    }
    taotai = q.dequeue();
    console.log('淘汰的玩家是-' + taotai);
  }
  return q.dequeue();
};

//玩家列表
var playerlist = ['a', 'b', 'c', 'd', 'e', 'f'];
//游戏规则
var delete_number = 3;
