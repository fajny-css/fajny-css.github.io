//Toggle class nav
function openNav(e) {
     var element = e.parentNode.parentNode;
     element.classList.toggle("nav-open");
}

//Highlights
hljs.initHighlightingOnLoad();

//Search in icons
function search() {
     // Declare variables
     var input, filter, ul, li, a, i, txtValue;
     input = document.getElementById("search");
     filter = input.value.toUpperCase();
     ul = document.getElementById("list-icons");
     li = ul.getElementsByTagName("li");

     // Loop through all list items, and hide those who don"t match the search query
     for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("span")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
               li[i].style.display = "";
          } else {
               li[i].style.display = "none";
          }
     }
}

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
	document.querySelectorAll(".filterDiv").forEach(it => {
		it.classList.forEach(className => {
			className.startsWith("item") && it.classList.remove(className);
		});
	});
}
function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");

	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
			element.classList.add(getNext());
		}
	}
}

function getNext() {
	if (!count) {
		count = 0;
	}

	if (count >= 4) {
		count = 1;
	} else {
		count += 1;
	}

	return "item" + count;
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
