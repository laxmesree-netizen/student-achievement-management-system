let achievements = JSON.parse(localStorage.getItem("achievements")) || [];

function saveAchievement() {
    const studentName = document.getElementById("studentName").value;
    const age = document.getElementById("age").value;
    const dob = document.getElementById("dob").value;
    const achievementName = document.getElementById("achievementName").value;
    const category = document.getElementById("category").value;
    const year = document.getElementById("year").value;

    const achievement = {
        studentName,
        age,
        dob,
        achievementName,
        category,
        year
    };

    achievements.push(achievement);

    localStorage.setItem("achievements", JSON.stringify(achievements));

    alert("Achievement saved successfully!");
}
function displayAchievements() {
    const table = document.getElementById("achievementTable");

    table.innerHTML = "";

    achievements.forEach(function(achievement) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${achievement.studentName}</td>
            <td>${achievement.age}</td>
            <td>${achievement.dob}</td>
            <td>${achievement.achievementName}</td>
            <td>${achievement.category}</td>
            <td>${achievement.year}</td>
        `;

        table.appendChild(row);
    });
}

displayAchievements();