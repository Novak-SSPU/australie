const events = [{
        "year": "cca. 60 000 let př.n.l",
        "event": "První obyvatelé",
        "detail": "První obyvatelé přišli přes pevninský most a úžinu z dnešní Jihovýchodní Asie v době, kdy ještě hladina světového oceánu byla níže než dnes.",
        "url": "https://cs.wikipedia.org/wiki/Austr%C3%A1lci",
        "evaluation": "true"
    },
    {
        "year": "1606",
        "event": "První pozorování pevniny evropanem",
        "detail": "Prvním zaznamenaným nesporným evropským pozorováním australské pevniny je pozorování nizozemského mořeplavce Willema Janszoonea, jenž v roce 1606 spatřil pobřeží Yorkského mysu. Během 17. století pak Nizozemci zmapovali většinu západního a severního pobřeží země, již nazývali Nové Holandsko. Nepokoušeli se ji však osídlit. V roce 1770 James Cook svojí plavbou mapoval východní pobřeží Austrálie, které následně pojmenoval Nový Jižní Wales a toto území zabral pro Velkou Británii. Poprvé přistál v Botany Bay (v zátoce, kde se dnes rozkládá letiště v Sydney ), objevy jeho expedice pak daly podnět k vytvoření trestanecké kolonie.",
        "url": "https://cs.wikipedia.org/wiki/Willem_Janszoon",
        "evaluation": "true"
    },
    {
        "year": "1788",
        "event": "Kolonizace",
        "detail": "Britské zámořské teritorium Nový Jižní Wales vzniklo osídlením Port Jacksonu (dnešní centrum Sydney) kapitánem Arthurem Phillippem a jeho první flotilou First Fleet 26. ledna 1788 (jednalo se o zhruba 1100 osob, většina z nich byli trestanci a vládní vojáci). Toto datum se později stalo australským národním dnem, Dnem Austrálie. Země Van Diemena, dnes známá jako Tasmánie , byla osídlena v roce 1803, samostatnou kolonií se stala roku 1825.Spojené království oficiálně vyhlásilo své nároky na západní část Austrálie roku 1829.",
        "url": "https://cs.wikipedia.org/wiki/Arthur_Phillip",
        "evaluation": "false"
    },
    {
        "year": "1915",
        "event": "První světová válka",
        "detail": "Porážku v bitvě o Gallipoli roku 1915 mnoho Australanů považuje za počátek národa – za jeho první velkou vojenskou akci. Podobně uvažují i o tzv. Kokoda Track Campaign (volně přeložitelné jako „Tažení po Kokodské stezce“), za druhé světové války.",
        "url": "https://cs.wikipedia.org/wiki/Edmund_Barton",
        "evaluation": "true"
    },
    {
        "year": "1945+",
        "event": "Po světové válce",
        "detail": "Poté, co jej Austrálie v roce 1942 přijala, formálně ukončil tzv. Statute of Westminster z roku 1931 většinu ústavních vazeb mezi Austrálií a Spojeným královstvím. Otřes způsobený britskou porážkou v Asii v roce 1942 a hrozby japonské invaze způsobily, že se Austrálie obrátila na Spojené státy jako na nového spojence a ochránce. Po roce 1951 se pak oficiálně stala americkým vojenským spojencem. Po druhé světové válce zahájila podporu hromadné imigrace z Evropy, od roku 1970 po opuštění tzv. „politiky bílé Austrálie“ i z Asie a z dalších částí světa. To způsobilo radikální přeměnu australského demografického obrazu, její kultury i vnímání v očích světa.",
        "url": "https://cs.wikipedia.org/wiki/Robert_Menzies",
        "evaluation": "false"
    },
];


const heroes = [{
        "name": "Hugh Jackman",
        "birth": "12.října.1968",
        "death": "Naživu",
        "biography": "Hugh Jackman, celým jménem Hugh Michael Jackman je australský herec, producent, zpěvák a tanečník.",
        "portraits": [
            "Hugh_1.jpg"
        ],
        "online": "https://cs.wikipedia.org/wiki/Hugh_Jackman"
    },
    {
        "name": "Robert Menzie",
        "birth": "20. prosince 1894",
        "death": "15. května 1978",
        "biography": "Robert Gordon Menzies byl australský politik, jedna z klíčových osobností australské politiky 20. století. V letech 1939–1941 a 1949–1966 byl premiérem Austrálie. Jeho osmnáct let v nejvyšší exekutivní funkci je australský rekord. Byl představitelem Liberální strany Austrálie, kterou roku 1945 založil, a v jejímž čele stál dvacet let, v letech 1945–1966.",
        "portraits": [
            "Menzies.png",
        ],
        "online": "https://cs.wikipedia.org/wiki/Robert_Menzies"
    },
    {
        "name": "Willem Janszoon",
        "birth": "okolo. 1570",
        "death": "1630",
        "biography": "Willem Janszoon byl nizozemský mořeplavec a koloniální guvernér, který jako první Evropan spatřil pobřeží Austrálie. Jeho jméno je někdy zkracováno na Willem Jansz. (s nebo bez tečky na konci). Pravděpodobně se narodil v Rotterdamu v Nizozemsku.",
        "portraits": [
            "Janszoon.png",
        ],
        "online": "https://cs.wikipedia.org/wiki/Willem_Janszoon"
    },
    {
        "name": "Arthur Phillip",
        "birth": "11. října 1738",
        "death": "31. srpna 1814",
        "biography": "Arthur Phillip) byl admirál Královského námořnictva Království Velké Británie, guvernér Nového Jižního Walesu, první evropské kolonie na australském kontinentu, a zakladatel Sydney.",
        "portraits": [
            "Phillip.jpg",
        ],
        "online": "https://cs.wikipedia.org/wiki/Arthur_Phillip"
    },

];

$(function() {


    $("h2").on("click", function() {

        $(this).parents(".row").next().toggle(1000);
    });


    events.forEach((event) => {

        $("#udalosti tbody").append(`<tr>
            <td class="event-year">${event.year}</td>
            <td>
              <p class="event-name"><i class="fas fa-chevron-down"></i> <a href="${event.url}" target="_new">${event.event}</a></p>
              <p class="event-detail">${event.detail}</p>
            </td>            
            <td class="event-evaluation">${(event.evaluation == "true") ? '<i class="fas fa-plus-circle text-success"></i>' : '<i class="fas fa-minus-circle text-danger"></i>'}</td>
        </tr>`);
    });


    $(".event-detail").hide();


    $(".event-name i, .event-name a").on("mouseover", function() {

        $("#udalosti tr").removeClass("bg-secondary text-white");

        $(this).parents("tr").addClass("bg-secondary text-white");

        $(".event-detail").hide();

        $(this).parent().next().show(500);
    });


    heroes.forEach((hero) => {
        $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
    });


    function fillPersonCard(person) {

        let hero = heroes.find(item => { return item.name === person });

        $(".card-header").html(`<i class="fas fa-star-of-life"></i> <b>${hero.birth}</b> - <i class="fas fa-cross"></i> <b>${hero.death}</b>`);

        $(".card-text").text(hero.biography);
        $(".card-footer").html(`Odkaz: <a href="${hero.online}">${hero.online}</a>`);

        $(".gallery").empty();

        for (let i = 0; i < hero.portraits.length; i++) {
            $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="images/${hero.portraits[i]}" alt="" class="img-fluid"></a></div>`);
        }
    }


    $("#postavy li:first").addClass('active');

    fillPersonCard(heroes[0].name);


    $("#postavy li").on("click", function() {

        $("#postavy li").removeClass("active");

        $(this).addClass("active");

        let person = $(this).text();

        $("#portret").slideUp(1000, function() {

            fillPersonCard(person);
        });

        $("#portret").slideDown(1000);
    });


    articles.forEach((article) => {
        $("#zpravodaj").append(`    
        <div class="col-sm-6 mt-3 pb-3 border-bottom">
          <article>
            <figure>
              <img src="images/${article.gallery[0]}" alt="${article.title}" class="img-fluid">
            </figure>
            <h3>${article.title}</h3>
            <div class="article-text">
                <p>${article.text}</p>
                <p><a href="${article.source}" target="_new">Celý článek</a></p>
            </div>
            <div class="article-footer">Autor: ${article.author} 
            <button type="button" class="btn btn-success likes"><i class="fas fa-thumbs-up"></i> <span class="badge badge-light">${article.likes}</span></button>
            <button type="button" class="btn btn-danger dislikes"><i class="fas fa-thumbs-down"></i> <span class="badge badge-light">${article.dislikes}</span></button>
            </div>
          </article>
        </div>        
    `);
    });


    $(".article-text").hide();


    $("#zpravodaj h3").on("click", function() {
        $(this).next(".article-text").toggle();
    });


    $(".likes").on("click", function() {

        let likes = parseInt($(this).find("span").text());

        $(this).find("span").text(likes + 1);
    });

    $(".dislikes").on("click", function() {
        let dislikes = parseInt($(this).find("span").text());
        $(this).find("span").text(dislikes + 1);
    });


    let timer = 0;
    window.setInterval(() => {
        timer++;
        $("article figure img").each(function(index, value) {
            $(value)
                .fadeOut(500, function() { $(value).attr("src", "images/" + articles[index].gallery[timer % articles[index].gallery.length]) })
                .fadeIn(500);
        });
    }, 5000);
})