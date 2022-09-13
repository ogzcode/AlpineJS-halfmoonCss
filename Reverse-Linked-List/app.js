//Bağlı listeyi ters çeviren kod

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

    reverse(){
        let node = this.head;
        let prev = null;

        while (node){
            let temp = node.next;
            node.next = prev;
            prev = node;

            if (!temp){
                break;
            }

            node = temp;
        }
        this.head = node;
    }
}

const linkList = new LinkedList();

linkList.insert(1);
linkList.insert(2);
linkList.insert(3);
linkList.insert(4);

linkList.printData();

linkList.reverse();

linkList.printData();

