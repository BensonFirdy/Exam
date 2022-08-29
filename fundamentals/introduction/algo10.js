class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // // add a node with the given value to the queue
    // enqueue(value) {
    //     // your code here
    //     let newNode = new Node(value);
    //     if (this.tail == null) {
    //         this.head = this.tail = newNode;
    //         return;
    //     }
    //     this.tail.next = newNode;
    //     this.tail = newNode;
    //     return;
    // }

    // function enqueue(element) {
    //     items.push(element)
    // }


//     // remove and return the front value from the queue
//     dequeue() {
//         // your code here
//     }

//     //return true/false based on whether you find the given value in a queue
//     contains(value) {
//         // your code here
//     }

//     displayQueue(){
//         // your code here
//     }
    
//     // return the value of the front node without removing from list
//     front() {
//         // your code ehre
//     }

//     // return whether or not a list is empty
//     isEmpty() {
//         // your code here
//     }
// }

var q = new SLQueue();
console.log(q.isEmpty());
console.log(q.front());
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.displayQueue();
console.log("==================================");
q.dequeue();
q.displayQueue();
console.log("==================================");
console.log(q.front());
console.log(q.isEmpty());

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    
    // add a node with the given value to the queue
    // similar to SLL - add to back
    enqueue(value) {
        var newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        return this;
    }

    // remove and return the front value from the queue
    // similar to SLL - remove from front
    dequeue() {
        if(!this.head) {
            console.log("Nothing in this queue!");
            return null;
        }
        var temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        return temp.value;
    }

    //return true/false based on whether you find the given value in a queue
    // same as contains in SLL
    contains(value) {
        if(!this.head) {
            return false;
        }
        var runner = this.head;
        while(runner) {
            if(runner.value === value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    displayQueue(){
        if (!this.head){
            console.log("This queue is empty.");
        }
        else {
            var runner = this.head;
            var str = "";
            while(runner){
                str += runner.value + " -> ";
                runner = runner.next;
            }
            str += "null";
            console.log(str);
        }
    }
    
    // return the value of the front node without removing from list
    front() {
        // if(!this.head) {
        //     return null;
        // } else {
        //     return this.head.value;
        // }

        return this.head == null ? null : this.head.value;
    }

    // return whether or not a list is empty
    isEmpty() {
        // if(!this.head) {
        //     return "It's empty!"
        // } else {
        //     return "It's not empty!"
        // }

        // evaluates to the opposite of what you are expecting
        // if this.head exists, we are returning the 'not' of that, so it would output false
        // if this.head is null, we are returning the 'not' of that as well, so it would return true
        return this.head === null;
        // return !this.head;
    }
}

var q = new SLQueue();
console.log(q.isEmpty());
console.log(q.front());
q.enqueue(4);
q.enqueue(3);
q.enqueue(19);
q.enqueue(-26);
q.enqueue(11);
q.enqueue(142);
q.enqueue(7);
q.displayQueue();
console.log("==================================");
q.dequeue();
q.displayQueue();
console.log("==================================");
console.log(q.front());
console.log(q.isEmpty());
console.log("==================================");
console.log(q.contains(49));
console.log(q.contains(19));
slqueue.js
4 KB