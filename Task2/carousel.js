function Carousel(){

    this.size = 0;
    this.Items = [];
    this.currentItemIndex = 0;
    this.addItem = function(item){
        this.size++;
        this.Items.push(item);
    }

    this.deleteItemId = function(id) {
        for (var i = 0; i < this.Items.length; i++) {

            if (this.Items[i].id == id) {
                this.deleteItemIndex(this.Items[i].index);
            }
        }
    }
    this.deleteItem = function(slide) {
        for (var i = 0; i < this.Items.length; i++) {
            if (this.Items[i] == slide) {
                this.deleteItemIndex(this.Items[i].index);
            }
        }
    }
    this.deleteItemIndex = function (index){
        this.size--;
        this.Items.splice(index,1);
        this.setNewIndexes();

    }
    this.showCurrItem = function(){
        console.log(this.currentItemIndex);
        this.Items[0].rendering();
    }
    this.showNextItem = function(){
        if(this.currentItemIndex == (this.size - 1)){
            this.currentItemIndex = 0;
        }
        else{
            this.currentItemIndex ++;
        }
        console.log(this.currentItemIndex);
        this.Items[this.currentItemIndex].rendering();
    }
    this.showPrevItem = function(){
        if(this.currentItemIndex == 0){
            this.currentItemIndex = this.size - 1;
        }
        else{
            this.currentItemIndex --;

        }
        console.log(this.currentItemIndex);
        this.Items[this.currentItemIndex].rendering();
    }
    this.setNewIndexes = function(){
        for(var i = 0; i < this.Items.length; i++){
            this.Items[i].changeIndex(i);
        }
    }

    this.hiddenItemIndex = function(index){
        this.Items[index].visibilityOff()
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
        for (var i = 0; i < this.Items.length; i++) {

            if (this.Items[i].id == id) {
                this.hiddenItemIndex(this.Items[i].index);
            }
        }
    }
    this.hiddenItem = function(slide) {
        for (var i = 0; i < this.Items.length; i++) {
            if (this.Items[i] == slide) {
                this.hiddenItemIndex(this.Items[i].index);
            }
        }
    }

    this.unhiddenItemIndex = function(index){
        this.Items[index].visibilityOn()
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
        for (var i = 0; i < this.Items.length; i++) {

            if (this.Items[i].id == id) {
                this.unhiddenItemIndex(this.Items[i].index);
            }
        }
    }
    this.unhiddenItem = function(slide) {
        for (var i = 0; i < this.Items.length; i++) {
            if (this.Items[i] == slide) {
                this.unhiddenItemIndex(this.Items[i].index);
            }
        }
    }

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

    this.rendering = function(){
        var div = document.querySelector('#scr');
        div.innerHTML = '';
        div.appendChild(this.elem)
    }
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
a.showCurrItem();
a.showNextItem();
var left = document.querySelector('#left');
var right = document.querySelector('#right');
left.addEventListener("click",  a.showPrevItem.bind(a));
right.addEventListener("click", a.showNextItem.bind(a));
