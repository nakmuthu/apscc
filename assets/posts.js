/* ============================================================
   APSCC POSTS — single source of truth
   Add a new post by prepending an object to APSCC_POSTS below.
   The homepage (Recent Activities, Featured Research, Featured News)
   and any page that renders from this list update automatically.

   Fields:
     date     : "YYYY-MM-DD" (used for sorting; newest first)
     category : short label shown as the chip (e.g. "Research", "Recognition", "Conservation")
     type     : "research" | "news" | "activity"  (drives featured slots + filtering)
     title    : post title
     teaser   : 1–2 sentence summary (3-line clamp in cards)
     image    : path to the card/thumbnail image (relative to design/)
     url      : the page to open (native post page, or a section link)
     featured : (optional) true to prefer this in its type's featured slot
   ============================================================ */
window.APSCC_POSTS = [
  {
    date: "2021-06-05",
    category: "Conservation",
    type: "activity",
    title: "Answering Nature's Call: APSCC Partners with The Green Institute for World Environment Day 2021",
    teaser: "APSCC partnered with The Green Institute for a virtual symposium themed 'Nature is Calling' on World Environment Day 2021 \u2014 bringing together 25+ global sustainability leaders to discuss ecosystem restoration.",
    image: "assets/posts/wed-2021/hero.jpg",
    url: "post-wed-2021.html"
  },
  {
    date: "2020-01-22",
    category: "Conference",
    type: "activity",
    title: "Bridging Disciplines for a Sustainable Future: ICIAEESD 2020, Puducherry",
    teaser: "APSCC co-organised the International Conference on Interdisciplinary Approaches to Environment, Ecosystems & Sustainable Development (ICIAEESD) in Puducherry — a multi-institution platform for academics, policymakers, and practitioners advancing SDG-aligned sustainability research.",
    image: "assets/posts/iciaeesd-2020/hero.jpg",
    url: "post-iciaeesd-2020.html"
  },
  {
    date: "2019-07-12",
    category: "Conference",
    type: "activity",
    title: "Green Ideas Take Flight: APSCC \u00d7 ClimateLaunchpad Pitch & Boot Camp, Puducherry 2019",
    teaser: "APSCC co-organised the Puducherry Chapter of ClimateLaunchpad 2019 \u2014 the world's largest green business ideas competition \u2014 at Pondicherry University, incubating entrepreneurs with solutions for clean energy, waste, and eco-tech.",
    image: "assets/posts/clp-2019/hero.jpg",
    url: "post-clp-2019.html"
  },

  {
    date: "2019-07-23",
    category: "Conference",
    type: "activity",
    title: "Waste to Energy: APSCC Co-hosts National Workshop on Bioelectrochemical Technologies, Pondicherry University",
    teaser: "APSCC co-organised a three-day SERB-DST national workshop on Bioelectrochemical Systems at Pondicherry University \u2014 exploring microbial fuel cells, wastewater treatment, and resource recovery technologies with leading experts from IIT Roorkee, CSIR-IICT, IIT Palakkad, and SVNIT Surat.",
    image: "assets/posts/energy-conf-pu/hero.jpg",
    url: "post-energy-conf-pu.html"
  },

  {
    date: "2019-04-30",
    category: "Education",
    type: "activity",
    title: "Health, Environment & the SDGs: APSCC Seminar on Good Health and Well-Being",
    teaser: "APSCC organised a seminar on SDG 3 \u2014 Good Health and Well-Being \u2014 in collaboration with Pondicherry University and Durham University (UK), exploring the nexus between environmental sustainability and global public health.",
    image: "assets/posts/well-being-sdg3/hero.jpg",
    url: "post-well-being-sdg3.html"
  },
  {
    date: "2020-11-01",
    category: "Conservation",
    type: "activity",
    title: "Uniting for Wildlife: APSCC Launches the Wildlife Protection & Conservation Network",
    teaser: "APSCC, Pondicherry University, and Government of Puducherry departments jointly launched the Wildlife Protection & Conservation Network — targeting nine species of concern including the Olive Ridley Turtle, Peacock, and Pondicherry Shark.",
    image: "assets/posts/wildlife-network/hero.jpg",
    url: "post-wildlife-network.html"
  },

  {
    date: "2019-01-22",
    category: "Program",
    type: "activity",
    title: "Breathing Cleaner: APSCC Brings NASA Clean Air Plants to the Chief Secretariat, Puducherry",
    teaser: "APSCC partnered with the Chief Secretariat of Puducherry to introduce air-purifying plants \u2014 backed by NASA's Clean Air Study \u2014 as part of the Comprehensive Green Protocol, tackling VOCs, benzene, and formaldehyde in government offices.",
    image: "assets/posts/secretariat-air-pol/hero.jpg",
    url: "post-secretariat-air-pol.html"
  },
  {
    date: "2019-07-29",
    category: "Program",
    type: "activity",
    title: "A Government Office Goes Green: Green Protocol for the Chief Secretariat, Puducherry",
    teaser: "APSCC partnered with the Chief Secretariat of Puducherry to implement 40+ green measures — from LED retrofits and rainwater harvesting to air-purifying plant networks — making it a model for sustainable government offices in India.",
    image: "assets/posts/secretariat-gp/hero.jpg",
    url: "post-secretariat-gp.html"
  },
  {
    date: "2019-03-26",
    category: "Conservation",
    type: "activity",
    title: "One Bag at a Time: APSCC Cotton Bag Drive at Kamban NSS Camp",
    teaser: "During a 7-day NSS camp at Kamban Government Higher Secondary School, APSCC promoted a Cotton Bag Drive \u2014 distributing reusable bags and engaging students in practical action against single-use plastic pollution.",
    image: "assets/posts/cotton-bag-drive/hero.jpg",
    url: "post-cotton-bag-drive.html"
  },
  {
    date: "2020-01-01",
    category: "Education",
    type: "activity",
    title: "Green Protocol in Action: APSCC Capacity-Building Programme with Sorbonne, Pondicherry University & JNV",
    teaser: "APSCC, in collaboration with Universit\u00e9 Panth\u00e9on-Sorbonne (Paris), Pondicherry University, and Jawahar Navodaya Vidyalaya, conducted a transformative training programme on the Green Protocol \u2014 covering regenerative agriculture, resource recovery, and green entrepreneurship.",
    image: "assets/posts/capacity-building-gp/hero.jpg",
    url: "post-capacity-building-gp.html"
  },
  {
    date: "2021-07-16",
    category: "Research",
    type: "research",
    title: "Universities as Climate Leaders: APSCC Researchers Contribute to Global Körber Foundation Study",
    teaser: "Dr. Golda A. Edwin and Dr. M. Nandhivarman contributed to a landmark 7-country study — supported by the Körber Foundation for the Global University Leaders Council — on higher education leadership and governance for sustainability and climate change.",
    image: "assets/posts/universities-climate-study/cover.jpg",
    url: "post-universities-climate-study.html",
    featured: true
  },
  {
    date: "2021-09-12",
    category: "Education",
    type: "activity",
    title: "Learning to Build Resilience: APSCC Supports the UNEP Nature-based Solutions Course",
    teaser: "As a supporting partner, APSCC endorsed the UNEP/PEDRR course on Nature-based Solutions for Disaster and Climate Resilience \u2014 a free, multilingual programme on the SDG Academy/edX platform reaching 50,000 learners from 192 countries.",
    image: "assets/posts/nature-based-solutions/hero.jpg",
    url: "post-nature-based-solutions.html"
  },
  {
    date: "2021-11-27",
    category: "Conference",
    type: "activity",
    title: "International Seminar on Eco-Conscientious Reflective Practices \u2014 APSCC \u00d7 BGCW",
    teaser: "APSCC and Bharathidasan Government College for Women co-hosted an international seminar on eco-conscious reflective practices, bringing together 200+ delegates to bridge environmental awareness with actionable sustainability.",
    image: "assets/posts/bgcw-eco-conf/hero.jpg",
    url: "post-bgcw-eco-conf.html"
  },
  {
    date: "2022-11-02",
    category: "Conservation",
    type: "activity",
    title: "Green Protocol for Wetlands: A Roadmap for Conservation Launched at Pondicherry University",
    teaser: "APSCC and Pondicherry University unveiled the Green Protocol for Wetlands \u2014 a five-strategy roadmap for wetland conservation \u2014 with the support of the Forest Department and Agriculture Department of Puducherry.",
    image: "assets/posts/gpw/hero.jpg",
    url: "post-gpw.html"
  },
  {
    date: "2021-09-28",
    category: "Partnership",
    type: "activity",
    title: "From ESG to SDG: APSCC as Supporting Association at the Economic Times Sustainability Summit 2021",
    teaser: "APSCC served as a supporting association at the Economic Times 'ESG to SDG: Connected Paths for a Better Future' summit \u2014 a landmark corporate sustainability event bridging ESG principles with the 2030 SDG agenda.",
    image: "assets/posts/et-sdg-2021/hero.jpg",
    url: "post-et-sdg-2021.html"
  },
  {
    date: "2026-09-01",
    category: "Conservation",
    type: "activity",
    title: "APSCC at the WWQA Conference: Water Quality, Community Power, and a Sustainable Future",
    teaser: "Dr. Nandhivarman Muthu represented APSCC at the UNEP-organised World Water Quality Alliance Conference in Nairobi, Kenya, connecting grassroots water action to global policy.",
    image: "assets/posts/wwqa-kenya/hero.jpg",
    url: "post-wwqa-kenya.html"
  },
  {
    date: "2026-08-30",
    category: "Education",
    type: "activity",
    title: "Global Young Soil Scientist Program (GYSS)",
    teaser: "Engaging students and early-career researchers in soil science, conservation and sustainability \u2014 inspired by the FAO Global Soil Doctors Programme and implemented through the Topsoil Conservation Series 2024\u201325.",
    image: "assets/posts/gyssp/hero.jpg",
    url: "post-gyssp.html"
  },
  {
    date: "2023-10-25",
    category: "Research",
    type: "research",
    title: "APSCC Contributes to Springer's Encyclopedia of SDG 15: Life on Land",
    teaser: "Dr. Golda A. Edwin and Dr. Nandhivarman Muthu contributed landmark chapters to Springer's Encyclopedia of the UN SDGs 'Life on Land' series — advancing evidence-based land management and soil science globally.",
    image: "assets/posts/life-on-land-springer/cover.jpg",
    url: "post-life-on-land-springer.html",
    featured: true
  },
  {
    date: "2024-12-05",
    category: "Education",
    type: "activity",
    title: "Caring for Soils: APSCC Launches Topsoil Conservation Awareness Series 2024\u201325",
    teaser: "Aligned with World Soil Day 2024's theme 'Measure, Monitor, Manage', APSCC launched a year-long awareness and capacity-building series engaging students and farmers in sustainable soil stewardship.",
    image: "assets/posts/wsd-2024-25/hero.jpg",
    url: "post-wsd-2024-25.html"
  },
  {
    date: "2026-08-31",
    category: "Partnership",
    type: "activity",
    title: "APSCC Keynote Speaker at UNDP Climate Action Academy, Bosnia & Herzegovina",
    teaser: "Dr. Golda Edwin, APSCC Executive Director, delivered the keynote on biodiversity and protected areas at the UNDP Climate Action Academy in Sarajevo, bridging South Asian expertise with European policy.",
    image: "assets/posts/bosnia-undp/hero.jpg",
    url: "post-bosnia-undp.html"
  },

  {
    date: "2024-09-21",
    category: "Conservation",
    type: "activity",
    title: "400 kg of Waste Collected: APSCC Joins Pondicherry's International Coastal Cleanup Day 2024",
    teaser: "Over 200 volunteers united at Kalapet Beach for International Coastal Cleanup Day 2024 under India's Swachh Sagar, Surakshit Sagar mission, collecting 400 kg of waste.",
    image: "assets/posts/iccd-2024/hero.jpg",
    url: "post-iccd-2024.html"
  },
  {
    date: "2025-09-11",
    category: "Program",
    type: "activity",
    title: "Traditional Organic Farmers Festival 2.0 — Rooting Sustainability in Puducherry",
    teaser: "APSCC co-organised the Traditional Organic Farmers Festival 2.0 at Pondicherry University, uniting farmers, students, researchers and entrepreneurs to advance organic agriculture and green livelihoods.",
    image: "assets/posts/farmfest-2025/hero.jpg",
    url: "post-farmfest-2025.html"
  },
  {
    date: "2024-03-30",
    category: "Conservation",
    type: "activity",
    title: "Towards Zero Waste: APSCC Marks the First International Day of Zero Waste with Oulgaret Municipality",
    teaser: "APSCC partnered with Oulgaret Municipality to host 'Towards Zero Waste and Sustainable Municipality' — an awareness and orientation session for Bulk Waste Generators in Puducherry on the inaugural International Day of Zero Waste 2024.",
    image: "assets/posts/zwd-2024/hero.jpg",
    url: "post-zwd-2024.html"
  },

  {
    date: "2025-09-20",
    category: "Conservation",
    type: "activity",
    title: "Cleaning Kalapet: APSCC Joins India's Coastal Cleanup Day 2025",
    teaser: "APSCC co-organised International Coastal Cleanup Day 2025 at Kalapet Beach, Puducherry, as part of India's Swachh Sagar, Surakshit Sagar campaign \u2014 collecting data on marine litter to inform national policy.",
    image: "assets/posts/iccd-2025/hero.jpg",
    url: "post-iccd-2025.html"
  },
  {
    date: "2026-09-03",
    category: "Research",
    type: "news",
    title: "APSCC receives the ISOL NGO Award for Value-Based Sustainable Organizations",
    teaser: "Recognised at the International Conference on Holistic Organisational Sustainability, Pondicherry University.",
    image: "assets/posts/isol-ngo-award/award.jpg",
    url: "post-isol-ngo-award.html",
    featured: true
  },
  {
    date: "2026-09-03",
    category: "Research",
    type: "research",
    title: "Higher Education and SDG 15: Life on Land",
    teaser: "APSCC-edited Emerald volume positioning universities as catalysts for land restoration and biodiversity conservation.",
    image: "assets/posts/higher-education-sdg15/cover.jpg",
    url: "post-higher-education-sdg15.html",
    featured: true
  },
  {
    date: "2026-09-03",
    category: "Research",
    type: "research",
    title: "Curriculum Development for Sustainable Development",
    teaser: "New Springer volume in the World Sustainability Series, co-edited by APSCC with contributions from 20+ countries.",
    image: "assets/posts/curriculum-development-sd/cover.jpg",
    url: "post-curriculum-development-sd.html"
  },
  {
    date: "2026-05-27", category: "Biodiversity", type: "activity",
    title: "BMC Capacity-Building Programme, Puducherry",
    teaser: "A three-part series with the National Biodiversity Authority engaging 700+ participants across Puducherry's municipalities.",
    image: "assets/bmc/bmc-inauguration.jpg", url: "apscc-bmc.html"
  },
  {
    date: "2025-09-16", category: "Conservation", type: "activity",
    title: "International Coastal Cleanup Day 2025",
    teaser: "Beach cleanup mobilization across the Puducherry coastline with Pondicherry University & Forest Department.",
    image: "assets/activities/coastal-cleanup-2025.png", url: "apscc-our-work.html"
  },
  {
    date: "2015-12-16", category: "Recognition", type: "activity",
    title: "Green Campus Champions & Change Maker Award",
    teaser: "APSCC researchers honoured for conceptualising and implementing comprehensive campus greening initiatives.",
    image: "assets/activities/Jnv-researcheraward.jpeg", url: "apscc-our-work.html"
  },
  {
    date: "2013-04-05", category: "Event", type: "activity",
    title: "The Green Campus Summit 2013",
    teaser: "A global dialogue on sustainability in education — a first-of-its-kind summit for Indian campuses.",
    image: "assets/activities/greencampussummit-2013-6239_8711244782_o.jpg", url: "apscc-our-work.html"
  }
];

/* ---- Renderers (used by index.html; safe no-ops if containers absent) ---- */
(function(){
  var P = (window.APSCC_POSTS || []).slice().sort(function(a,b){ return b.date.localeCompare(a.date); });
  function esc(s){ return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;"); }
  function fmtYr(d){ return d.slice(0,4); }

  // Recent activities (right column) — newest N across all types
  var recent = document.getElementById("home-recent");
  if (recent) {
    recent.innerHTML = P.slice(0, 9).map(function(p){
      return '<a class="act-item reveal" href="'+p.url+'">'
           + '<span class="act-thumb"><img src="'+p.image+'" alt="'+esc(p.title)+'" loading="lazy"></span>'
           + '<span class="act-meta"><span class="act-yr">'+fmtYr(p.date)+' · '+esc(p.category)+'</span>'
           + '<span class="act-ttl">'+esc(p.title)+'</span></span></a>';
    }).join("");
  }

  // Featured research (newest research, prefer featured)
  function featOf(type){
    var f = P.filter(function(p){return p.type===type && p.featured;});
    if (f.length) return f[0];
    var t = P.filter(function(p){return p.type===type;});
    return t.length ? t[0] : null;
  }
  function renderFeat(id, p, kicker, moreLabel, moreHref){
    var el = document.getElementById(id);
    if (!el || !p) return;
    el.setAttribute("href", p.url);
    el.innerHTML = '<span class="feat-media"><img src="'+p.image+'" alt="'+esc(p.title)+'"></span>'
      + '<span class="feat-body"><span class="feat-kicker">'+kicker+'</span>'
      + '<span class="feat-title">'+esc(p.title)+'</span>'
      + '<span class="feat-desc">'+esc(p.teaser)+'</span>'
      + '<span class="feat-more">'+moreLabel+'</span></span>';
  }
  renderFeat("home-feat-research", featOf("research"), "Featured research", "Explore research →");
  renderFeat("home-feat-news", featOf("news"), "Featured news", "All news &amp; media →");
})();
