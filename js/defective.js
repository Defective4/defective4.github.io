const chars = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

function initCopy() {
    const els = document.getElementsByClassName("copy-btn");
    for (let index = 0; index < els.length; index++) {
        const element = els[index];
        element.innerHTML = "<i class=\"fa fa-copy\"></i>";
        element.href = "#";
        element.addEventListener("click", function (e) {
            e.preventDefault();
            if (element.hasAttribute("timeout")) return;
            const content = element.getAttribute("copy");
            navigator.clipboard.writeText(content);
            element.style.color = "lime";
            element.getElementsByTagName("i")[0].classList = "fa fa-check";
            element.setAttribute("timeout", "true");
            setTimeout(() => {
                element.getElementsByTagName("i")[0].classList = "fa fa-copy";
                element.removeAttribute("style");
                element.removeAttribute("timeout");
            }, 1000);
        });
    }
}

function generateWord() {
    let num = Math.random() * 10;
    let string = "";
    for (let x = 0; x < num; x++)
        string += chars[Math.floor(Math.random() * chars.length)];
    return string;
}

function animTitle() {
    let words = document.getElementById("words");
    let available = ["Minecraft plugins", "Discord bots", "Minecraft bots", "websites", "configurations"];
    let wIndex = 0;
    setInterval(() => {
        let id = setInterval(() => {
            if (words.innerHTML.length == 0) {
                clearInterval(id);
                words.innerHTML = "";

                if (wIndex >= available.length)
                    wIndex = 0;
                let word = available[wIndex];
                let cIndex = 0;
                let id2 = setInterval(() => {
                    if (cIndex >= word.length) {
                        clearInterval(id2);
                        words.innerHTML = word;
                        return;
                    }
                    words.innerHTML += word.substring(cIndex, cIndex + 1);
                    cIndex++;
                }, 50);

                wIndex++;
                return;
            }
            words.innerHTML = words.innerHTML.substring(0, words.innerHTML.length - 1);
        }, 50);
    }, 2500);


    let console = document.getElementsByClassName("console")[0];

    setInterval(() => {
        if (Math.random() < 0.5) return;
        console.innerHTML = console.innerHTML.substring(console.innerHTML.indexOf(".") + 1);
        while (console.offsetHeight < window.innerHeight) {
            let count = Math.random() * 15;
            for (let x = 0; x < count; x++)
                console.innerHTML += generateWord() + " ";
            console.innerHTML += "<br/>.";
        }
    }, 100);

    setTimeout(() => {
        let blk = document.getElementsByClassName("blinker")[0];
        blk.classList.remove("blinker");
        blk.style.opacity = 0;
    }, 2750);

    let elem = document.getElementById("hTitle");
    let index = 0;
    let chars = "I am ".split("");
    let nCs = "Defective!".split("");

    let id = setInterval(function () {
        if (index >= chars.length) {
            clearInterval(id);
            elem.innerHTML = "I am <span class=\"gradTitle\"></span>";
            let gTitle = document.getElementsByClassName("gradTitle")[0];
            index = 0;
            id = setInterval(() => {
                if (index >= nCs.length) {
                    clearInterval(id);
                } else {
                    gTitle.innerHTML += nCs[index];
                    index++;
                }
            }, 50);
        } else {
            elem.innerHTML += chars[index];
            index++;
        }
    }, 50);
}