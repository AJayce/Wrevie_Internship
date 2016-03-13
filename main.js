// Javascript Document

$('document').ready(function()
{
	$("regForm").validate({
		rules:
		{
			fullname: {
				required: true,
			},
			business_name: {
				required: true,
			},
			bus_type: {
				required: true,
			},
			user_name: {
				required: true,
				minlength: 3
			},
			password: {
				required: true,
				minlength: 8,
				maxlength: 15
			},
			password_c: {
				required: true,
				equalTo: '#password'
			},
			website: {
				required: true,
				url: true
			},

		},
		messages:
		{
			user_name: "Please enter user name",
			password: {
				required: "Please provide a password"
				minlength: "Password at least 8 characters"
			},
			password_c: {
				required: "Please provid a password"
				equalTo: "Password does not match!"
			}
			website: {
				url: "Please enter proper URL"
			}
		},
		submitHandler: submitForm


		})
	});

	$("signin").validate({
			rules:
			{
				user_name: {
					required: true,
				},
				password: {
					required: true,
				}
			}
	});

	$('#login').submit(function(login))

	function submitForm()
	{
		var data = $("#regForm").seralize();

		$.ajax({

			type:'POST',
			url: '',
			data: data,
			success: function(){
				return Registration Completed;
			}
		});
	}

	function login()
	{
		$.ajax({
			type: "POST",
			url: '',
			data: {
				user_name: $("#user_name").val(),
				password: $("#password").val()
			},
			success: function(data)
			{
				if (data === 'Correct')
				{
					window.location.replace();
				}
				else
				{
					$("#error").html("<span style='color:#cc0000'>Error:</span> Invalid username and password. ");
				}
			}
		})
	}

});