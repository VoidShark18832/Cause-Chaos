

function main() {
    mainGroup = document.getElementById("mainGroup");
    leftBar = document.createElement("div");
    leftBar.id = "leftBar";
    codingArea = document.createElement("div");
    codingArea.id = "codingArea";
    titleDiv = document.createElement("div");
    titleDiv.id = "titleDiv";
    title = document.createElement("h1");
    title.textContent = "Cause Chaos";
    title.id = "title";
    upgradesButton = document.createElement("button");
    upgradesButton.id = "upgradesButton";
    upgradesButton.textContent = ">_   Upgrades";
    titleDiv.appendChild(title);
    leftBar.appendChild(titleDiv);
    leftBar.appendChild(upgradesButton);
    mainGroup.appendChild(codingArea);
    mainGroup.appendChild(leftBar);
    
    stylings(mainGroup, leftBar, codingArea);
}

function stylings(mainGroup, leftBar, codingArea) {
    // MAIN GROUP CONTAINING EVERYTHING
    mainGroup.style.position = "fixed";
    mainGroup.style.inset = "0";
    mainGroup.style.display = "flex";
    mainGroup.style.flexDirection = "row-reverse";
    
    // CODING AREA
    codingArea.style.backgroundColor = "black";
    codingArea.style.outline = "1px solid white";
    codingArea.style.height = "100vh";
    codingArea.style.flex = "1";

    // LEFTBAR
    leftBar.style.backgroundColor = "black";
    leftBar.style.outline = "1px solid white";
    leftBar.style.width = "180px";
    leftBar.style.height = "100vh";
    leftBar.style.shrink = "0";

    // TITLE DIV
    titleDiv.style.backgroundColor = "black";
    titleDiv.style.outline = "1px solid white";

    // TITLE
    title.style.color = "green";
    title.style.fontFamily = "1.3rem Inconsolata, monospace";
    title.style.textAlign = "center";
    title.style.fontSize = "24px";
    title.style.margin = "0";
    title.style.padding = "10px";

    // UPGRADES BUTTON
    upgradesButton.style.backgroundColor = "black";
    upgradesButton.style.color = "green";
    upgradesButton.style.fontFamily = "1.3rem Inconsolata, monospace";
    upgradesButton.style.fontSize = "16px";
    upgradesButton.style.width = "100%";
}

main();