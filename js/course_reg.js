
let courseReg_page = document.querySelector('.courseReg_page')
// window.addEventListener('load', ()=>{
// 	courseReg_page.print()
// })

// add active functions
function addActive(item){item.classList.add("active")}
function removeActive(item){item.classList.remove("active")}

// courses
let first_course = document.querySelectorAll('.first_course')
let second_course = document.querySelectorAll('.second_course')

let listOfCourses_firstSem = document.querySelector('.listOfCourses_firstSem')
let listOfCourses_secondSem = document.querySelector('.listOfCourses_secondSem')

// let credit_unit = document.querySelector('#credit_unit')

let totalCreditUnit_first = document.querySelector('.ttuFirst')
let totalCreditUnit_second = document.querySelector('.ttuSecond')

let TotalUnitArray_first = []
first_course.forEach(item => {
	item.addEventListener("click", ()=>{
		listOfCourses_firstSem.appendChild(item)

		// Total Unit Calculations
		let firstSem_unit = item.querySelector("#credit_unit").textContent;
		firstSem_unit = Number(firstSem_unit)

		TotalUnitArray_first.push(firstSem_unit)

		let sum = 0
		for(let i=0; i<TotalUnitArray_first.length; i++){
			sum += TotalUnitArray_first[i]
		}
		totalCreditUnit_first.textContent = sum;
	})
})

let TotalUnitArray_second = []

second_course.forEach(item => {
	item.addEventListener("click", (e)=>{
		listOfCourses_secondSem.appendChild(item)
		item.className = "second_semester_course"

		// Total Unit Calculations
		let secondSem_unit = item.querySelector("#credit_unit").textContent;
		secondSem_unit = Number(secondSem_unit)

		TotalUnitArray_second.push(secondSem_unit)

		let sum = 0;
		for(let i=0; i<TotalUnitArray_second.length; i++){
			sum += TotalUnitArray_second[i]
		}


		if(item.parentElement.className == "listOfCourses_secondSem"){

		}

		totalCreditUnit_second.textContent = sum
	})
})

// validation
let validation = document.querySelector(".validation")
let label_box = validation.querySelectorAll(".box")

label_box.forEach(item => {
	item.addEventListener("click", ()=>{
		addActive(item)
	})
})

// select_session
let courses = document.querySelector(".courses")

let select_session = document.querySelector(".select_session")
let session_years = select_session.querySelector("#session")
let submitBtn = select_session.querySelector(".submit")

let insert_session = document.querySelectorAll("#insert_session")

submitBtn.addEventListener("click", ()=>{
	if(session_years.value == "2022/2023"){
		insert_session.forEach(item => {
			item.textContent = session_years.value
		})
		addActive(courses)
	}
})



// studentDetails
// let studentDetails = document.querySelector(".studentDetails")
// let studentDetails_table = studentDetails.querySelector(".studentDetails_table")
// let nameBox = studentDetails_table.querySelector(".nameBox")

let passport = document.querySelector("#passport")
let studentName = document.querySelector(".studentName")
let studentDepartment = document.querySelector(".studentDepartment")
let studentCourse = document.querySelector(".studentCourse")
let studentLevel = document.querySelector(".studentLevel")


let studentDetails = [];

window.addEventListener("load", ()=>{
	const retrieveDetails = JSON.parse(localStorage.getItem("studentDetails"))
	studentDetails.push(retrieveDetails)
	console.log(studentDetails)

	// Student Details
	passport.src = retrieveDetails.passport;
	studentName.textContent = retrieveDetails.firstName + " " + retrieveDetails.lastName;
	studentDepartment.textContent = retrieveDetails.department;
	studentCourse.textContent = "Application Security";
	studentLevel.textContent = retrieveDetails.level;
})


let btnBox = courseReg_page.querySelector(".printBtn")
let homeBtn = btnBox.querySelector("#home")
let printBtn = btnBox.querySelector("#printBtn")

homeBtn.addEventListener('click', ()=>{
	location.href = "./index.html"
})
printBtn.addEventListener('click', ()=>{
	print()
})


// Reset function
let reset = document.querySelector(".reset")
reset.addEventListener("click", ()=>{
	let DeleteStorage = localStorage.removeItem("studentDetails")

	// Student Details
	passport.src = "";
	studentName.textContent = "";
	studentDepartment.textContent = "";
	studentCourse.textContent = "";
	studentLevel.textContent = "";
})