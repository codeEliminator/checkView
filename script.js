var number1 = document.querySelector('.users-num'),
    start1 = +number1.innerHTML.replace(/,/g, ''),
    end1 = +number1.getAttribute('data-max').replace(/,/g, ''); 

var options = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.5 
};

var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            observer.unobserve(entry.target); 
            var interval1 = setInterval(function () {
                start1 = Math.min(start1 + 150, end1); 
                number1.innerHTML = start1.toLocaleString(); 
                if (start1 === end1) {
                    clearInterval(interval1);
                }
            }, 10);
        }
    });
}, options);

observer.observe(number1);


const dropList = document.querySelector('.dataDropList');

dropList.addEventListener('click', (event) => {
    const item = event.target.closest('.dataDropListItem');
    if (item) {
        item.classList.toggle('active');
    }
});


var container = document.getElementById("faq-container");


function toggleLastSecClass() {

    if (container.classList.contains("last-sec")) {
        container.classList.remove("last-sec");
    } else {
        container.classList.add("last-sec");
    }
}

var dropItems = document.querySelectorAll(".dataDropListItem");

var lastDropItem = dropItems[dropItems.length - 1];

lastDropItem.addEventListener("click", toggleLastSecClass);
