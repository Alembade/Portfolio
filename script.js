/*******w************

    Project 3
    Name: Alem Bade Bene
    Date: 2022-04-22
    Description: Project 3 contact form JS file.

********************/

document.addEventListener("DOMContentLoaded", load);

function load(){
	document.getElementById("contactForm").addEventListener("submit", validate);
	document.getElementById("contactForm").addEventListener("reset", resetForm);
}

function validate(e){
	
	hideAllErrors();
	
	if(formHasErrors()){
		
		e.preventDefault();
		
		return false;
	}

	return true;
}
function resetForm(e)
{
    if ( confirm('Are you sure you want to clear everything?') )
    {
		
		hideErrors();
		
		
		return true;
	}
}

function formHasErrors(){

	let errorFlag = false;

    let input = ["fullName","email","phoneNumber"];
    for(let i=0; i<input.length;i++)
	{
		let textField = document.getElementById(input[i]);
		if(textField.value.length == 0)
		{
			document.getElementById(input[i] + "_error").style.display = "block";

			if(!errorFlag)
			{
				textField.focus();
				textField.select();
			}
			errorFlag = true;
		}
	}

	let regex =  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;;

	let phone = document.getElementById("phoneNumber").value;

	if(phone.match(regex) == null)
	{
		document.getElementById("phoneformat_error").style.display = "block";

		if(!errorFlag)
		{
			document.getElementById("phoneNumber").focus();
			document.getElementById("phoneNumber").select();
		}
		errorFlag = true;
	}

	let emailr = /\S+@\S+\.\S+/;
	

	let email = document.getElementById("email").value;

	if(email.match(emailr) == null)
	{
		
		document.getElementById("emailformat_error").style.display = "block";

		if(!errorFlag)
		{
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}

		errorFlag = true;
	}
	if(document.getElementById("comment").value == '')
	{
		
		document.getElementById("comment_error").style.display = "block";

		if(!errorFlag)
		{
			document.getElementById("comment").focus();
			document.getElementById("comment").select();
		}

		errorFlag = true;
	}
	

	return errorFlag;

}

function hideAllErrors()
{
	var errorFields = document.getElementsByClassName("error");

	for(var i = 0;i < errorFields.length; i++){
		errorFields[i].style.display = "none";
	}
}
