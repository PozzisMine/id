function getVideoId(url) {
    let id = "";

    try {
        if (url.includes("v=")) {
            id = url.split("v=")[1].split("&")[0];
        } 
        else if (url.includes("youtu.be/")) {
            id = url.split("youtu.be/")[1].split("?")[0];
        } 
        else if (url.includes("shorts/")) {
            id = url.split("shorts/")[1].split("?")[0];
        }
    } catch (e) {
        return "";
    }

    return id;
}

function convert() {
    let text = document.getElementById("input").value;
    let lines = text.split("\n");

    let result = [];

    for (let i = 0; i < lines.length; i++) {
        let url = lines[i].trim();
        if (!url) continue;

        let id = getVideoId(url);

        if (id) {
            result.push(`'${id}'`);
        }
    }

    document.getElementById("result").innerText = result.join("\n");
}

function copyResult() {
    let text = document.getElementById("result").innerText;

    navigator.clipboard.writeText(text)
        .then(() => alert("Скопировано!"));
}

function clearAll() {
    document.getElementById("input").value = "";
    document.getElementById("result").innerText = "";
}
