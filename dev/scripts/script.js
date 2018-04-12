const imageInfo = [
	{
		src: "../../assets/blorb.jpg",
		alt: "Blorb blorb blorb taking over the sea. Death.",
		heading: "Blue and Orange Chakras"
	},
	{
		src: "../../assets/barr.jpg",
		alt: "A wilde barr in de wilde",
		heading: "Bear With Me"
	},
	{
		src: "../../assets/birb.jpg",
		alt: "Cawcaw! I birb! Cawcaw! Harrr!",
		heading: "Black Eagle Has Nothing On Brown Vulture"
	}
];

//User will click on forward button

document.getElementById('forward').addEventListener('click', () => {
	//Target image element with slide id in DOM and
	var slide = document.getElementById('slide');
	var title = document.getElementById('slide-title');
	var slideIndex = Number(slide.dataset.slideIndex);

	console.log(slide, title, slideIndex)

	if (slideIndex >= imageInfo.length - 1) {
		return;
	} else {
		slide.setAttribute("src", imageInfo[slideIndex + 1].src);
		slide.setAttribute("alt", imageInfo[slideIndex + 1].alt);

		title.innerHTML = imageInfo[slideIndex + 1].heading;

		slide.setAttribute("data-slide-index", (slideIndex + 1));
	}
});

//User clicks back button
document.getElementById('back').addEventListener('click', () => {
	//Target image element with slide id in DOM and
	var slide = document.getElementById('slide');
	var title = document.getElementById('slide-title');
	var slideIndex = Number(slide.dataset.slideIndex);

	console.log(slide, title, slideIndex)

	if (slideIndex <= 0) {
		return;
	} else {
		slide.setAttribute("src", imageInfo[slideIndex - 1].src);
		slide.setAttribute("alt", imageInfo[slideIndex - 1].alt);

		title.innerHTML = imageInfo[slideIndex - 1].heading;

		slide.setAttribute("data-slide-index", (slideIndex - 1));
	}
});





//Change src and alt attributes of img and
//Change the h2 text with slide-title id 

//nice to haves: 
//initial image is loaded from the array at document ready
//cannot go backwards from first image


