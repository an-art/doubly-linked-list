const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    append(data) {
        if (this.tail != null) {            
            this.next = data;
            //data.prev = this.tail;
            this.tail = data;
        } else {
            this.head = data;
            this.tail = data;
        } 
        this.length++;
    }

    head() {
        return this.head.data;
    }

    tail() {
        return this.tail.data;
    }

    at(index) {
        if (index = 0) {
            return this.head();
        } else if (index = this.length-1) {
            return this.tail();
        } else {
            var i = 0;
            while (i!=index) {
                this == this.next;
                i++;
            }
            return this;
        }
    }

    insertAt(index, data) {

    }

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
