// Preguntas originales de estudio basadas exclusivamente en 2 Corintios (referencias LBLA).
// Las explicaciones están parafraseadas; no reproducen el texto de la traducción.
const BANK = [
  {
    "d": 1,
    "q": "Según el saludo de la carta, ¿quiénes aparecen como remitentes junto a Pablo?",
    "o": [
      "Pedro y Juan",
      "Timoteo",
      "Silvano y Lucas",
      "Tito"
    ],
    "a": 1,
    "e": "Pablo incluye a Timoteo, a quien llama hermano, en el saludo inicial de la carta.",
    "r": "2 Corintios 1:1"
  },
  {
    "d": 1,
    "q": "¿Cómo describe Pablo a Dios al comienzo de la carta?",
    "o": [
      "Dios de toda consolación",
      "Dios de los ejércitos solamente",
      "Dios de los filósofos",
      "Dios de los tesoros"
    ],
    "a": 0,
    "e": "Pablo alaba a Dios como Padre misericordioso y fuente de todo consuelo.",
    "r": "2 Corintios 1:3"
  },
  {
    "d": 1,
    "q": "¿Para qué consuela Dios a sus hijos en sus tribulaciones?",
    "o": [
      "Para que nunca tengan dificultades",
      "Para que puedan consolar a otros",
      "Para que sean admirados",
      "Para que eviten servir"
    ],
    "a": 1,
    "e": "El consuelo recibido de Dios capacita para acompañar y consolar a quienes atraviesan aflicciones.",
    "r": "2 Corintios 1:4"
  },
  {
    "d": 1,
    "q": "¿Qué puso Dios en el corazón de los creyentes como garantía?",
    "o": [
      "Una corona de oro",
      "El Espíritu como garantía",
      "Una señal en la mano",
      "Una espada"
    ],
    "a": 1,
    "e": "Pablo enseña que Dios sella a los creyentes y les da el Espíritu como garantía.",
    "r": "2 Corintios 1:21-22"
  },
  {
    "d": 1,
    "q": "¿Qué pidió Pablo que hicieran los corintios con la persona que había causado tristeza y se había arrepentido?",
    "o": [
      "Que la rechazaran para siempre",
      "Que la castigaran públicamente",
      "Que la perdonaran y consolaran",
      "Que abandonaran la congregación"
    ],
    "a": 2,
    "e": "Pablo anima a perdonar y consolar a esa persona para que no sea consumida por demasiada tristeza.",
    "r": "2 Corintios 2:6-8"
  },
  {
    "d": 2,
    "q": "¿A qué compara Pablo el conocimiento de Cristo que Dios difunde por medio de los creyentes?",
    "o": [
      "A una fragancia",
      "A una lámpara apagada",
      "A una red de pesca",
      "A una corona terrenal"
    ],
    "a": 0,
    "e": "Pablo utiliza la imagen del aroma de Cristo, que se manifiesta por medio de quienes anuncian el evangelio.",
    "r": "2 Corintios 2:14-15"
  },
  {
    "d": 2,
    "q": "¿Dónde dice Pablo que está escrita la carta de Cristo?",
    "o": [
      "En tablas de piedra únicamente",
      "En tablas de corazones humanos",
      "En pergaminos del templo",
      "En las puertas de Jerusalén"
    ],
    "a": 1,
    "e": "La obra del Espíritu se describe como una inscripción en corazones, no hecha con tinta.",
    "r": "2 Corintios 3:2-3"
  },
  {
    "d": 2,
    "q": "¿Con qué compara Pablo el tesoro del evangelio que llevamos?",
    "o": [
      "Con vasos de barro",
      "Con recipientes de plata",
      "Con cofres de madera",
      "Con copas de oro"
    ],
    "a": 0,
    "e": "El tesoro está en recipientes frágiles para que la grandeza del poder sea reconocida como procedente de Dios.",
    "r": "2 Corintios 4:7"
  },
  {
    "d": 2,
    "q": "Según Pablo, ¿qué es lo que no se ve y es eterno?",
    "o": [
      "Las riquezas",
      "Las aflicciones",
      "Las cosas temporales",
      "Las cosas eternas"
    ],
    "a": 3,
    "e": "Pablo invita a fijar la mirada en lo que no se ve, pues lo invisible tiene carácter eterno.",
    "r": "2 Corintios 4:18"
  },
  {
    "d": 2,
    "q": "¿Qué sucede con quien está en Cristo?",
    "o": [
      "Es una nueva creación",
      "Ya no necesita aprender",
      "Nunca enfrenta pruebas",
      "Se vuelve perfecto en todo"
    ],
    "a": 0,
    "e": "Pablo enseña que en Cristo hay una nueva creación: lo antiguo ha pasado y comienza una nueva realidad.",
    "r": "2 Corintios 5:17"
  },
  {
    "d": 3,
    "q": "¿Qué ministerio dice Pablo que Dios confió a los creyentes?",
    "o": [
      "El de acumular riquezas",
      "El de la reconciliación",
      "El de juzgar a todas las naciones",
      "El de construir ciudades"
    ],
    "a": 1,
    "e": "Dios reconcilia consigo por medio de Cristo y encomienda el mensaje de reconciliación.",
    "r": "2 Corintios 5:18-19"
  },
  {
    "d": 3,
    "q": "¿Cómo debe dar cada persona, según la enseñanza de Pablo?",
    "o": [
      "Con tristeza y obligación",
      "Solo cuando sobra dinero",
      "Como decidió en su corazón, no de mala gana ni por obligación",
      "Para recibir reconocimiento"
    ],
    "a": 2,
    "e": "Pablo enseña que Dios ama al dador alegre y que cada uno dé según lo haya decidido en su corazón.",
    "r": "2 Corintios 9:7"
  },
  {
    "d": 3,
    "q": "¿Qué principio utiliza Pablo al hablar de la generosidad?",
    "o": [
      "El que siembra escasamente, también segará escasamente",
      "El que guarda todo, siempre tendrá más",
      "El que da nunca tendrá necesidad",
      "El que siembra no necesita cosechar"
    ],
    "a": 0,
    "e": "Pablo compara la generosidad con la siembra: quien siembra abundantemente también cosechará abundantemente.",
    "r": "2 Corintios 9:6"
  },
  {
    "d": 3,
    "q": "¿Qué respuesta recibió Pablo del Señor respecto a su debilidad?",
    "o": [
      "Que nunca volvería a sufrir",
      "Que su gracia le bastaba",
      "Que debía abandonar su misión",
      "Que recibiría riquezas"
    ],
    "a": 1,
    "e": "El Señor respondió a Pablo que su gracia era suficiente y que su poder se perfecciona en la debilidad.",
    "r": "2 Corintios 12:9"
  },
  {
    "d": 3,
    "q": "¿Por qué dice Pablo que puede gloriarse en sus debilidades?",
    "o": [
      "Para demostrar superioridad",
      "Para que repose en él el poder de Cristo",
      "Para evitar servir a otros",
      "Para recibir honores humanos"
    ],
    "a": 1,
    "e": "Pablo acepta sus debilidades para que el poder de Cristo habite en él y se manifieste con claridad.",
    "r": "2 Corintios 12:9-10"
  }
];
const POINTS_PER_QUESTION=5;
const TOTAL_QUESTIONS=BANK.length;
const PRIZES=Array.from({length:TOTAL_QUESTIONS},(_,i)=>(i+1)*POINTS_PER_QUESTION);
const state={questions:[],index:0,correct:0,answered:false,used:{fifty:false,audience:false,friend:false},lastCorrect:false};
const $=id=>document.getElementById(id);
function screen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.id===id));window.scrollTo({top:0,behavior:"smooth"});}
function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
function start(){state.questions=shuffle(BANK);state.index=0;state.correct=0;state.answered=false;state.lastCorrect=false;state.used={fifty:false,audience:false,friend:false};["fifty","audience","friend"].forEach(id=>$(id).disabled=false);$("score").textContent="0";$("lifeline-result").textContent="";buildLadder();screen("game");render();}
function buildLadder(){$("prize-ladder").innerHTML=PRIZES.map((p,i)=>'<li data-step="'+i+'"><span>'+(i+1)+'</span><b>'+p+' pts</b></li>').reverse().join("");}
function render(){const q=state.questions[state.index];state.answered=false;$("q-number").textContent="PREGUNTA "+(state.index+1)+" DE "+TOTAL_QUESTIONS;$("difficulty").textContent=q.d===1?"FÁCIL":q.d===2?"INTERMEDIO":"DIFÍCIL";$("progress").style.width=(state.index/TOTAL_QUESTIONS*100)+"%";$("question").textContent=q.q;$("feedback").hidden=true;$("lifeline-result").textContent="";$("answers").innerHTML=q.o.map((v,i)=>'<button class="answer" data-index="'+i+'"><span>'+String.fromCharCode(65+i)+'</span><b>'+v+'</b></button>').join("");document.querySelectorAll(".answer").forEach(b=>b.addEventListener("click",()=>answer(Number(b.dataset.index))));document.querySelectorAll("#prize-ladder li").forEach(li=>{li.classList.toggle("current",Number(li.dataset.step)===state.index);li.classList.toggle("passed",Number(li.dataset.step)<state.index);});}
function answer(n){if(state.answered)return;state.answered=true;const q=state.questions[state.index],ok=n===q.a;state.lastCorrect=ok;document.querySelectorAll(".answer").forEach((b,i)=>{b.disabled=true;if(i===q.a)b.classList.add("right");if(i===n&&!ok)b.classList.add("wrong");});if(ok){state.correct++;$("score").textContent=(state.correct*POINTS_PER_QUESTION).toString();}$("feedback-title").textContent=ok?"¡Respuesta correcta! +5 puntos":"Respuesta incorrecta";$("feedback-title").className=ok?"good":"bad";$("explanation").textContent=q.e;$("reference").textContent="REFERENCIA: "+q.r;$("continue").textContent=state.index===TOTAL_QUESTIONS-1||!ok?"VER RESULTADO":"SIGUIENTE PREGUNTA →";$("feedback").hidden=false;}
function finish(){const points=state.correct*POINTS_PER_QUESTION,won=state.correct===TOTAL_QUESTIONS;$("end-points").textContent=points.toString();$("end-title").textContent=won?"¡COMPLETASTE 2 CORINTIOS!":state.correct===0?"¡Sigue estudiando 2 Corintios!":"¡Buen esfuerzo!";$("end-copy").textContent="Respondiste correctamente "+state.correct+" de "+TOTAL_QUESTIONS+" preguntas. Cada acierto vale "+POINTS_PER_QUESTION+" puntos.";$("end-icon").textContent=won?"🏆":"📖";$("end-reference").textContent="Tu puntuación final: "+points+" de "+(TOTAL_QUESTIONS*POINTS_PER_QUESTION)+" puntos." ;screen("end");}
function use(id){if(state.used[id]||state.answered)return;state.used[id]=true;$(id).disabled=true;const q=state.questions[state.index];if(id==="fifty"){const wrong=shuffle(q.o.map((_,i)=>i).filter(i=>i!==q.a)).slice(0,2);document.querySelectorAll(".answer").forEach((b,i)=>{if(wrong.includes(i)){b.disabled=true;b.classList.add("removed");b.querySelector("b").textContent="Opción descartada";}});$("lifeline-result").textContent="Comodín 50:50: dos opciones incorrectas eliminadas.";}else if(id==="audience"){const pct=Array(4).fill(0),rest=[0,1,2,3].filter(i=>i!==q.a);pct[q.a]=55+Math.floor(Math.random()*26);let remain=100-pct[q.a];rest.forEach((v,i)=>{pct[v]=i===2?remain:Math.floor(Math.random()*(remain+1));remain-=pct[v];});$("lifeline-result").textContent="Votación del público: "+pct.map((v,i)=>String.fromCharCode(65+i)+" "+v+"%").join(" · ");}else{$("lifeline-result").textContent="Tu amigo bíblico te aconseja: lee con atención y recuerda el contexto de 2 Corintios.";} }
$("start").addEventListener("click",start);$("again").addEventListener("click",start);$("back-home").addEventListener("click",()=>screen("home"));$("brand-home").addEventListener("click",e=>{e.preventDefault();screen("home");});$("exit").addEventListener("click",()=>{if(confirm("¿Deseas salir de la partida? Perderás el progreso."))screen("home");});$("continue").addEventListener("click",()=>{if(!state.answered)return;if(!state.lastCorrect||state.index===TOTAL_QUESTIONS-1)finish();else{state.index++;render();}});["fifty","audience","friend"].forEach(id=>$(id).addEventListener("click",()=>use(id)));
buildLadder();
