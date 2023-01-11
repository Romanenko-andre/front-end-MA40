const burgerButton = document.querySelector ('.burger_btn');

burgerButton.addEventListener('click', () =>{
    const currentState = burgerButton.getAttribute('data-state');
    if (!currentState || currentState === 'closed') {
        burgerButton.setAttribute('data-state', 'opened');
        burgerButton.setAttribute('aria-expanded', 'true');
    }
    else {
        burgerButton.setAttribute('aria-expanded', 'false');
        burgerButton.setAttribute('data-state', 'closed');
    }
})