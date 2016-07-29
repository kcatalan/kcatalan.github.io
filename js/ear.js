$('#reg').click(function() {
	$('body').fadeOut("slow","linear");
});


function saveUser() {
var fname = $('#first_name').val();
var lname = $('#last_name').val();
var num = $('#contact').val();
var email = $('#email').val();
var pass = $('#password').val();
	console.log(fname,lname,num,email,pass);
	var Users = JSON.parse(localStorage.getItem('Users'));
	if (!Users) {
		var users = [];
		users.push({fname: fname, lname: lname, contact: num, email: email, password: pass});
		localStorage.setItem('Users', JSON.stringify(users));
	} else {
		Users.push({fname: fname, lname: lname, contact: num, email: email, password: pass});
		localStorage.setItem('Users', JSON.stringify(Users));
	}
	alert("You are now registered.", redirect(fname));
}

function redirect(userName) {
	sessionStorage.setItem("user", userName);
		window.location.replace('landingPage.html?'+ userName);
}

function setUser() {
	var name = sessionStorage.getItem("user");
	$('#userName').html(name);
}