$(document).ready(function() {
    
    //Sloganator
    const mainH1 = [
        `Weirdly-shaped swiss tool of the web development world`,
        `Why choose a coder with one skill, when you can get one that has eleven?`,
        `If you don't like this slogan, refresh your browser`
    ];
    
    const random = Math.floor(Math.random() * (mainH1.length - 0) ) + 0;
    const slogan = mainH1[random];
    
    $("#slogan").html(slogan);
    
    //nav collapse in launch when in mobile 
    if(window.innerWidth < 390) {
        $(".nav-collapse").slideUp("600");
    }

    const portfolioList = [
                ".webDesign",
                ".layoutDesign",
                ".videos",
                ".photos",
                ".publications"
    ];
    
    let fin = false;
    
    
    
    /* navbar scroller check. Uses jquery.visible.js -plugin
     * https://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport
     */ 
    
    const navHandler = setInterval(function () {
       if ($("#logo-mobile").visible(true)) {
           $("#nav-home").addClass("current");
           $("#nav-person").removeClass("current");
           $("#nav-portfolio").removeClass("current");
           $("#nav-cv").removeClass("current");
       }
       if ($("#person-check").visible(true)) {
           $("#nav-home").removeClass("current");
           $("#nav-person").addClass("current");
           $("#nav-portfolio").removeClass("current");
           $("#nav-cv").removeClass("current");
       }
       if ($(".portfolio").visible(true)) {
           $("#nav-home").removeClass("current");
           $("#nav-person").removeClass("current");
           $("#nav-portfolio").addClass("current");
           $("#nav-cv").removeClass("current");
       }
       if ($("#cv").visible(true)) {
           $("#nav-home").removeClass("current");
           $("#nav-person").removeClass("current");
           $("#nav-portfolio").removeClass("current");
           $("#nav-cv").addClass("current");
       }
    }, 250);
    
    //Hide nav when scrolling
    //https://stackoverflow.com/questions/31223341/detecting-scroll-direction
    window.onscroll = function(e) {
        if(window.innerWidth < 390) {
            if (this.oldScroll > this.scrollY === false) {
                $("#nav").slideUp("fast");
            } else {
                $("#nav").slideDown("fast");
            }
        }
        this.oldScroll = this.scrollY;
    };
    
    //nav toggler mobile
    $("#collapse-header").click(function() {
       $(".nav-collapse").slideToggle("600");
    });
    
    //hide menu when clicked
    $(".nav-collapse").click(function () {
        if(window.innerWidth < 390) {
            $(".nav-collapse").slideUp("600");
        }
    });

    
    //cv selector -styles
    $(".change").click(function() {
        if (fin === false) {
            $("#cv-table").html(cvFin);
            $("#finnish").removeClass("adobe").addClass("selected");
            $("#english").removeClass("selected").addClass("adobe");
            fin = true;
        } else {
           $("#cv-table").html(cvEng);
           $("#english").removeClass("adobe").addClass("selected");
            $("#finnish").removeClass("selected").addClass("adobe");
            fin = false; 
        }
    });
    
    // scroll animation
    $(".nav").click(function() {
        let target = $(this).attr("href");
       
        $("html, body").animate({
          scrollTop: $(target).offset().top - 130
        }, 1000);
    });
    
    
    /*
     * Portfolio style watcher. When selections are filtered,
     * applies background color & image first -layouts to every odd .laatikko-class
     * 
     * //OMITTED: 7.9.2020
     */
    const interval = setInterval(function() {
        let visible = [];
        
        $(".laatikko").each(function() {
           if($(this).is(":visible")) {
               visible.push($(this).attr("id"));
           } 
        });
        
        for(let i = 0; i < visible.length; i++) {
            let id = "#" + visible[i];
            
            if (i % 2 === 0) {
                $(id).removeClass("image-second");
                $(id).addClass("image-first");
                
                if ($(id).hasClass("videos")) {
                    $(id).addClass("videos-on");
                }
                if ($(id).hasClass("webDesign")) {
                    $(id).addClass("webDesign-on");
                }
                if ($(id).hasClass("layoutDesign")) {
                    $(id).addClass("layoutDesign-on");
                }
                if ($(id).hasClass("photos")) {
                    $(id).addClass("photos-on");
                }
                if ($(id).hasClass("publications")) {
                    $(id).addClass("publications-on");
                }
            } else {
                $(id).removeClass("image-first");
                $(id).addClass("image-second");
                
                if ($(id).hasClass("videos")) {
                    $(id).removeClass("videos-on");
                }
                if ($(id).hasClass("webDesign")) {
                    $(id).removeClass("webDesign-on");
                }
                if ($(id).hasClass("layoutDesign")) {
                    $(id).removeClass("layoutDesign-on");
                }
                if ($(id).hasClass("photos")) {
                    $(id).removeClass("photos-on");
                }
                if ($(id).hasClass("publications")) {
                    $(id).removeClass("publications-on");
                }
            }
        }
        
    }, 250);       

    // portfolio selectors
    $(".portfolioSelector").click(function() {
        let target = $(this).attr("id");
        
        if (target == "selectAll") {
            
            for (let i = 0; i < portfolioList.length; i++) {
                $(portfolioList[i]).slideDown("slow");
            }
            
            //TODO: make function that checks classes instead of repeated list
            $("#selectAll").removeClass("adobe").addClass("selected");
            $("#webDesign").removeClass("selected").addClass("adobe");
            $("#layoutDesign").removeClass("selected").addClass("adobe");
            $("#videos").removeClass("selected").addClass("adobe");
            $("#photos").removeClass("selected").addClass("adobe");
            $("#publications").removeClass("selected").addClass("adobe");
            
            return;
        }
        
        if (target == "webDesign") {
            
            for (let i = 0; i < portfolioList.length; i++) {
                
                if(portfolioList[i].includes("webDesign")) {
                    $(portfolioList[i]).slideDown("slow");
                    
                    continue;
                }
                
                $(portfolioList[i]).slideUp("slow");
            }
            
            $("#selectAll").removeClass("selected").addClass("adobe");
            $("#webDesign").removeClass("adobe").addClass("selected");
            $("#layoutDesign").removeClass("selected").addClass("adobe");
            $("#videos").removeClass("selected").addClass("adobe");
            $("#photos").removeClass("selected").addClass("adobe");
            $("#publications").removeClass("selected").addClass("adobe");
            
            return;
        }
        
        if (target == "layoutDesign") {
            
            for (let i = 0; i < portfolioList.length; i++) {
                
                if(portfolioList[i].includes("layoutDesign")) {
                    $(portfolioList[i]).slideDown("slow");
                    
                    continue;
                }
                
                $(portfolioList[i]).slideUp("slow");
            }
            
            $("#selectAll").removeClass("selected").addClass("adobe");
            $("#webDesign").removeClass("selected").addClass("adobe");
            $("#layoutDesign").removeClass("adobe").addClass("selected");
            $("#videos").removeClass("selected").addClass("adobe");
            $("#photos").removeClass("selected").addClass("adobe");
            $("#publications").removeClass("selected").addClass("adobe");
            
            return;
        }
        
        if (target == "videos") {
            
            for (let i = 0; i < portfolioList.length; i++) {
                
                if(portfolioList[i].includes("videos")) {
                    $(portfolioList[i]).slideDown("slow");
                    
                    continue;
                }
                
                $(portfolioList[i]).slideUp("slow");
            }
            
            $("#selectAll").removeClass("selected").addClass("adobe");
            $("#webDesign").removeClass("selected").addClass("adobe");
            $("#layoutDesign").removeClass("selected").addClass("adobe");
            $("#videos").removeClass("adobe").addClass("selected");
            $("#photos").removeClass("selected").addClass("adobe");
            $("#publications").removeClass("selected").addClass("adobe");
            
            return;
        }
        
        if (target == "photos") {
            
            for (let i = 0; i < portfolioList.length; i++) {
                
                if(portfolioList[i].includes("photos")) {
                    $(portfolioList[i]).slideDown("slow");
                    
                    continue;
                }
                
                $(portfolioList[i]).slideUp("slow");
            }
            
            $("#selectAll").removeClass("selected").addClass("adobe");
            $("#webDesign").removeClass("selected").addClass("adobe");
            $("#layoutDesign").removeClass("selected").addClass("adobe");
            $("#videos").removeClass("selected").addClass("adobe");
            $("#photos").removeClass("adobe").addClass("selected");
            $("#publications").removeClass("selected").addClass("adobe");
            
            return;
        }
        
        if (target == "publications") {
            
            for (let i = 0; i < portfolioList.length; i++) {
                
                if(portfolioList[i].includes("publications")) {
                    $(portfolioList[i]).slideDown("slow");
                    
                    continue;
                }
                
                $(portfolioList[i]).slideUp("slow");
            }
            
            $("#selectAll").removeClass("selected").addClass("adobe");
            $("#webDesign").removeClass("selected").addClass("adobe");
            $("#layoutDesign").removeClass("selected").addClass("adobe");
            $("#videos").removeClass("selected").addClass("adobe");
            $("#photos").removeClass("selected").addClass("adobe");
            $("#publications").removeClass("adobe").addClass("selected");
            
            return;
        }
        
    });
    
    const cvFin = `<tr>
                        <td><h3 class="cv-header">Koulutus</h3></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="bold">
                            <p>Oulun</p>
                            <p>ammattikorkeakoulu</p>
                        </td>
                        <td>
                            <p>Front-end, käyttöliittymäohjelmointi</p>
                            <p>Täydennyskoulutus, 40 op</p>
                        </td>
                    </tr>
                    <tr>
                        <td>1/2020 – 6/2020</td>
                        <td class="cursive">HTML, CSS, Javascript, React.js, 
                            Bootstrap, jQuery, SQL, Wordpress, verkkokauppa</td>
                    </tr>
                    
                    <tr>
                        <td class="bold">
                            <p>Helsingin yliopisto |</p>
                            <p>avoin yliopisto</p>
                        </td>
                        <td>
                            <p>Ohjelmointi</p>
                            <p>Täydennysopinnot, 34 op</p>
                        </td>
                    </tr>
                    <tr>
                        <td>2019 -</td>
                        <td class="cursive">Full stack: React, Redux, Node.js, MongoDB, GraphQL, 9 op 
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Full stack -projektikurssi, 10 op</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Java 10 op, SQL 5 op</td>
                    </tr>
                    
                    <tr>
                        <td class="bold">Turun yliopisto</td>
                        <td>Filosofian tohtori, Arkeologia</td>
                    </tr>
                    <tr>
                        <td>6/2015 -</td>
                        <td>240 op, sis.</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Tilastotieteen perusopinnot 25 op</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Museologian perusopinnot 25 op</td>
                    </tr>
                    
                    <tr>
                        <td class="bold">Turun yliopisto</td>
                        <td>Filosofian maisteri, Arkeologia</td>
                    </tr>
                    <tr>
                        <td>8/2008 - 2/2015</td>
                        <td>354 op, sis. mm.</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Liiketoimintaosaamisen opintokokonaisuus, 25 op</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Työelämän ja henkilöstöasioiden opintokokonaisuus, 25 op</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Luova kirjoittaminen, 60 op</td>
                    </tr>
                    
                    <tr>
                        <td><h3 class="cv-header">Työkokemus</h3></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">Turun yliopisto</p>
                            <p class="cursive">Väitöskirjatutkija</p>
                            <p class="cursive">6/2015 –</p>
                        </td>
                        <td>Väitöskirjassani olen tutkinut keskiajan ulkomaankaupan 
                            kehittymistä arkeologisen aineiston perusteella. Työ 
                            on ollut pääasiassa itsenäistä tutkimustyötä, mutta 
                            työni yhtä osa-aluetta varten pääsin myös johtamaan 
                            neljän hengen projektia. Työskentelin tutkimukseni 
                            parissa täysipäiväisesti 1/2016 – 12/2019 Koneen 
                            säätiön apurahalla.Tutkimuksessani olen ollut erityisesti 
                            kiinnostunut historiallisten tapahtumien 
                            vaikutusten mittaamisesta ja laajojen aineistojen 
                            kvantitatiivisista analyysimenetelmistä. Tässä olen 
                            päässyt hyödyntämään erityisesti javan, tilastotieteen 
                            ja verkostoanalyysin osaamistani. Lisäksi olen saanut 
                            työssäni kokemusta ja koulutusta esiintymisestä sekä 
                            ulkomaisissa että kotimaisissa konferensseissa, 
                            tutkimusrahoituksen hakemisesta ja opinnäytetöiden 
                            ohjaamisesta.</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">Yrittäjä</p>
                            <p class="cursive">Julkaisugraafikko</p>
                            <p class="cursive">2015 –</p>
                        </td>
                        <td>Olen tehnyt sivutoimisesti julkaisugraafikon, 
                            graafisen suunnittelijan, valokuvaajan ja 
                            videokuvaajan töitä vuodesta 2015 ja toiminimella 
                            vuodesta 2018. Asiakkainani ovat olleet mm. Aboa 
                            Vetus & Ars Nova -museo, Kansallisarkisto sekä 
                            Turun yliopiston arkeologian, Suomen historian ja 
                            pedagogian oppiaineet. Lisäksi olen toiminut 
                            konsulttina Menneisyyden metsästäjät tv-sarjalle, 
                            kuvannut promoja sekä mainos- ja musiikkivideoita.</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">Turun yliopisto,</p>
                            <p class="bold2">arkeologian oppiaine</p>
                            <p class="cursive">Tutkimusavustaja</p>
                            <p class="cursive">2014 – 2015</p>
                        </td>
                        <td>Oppiaineen osa-aikaisena tutkimusavustajana pääsin 
                            tutustumaan erityisesti yliopiston hallinnollisiin 
                            tehtäviin. Esimerkkeinä projekteista on oppiaineen 
                            nettisivujen siirtäminen vanhalta html-pohjalta uuteen 
                            Microsoft Sharepoint –alustaan, sekä smtt.fi ja 
                            ravattula.fi –nettisivujen julkaisu ja sisällöntuotanto 
                            valmiin pohjan päälle.</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">Turun yliopisto,</p>
                            <p class="bold2">arkeologian oppiaine</p>
                            <p class="cursive">Projektitutkija</p>
                            <p class="cursive">8/2014 – 10/2014</p>
                        </td>
                        <td>Olin Ravattulan ristimäen tutkimuskaivausten ajan 
                            kenttätöiden projektitutkijana, jossa vastuullani 
                            oli kenttätyötekniikasta ja dokumentoinnista vastaaminen.</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">Turun yliopisto,</p>
                            <p class="bold2">arkeologian oppiaine</p>
                            <p class="cursive">Harjoittelija</p>
                            <p class="cursive">8/2012 – 12/2012</p>
                        </td>
                        <td>Olin arkeologian oppiaineen harjoittelijana. Alunperin 
                            harjoittelu on 3kk mittainen, jota jatkettiin professorin 
                            toiveesta. Vastuulleni kuului dokumentointi opetuskaivauksilla, 
                            sekä kaivausten jälkityöt.</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">Turun museokeskus</p>
                            <p class="cursive">Tutkimusavustaja</p>
                            <p class="cursive">5/2011 – 8/2011</p>
                        </td>
                        <td>Turun kaupunki toteutti useita arkeologisia kaivauksia 
                            Aurajoen reunavallin vahvistamistöiden yhteydessä. 
                            Olin mukana ns. Itälaiturin kaivauksilla, jossa 
                            tehtäviini kuului käytännön kaivaustyö.</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">Ohjelmatoimisto Atlas Oy</p>
                            <p class="cursive">Keikkamuusikko</p>
                            <p class="cursive">2010 – 2017</p>
                        </td>
                        <td>Soitin bassoa paikallisessa rock-yhtyeessä. Koska 
                            olimme coverbändi, keikkailimme paljon: soitimme 
                            keskimäärin kerran viikossa. Tämä opetti minulle 
                            yhteistyöstä, työskentelemään epämukavuusalueella ja 
                            kantamaan painavia asioita.</td>
                    </tr>
                    
                    <tr>
                        <td><h3 class="cv-header">Yhdistystyö</h3></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="bold">1/2018 –</td>
                        <td>
                            <p>Arvostusta ja tukea tutkijoille / 
                               Appreciation and Support for Researchers -hankkeen ohjausryhmän jäsen</p>
                            <p class="cursive">Turun yliopisto</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="bold">1/2018 – 12/2019</td>
                        <td>
                            <p>HKT-laitoksen tohtoriohjelma Junon johtoryhmän jäsen. (2-vuotinen kausi)</p>
                            <p class="cursive">Turun yliopisto</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="bold">2014 –</td>
                        <td>
                            <p>Varapuheenjohtaja</p>
                            <p class="cursive">Suomen muinaistutkimuksen tuki ry.</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="bold">2013 – 2014</td>
                        <td>
                            <p>Puheenjohtaja</p>
                            <p class="cursive">Vare ry.</p>
                        </td>
                    </tr>
                    
                    <tr>
                        <td><h3 class="cv-header">Kielitaito</h3></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="bold"></td>
                        <td>Suomi – äidinkieli</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Englanti – C2</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Ruotsi – B1</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Saksa – A1</td>
                    </tr>

                    <tr>
                        <td><h3 class="cv-header">Opintosuoritukset</h3></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="bold">Arvosana</td>
                        <td class="bold">Kurssi</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Ohjelmoinnin peruskurssi, Java</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Ohjelmoinnin jatkokurssi, Java</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>SQL</td>
                    </tr>
                    <tr>
                        <td>Pass</td>
                        <td>R Course for Researchers</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>HTML & CSS</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Javascript</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Bootstrap & jQuery</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>React</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Wordpress</td>
                    </tr>
                    <tr>
                        <td>TBA</td>
                        <td>Full Stack Open (React, Redux, Node.js, MongoDB, GraphQL, Typescript)</td>
                    </tr>`;
    
    const cvEng = `<tr>
                        <td><h3 class="cv-header">Education</h3></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="bold">
                            <p>Oulu University</p>
                            <p>of Applied Sciences</p>
                        </td>
                        <td>
                            <p>Front-end, user-interface programming</p>
                            <p>Additional education, 40 cr</p>
                        </td>
                    </tr>
                    <tr>
                        <td>1/2020 – 6/2020</td>
                        <td class="cursive">HTML, CSS, Javascript, React.js, 
                            Bootstrap, jQuery, SQL, Wordpress, e-commerce</td>
                    </tr>
                    
                    <tr>
                        <td class="bold">
                            <p>University of Helsinki |</p>
                            <p>open university</p>
                        </td>
                        <td>
                            <p>Programming</p>
                            <p>Additional education, 34 cr</p>
                        </td>
                    </tr>
                    <tr>
                        <td>2019 -</td>
                        <td class="cursive">Full stack: React, Redux, Node.js, MongoDB, GraphQL, 9 cr 
                            </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Full stack -project, 10 cr</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Java 10 cr, SQL 5 cr</td>
                    </tr>
                    
                    <tr>
                        <td class="bold">University of Turku</td>
                        <td>PhD, Archaeology</td>
                    </tr>
                    <tr>
                        <td>6/2015 -</td>
                        <td>240 cr, incl.</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Statistics, minor studies 25 cr</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Museology, minor studies 25 cr</td>
                    </tr>
                    
                    <tr>
                        <td class="bold">University of Turku</td>
                        <td>MA, Archaeology</td>
                    </tr>
                    <tr>
                        <td>8/2008 - 2/2015</td>
                        <td>354 cr, incl. e.g</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Basic Business Studies, 25 cr</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Working Life and Personnel Issues programme TYHE, 25 cr</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td class="cursive">Creative writing, 60 cr</td>
                    </tr>
                    
                    <tr>
                        <td><h3 class="cv-header">Work experience</h3></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">University of Turku</p>
                            <p class="cursive">Doctoral researcher</p>
                            <p class="cursive">6/2015 –</p>
                        </td>
                        <td>In my dissertation, I have been studying the development
                            of medieval trade based on the archaeological material.
                            The work has been mostly independent research, but one
                            part of my dissertation was formed as a four person project, 
                            which I led. I worked on my research full time between
                            1/2016 – 12/2019 with a grant from Kone foundation.
                            In my research, I have been especially interested about
                            "measuring the past": quantifying the effects of different past
                            phenomena and using quantitative methods on large study materials.
                            Here, I have been able to utilize my expertice in programming (java),
                            statistics, and social network analysis. In addition, 
                            I have gained experience and education on public performance
                            both in international and national conferences, on
                            applying for external funding and supervising master's
                            theses.</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">Entrepreneur</p>
                            <p class="cursive">Layout designer</p>
                            <p class="cursive">2015 –</p>
                        </td>
                        <td>I have been doing layout design, graphic design, phto- and cinematography
                            work since year 2015 and as a sole proprietor since year 2018.
                            My clients have been, for example, Aboa Vetus & Ars
                            Nova -museum, National Archives of Finland, and departments
                            of archaeology, finnish history and pedagogy in University of Turku.
                            I have also provided consultation for TV-series Menneisyyden metsästäjät (YLE)
                            and shoot promos, advertisements and music videos as well.</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">University of Turku,</p>
                            <p class="bold2">dept. of archaeology</p>
                            <p class="cursive">Research assistant</p>
                            <p class="cursive">2014 – 2015</p>
                        </td>
                        <td>As a part-time research assistant, I got familiarized
                            with various administrative duties. Other projects included, for example
                            transferring the departments old website to new sharepoint -platform,
                            as well as content creation to smtt.fi and
                            ravattula.fi -websites.</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">University of Turku,</p>
                            <p class="bold2">dept. of archaeology</p>
                            <p class="cursive">Project researcher</p>
                            <p class="cursive">8/2014 – 10/2014</p>
                        </td>
                        <td>During the archaeological excavations of
                            Ravattula Ristimäki, my responsibilities were to take care of field 
                            work equipment and the documentation of the finds.</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">University of Turku,</p>
                            <p class="bold2">dept. of archaeology</p>
                            <p class="cursive">Intern</p>
                            <p class="cursive">8/2012 – 12/2012</p>
                        </td>
                        <td>Orinally as a 3-month training, my contract was extended
                            by the request of our professor. My responsibilities were
                            documentation on the archaeological study excavations and
                            post-excavation work.</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">Turku museum centre</p>
                            <p class="cursive">Research assistant</p>
                            <p class="cursive">5/2011 – 8/2011</p>
                        </td>
                        <td>During the reinforcements of riverside of Aurajoki, the city of Turku
                            conducted series of archaeological excavations. I was part of the excavation team
                            on Itälaituri -site.</td>
                    </tr>
                    <tr>
                        <td>
                            <p class="bold">Ohjelmatoimisto Atlas Oy</p>
                            <p class="cursive">Gig musician</p>
                            <p class="cursive">2010 – 2017</p>
                        </td>
                        <td>I played bass and double bass on a local rock band.
                            As a cover band in local bars, we performed about every weekend, 
                            sometimes twice a week. This taught me about team work, 
                            to work ouside of my comfort zone, and to carry heavy objects.</td>
                    </tr>
                    
                    <tr>
                        <td><h3 class="cv-header">Voluntary work</h3></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="bold">1/2018 –</td>
                        <td>
                            <p>Appreciation and Support for Researchers -project, steering group member</p>
                            <p class="cursive">University of Turku</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="bold">1/2018 – 12/2019</td>
                        <td>
                            <p>Doctoral program JUNO (School of History, Culture and Arts Studies), steering group member, 2-year term.</p>
                            <p class="cursive">University of Turku</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="bold">2014 –</td>
                        <td>
                            <p>Vice chairman</p>
                            <p class="cursive">Suomen muinaistutkimuksen tuki ry.</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="bold">2013 – 2014</td>
                        <td>
                            <p>Chairman</p>
                            <p class="cursive">Vare ry.</p>
                        </td>
                    </tr>
                    
                    <tr>
                        <td><h3 class="cv-header">Language skills</h3></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="bold"></td>
                        <td>Finnish – native</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>English – C2</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Swedish – B1</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Germany – A1</td>
                    </tr>
                    
                    <tr>
                        <td><h3 class="cv-header">Transcript</h3></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="bold">Grade</td>
                        <td class="bold">Course</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Basics programming, Java</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Advanced programming, Java</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>SQL</td>
                    </tr>
                    <tr>
                        <td>Pass</td>
                        <td>R Course for Researchers</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>HTML & CSS</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Javascript</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Bootstrap & jQuery</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>React</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Wordpress</td>
                    </tr>
                    <tr>
                        <td>TBA</td>
                        <td>Full Stack Open (React, Redux, Node.js, MongoDB, GraphQL, Typescript)</td>
                    </tr>`;
});



