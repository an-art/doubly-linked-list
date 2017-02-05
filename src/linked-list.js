const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
       var newNode = new Node(data); 
        if (this.length) {            
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        } else {
            this._head = newNode;
            this._tail = newNode;
        } 
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
       var curNode = this._head;
        var i = 0;
        while (i != index) {
            curNode = curNode.next;
            i++;
        }
        return curNode.data;
    }

    insertAt(index, data) {
        var curNode = this._head;
        var i = 0;
        while (i != index) {
            curNode = curNode.next;
            i++;
        }
        curNode == curNode.next;
        curNode.data = data;
    }

    isEmpty() {
        if (this.length) {
            return false;
        } else return true;
    }

    clear() {
        var curNode = this._head;
        while (curNode!=null)
    {            
            curNode.data = null;
            curNode = curNode.next;
            this.length--;
        }
    }

    deleteAt(index) {
        var curNode = this._head;
        var i = 0;
        while (i != index) {
            curNode = curNode.next;
            i++;
        }
        if (curNode.prev!=null && curNode.next!=null) {
            curNode.prev.next = curNode.next;
            curNode.next.prev = curNode.prev;
        } else if (curNode.prev!=null) {
            curNode._tail = curNode.prev;
            curNode.next = null;
        } else curNode._head = curNode.next;
        curNode.length--;
    }

    reverse() {
        var curNode = this._tail;
        var newNode = this._head;
        var i = this.length/2;
        var data;
        if (this.length<2) {
            newNode = curNode;
        } else {
        while (i!=0) {
            data = newNode.data;
            newNode.data = curNode.data;
            curNode.data = data;
            newNode = newNode.next;
            curNode = curNode.prev;
            i--;
        }}
    }

    indexOf(data) {
        var curNode = this._head;
        var i = 0;
        while (curNode!=null && curNode.data != data) {
            curNode = curNode.next;
            i++;
        } 
        if (curNode != null) {
            return i;
        } else return -1;
    }
}
module.exports = LinkedList;
