



function submitData(name, email) {
   fetch("http://localhost:3000/users",  {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
      },
   body: JSON.stringify( {
      name, email
   }),
      })
   .then(respond => respond.json())
   .then((userData) => document.body.innerHTML = userData.id)
   .catch((error) => { alert("Unauthorized Access");
   console.log(error.message)})
}

// document.body.innerHTML = error.message
