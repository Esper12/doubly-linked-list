const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let newNode = new Node(data);

        if (this.length === 0) {
          this._head = newNode
          this._tail = newNode;
        } else {
          this._tail.next = newNode;
          newNode.prev = this._tail;
  
          this._tail = newNode;
        }
    
        this.length++;

        return this;
    }

    head() {
        if(this._head === null) {
            return null;
        }

        return this._head.data;
    }

    tail() {
        if(this._tail === null) {
            return null;
        }

        return this._tail.data;
    }

    at(index) {
        if (index < 0 || this.length < index) {
            return false;
        }

        let current = this._head;
        let position = 0;
  
        while (position < index) {
            current = current.next;
            position++;
        }

        return current.data;
    }

    insertAt(index, data) {
        if (index < 0 || this.length < index) {
            return false;
        }
    
        let node = new Node(data);
    
        if (index === 0) {
            if(this._head === null) {
                return null;
            }
            node.next = this._head;
            this._head.prev = node;
    
            this._head = node;
        } else if (index === this.length) {
            this._tail.next = node;
            node.prev = this._tail;
    
            this._tail = node;
        } else {
            let current = this._head;
            let prev = null;
            let position = 0;
    
            while (position < index) {
              prev = current;
              current = current.next;
              position++;
            }
    
            prev.next = node;
            node.prev = prev;
    
            node.next = current;
            current.prev = node;
        }
    
        this.length++;

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        if (index < 0 || this.length <= index ) {
            return null;
        }
      
        let current;
    
        if (index === 0) {
            this._head.prev = null;
            this._head = this._head.next;
        } else if(index === this.length - 1) {
            this._tail = this._tail.prev;
            this._tail.next = null;
        } else {
            current = this._head;
            let position = 0;
      
            while (position < index) {
                current = current.next;
                position++;
            }
      
            let prev = current.prev;
            prev.next = current.next;
            current.next.prev = prev;
        }
      
        this.length--;

        return this;
    }

    reverse() {
        let current = this._head;
  
        while (current) {
            let tmp = current.prev;
            current.prev = current.next;
            current.next = tmp;
            current = current.prev;
        }

        let tmp = this._head;

        this._head = this._tail;
        this._tail = tmp;

        return this;
    }

    indexOf(data) {
        let current = this._head;
        let index = 0;

        while (current) {
            if (current.data === data) {
                return index;
            }

            current = current.next;
            index++;
        }

        return -1;
    }
}

module.exports = LinkedList;
