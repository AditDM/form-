// ini agar id data di myform saat di tekan submitnya akan di tampilkan di id output
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Validasi email digunakan agar dapat pemberitahuan jika ada kesalahan di email sebagai contoh kekurangan @
    var email = document.getElementById("email").value;
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Validasi nomor telepon jika nomornya tidak valik akan ada alert (pemberitahuan) sebagai contoh hanya 3 digit dimasukkan tapi harusnya 10 digit
    var phone = document.getElementById("phone").value;
    if (!validatePhone(phone)) {
      alert("Please enter a valid phone number.");
      return false;
    }
    // ini agar data yang di input di form akan di tampilkan di id output
    var formData = new FormData(this);
    var output = "<h2>Form Data:</h2><ul>";
    for (const entry of formData.entries()) {
      output += "<li><strong>" + entry[0] + ":</strong> " + entry[1] + "</li>";
    }
    output += "</ul>";
  
    // ini agar foto yang di upload akan di tampilkan di id output
    var photo = document.getElementById("photo").files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      output += "<h2>Photo:</h2><img src='" + e.target.result + "'>";
      document.getElementById("output").innerHTML = output;
    }
    reader.readAsDataURL(photo);
  
    // ini agar formnya akan di reset setelah di submit
    this.reset();
  });
  
  // ini fungsi validasi email
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // ini fungsi validasi nomor telepon
  function validatePhone(phone) {
    var re = /^\d{10,20}$/;
    return re.test(phone);
  }
  