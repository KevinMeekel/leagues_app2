// document.addEventListener("DOMContentLoaded", () => {
//     const usernameDropdown = document.getElementById("username");
//     const skills = document.getElementById("skills");

//     // Fetch usernames from the SQLite database
//     fetch("/api/usernames")
//         .then((response) => response.json())
//         .then((data) => {
//             data.forEach((username) => {
//                 const option = document.createElement("option");
//                 option.value = username;
//                 option.textContent = username;
//                 usernameDropdown.appendChild(option);
//             });
//         })
//         .catch((error) => console.error(error));

//     // Function to update skill levels based on JSON response
//     function updateSkillLevels(skillData) {
//         document.getElementById("overall").textContent = skillData.overall;
//         document.getElementById("attack").textContent = skillData.attack;
//         document.getElementById("defence").textContent = skillData.defence;
//         document.getElementById("strength").textContent = skillData.strength;
//         document.getElementById("hitpoints").textContent = skillData.hitpoints;
//         document.getElementById("ranged").textContent = skillData.ranged;
//         document.getElementById("prayer").textContent = skillData.prayer;
//         document.getElementById("magic").textContent = skillData.magic;
//         document.getElementById("cooking").textContent = skillData.cooking;
//         document.getElementById("woodcutting").textContent =
//             skillData.woodcutting;
//         document.getElementById("fletching").textContent = skillData.fletching;
//         document.getElementById("fishing").textContent = skillData.fishing;
//         document.getElementById("firemaking").textContent =
//             skillData.firemaking;
//         document.getElementById("crafting").textContent = skillData.crafting;
//         document.getElementById("smithing").textContent = skillData.smithing;
//         document.getElementById("mining").textContent = skillData.mining;
//         document.getElementById("herblore").textContent = skillData.herblore;
//         document.getElementById("agility").textContent = skillData.agility;
//         document.getElementById("thieving").textContent = skillData.thieving;
//         document.getElementById("slayer").textContent = skillData.slayer;
//         document.getElementById("farming").textContent = skillData.farming;
//         document.getElementById("runecraft").textContent = skillData.runecraft;
//         document.getElementById("hunter").textContent = skillData.hunter;
//         document.getElementById("construction").textContent =
//             skillData.construction;
//         document.getElementById("league-points").textContent =
//             skillData.leaguepoints;
//     }

//     // Listen for username selection changes
//     usernameDropdown.addEventListener("change", () => {
//         const selectedUsername = usernameDropdown.value;

//         // Fetch skill data for the selected username
//         fetch(`/api/skills/${selectedUsername}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 // Update skill level displays
//                 updateSkillLevels(data);
//             })
//             .catch((error) => console.error(error));
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const usernameDropdown = document.getElementById("username");
    const skills = document.getElementById("skills");

    let statsData = []; // To hold data from stats.json
    let yesterdayStatsData = []; // To hold data from yesterdaystats.json

    // Load stats.json and yesterdaystats.json
    Promise.all([
        fetch("./stats.json").then((response) => response.json()),
        fetch("./yesterdaystats.json").then((response) => response.json()),
    ])
        .then(([stats, yesterdayStats]) => {
            statsData = stats;
            yesterdayStatsData = yesterdayStats;

            // Populate the dropdown with usernames from stats.json
            statsData.forEach((user) => {
                const option = document.createElement("option");
                option.value = user.username;
                option.textContent = user.username;
                usernameDropdown.appendChild(option);
            });
        })
        .catch((error) => console.error("Error loading data:", error));

    // Function to calculate and display skill levels with differences
    function updateSkillLevels(skillData, yesterdaySkillData) {
        // Helper function to calculate the difference
        const displaySkill = (current, previous) => {
            const diff = current - previous;
            return diff === 0
                ? `${current}`
                : `${current} (${diff > 0 ? "+" : ""}${diff})`;
        };

        document.getElementById("overall").textContent = displaySkill(
            skillData.overall,
            yesterdaySkillData ? yesterdaySkillData.overall : 0
        );
        document.getElementById("attack").textContent = displaySkill(
            skillData.attack,
            yesterdaySkillData ? yesterdaySkillData.attack : 0
        );
        document.getElementById("defence").textContent = displaySkill(
            skillData.defence,
            yesterdaySkillData ? yesterdaySkillData.defence : 0
        );
        document.getElementById("strength").textContent = displaySkill(
            skillData.strength,
            yesterdaySkillData ? yesterdaySkillData.strength : 0
        );
        document.getElementById("hitpoints").textContent = displaySkill(
            skillData.hitpoints,
            yesterdaySkillData ? yesterdaySkillData.hitpoints : 0
        );
        document.getElementById("ranged").textContent = displaySkill(
            skillData.ranged,
            yesterdaySkillData ? yesterdaySkillData.ranged : 0
        );
        document.getElementById("prayer").textContent = displaySkill(
            skillData.prayer,
            yesterdaySkillData ? yesterdaySkillData.prayer : 0
        );
        document.getElementById("magic").textContent = displaySkill(
            skillData.magic,
            yesterdaySkillData ? yesterdaySkillData.magic : 0
        );
        document.getElementById("cooking").textContent = displaySkill(
            skillData.cooking,
            yesterdaySkillData ? yesterdaySkillData.cooking : 0
        );
        document.getElementById("woodcutting").textContent = displaySkill(
            skillData.woodcutting,
            yesterdaySkillData ? yesterdaySkillData.woodcutting : 0
        );
        document.getElementById("fletching").textContent = displaySkill(
            skillData.fletching,
            yesterdaySkillData ? yesterdaySkillData.fletching : 0
        );
        document.getElementById("fishing").textContent = displaySkill(
            skillData.fishing,
            yesterdaySkillData ? yesterdaySkillData.fishing : 0
        );
        document.getElementById("firemaking").textContent = displaySkill(
            skillData.firemaking,
            yesterdaySkillData ? yesterdaySkillData.firemaking : 0
        );
        document.getElementById("crafting").textContent = displaySkill(
            skillData.crafting,
            yesterdaySkillData ? yesterdaySkillData.crafting : 0
        );
        document.getElementById("smithing").textContent = displaySkill(
            skillData.smithing,
            yesterdaySkillData ? yesterdaySkillData.smithing : 0
        );
        document.getElementById("mining").textContent = displaySkill(
            skillData.mining,
            yesterdaySkillData ? yesterdaySkillData.mining : 0
        );
        document.getElementById("herblore").textContent = displaySkill(
            skillData.herblore,
            yesterdaySkillData ? yesterdaySkillData.herblore : 0
        );
        document.getElementById("agility").textContent = displaySkill(
            skillData.agility,
            yesterdaySkillData ? yesterdaySkillData.agility : 0
        );
        document.getElementById("thieving").textContent = displaySkill(
            skillData.thieving,
            yesterdaySkillData ? yesterdaySkillData.thieving : 0
        );
        document.getElementById("slayer").textContent = displaySkill(
            skillData.slayer,
            yesterdaySkillData ? yesterdaySkillData.slayer : 0
        );
        document.getElementById("farming").textContent = displaySkill(
            skillData.farming,
            yesterdaySkillData ? yesterdaySkillData.farming : 0
        );
        document.getElementById("runecraft").textContent = displaySkill(
            skillData.runecraft,
            yesterdaySkillData ? yesterdaySkillData.runecraft : 0
        );
        document.getElementById("hunter").textContent = displaySkill(
            skillData.hunter,
            yesterdaySkillData ? yesterdaySkillData.hunter : 0
        );
        document.getElementById("construction").textContent = displaySkill(
            skillData.construction,
            yesterdaySkillData ? yesterdaySkillData.construction : 0
        );
        document.getElementById("league-points").textContent = displaySkill(
            skillData.leaguepoints,
            yesterdaySkillData ? yesterdaySkillData.leaguepoints : 0
        );
    }

    // Listen for username selection changes
    usernameDropdown.addEventListener("change", () => {
        const selectedUsername = usernameDropdown.value;

        // Find the selected user's data in statsData and yesterdayStatsData
        const selectedUser = statsData.find(
            (user) => user.username === selectedUsername
        );
        const yesterdayUser = yesterdayStatsData.find(
            (user) => user.username === selectedUsername
        );

        if (selectedUser) {
            updateSkillLevels(selectedUser, yesterdayUser || {});
        } else {
            console.error("User not found in stats data:", selectedUsername);
        }
    });
});
