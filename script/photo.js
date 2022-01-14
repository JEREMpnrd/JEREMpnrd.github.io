document
.querySelectorAll(".wp-block-gallery")
.forEach((gallery, i) => {
	
	// create Slideshow elements
	const slideshow = document.createElement("div");
	slideshow.classList.add("slideshow", "popin", "popin-closed");
	slideshow.setAttribute("id", "slideshow-" + i);
	const wrapper = document.createElement("div");
	wrapper.classList.add("wrapper");
	const closeButton = document.createElement("a");
	closeButton.classList.add("close");
	closeButton.innerHTML = "&times;";
	wrapper.prepend(closeButton);

	// instanciate Swipers and append them to the Slideshow element
	const pagination = cloneGallery("swiper-pagination");
	const swiperPagination = new Swiper(pagination, {
		loop: true,
		spaceBetween: 10,
		slidesPerView: gallery.querySelectorAll("li.blocks-gallery-item").length,
		freeMode: true,
		watchSlidesProgress: true
	});
	const screen = cloneGallery("swiper-screen");
	new Swiper(screen, {
		loop: true,
		spaceBetween: 10,
		hashNavigation: { 
			 watchState: true,  
			 // replaceState: true
		},
		thumbs: {
			swiper: swiperPagination
		}
	});
	
	// insert in document
	wrapper.appendChild(screen);
	wrapper.appendChild(pagination);
	slideshow.appendChild(wrapper);
	document.body.appendChild(slideshow);

	linkGalleryToSlideshow(gallery, slideshow);

	function cloneGallery(cloneClassName) {
		const clone = gallery.cloneNode(true);
		clone.className = "";
		clone.classList.add("swiper", cloneClassName, cloneClassName + "-" + i);
		// change slideshow classes
		const wrapper = clone.querySelector("ul.blocks-gallery-grid");
		wrapper.classList.add("swiper-wrapper");
		wrapper.classList.remove("blocks-gallery-grid");
		wrapper
			.querySelectorAll("li.blocks-gallery-item")
			.forEach((item) => {
					item.classList.add("swiper-slide");
					item.classList.remove("blocks-gallery-item");
					item.querySelector("a").setAttribute("href", "#");
					item.querySelector("figure").replaceWith(item.querySelector("img"));
			});
		return clone;
	}
	 
	// link the static WordPress gallery to the SwiperJS slideshow
	function linkGalleryToSlideshow(gallery, slideshow) {
		gallery.dataset.slideshow = slideshow.getAttribute("id");
		// set gallery's anchors
		gallery
			.querySelectorAll("li.blocks-gallery-item a")
			.forEach((item, i) => {
					item.setAttribute("href", "#" + gallery.dataset.slideshow + "_img-" + i);
			});
		// link slideshow images
		slideshow
			.querySelectorAll(".swiper-screen li.swiper-slide")
			.forEach((item) => {
					item.dataset.hash = gallery.dataset.slideshow + "_img-" + item.dataset.swiperSlideIndex;
});
		// open popin
		gallery
			.querySelectorAll("li.blocks-gallery-item a")
			.forEach((item) => {
				item.addEventListener("click", (e) => {
				slideshow.classList.remove("popin-closed");
				document.body.classList.add("popin-opened");
				});
			});
		// close popin
		slideshow
			.querySelector(".close")
			.addEventListener("click", (e) => {
				slideshow.classList.add("popin-closed");
				document.body.classList.remove("popin-opened");
			});
	}
});