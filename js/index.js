
let first_input = document.querySelector("#first_input");
let last_input = document.querySelector("#last_input");
let faculty = document.querySelector("#faculty");
let department = document.querySelector("#department");
let level = document.querySelector("#level");
let email = document.querySelector("#email");
let phone_number = document.querySelector("#phone-number");
let money = document.querySelector("#money");

// pay-btn
let pay_btn = document.querySelector(".pay-btn");

// loader
let loading = document.querySelector(".loading");
let load = document.querySelector(".load");
let verified = document.querySelector(".verified");


let uploadImgBox = document.querySelector(".img");
let uploadImg = document.querySelector("#img");
let newImg = document.querySelector(".newImg");


let cover = document.querySelector(".cover");

window.addEventListener("load", ()=>{
	setTimeout(() => {
		cover.style.display = "none"
	}, 3000);
})

uploadImg.addEventListener("change", (event)=>{
	let input = event.target
	let reader = new FileReader()
	reader.onload = (e) => {
		newImg.style.display = "block"
		newImg.src = e.target.result;

		uploadImgBox.querySelector(".upload_text").style.display = "none"
	}
	let results = reader.readAsDataURL(input.files[0])
	console.log(newImg)
})


let studentDetails = []

money.value = "39,900";

pay_btn.addEventListener("click", ()=>{
	if(phone_number.value.length < 11 || phone_number.value.length > 11){
		if(phone_number.value.length < 11){
			alert("Phone number is less than 11 digit")
		} else if(phone_number.value.length > 11){
			alert("Phone number is greater than 11 digit")
		}
	} else {
		const newObject = {
			passport: newImg.src,
			firstName: first_input.value,
			lastName: last_input.value,
			faculty: faculty.value,
			department: department.value,
			level: level.value,
			email: email.value,
			phoneNumber: phone_number.value,
			money: money.value
		}

		addActive(loading)
		addActive(load)

		setTimeout(() => {
			removeActive(load)
			addActive(verified)
		}, 4000)
		setTimeout(() => {
			location.href = "./course_reg.html"
		}, 5000);

		const saveObject = localStorage.setItem("studentDetails", JSON.stringify(newObject))
	}


})



function addActive(item){item.classList.add('active')}
function removeActive(item){item.classList.remove('active')}