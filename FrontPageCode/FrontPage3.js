(function() {
    let c1=document.getElementById("£2");
    c1.onclick=function(){
        window.open("https://www.royalmint.com/discover/uk-coins/coin-design-and-specifications/two-pound-coin/","_blank");
      };
    c1.className="CoinsG";
    c1.style.width="20%"; 
    c1.style.height="20%";
    c1.style.marginLeft="20%";
    document.body.appendChild(c1);

    let c2=document.getElementById("£1");
    c2.onclick=function(){
        window.open("https://www.royalmint.com/discover/uk-coins/coin-design-and-specifications/one-pound-coin/","_blank");
      };
    c2.className="CoinsG";
    c2.style.width="15%"; 
    c2.style.height="15%";
    c2.style.float="right";
    c2.style.marginRight="20%";
    c2.style.marginTop="3%";
    document.body.appendChild(c2);

    let c3=document.getElementById("1p");
    c3.onclick=function(){
        window.open("https://www.royalmint.com/discover/uk-coins/coin-design-and-specifications/one-penny-coin/","_blank");
      };
    c3.className="CoinsB";
    c3.style.width="20%";
    c3.style.height="20%";
    c3.style.float="left";
    c3.style.marginTop="25%";
    c3.style.marginLeft="20%";
    document.body.appendChild(c3);

    let c4=document.getElementById("2p");
    c4.onclick=function(){
        window.open("https://www.royalmint.com/discover/uk-coins/coin-design-and-specifications/two-pence-coin/","_blank");
      };
    c4.className="CoinsB";
    c4.style.width="20%"; 
    c4.style.height="25%";
    c4.style.float="right";
    c4.style.marginRight="20%";
    document.body.appendChild(c4);

    let c5=document.getElementById("5p");
    c5.onclick=function(){
        window.open("https://www.royalmint.com/discover/uk-coins/coin-design-and-specifications/five-pence-coin/","_blank");
      };
    c5.className="CoinsS";
    c5.style.width="20%"; 
    c5.style.float="right"
    c5.style.height="20%";
    c5.style.marginTop="15%";
    document.body.appendChild(c5);

    let c6=document.getElementById("10p");
    c6.onclick=function(){
        window.open("https://www.royalmint.com/discover/uk-coins/coin-design-and-specifications/ten-pence-coin/","_blank");
      };
    c6.className="CoinsS";
    c6.style.width="20%"; 
    c6.style.height="20%";
    c6.style.float="left";
    c6.style.marginLeft="-20%";
    document.body.appendChild(c6);

    let c7=document.getElementById("20p");
    c7.onclick=function(){
        window.open("https://www.royalmint.com/discover/uk-coins/coin-design-and-specifications/twenty-pence-coin/","_blank");
      };
    c7.className="CoinsS";
    c7.style.width="20%"; 
    c7.style.height="20%";
    c7.style.float="right";
    c7.style.marginTop="-10%";
    c7.style.marginRight="20%";
    document.body.appendChild(c7);

    let c8=document.getElementById("50p");
    c8.onclick=function(){
        window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcLssSc5Pxzic74BhNnqSW8IouZGzC2wl16Ks4_xi-Q&s","_blank");
      };
    c8.className="CoinsS";
    c8.style.width="20%"; 
    c8.style.height="20%";
    c8.style.marginBottom="-60%";
    document.body.appendChild(c8);

    let foot = document.getElementById("Bottom")
      foot.style.background="darkslategray";
      foot.style.height="500px";
      foot.style.marginTop="65%";
    document.body.appendChild(foot)


    let iologo = document.getElementsByClassName("io");

    for (let i = 0; i < iologo.length; i++) {
        iologo[i].addEventListener("click", function() {
            window.open("#");
        });
    }
  })();