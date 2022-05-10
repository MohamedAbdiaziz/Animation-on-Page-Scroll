<head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body{
    overflow-x: hidden;
}
section{
    position: relative;
    width: 100%;
    height: 100vh;
    background: #000;
    display: flex;
    justify-content: center;align-items: center;
}
section h2{
    color: #ffffff;
    font-size: 6rem;
    font-weight: 500;
}
.box{
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 100px;
}
.box h2{
    font-size: 3em;
}
.box2{
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 100px;
    background: #000;
}
.box2 h2{
    font-size: 3em;
    color: #ffffff;
}
  </style>
</head>
<body>
    <section>
        <h2>Scroll to Beginner</h2>
    </section>
    <div class="box">
        <h2 class="text1">Scroll Trigger is Awesome</h2>
        <h2 class="text2">This is my first code</h2>
        <h2 class="text3">How it is?</h2>
    </div>
    <div class="box2">
        <h2 class="text4">Mohamed Abdiaziz</h2>
        <h2 class="text5">+252619093882</h2>
        <h2 class="text6">maxamedcabdicasiis910@gmail.com</h2>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"></script>
    <script src="./script.js"></script>
</body>
