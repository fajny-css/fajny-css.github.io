// Stop scrolling

function stopScrolling() {
    var body = document.body;
    body.classList.toggle("no-scroll");
}

// Accordion

function openAccordion(e) {
    var accordion = e.parentNode;
    accordion.classList.toggle("accordion-open");
}

// Dropdown

function openDropdown(e) {
    var dropdown = e.parentNode;
    dropdown.classList.toggle("dropdown-open");
}

// Modal

function openModal(e) {
	var header = document.querySelector(".nav-demo");
    var modal = e.parentNode;
    modal.classList.toggle("modal-open");

    // Blocks scrolling of the page when the modal is open
	stopScrolling();
	
	// Demo
	if (document.querySelector(".nav-demo").style.display === "none") {
        document.querySelector(".nav-demo").style.display = "flex";
    } else {
        document.querySelector(".nav-demo").style.display = "none";
    }
}

// Navigation

function openNav(e) {
    var nav = e.parentNode;
    nav.classList.toggle("nav-open");

    // Blocks scrolling of the page when the navigation is open
    stopScrolling();
}




// Demo filters icons

// Filters

filterSelection("all");
var count = 0;
function filterSelection(c) {
	clean();
	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}
function clean() {
	count = 0;
}

function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");

	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
			// element.classList.add(getNext());
		}
	}
}

function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("tab-select");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}


// Demo search icons

function searchIcons() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list-icons");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}