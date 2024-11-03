function calculateFLAMES() {
    const name1 = document.getElementById("name1").value.toLowerCase().replace(/\s+/g, '');
    const name2 = document.getElementById("name2").value.toLowerCase().replace(/\s+/g, '');
    
    if (name1 === "" || name2 === "") {
        document.getElementById("result").textContent = "Please enter both names!";
        return;
    }

    let name1Array = name1.split('');
    let name2Array = name2.split('');
    
    // Remove common characters
    name1Array.forEach(char => {
        const index = name2Array.indexOf(char);
        if (index !== -1) {
            name2Array.splice(index, 1);
        }
    });

    // Concatenate remaining letters
    let combined = name1Array.concat(name2Array).join('');
    let count = combined.length;
    let flames = ["Friends", "Lovers", "Affectionate", "Marriage", "Enemies", "Siblings"];
    let index = (count % flames.length) - 1;

    // Determine the result based on the index
    if (index >= 0) {
        document.getElementById("result").textContent = `Your relationship is: ${flames[index]}`;
    } else {
        document.getElementById("result").textContent = `Your relationship is: ${flames[flames.length - 1]}`;
    }
}
