const buttons = document.getElementsByClassName("card-link");
for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    attach(button);
}

function attach(button) {
    button.onmousedown = (e) => {
        if(e.button != 0) return;
        button.classList.remove("ripple");
        setTimeout(() => {
            button.classList.add("ripple");
        }, 1);
    }

    const href = button.getAttribute("href");
    if (href !== null) {
        button.onclick = () => {
            window.location.href = href;
        }
    }
}