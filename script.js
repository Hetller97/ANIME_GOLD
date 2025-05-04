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




db.ref("teams")
  .orderByChild("points")
  .limitToLast(10)
  .once("value", (snapshot) => {
    const topTeams = [];
    snapshot.forEach(child => {
      topTeams.push({ key: child.key, data: child.val() });
    });

    // ترتيب عكسي لأن limitToLast يعيد النتائج من الأقل إلى الأعلى
    topTeams.reverse();

    displayTopTeams(topTeams);
  });

  function displayTopTeams(teams) {
    const container = document.getElementById("topTeamsContainer");
    container.innerHTML = "";
    
    teams.forEach(({ key, data }, index) => {
      const div = document.createElement("div");
      div.className = "team-card";
      div.innerHTML = `
        <strong>#${index + 1} - ${data.name}</strong><br>
        <img src="${data.logo}" alt="شعار ${data.name}" width="100"><br>
        <strong>النقاط:</strong> ${data.points}<br>
        <strong>الإقليم:</strong> ${data.region}<br>
        <strong>التصنيف:</strong> ${data.rank || '---'}<br>
      `;
      container.appendChild(div);
    });
  }
  