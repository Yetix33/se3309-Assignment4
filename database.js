
var view = document.getElementById("view");
//Sales table set up
var salestable = document.createElement("table");
salestable.className = "table";
//var salestableheadertag = document.createElement("thead");
var salestableheaders = document.createElement("tr");
var saleidh = document.createElement("th");
saleidh.appendChild(document.createTextNode("Sales ID"));
var pharmidh = document.createElement("th");
pharmidh.appendChild(document.createTextNode("Pharmacist ID"));
var fnameh = document.createElement("th");
fnameh.appendChild(document.createTextNode("First Name"));
var lnameh = document.createElement("th");
lnameh.appendChild(document.createTextNode("Last Name"));
var drugh = document.createElement("th");
drugh.appendChild(document.createTextNode("Drug Name"));
var amth = document.createElement("th");
amth.appendChild(document.createTextNode("Quantity Bought"));
var dth = document.createElement("th");
dth.appendChild(document.createTextNode("Time of Purchase"));
salestableheaders.appendChild(saleidh);
salestableheaders.appendChild(pharmidh);
salestableheaders.appendChild(fnameh);
salestableheaders.appendChild(lnameh);
salestableheaders.appendChild(drugh);
salestableheaders.appendChild(amth);
salestableheaders.appendChild(dth);
//salestableheadertag.appendChild(salestableheaders);
salestable.appendChild(salestableheaders);

//Customer Table set up
var customertable = document.createElement("table");
customertable.className = "table";
var customertableheaders = document.createElement("tr");
var phonenumh = document.createElement("th");
phonenumh.appendChild(document.createTextNode("Phone Number"));
var customerIDh = document.createElement("th");
customerIDh.appendChild(document.createTextNode("Customer ID"));

var fnameh2 = document.createElement("th");
fnameh2.appendChild(document.createTextNode("First Name"));
var lnameh2 = document.createElement("th");
lnameh2.appendChild(document.createTextNode("Last Name"));

customertableheaders.appendChild(customerIDh);
customertableheaders.appendChild(fnameh2);
customertableheaders.appendChild(lnameh2);
customertableheaders.appendChild(phonenumh);
customertable.appendChild(customertableheaders);



//Total Guap Set up
var moneytable = document.createElement("table");
moneytable.className = "table";
var moneytableheaders = document.createElement("tr");
var drugidh = document.createElement("th");
drugidh.appendChild(document.createTextNode("Drug ID"));
var drugh2 = document.createElement("th");
drugh2.appendChild(document.createTextNode("Drug Name"));
var money = document.createElement("th");
money.appendChild(document.createTextNode("Money Earned Per Drug"));

moneytableheaders.appendChild(drugidh);
moneytableheaders.appendChild(drugh2);
moneytableheaders.appendChild(money);
moneytable.appendChild(moneytableheaders);

function customers(){
  view.removeChild(view.firstChild);
  console.log("lool");
  var xhttp; 
    
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log(this.status);
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.response);
        var res = JSON.parse(this.response);
        for (var i in res){
          var row = document.createElement("tr");
          var customerid = document.createElement("td");
          customerid.appendChild(document.createTextNode(res[i].customerID));
          var phonenum = document.createElement("td");
          phonenum.appendChild(document.createTextNode(res[i].phonenum));
          var fname = document.createElement("td");
          fname.appendChild(document.createTextNode(res[i].fname));
          var lname = document.createElement("td");
          lname.appendChild(document.createTextNode(res[i].lname));
          row.appendChild(customerid);
          row.appendChild(fname);
          row.appendChild(lname);
          row.appendChild(phonenum);
          customertable.appendChild(row);
        }
        view.appendChild(customertable);
    }
  };
  xhttp.open("GET", "getcustomers.php?q=", true);
  
  xhttp.send();
};



function sales(){
  view.removeChild(view.firstChild);
  var xhttp; 
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log(this.status);
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);
        var res = JSON.parse(this.response);
        for(var i in res){
          var row = document.createElement("tr");
          var saleid = document.createElement("td");
          var pharmid = document.createElement("td");
          var fname = document.createElement("td");
          var lname = document.createElement("td");
          var drug = document.createElement("td");
          var amount = document.createElement("td");
          var datetime = document.createElement("td");
          saleid.appendChild(document.createTextNode(res[i].salesID));
          pharmid.appendChild(document.createTextNode(res[i].pharmacistID));
          fname.appendChild(document.createTextNode(res[i].fname));
          lname.appendChild(document.createTextNode(res[i].lname));
          drug.appendChild(document.createTextNode(res[i].drugname));
          amount.appendChild(document.createTextNode(res[i].amount));
          datetime.appendChild(document.createTextNode(res[i].datetime));
          row.appendChild(saleid);
          row.appendChild(pharmid);
          row.appendChild(fname);
          row.appendChild(lname);
          row.appendChild(drug);
          row.appendChild(amount);
          row.appendChild(datetime);
          salestable.appendChild(row);
        }
        view.appendChild(salestable);
    }
  };
  xhttp.open("GET", "getsales.php", true);
  xhttp.send();
};
function addperscription(){
  view.removeChild(view.firstChild);
  var newperscription = document.createElement("div");
  newperscription.className = "form-group";
  
  window.customerIDinput = document.createElement("input")
  customerIDinput.type = "number";
  customerIDinput.className = "col-3 form-control";
  customerIDinput.placeholder = "Customer ID";

  window.drugIDinput = document.createElement("input")
  drugIDinput.type = "number";
  drugIDinput.className = "col-3 form-control";
  drugIDinput.placeholder = "Drug ID";

  window.doctorIDinput = document.createElement("input")
  doctorIDinput.type = "number";
  doctorIDinput.className ="col-3 form-control";
  doctorIDinput.placeholder = "Doctor ID";

  window.cycleinput = document.createElement("input")
  cycleinput.type = "number";
  cycleinput.className = "col-3 form-control";
  cycleinput.placeholder = "Cylce Length"

  window.dateinput = document.createElement("input")
  dateinput.type = "date";
  dateinput.className = "col-3 form-control";
  
  window.submit = document.createElement("button");
   submit.type = "button";
   submit.onclick = "submitperscription";
   window.submit.setAttribute("onclick","submitperscription()");
   submit.className = "btn btn-success";
   submit.appendChild(document.createTextNode("submit"));

   newperscription.appendChild(customerIDinput);
   newperscription.appendChild(drugIDinput);
   newperscription.appendChild(doctorIDinput);
   newperscription.appendChild(cycleinput);
   newperscription.appendChild(dateinput);
   newperscription.appendChild(submit);
  view.appendChild(newperscription);
};

function submitperscription(){
  var xhttp; 
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log(this.status);
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);


      }
      //var res = JSON.parse(this.response);
    
  };
  xhttp.open("POST", `addperscription.php`, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(`customerID=${window.customerIDinput.value}
              &drugID=${window.drugIDinput.value}
              &doctorID=${window.doctorIDinput.value}
              &cyclelength= ${window.cycleinput.value}
              &date= ${window.dateinput.value}`);
}


function addsales(){
  view.removeChild(view.firstChild);
  var salesform = document.createElement("div");
  salesform.className = 'form-group';

  var 

  if(incustomers())
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    console.log(this.status);
    if(this.readyState == 4 && this.status ==200){
      console.log(this.response);
    }
  };
  xhttp.open("POST", "addperscription.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();
};



function totalsold(){
  view.removeChild(view.firstChild);
  var xhttp; 
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log(this.status);
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);
        var res = JSON.parse(this.response);
        for(var i in res){
          var row = document.createElement("tr");
          var drugid = document.createElement("td");
          var drugname = document.createElement("td");
          var money = document.createElement("td");
          drugid.appendChild(document.createTextNode(res[i].drugid));
          drugname.appendChild(document.createTextNode(res[i].drugname));
          money.appendChild(document.createTextNode(res[i].total));
    
          row.appendChild(drugid);
          row.appendChild(drugname);
          row.appendChild(money);
      
          moneytable.appendChild(row);
        }
       view.appendChild(moneytable);
    }
  };
  xhttp.open("GET", "totalsold.php", true);
  xhttp.send();
};

function incustomers(id){
  console.log("lool");
  var xhttp; 
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log(this.status);
    if (this.readyState == 4 && this.status == 200) {
      if (this.response == "dne"){
        return false;
      } else {
        return true;
      }
      //var res = JSON.parse(this.response);
    }
  };
  xhttp.open("GET", `getcustomers.php?q=${id}`, true);
  xhttp.send();
}
