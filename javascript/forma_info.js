document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("info_daudzuma_izvads");
    const ievads = document.getElementById("info_daudzuma_ievads");
    const a = 25000;
    const b = document.getElementById("sekundes_ladet");
    const result = document.getElementById("result");

    function updateResult() {
        const bValue = parseFloat(b.value) || 0;
        const total = a * bValue;
        result.value = total === 0 ? "" : total;
    }

    b.addEventListener("input", updateResult);

    updateResult();
});