<script setup lang='ts'>
</script>

<template>
  <div class="rasengan">
  <div class="line line1"></div>
  <div class="line line2"></div>
  <div class="line line3"></div>
  <div class="line line4"></div>
  <div class="line line5"></div>
  <div class="line line6"></div>
  <div class="line line7"></div>
  <div class="line line8"></div>
  <div class="line line9"></div>
  <div class="line line10"></div>
  <div class="line line11"></div>
  <div class="line line12"></div>
  <div class="line line13"></div>
  <div class="line line14"></div>
  <div class="line line15"></div>
  <div class="line line16"></div>
  <div class="line line17"></div>
  <div class="line line18"></div>
  <div class="line line19"></div>
  <div class="line line20"></div>
  <div class="line line21"></div>
  <div class="line line22"></div>
  <div class="line line23"></div>
  <div class="line line24"></div>
  <div class="line line25"></div>
  <div class="line line26"></div>
  <div class="line line27"></div>
  <div class="line line28"></div>
  <div class="line line29"></div>
  <div class="line line30"></div>
  <div class="line line31"></div>
  <div class="line line32"></div>
  <div class="line line33"></div>
  <div class="line line34"></div>
  <div class="line line35"></div>
  <div class="line line36"></div>
  <div class="line line37"></div>
  <div class="line line38"></div>
  <div class="line line39"></div>
  <div class="line line40"></div>
  <div class="line line41"></div>
  <div class="line line42"></div>
  <div class="line line43"></div>
  <div class="line line44"></div>
  <div class="line line45"></div>
  <div class="line line46"></div>
  <div class="line line47"></div>
  <div class="line line48"></div>
  <div class="line line49"></div>
  <div class="line line50"></div>
  <div class="line line51"></div>
  <div class="line line52"></div>
  <div class="line line53"></div>
  <div class="line line54"></div>
  <div class="line line55"></div>
  <div class="line line56"></div>
  <div class="line line57"></div>
  <div class="line line58"></div>
  <div class="line line59"></div>
  <div class="line line60"></div>
  <div class="line line61"></div>
  <div class="line line62"></div>
  <div class="line line63"></div>
  <div class="line line64"></div>
  <div class="line line65"></div>
  <div class="line line66"></div>
  <div class="line line67"></div>
  <div class="line line68"></div>
  <div class="line line69"></div>
  <div class="line line70"></div>
  <div class="line line71"></div>
  <div class="line line72"></div>
  <div class="line line73"></div>
  <div class="line line74"></div>
  <div class="line line75"></div>
  <div class="line line76"></div>
  <div class="line line77"></div>
  <div class="line line78"></div>
  <div class="line line79"></div>
  <div class="line line80"></div>
  <div class="line line81"></div>
  <div class="line line82"></div>
  <div class="line line83"></div>
  <div class="line line84"></div>
  <div class="line line85"></div>
  <div class="line line86"></div>
  <div class="line line87"></div>
  <div class="line line88"></div>
  <div class="line line89"></div>
  <div class="line line90"></div>
  <div class="line line91"></div>
  <div class="line line92"></div>
  <div class="line line93"></div>
  <div class="line line94"></div>
  <div class="line line95"></div>
  <div class="line line96"></div>
  <div class="line line97"></div>
  <div class="line line98"></div>
  <div class="line line99"></div>
  <div class="line line100"></div>
</div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #262626;
  background-repeat: repeat-y;
  background-position: center;
}

.rasengan {
  position: absolute;
  top: 11%;
  left: 35%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 25px;
  perspective: 1000px;
  background: radial-gradient(#fff 5%, #2994f2 40%);
  border-radius: 50%;
  animation: twinkling 1.5s infinite linear;
}

.rasengan .line {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, .5);
  border-radius: 50%;
  box-shadow: 0 0 2px #fff;
}

/* Animation de rotation */
@keyframes rotating {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateZ(360deg) rotateX(360deg) rotateY(360deg);
  }
}

/* Animation de scintillement */
@keyframes twinkling {
  0%, 100% {
    box-shadow: 0 0 3px 0px #fff, 0 0 30px 15px #2994f2;
  }
  20% {
    box-shadow: 0 0 3px 1px #fff, 0 0 30px 10px #2994f2;
  }
  40% {
    box-shadow: 0 0 5px 0px #fff, 0 0 20px 15px #2994f2;
  }
  60% {
    box-shadow: 0 0 3px 1px #fff, 0 0 30px 15px #2994f2;
  }
  80% {
    box-shadow: 0 0 5px 0px #fff, 0 0 25px 10px #2994f2;
  }
}
</style>
