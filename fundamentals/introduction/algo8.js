class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    // constructor equivalent in python
    // def __init__(self==this, value):
    //     self.value = value
    //     self.next = null
}

class SLList {
    constructor() {
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

        if (this.head == null) {
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
            while (runner != null) {
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
            while (runner != null) {
                if (runner.value == value) {
                    return true;
                }
                runner = runner.next;
            }
            return false;
        }
    }

    // remove the first item in the sll
    removeFromFront() {
        if (this.head == null) {
            console.log("There's nothing in the list! Nothing can be removed!")
            // return 'this' to end function and allow chaining of methods
        }
        // if we simply move out head pointer over, that creates a new entry point to our list 
        // we cannot traverse backwards!
        this.head = this.head.next

        // ** See altRemoveFromFront() for a slightly different approach!
    }

    altRemoveFromFront() {
        if (this.head == null) {
            console.log("There's nothing in the list! Nothing can be removed!")
            // return 'this' to end function and allow chaining of methods
        }

        // an additional 'edge case like' scenario:
        // if we access the previous node in some other way, it would have access to the list
        // to rememedy this, we can point the original head away from the list in addition to moving the head pointer

        // store the original head in a temp variable
        var temp = this.head
        // move the heqad pointer to the next locations
        this.head = this.head.next
        // point the temp variable's .next out to null
        temp.next = null
        // the order in which these things happen is important! suggest drawing it out and following the steps to see :)
    }

    // remove the last item in the sll
    removeFromBack() {
        // this handles 2 edge cases: nothing in list, and only 1 item in list
        if (this.head == null || this.head.next == null) {
            console.log("List is too short! Cannot remove from back")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        // ** alternate edge case handling, handles if there is only 1 items in the list or no items separately
        // if(this.head == null) {
        //     console.log("Nothing in the list! Cannot remove from back")
        //     return this
        // }
        // if(this.head.next == null) {
        //     this.head = null;
        //     this.tail = null;
        //     return this
        // }
        // set runner to start at the beginning of list
        var runner = this.head;

        // run all the way through this list until you hit the second to last item and stop
        while (runner.next.next != null) {
            runner = runner.next
        }
        // set runner.next to null, effectively removing final node from the list
        runner.next = null;

        // move the tail pointer to be on the runner's location, keeping it in the list
        this.tail = runner;
        return this
    }

    // find the location of the lowest value in the list, and move that value to the front
    moveMinToFront() {
        var min = this.head;
        var runner = this.head;
        var walker;

        while (runner.next != null) {
            if (runner.next.value < min.value) {
                min = runner.next;
                walker = runner;
            }
            runner = runner.next;
        }

        if (min == this.head) {
            console.log("The min is already at the front!");
            return this;
        }
        if (this.tail == min) {
            this.tail = walker;
        }

        walker.next = min.next;
        min.next = this.head;
        this.head = min;
    }

    // find the location of the highest value in the list, and move that value to the back
    moveMaxToBack() {
        var max = this.head;
        var runner = this.head;
        var walker;

        while (runner.next != null) {
            if (runner.next.value > max.value) {
                max = runner.next;
                walker = runner;
            }
            runner = runner.next;
        }

        if (max == this.tail) {
            console.log("Max already at back!");
            return;
        }

        if (max == this.head) {
            this.tail.next = max;
            this.head = this.head.next;
            this.tail = max;
            this.tail.next = null;
            return;
        }

        walker.next = max.next;
        this.tail.next = max;
        max.next = null;
        this.tail = max;
    }

    // find the location in the list and add a node with the given value AFTER that location
    appendVal(value, loc) {
        var newNode = new Node(value);
        var runner = this.head;
        var i = 0
        while (i < loc) {
            i++;
            runner = runner.next
            
        }
        console.log(newNode)
        newNode.next = runner.next
        runner.next = newNode
    }
    
    // find the location in the list and add a node with the given value BEFORE that location
    prependVal(value, loc) {
        var newNode = new Node(value);
        var runner = this.head;
        var i = 0
        while (i < loc -1) {
            i++;
            runner = runner.next
            
        }
        console.log(newNode)
        newNode.next = runner.next
        runner.next = newNode
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
// console.log("========================================")
// sll.removeFromFront();
// sll.printValues();
// console.log("========================================")
// sll.removeFromBack();
// sll.printValues();