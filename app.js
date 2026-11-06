const artistGrid = document.getElementById("artistGrid");
const pairingGrid = document.getElementById("pairingGrid");
const seriesGrid = document.getElementById("seriesGrid");

const artistSearch = document.getElementById("artistSearch");
const generationFilter = document.getElementById("generationFilter");

const seriesSearch = document.getElementById("seriesSearch");
const seriesStatus = document.getElementById("seriesStatus");

const artistEmpty = document.getElementById("artistEmpty");
const seriesEmpty = document.getElementById("seriesEmpty");

const profileModal = document.getElementById("profileModal");
const profileContent = document.getElementById("profileContent");

const DMD_IMAGE_FALLBACK =
    "https://placehold.co/500x600/241a32/d8baff?text=DMD+Universe";

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function imageMarkup(item, altText, className = "") {

    const sources = [
        ...(Array.isArray(item.imageSources) ? item.imageSources : []),
        item.image
    ].filter(source =>
        typeof source === "string" &&
        source.trim() !== "" &&
        !source.startsWith("PASTE-")
    );

    const firstImage = sources.shift() || DMD_IMAGE_FALLBACK;

    return `
        <img
            class="${escapeHTML(className)}"
            src="${escapeHTML(firstImage)}"
            data-image-sources="${escapeHTML(JSON.stringify(sources))}"
            alt="${escapeHTML(altText)}"
            onerror="tryNextDmdImage(this)"
            loading="lazy"
        >
    `;
}

window.tryNextDmdImage = function(img) {

    let sources = [];

    try {
        sources = JSON.parse(img.dataset.imageSources || "[]");
    } catch (error) {
        sources = [];
    }

    const nextImage = sources.shift();

    if (nextImage) {
        img.dataset.imageSources = JSON.stringify(sources);
        img.src = nextImage;
    } else {
        img.onerror = null;
        img.src = DMD_IMAGE_FALLBACK;
    }
};

document.getElementById("artistCount").textContent =
    artists.length;

document.getElementById("pairingCount").textContent =
    pairings.length;

document.getElementById("seriesCount").textContent =
    series.length;

function displayArtists(list) {

    artistGrid.innerHTML = "";

    artistEmpty.style.display =
        list.length === 0 ? "block" : "none";

    list.forEach(artist => {

        const card = document.createElement("article");

        card.className = "artist-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");

        card.setAttribute(
            "aria-label",
            `View ${artist.nickname}'s profile`
        );

        card.innerHTML = `
            ${imageMarkup(artist, artist.nickname, "artist-photo")}

            <div class="card-info">
                <h3>${escapeHTML(artist.nickname)}</h3>
                <p>${escapeHTML(artist.name)}</p>

                <span class="card-tag">
                    Generation ${escapeHTML(artist.generation)}
                </span>
            </div>
        `;

        card.addEventListener("click", () => {
            openArtistProfile(artist.id);
        });

        card.addEventListener("keydown", event => {

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openArtistProfile(artist.id);
            }

        });

        artistGrid.appendChild(card);

    });

}

function filterArtists() {

    const search = artistSearch.value.toLowerCase();
    const generation = generationFilter.value;

    const filtered = artists.filter(artist => {

        const matchesSearch =
            artist.name.toLowerCase().includes(search) ||
            artist.nickname.toLowerCase().includes(search) ||
            artist.pairing.toLowerCase().includes(search);

        const matchesGeneration =
            generation === "all" ||
            String(artist.generation) === generation;

        return matchesSearch && matchesGeneration;

    });

    displayArtists(filtered);

}

artistSearch.addEventListener("input", filterArtists);
generationFilter.addEventListener("change", filterArtists);

function openArtistProfile(id) {

    const artist = artists.find(item => item.id === id);

    if (!artist) return;

    const artistSeries = artist.series.map(title =>
        `<span class="card-tag">${escapeHTML(title)}</span>`
    ).join(" ");

    const socialLinks = [
        ["Instagram", artist.instagram],
        ["X / Twitter", artist.x],
        ["TikTok", artist.tiktok]
    ].filter(item => item[1]);

    profileContent.innerHTML = `

        <div class="profile-details">

            ${imageMarkup(artist, artist.nickname, "profile-photo")}

            <div>

                <span class="eyebrow">ARTIST PROFILE</span>

                <h2>${escapeHTML(artist.nickname)}</h2>

                <p><strong>Full Name:</strong>
                    ${escapeHTML(artist.name)}
                </p>

                <p><strong>Generation:</strong>
                    ${escapeHTML(artist.generation)}
                </p>

                <p><strong>Occupation:</strong>
                    ${escapeHTML(artist.role)}
                </p>

                <p><strong>Pairing:</strong>
                    ${escapeHTML(artist.pairing)}
                </p>

                <br>

                <strong>Filmography</strong>

                <div>${artistSeries}</div>

                <div class="profile-socials">

                    ${socialLinks.map(item => `
                        <a href="${escapeHTML(item[1])}"
                           target="_blank"
                           rel="noopener noreferrer">
                            ${escapeHTML(item[0])} ↗
                        </a>
                    `).join("")}

                </div>

            </div>

        </div>

    `;

    profileModal.showModal();

}

document.getElementById("closeModal").addEventListener(
    "click",
    () => profileModal.close()
);

profileModal.addEventListener("click", event => {

    if (event.target === profileModal) {
        profileModal.close();
    }

});

function displayPairings() {

    pairingGrid.innerHTML = "";

    pairings.forEach(pair => {

        const card = document.createElement("article");

        card.className = "pairing-card";

        card.innerHTML = `

            <span class="eyebrow">DMD PAIRING</span>

            <h3>${escapeHTML(pair.name)}</h3>

            <p>${escapeHTML(pair.members)}</p>

            <p>${escapeHTML(pair.description)}</p>

            <span class="card-tag">
                ${pair.series.map(escapeHTML).join(" • ")}
            </span>

        `;

        pairingGrid.appendChild(card);

    });

}


function displaySeries(list) {

    seriesGrid.innerHTML = "";

    seriesEmpty.style.display =
        list.length === 0 ? "block" : "none";

    list.forEach(show => {

        const card = document.createElement("article");

        card.className = "series-card";

        card.innerHTML = `

            ${imageMarkup(show, show.title, "series-photo")}

            <div class="series-info">

                <h3>${escapeHTML(show.title)}</h3>

                <p>
                    ${escapeHTML(show.year)} •
                    ${escapeHTML(show.genre)}
                </p>

                <p>
                    Cast: ${show.cast.map(escapeHTML).join(", ")}
                </p>

                <span class="status">
                    ${escapeHTML(show.status)}
                </span>

            </div>

        `;

        seriesGrid.appendChild(card);

    });

}

function filterSeries() {

    const search = seriesSearch.value.toLowerCase();
    const status = seriesStatus.value;

    const filtered = series.filter(show => {

        const matchesSearch =
            show.title.toLowerCase().includes(search) ||
            show.cast.some(name =>
                name.toLowerCase().includes(search)
            );

        const matchesStatus =
            status === "all" || show.status === status;

        return matchesSearch && matchesStatus;

    });

    displaySeries(filtered);

}

seriesSearch.addEventListener("input", filterSeries);
seriesStatus.addEventListener("change", filterSeries);

displayArtists(artists);
displayPairings();
displaySeries(series);

console.log("DMD Universe database loaded successfully!");
