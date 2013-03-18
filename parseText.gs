function theFunc() {
  /*var files = DocsList.getFilesByType(DocsList.FileType.DOCUMENT);
  Logger.log(files[1].getId());*/
  var keywords = getKeywords("Hello dude* what is up dude");
  Logger.log(keywords);
}




function getKeywords(text) {
  /*
  var ID = "1KGmBZp6Vu90swEcD5asI3I8YOmtTFZzVWjH3LYn6rRkgTc8HZYVfKioL";
  Logger.log(doc_ID);
  var doc = DocumentApp.openById(doc_ID);
  var docText = doc.editAsText();
 
  //var rawWords = docText.getTextAttributeIndices(); // gets text indicies where formatting changes
  var text = docText.getText();*/
  text = text.replace("\n", " ");
  text = text.replace("\t", " ");
  var rawWords = text.split(" ");

  debugger;
  var arr = new Array();

  // loop through formatting changes. If changes -> bold, make next section also blue
  for (var i = 0; i < rawWords.length; i++) {
    var rawWord = rawWords[i].trim();
    Logger.log(rawWord);
    var index = -1;
    // check if it is a derpword
    if (isDerp(rawWord) == 1 || isWord(rawWord) == 0)
      continue;

    // check if it is capital, if so try to append next word eg. "Great Depression"
    if (rawWord.substring(0,1) == rawWord.substring(0,1).toUpperCase()) {
      for (var a = 1; i + a < rawWords.length -1 && 
           rawWords[i + 1].substring(0,1) == rawWords[i+a].substring(0,1).toUpperCase() && !isDerp(rawWords[i+1]); a++) {
        rawWord += " " + rawWords[i + a].trim();
      }
    }
    //check if it is already in array
    for (var j = 0; j < arr.length; j++) {
      if (arr[j].str.toLowerCase() == rawWord.toLowerCase()){
        Logger.log(index); 
        index = j;
      }
    }
    
    //add it
    var word;
    if (index != -1) {
      word = arr[index];
    }
    else {
      word = new Object();
      word.str = rawWord;
      word.pts = 0;
      arr.push(word);
    }
    word.pts += points(word.str);
    if (index != -1) {
      arr[index] = word;
    }
    Logger.log(word.pts);
  }
  var strings = new Array();
  var min = 0;
  for (var i = 0; i < arr.length; i++) {
    min = minimum(strings);
    if (strings.length <= 10) {
      strings.push(arr[i]);
    }
    else {
      if (arr[i].pts > strings[min].pts) {
        strings[min] = arr[i];
      }
    }
  }
  for ( var i = 0; i < strings.length; i++) {
    Logger.log(strings[i]);
    strings[i] = strings[i].str;
  }
  return strings;
}

function minimum(words) {
  var min = 0;
  for (var i = 0; i < words.length; i++)
  {
    if (words[i].pts < min){
      min = i;
    }
  }
  return min;
}
    
function isWord(word) {
  for (var i = 0; i < word.length; i++) {
    if (!((word.charAt(i) >= 'A' && word.charAt(i) <= 'Z') ||
        (word.charAt(i) >= 'a' && word.charAt(i) <= 'z'))) {
      return 0;
    }
  }
  return 1;
}
function points(str) {
  var points = 0;
  points += str.length;
  if (str.substring(0,1) == str.substring(0,1).toUpperCase()) {
    points += 50;
  }
  return points;
}

function isNoun(word) {
  var arr = new Array("nephew","nerve","nest","net","network","news","newsprint","newsstand","nic","nickel","niece","nigeria","night","nitrogen","node","noise","noodle","north","north america","north korea","norwegian","nose","note","notebook","notify","novel","november","number","numeric","nurse","nut","nylon","oak","oatmeal","objective","oboe","observation","occupation","ocean","ocelot","octagon","octave","october","octopus","odometer","offence","offer","office","oil","okra","olive","onion","open","opera","operation","ophthalmologist","opinion","option","orange","orchestra","orchid","order","organ","organisation","organization","ornament","ostrich","otter","ounce","output","outrigger","oval","oven","overcoat","owl","owner","ox","oxygen","oyster","package","packet","page","pail","pain","paint","pair","pajama","pakistan","palm","pamphlet","pan","pancake","pancreas","panda","pansy","panther","panties","pantry","pants","panty","pantyhose","paper","paperback","parade","parallelogram","parcel","parent","parentheses","park","parrot","parsnip","part","particle","partner","partridge","party","passbook","passenger","passive","pasta","paste","pastor","pastry","patch","path","patient","patio","patricia","paul","payment","pea","peace","peak","peanut","pear","pedestrian","pediatrician","peen","peer-to-peer","pelican","pen","penalty","pencil","pendulum","pentagon","peony","pepper","perch","perfume","period","periodical","peripheral","permission","persian","person","peru","pest","pet","pharmacist","pheasant","philippines","philosophy","phone","physician","piano","piccolo","pickle","picture","pie","pig","pigeon","pike","pillow","pilot","pimple","pin","pine","ping","pink","pint","pipe","pisces","pizza","place","plain","plane","planet","plant","plantation","plaster","plasterboard","plastic","plate","platinum","play","playground","playroom","pleasure","plier","plot","plough","plow","plywood","pocket","poet","point","poison","poland","police","policeman","polish","politician","pollution","polo","polyester","pond","popcorn","poppy","population","porch","porcupine","port","porter","position","possibility","postage","postbox","pot","potato","poultry","pound","powder","power","precipitation","preface","prepared","pressure","price","priest","print","printer","prison","probation","process","processing","produce","product","production","professor","profit","promotion","propane","property","prose","prosecution","protest","protocol","pruner","psychiatrist","psychology","ptarmigan","puffin","pull","puma","pump","pumpkin","punch","punishment","puppy","purchase","purple","purpose","push","pvc","pyjama","pyramid","quail","quality","quart","quarter","quartz","queen","question","quicksand","quiet","quill","quilt","quince","quit","quiver","quotation","rabbi","rabbit","racing","radar","radiator","radio","radish","raft","rail","railway","rain","rainbow","raincoat","rainstorm","rake","ramie","random","range","rat","rate","raven","ravioli","ray","rayon","reaction","reading","reason","receipt","recess","record","recorder","rectangle","red","reduction","refrigerator","refund","regret","reindeer","relation","relative","religion","relish","reminder","repair","replace","report","representative","request","resolution","respect","responsibility","rest","restaurant","result","retailer","revolve","revolver","reward","rhinoceros","rhythm","rice","richard","riddle","rifle","ring","rise","risk","river","riverbed","road","roadway","roast","robert","robin","rock","rocket","rod","roll","romania","romanian","ronald","roof","room","rooster","root","rose","rotate","route","router","rowboat","rub","rubber","rugby","rule","run","russia","russian","rutabaga","ruth","sack","sagittarius","sail","sailboat","sailor","salad","salary","sale","salesman","salmon","salt","sampan","samurai","sand","sandra","sandwich","santa","sarah","sardine","satin","saturday","sauce","saudi arabia","sausage","save","saw","saxophone","scale","scallion","scanner","scarecrow","scarf","scene","scent","schedule","school","science","scissors","scooter","scorpio","scorpion","scraper","screen","screw","screwdriver","sea","seagull","seal","seaplane","search","seashore","season","seat","second","secretary","secure","security","seed","seeder","segment","select","selection","self","semicircle","semicolon","sense","sentence","separated","september","servant","server","session","sex","shade","shadow","shake","shallot","shame","shampoo","shape","share","shark","sharon","shears","sheep","sheet","shelf","shell","shield","shingle","ship","shirt","shock","shoe","shoemaker","shop","shorts","shoulder","shovel","show","shrimp","shrine","siamese","siberian","side","sideboard","sidecar","sidewalk","sign","signature","silica","silk","silver","sing","singer","single","sink","sister","sister-in-law","size","skate","skiing","skill","skin","skirt","sky","slash","slave","sled","sleep","sleet","slice","slime","slip","slipper","slope","smash","smell","smile","smoke","snail","snake","sneeze","snow","snowboarding","snowflake",
                      
                      "snowman","snowplow","snowstorm","soap","soccer","society","sociology","sock","soda","sofa","softball","softdrink","software","soil","soldier","son","song","soprano","sort","sound","soup","sousaphone","south africa","south america","south korea","soy","soybean","space","spade","spaghetti","spain","spandex","spark","sparrow","spear","specialist","speedboat","sphere","sphynx","spider","spike","spinach","spleen","sponge","spoon","spot","spring","sprout","spruce","spy","square","squash","squid","squirrel","stage","staircase","stamp","star","start","starter","state","statement","station","statistic","steam","steel","stem","step","step-aunt","step-brother","stepdaughter","step-daughter","step-father","step-grandfather","step-grandmother","stepmother","step-mother","step-sister","stepson","step-son","step-uncle","steven","stew","stick","stinger","stitch","stock","stocking","stomach","stone","stool","stop","stopsign","stopwatch","store","storm","story","stove","stranger","straw","stream","street","streetcar","stretch","string","structure","study","sturgeon","submarine","substance","subway","success","sudan","suede","sugar","suggestion","suit","summer","sun","sunday","sundial","sunflower","sunshine","supermarket","supply","support","surfboard","surgeon","surname","surprise","susan","sushi","swallow","swamp","swan","sweater","sweatshirt","sweatshop","swedish","sweets","swim","swimming","swing","swiss","switch","sword","swordfish","sycamore","syria","syrup","system","table","tablecloth","tabletop","tachometer","tadpole","tail","tailor","taiwan","talk","tank","tanker","tanzania","target","taste","taurus","tax","taxi","taxicab","tea","teacher","teaching","team","technician","teeth","television","teller","temper","temperature","temple","tempo","tendency","tennis","tenor","tent","territory","test","text","textbook","texture","thailand","theater","theory","thermometer","thing","thistle","thomas","thought","thread","thrill","throat","throne","thumb","thunder","thunderstorm","thursday","ticket","tie","tiger","tights","tile","timbale","time","timer","timpani","tin","tip","tire","titanium","title","toad","toast","toe","toenail","toilet","tomato","tom-tom","ton","tongue","tooth","toothbrush","toothpaste","top","tornado","tortellini","tortoise","touch","tower","town","toy","tractor","trade","traffic","trail","train","tramp","transaction","transmission","transport","trapezoid","tray","treatment","tree","trial","triangle","trick","trigonometry","trip","trombone","trouble","trousers","trout","trowel","truck","trumpet","trunk","t-shirt","tsunami","tub","tuba","tuesday","tugboat","tulip","tuna","tune","turkey","turkey","turkish","turn","turnip","turnover","turret","turtle","tv","twig","twilight","twine","twist","typhoon","tyvek","uganda","ukraine","ukrainian","umbrella","uncle","underclothes","underpants","undershirt","underwear","unit","united kingdom","unshielded","use","utensil","uzbekistan","vacation","vacuum","valley","value","van","vase","vault","vegetable","vegetarian","veil","vein","velvet","venezuela","venezuelan","verdict","vermicelli","verse","vessel","vest","veterinarian","vibraphone","vietnam","view","vinyl","viola","violet","violin","virgo","viscose","vise","vision","visitor","voice","volcano","volleyball","voyage","vulture","waiter","waitress","walk","wall","wallaby","wallet","walrus","war","warm","wash","washer","wasp","waste","watch","watchmaker","water","waterfall","wave","wax","way","wealth","weapon","weasel","weather","wedge","wednesday","weed","weeder","week","weight","whale","wheel","whip","whiskey","whistle","white","wholesaler","whorl","wilderness","william","willow","wind","windchime","window","windscreen","windshield","wine","wing","winter","wire","wish","witch","withdrawal","witness","wolf","woman","women","wood","wool","woolen","word","work","workshop","worm","wound","wrecker","wren","wrench","wrinkle","wrist","writer","xylophone","yacht","yak","yam","yard","yarn","year","yellow","yew","yogurt","yoke","yugoslavian","zebra","zephyr","zinc","zipper","zone","zoo","zoology");
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == word)
      return 1;
  }
  return 0; 
}
  
function isDerp(word) {
  
  var arr = new Array("a’s","able","about","above","according","accordingly","across","actually","after","afterwards","again","against","ain’t","all","allow","allows","almost","alone","along","already","also","although","always","am","among","amongst","an","and","another","any","anybody","anyhow","anyone","anything","anyway","anyways","anywhere","apart","appear","appreciate","appropriate","are","aren’t","around","as","aside","ask","asking","associated","at","available","away","awfully","be","became","because","become","becomes","becoming","been","before","beforehand","behind","being","believe","below","beside","besides","best","better","between","beyond","both","brief","but","by","c’mon","c’s","came","can","can’t","cannot","cant","cause","causes","certain","certainly","changes","clearly","co","com","come","comes","concerning","consequently","consider","considering","contain","containing","contains","corresponding","could","couldn’t","course","currently","definitely","described","despite","did","didn’t","different","do","does","doesn’t","doing","don’t","done","down","downwards","during","each","edu","eg","eight","either","else","elsewhere","enough","entirely","especially","et","etc","even","ever","every","everybody","everyone","everything","everywhere","ex","exactly","example","except","far","few","fifth","first","five","followed","following","follows","for","former","formerly","forth","four","from","further","furthermore","get","gets","getting","given","gives","go","goes","going","gone","got","gotten","greetings","had","hadn’t","happens","hardly","has","hasn’t","have","haven’t","having","he","he’s","hello","help","hence","her","here","here’s","hereafter","hereby","herein","hereupon","hers","herself","hi","him","himself","his","hither","hopefully","how","howbeit","however","i’d","i’ll","i’m","i’ve","ie","if","ignored","immediate","in","inasmuch","inc","indeed","indicate","indicated","indicates","inner","insofar","instead","into","inward","i","is","isn’t","it","it’d","it’ll","it’s","its","itself","just","keep","keeps","kept","know","knows","known","last","lately","later","latter","latterly","least","less","lest","let","let’s","like","liked","likely","little","look","looking","looks","ltd","mainly","many","may","maybe","me","mean","meanwhile","merely","might","more","moreover","most","mostly","much","must","my","myself","name","namely","nd","near","nearly","necessary","need","needs","neither","never","nevertheless","new","next","nine","no","nobody","non","none","noone","nor","normally","not","nothing","novel","now","nowhere","obviously","of","off","often","oh","ok","okay","old","on","once","one","ones","only","onto","or","other","others","otherwise","ought","our","ours","ourselves","out","outside","over","overall","own","particular","particularly","per","perhaps","placed","please","plus","possible","presumably","probably","provides","que","quite","qv","rather","rd","re","really","reasonably","regarding","regardless","regards","relatively","respectively","right","said","same","saw","say","saying","says","second","secondly","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sensible","sent","serious","seriously","seven","several","shall","she","should","shouldn’t","since","six","so","some","somebody","somehow","someone","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specified","specify","specifying","still","sub","such","sup","sure","t’s","take","taken","tell","tends","th","than","thank","thanks","thanx","that","that’s","thats","the","their","theirs","them","themselves","then","thence","there","there’s","thereafter","thereby","therefore","therein","theres","thereupon","these","they","they’d","they’ll","they’re","they’ve","think","third","this","thorough","thoroughly","those","though","three","through","throughout","thru","thus","to","together","too","took","toward","towards","tried","tries","truly","try","trying","twice","two","un","under","unfortunately","unless","unlikely","until","unto","up","upon","us","use","used","useful","uses","using","usually","value","various","very","via","viz","vs","want","wants","was","wasn’t","way","we","we’d","we’ll","we’re","we’ve","welcome","well","went","were","weren’t","what","what’s","whatever","when","whence","whenever","where","where’s","whereafter","whereas","whereby","wherein","whereupon","wherever","whether","which","while","whither","who","who’s","whoever","whole","whom","whose","why","will","willing","wish","with","within","without","won’t","wonder","would","would","wouldn’t","yes","yet","you","you’d","you’ll","you’re","you’ve","your","yours","yourself","yourselves","zero");
  for(var i = 0; i < arr.length; i++){
    if(arr[i] == word.toLowerCase())
      return 1;
  }
  return 0;  
}
