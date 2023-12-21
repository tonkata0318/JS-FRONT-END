function sumTable() {
    const rows=Array.from(document.querySelectorAll("tr td:nth-child(even)"));
    rows.pop();
    let sum=0;
    rows.forEach((row) => {
        sum+=Number(row.textContent);
    });
    document.querySelector("#sum").textContent=sum;
}