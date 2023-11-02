document.addEventListener('DOMContentLoaded', function () {
    const dropdownActivation = document.querySelector('.dropdown-activation');
    const navContainer = document.querySelector('.navcontainer');

    dropdownActivation.addEventListener('mouseenter', function () {
        navContainer.classList.add('flex-start');
    });

    dropdownActivation.addEventListener('mouseleave', function () {
        navContainer.classList.remove('flex-start');
    });
});