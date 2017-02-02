const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    append(data) {
        if (this.head = this.tail) {
            this.head = data;
            this.tail = data;
        } else {
            this.tail.next = data;
            data.prev = this.tail;
            this.tail = data;
        } 
    }

    head() {
        return this.head();
    }

    tail() {
        return this.tail();
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
