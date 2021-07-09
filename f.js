var Header = function(node){

    var shrinkName = 'shrink';

    this.node = node;
    this.toggle = function(pos){
    node.classList.toggle('shrink',pos > 20);
    }
}.bind(this);

var header = new Header(document.querySelector('.js_header'));

var lastPos = 0;
(function getScrollPos(){
    requestAnimationFrame(getScrollPos);
    var pos = window.pageYOffset;

    if(pos != lastPos){
           header.toggle(pos);
    }

    lastPos = pos;
}());



