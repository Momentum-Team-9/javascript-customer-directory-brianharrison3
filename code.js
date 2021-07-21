
// Calls the root div
const outputDiv = document.getElementById("root");
const customerCard = document.createElement("div")
customerCard.classList.add("customer")

    for (i = 0; i < customers.length; i++){
   
      const firstName = document.createElement("h2");
      firstName.innerText = customers[i].name.first;
      const lastName = customers[i].name.last;
      firstName.innerText += " " + lastName;
      customerCard.appendChild(firstName);
      console.log(firstName.innerText)
    
      
      const email = document.createElement("h3");
      email.classList.add("email-address");
      email.innerText = customers[i].email;
      customerCard.appendChild(email);
      console.log(email.innerText)


      const address = document.createElement("h3");
      address.classList.add("address");
      address.innerText = customers[i].location.street.number;
      const streetName = customers[i].location.street.name;
      address.innerText += " " + streetName;
      customerCard.appendChild(email);
      console.log(address.innerText)

      const address2 = document.createElement("h3");
      address2.classList.add("address");
      address2.innerText = customers[i].location.city + ",";
      address2.innerText += " " + nameToAbbr(customers[i].location.state);
      address2.innerText += " " + customers[i].location.postcode;
      customerCard.appendChild(address2);
      console.log(address2.innerText);

       const birthday = document.createElement("h3");
       birthday.classList.add("birtday");
       birthday.innerText = customers[i].dob.date
       customerCard.appendChild(birthday);
       console.log(birthday.innerText);



    }

   


// function addElement () {
  // create a new div element
  // const newDiv = document.createElement("div");

  // and give it some content
   // const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  // newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  // const currentDiv = document.getElementById("div1");
  // document.body.insertBefore(newDiv, currentDiv);


