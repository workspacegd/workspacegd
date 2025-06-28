
async function startDownload() {
    const url = document.getElementById("videoUrl").value.trim();
    if (!url) {
        alert("Please paste a valid video URL.");
        return;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Processing your request...";

    try {
        // This example uses an external download API as a placeholder.
        const encodedUrl = encodeURIComponent(url);
        const apiUrl = `https://api.vevioz.com/api/button/?url=${encodedUrl}`;

        // Open in new tab or iframe or redirect for download
        window.open(apiUrl, "_blank");
        resultDiv.innerHTML = "Download opened in new tab.";

    } catch (error) {
        resultDiv.innerHTML = "Failed to process video. Try again.";
        console.error(error);
    }
}
