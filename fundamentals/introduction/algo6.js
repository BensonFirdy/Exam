class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }

    // constructor equivalent in python
    // def __init__(self==this, value):
    //     self.value = value
    //     self.next = null
}

class SLList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToFront(value) {
        // #1 - create our new node
        // node = Node(value) < --- python version
        var newNode = new Node(value);

        // if the sll has nothing in it
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // # 2 - connecting new node to list
            newNode.next = this.head;
        
            // # 3 - verifying that our pointers are correct
            this.head = newNode;
        }
    }
    
    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        // #1 - create new node
        var newNode = new Node(value);

        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // #2 - connecting new node to the sll
            this.tail.next = newNode;
            
            // #3 - verify pointers are correct
            this.tail = newNode;
        }
    }

    // print the value in the singly linked list
    printValues() {
        // what if the list is empty?
        if (this.head == null) {
            console.log("This list is empty!")
        } else {
            var runner = this.head;
            while(runner != null) {
                console.log(`${runner.value} --> `);
                runner = runner.next;
            }
            console.log("null")
        }
    }

    // return true/false based on whether you find the value
    contains(value) {
        // what if our list is empty?
        if (this.head == null) {
            return false;
        } else {
            var runner = this.head;
            while(runner != null) {
                if(runner.value == value) {
                    return true;
                }
                runner = runner.next;
            }
            return false;
        }
    }

    // remove the first item in the sll
    removeFromFont() {
        if(this.head == null){
            return false;
        } else {
            this.head = this.head.next;
        }
        
    }

    // remove the last item in the sll
    removeFromBack(){
        if (this.head == null){
            return false;
        } else {
            var runner = this.head;
            while (runner !=null) {
                if (runner.next.next == null){
                    runner.next = null;
                    this.tail = runner;
                }
                runner = runner.next;
            }
        }
    }
}


var sll = new SLList();
sll.printValues();
sll.addToFront(6);
sll.addToFront(1);
sll.addToFront(22);
sll.addToBack(9);
sll.addToBack(12);
sll.addToBack(47);
sll.printValues();
// console.log("========================================")
// console.log(sll.contains(9));
// console.log(sll.contains(47));
// console.log(sll.contains(25));
sll.removeFromBack()
sll.printValues()
sll.removeFromFont()
sll.printValues()