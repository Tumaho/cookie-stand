'use strict'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var objArray = [];
var parent = document.getElementById('header');
var h = document.createElement('table');
parent.appendChild(h);
var totalOfTotals = 0;



function cookies(max, min, AVG, location) {
    this.counter = 0;
    this.customerNum = 0;
    this.max = max;
    this.min = min;
    this.AVG = AVG;
    this.location = location;
    this.numberOfCockies = [];
    objArray.push(this);

}


header();




cookies.prototype.randomCustomer = function () {

    for (var i = 0; i < hours.length; i++) {
        var result = [];
        this.customerNum = Math.floor(Math.random() * (this.max - this.min) + this.min);

        this.customerNum = Math.floor(this.customerNum * this.AVG);

        this.counter = this.counter + this.customerNum;
        this.numberOfCockies[i] = this.customerNum;

    }


}


cookies.prototype.Tables = function () {

    
    var tr = document.createElement('tr');
    h.appendChild(tr);

    h.border = '2';
    
    var th = document.createElement('th');
    tr.appendChild(th);

    for(var i=0;i<objArray.length;i++){
        totalOfTotals+=this.counter;
        th.textContent = this.location;

        for (var i = 0; i < hours.length; i++) {
           var cell = document.createElement('td');
           tr.appendChild(cell);

           cell.textContent = this.numberOfCockies[i];
        
           cell.width = '150';
           cell.height = '40';

    }}
    var locationTotal = document.createElement('td');
    tr.appendChild(locationTotal);
    locationTotal.textContent = this.counter;

}













var obj1 = new cookies(65, 23, 6.3, 'seattle', []);
var obj2 = new cookies(24, 3, 1.2, 'Tokyo', []);
var obj3 = new cookies(38, 11, 3.7, 'Dubai', []);
var obj4 = new cookies(38, 20, 2.3, 'Paris', []);
var obj5 = new cookies(16, 2, 4.6, 'Lima', []);
for (var i = 0; i < objArray.length; i++) {
    objArray[i].randomCustomer();
    objArray[i].Tables();
}

footer();







function header() {
    var tr = document.createElement('tr');
    h.appendChild(tr);
    var cell1 = document.createElement('td');
    tr.appendChild(cell1);
    cell1.textContent = " ";
    for (var j = 0; j < hours.length; j++) {
        var cell2 = document.createElement('td');
        tr.appendChild(cell2);

        cell2.textContent = hours[j];

        cell2.width = '150';
        cell2.height = '40';

    }
    var cell3 = document.createElement('td');
    tr.appendChild(cell3);
    h.border = '2'
    cell3.textContent = 'Daily Location Total';
    cell3.width = '150';
    cell3.height = '40';
}








function footer() {
    var tr1 = document.createElement('tfoot');
    h.appendChild(tr1);
    var cell4 = document.createElement('td');
    tr1.appendChild(cell4);
    cell4.textContent = "Total";

    var TotalSum = 0;
    for (var j = 0; j < hours.length; j++) {
        var sumPerHour = 0;
        var cell5 = document.createElement('td');
        tr1.appendChild(cell5);

        for (var i = 0; i < objArray.length; i++) {


            sumPerHour = sumPerHour + objArray[i].numberOfCockies[j];
        }

        TotalSum += sumPerHour;

        cell5.textContent = sumPerHour;

        cell5.width = '150';
        cell5.height = '40';
    }
    var cell6 = document.createElement('td');
    tr1.appendChild(cell6);
    cell6.textContent = TotalSum;
    cell6.width = '150';
    cell6.height = '40';
}




var form = document.getElementById('newForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
   

    var inputLocation = event.target.location.value;
    var inputMaximum = parseInt( event.target.max.value);
    var inputMinimum = parseInt( event.target.min.value);
    var inputAVG = parseFloat( event.target.avg.value);
    if(inputMaximum > inputMinimum){

    h.removeChild(h.lastChild);
    var objForm = new cookies(inputMaximum, inputMinimum, inputAVG, inputLocation, []);
    objForm.randomCustomer();
    objForm.Tables();

    footer();}
    else
     alert('The number of minimum must be less than maximum');


    

   




});












