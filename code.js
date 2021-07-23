


const root = document.getElementById("root");




    for (i = 0; i < customers.length; i++){
   
      const firstName = document.createElement("h2");
      firstName.innerText = customers[i].name.first;
      const lastName = customers[i].name.last;
     firstName.innerText += " " + lastName;
      root.appendChild(firstName);
      console.log(firstName);
    
      
       const email = document.createElement("h3");
       email.innerText = customers[i].email;
      root.appendChild(email);
      console.log(email.innerText)


      const address = document.createElement("h3");
      
      address.innerText = customers[i].location.street.number;
      const streetName = customers[i].location.street.name;
      address.innerText += " " + streetName;
      root.appendChild(email);
      console.log(address.innerText)

      const address2 = document.createElement("h3");
      address2.innerText = customers[i].location.city + ",";
      address2.innerText += " " + nameToAbbr(customers[i].location.state);
      address2.innerText += " " + customers[i].location.postcode;
      root.appendChild(address2);
      console.log(address2.innerText);

       const birthday = document.createElement("h3");
       birthday.innerText = customers[i].dob.date;
       root.appendChild(birthday);
       console.log(birthday.innerText);

       const employed = document.createElement("h3");
       employed.innerText = customers[i].registered.date;
       root.appendChild(employed);
       console.log(employed.innerText);



    }

   




