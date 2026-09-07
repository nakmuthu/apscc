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
    date: "2017-07-30",
    category: "Education",
    type: "activity",
    title: "Science Beyond the Classroom: APSCC at the Summer Vacation Science Camp, Puducherry 2017",
    teaser: "APSCC contributed as resource persons at the month-long Summer Vacation Science Camp held at Dr. Abdul Kalam Science Centre and Planetarium \u2014 inspiring 100+ school students to explore sustainability and environmental science.",
    image: "assets/posts/science-camp-2017/thumb-hero.jpg",
    url: "post-science-camp-2017.html"
  },
  {
    date: "2015-04-30",
    category: "Conference",
    type: "activity",
    title: "Building a Sustainable Chennai: APSCC at the IIT Madras Sustainability Summit 2015",
    teaser: "APSCC collaborated with IIT Madras S-NET to host the Sustainability Summit 2015 — a panel discussion on sustainable urban design for Chennai and a case study challenge on solid waste management, bringing together experts and student innovators.",
    image: "assets/posts/post-snet-iit-2015/thumb-hero.jpg",
    url: "post-snet-iit-2015.html"
  },
  {
    date: "2016-08-19",
    category: "Partnership",
    type: "activity",
    title: "Building Soil Resilience: APSCC Partners with the FAO Global Soil Partnership",
    teaser: "APSCC partnered with the FAO Global Soil Partnership \u2014 committing to soil health, organic farming, and local food systems as the foundation of sustainable food security for campuses and communities.",
    image: "assets/posts/fao-gsp/thumb-hero.jpg",
    url: "post-fao-gsp.html"
  },
  {
    date: "2013-07-03",
    category: "Conference",
    type: "activity",
    title: "Growth vs. Sustainability: Dr. Golda Edwin at the ISCN 2013 Conference, Singapore",
    teaser: "Dr. Golda Edwin of APSCC addressed the 7th Annual ISCN Conference at the National University of Singapore \u2014 presenting on what a sustainable campus looks like in a developing country in the plenary 'Growth vs. Sustainability: Are These Mutually Exclusive Goals?'",
    image: "assets/posts/iscn-singapore/thumb-hero.jpg",
    url: "post-iscn-singapore.html"
  },
  {
    date: "2013-04-17",
    category: "Conference",
    type: "activity",
    title: "Campus Challenge 2013: VIT University Vellore Receives APSCC's Green Campus Award",
    teaser: "VIT University, Vellore received the Campus Challenge 2013 Award from APSCC at the Green Campus Summit 2013 in Puducherry — presented by Chief Minister N. Rangasamy to Vice-President Sankar Viswanathan.",
    image: "assets/posts/gcs-vit-award/thumb-hero.jpg",
    url: "post-gcs-vit-award.html"
  },
  {
    date: "2014-04-30",
    category: "Conference",
    type: "activity",
    title: "Green Vision 2020: APSCC Title Sponsors S-NET Case Study Competition at IIT Madras 2014",
    teaser: "APSCC partnered with IIT Madras as title sponsor for S-NET 2014, a case study competition challenging student teams to develop a 6-year 'Green Vision 2020' sustainable development plan for the fictional city of Vilaspur.",
    image: "assets/posts/post-snet-iit-2014/thumb-hero.jpg",
    url: "post-snet-iit-2014.html"
  },
  {
    date: "2018-08-20",
    category: "Conservation",
    type: "activity",
    title: "Bahour Lake: Saving Puducherry's Second-Largest Freshwater Lake",
    teaser: "APSCC and Pondicherry University assessed 26 site-specific threats to Bahour Lake \u2014 an IBA home to 25,000+ waterfowl \u2014 and developed a Green Protocol for sustainable lake management.",
    image: "assets/posts/bahour-vulnerability/thumb-hero.jpg",
    url: "post-bahour-vulnerability.html"
  },
  {
    date: "2015-07-04",
    category: "Partnership",
    type: "activity",
    title: "Leading the Way: APSCC Becomes ULSF's Strategic Partner for the Talloires Declaration in India",
    teaser: "APSCC announced its strategic partnership with ULSF (Association of University Leaders for a Sustainable Future) \u2014 becoming India's champion for the Talloires Declaration, a 10-point action plan for sustainability in higher education signed by 400+ university presidents worldwide.",
    image: "assets/posts/post-ulsf-partnership/thumb-hero.jpg",
    url: "post-ulsf-partnership.html",
    featured: true
  },
  {
    date: "2013-04-30",
    category: "Conference",
    type: "activity",
    title: "On the National Mall: APSCC at the US EPA's 9th National Sustainable Design Expo, Washington D.C.",
    teaser: "APSCC participated in the US EPA's 9th Annual National Sustainable Design Expo on the National Mall in Washington D.C. \u2014 showcasing India's sustainability initiatives alongside 400 university students, scientists, and engineers from across the globe.",
    image: "assets/posts/usepa-expo/thumb-hero.jpg",
    url: "post-usepa-expo.html"
  },
  {
    date: "2018-08-25",
    category: "Conservation",
    type: "activity",
    title: "Oussudu Lake: APSCC's Vulnerability Assessment of Puducherry's First Bird Sanctuary",
    teaser: "APSCC collaborated with Pondicherry University and Lt. Governor Kiran Bedi's office to conduct a comprehensive vulnerability assessment of Oussudu Lake \u2014 identifying 39 threats and recommending eco-tourism and conservation pathways.",
    image: "assets/posts/oussudu-vulnerability/thumb-hero.jpg",
    url: "post-oussudu-vulnerability.html"
  },
  {
    date: "2017-06-04",
    category: "Education",
    type: "activity",
    title: "Living Archive: APSCC Students Visit the French Institute of Pondicherry Herbarium",
    teaser: "APSCC organised a study visit to the Herbarium of the French Institute of Pondicherry — a botanical treasure housing 24,000+ specimens from 4,659 species, established in 1956 by Pierre Legris.",
    image: "assets/posts/ifp-herbarium/thumb-hero.jpg",
    url: "post-ifp-herbarium.html"
  },
  {
    date: "2013-04-05",
    category: "Conference",
    type: "activity",
    title: "The Green Campus Summit 2013: APSCC Hosts India's First International Summit on Campus Sustainability",
    teaser: "APSCC organised the landmark Green Campus Summit 2013 in Puducherry \u2014 the first international summit of its kind in India \u2014 uniting 200+ delegates from 12 countries to advance campus sustainability across industrialised and developing regions.",
    image: "assets/posts/gcs-2013/thumb-hero.jpg",
    url: "post-gcs-2013.html",
    featured: true
  },
  {
    date: "2018-04-13",
    category: "Program",
    type: "activity",
    title: "A Milestone for Sustainable Development: The Comprehensive Green Protocol for Puducherry",
    teaser: "The Comprehensive Green Protocol (CGP) \u2014 developed by APSCC, Pondicherry University, PPCC and DST&E \u2014 was launched as a practical framework for educational institutions, industries, residences and organizations across Puducherry to adopt sustainable practices.",
    image: "assets/posts/cgp/thumb-hero.jpg",
    url: "post-cgp.html"
  },

  {
    date: "2013-08-18",
    category: "Partnership",
    type: "activity",
    title: "Measuring What Matters: APSCC Becomes India's Regional Expert for the Sulitest",
    teaser: "APSCC became the Regional or National Expert Committee (RNEC) for India for the Sulitest — the world's first international tool for assessing and enhancing sustainability literacy, created in the wake of Rio+20.",
    image: "assets/posts/sulitest/thumb-hero.jpg",
    url: "post-sulitest.html"
  },
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
    date: "2018-08-10",
    category: "Conservation",
    type: "activity",
    title: "Kanagan Lake: 22 Threats, One Green Protocol",
    teaser: "APSCC, with Dr. Golda Edwin and Dr. Nandhivarman, assessed Kanagan Lake at Oulgaret Municipality, identifying 22 urgent site-specific threats and recommending a Green Protocol for restoration, biodiversity, and eco-tourism.",
    image: "assets/posts/kanagan-vulnerability/thumb-hero.jpg",
    url: "post-kanagan-vulnerability.html"
  },
  {
    date: "2017-08-20",
    category: "Education",
    type: "activity",
    title: "10,000 Participants, One Mission: SLAPSWM 2017 Transforms Waste Management in Puducherry",
    teaser: "SLAPSWM 2017–18 brought together 10,000 participants across 90+ sessions spanning Puducherry, Karaikal, Mahe and Yanam, launching the Comprehensive Green Protocol.",
    image: "assets/posts/slapswm-2017/thumb-hero.jpg",
    url: "post-slapswm-2017.html"
  },
  {
    date: "2017-06-04",
    category: "Conservation",
    type: "activity",
    title: "Art for the Earth: Winners of the Climate Change & Biodiversity Drawing Contest, 4th Indian Biodiversity Congress",
    teaser: "APSCC celebrated the winners of a drawing contest themed 'Climate Change and Biodiversity' held in conjunction with the 4th Indian Biodiversity Congress — inspiring young artists to visualise the connections between climate and nature.",
    image: "assets/posts/ibc-drawing-contest/thumb-hero.jpg",
    url: "post-ibc-drawing-contest.html"
  },
  {
    date: "2015-12-16",
    category: "Program",
    type: "activity",
    title: "Model Green Campus: APSCC Founders Honoured by Jawahar Navodaya Vidyalaya Alumni for Green Campus Initiative",
    teaser: "JANVAA honoured APSCC's founders for transforming Jawahar Navodaya Vidyalaya into a model global sustainability campus — featuring biogas, vermicomposting, xeriscaping, and organic gardens.",
    image: "assets/posts/jnv-gcs-award/thumb-hero.jpg",
    url: "post-jnv-gcs-award.html"
  },
  {
    date: "2013-01-05",
    category: "Research",
    type: "research",
    title: "Water Through Native Roots: APSCC's Constructed Wetlands Research After UNESCO-IHE Training",
    teaser: "Following training at UNESCO-IHE (Delft), APSCC researchers demonstrated that native Arundo species matches Typha in constructed wetland water treatment — opening affordable local solutions for communities.",
    image: "assets/posts/unesco-ihe/thumb-cover.jpg",
    url: "post-unesco-ihe.html"
  },
  {
    date: "2012-09-28",
    category: "Conference",
    type: "activity",
    title: "Water, Land & Food: APSCC at the International Summer School on Sustainable Territory Management, Todi, Italy",
    teaser: "Dr. Edwin represented APSCC at the International Summer School on Sustainable Management and Promotion of Territory in Todi, Italy — sharing frameworks for bridging water availability with food security in vulnerable regions.",
    image: "assets/posts/smpt-italy/thumb-hero.jpg",
    url: "post-smpt-italy.html"
  },
  {
    date: "2012-09-04",
    category: "Conference",
    type: "activity",
    title: "Rio+20 and Beyond: APSCC at the World Symposium on Sustainable Development at Universities",
    teaser: "APSCC at the World Symposium on Sustainable Development at Universities 2012 — a parallel event to Rio+20 — presenting on sustainability literacy and the role of higher education in achieving the SDGs.",
    image: "assets/posts/wssdu-2012/thumb-hero.jpg",
    url: "post-wssdu-2012.html"
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

/* ---- Our Work activities grid (renders into #act-grid if present) ---- */
(function(){
  var grid = document.getElementById("act-grid");
  if (!grid) return;  // safe no-op on pages without the grid

  // Entries that are NOT native post pages and must not appear as activity cards:
  //  - apscc-bmc.html: section link (category "Biodiversity" has no filter tab)
  //  - apscc-our-work.html: self-referential ICCD-2025 duplicate of post-iccd-2025.html
  var EXCLUDE = {
    "apscc-bmc.html": 1,
    "apscc-our-work.html": 1
  };

  function esc(s){
    return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }
  // Card grid uses compressed thumbnails: turn ".../hero.jpg" into ".../thumb-hero.jpg".
  function thumb(img){
    var i = img.lastIndexOf("/");
    var dir = img.slice(0, i + 1), base = img.slice(i + 1);
    return base.indexOf("thumb-") === 0 ? img : dir + "thumb-" + base;
  }
  // Year label; preserve the one custom range in the data.
  function yearLabel(p){
    return p.url === "post-wsd-2024-25.html" ? "2024\u201325" : p.date.slice(0, 4);
  }

  var posts = (window.APSCC_POSTS || [])
    .filter(function(p){ return !EXCLUDE[p.url]; })
    .slice()
    .sort(function(a, b){ return b.date.localeCompare(a.date); });

  grid.innerHTML = posts.map(function(p){
    var cat = (p.category || "").toLowerCase();
    return '<a class="act-card fade-in" href="' + p.url + '"'
         + ' data-cat="' + esc(cat) + '" data-date="' + esc(p.date) + '">'
         + '<span class="ac-media"><img src="' + thumb(p.image) + '" alt="' + esc(p.title) + '" loading="lazy"></span>'
         + '<span class="ac-body">'
         + '<span class="ac-top"><span class="act-category">' + esc(p.category) + '</span>'
         + '<span class="act-year">' + esc(yearLabel(p)) + '</span></span>'
         + '<h3>' + esc(p.title) + '</h3>'
         + '<p>' + esc(p.teaser) + '</p>'
         + '</span></a>';
  }).join("");
})();
