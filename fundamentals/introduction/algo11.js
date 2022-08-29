class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like a pringles can
class SLStack{
    constructor() {
        this.top = null
    }

    // add a given value to your stack
    push(value){
        // your code here
    }
    
    // remove and return the top value
    pop(){
        // your code here
    }

    // return (don't remove) the top value of a stack
    returnTop() {
        // your code here
    }

    printStack() {
        // your code here
    }
}

var sls = new SLStack()
sls.push(3)
sls.push(18)
sls.push(12)
sls.push(78)
sls.push(56)
console.log(sls.pop())
console.log(sls.returnTop())
sls.printStack()

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like a pringles can
class SLStack{
    constructor() {
        this.top = null
    }

    // add a given value to your stack
    push(value){
        // your code here
        var newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
    }
    
    // remove and return the top value
    pop(){
        
        if(this.top == null){
            console.log("This stack is empty")
            return this
        }


        var temp = this.top
        this.top = this.top.next
        return temp.value
    }

    // return (don't remove) the top value of a stack
    returnTop() {
        // your code here
        if(this.top == null){
            console.log("This stack is empty")
            return this
        }
        return this.top.value
    }

    printStack() {
        // your code here
        if(this.top == null){
            console.log("This stack is empty")
            return this
        }

        var runner = this.top
        while(runner != null){
            console.log(runner)
            runner = runner.next
        }
        console.log(runner)
    }
}

var sls = new SLStack()
sls.push(3)
sls.push(18)
sls.push(12)
sls.push(78)
sls.push(56)
sls.printStack()
console.log("======================================")
console.log(sls.pop())
console.log("======================================")
sls.printStack()
console.log("======================================")
console.log(sls.returnTop())
console.log("======================================")
// sls.printStack()