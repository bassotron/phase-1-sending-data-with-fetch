


const userData = {
      name: "Steve",
      email: "steve@steve.com",
   
   };

function submitData() {
   fetch("http://localhost:3000/users",  {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
      },
   body: JSON.stringify(userData),
      })
   .then(respond => respond.json())
   .then((json) => postData(json))
   .catch(function (error) {
      alert("Unauthorized Access")
     })
}

function postData() {
   const main = document.querySelector('main');
   userData.forEach(user => {
   const h2 = document.createElement('h2');
     h2.innerHTML = user.name;
     h2.innerHTML = user.email;
     main.appendChild(h2);
     
   });

