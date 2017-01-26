const Node = require('./node');

class LinkedList {
    constructor() {
        this.length=0;
        this.arr=[];
    }

    append(data) {
        let node=new Node(data)
        if(this.length===0){
            this._tail=node;
            this._head=node;
        }else{
            this._tail.next=node;
            node.prev=this._tail;
            this._tail=node;
        }
        this.arr.push(node);
        this.length=this.arr.length;
        return this;
    }

    head() {
        if(this.arr.length){
            return this.arr[0].data;
        }else{
            return null;
        }
    }

    tail() {
        if(this.arr.length){
            return this.arr[this.arr.length-1].data;
        }else{
            return null;
        }
    }

    at(index) {
        return this.arr[index].data;
    }

    insertAt(index, data) {
        let node=new Node(data, this.arr[this.arr.length-2], this.arr[this.arr.length]);
        this.arr.splice(index,0,node);
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
        let index=-1;
        this.arr.forEach((name,i)=>{
            if(name.data===data){
                index=i;
            }
        })
        return index;
    }
}

module.exports = LinkedList;
