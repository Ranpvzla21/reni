// Desafío Bíblico FTU 2026 · Preguntas originales basadas exclusivamente en 2 Corintios.
// Referencias de estudio LBLA. Las explicaciones son paráfrasis, no citas extensas.
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
  ,{
    "d": 3,
    "q": "¿Qué exhorta Pablo a hacer para comprobar la fe?",
    "o": ["Examinarse a uno mismo", "Compararse con otros", "Buscar reconocimiento", "Evitar toda corrección"],
    "a": 0,
    "e": "Pablo llama a examinarse para comprobar que uno está en la fe y reconocer que Jesucristo está en nosotros.",
    "r": "2 Corintios 13:5"
  },
  {
    "d": 1,
    "q": "¿Qué afirma Pablo acerca de las promesas de Dios?",
    "o": [
      "Que son inciertas",
      "Que en Cristo son sí y amén",
      "Que dependen de la riqueza",
      "Que solo fueron para Israel"
    ],
    "a": 1,
    "e": "Pablo enseña que las promesas de Dios encuentran su afirmación en Cristo.",
    "r": "2 Corintios 1:20"
  },
  {
    "d": 1,
    "q": "¿Qué actitud dice Pablo que tuvo al visitar a los corintios?",
    "o": [
      "Tristeza y dureza en todo momento",
      "Alegría y sencillez absoluta",
      "No quiso volver con tristeza",
      "Buscó imponerse por fuerza"
    ],
    "a": 2,
    "e": "Pablo explica que evitó una visita que pudiera producir tristeza y quiso tratarles con amor.",
    "r": "2 Corintios 2:1-4"
  },
  {
    "d": 1,
    "q": "¿Quién hace a los creyentes competentes para servir al nuevo pacto?",
    "o": [
      "La capacidad humana",
      "Dios",
      "La tradición",
      "La elocuencia"
    ],
    "a": 1,
    "e": "La suficiencia para este ministerio procede de Dios, no de la capacidad humana.",
    "r": "2 Corintios 3:5-6"
  },
  {
    "d": 1,
    "q": "¿Qué dice Pablo que ocurre donde está el Espíritu del Señor?",
    "o": [
      "Hay libertad",
      "Hay temor permanente",
      "No hay transformación",
      "Desaparece la esperanza"
    ],
    "a": 0,
    "e": "Pablo afirma que donde está el Espíritu del Señor hay libertad.",
    "r": "2 Corintios 3:17"
  },
  {
    "d": 1,
    "q": "¿Qué predicaban Pablo y sus colaboradores?",
    "o": [
      "A sí mismos como señores",
      "A Jesucristo como Señor",
      "La sabiduría de este mundo",
      "La superioridad de los apóstoles"
    ],
    "a": 1,
    "e": "El centro de la proclamación apostólica era Jesucristo como Señor.",
    "r": "2 Corintios 4:5"
  },
  {
    "d": 1,
    "q": "¿Qué renunció Pablo a hacer en su ministerio?",
    "o": [
      "A la verdad",
      "A la oración",
      "A las cosas ocultas y vergonzosas",
      "A anunciar a Cristo"
    ],
    "a": 2,
    "e": "Pablo describe un ministerio transparente que no manipula ni adultera la palabra de Dios.",
    "r": "2 Corintios 4:2"
  },
  {
    "d": 1,
    "q": "¿Qué espera el creyente según la enseñanza sobre la morada celestial?",
    "o": [
      "Una morada eterna de Dios",
      "Una casa hecha por manos humanas",
      "Un reino temporal",
      "Una vida sin responsabilidad"
    ],
    "a": 0,
    "e": "Pablo habla de una morada eterna en los cielos, no hecha por manos humanas.",
    "r": "2 Corintios 5:1"
  },
  {
    "d": 1,
    "q": "¿Qué impulsa a los mensajeros de Cristo?",
    "o": [
      "El deseo de fama",
      "El amor de Cristo",
      "La rivalidad",
      "El temor a las personas"
    ],
    "a": 1,
    "e": "Pablo declara que el amor de Cristo es el motivo que gobierna su servicio.",
    "r": "2 Corintios 5:14"
  },
  {
    "d": 2,
    "q": "¿Qué recomienda Pablo a los creyentes respecto a la gracia recibida?",
    "o": [
      "Recibirla en vano",
      "No recibirla en vano",
      "Guardarla en secreto",
      "Cambiarla por méritos"
    ],
    "a": 1,
    "e": "Pablo exhorta a no recibir en vano la gracia de Dios.",
    "r": "2 Corintios 6:1"
  },
  {
    "d": 2,
    "q": "¿Qué invitación hace Pablo respecto a la relación con los incrédulos?",
    "o": [
      "Unirse en yugo desigual",
      "No unirse en yugo desigual",
      "Evitar toda conversación",
      "Buscar poder político"
    ],
    "a": 1,
    "e": "Pablo exhorta a no formar un yugo desigual y llama a vivir en santidad.",
    "r": "2 Corintios 6:14-18"
  },
  {
    "d": 2,
    "q": "¿Qué produce la tristeza conforme a la voluntad de Dios?",
    "o": [
      "Muerte sin esperanza",
      "Arrepentimiento para salvación",
      "Orgullo",
      "Indiferencia"
    ],
    "a": 1,
    "e": "La tristeza conforme a Dios produce arrepentimiento que conduce a la salvación.",
    "r": "2 Corintios 7:10"
  },
  {
    "d": 2,
    "q": "¿Qué ejemplo de generosidad menciona Pablo entre las iglesias?",
    "o": [
      "Las iglesias de Macedonia",
      "Los comerciantes de Corinto",
      "Los soldados romanos",
      "Los habitantes de Atenas"
    ],
    "a": 0,
    "e": "Pablo presenta a las iglesias de Macedonia como ejemplo de generosidad aun en medio de pruebas.",
    "r": "2 Corintios 8:1-2"
  },
  {
    "d": 2,
    "q": "¿Qué hizo Cristo siendo rico, según Pablo?",
    "o": [
      "Se hizo pobre por amor a nosotros",
      "Buscó riquezas terrenales",
      "Evitó relacionarse con pobres",
      "Renunció a su misión"
    ],
    "a": 0,
    "e": "Pablo recuerda la gracia de Cristo, quien se hizo pobre para enriquecer a otros por su pobreza.",
    "r": "2 Corintios 8:9"
  },
  {
    "d": 2,
    "q": "¿Qué principio debe guiar la contribución de cada uno?",
    "o": [
      "Dar más de lo que tiene",
      "Dar conforme a lo que tiene",
      "Dar solo para ser visto",
      "Dar por presión"
    ],
    "a": 1,
    "e": "La contribución se acepta según lo que uno tiene, no según lo que no tiene.",
    "r": "2 Corintios 8:12"
  },
  {
    "d": 2,
    "q": "¿Qué dice Pablo que Dios puede hacer con toda gracia?",
    "o": [
      "Hacer que abunde para los creyentes",
      "Reservarla solo para unos pocos",
      "Retirarla ante cualquier dificultad",
      "Venderla por méritos"
    ],
    "a": 0,
    "e": "Dios puede hacer abundar toda gracia para que haya suficiencia y abundancia para buenas obras.",
    "r": "2 Corintios 9:8"
  },
  {
    "d": 2,
    "q": "¿Qué resultado produce la generosidad de los creyentes además de suplir necesidades?",
    "o": [
      "Muchas acciones de gracias a Dios",
      "Rivalidad entre iglesias",
      "Orgullo personal",
      "Desinterés espiritual"
    ],
    "a": 0,
    "e": "La ayuda no solo suple necesidades, también provoca abundantes acciones de gracias a Dios.",
    "r": "2 Corintios 9:12"
  },
  {
    "d": 2,
    "q": "¿Con qué armas dice Pablo que se combate en la guerra espiritual?",
    "o": [
      "Armas carnales",
      "Armas poderosas en Dios",
      "Armas de hierro",
      "Armas de negociación"
    ],
    "a": 1,
    "e": "Las armas del ministerio no son carnales, sino poderosas en Dios para derribar fortalezas.",
    "r": "2 Corintios 10:3-4"
  },
  {
    "d": 2,
    "q": "¿Qué debe llevar cautivo el creyente?",
    "o": [
      "Todo pensamiento a la obediencia de Cristo",
      "Toda opinión ajena",
      "Toda riqueza",
      "Toda tradición humana"
    ],
    "a": 0,
    "e": "Pablo describe la tarea de llevar todo pensamiento cautivo a la obediencia de Cristo.",
    "r": "2 Corintios 10:5"
  },
  {
    "d": 2,
    "q": "¿De quién debe gloriarse el que se gloría?",
    "o": [
      "De sí mismo",
      "Del Señor",
      "De su linaje",
      "De sus logros"
    ],
    "a": 1,
    "e": "La aprobación verdadera viene del Señor; por eso quien se gloría debe gloriarse en Él.",
    "r": "2 Corintios 10:17-18"
  },
  {
    "d": 3,
    "q": "¿A qué compara Pablo su preocupación por la iglesia?",
    "o": [
      "A los celos de Dios",
      "A una competencia política",
      "A una deuda comercial",
      "A una disputa familiar"
    ],
    "a": 0,
    "e": "Pablo expresa un celo piadoso para presentar a la iglesia como una virgen pura a Cristo.",
    "r": "2 Corintios 11:2"
  },
  {
    "d": 3,
    "q": "¿Qué dice Pablo que Satanás puede hacer para engañar?",
    "o": [
      "Disfrazarse como ángel de luz",
      "Anular la palabra de Dios",
      "Cambiar el evangelio verdadero",
      "Impedir toda oración"
    ],
    "a": 0,
    "e": "Pablo advierte que Satanás se disfraza como ángel de luz y que sus servidores pueden aparentar justicia.",
    "r": "2 Corintios 11:14-15"
  },
  {
    "d": 3,
    "q": "¿Qué experiencia extraordinaria relata Pablo en 2 Corintios 12?",
    "o": [
      "Una visión y revelación del Señor",
      "La reconstrucción del templo",
      "Una visita a Egipto",
      "Un encuentro con César"
    ],
    "a": 0,
    "e": "Pablo relata una experiencia de visión y revelación, hablando de un hombre arrebatado hasta el tercer cielo.",
    "r": "2 Corintios 12:1-4"
  },
  {
    "d": 3,
    "q": "¿Qué dice Pablo sobre el aguijón en la carne?",
    "o": [
      "Que le fue dado para evitar exaltarse",
      "Que lo convirtió en gobernante",
      "Que desapareció inmediatamente",
      "Que era una señal de riqueza"
    ],
    "a": 0,
    "e": "Pablo relaciona el aguijón con el propósito de no exaltarse por las revelaciones recibidas.",
    "r": "2 Corintios 12:7"
  },
  {
    "d": 3,
    "q": "¿Qué pide Pablo a los corintios al cerrar la carta?",
    "o": [
      "Que se perfeccionen, se consuelen y vivan en paz",
      "Que abandonen la fe",
      "Que busquen honores",
      "Que dejen de congregarse"
    ],
    "a": 0,
    "e": "La exhortación final llama a la restauración, el ánimo, la unidad y la paz.",
    "r": "2 Corintios 13:11"
  }
];
const POINTS_PER_QUESTION = 5;
const TOTAL_QUESTIONS = BANK.length;
const SOLO_QUESTIONS = 15;
const DUEL_QUESTIONS = 8;
const STAGES = [{at:5,label:'ETAPA 1 · 25 PTS'},{at:10,label:'ETAPA 2 · 50 PTS'},{at:15,label:'GRAN FINAL · 75 PTS'}];
const $ = id => document.getElementById(id);
const state = {
  mode: "single", questions: [], index: 0, correct: 0, answered: false,
  used: { fifty:false, audience:false, friend:false }, lastCorrect:false,
  players: [], soloName:"", turn:0, round:0, sets:[], totalAnswered:0
};
function screen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.id===id));
  window.scrollTo({top:0,behavior:"smooth"});
}
function shuffle(items){
  const a=[...items];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function resetLifelines(){
  state.used={fifty:false,audience:false,friend:false};
  ["fifty","audience","friend"].forEach(id=>{const el=$(id);if(el)el.disabled=false;});
  $("lifeline-result").textContent="";
}
function buildLadder(){
  const count=state.mode==="single"?SOLO_QUESTIONS:DUEL_QUESTIONS;
  $("prize-ladder").innerHTML=Array.from({length:count},(_,i)=>i+1).reverse()
    .map(n=>{const stage=STAGES.find(s=>s.at===n);return '<li data-step="'+(n-1)+'" class="'+(stage?'milestone':'')+'"><span>'+n+'</span><b>'+(n*POINTS_PER_QUESTION)+' pts</b>'+(stage?'<i>'+stage.label+'</i>':'')+'</li>';}).join("");
}
function startSingle(){
  state.soloName=$("name-one").value.trim()||"Participante";
  state.mode="single";state.questions=[1,2,3].flatMap(d=>shuffle(BANK.filter(q=>q.d===d)).slice(0,5));state.index=0;state.correct=0;
  state.answered=false;state.lastCorrect=false;state.players=[];state.totalAnswered=0;
  resetLifelines();$("score").textContent="0";$("duel-scoreboard").hidden=true;
  buildLadder();screen("game");render();
}
function startCompetition(mode){
  const defaults=mode==="teams"?["Equipo 1","Equipo 2"]:["Participante 1","Participante 2"];
  const names=[$("name-one").value.trim(),$("name-two").value.trim()].map((name,i)=>name||defaults[i]);
  const picked=shuffle(BANK);
  if(picked.length<16){alert("Se necesitan al menos 16 preguntas para esta modalidad.");return;}
  state.mode=mode;
  state.players=names.map(name=>({name,score:0,correct:0}));
  state.sets=[picked.slice(0,8),picked.slice(8,16)];
  state.turn=0;state.round=0;state.totalAnswered=0;state.answered=false;state.lastCorrect=false;
  state.questions=state.sets[0];state.correct=0;
  $("duel-scoreboard").hidden=false;
  $("label-one").textContent=names[0];$("label-two").textContent=names[1];
  $("duel-score-one").textContent="0";$("duel-score-two").textContent="0";
  $("side-one").classList.add("active-turn");$("side-two").classList.remove("active-turn");
  $("score").textContent="0";resetLifelines();buildLadder();screen("game");render();
}
function currentQuestion(){
  return state.mode==="single"?state.questions[state.index]:state.sets[state.turn][state.round];
}
function render(){
  const q=currentQuestion();state.answered=false;
  const questionNo=state.mode==="single"?state.index+1:state.round+1;
  const total=state.mode==="single"?SOLO_QUESTIONS:DUEL_QUESTIONS;
  $("q-number").textContent=state.mode==="single"?state.soloName.toUpperCase()+" · PREGUNTA "+questionNo+" DE "+total:
    state.players[state.turn].name.toUpperCase()+" · TURNO "+(state.turn+1)+" · PREGUNTA "+questionNo+" DE 8";
  $("difficulty").textContent=q.d===1?"FÁCIL":q.d===2?"INTERMEDIO":"DIFÍCIL";
  $("progress").style.width=((state.mode==="single"?state.index:state.totalAnswered)/ (state.mode==="single"?SOLO_QUESTIONS:16)*100)+"%";
  $("question").textContent=q.q;$("feedback").hidden=true;$("lifeline-result").textContent="";
  $("answers").innerHTML=q.o.map((v,i)=>'<button class="answer" data-index="'+i+'"><span>'+String.fromCharCode(65+i)+'</span><b>'+v+'</b></button>').join("");
  document.querySelectorAll(".answer").forEach(b=>b.addEventListener("click",()=>answer(Number(b.dataset.index))));
  const ladderStep=state.mode==="single"?state.index:state.round;
  document.querySelectorAll("#prize-ladder li").forEach(li=>{
    const step=Number(li.dataset.step);li.classList.toggle("current",step===ladderStep);
    li.classList.toggle("passed",step<ladderStep);
  });
  if(state.mode!=="single"){
    $("score").textContent=state.players[state.turn].score;
    $("side-one").classList.toggle("active-turn",state.turn===0);
    $("side-two").classList.toggle("active-turn",state.turn===1);
  }else $("score").textContent=String(state.correct*POINTS_PER_QUESTION);
}
function answer(n){
  if(state.answered)return;state.answered=true;
  const q=currentQuestion(),ok=n===q.a;state.lastCorrect=ok;
  document.querySelectorAll(".answer").forEach((b,i)=>{
    b.disabled=true;if(i===q.a)b.classList.add("right");if(i===n&&!ok)b.classList.add("wrong");
  });
  if(ok){
    if(state.mode==="single")state.correct++;
    else{state.players[state.turn].correct++;state.players[state.turn].score+=POINTS_PER_QUESTION;
      $("duel-score-"+(state.turn===0?"one":"two")).textContent=state.players[state.turn].score;}
  }
  $("score").textContent=state.mode==="single"?String(state.correct*POINTS_PER_QUESTION):String(state.players[state.turn].score);
  const stageReached=state.mode==="single"&&ok?STAGES.find(stage=>stage.at===state.correct):null;
  $("feedback-title").textContent=stageReached?"¡ETAPA SUPERADA! "+stageReached.label:ok?"¡Respuesta correcta! +5 puntos":"Respuesta incorrecta";

  $("feedback-title").className=ok?"good":"bad";
  $("explanation").textContent=q.e+(stageReached?" Has asegurado la etapa de "+(state.correct*POINTS_PER_QUESTION)+" puntos. ¡Sigue avanzando!":"");$("reference").textContent="REFERENCIA: "+q.r;
  $("continue").textContent=state.mode==="single"?
    (state.index===SOLO_QUESTIONS-1||!ok?"VER RESULTADO":"SIGUIENTE PREGUNTA →"):
    (state.totalAnswered===15?"VER GANADOR":"SIGUIENTE TURNO →");
  $("feedback").hidden=false;
}
function finish(){
  if(state.mode==="single"){
    const points=state.correct*POINTS_PER_QUESTION;
    $("end-title").textContent=state.correct===SOLO_QUESTIONS?"¡COMPLETASTE 2 CORINTIOS!":state.correct===0?"¡Sigue estudiando 2 Corintios!":"¡Buen esfuerzo!";
    $("end-icon").textContent=state.correct===SOLO_QUESTIONS?"🏆":"📖";
    $("end-points").textContent=String(points);
    $("end-copy").textContent=state.soloName+", respondiste correctamente "+state.correct+" de "+SOLO_QUESTIONS+" preguntas. Cada acierto vale 5 puntos.";
    $("end-reference").textContent="Puntuación final: "+points+" de "+(SOLO_QUESTIONS*POINTS_PER_QUESTION)+" puntos.";
    screen("end");return;
  }
  const [a,b]=state.players;
  const title=a.score===b.score?"¡EMPATE!":a.score>b.score?"¡GANÓ "+a.name.toUpperCase()+"!":"¡GANÓ "+b.name.toUpperCase()+"!";
  $("end-title").textContent=title;$("end-icon").textContent=a.score===b.score?"🤝":"🏆";
  $("end-points").textContent=a.score+" - "+b.score;
  $("end-copy").textContent=a.name+": "+a.score+" puntos ("+a.correct+"/8 aciertos). "+b.name+": "+b.score+" puntos ("+b.correct+"/8 aciertos).";
  $("end-reference").textContent="Cada participante/equipo respondió 8 preguntas diferentes y exclusivas, alternando turnos hasta completar 16 preguntas. Cada acierto vale 5 puntos; máximo individual: 40 puntos."
  screen("end");
}
function continueGame(){
  if(!state.answered)return;
  if(state.mode==="single"){
    if(!state.lastCorrect||state.index===SOLO_QUESTIONS-1)finish();
    else{state.index++;resetLifelines();render();}
    return;
  }
  state.totalAnswered++;
  if(state.totalAnswered>=16){finish();return;}
  if(state.turn===0)state.turn=1;
  else{state.turn=0;state.round++;}
  resetLifelines();render();
}
function useLifeline(id){
  if(state.used[id]||state.answered)return;state.used[id]=true;$(id).disabled=true;
  const q=currentQuestion();
  if(id==="fifty"){
    const wrong=shuffle(q.o.map((_,i)=>i).filter(i=>i!==q.a)).slice(0,2);
    document.querySelectorAll(".answer").forEach((b,i)=>{if(wrong.includes(i)){b.disabled=true;b.classList.add("removed");b.querySelector("b").textContent="Opción descartada";}});
    $("lifeline-result").textContent="50:50: se eliminaron dos opciones incorrectas.";
  }else if(id==="audience"){
    $("lifeline-result").textContent="El público considera más probable la opción "+String.fromCharCode(65+q.a)+".";
  }else $("lifeline-result").textContent="Consejo: lee con atención y recuerda el contexto de 2 Corintios.";
}
function goHome(){screen("home");}
function setNameLabels(mode){
  const team=mode==="teams";
  $("name-one-label").firstChild.textContent=team?"Nombre del equipo 1":"Nombre del participante 1";
  $("name-two-label").firstChild.textContent=team?"Nombre del equipo 2":"Nombre del participante 2";
  $("name-one").placeholder=team?"Escribe el nombre del equipo 1":"Escribe el nombre del participante 1";
  $("name-two").placeholder=team?"Escribe el nombre del equipo 2":"Escribe el nombre del participante 2";
}
function bind(id,event,fn){const el=$(id);if(el)el.addEventListener(event,fn);}
bind("start","click",startSingle);bind("start-one","click",startSingle);
bind("start-duel","click",()=>{setNameLabels("participants");startCompetition("participants");});
bind("start-teams","click",()=>{setNameLabels("teams");startCompetition("teams");});
bind("again","click",goHome);bind("back-home","click",goHome);
bind("brand-home","click",e=>{e.preventDefault();goHome();});
bind("exit","click",()=>{if(confirm("¿Deseas salir de la partida? Perderás el progreso."))goHome();});
bind("continue","click",continueGame);
["fifty","audience","friend"].forEach(id=>bind(id,"click",()=>useLifeline(id)));
buildLadder();

// Instalación como aplicación web en teléfonos compatibles.
let installPrompt=null;
window.addEventListener("beforeinstallprompt",event=>{event.preventDefault();installPrompt=event;const b=$("install-app");if(b)b.hidden=false;});
bind("install-app","click",async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$("install-app").hidden=true;});
if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
