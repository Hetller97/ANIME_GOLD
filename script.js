const btnRegions = document.getElementById("goTOregions");
if (btnRegions) {
    btnRegions.addEventListener("click", function () {
        window.location.href = "regions.html";
    });
}

const btnKitaat = document.getElementById("goTOkitaat");
if (btnKitaat) {
    btnKitaat.addEventListener("click", function () {
        window.location.href = "kitaat.html";
    });
}

const btnManagement = document.getElementById("goTOmanagement");
if (btnManagement) {
    btnManagement.addEventListener("click", function () {
        window.location.href = "management.html";
    });
}

const btnRegionsPage = document.getElementById("regionsPage");
if (btnRegionsPage) {
    btnRegionsPage.addEventListener("click", function () {
        window.location.href = "faraina.html";
    });
}

const btnLinks = document.getElementById("goTOlinks");
if (btnLinks) {
    btnLinks.addEventListener("click", function () {
        window.location.href = "links.html";
    });
}

const btnTools = document.getElementById("goTOManagementTools");
if (btnTools) {
    btnTools.addEventListener("click", function () {
        window.location.href = "managementTools.html";
    });
}
