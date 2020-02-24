'use strict'
var hours=['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var obj1 = {
    counter:0,
    customerNum: 0,
    max: 65,
    min: 23,
    AVG: 6.3,
    location: 'Seattle',
    
    numberOfCockies:[],

    randomCustomer: function(){
        for(var i=0;i<hours.length;i++){
        this.customerNum =Math.floor(Math.random() * (this.max-this.min) + this.min);
        //console.log(this.customerNum);
        this.customerNum=Math.floor( this.customerNum * this.AVG);
        //console.log(this.customerNum);
        this.counter= this.counter + this.customerNum;
        this.numberOfCockies[i]=this.customerNum;
        

        
    }
    //console.log(this.numberOfCockies);
    //console.log(hours);
    //console.log(this.counter);
    var parent = document.getElementById('header');
    //console.log(parent);
    var h = document.createElement('h2');
    parent.appendChild(h);
    h.textContent = `Seattle:`;
    var p = document.createElement('ul');
   
    parent.appendChild(p);
    //console.log(p);
    for (var i=0; i<hours.length;i++){
        var listItems = document.createElement('li');
                p.appendChild(listItems);
                listItems.textContent = `${hours[i]} : ${this.numberOfCockies[i]} cookies.`;
    }
    listItems.textContent = `Total : ${this.counter} cookies.`;
    
    


}
 
}

obj1.randomCustomer();


var obj2 = {
    counter:0,
    customerNum: 0,
    max: 24,
    min: 3,
    AVG: 1.2,
    location: 'Tokyo',
    
    numberOfCockies:[],

    randomCustomer: function(){
        for(var i=0;i<hours.length;i++){
        this.customerNum =Math.floor(Math.random() * (this.max-this.min) + this.min);
        //console.log(this.customerNum);
        this.customerNum=Math.floor( this.customerNum * this.AVG);
        //console.log(this.customerNum);
        this.counter= this.counter + this.customerNum;
        this.numberOfCockies[i]=this.customerNum;
        

        
    }
    // console.log(this.numberOfCockies);
    // console.log(hours);
    // console.log(this.counter);
    var parent = document.getElementById('header');
    //console.log(parent);
    var h = document.createElement('h2');
    parent.appendChild(h);
    h.textContent = 'Tokyo';
    var p = document.createElement('ul');
   
    parent.appendChild(p);
    //console.log(p);
    for (var i=0; i<hours.length;i++){
        var listItems = document.createElement('li');
                p.appendChild(listItems);
                listItems.textContent = `${hours[i]} : ${this.numberOfCockies[i]} cookies.`;
    }
    listItems.textContent = `Total : ${this.counter} cookies.`;

}
 
}
obj2.randomCustomer();


var obj3 = {
    counter:0,
    customerNum: 0,
    max: 38,
    min: 11,
    AVG: 3.7,
    location: 'Dubai',
    
    numberOfCockies:[],

    randomCustomer: function(){
        for(var i=0;i<hours.length;i++){
        this.customerNum =Math.floor(Math.random() * (this.max-this.min) + this.min);
        //console.log(this.customerNum);
        this.customerNum=Math.floor( this.customerNum * this.AVG);
        //console.log(this.customerNum);
        this.counter= this.counter + this.customerNum;
        this.numberOfCockies[i]=this.customerNum;
        

        
    }
    // console.log(this.numberOfCockies);
    // console.log(hours);
    // console.log(this.counter);
    var parent = document.getElementById('header');
    //console.log(parent);
    var h = document.createElement('h2');
    parent.appendChild(h);
    h.textContent = `Dubai:`;
    var p = document.createElement('ul');
   
    parent.appendChild(p);
    //console.log(p);
    for (var i=0; i<hours.length;i++){
        var listItems = document.createElement('li');
                p.appendChild(listItems);
                listItems.textContent = `${hours[i]} : ${this.numberOfCockies[i]} cookies.`;
    }
    listItems.textContent = `Total : ${this.counter} cookies.`;

}
 
}
obj3.randomCustomer();

var obj4 = {
    counter:0,
    customerNum: 0,
    max: 38,
    min: 20,
    AVG: 2.3,
    location: 'Paris',
    
    numberOfCockies:[],

    randomCustomer: function(){
        for(var i=0;i<hours.length;i++){
        this.customerNum =Math.floor(Math.random() * (this.max-this.min) + this.min);
        //console.log(this.customerNum);
        this.customerNum=Math.floor( this.customerNum * this.AVG);
        //console.log(this.customerNum);
        this.counter= this.counter + this.customerNum;
        this.numberOfCockies[i]=this.customerNum;
        

        
    }
    // console.log(this.numberOfCockies);
    // console.log(hours);
    // console.log(this.counter);
    var parent = document.getElementById('header');
    //console.log(parent);
    var h = document.createElement('h2');
    parent.appendChild(h);
    h.textContent = `Paris:`;
    var p = document.createElement('ul');
   
    parent.appendChild(p);
    //console.log(p);
    for (var i=0; i<hours.length;i++){
        var listItems = document.createElement('li');
                p.appendChild(listItems);
                listItems.textContent = `${hours[i]} : ${this.numberOfCockies[i]} cookies.`;
    }
    listItems.textContent = `Total : ${this.counter} cookies.`;

}
 
}
obj4.randomCustomer();

var obj5 = {
    counter:0,
    customerNum: 0,
    max: 16,
    min: 2,
    AVG: 4.6,
    location: 'Lima',
    
    numberOfCockies:[],

    randomCustomer: function(){
        for(var i=0;i<hours.length;i++){
        this.customerNum =Math.floor(Math.random() * (this.max-this.min) + this.min);
        //console.log(this.customerNum);
        this.customerNum=Math.floor( this.customerNum * this.AVG);
        //console.log(this.customerNum);
        this.counter= this.counter + this.customerNum;
        this.numberOfCockies[i]=this.customerNum;
        

        
    }
    // console.log(this.numberOfCockies);
    // console.log(hours);
    // console.log(this.counter);
    var parent = document.getElementById('header');
    //console.log(parent);
    var h = document.createElement('h2');
    parent.appendChild(h);
    h.textContent = `Lima:`;
    var p = document.createElement('ul');
   
    parent.appendChild(p);
    //console.log(p);
    for (var i=0; i<hours.length;i++){
        var listItems = document.createElement('li');
                p.appendChild(listItems);
                listItems.textContent = `${hours[i]} : ${this.numberOfCockies[i]} cookies.`;
    }
    listItems.textContent = `Total : ${this.counter} cookies.`;

}
 
}
obj5.randomCustomer();














