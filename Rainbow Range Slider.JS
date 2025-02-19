        const rangeWrapper = document.getElementById("rangeWrapper");
        const range = document.getElementById("range");
        
        range.addEventListener("input", (e) => {
            rangeWrapper.style.setProperty("--progress", `${range.value}%`);
        });
    