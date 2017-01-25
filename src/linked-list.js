const Node = require('./node');

class LinkedList {
    constructor() {
        this.length=0;
        this.arr=[];
    }

    append(data) {
        if(this.length===0){
            this._tail=new Node();
            this._head=new Node();
        }
        this.arr.push(data);
        this.length=this.arr.length;
        return this;
    }

    head() {
        if(this.arr.length){
            return this.arr[0];
        }else{
            return null;
        }
    }

    tail() {
        if(this.arr.length){
            return this.arr[this.arr.length-1];
        }else{
            return null;
        }
    }

    at(index) {
        return this.arr[index];
    }

    insertAt(index, data) {
        this.arr.splice(index,0,data);
        return this;
    }

    isEmpty() {
        return this.length===0;
    }

    clear() {
        this.arr=[];
        this.length=0;
        return this;
    }

    deleteAt(index) {
        this.arr.splice(index,1);
        return this;
    }

    reverse() {
        this.arr=this.arr.reverse();
        return this;
    }

    indexOf(data) {
        return this.arr.indexOf(data);
    }
}

module.exports = LinkedList;
