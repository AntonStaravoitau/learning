function Carousel(){

    var items = [];
    var currentItemIndex = 0;
    var direction = 1;
    var interval = 5000;
    this.addItem = function(item){
        items.push(item);
    }
    this.getInterval = function(){
        return interval;
    }
    this.setInterval = function(newinterval){
        interval = newinterval;
    }
    this.getDirection = function(){
        return direction;
    }
    this.setDirectionRight = function(){
        direction = 1;
    }
    this.setDirectionLeft = function(){
        direction = 0;
    }
    this.deleteItemId = function(id) {
        for (var i = 0; i < this.items.length; i++) {

            if (items[i].id == id) {
                this.deleteItemIndex(items[i].index);
            }
        }
    }
    this.deleteItem = function(slide) {
        for (var i = 0; i < items.length; i++) {
            if (items[i] == slide) {
                this.deleteItemIndex(items[i].index);
            }
        }
    }
    this.deleteItemIndex = function (index){
        items.splice(index,1);
        this.setNewIndexes();

    }
    this.showCurrItem = function(){
        items[0].rendering();
    }
    this.showNextItem = function(){
        if(currentItemIndex == (items.length - 1)){
            currentItemIndex = 0;
        }
        else{
            currentItemIndex ++;
        }
        items[currentItemIndex].rendering();
    }
    this.showPrevItem = function(){
        if(currentItemIndex == 0){
            currentItemIndex = items.length - 1;
        }
        else{
            currentItemIndex --;

        }
        items[currentItemIndex].rendering();
    }
    this.setNewIndexes = function(){
        for(var i = 0; i < items.length; i++){
            items[i].changeIndex(i);
        }
    }

    this.hiddenItemIndex = function(index){
        items[index].visibilityOff()
    }
    this.hiddenItemIndexRange = function(start, end){
        if(start > end){
            var tmp = end;
            end = start;
            start = tmp;
        }
        for(var i = start; i <= end; i++){
            this.hiddenItemIndex(i);
        }
    }
    this.hiddenItemId = function(Id){
        for (var i = 0; i < Items.length; i++) {

            if (items[i].id == id) {
                this.hiddenItemIndex(items[i].index);
            }
        }
    }
    this.hiddenItem = function(slide) {
        for (var i = 0; i < items.length; i++) {
            if (items[i] == slide) {
                this.hiddenItemIndex(items[i].index);
            }
        }
    }

    this.unhiddenItemIndex = function(index){
        items[index].visibilityOn()
    }
    this.unhiddenItemIndexRange = function(start, end){
        if(start > end){
            var tmp = end;
            end = start;
            start = tmp;
        }
        for(var i = start; i <= end; i++){
            this.unhiddenItemIndex(i);
        }
    }
    this.unhiddenItemId = function(Id){
        for (var i = 0; i < items.length; i++) {

            if (this.Items[i].id == id) {
                this.unhiddenItemIndex(this.Items[i].index);
            }
        }
    }
    this.unhiddenItem = function(slide) {
        for (var i = 0; i < items.length; i++) {
            if (items[i] == slide) {
                this.unhiddenItemIndex(items[i].index);
            }
        }
    }

}
Carousel.prototype.addItem = function(item){
    this.items.push(item);
}
function Slide(imgsrc, slideId, slideIndex){

    this.id = slideId;
    this.index = slideIndex;
    this.visible = true;
    this.elem = document.createElement('img');
    this.elem.setAttribute('src',imgsrc);
    this.elem.setAttribute('width','100%');
    this.elem.setAttribute('height','100%');
    this.changeIndex = function(newIndex){
        this.index = newIndex;
    }

    this.visibilityOn = function(){
        this.visible = true;
    }

    this.visibilityOff = function(){
        this.visible = false;
    }

}

    Slide.prototype.rendering = function () {
        var div = document.querySelector('#scr');
        div.innerHTML = '';
        div.appendChild(this.elem);
    }



var b = [];
b.push( new Slide('http://www.itmathrepetitor.ru/wp-content/uploads/2015/03/JavaScript-logo.png',1,1));
b.push( new Slide('https://camo.githubusercontent.com/891e94cd8dda7f40f451bb27067be513c230318a/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f626f676a732f6a732e706e67',2,2));
b.push( new Slide('http://jscoderetreat.com/img/why-js.png',3,3));
b.push( new Slide('https://pbs.twimg.com/profile_images/1844491454/horse-js_400x400.png',4,4));
b.push( new Slide('https://habrastorage.org/getpro/habr/post_images/8f4/a9c/78e/8f4a9c78ecca4dd9f35c1e74d4e959d7.png',5,5));
var a = new Carousel();
for(var i = 0; i < b.length; i++)
{
    a.addItem(b[i]);
}
a.setDirectionLeft();
window.onload = function() {
    a.showCurrItem();
    setInterval(function() {
        if(a.getDirection()==1){
            a.showNextItem();
        }
        else{
            a.showPrevItem();
        }
    }, a.getInterval());
};
var left = document.querySelector('#left');
var right = document.querySelector('#right');
left.addEventListener("click",  a.showPrevItem.bind(a));
right.addEventListener("click", a.showNextItem.bind(a));
