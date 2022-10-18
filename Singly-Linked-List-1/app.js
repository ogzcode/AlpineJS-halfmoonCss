//LinkedList veri yapısı gerçekleştirildi


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insert(value){
        if (this.head === null){
            this.head = new Node(value);
        }
        else {
            const temp = this.head;
            this.head = new Node(value);
            this.head.next = temp;
        }

        this.size++;
    }

    print(){
        let current = this.head;

        let string = 'List : ';

        while (current != null){
            string += current.value + ' ';
            current = current.next;
        }

        console.log(string);
    }

    isEmpty(){
        return this.size == 0;
    }

    search(value){
        let current = this.head;

        while (current){
            if (current.value == value){
                return true;
            }
            current = current.next;
        }

        return false
    }

    delete(value){
        let current = this.head;

        if (current.value == value){
            this.head = this.head.next;
            this.size--;
        }
        else {
            let prev = current;
            current = current.next;

            while (current.next){
                if (current.value == value){
                    prev.next = current.next;
                    prev = current;
                    current = current.next;
                    break;
                }

                prev = current;
                current = current.next;
            }

            if (current.value == value){
                prev.next = null;
            }

            this.size--;
        }
    }
}

const list = new LinkedList();

list.insert(1);
list.insert(12);
list.insert(15);

console.log(list.search(12));

list.print();
list.delete(12);
list.print();