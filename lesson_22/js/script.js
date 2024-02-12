const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});


// спробувала JS

const target = document.querySelector(".statistic-boxes")

const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.6,
};

let callback = (entries, observer) => {
	entries.forEach((entry) => {
		const targetElement = entry.target;
		if (entry.isIntersecting) {
			targetElement.classList.add("animation")
		} else {
			targetElement.classList.remove("animation")
		}
	})
}

if (target) {
	const observer = new IntersectionObserver(callback, options)
	observer.observe(target)
}




