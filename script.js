const loadButton = document.querySelector("#loadButton");
const themeButton = document.querySelector("#themeButton");
const cards = document.querySelector("#cards");

function loadProjects() {

    fetch("data.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            cards.innerHTML = "";

            data.forEach(function(project) {

                cards.innerHTML +=
                    '<article class="card">' +
                    '<h2>' + project.title + '</h2>' +
                    '<p>' + project.description + '</p>' +
                    '<p>' + project.details + '</p>' +
                    '</article>';

            });

        });

}

loadButton.addEventListener("click", loadProjects);

themeButton.addEventListener("click", function() {

    document.querySelector("body").classList.toggle("dark-theme");

});