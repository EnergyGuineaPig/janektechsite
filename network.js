(() => {
    const button = document.getElementById("jn-copy-address");
    const address = document.getElementById("jn-server-address");
    const label = document.getElementById("jn-copy-label");
    const status = document.getElementById("jn-copy-status");
    if (!button || !address || !label || !status) return;

    function fallbackCopy(text) {
        const input = document.createElement("textarea");
        input.value = text;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.left = "-9999px";
        document.body.appendChild(input);
        input.select();
        const copied = document.execCommand("copy");
        input.remove();
        button.focus({ preventScroll: true });
        if (!copied) throw new Error("Clipboard is unavailable");
    }

    let reset;
    button.addEventListener("click", async () => {
        const text = address.textContent.trim();
        try {
            if (navigator.clipboard && window.isSecureContext) {
                try { await navigator.clipboard.writeText(text); }
                catch (_) { fallbackCopy(text); }
            } else {
                fallbackCopy(text);
            }
            label.textContent = "Copied!";
            status.textContent = "Address copied. Paste it into Minecraft's Server Address field.";
            clearTimeout(reset);
            reset = setTimeout(() => { label.textContent = "Copy IP"; }, 2500);
        } catch (_) {
            label.textContent = "Copy IP";
            status.textContent = "Select the server address above and copy it manually.";
        }
    });
})();
