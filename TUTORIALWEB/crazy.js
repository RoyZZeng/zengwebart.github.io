let wINdo = [ "vomiting leaf", "wandering trill" , "good dull filler", "really thick curve", "winnowy gullet", "random hearth", "full belly", "orange", "loud keyboard", "calculating turn", "burgeoning chest", "zinger"]

                let allcolors = ["blue", "green", "yellow", "red", "black", "white", "pink", "purple", "navy", "orange", "turquoise"]

                window.onscroll = function () {
                    document.getElementById("id1").innerHTML = wINdo[Math.floor(Math.random() * wINdo.length)];
                    document.getElementById("id2").innerHTML = wINdo[Math.floor(Math.random() * wINdo.length)];
                };

                document.getElementById("change").onclick = function() {
                    document.getElementById("id1").innerHTML = wINdo[Math.floor(Math.random() * wINdo.length)];
                    document.getElementById("id2").innerHTML = wINdo[Math.floor(Math.random() * wINdo.length)];
                };
                
                document.getElementById("flowers").onclick = function () {
                    document.getElementById("birds").style.display = "block";
                }

                document.getElementById("flowers").onmouseenter = function() {
                    this.style.backgroundImage = "url('images/flowers.png')";
                    this.style.opacity = ".6";
                    document.getElementById("link").style.color = "red";
                    this.style.backgroundColor = allcolors[Math.floor(Math.random() * wINdo.length)];
                    document.getElementById("link").style.border = "red dotted 60px";

                document.getElementById("link").style.backgroundImage = "url('images/flowers.png'), url('images/birds.png')";
                };

                document.getElementById("birds").onmouseleave = function() {
                    this.style.backgroundImage = "none";
                    this.style.opacity = "1";
                    document.getElementById("link").style.color = "black";
                    this.style.backgroundColor = allcolors[Math.floor(Math.random() * wINdo.length)];
                    document.getElementById("link").style.border = "purple dashed 60px";

                document.getElementById("link").style.backgroundImage = "conic-gradient(green, red, yellow, red, yellow, green)";
                };