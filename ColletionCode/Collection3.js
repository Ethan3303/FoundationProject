let coins = document.getElementsByClassName("coinimg");

for (let i = 0; i < coins.length; i++) {
    coins[i].addEventListener("click", function() {
        if (this.style.opacity === "0.5" || !this.style.opacity) {
            this.style.opacity = "1";
        } else {
            this.style.opacity = "0.5";
        }
    });
}

