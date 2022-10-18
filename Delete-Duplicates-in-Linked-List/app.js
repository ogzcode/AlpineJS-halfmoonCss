//Bağlı liste içerisinde tekrar eden sayıları silen kod

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insert(data){
        if (!this.head){
            this.head = new Node(data);
        }
        else {
            let temp = new Node(data);
            temp.next = this.head;
            this.head = temp;
        }
    }

    printData(){
        let current = this.head;

        let string = 'List : ';

        while (current){
            string += current.data + " ";
            current = current.next;
        }

        console.log(string);
    }

    deleteWithArray(){
        const array = [];

        let current = this.head;
        let prev = null;

        while (current){
            if (array.indexOf(current.data) != -1){
                prev.next = current.next;
            }
            else {
                array.push(current.data);
                prev = current;
            }

            current = current.next;
        }
    }

    deleteWithObject(){
        const dict = {};

        let current = this.head;
        let prev = null;

        while (current){
            if (dict[current.data]){
                prev.next = current.next;
            }
            else {
                dict[current.data] = true;
                prev = current;
            }

            current = current.next;
        }
    }
}

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(1);
list.insert(3);
list.printData();

list.deleteWithArray();
list.printData();

list.insert(1);
list.printData();

list.deleteWithObject();
list.printData();