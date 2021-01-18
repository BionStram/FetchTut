function testGS() {

    const url = "https://script.google.com/macros/s/AKfycbzmBI-Vovi7Ai6qn_ewvWEtv-hSJS2DURYNgspUqwT0d5JhTLI/exec";

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent = d[0].status;
        });
}

//document.getElementById("btn").addEventListener("click", testGS());