let btn1 = document.getElementById("myButton");
        let btn2 = document.getElementById("myButton2");
        let copyDiv = document.querySelector(".copyCode");

        const hexValues = () =>{
            let myHexValues = "0123456789abcdef";
            let colors = "#";
            for(let i=0 ; i<6;i++){
                colors = colors+ myHexValues[Math.floor(Math.random() *16)];
            }
            return colors;

        }
        let rgb1 ="#000";
        let rgb2 ="#fff";
        


        const handelButton1 = () =>{
             rgb1 = hexValues();
             btn1.innerText = rgb1;
            console.log(rgb1);
            document.body.style.backgroundImage = 
            `linear-gradient(to right , ${rgb1} , ${rgb2}`;
            copyDiv.innerHTML = 
            `background-image : linear-gradient(to right ,  ${rgb1},${rgb2} )`;
        };

        const handelButton2 = () =>{
             rgb2 = hexValues();
             btn2.innerText = rgb2;
            console.log(rgb2);
            document.body.style.backgroundImage = 
            `linear-gradient(to right , ${rgb1} ,${rgb2}`;
            copyDiv.innerHTML = 
            `background-image : linear-gradient(to right , ${rgb1}, ${rgb2})`;

        }
        
        

        btn1.addEventListener("click" , handelButton1);
        btn2.addEventListener("click" , handelButton2);