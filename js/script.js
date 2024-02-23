document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scroll-effect");
    } else {
        navbar.classList.remove("navbar-scroll-effect");
    }
})

//Details
var collapseElements = document.querySelectorAll('.collapse');

collapseElements.forEach(function (collapseEl) {
    collapseEl.addEventListener('show.bs.collapse', function () {
        // Đóng tất cả các collapse khác
        collapseElements.forEach(function (otherCollapseEl) {
            if (otherCollapseEl !== collapseEl && otherCollapseEl.classList.contains('show')) {
                var collapseInstance = bootstrap.Collapse.getInstance(otherCollapseEl);
                collapseInstance.hide();
            }
        });
    });
});

