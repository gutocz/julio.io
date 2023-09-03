const words = ['lacra','larva','lança','malte','valhe','balde','nisso','bispo','goste','poste','algoz','êxito','sagaz','âmago','mexer','senso','afeto','sutil','inato','cerne','mútuo','audaz','porém','termo','nobre','aquém','ímpio','fazer','seção','vigor','lapso','negro','ideia','genro','desde','posse','fútil','atroz','razão','torpe','expor','ânimo','honra','detém','ardil','gleba','ânsia','ética','poder','ávido','sanar','atrás','pífio','muito','dizer','gesto','digno','corja','justo','tenaz','ceder','anexo','fugaz','vivaz','porra','óbice','cozer','coser','revés','assim','hábil','moral','dever','ébrio','comum','afago','fluir','vício','causa','ontem','censo','reaça','sério','citar','impor','seara','enfim','prole','cisma','pudor','neném','brado','álibi','regra','gerar','égide','obter','louco','crise','pesar','tênue','saber','probo','tenro','pleno','então','viril','óbvio','quiçá','ápice','parvo','bruma','favor','visar','temor','sinto','sábio','denso','tange','desse','reter','jeito','haver','sobre','apraz','senil','sonho','seria','labor','fusão','óbito','usura','criar','culto','temer','rogar','manso','ameno','êxodo','adiar','juízo','presa','revel','forma','clava','birra','pedir','prosa','vácuo','mundo','dogma','estar','fator','tempo','servo','árduo','falar','varão','farsa','mútua','acaso','pulha','forte','falta','cunho','ainda','exato','grato','etnia','fluxo','amplo','saúde','achar','feixe','guisa','assaz','mágoa','parco','caçar','doido','prumo','laico','atuar','feliz','tomar','reles','ritmo','herói','lavra','praxe','haste','noção','vital','cruel','débil','deter','levar','amigo','casal','gozar','graça','matiz','visão','anuir','crivo','finjo','algum','devir','chulo','dúbio','beata','ordem','certo','rigor','saída','sesta','épico','casta','leito','bravo','capaz','vulto','lâmia','salvo','sulco','acima','relva','vênia','mesmo','dorso','possa','cisão','valha','único','peste','valor','fugir','vasto','coisa','valia','tecer','garbo','banal','puxar','sendo','dócil','reger','furor','pobre','árido','igual','maior','breve','ativo','ouvir','senão','falso','selar','velar','anelo','casto','horda','áureo','fitar','viver','olhar','boçal','toada','pompa','morar','gerir','sumir','cópia','voraz','fácil','cabal','leigo','morte','tédio','noite','remir','moção','homem','coeso','união','segue','prece','avião','vimos','coçar','vendo','terno',
'cesta','tende','venal','aceso','peixe','vazio','claro','sonso','pardo','mesma','façam','motim','hiato','série','pauta','passo','bando','virão','senda','velho','grave','opção','ótica','anciã','rever','saruê','imune','houve','arcar','havia','cauda','pecha','botar','fixar','posso','liame','avaro','flora','covil','força','fenda','fardo','pouco','gente','ponto','jovem','jazia','quota','nódoa','caixa','saiba','vetor','exame','fosse','fauna','lugar','fonte','cioso','advém','prazo','vemos','verba','ardor','ciúme','nicho','preso','feudo','ótimo','época','junto','opaco','apoio','solto','doído','soldo','pegar','tendo','astro','serão','calma','cheio','glosa','órfão','ficar','apego','apelo','canso','lasso','feito','estão','fatal','folga','outro','asilo','deram','bater','crime','supor','signo','finda','plano','fraco','tirar','carro','pajem','súcia','ficha','reses','ígneo','forem','navio','burro','ambas','parte','ruína','mudar','ocaso','massa','credo','brisa','átrio','aonde','nação','legal','xeque','cacho','cover','campo','nível','setor','ideal','rezar','platô','paira','lesse','optar','praga','golpe','bicho','plebe','torso','índio','tanto','praia','sinal','pasmo','abrir','fruir','venho','gênio','ícone','messe','perda','troça','agudo','exijo','aroma','rubro','lindo','puder','prado','reino','malta','turvo','afora','autor','round','irmão','zelar','corpo','supra','traga','vulgo','orgia','certa','ímpar','pisar','lidar','logro','turva','rival','sabia','terra','rouca','ligar','sarau','rapaz','farão','oásis','raiva','quase','papel','recém','alçar','facto','calda','limbo','ereto','elite','pária','fátuo','anais','tenso','estro','cousa','meiga','líder','antro','livro','retém','firme','verso','sítio','trama','prova','ciclo','traço','pagem','Crush','Orgia','Redir','Cuzão','Saruê','Laico','Quiçá','Sonso','Praxe','Gozar','Tesão','épico','Chará','Porra','Pênis','Vadia','ápice','Tênue','Chato','Fuder','Nigga','Treta','Blasé','ética','Dogma','Foder','Chuca','Pífio','Merda','Migué','Vulgo','Carma','Putas','Sanar','Porre','óbice','Hobby','Visse','Atrás','Honra','Hábil','Prego','Placa','Tosco','Mercê','Parça','Revel','Cevas','Aquém','Etnia','Juízo','Legal','Causo','Emana','Ambos','Crivo','Pitel','Fosse','Caiba','Foyer','Viado','Pagão','ágape','Puder',
'Sigla','Coito','Banzo','Casal','égide','Lauda','Glosa','Ranço','Bunda','Meiga','Boçal','Xibiu','Pífia','Moral','Pária','Dengo','Gíria','Presa','Prole','Arigó','Massa','Racha','Coeso','Vênia','Besta','Vetar','Cagão','Kenga','Calão','Mídia','Cerne','Foram','Tange','Michê','Moção','Trupe','Nicho','Perua','Chula','Se pá','Mútua','Hiato','áurea','Paira','ímpio','Pondo','Grelo','Posso','Vácuo','Chola','Preze','Sagaz','Dando','Bosta','Marra','Amiga','Torço','Afeta','Culto','Pauta','Exita','Curro','Leiga','Ninfa','Cútis','Jirau','Pudor','Conta','Plena','êxito','Limbo','Prezo','Harém','Viçar','Coxas','Burro','Fútil','Coube','Expus','Sutil','Tendo','Bedel','Sendo','Morga','Tocar','Pemba','Lapso','Manjo','Horda','Verve','Caído','Tenra','Sarro','Corja','Covil','Advém','Preso','Coque','Stand','Torar','Preza','Tende','Nardo','Feudo','Viril','Parte','Carai','âmago','Pirou','Soube','Relax','Naipe','Troxa','Líder','Termo','Posto','Boque','Valha','Graça','Lugar','Antro','H2so4','Saúde','Lobby','Palas','Páreo','Obsta','Odara','Cagou','Chata','Broxa','Coesa','Babou','Regra','Mágoa','Dúbia','Bioma','índio','Meigo','Adere','Fugaz','Liame','Poder','Coisa','Bonde','Retro','Bodas','êxodo','Assaz','Neura','Banal','Algoz','Atada','Digna','Norma','Baixa','Varoa','Razão','Mamas','Surta','Erige','Dobre','Pornô','Açude','Sabei','Xucro','Polir','Trave','Adido','Dinda','Macro','Ponho','Herói','Fuçar','Falar','Pairo','Vosso','Finda','Vigor','Grado','Talha','Unção','Lindo','Cunho','Fodeu','Supra','Voraz','Nudes','Parco','Causa','Gambé','Certo','Atéia','Manar','Guria','Fomos','Surto','Faina','Zuada','Pariu','Malho','Troço','Então','Guapo','Privo','Zumba','Sarou','Demos','Aliás','Andar','Bolou','Brega','Acesa','Múnus','Caput','Mútuo','Porem','Dotes','Tenda','Pares','Haole','A par','Cesse','Senso','ávido','árdua','Biota','Ficha','Irmos','Fardo','Tezão','Serão','Paris','Invés','Bodou','Jeová','Lócus','Puxou','Quase','Kibar','Devam','Houve','Salve','Citar','Cesso','Bisca','Fadem','Fluxo','Verbo','Anelo','Cabal','Capaz','Sumam','Bague','Terão','Havia','Insta','Deste','ídolo','íamos','Temos','V.sa.','Turba','Bugar','Saído','Suave','Prosa','Pampa','ávida','Xucra','Cisão','Garbo','Denso','Leigo','Posse','Pajem','Autos','Ideal','Peita','Truta','Tê-lo','Desse',
'Lidar','Manas','Vezes','Vilão','Ornar','Atado','Grupo','Corno','Jeito','Má-fé','Ganja','Ameno','Cioso','União','Sussa','Estar','Rosca','Tenro','Torou','Fucei','Oxalá','Irada','Lábia','Pazes','Gerir','Judeu','Pecha','Atido','Grosa','Amuou','Riste','Alado','Linda','Clava','Pugna','Inato','Mouro','único','Topei','Detém','Reset','Senda','Lorde','Mosto','Picar','Cenho','Ladra','Tiver','Culta','Torpe','Laudo','Pinto','Cedeu','Valia','Texto','Grude','Tição','Pacto','Nobre','Santo','Rusga','Paúra','Tenaz','Zumbi','à toa','Torso','Passe','Justo','Tiete','Caída','Ponha','Saite','Manha','Trama','Tédio','Grife','Tarar','Tribo','Advir','Alude','ícone','Feito','Aluno','Golfo','Douto','Igual','Findo','Pimba','Irmão','Legue','Algia','Fruir','Fundo','Facho','Versa','Exime','Fórum','Shaft','Revés','Detêm','Bossa','Tônus','Remir','Cunhã','Amigo','Afeto','Turbe','Ouvem','Urubu','Comum','Falsa','Mesmo','Frase','Brisa','Andes','Tecer','Possa','Fumar','Galam','Sabão','Hamsá','álibi','Sonsa','Guisa','Venal','Cousa','Istmo','Orixá','Cumim','Enfim','Praza','Marco','Serem','Baguá','Assim','Males','Queda','Axial','Dócil','Quota','Legou','Lavra','Sábia','índex','Deusa','Catzo','Gabar','Sarar','Ancas','Serra','óbvio','Dever','Risco','Seara','Poser','Obrar','Séria','Blefe','Vivaz','Já já','Amena','Núbil','Enema','Amado','Idéia','Porém','Avexe','Logos','Focar','Logre','Swing','Vasto','Audaz','Combo','Ferra','Intra','Gênio','Fadar','Butim','Trupé','Feita','Tenso','Campo','Sejam','Corre','Bruto','Abate','Veado','êmese','Seria','Mexer','Ferpa','Ralou','Temer','Velho','Piava','órgão','Sanha','Opaco','Putão','Fator','Podem','Mirra','Reles','Logro','Comer','Sheik','ótica','Fácil','Vulva','Terno','Lavro','Buliu','Saque','Lazer','Leste','Amplo','Salmo','Seção','Parsa','Ohana','Sabem','Vagal','Haver','Gamar','Bugre','Farpa','Brejo','Adeus','Zuado','Bucha','Gleba','árduo','Draga','Broto','Força','Servo','Mossa','ético','Ainda','Punha','Letal','Gorar','Pasma','Rimes','Ordem','Cocar','Valor','Setor','Pleno','Dação','Miose','Díade','Sorva','Crise','Pólis','Ileso','Viram','Pesar','Oásis','Baila','Parca','Apraz','Minha','Tábua','Bruxa','Vivia','Ficar','Busca','Vital','Infra','Puxar','Estio','Livro','Mongo','Banza','Tongo','Bando','Calço','Passa','Parvo','Porão',
'Soldo','Inter','Sarau','Gloso','Dados','Trela','Saída','Fores','Resma','Baque','Manso','Gomem','Fudeu','Sarra','Nossa','Plaga','ânsia','Folga','Dildo','Lerda','Traga','Fugir','Impor','Relou','Cargo','Braba','Ameba','Staff','Efatá','Bucho','Gomar','Labor','Gosto','Fluir','Usura','Casta','Caçoa','átimo','Vetor','Rever','Ative','Avaro','Féria','Surte','Criva','Bicha','Aceso','Cisma','Louco','Ciúme','Sulco','Ninfo','Densa','Diabo','Vazão','Logar','Lasca','Púbis','Fiado','Dérbi','Abono','Mores','Vazio','Niver','Expor','Vasta','Messe','Mixou','Logra','Irado','Kkkkk','Forte','Basal','Dúbio','Benga','Parta','Civil','Faraó','Setup','Murta','Untar','Dotar','Nudez','Pouco','Sabia','Visar','Amada','Fossa','Corró','Bolão','Nodal','Psico','Ardil','Falso','Escol','Usque','Alçar','Obras','Seita','Abade','Mitar','Hiper','Safra','Prelo','Sanga','Negão','Atroz','Taura','Breve','Trash','Nódoa','Dança','Capar','Haule','Rezar','Exige','Pomar','Magia','Temor','Idoso','Peste','Gesto','Rubro','Afins','Cúria','Amapô','Advêm','Xeque','Proto','Coroa','Valho','Pente','Short','Fazer','Fazem','Modal','Pecar','Obter','Brabo','Outro','Doido','Tempo','Tutor','Afudê','Credo','Borsa','Crica','Feice','Lerdo','Beata','Censo','Cotas','Valer','Fação','Ceder','Ardor','Lento','Junco','Grata','Imune','Clima','Sacro','Aguar','Motim','Babar','Pálio','Raiva','Drusa','Reger','Manhã','Lixar','Sacas','Dindo','Meter','Trago','Visto','Fungo','Zuera','Nesga','Frisa','Vazar','Neném','Grumo','Babão','Cânon','Rapto','Obeso','Ativo','Bordo','Apoio','Qualé','Jejum','átrio','Minar','Xiita','Elide','Flato','Agudo','Queca','Muito','Droga','Cetro','Blitz','Sorte','Novel','Beijo','Sesta','Aipim','Mitra','Afago','Taxar','Penso','Chapa','Bagui','Velar','Pocar','Praia','Abeia','Ajayô','Provê','Rácio','Anais','Pegar','Viste','Ceifa','Probo','Timbó','Táxon','Urrar','Beato','Hemos','Pakas','Prevê','Sacal','Virem','Buril','Ovino','Baita','Papel','Sítio','Vinde','Vemos','Casar','Bença','Chulo','Avoar','Apois','Xinxa','Coité','Grifo','Bicho','Monga','Pitéu','ímpar','A fim','Garoa','Pinar','Saber','Tinha','Fisco','Cerva','Phyna','Miúda','Parir','Fauna','ânimo','Slide','Pulha','Talho','Malha','Bebum','Privê','Nação','Manja','Noite','Afora','Menas','Jazia','Repto','Sonho','Jazem','Fusão',
'Guéla','Párea','Fraco','Betão','Cromo','Fraga','Dizer','Homem','Atuar','Gerar','Piada','Mimar','Mexeu','Bruma','Uruca','Tolir','Tilti','Pódio','Criar','Orçar','Selar','Prega','Forma','ébano','Rilex','Cosmo','Cocho','Ramal','Senil','Vimos','Turvo','Ajuda','Bodar','Indez','Mirim','Cachê','Anexo','Pobre','Borel','Poeta','écran','Nível','Rédea','Cobro','étimo','Visgo','Retém','Relar','Trans','Cobra','Devir','Tanso','Tomar','Telos','Bilau','Farás','Feixe','Coita','Jazer','Andor','Ouçam','Depôs','Ativa','ébrio','Derby','Canga','Young','Mambo','Sábio','Tufão','Rumor','Trova','Bolei','Nimbo','Hálux','Travo','Opõem','Varei','Adoro','Futum','Cheio','Xoxar','Curra','Catso','Sépia','éfode','Broca','Dread','Ardis','Lance','Calmo','Reter','Bamba','Bardo','Reaça','Trena','Danar','Gueto','Jegue','óbulo','Roçar','Girau','Fuark','Grego','Campa','Dendê','Micro','Aluir','Sarça','Virtú','Douta','Suíte','Cozer','Arfar','Viger','Rente','Lenda','Metro','Guapa','Trará','Pagar','Teste','Gavar','Firme','Vendo','Anuir','Bravo','Boato','Gazua','Bufar','Exato','Dobro','Pegos','Perva','Lavor','Muque','Turva','Signo','Edito','álamo','Conas','Fuzuê','Ratam','Biziu','Cabra','Esgar','Tosca','Furor','Cesto','Tibia','Lhano','Lauto','Cusco','Culpa','Retrô','Débil','Natal','Cruel','Máfia','Lesão','Lorpa','Yohan','Tchau','Gansa','Quite','Noção','Fúria','Pissa','Tento','Gamei','Cevar','Clero','Zelar','Mudar','Rango','Peraí','Bafão','Cagar','Adeno','Point','Reres','Coser','Pitar','Sogra','Prima','Obtêm','Coice','Bater','Terna','Pança','Frito','Húmus','Abadá','Verme','Varão','Piado','Claro','Pedir','Hepta','Filão','Falta','Babem','Elite','Símio','Vírus','ótimo','Darão','Busto','Ethos','Fiéis','Sobre','Malsã','édipo','Mundo','Felpa','Poste','Sahel','Sabiá','Guela','Opção','Calça','Meado','Achar','Balda','Lista','Frade','Podar','ágora','Atual','Deter','Foque','óbito','Fiada','Platô','Rulez','Mafuá','Zoado','Inibe','Hoste','Supus','Pacas','Grimm','Ginga','Mente','álveo','Delta','Caibo','Gemer','Terçã','Ticar','êmico','Saúda','Carga','Porte','Totem','Banzé','Olhar','Arqui','ébria','Tolha','Inane','Avara','édito','Morte','Egito','Tansa','Brava','Segar','à-toa','Falha','Peido','Alelo','Béque','Nambu','Terra','Ganso','Chaga','Lasso','Lanha','Fervo','Leria','Arras',
'Altar','índia','Parar','Arcar','Fosso','Basta','Xerém','Poema','Légua','Fixar','Autor','Larga','Canaã','Magma','Tekar','Chiar','Astro','Corbã','Limpo','Róseo','Zonzo','úmido','Xanha','Bantu','Birra','Boite','Renca','Praça','Tetéu','Carro','Casto','V.sª.','Verga','Forfé','Pasmo','Cunha','Fodem','Pirar','Pompa','Acima','Aviso','Mouse','Senão','Meche','Jovem','Vacum','Ambas','Preço','Daora','Greta','Parto','Vedar','Balir','Prumo','Corpo','Humor','árido','Matar','Bagar','Conto','Cerão','Galga','Inata','Viver','Tunda','Vadio','Seixo','Carão','Rocha','Grota','Xaina','âmbar','Moché','Etino','Brown','Rádio','Louçã','Conho','Penha','Acuso','Picuá','Busão','Malta','Bobão','Rolar','Pique','Peixe','Fiofó','Birro','Sinal','Meada','Ficta','Xaxim','Pasme','Blunt','Choca','Ponte','Maçom','Expôs','Cisco','Ilesa','Safam','Kbyte','Apego','Xangô','Banir','Saiba','Longo','Caçou','Xingu','Rubor','Eluir','Curso','Corso','Salvo','Ganga','Leira','Creca','Arroz','Frete','Veaco','Súcia','Ownar','Sorgo','Carta','Flama','Ulalá','Edema','átona','Cassa','Gordo','Fitar','Crime','Kafta','Gnose','Apelo','Borga','Haste','Iogue','Gesta','Corgo','Porco','Venta','Hotel','Babau','Rogar','Gizar','Zonza','A quo','Fiúza','Viela','Tripé','Acolá','Molde','Vesga','Ripar','Optar','Lomba','Cafua','Trote','Tisga','Jeton','Sósia','Pachá','Nácar','Exito','Broma','Penal','Gambá','Chuva','Canto','Polca','Kafka','Caril','época','Refém','Bisco','Fuste','Adobe','Livre','Saíra','Falou','Mojar','Traço','Kombi','Viral','Pandu','Tonto','Bolar','Efebo','Macho','Capão','Zâmbi','Glote','Lucro','Ufano','Induz','Vesse','Cisto','Saldo','Acero','Super','Negro','Poita','Petiz','Ranso','Maior','Sorry','Monta','Corte','Peito','Albor','Passo','Canha','Chibo','Metrô','Série','Abrir','Linfa','Gafar','Imago','Fenda','Hindu','Colar','Loque','Farsa','Sódio','Façam','Tumba','Tiziu','Miado','Nunca','Negar','Prado','Filar','Urato','Caçar','Trino','Scrap','Frapê','Tasca','Fruto','órfão','Poncã','Exijo','Morsa','Lauta','Plaza','Sedar','ábaco','Posta','Chita','Norte','Nafta','Genro','áureo','Monge','Aonde','Furto','Balão','Aliar','Galar','Nobel','Nhaca','Latim','Nédio','Dedéu','Testo','Chape','Traia','Idade','Geral','Lousa','Cotar','Turma','Conga','Nanar','Jante','Favor','Forro','Bruno','Dedal',
'Bulir','Murro','Sugar','Relho','Saúva','Local','Gofar','Porta','Vídia','Lácio','Biate','Mixar','Bumba','Canxa','Dorso','Zebra','Roubo','Foste','êmulo','Igapó','Farra','Patim','Pitiú','Luzir','Chabú','Homão','Nasal','Vesgo','Bilro','China','Flash','Podre','Dólar','Suada','Magôo','Sadia','Varde','Xunda','Bagos','Laivo','Magro','Dúzia','Panca','Tieta','Grave','Bisel','tampo','lambe','bambu','tampa','bucha','bunda','achou','baile','bolha', 'julio','julia','rambo','rampa','sagaz','âmago','negro','êxito','termo','mexer','nobre','senso','afeto','algoz','ética','plena','mútua','tênue','fazer','assim','sutil','vigor','aquém','porém','seção','fosse','sanar','audaz','poder','ideia','cerne','inato','moral','desde','sobre','justo','muito','honra','torpe','quiçá','sonho','fútil','razão','ícone','etnia','anexo','amigo','égide','tange','lapso','expor','haver','mútuo','dengo','tempo','casal','hábil','então','seara','boçal','ávido','pesar','ardil','genro','causa','saber','graça','dizer','posse','coser','pária','óbice','dever','tenaz','prole','corja','brado','crivo','comum','detém','sendo','ânimo','temor','ápice','ânsia','ainda','ceder','digno','pauta','estar','assaz','culto','atroz','mundo','censo','fugaz','gleba','xibiu','forte','vício','vulgo','valha','cozer','denso','neném',
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

const telaResposta = document.getElementById('resposta');

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
//console.log(palavra_certa);

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
            telaResposta.innerHTML = 'A palavra era: ' + palavra_certa_inicial;
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