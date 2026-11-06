const QUESTION_BANK = {
  facil: [
    {q:"¿Creó Dios los cielos y la tierra?",a:true,e:"La Biblia comienza declarando que Dios creó los cielos y la tierra.",r:"Génesis 1:1"},
    {q:"¿Construyó Noé un arca por mandato de Dios?",a:true,e:"Dios le indicó a Noé que construyera un arca para preservar a su familia y a los animales del diluvio.",r:"Génesis 6:13-22"},
    {q:"¿Tenía Jesús doce discípulos?",a:true,e:"Jesús escogió a doce apóstoles para que estuvieran con Él y fueran enviados a predicar.",r:"Marcos 3:14-19"},
    {q:"¿Fue David quien venció al gigante Goliat?",a:true,e:"David enfrentó a Goliat confiando en el nombre del Señor.",r:"1 Samuel 17:45-50"},
    {q:"¿Nació Jesús en Belén?",a:true,e:"Jesús nació en Belén de Judea, tal como anunciaba la profecía.",r:"Mateo 2:1; Miqueas 5:2"},
    {q:"¿Fue Jonás tragado por un gran pez?",a:true,e:"El Señor dispuso un gran pez para que tragase a Jonás, quien estuvo dentro de él tres días y tres noches.",r:"Jonás 1:17"},
    {q:"¿Moisés construyó el arca de Noé?",a:false,e:"El arca fue construida por Noé. Moisés vivió muchas generaciones después.",r:"Génesis 6:13-14"},
    {q:"¿La madre de Jesús se llamaba María?",a:true,e:"María fue la joven escogida por Dios para ser la madre de Jesús.",r:"Lucas 1:30-31"},
    {q:"¿Resucitó Jesús al tercer día?",a:true,e:"Jesús resucitó al tercer día, conforme a las Escrituras.",r:"1 Corintios 15:3-4"},
    {q:"¿Tenía Jesús tres discípulos?",a:false,e:"Jesús tuvo doce apóstoles. Pedro, Jacobo y Juan formaban parte de un círculo más cercano en algunas ocasiones.",r:"Lucas 6:13-16"},
    {q:"¿Abrió Dios el mar Rojo para que Israel pasara?",a:true,e:"Dios abrió el mar y los israelitas cruzaron en seco.",r:"Éxodo 14:21-22"},
    {q:"¿Fue Salomón conocido por su gran sabiduría?",a:true,e:"Dios concedió a Salomón sabiduría y entendimiento extraordinarios.",r:"1 Reyes 3:12"}
  ],
  medio: [
    {q:"¿Permaneció el arca del pacto en casa de Obed-edom durante tres meses?",a:true,e:"El arca estuvo tres meses en casa de Obed-edom, y el Señor bendijo su casa.",r:"2 Samuel 6:11"},
    {q:"¿Fue Ester quien llegó a ser reina y ayudó a salvar a su pueblo?",a:true,e:"Ester llegó a ser reina y arriesgó su vida para interceder por los judíos.",r:"Ester 4:14-16; 5:1-2"},
    {q:"¿Negó Pedro a Jesús tres veces?",a:true,e:"Jesús anunció que Pedro lo negaría tres veces antes de que cantara el gallo.",r:"Lucas 22: deny"}
      .q && {q:"¿Negó Pedro a Jesús tres veces?",a:true,e:"Jesús anunció que Pedro lo negaría tres veces antes de que cantara el gallo.",r:"Lucas 22:54-62"},
    {q:"¿Fue Pablo uno de los doce apóstoles escogidos durante el ministerio terrenal de Jesús?",a:false,e:"Pablo fue llamado apóstol después de la resurrección de Jesús; no formó parte de los Doce originales.",r:"Hechos 9:1-16; 1 Corintios 15:8-9"},
    {q:"¿Recibió Daniel una interpretación de la escritura en la pared durante el banquete de Belsasar?",a:true,e:"Daniel interpretó las palabras escritas en la pared: MENE, MENE, TEKEL, UPARSIN.",r:"Daniel 5:25-28"},
    {q:"¿Fue Lázaro quien bautizó a Jesús en el río Jordán?",a:false,e:"Juan el Bautista bautizó a Jesús en el río Jordán.",r:"Mateo 3:13-17"},
    {q:"¿Cayó Jericó después de que el pueblo de Israel rodeara la ciudad durante siete días?",a:true,e:"Israel rodeó Jericó según las instrucciones de Dios; el séptimo día los muros cayeron.",r:"Josué 6:2-20"},
    {q:"¿Escribió Lucas el libro de los Hechos?",a:true,e:"Hechos es la continuación del Evangelio de Lucas y tradicionalmente se reconoce a Lucas como su autor.",r:"Lucas 1:1-4; Hechos 1:1"},
    {q:"¿Fue Rut la bisabuela del rey David?",a:true,e:"Rut fue madre de Obed, abuela de Isaí y bisabuela de David.",r:"Rut 4:17-22"},
    {q:"¿Pasó Jesús cuarenta días en el desierto?",a:true,e:"Jesús fue llevado por el Espíritu al desierto y ayunó cuarenta días y cuarenta noches.",r:"Mateo 4:1-2"},
    {q:"¿Era Marta la hermana de María y Lázaro?",a:true,e:"Marta, María y Lázaro eran hermanos y amigos de Jesús.",r:"Juan 11:1-5"},
    {q:"¿Fue Timoteo quien recibió las tablas de la Ley en el monte Sinaí?",a:false,e:"Moisés recibió las tablas de la Ley en el monte Sinaí.",r:"Éxodo 31:18"}
  ],
  dificil: [
    {q:"¿Fue Bezaleel uno de los artesanos escogidos para trabajar en el tabernáculo?",a:true,e:"Dios llenó a Bezaleel del Espíritu de Dios, en sabiduría, inteligencia y conocimiento para la obra del tabernáculo.",r:"Éxodo 31:1-5"},
    {q:"¿Era Matusalén el hombre que vivió 969 años?",a:true,e:"Matusalén vivió 969 años, la edad más larga registrada en la genealogía de Génesis.",r:"Génesis 5:27"},
    {q:"¿Fue Melquisedec rey de Salem y sacerdote del Dios Altísimo?",a:true,e:"Melquisedec aparece como rey de Salem y sacerdote del Dios Altísimo, quien bendijo a Abraham.",r:"Génesis 14:18-20"},
    {q:"¿Se llamaba el padre de Juan el Bautista Zacarías?",a:true,e:"Zacarías era sacerdote y esposo de Elisabet; un ángel le anunció el nacimiento de Juan.",r:"Lucas 1:5-13"},
    {q:"¿Fue Oseas el profeta que se casó con Gomer?",a:true,e:"Dios mandó a Oseas tomar por mujer a Gomer como señal profética para Israel.",r:"Oseas 1:2-3"},
    {q:"¿Tenía el altar del incienso cuatro cuernos?",a:true,e:"El altar del incienso debía tener cuatro cuernos, uno en cada esquina.",r:"Éxodo 30:1-3"},
    {q:"¿Fue Silas compañero de viaje de Pablo?",a:true,e:"Silas acompañó a Pablo en varios viajes misioneros y aparece con él en la cárcel de Filipos.",r:"Hechos 15:40; 16:19-25"},
    {q:"¿Se llamaba Débora el juez que derrotó a Sísara junto con Barac?",a:true,e:"Débora juzgaba a Israel y acompañó a Barac en la campaña contra Sísara.",r:"Jueces 4:4-9"},
    {q:"¿Fue el profeta Elías quien interpretó el sueño de Nabucodonosor?",a:false,e:"Daniel interpretó el sueño de Nabucodonosor. Elías ejerció su ministerio en el reino del norte de Israel.",r:"Daniel 2:26-28"},
    {q:"¿Menciona la Biblia que Eutico cayó de una ventana mientras Pablo predicaba?",a:true,e:"Eutico cayó desde un tercer piso durante la reunión en Troas; Pablo descendió y lo abrazó.",r:"Hechos 20:7-12"},
    {q:"¿Fue Priscila esposa de Aquila?",a:true,e:"Priscila y Aquila eran matrimonio y colaboradores de Pablo en la obra del evangelio.",r:"Hechos 18:2-3; Romanos 16:3"},
    {q:"¿Se llamaba Agabo el profeta que anunció una gran hambre?",a:true,e:"Agabo anunció por el Espíritu que vendría una gran hambre sobre toda la tierra habitada.",r:"Hechos 11:27-28"}
  ]
};

const state = {level:"facil",questions:[],index:0,score:0,answered:false};
const $ = (id) => document.getElementById(id);
const screens = ["home-screen","quiz-screen","result-screen"];
function showScreen(id){screens.forEach(s=>$(s).classList.toggle("active",s===id));window.scrollTo({top:0,behavior:"smooth"});}
function shuffle(items){const copy=[...items];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}return copy;}
document.querySelectorAll(".level").forEach(btn=>btn.addEventListener("click",()=>{state.level=btn.dataset.level;document.querySelectorAll(".level").forEach(x=>x.classList.toggle("selected",x===btn));}));
function startGame(){state.questions=shuffle(QUESTION_BANK[state.level]).slice(0,10);state.index=0;state.score=0;state.answered=false;$("live-score").textContent="0";$("quiz-level").textContent="NIVEL "+({facil:"FÁCIL",medio:"INTERMEDIO",dificil:"DIFÍCIL"}[state.level]);showScreen("quiz-screen");renderQuestion();}
function renderQuestion(){const q=state.questions[state.index];state.answered=false;$("question-count").textContent=`PREGUNTA ${state.index+1} DE 10`;$("progress-percent").textContent=`${Math.round((state.index+1)/10*100)}%`;$("progress-fill").style.width=`${(state.index+1)/10*100}%`;$("question-number").textContent=String(state.index+1).padStart(2,"0");$("question-text").textContent=q.q;$("feedback").hidden=true;document.querySelectorAll(".answer").forEach(b=>{b.disabled=false;b.classList.remove("correct","incorrect");});}
function answerQuestion(value){if(state.answered)return;state.answered=true;const q=state.questions[state.index],correct=value===q.a;if(correct){state.score++;$("live-score").textContent=state.score;}document.querySelectorAll(".answer").forEach(btn=>{btn.disabled=true;const chosen=btn.dataset.answer==="true";if(chosen===q.a)btn.classList.add("correct");else if(chosen===value&&!correct)btn.classList.add("incorrect");});$("feedback-title").textContent=correct?"¡Correcto! Muy bien.":"No es correcto. ¡Sigue aprendiendo!";$("feedback-title").classList.toggle("bad",!correct);$("feedback-explanation").textContent=q.e;$("verse-ref").textContent="LEE: "+q.r;$("next-btn").textContent=state.index===9?"VER RESULTADO →":"SIGUIENTE PREGUNTA →";$("feedback").hidden=false;}
function showResults(){const pct=state.score*10;$("final-score").textContent=state.score;$("correct-count").textContent=state.score;$("wrong-count").textContent=10-state.score;$("final-percent").textContent=pct+"%";$("score-ring").style.background=`conic-gradient(var(--gold) ${pct*3.6}deg,#ffffff15 0deg)`;let title,copy,icon;if(state.score>=9){title="¡Extraordinario!";copy="Tu conocimiento bíblico está brillando. ¡Sigue profundizando en la Palabra!";icon="🏆";}else if(state.score>=7){title="¡Muy buen trabajo!";copy="Vas por buen camino. Continúa estudiando y creciendo en la fe.";icon="🌟";}else if(state.score>=5){title="¡Buen esfuerzo!";copy="Cada reto es una oportunidad para aprender algo nuevo. ¡No te rindas!";icon="📖";}else{title="¡Sigue adelante!";copy="Lo importante es perseverar. Lee las referencias y vuelve a intentarlo.";icon="🌱";}$("result-heading").textContent=title;$("result-copy").textContent=copy;$("result-icon").textContent=icon;showScreen("result-screen");}
document.querySelectorAll(".answer").forEach(btn=>btn.addEventListener("click",()=>answerQuestion(btn.dataset.answer==="true")));
$("start-btn").addEventListener("click",startGame);$("retry-btn").addEventListener("click",startGame);$("home-btn").addEventListener("click",()=>showScreen("home-screen"));$("quit-btn").addEventListener("click",()=>{if(confirm("¿Quieres salir del reto? Perderás el progreso de esta partida."))showScreen("home-screen");});$("next-btn").addEventListener("click",()=>{if(state.index<9){state.index++;renderQuestion();}else showResults();});
