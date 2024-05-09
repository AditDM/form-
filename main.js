document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Validasi email
    var email = document.getElementById("email").value;
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Validasi nomor telepon
    var phone = document.getElementById("phone").value;
    if (!validatePhone(phone)) {
      alert("Please enter a valid phone number.");
      return false;
    }
  
    var formData = new FormData(this);
    var output = "<h2>Form Data:</h2><ul>";
    for (const entry of formData.entries()) {
      output += "<li><strong>" + entry[0] + ":</strong> " + entry[1] + "</li>";
    }
    output += "</ul>";
  
    var photo = document.getElementById("photo").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      output += "<h2>Photo:</h2><img src='" + e.target.result + "'>";
      document.getElementById("output").innerHTML = output;
    }
    reader.readAsDataURL(photo);
  
    this.reset();
  });
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  function validatePhone(phone) {
    var re = /^\d{10,20}$/;
    return re.test(phone);
  }
  