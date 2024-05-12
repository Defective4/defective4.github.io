const container = document.getElementById("cards");
const xhr = new XMLHttpRequest();
xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        const posts = JSON.parse(xhr.responseText)["posts"];
        for (let index = 0; index < posts.length; index++) {
            const post = posts[index];
            const title = post["title"];
            const time = post["time"];
            const desc = post["desc"];
            const link = post["link"];
            const mmt = moment.unix(time);
            const intval = mmt.fromNow();

            const card = document.createElement("div");
            const cardBody = document.createElement("div");
            const cardTitle = document.createElement("h5");
            const cardTime = document.createElement("p");
            const cardText = document.createElement("p");
            const cardLink = document.createElement("button");

            cardBody.classList.add("card-body");

            cardTitle.innerHTML = title;
            cardTime.innerHTML = intval;
            cardTime.title = mmt.format("ddd, Do MMM YYYY [at] HH:mm");
            cardTime.setAttribute("data-bs-toggle", "tooltip");
            cardTime.setAttribute("data-bs-placement", "right");
            cardText.innerHTML = desc.join("<br>");
            cardLink.innerHTML = `Read more <i class="fa fa-arrow-right"
            style="margin: 0px;"></i>`;

            cardLink.classList.add("card-link");
            cardLink.setAttribute("href", link);
            cardTitle.classList.add("card-title");
            cardTime.classList.add("card-time");
            cardText.classList.add("card-text");


            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardTime);
            cardBody.appendChild(cardText);
            cardBody.appendChild(cardLink);


            card.classList.add("card");
            card.style.maxWidth = "50%";
            card.appendChild(cardBody);
            container.appendChild(card);

            attach(cardLink);
        }
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    }
};
xhr.open("GET", "/blog/index.json");
xhr.send();