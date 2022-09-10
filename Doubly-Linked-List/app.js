//Çift Bağlı Liste yapısı

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size == 0;
    }

    insertAtFront(data){
        if (!this.head){
            this.head = new Node(data);
            this.tail = this.head;
        }
        else {
            let temp = new Node(data);
            temp.next = this.head;
            this.head.prev = temp;
            this.head = temp;
        }

        this.size++;
    }

    insertAtTail(data){
        if (!this.tail){
            this.tail = new Node(data);
            this.head = this.tail;
        }
        else {
            let temp = new Node(data);
            temp.prev = this.tail;
            this.tail.next = temp;
            this.tail = temp;
        }

        this.size++;
    }

    search(data){
        let current = this.head;

        while (current){
            if (current.data == data){
                return true;
            }

            current = this.head.next;
        }

        return false;
    }

    deleteAtFront(){
        if (this.head){
            if (this.head === this.tail){
                this.head = null;
                this.tail = null;
            }
            else {
                this.head = this.head.next;
                this.head.prev = null;
            }

            this.size--;
        }
    }

    deleteAtTail(){
        if (this.tail){
            if (this.tail === this.head){
                this.head = null;
                this.tail = null;
            }
            else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }

            this.size--;
        }
    }
}