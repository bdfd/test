var Stack = function() {
  var items = []; //变为私有元素
  //添加新元素(栈顶)
  this.push = function(element) {
    items.push(element);
  };
  //移除新元素(栈底)
  this.pop = function() {
    return items.pop(element);
  };
  //检查栈顶
  this.peek = function() {
    return items[items.length - 1];
  };
  //检查栈是否为空
  this.isEmpty = function() {
    return items.length == 0;
  };
  //清除栈
  this.clear = function() {
    item = [];
  };
  //检查此元素
  this.getItems = function() {
    return items;
  };
};

//10进制转2进制
var DB2 = function(number) {
  var s = new Stack();

  var yushu;
  var string2 = '';

  while (number > 0) {
    yushu = number % 2;
    console.log('yushu', yushu);
    s.push(yushu);
    console.log('s', s.getItems());
    number = Math.floor(number / 2);
    console.log('number', number);
  }
  // string2 = s.pop();
  // console.log('string2', string2);
  // while (!s.isEmpty()) {
  //   console.log('!s.isEmpty()', !s.isEmpty());
  //   string2 += s.pop();
  //   console.log('string2', string2);
  // }
  console.log('s', s);
  return s;
};
