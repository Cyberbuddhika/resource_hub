"use strict";

//Updating copyright-year
const copyrightYear = document.getElementById("copyright-year");
const year = new Date().getFullYear();
copyrightYear.innerText = `© ${year} Cyberbuddhika. All rights reserved.`;




const navItems = document.querySelectorAll(".navbar-nav li");

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // remove 'custom-active' class from all items
        navItems.forEach(i => {
            i.classList.remove('custom-active', 'active');
        });
        // add 'custom-active' class to clicked item
        item.classList.add('custom-active', 'active');
    });
});


