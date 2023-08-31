const words = ['julio','julia','rambo','rampa','sagaz','âmago','negro','êxito','termo','mexer','nobre','senso','afeto','algoz','ética','plena','mútua','tênue','fazer','assim','sutil','vigor','aquém','porém','seção','fosse','sanar','audaz','poder','ideia','cerne','inato','moral','desde','sobre','justo','muito','honra','torpe','quiçá','sonho','fútil','razão','ícone','etnia','anexo','amigo','égide','tange','lapso','expor','haver','mútuo','dengo','tempo','casal','hábil','então','seara','boçal','ávido','pesar','ardil','genro','causa','saber','graça','dizer','posse','coser','pária','óbice','dever','tenaz','prole','corja','brado','crivo','comum','detém','sendo','ânimo','temor','ápice','ânsia','ainda','ceder','digno','pauta','estar','assaz','culto','atroz','mundo','censo','fugaz','gleba','xibiu','forte','vício','vulgo','valha','cozer','denso','neném',
'revés','pudor','dogma','regra','criar','saúde','louco','jeito','atrás','mesmo','round','ordem','banal','impor','mercê','clava','pedir','homem','feliz','apraz','tenro','desse','usura','coisa','pífio','sábio','servo','todos','juízo','prosa','limbo','forma','presa','viril','reaça','ontem','falar','cunho','manso','devir','meiga','posso','vendo','certo','fluir','ébrio','afago','mágoa','herói','sério','platô','valor','puder','guisa','visar','acaso','lugar','temer','falso','ímpio','abrir','afins','fácil','cisma','pleno','bruma','óbvio','legal','obter','gerar','matiz','crise','êxodo','praxe','garbo','burro','senil','vênia','fluxo','havia','união','tédio','enfim','linda','ritmo','tomar','visão','álibi','olhar','parvo','morte','brega','levar','gênio','bravo','casta','pulha','favor','vital','prumo','reter',
'valia','ajuda','parco','reles','grato','vivaz','laico','tecer','possa','falta','sábia','ameno','noção','cabal','ouvir','ranço','óbito','carma','prime','viver','nicho','achar','noite','calma','força','passo','selar','fator','outro','façam','rogar','anelo','coeso','farsa','fardo','pobre','ativo','épico','citar','único','sinto','rever','tendo','cisão','adiar','dúbio','sonso','leigo','ciúme','terra','gente','haste','sesta','humor','cesta','sulco','deter','tende','revel','exato','velho','amplo','claro','vemos','atuar','lavra','árduo','labor','feixe','imune','ponto','igual','ideal','gesto','débil','ótica','marco','hiato','líder','fonte','terno','ambos','toada','sonsa','vácuo','varão','remir','senão','ficar','capaz','cauda','jovem','papel','vazio','inata','coçar','tenra','tanto','velar','fusão','relva',
'caçar','xeque','algum','leito','horda','apoio','série','farão','advém','probo','doido','pouco','raiva','nossa','entre',' SUPER',
'coesa','sente','vimos','frase','torço','minha','feito','verso','anuir','botar','rigor','chuva','cruel','massa','dorso','blasé','brisa','signo','ímpar','ciclo','chata','prece','moção','trama','fauna','credo','lazer','covil','preso','maior','casto','morar','carro','furor','peste','ambas','pegar','dócil','flora','faina','sorte','vírus','seita','adeus','vetor','houve','árido','livro','setor','senda','liame','meses','manha','pecha','comer','plano','peixe','beata','aceso','ardor','nunca','banzo','visse','vulto','salvo','ocaso','breve','vasto','aliás','saiba','antro','morro','birra','pajem','prado','rezar','reger','saída','mudar','junto','segue','avaro','ótimo','motim','átomo','áureo','sinal','praia','serão','chulo','parte','campo','lenda','grupo','acima','andar','fugir','opção','treta','anais','brava',
'risco','nação','parar','fruir','leite','rapaz','fitar','jazia','ídolo','agora','prazo','tenso','vilão','gerir','puxar','alude','antes','anciã','áurea','bando','norma','tosco','época','tirar','malta','psico','exame','índio','texto','conta','reino','sinhá','verbo','arcar','avião','praga','corpo','aonde','filho','venal','cheio','preto','prova','estão','quase','quota','voraz','oxalá','traga','logro','certa','fatal','festa','soldo','acesa','turba','apego','cópia','sumir','átrio','fixar','manhã','oásis','pompa','fatos','ligar','coito','nódoa','caixa','nível','alado','messe','virão','sarça','mente','solto','perda','tocar','magia','lindo','afora','verve','fraco','dessa','livre','parca','turva','tinha','apelo','exijo','grave','jirau','lidar','opaco','firme','glosa','sabia','doído','parva','trupe','longe',
'pardo','fenda','nosso','elite','faixa','astro','bater','vezes','navio','grata','salve','alçar','viria','autor','sexta','supra','ficha','ético','pique','porta','irmão','cioso','reses','atual','deixa','junco','retém','cânon','macio','bicho','calda','douto','besta','verba','pagão','cousa','abuso','abriu','privê','posto','curso','bônus','judeu','molho','locus','caber','supor','torso','drops','vídeo','light','extra','rádio','bioma','desta','culpa','menos','zelar','vosso','asilo','combo','júlia','ígneo','vinha','órfão','calão','turvo','baixo','gosto','ruína','pisar','agudo','advir','suave','rouca','ereto','sítio','chato','traço','facho','aluno','estio','turma','paira','finda','ações','facto','pódio','pilar','amena','meigo','surja','cútis','chama','lápis','peito','mosto','louça','piada','brabo',
'tento','feudo','autos','rumor','urgia','museu','local','cocho','acolá','tetra','refém','páreo','mesma','clean','geral','ávida','lasso','optar','boato','drama','hobby','poema','passa','folga','medir','metiê','coral','teste','clima','forem','rubro','pacto','ateia','poeta','crime','ponha','golpe','feroz','móvel','lição','busca','cetro','cacho','tacha','penta','vigia','aroma','letal','açude','idoso','daqui','aviso','verde','calmo','monte','amiga','hoste','carta','pasmo','riste','swing','ecoar','rival','vetar','troça','plumo','fazia','fórum','briga','tribo','falha','monge','conto','ébano','cover','lesse','pedra','plebe','roupa','súcia','finjo','escol','tarde','artur','corso','venha','axila','manga','chefe','única','grama','fruto','plaga','macro','casar','sósia','civil','cargo','bença','saldo','sarau',
'vento','átimo','itens','mangá','perco','úteis','farta','berro','virar','ornar','arado','nuvem','viram','légua','troca','pinho','bruta','catre','beijo','tiver','magna','fosso','seixo','gíria','jejum','vazão','traje','amada','deste','estro','assar','órgão','areia','tição','surto','trato','renda','perto','bruto','tutor','inter','stand','porte','amado','mídia','canso','guria','volta','recém','gabar','feita','bazar','vedar','silvo','rural','arfar','natal','depor','âmbar','grota','irado','tchau','nesse','jogar','cifra','bucho','laudo','pomar','vadio','fossa','pavor','régio','odiar','clero','rocha','deram','segar','vagar','minar','mamãe','bolsa','negar','aviar','xucro','canto','todas','visto','lesão','molde','cenho','densa','pasma','etapa','cinto','nesta','logos','proto','marca','chula','invés',
'vista','santo','sótão','ferpa','tenha','horto','troco','largo','nessa','paiol','morfo','ruído','velha','cheia','varoa','urdir','penso','cerca','lesto','pugna','podar','ágape','burra','vasta','úbere','coroa','salmo','ileso','símio','ufano','mocho','verão','esgar','fundo','final','frota','letra','ceita','cível','trago','linha','narco','úmido','bulir','calor','piche','jazer','apear','pólis','resto','ardis','preço','folha','manto','troço','misto','peita','matar','álamo','neste','dança','cosmo','redor','monta','folia','áudio','seiva','lábia','queda','chaga','banto','mover','bolso','barro','álbum','barão','limpo','campa','gemer','retro','macho','calvo','demão','porca','findo','axial','venho','punha','louro','logia','canil','justa','lutar','farol','fazes','sabor','arroz','mimar','sofia','calça','rente',
'enjoo','chave','bedel','veloz','nácar','salva','lousa','firma','baixa','torna','coevo','zumbi','longo','vazia','pedro','sigla','solta','míope','ousar','forro','falsa','fugiu','reler','gueto','tumba','farto','sexto','outra','corar','lucro','urgir','subir','dados','fátuo','louca','nariz','valer','vário','penca','mania','custo','repor','toque','sugar','cardo','cacto','disso','harém','obtém','modal','diabo','passe','corte','versa','sadio','ultra','xampu','lento','sabiá','hífen','pagar','puído','bruxa','quite','choça','samba','staff','nesga','usual','ferir','sócio','bugre','ceifa','garra','olhos','rédea'];

const words1 = ['hótel'];

const letra1 = document.getElementById('letra1');
const letra2 = document.getElementById('letra2');
const letra3 = document.getElementById('letra3');
const letra4 = document.getElementById('letra4');
const letra5 = document.getElementById('letra5');
const letra6 = document.getElementById('letra6');
const letra7 = document.getElementById('letra7');
const letra8 = document.getElementById('letra8');
const letra9 = document.getElementById('letra9');
const letra10 = document.getElementById('letra10');
const letra11 = document.getElementById('letra11');
const letra12 = document.getElementById('letra12');
const letra13 = document.getElementById('letra13');
const letra14 = document.getElementById('letra14');
const letra15 = document.getElementById('letra15');
const letra16 = document.getElementById('letra16');
const letra17 = document.getElementById('letra17');
const letra18 = document.getElementById('letra18');
const letra19 = document.getElementById('letra19');
const letra20 = document.getElementById('letra20');
const letra21 = document.getElementById('letra21');
const letra22 = document.getElementById('letra22');
const letra23 = document.getElementById('letra23');
const letra24 = document.getElementById('letra24');
const letra25 = document.getElementById('letra25');

const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');
const botao4 = document.getElementById('botao4');
const botao5 = document.getElementById('botao5');
const restartbutton = document.getElementById('restartbutton');
const restartbutton1 = document.getElementById('restartbutton1');

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

const openModalBtn1 = document.getElementById('openModalBtn1');
const closeModalBtn1 = document.getElementById('closeModalBtn1');
const modal1 = document.getElementById('modal1');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  openModalBtn1.addEventListener('click', () => {
    modal1.style.display = 'block';
  });
  
  closeModalBtn1.addEventListener('click', () => {
    modal1.style.display = 'none';
  });
  
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal1.style.display = 'none';
    }
  });

function removeAccentsAndLowercase(str) {
    return str
    .normalize('NFD')                  // Normaliza os caracteres acentuados
    .replace(/[\u0300-\u036f]/g, '')  // Remove os diacríticos
    .toLowerCase();                   // Converte para letras minúsculas
}
// sorteando a palavra
var palavra_certa_inicial = words[Math.floor(Math.random() * words.length)];
var palavra_certa = removeAccentsAndLowercase(palavra_certa_inicial);
console.log(palavra_certa);

restartbutton.addEventListener('click', function() {
    location.reload();
});

restartbutton1.addEventListener('click', function() {
    location.reload();
});

botao1.addEventListener('click', verificadorPalavra1);
function verificadorPalavra1() {
    var palavra1 = removeAccentsAndLowercase(letra1.value) + removeAccentsAndLowercase(letra2.value) + removeAccentsAndLowercase(letra3.value) + removeAccentsAndLowercase(letra4.value) + removeAccentsAndLowercase(letra5.value);
    if (verificadorExistencia(palavra1) === false) {
        return;
    } else {
        letra1.readOnly = true;
        letra2.readOnly = true;
        letra3.readOnly = true;
        letra4.readOnly = true;
        letra5.readOnly = true;
        if (palavra1 === palavra_certa) { // caso acerte a palavra
            colorize(letra1, letra2, letra3, letra4, letra5);
            openModalBtn.click();
        } else {
            colorize(letra1, letra2, letra3, letra4, letra5);
            letra6.readOnly = false;
            letra7.readOnly = false;
            letra8.readOnly = false;
            letra9.readOnly = false;
            letra10.readOnly = false;
        }
    }
}

botao2.addEventListener('click', verificadorPalavra2);
function verificadorPalavra2() {
    var palavra2 = removeAccentsAndLowercase(letra6.value) + removeAccentsAndLowercase(letra7.value) + removeAccentsAndLowercase(letra8.value) + removeAccentsAndLowercase(letra9.value) + removeAccentsAndLowercase(letra10.value);
    if (verificadorExistencia(palavra2) === false) {
        return;
    } else {
        letra6.readOnly = true;
        letra7.readOnly = true;
        letra8.readOnly = true;
        letra9.readOnly = true;
        letra10.readOnly = true;
        if (palavra2 === palavra_certa) { // caso acerte a palavra
            colorize(letra6, letra7, letra8, letra9, letra10);
            openModalBtn.click();
        } else {
            colorize(letra6, letra7, letra8, letra9, letra10);
            letra11.readOnly = false;
            letra12.readOnly = false;
            letra13.readOnly = false;
            letra14.readOnly = false;
            letra15.readOnly = false;
        }
    }
}

botao3.addEventListener('click', verificadorPalavra3);
function verificadorPalavra3() {
    var palavra3 = removeAccentsAndLowercase(letra11.value) + removeAccentsAndLowercase(letra12.value) + removeAccentsAndLowercase(letra13.value) + removeAccentsAndLowercase(letra14.value) + removeAccentsAndLowercase(letra15.value);
    if (verificadorExistencia(palavra3) === false) {
        return;
    } else {
        letra11.readOnly = true;
        letra12.readOnly = true;
        letra13.readOnly = true;
        letra14.readOnly = true;
        letra15.readOnly = true;
        if (palavra3 === palavra_certa) { // caso acerte a palavra
            colorize(letra11, letra12, letra13, letra14, letra15);
            openModalBtn.click();
        } else {
            colorize(letra11, letra12, letra13, letra14, letra15);
            letra16.readOnly = false;
            letra17.readOnly = false;
            letra18.readOnly = false;
            letra19.readOnly = false;
            letra20.readOnly = false;
        }
    }
}

botao4.addEventListener('click', verificadorPalavra4);
function verificadorPalavra4() {
    var palavra4 = removeAccentsAndLowercase(letra16.value) + removeAccentsAndLowercase(letra17.value) + removeAccentsAndLowercase(letra18.value) + removeAccentsAndLowercase(letra19.value) + removeAccentsAndLowercase(letra20.value);
    if (verificadorExistencia(palavra4) === false) {
        return;
    } else {
        letra16.readOnly = true;
        letra17.readOnly = true;
        letra18.readOnly = true;
        letra19.readOnly = true;
        letra20.readOnly = true;
        if (palavra4 === palavra_certa) { // caso acerte a palavra
            colorize(letra16, letra17, letra18, letra19, letra20);
            openModalBtn.click();
        } else {
            colorize(letra16, letra17, letra18, letra19, letra20);
            letra21.readOnly = false;
            letra22.readOnly = false;
            letra23.readOnly = false;
            letra24.readOnly = false;
            letra25.readOnly = false;
        }
    }
}

botao5.addEventListener('click', verificadorPalavra5);
function verificadorPalavra5() {
    var palavra5 = removeAccentsAndLowercase(letra21.value) + removeAccentsAndLowercase(letra22.value) + removeAccentsAndLowercase(letra23.value) + removeAccentsAndLowercase(letra24.value) + removeAccentsAndLowercase(letra25.value);
    if (verificadorExistencia(palavra5) === false) {
        return;
    } else {
        letra21.readOnly = true;
        letra22.readOnly = true;
        letra23.readOnly = true;
        letra24.readOnly = true;
        letra25.readOnly = true;
        if (palavra5 === palavra_certa) { // caso acerte a palavra
            colorize(letra21, letra22, letra23, letra24, letra25);
            openModalBtn.click();
        } else {
            colorize(letra21, letra22, letra23, letra24, letra25);
            openModalBtn1.click();
        }
    }
}

function verificadorExistencia (palavra) {
    if (words.includes(palavra)) {
        return true;
    } else {
        return false;
    }
}

function colorize(l1, l2, l3, l4, l5) {
    if (removeAccentsAndLowercase(l1.value) === palavra_certa[0]) {
        l1.style.backgroundColor = 'green';
    } else if (removeAccentsAndLowercase(l1.value) === palavra_certa[1] || removeAccentsAndLowercase(l1.value) === palavra_certa[2] || removeAccentsAndLowercase(l1.value) === palavra_certa[3] || removeAccentsAndLowercase(l1.value) === palavra_certa[4]) {
        l1.style.backgroundColor = 'yellow';
    } else {
        l1.style.backgroundColor = 'red';
    }
    if (removeAccentsAndLowercase(l2.value) === palavra_certa[1]) {
        l2.style.backgroundColor = 'green';
    } else if (removeAccentsAndLowercase(l2.value) === palavra_certa[0] || removeAccentsAndLowercase(l2.value) === palavra_certa[2] || removeAccentsAndLowercase(l2.value) === palavra_certa[3] || removeAccentsAndLowercase(l2.value) === palavra_certa[4]) {
        l2.style.backgroundColor = 'yellow';
    } else {
        l2.style.backgroundColor = 'red';
    }
    if (removeAccentsAndLowercase(l3.value) === palavra_certa[2]) {
        l3.style.backgroundColor = 'green';
    } else if (removeAccentsAndLowercase(l3.value) === palavra_certa[0] || removeAccentsAndLowercase(l3.value) === palavra_certa[1] || removeAccentsAndLowercase(l3.value) === palavra_certa[3] || removeAccentsAndLowercase(l3.value) === palavra_certa[4]) {
        l3.style.backgroundColor = 'yellow';
    } else {
        l3.style.backgroundColor = 'red';
    }
    if (removeAccentsAndLowercase(l4.value) === palavra_certa[3]) {
        l4.style.backgroundColor = 'green';
    } else if (removeAccentsAndLowercase(l4.value) === palavra_certa[0] ||removeAccentsAndLowercase(l4.value) === palavra_certa[1] ||removeAccentsAndLowercase(l4.value) === palavra_certa[2] ||removeAccentsAndLowercase(l4.value) === palavra_certa[4]) {
        l4.style.backgroundColor = 'yellow';
    } else {
        l4.style.backgroundColor = 'red';
    }
    if (removeAccentsAndLowercase(l5.value) === palavra_certa[4]) {
        l5.style.backgroundColor = 'green';
    } else if (removeAccentsAndLowercase(l5.value) === palavra_certa[0] || removeAccentsAndLowercase(l5.value) === palavra_certa[1] || removeAccentsAndLowercase(l5.value) === palavra_certa[2] || removeAccentsAndLowercase(l5.value) === palavra_certa[3]) {
        l5.style.backgroundColor = 'yellow';
    } else {
        l5.style.backgroundColor = 'red';
    }
}

// Enter enviando o formulário
// botão 1
letra5.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        botao1.click();
    }
});
letra5.addEventListener('input', function() {
    botao1.disabled = campoDeEntrada.value === '';
});
// botão 2
letra10.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        botao2.click();
    }
});
letra10.addEventListener('input', function() {
    botao2.disabled = campoDeEntrada.value === '';
});
// botão 3
letra15.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        botao3.click();
    }
});
letra15.addEventListener('input', function() {
    botao3.disabled = campoDeEntrada.value === '';
});
// botão 4
letra20.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        botao4.click();
    }
});
letra20.addEventListener('input', function() {
    botao4.disabled = campoDeEntrada.value === '';
});
// botão 5
letra25.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        botao5.click();
    }
});
letra25.addEventListener('input', function() {
    botao5.disabled = campoDeEntrada.value === '';
});