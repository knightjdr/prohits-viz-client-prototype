/* eslint quotes: 0 */

const species = [
  "[Bacillus] caldolyticus",
  "[Candida] glabrata",
  "[Candida] glabrata CBS 138",
  "[Haemophilus] ducreyi 35000HP",
  "Abelson murine leukemia virus",
  "Acanthamoeba castellanii",
  "Acanthamoeba polyphaga mimivirus",
  "Acetoanaerobium sticklandii DSM 519",
  "Acetobacterium dehalogenans",
  "Acidaminococcus fermentans DSM 20731",
  "Acidianus sp. A1-3",
  "Acinetobacter baumannii",
  "Acinetobacter baumannii ATCC 17978",
  "Acinetobacter baumannii ATCC 19606 = CIP 70.34 = JCM 6841",
  "Acinetobacter sp. ADP1",
  "Acinetobacter sp. DL-28",
  "Acinonyx jubatus",
  "Actinidia deliciosa",
  "actinomycete K97-0003",
  "Actinoplanes teichomyceticus",
  "Adeno-associated virus 2 Srivastava/1982",
  "Aequorea victoria",
  "Aeromonas hydrophila",
  "Aeromonas salmonicida",
  "Aeromonas virus 44RR2",
  "Aeropyrum pernix K1",
  "African swine fever virus",
  "African swine fever virus Malawi LIL 20/1",
  "Aggregatibacter actinomycetemcomitans",
  "Agrobacterium fabrum str. C58",
  "Agrobacterium tumefaciens",
  "Agrobacterium tumefaciens (strain 15955)",
  "AKR (endogenous) murine leukemia virus",
  "Aliivibrio fischeri",
  "Allochromatium vinosum",
  "Alternaria alternata",
  "Amycolatopsis orientalis",
  "Anabaena sp.",
  "Anaplasma phagocytophilum str. HZ",
  "Anolis carolinensis",
  "Anopheles gambiae",
  "Anopheles gambiae str. PEST",
  "Anser anser anser",
  "Anser indicus",
  "Antheraea pernyi",
  "Antirrhinum majus",
  "Apis mellifera",
  "Aplysia californica",
  "Apocrypta bakeri",
  "Aquifex aeolicus VF5",
  "Arabidopsis lyrata",
  "Arabidopsis thaliana",
  "Araneus diadematus",
  "Archaeoglobus fulgidus DSM 4304",
  "Argentinian mammarenavirus",
  "Aromatoleum aromaticum EbN1",
  "Arthrospira platensis",
  "Arthrospira platensis HN01",
  "Ascidia sydneiensis samea",
  "Aspergillus fumigatus Af293",
  "Aspergillus nidulans",
  "Aspergillus nidulans FGSC A4",
  "Aspergillus niger CBS 513.88",
  "Aspergillus oryzae RIB40",
  "Aspergillus parasiticus SU-1",
  "Aspergillus terreus",
  "Autographa californica nucleopolyhedrovirus",
  "Avena sativa",
  "Avian erythroblastosis virus (strain Sloan-Kettering)",
  "Avian infectious bronchitis virus (strain Beaudette)",
  "Avian musculoaponeurotic fibrosarcoma virus AS42",
  "Avian myeloblastosis virus",
  "Avian myelocytomatosis virus 29",
  "Avian sarcoma virus PR2257",
  "Azospirillum brasilense",
  "Azotobacter vinelandii",
  "Azotobacter vinelandii DJ",
  "Bacillus amyloliquefaciens",
  "Bacillus anthracis",
  "Bacillus cereus",
  "Bacillus cereus ATCC 10987",
  "Bacillus cereus ATCC 14579",
  "Bacillus circulans",
  "Bacillus clausii",
  "Bacillus halodurans C-125",
  "Bacillus licheniformis",
  "Bacillus megaterium",
  "Bacillus megaterium NBRC 15308 = ATCC 14581",
  "Bacillus phage PBS2",
  "Bacillus phage SF6",
  "Bacillus phage SPP1",
  "Bacillus pseudofirmus OF4",
  "Bacillus sp. PS3",
  "Bacillus sp. TA2.A1",
  "Bacillus subtilis",
  "Bacillus subtilis subsp. natto",
  "Bacillus subtilis subsp. subtilis str. 168",
  "Bacillus thuringiensis serovar israelensis",
  "Bacillus thuringiensis serovar kurstaki",
  "Bacillus velezensis FZB42",
  "Bacillus virus GA1",
  "Bacillus virus phi29",
  "Bacteroides fragilis YCH46",
  "Bacteroides thetaiotaomicron VPI-5482",
  "Bamboo mosaic virus",
  "Bartonella henselae str. Houston-1",
  "Bartonella tribocorum",
  "Bdellovibrio bacteriovorus HD100",
  "Betula pendula",
  "Bifidobacterium longum",
  "Blastochloris viridis",
  "Bluetongue virus (serotype 1 / isolate South Africa)",
  "Bombyx mori",
  "Bombyx mori nucleopolyhedrovirus",
  "Bordetella bronchiseptica",
  "Bordetella bronchiseptica RB50",
  "Bordetella pertussis Tohama I",
  "Bordetella virus BPP1",
  "Borna disease virus 1",
  "Borna disease virus-V",
  "Borrelia turicatae",
  "Borreliella burgdorferi",
  "Borreliella burgdorferi B31",
  "Bos taurus",
  "Bovine alphaherpesvirus 1",
  "Bovine coronavirus",
  "Bovine gammaherpesvirus 4",
  "Bovine herpesvirus type 1.1",
  "Bovine herpesvirus type 1.1 (strain Cooper)",
  "Bovine herpesvirus type 1.1 (strain Jura)",
  "Bovine papillomavirus",
  "Bovine papillomavirus type 2",
  "Bovine respiratory syncytial virus ATCC51908",
  "Bovine respirovirus 3",
  "Bovine viral diarrhea virus 1",
  "Brachypodium distachyon",
  "Bradyrhizobium diazoefficiens USDA 110",
  "Brassica juncea",
  "Brassica napus",
  "Brassica oleracea",
  "Brassica oleracea var. viridis",
  "Brassica rapa subsp. rapa",
  "Brazilian mammarenavirus",
  "Breda virus serotype 1",
  "Brevibacillus parabrevis",
  "Brucella abortus 2308",
  "Brucella abortus bv. 1 str. 9-941",
  "Brucella melitensis bv. 1 str. 16M",
  "Brucella suis 1330",
  "Burkholderia cenocepacia J2315",
  "Burkholderia glumae",
  "Burkholderia multivorans ATCC 17616",
  "Burkholderia pseudomallei K96243",
  "Caenorhabditis briggsae",
  "Caenorhabditis elegans",
  "Caenorhabditis remanei",
  "Caldanaerobacter subterraneus subsp. tengcongensis MB4",
  "Campylobacter jejuni",
  "Campylobacter jejuni subsp. jejuni 81-176",
  "Campylobacter jejuni subsp. jejuni NCTC 11168 = ATCC 700819",
  "Campylobacter lari RM2100",
  "Candida albicans SC5314",
  "Candida dubliniensis CD36",
  "Candida parapsilosis CDC317",
  "Candida tropicalis",
  "Canis lupus familiaris",
  "Capra hircus",
  "Carassius carassius",
  "Carboxydothermus hydrogenoformans Z-2901",
  "Carcharhinus leucas",
  "Carcharhinus plumbeus",
  "Carcinoscorpius rotundicauda",
  "Castellaniella defragrans",
  "Catharanthus roseus",
  "Caulobacter vibrioides",
  "Caulobacter vibrioides CB15",
  "Caulobacter vibrioides NA1000",
  "Cavia cutleri",
  "Cavia porcellus",
  "Chaetomium thermophilum var. thermophilum DSM 1495",
  "Chandipura virus I653514",
  "Cheilocostus speciosus",
  "Chicken anemia virus Cuxhaven-1/Germany",
  "Chinchilla lanigera",
  "Chironomus tentans",
  "Chlamydia pneumoniae",
  "Chlamydia trachomatis 434/Bu",
  "Chlamydia trachomatis A/HAR-13",
  "Chlamydia trachomatis D/UW-3/CX",
  "Chlamydomonas reinhardtii",
  "Chlorobaculum tepidum TLS",
  "Chlorocebus aethiops",
  "Chlorocebus sabaeus",
  "Chromobacterium violaceum ATCC 12472",
  "Ciona intestinalis",
  "Citrobacter freundii",
  "Citrobacter rodentium ICC168",
  "Clostridioides difficile",
  "Clostridioides difficile 630",
  "Clostridium acetobutylicum ATCC 824",
  "Clostridium botulinum",
  "Clostridium botulinum A str. Hall",
  "Clostridium botulinum B1 str. Okra",
  "Clostridium botulinum D phage",
  "Clostridium botulinum F str. Langeland",
  "Clostridium cochlearium",
  "Clostridium perfringens",
  "Clostridium perfringens D",
  "Clostridium perfringens D str. JGS1721",
  "Clostridium perfringens str. 13",
  "Clostridium tetani E88",
  "Comamonas sp. JS765",
  "Comamonas testosteroni",
  "Corynebacterium diphtheriae NCTC 13129",
  "Corynebacterium glutamicum ATCC 13032",
  "Cowpox virus",
  "Cowpox virus (Brighton Red)",
  "Cricetulus griseus",
  "Cricetulus longicaudatus",
  "Crimean-Congo hemorrhagic fever virus strain IbAr10200",
  "Crocodylus porosus",
  "Cryptococcus neoformans var. neoformans",
  "Cryptococcus neoformans var. neoformans JEC21",
  "Culex quinquefasciatus",
  "Cupriavidus metallidurans CH34",
  "Cupriavidus necator H16",
  "Danio rerio",
  "Dasyatis akajei",
  "Daucus carota",
  "Deinococcus radiodurans R1",
  "Delphinapterus leucas",
  "Deltapapillomavirus 4",
  "Dermatophagoides pteronyssinus",
  "Desmodus rotundus",
  "Desulfitobacterium hafniense",
  "Desulfovibrio africanus",
  "Desulfovibrio fructosivorans",
  "Desulfovibrio gigas DSM 1382 = ATCC 19364",
  "Desulfovibrio vulgaris str. 'Miyazaki F'",
  "Desulfovibrio vulgaris str. Hildenborough",
  "Dickeya chrysanthemi",
  "Dickeya dadantii 3937",
  "Dictyostelium discoideum",
  "Dictyostelium discoideum AX4",
  "Didelphis virginiana",
  "Dokdonia eikasta",
  "Drosophila hydei",
  "Drosophila immigrans",
  "Drosophila mauritiana",
  "Drosophila melanogaster",
  "Drosophila pseudoobscura pseudoobscura",
  "Drosophila sechellia",
  "Drosophila simulans",
  "Drosophila virilis",
  "Drosophila yakuba",
  "Dryopteris crassirhizoma",
  "Ebola virus - Mayinga, Zaire, 1976",
  "Ebola virus - Zaire (1995)",
  "Echinophyllia sp. SC22",
  "Ectromelia virus",
  "Ectromelia virus Moscow",
  "Edwardsiella tarda",
  "Edwardsiella tarda EIB202",
  "Ehrlichia chaffeensis str. Arkansas",
  "Elephantid herpesvirus 1 (isolate Kiba)",
  "Elizabethkingia meningoseptica",
  "Elizabethkingia miricola",
  "Entamoeba histolytica",
  "Enterobacteria phage 933W",
  "Enterobacteria phage G4",
  "Enterobacteria phage L",
  "Enterobacteria phage P-EibD",
  "Enterobacteria phage P21",
  "Enterobacteria phage phiX174 isolate Sanger",
  "Enterococcus faecalis",
  "Enterococcus faecalis V583",
  "Enterococcus faecium",
  "Enterococcus faecium DO",
  "Enterococcus hirae ATCC 9790",
  "Epichloe festucae",
  "Epstein-barr virus strain ag876",
  "Equid alphaherpesvirus 1",
  "Equid herpesvirus type 2 strain 86/87",
  "Equine herpesvirus type 1 (strain AB4P)",
  "Equine herpesvirus type 1 (strain Kentucky A)",
  "Equine herpesvirus type 4 (strain 1942)",
  "Equine infectious anemia virus (CLONE 1369)",
  "Equus caballus",
  "Equus przewalskii",
  "Escherichia coli",
  "Escherichia coli BW2952",
  "Escherichia coli CFT073",
  "Escherichia coli HS",
  "Escherichia coli K-12",
  "Escherichia coli O127:H6 str. E2348/69",
  "Escherichia coli O139:H28 str. E24377A",
  "Escherichia coli O157:H7",
  "Escherichia coli O55:H7 str. CB9615",
  "Escherichia coli S88",
  "Escherichia coli str. K-12 substr. MG1655",
  "Escherichia coli str. K-12 substr. W3110",
  "Escherichia coli UTI89",
  "Escherichia virus HK97",
  "Escherichia virus Lambda",
  "Escherichia virus Mu",
  "Escherichia virus P1",
  "Escherichia virus P2",
  "Escherichia virus T4",
  "Eubacterium barkeri",
  "Euprosthenops australis",
  "Felis catus",
  "Finegoldia magna",
  "Flavobacterium frigidimaris",
  "Flock House virus",
  "Francisella tularensis subsp. tularensis",
  "Francisella tularensis subsp. tularensis SCHU S4",
  "Francisella tularensis subsp. tularensis WY96-3418",
  "Friend murine leukemia virus (ISOLATE FB29)",
  "Fusarium graminearum PH-1",
  "Fusobacterium nucleatum",
  "Fusobacterium nucleatum subsp. nucleatum ATCC 25586",
  "Galdieria sulphuraria",
  "Gallid alphaherpesvirus 2",
  "Gallus gallus",
  "Geobacillus kaustophilus HTA426",
  "Geobacillus sp. Y412MC52",
  "Geobacillus stearothermophilus",
  "Geobacter metallireducens GS-15",
  "Gerbera hybrid cultivar",
  "Giardia intestinalis",
  "Gloeobacter violaceus PCC 7421",
  "Gluconobacter oxydans",
  "Glycine max",
  "Golovinomyces orontii",
  "Gossypium hirsutum",
  "Groundnut rosette virus MC1",
  "Guanarito mammarenavirus",
  "Haemophilus influenzae",
  "Haemophilus influenzae 3655",
  "Haemophilus influenzae Rd KW20",
  "Haliotis diversicolor",
  "Halobacterium salinarum NRC-1",
  "Haloferax mediterranei ATCC 33500",
  "Haloferax volcanii DS2",
  "Halorhodospira halophila",
  "Halothiobacillus neapolitanus c2",
  "Helicobacter mustelae 12198",
  "Helicobacter pylori",
  "Helicobacter pylori 26695",
  "Helicobacter pylori G27",
  "Helicobacter pylori J99",
  "Hendra virus horse/Australia/Hendra/1994",
  "Hepacivirus C",
  "Hepatitis B virus",
  "Hepatitis B virus adw2/Rutter/1979",
  "Hepatitis B virus adw4/Nicaragua/2928Nic/1997",
  "Hepatitis B virus ayw/Australia/AustKW/1991",
  "Hepatitis B virus ayw/France/Tiollais/1979",
  "Hepatitis B virus C/ayr human/Japan/Okamoto",
  "Hepatitis B virus subtype adr",
  "Hepatitis B virus subtype adw2",
  "Hepatitis B virus subtype adyw",
  "Hepatitis C virus subtype 1b",
  "Herpesvirus saimiri (strain 11)",
  "Hieracium piloselloides",
  "Histoplasma capsulatum",
  "HIV-1 M:B_ARV2/SF2",
  "HIV-1 M:B_HXB2R",
  "HIV-1 M:B_Lai",
  "HIV-1 M:B_MN",
  "HIV-1 M:C_92BR025",
  "HIV-1 M:F1_93BR020",
  "HIV-1 M:G_SE6165",
  "HIV-1 M:H_90CF056",
  "HIV-1 N_YBF106",
  "Homo sapiens",
  "Hordeum vulgare",
  "HTLV-1 isolate Mel 15",
  "Human adenovirus 2",
  "Human adenovirus 5",
  "Human adenovirus B3",
  "Human adenovirus D9",
  "Human alphaherpesvirus 1",
  "Human alphaherpesvirus 1 strain 17",
  "Human alphaherpesvirus 1 strain F",
  "Human alphaherpesvirus 1 strain KOS",
  "Human alphaherpesvirus 1 strain Patton",
  "Human alphaherpesvirus 2",
  "Human alphaherpesvirus 3",
  "Human betacoronavirus 2c EMC/2012",
  "Human betaherpesvirus 5",
  "Human betaherpesvirus 6A",
  "Human betaherpesvirus 6B",
  "Human betaherpesvirus 7",
  "Human coronavirus 229E",
  "Human coronavirus HKU1 (isolate N5)",
  "Human coronavirus NL63",
  "Human gammaherpesvirus 4",
  "Human gammaherpesvirus 8",
  "Human herpesvirus 2 strain HG52",
  "Human herpesvirus 3 strain Dumas",
  "Human herpesvirus 3 strain Oka vaccine",
  "Human herpesvirus 4 strain B95-8",
  "Human herpesvirus 4 strain CAO",
  "Human herpesvirus 5 strain AD169",
  "Human herpesvirus 5 strain Merlin",
  "Human herpesvirus 5 strain Toledo",
  "Human herpesvirus 5 strain Towne",
  "Human herpesvirus 6 (strain GS)",
  "Human herpesvirus 6 (strain Uganda-1102)",
  "Human herpesvirus 6 strain Z29",
  "Human herpesvirus 8 strain GK18",
  "Human herpesvirus 8 type M",
  "Human immunodeficiency virus 1",
  "Human immunodeficiency virus 2",
  "Human immunodeficiency virus type 1 (BRU ISOLATE)",
  "Human immunodeficiency virus type 1 (CLONE 12)",
  "Human immunodeficiency virus type 1 (ELI ISOLATE)",
  "Human immunodeficiency virus type 1 (HXB3 ISOLATE)",
  "Human immunodeficiency virus type 1 (isolate YU2)",
  "Human immunodeficiency virus type 1 (NEW YORK-5 ISOLATE)",
  "Human immunodeficiency virus type 1 (SF162 ISOLATE)",
  "Human immunodeficiency virus type 1 (STRAIN UGANDAN / ISOLATE U455)",
  "Human immunodeficiency virus type 1 (WMJ2 ISOLATE)",
  "Human immunodeficiency virus type 1 (Z2/CDC-Z34 ISOLATE)",
  "Human immunodeficiency virus type 1 (ZAIRE 6 ISOLATE)",
  "Human immunodeficiency virus type 1 BH10",
  "Human immunodeficiency virus type 2 (ISOLATE GHANA-1)",
  "Human immunodeficiency virus type 2 (ISOLATE ROD)",
  "Human mastadenovirus E",
  "Human metapneumovirus",
  "Human metapneumovirus CAN97-83",
  "Human orthopneumovirus",
  "Human papillomavirus 3",
  "Human papillomavirus 37",
  "Human papillomavirus 38",
  "Human papillomavirus 4",
  "Human papillomavirus 5",
  "Human papillomavirus 9",
  "Human papillomavirus 93",
  "Human papillomavirus type 10",
  "Human papillomavirus type 11",
  "Human papillomavirus type 16",
  "Human papillomavirus type 18",
  "Human papillomavirus type 1a",
  "Human papillomavirus type 20",
  "Human papillomavirus type 26",
  "Human papillomavirus type 31",
  "Human papillomavirus type 32",
  "Human papillomavirus type 33",
  "Human papillomavirus type 35",
  "Human papillomavirus type 39",
  "Human papillomavirus type 45",
  "Human papillomavirus type 51",
  "Human papillomavirus type 55",
  "Human papillomavirus type 58",
  "Human papillomavirus type 6",
  "Human papillomavirus type 68",
  "Human papillomavirus type 6b",
  "Human papillomavirus type 70",
  "Human papillomavirus type 8",
  "Human papillomavirus type 92",
  "Human papillomavirus type 96",
  "Human papillomavirus type me180",
  "Human parainfluenza virus 2 (strain Toshiba)",
  "Human respiratory syncytial virus A2",
  "Human rubulavirus 2",
  "Human spumaretrovirus",
  "Human T-cell leukemia virus 3 (strain Pyl43)",
  "Human T-cell leukemia virus type I",
  "Human T-cell lymphotrophic virus type 1 (Caribbean isolate)",
  "Human T-cell lymphotrophic virus type 1 (strain ATK)",
  "Human T-cell lymphotropic virus type 1 (african isolate)",
  "Human T-lymphotropic virus 2",
  "Hungateiclostridium thermocellum",
  "Hungateiclostridium thermocellum ATCC 27405",
  "Hyaloperonospora arabidopsidis",
  "Hyaloperonospora arabidopsidis Emoy2",
  "Hydrogenovibrio marinus",
  "Hyphomicrobium denitrificans",
  "Ictalurus punctatus",
  "Ignicoccus hospitalis KIN4/I",
  "Influenza A virus (A/Aichi/2/1968(H3N2))",
  "Influenza A virus (A/Anhui/1-YK_RG01/2013(H7N9))",
  "Influenza A virus (A/Brevig Mission/1/1918(H1N1))",
  "Influenza A virus (A/California/04/2009(H1N1))",
  "Influenza A virus (A/California/08/2009(H1N1))",
  "Influenza A virus (A/chicken/China/27402/1997(H5N1))",
  "Influenza A virus (A/chicken/Germany/N/1949(H10N7))",
  "Influenza A virus (A/chicken/Guangdong/6/97(H9N2))",
  "Influenza A virus (A/chicken/Kurgan/3/2005(H5N1))",
  "Influenza A virus (A/chicken/Nakorn-Patom/Thailand/CU-K2/2004(H5N1))",
  "Influenza A virus (A/chicken/Rostock/8/1934(H7N1))",
  "Influenza A virus (A/chicken/Scotland/1959(H5N1))",
  "Influenza A virus (A/duck/Hokkaido/8/1980(H3N8))",
  "Influenza A virus (A/Duck/Hong Kong/2986.1/2000(H5N1))",
  "Influenza A virus (A/duck/Ukraine/1/1963(H3N8))",
  "Influenza A virus (A/equine/Prague/1/1956(H7N7))",
  "Influenza A virus (A/Gf/HK/38/2002(H5N1))",
  "Influenza A virus (A/goose/Guangdong/1/1996(H5N1))",
  "Influenza A virus (A/Hatay/2004/(H5N1))",
  "Influenza A virus (A/Hickox/1940(H1N1))",
  "Influenza A virus (A/Hong Kong/1/1968(H3N2))",
  "Influenza A virus (A/Hong Kong/1074/1999(H9N2))",
  "Influenza A virus (A/Hong Kong/156/97(H5N1))",
  "Influenza A virus (A/Hong Kong/482/97(H5N1))",
  "Influenza A virus (A/hvPR8/34(H1N1))",
  "Influenza A virus (A/Indonesia/5/2005(H5N1))",
  "Influenza A virus (A/Japan/305/1957(H2N2))",
  "Influenza A virus (A/little yellow-shouldered bat/Guatemala/060/2010(H17N10))",
  "Influenza A virus (A/little yellow-shouldered bat/Guatemala/153/2009(H17N10))",
  "Influenza A virus (A/little yellow-shouldered bat/Guatemala/164/2009(H17N10))",
  "Influenza A virus (A/Malaysia/33386/2005(H3N2))",
  "Influenza A virus (A/mallard/Astrakhan/263/1982(H14N5))",
  "Influenza A virus (A/mallard/Ohio/556/1987(H5N9))",
  "Influenza A virus (A/mink/Sweden/E12665/84(H10N4))",
  "Influenza A virus (A/Moscow/10/1999(H3N2))",
  "Influenza A virus (A/New Caledonia/20/1999(H1N1))",
  "Influenza A virus (A/New York/1682/2009(H1N1))",
  "Influenza A virus (A/Norway/807/2004(H3N2))",
  "Influenza A virus (A/Panama/2007/1999(H3N2))",
  "Influenza A virus (A/Puerto Rico/8/1934(H1N1))",
  "Influenza A virus (A/Queensland/7/70(H3N2))",
  "Influenza A virus (A/Shanghai/02/2013(H7N9))",
  "Influenza A virus (A/Solomon Islands/3/2006(H1N1))",
  "Influenza A virus (A/Taiwan/126/2009(H1N1))",
  "Influenza A virus (A/Texas/36/1991(H1N1))",
  "Influenza A virus (A/Turkey/651242/2006(H5N1))",
  "Influenza A virus (A/turkey/Bethlehem-Glilit/1492-B/1982(H1N1))",
  "Influenza A virus (A/turkey/Canada/1963(H6N8))",
  "Influenza A virus (A/turkey/Ireland/1378/1983(H5N8))",
  "Influenza A virus (A/turkey/Turkey/1/2005(H5N1))",
  "Influenza A virus (A/Udorn/307/1972(H3N2))",
  "Influenza A virus (A/Victoria/3/1975(H3N2))",
  "Influenza A virus (A/Viet Nam/1203/2004(H5N1))",
  "Influenza A virus (A/Vietnam/1194/2004(H5N1))",
  "Influenza A virus (A/Wilson-Smith/1933(H1N1))",
  "Influenza A virus (A/Wisconsin/67/2005(H3N2))",
  "Influenza A virus (A/WSN/1933(H1N1))",
  "Influenza A virus (A/Wyoming/03/2003(H3N2))",
  "Influenza A virus (A/X-31(H3N2))",
  "Influenza B virus (B/Hong Kong/8/1973)",
  "Influenza B virus (B/Lee/1940)",
  "Influenza B virus (B/Maryland/1/2001)",
  "Influenza B virus (B/Memphis/13/2003)",
  "Influenza C virus (C/Ann Arbor/1/50)",
  "Influenza C virus (C/Johannesburg/1/66)",
  "Janthinobacterium sp. J3",
  "Janthinobacterium sp. Marseille",
  "Kappapapillomavirus 2",
  "Kitasatospora aureofaciens",
  "Klebsiella aerogenes",
  "Klebsiella michiganensis KCTC 1686",
  "Klebsiella oxytoca",
  "Klebsiella pneumoniae",
  "Klebsiella pneumoniae 342",
  "Klebsiella pneumoniae KCTC 2242",
  "Klebsiella pneumoniae subsp. pneumoniae NTUH-K2044",
  "Kluyveromyces lactis",
  "Kluyveromyces lactis NRRL Y-1140",
  "Kluyveromyces marxianus DMKU3-1042",
  "Komagataeibacter xylinus",
  "Komagataella pastoris",
  "Komagataella phaffii CBS 7435",
  "Komagataella phaffii GS115",
  "La Crosse virus L78",
  "Lactobacillus acidophilus NCFM",
  "Lactobacillus brevis ATCC 367",
  "Lactobacillus casei",
  "Lactobacillus crispatus ST1",
  "Lactobacillus gasseri 224-1",
  "Lactococcus lactis subsp. cremoris MG1363",
  "Lactococcus lactis subsp. lactis",
  "Lactococcus lactis subsp. lactis Il1403",
  "Lactococcus phage TP901-1",
  "Lassa virus Josiah",
  "Legionella pneumophila",
  "Legionella pneumophila str. Paris",
  "Legionella pneumophila subsp. pneumophila str. Philadelphia 1",
  "Leiostomus xanthurus",
  "Leishmania infantum",
  "Leishmania major",
  "Lelystad virus",
  "Lethocerus indicus",
  "Listeria monocytogenes",
  "Listeria monocytogenes EGD-e",
  "Listeria monocytogenes serotype 4b str. F2365",
  "Listeria monocytogenes serotype 4b str. LL195",
  "Lotus japonicus",
  "Lymphocytic choriomeningitis mammarenavirus",
  "Lymphocytic choriomeningitis virus (strain Armstrong)",
  "Lyngbya majuscula",
  "Macaca fascicularis",
  "Macaca mulatta",
  "Macaca mulatta polyomavirus 1",
  "Macaca mulatta rhadinovirus 17577",
  "Machupo mammarenavirus",
  "Magnaporthe grisea",
  "Magnetospirillum gryphiswaldense",
  "Magnetospirillum magnetotacticum",
  "Mammalian orthoreovirus 1 Lang",
  "Mammalian orthoreovirus 3 Dearing",
  "Manduca sexta",
  "Mannheimia haemolytica",
  "Marburg virus - Musoke, Kenya, 1980",
  "Marek's disease herpesvirus type 1 strain MD5",
  "Mason-Pfizer monkey virus",
  "Mastigocladus laminosus",
  "Measles morbillivirus",
  "Measles virus strain AIK-C",
  "Measles virus strain Edmonston",
  "Measles virus strain Edmonston-B",
  "Measles virus strain Halle",
  "Measles virus strain Ichinose-B95a",
  "Measles virus strain Schwarz",
  "Medicago truncatula",
  "Meiothermus taiwanensis",
  "Meleagris gallopavo",
  "Merkel cell polyomavirus",
  "Mesembryanthemum crystallinum",
  "Mesocricetus auratus",
  "Mesorhizobium tianshanense",
  "Methanocaldococcus jannaschii DSM 2661",
  "Methanococcus maripaludis",
  "Methanococcus maripaludis S2",
  "Methanococcus voltae",
  "Methanopyrus kandleri AV19",
  "Methanosarcina barkeri str. Fusaro",
  "Methanosarcina mazei",
  "Methanosarcina mazei Go1",
  "Methanothermobacter marburgensis str. Marburg",
  "Methanothermobacter thermautotrophicus str. Delta H",
  "Methanothermus fervidus",
  "Methylococcus capsulatus str. Bath",
  "Methylophilus methylotrophus",
  "Methylorubrum extorquens AM1",
  "Microbispora corallina",
  "Micrococcus luteus",
  "Mimosa pudica",
  "Moloney murine leukemia virus",
  "Moloney murine leukemia virus isolate Shinnick",
  "Moorella thermoacetica",
  "Moraxella catarrhalis",
  "Mouse mammary tumor virus (STRAIN C3H)",
  "Mumps virus strain Enders",
  "Murid betaherpesvirus 1",
  "Murid gammaherpesvirus 4",
  "Murine cytomegalovirus (strain K181)",
  "Murine cytomegalovirus (strain Smith)",
  "Murine hepatitis virus strain A59",
  "Murine minute virus strain MVM prototype",
  "Mus musculus",
  "Musa acuminata",
  "Mustela putorius furo",
  "Mycobacterium leprae",
  "Mycobacterium leprae TN",
  "Mycobacterium phage Giles",
  "Mycobacterium tuberculosis CDC1551",
  "Mycobacterium tuberculosis H37Ra",
  "Mycobacterium tuberculosis H37Rv",
  "Mycobacterium tuberculosis variant bovis BCG str. Pasteur 1173P2",
  "Mycobacterium virus Bxb1",
  "Mycolicibacterium smegmatis",
  "Mycolicibacterium smegmatis MC2 155",
  "Mycoplasma fermentans",
  "Mycoplasma gallisepticum",
  "Mycoplasma hyopneumoniae 232",
  "Mycoplasma hyorhinis",
  "Mycoplasma mobile",
  "Mycoplasma pneumoniae M129",
  "Mycoplasma pulmonis UAB CTIP",
  "Mycoplasma suis",
  "Mycoplasma suis str. Illinois",
  "Myxococcus xanthus",
  "Myxococcus xanthus DK 1622",
  "Myxoma virus (strain Lausanne)",
  "Natronomonas pharaonis",
  "Natronomonas pharaonis DSM 2160",
  "Neisseria gonorrhoeae",
  "Neisseria meningitidis",
  "Neisseria meningitidis MC58",
  "Neisseria meningitidis serogroup B",
  "Neisseria mucosa",
  "Neobatrachus sudelli",
  "Neovison vison",
  "Neurospora crassa",
  "Neurospora crassa OR74A",
  "Newcastle disease virus (STRAIN AUSTRALIA-VICTORIA/32)",
  "Newcastle disease virus B1/48",
  "Nicotiana benthamiana",
  "Nicotiana glutinosa",
  "Nicotiana plumbaginifolia",
  "Nicotiana tabacum",
  "Nicotiana tomentosiformis",
  "Nipah henipavirus",
  "Nitrosomonas europaea ATCC 19718",
  "Nitrosopumilus maritimus SCM1",
  "Nocardia otitidiscaviarum",
  "Nostoc sp. PCC 7119",
  "Nostoc sp. PCC 7120",
  "Novosphingobium aromaticivorans DSM 12444",
  "Nudaurelia capensis omega virus",
  "Ogataea angusta",
  "Oncorhynchus mykiss",
  "Oreochromis aureus",
  "Orgyia pseudotsugata single capsid nuclopolyhedrovirus",
  "Oryctolagus cuniculus",
  "Oryza sativa",
  "Oryza sativa Indica Group",
  "Oryza sativa Japonica Group",
  "Oryzias latipes",
  "Ovis aries",
  "Oxalobacter formigenes",
  "Pachyrhizus erosus",
  "Paenibacillus sp. NyZ101",
  "Pan paniscus",
  "Pan troglodytes",
  "Pantoea stewartii subsp. stewartii",
  "Papillomavirus sylvilagi (STRAIN KANSAS)",
  "Papio cynocephalus",
  "Paraburkholderia caryophylli",
  "Paraburkholderia rhizoxinica HKI 454",
  "Paracoccus denitrificans",
  "Paramecium bursaria Chlorella virus 1",
  "Paramecium bursaria Chlorella virus AN69C",
  "Paramecium tetraurelia",
  "Passalora fulva",
  "Pasteurella multocida",
  "Patiria pectinifera",
  "Pectobacterium atrosepticum",
  "Pectobacterium carotovorum subsp. carotovorum",
  "Pediculus humanus corporis",
  "Penaeus japonicus",
  "Penicillium stoloniferum virus S",
  "Petunia x hybrida",
  "Phaeospirillum molischianum",
  "Phage 434",
  "Phaseolus vulgaris",
  "Photobacterium angustum S14",
  "Photobacterium damselae",
  "Photorhabdus laumondii subsp. laumondii TTO1",
  "Photorhabdus luminescens",
  "Phycomyces blakesleeanus",
  "Physcomitrella patens",
  "Pilosella officinarum",
  "Pipistrellus bat coronavirus HKU5",
  "Pisum sativum",
  "Plasmodium falciparum",
  "Plasmodium falciparum 3D7",
  "Plasmodium vivax",
  "Plasmodium vivax Sal-1",
  "Plasmodium yoelii yoelii",
  "Pneumocystis carinii",
  "Podospora anserina",
  "Podospora anserina S mat+",
  "Pongo abelii",
  "Populus tremula x Populus tremuloides",
  "Populus trichocarpa",
  "Populus x canadensis",
  "Porcine circovirus 2",
  "Porcine epidemic diarrhea virus CV777",
  "Porcine reproductive and respiratory syndrome virus",
  "Porcine torovirus",
  "Porphyra purpurea",
  "Porphyridium purpureum",
  "Porphyromonas gingivalis W83",
  "Prochlorococcus virus PSSP7",
  "Propionibacterium freudenreichii subsp. shermanii",
  "Prosthecobacter dejongeii",
  "Proteus mirabilis",
  "Proteus mirabilis ATCC 29906",
  "Providencia stuartii",
  "Prunus dulcis x Prunus persica",
  "Pseudo-nitzschia multiseries",
  "Pseudoalteromonas haloplanktis TAC125",
  "Pseudomonas aeruginosa",
  "Pseudomonas aeruginosa ATCC 25324",
  "Pseudomonas aeruginosa ATCC 700888",
  "Pseudomonas aeruginosa CIG1",
  "Pseudomonas aeruginosa PA7",
  "Pseudomonas aeruginosa PAO1",
  "Pseudomonas aeruginosa UCBPP-PA14",
  "Pseudomonas alcaligenes",
  "Pseudomonas amygdali pv. tabaci",
  "Pseudomonas fluorescens",
  "Pseudomonas fluorescens Pf0-1",
  "Pseudomonas fragi",
  "Pseudomonas mendocina",
  "Pseudomonas pavonaceae",
  "Pseudomonas phage Pf3",
  "Pseudomonas phage phi8",
  "Pseudomonas phage PhiPA3",
  "Pseudomonas putida",
  "Pseudomonas putida DOT-T1E",
  "Pseudomonas putida KT2440",
  "Pseudomonas resinovorans",
  "Pseudomonas savastanoi pv. glycinea",
  "Pseudomonas savastanoi pv. phaseolicola",
  "Pseudomonas sp.",
  "Pseudomonas sp. CF600",
  "Pseudomonas sp. DSM 6611",
  "Pseudomonas sp. OX1",
  "Pseudomonas stutzeri",
  "Pseudomonas syringae",
  "Pseudomonas syringae pv. tomato str. DC3000",
  "Pseudomonas veronii",
  "Pseudomonas virus D3112",
  "Pseudomonas virus phi6",
  "Puccinia triticina",
  "Pyrobaculum neutrophilum V24Sta",
  "Pyrococcus abyssi GE5",
  "Pyrococcus furiosus DSM 3638",
  "Pyrococcus horikoshii OT3",
  "Rabies virus vnukovo-32",
  "Radiomyces spectabilis",
  "Ralstonia solanacearum GMI1000",
  "Ralstonia sp. E2",
  "Rattus norvegicus",
  "Reovirus sp.",
  "Reston ebolavirus",
  "Rheum palmatum",
  "Rhizobium leguminosarum bv. viciae",
  "Rhodobacter capsulatus",
  "Rhodobacter capsulatus SB 1003",
  "Rhodobacter sphaeroides",
  "Rhodobacter sphaeroides 2.4.1",
  "Rhodococcus erythropolis",
  "Rhodococcus jostii RHA1",
  "Rhodopseudomonas palustris CGA009",
  "Rhodospirillum rubrum",
  "Rhodospirillum rubrum ATCC 11170",
  "Rhodothermus marinus",
  "Ricinus communis",
  "Rift Valley fever virus",
  "Rift valley fever virus (STRAIN ZH-548 M12)",
  "Rinderpest virus (strain RBOK)",
  "Roseobacter denitrificans OCh 114",
  "Rotavirus sp.",
  "Rous sarcoma virus - Prague C",
  "Rous sarcoma virus (strain H-19)",
  "Rous sarcoma virus (strain Schmidt-Ruppin A)",
  "Ruegeria pomeroyi DSS-3",
  "Rumex obtusifolius",
  "Ruminococcus albus",
  "Ruminococcus flavefaciens",
  "Saccharolobus shibatae",
  "Saccharolobus solfataricus",
  "Saccharolobus solfataricus P2",
  "Saccharomyces cerevisiae",
  "Saccharomyces cerevisiae JAY291",
  "Saccharomyces cerevisiae RM11-1a",
  "Saccharomyces cerevisiae S288C",
  "Saccharomyces cerevisiae YJM789",
  "Saccharomyces uvarum MCYC 623",
  "Saccharopolyspora erythraea",
  "Saguinus oedipus",
  "Saimiri sciureus",
  "Salipiger bermudensis HTCC2601",
  "Salmonella enterica",
  "Salmonella enterica subsp. enterica serovar Typhi",
  "Salmonella enterica subsp. enterica serovar Typhimurium",
  "Salmonella enterica subsp. enterica serovar Typhimurium str. 14028S",
  "Salmonella enterica subsp. enterica serovar Typhimurium str. 798",
  "Salmonella enterica subsp. enterica serovar Typhimurium str. LT2",
  "Salmonella enterica subsp. enterica serovar Typhimurium str. SL1344",
  "Salmonella enterica subsp. enterica serovar Typhisuis",
  "Salmonella virus P22",
  "Sandfly fever Sicilian virus",
  "SARS coronavirus",
  "Scaptodrosophila lebanonensis",
  "Schistosoma mansoni",
  "Schizosaccharomyces pombe",
  "Schizosaccharomyces pombe 972h-",
  "Secale cereale",
  "Selaginella moellendorffii",
  "Sendai virus (strain Fushimi)",
  "Sendai virus (Z)",
  "Serratia marcescens",
  "Serratia proteamaculans",
  "Serratia sp. ATCC 39006",
  "SFTS virus HB29",
  "Shewanella oneidensis MR-1",
  "Shewanella putrefaciens",
  "Shewanella sp. SIB1",
  "Shigella dysenteriae",
  "Shigella flexneri",
  "Shigella flexneri 2a",
  "Shigella sonnei Ss046",
  "Shigella virus Sf6",
  "Simian immunodeficiency virus",
  "Simian immunodeficiency virus - agm.tan-1",
  "Simian immunodeficiency virus (isolate AGM / clone GRI-1)",
  "Simian immunodeficiency virus (MM142-83 ISOLATE)",
  "Simian immunodeficiency virus (PBJ/BC13 ISOLATE) (SOOTY MANGABEY)",
  "Simian virus 5 (strain W3)",
  "Sinapis alba",
  "Sinorhizobium fredii NGR234",
  "Sinorhizobium meliloti",
  "Sinorhizobium meliloti 1021",
  "Sinorhizobium meliloti SM11",
  "SIVcpz EK505",
  "Small ruminant morbillivirus",
  "Solanum lycopersicum",
  "Solanum pimpinellifolium",
  "Solanum tuberosum",
  "Sorangium cellulosum So ce56",
  "Sordaria macrospora",
  "Sorghum bicolor",
  "Sphingobium sp. SYK-6",
  "Sphingomonas sp.",
  "Sphingosinicella xenopeptidilytica",
  "Spinacia oleracea",
  "Squalus acanthias",
  "Staphylococcus aureus",
  "Staphylococcus aureus subsp. aureus COL",
  "Staphylococcus aureus subsp. aureus MRSA252",
  "Staphylococcus aureus subsp. aureus MSSA476",
  "Staphylococcus aureus subsp. aureus Mu50",
  "Staphylococcus aureus subsp. aureus MW2",
  "Staphylococcus aureus subsp. aureus N315",
  "Staphylococcus aureus subsp. aureus NCTC 8325",
  "Staphylococcus aureus subsp. aureus str. Newman",
  "Staphylococcus aureus subsp. aureus USA300",
  "Staphylococcus epidermidis RP62A",
  "Sterkiella nova",
  "Streptococcus agalactiae",
  "Streptococcus agalactiae A909",
  "Streptococcus dysgalactiae subsp. equisimilis",
  "Streptococcus equi subsp. equi",
  "Streptococcus gordonii",
  "Streptococcus mutans",
  "Streptococcus mutans UA159",
  "Streptococcus parasanguinis",
  "Streptococcus phage Cp-1",
  "Streptococcus pneumoniae",
  "Streptococcus pneumoniae R6",
  "Streptococcus pneumoniae TIGR4",
  "Streptococcus pyogenes",
  "Streptococcus pyogenes MGAS10394",
  "Streptococcus pyogenes MGAS6180",
  "Streptococcus pyogenes serotype M1",
  "Streptococcus pyogenes serotype M49",
  "Streptococcus sp. 'group G'",
  "Streptococcus thermophilus LMG 18311",
  "Streptococcus virus C1",
  "Streptomyces albogriseolus",
  "Streptomyces antibioticus",
  "Streptomyces coelicolor",
  "Streptomyces coelicolor A3(2)",
  "Streptomyces flavovirens",
  "Streptomyces griseus",
  "Streptomyces griseus subsp. griseus NBRC 13350",
  "Streptomyces lividans",
  "Streptomyces luridus",
  "Streptomyces maritimus",
  "Streptomyces nodosus",
  "Streptomyces nogalater",
  "Streptomyces rubiginosus",
  "Streptomyces sp. CL190",
  "Streptomyces sp. X-119-6",
  "Streptomyces tendae",
  "Streptomyces thioluteus",
  "Streptomyces toyocaensis",
  "Streptomyces venezuelae",
  "Streptomyces viridochromogenes DSM 40736",
  "Strongylocentrotus purpuratus",
  "Suberites domuncula",
  "Sudan ebolavirus - Uganda (2000)",
  "Suid alphaherpesvirus 1",
  "Suid herpesvirus 1 (strain Indiana-Funkhauser / Becker)",
  "Suid herpesvirus 1 strain Kaplan",
  "Sulfolobus acidocaldarius DSM 639",
  "Sulfurisphaera tokodaii str. 7",
  "Sulfurospirillum multivorans DSM 12446",
  "Sus scrofa",
  "Synechococcus elongatus PCC 6301",
  "Synechococcus elongatus PCC 7942",
  "Synechocystis sp. PCC 6803",
  "Synechocystis sp. PCC 6803 substr. Kazusa",
  "Taenia solium",
  "Taeniopygia guttata",
  "Taxus canadensis",
  "Tetragenococcus halophilus",
  "Tetrahymena thermophila",
  "Tetronarce californica",
  "Thauera aromatica",
  "Theileria annulata",
  "Thermochromatium tepidum",
  "Thermococcus kodakarensis KOD1",
  "Thermoplasma acidophilum DSM 1728",
  "Thermosynechococcus elongatus BP-1",
  "Thermosynechococcus vulcanus",
  "Thermotoga maritima MSB8",
  "Thermus aquaticus",
  "Thermus thermophilus",
  "Thermus thermophilus HB27",
  "Thermus thermophilus HB8",
  "Tobacco mosaic virus",
  "Tobacco mosaic virus (vulgare)",
  "Todarodes pacificus",
  "Tolypocladium inflatum",
  "Tomato yellow leaf curl virus-Mild [Japan:Atumi]",
  "Toscana virus",
  "Toxoplasma gondii",
  "Trematomus bernacchii",
  "Treponema denticola",
  "Treponema denticola ATCC 35405",
  "Treponema pallidum",
  "Treponema pallidum subsp. pallidum str. Nichols",
  "Tribolium castaneum",
  "Trichoderma reesei",
  "Trichoderma reesei QM6a",
  "Trichormus variabilis",
  "Triticum aestivum",
  "Trypanosoma brucei",
  "Trypanosoma brucei brucei TREU927",
  "Trypanosoma cruzi strain CL Brener",
  "Tylonycteris bat coronavirus HKU4",
  "Ulva pertusa",
  "uncultured archaeon",
  "uncultured bacterium",
  "undefined",
  "unidentified",
  "Urtica dioica",
  "Ustilago maydis 521",
  "Vaccinia virus",
  "Vaccinia virus Copenhagen",
  "Vaccinia virus WR",
  "Variola virus human/India/Ind3/1967",
  "Vaucheria frigida",
  "Vesicular stomatitis Indiana virus",
  "Vesicular stomatitis Indiana virus strain Orsay",
  "Vesicular stomatitis Indiana virus strain San Juan",
  "Vesicular stomatitis virus",
  "Vesicular stomatitis virus (serotype New Jersey / strain Ogden)",
  "Vibrio alginolyticus",
  "Vibrio cholerae",
  "Vibrio cholerae O1 biovar El Tor str. N16961",
  "Vibrio cholerae O395",
  "Vibrio harveyi",
  "Vibrio mimicus",
  "Vibrio parahaemolyticus RIMD 2210633",
  "Vibrio vulnificus",
  "Vibrio vulnificus YJ016",
  "Vicia faba",
  "Vitis vinifera",
  "Wolinella succinogenes DSM 1740",
  "Wood mouse herpesvirus",
  "Woodchuck hepatitis virus",
  "Xanthobacter autotrophicus Py2",
  "Xanthomonas campestris pv. campestris str. ATCC 33913",
  "Xanthomonas campestris pv. vesicatoria str. 85-10",
  "Xenopus laevis",
  "Xenopus tropicalis",
  "Xenotropic MuLV-related virus VP42",
  "Xenotropic MuLV-related virus VP62",
  "Xylella fastidiosa 9a5c",
  "Yaba-like disease virus",
  "Yarrowia lipolytica CLIB122",
  "Yersinia enterocolitica",
  "Yersinia enterocolitica subsp. enterocolitica 8081",
  "Yersinia entomophaga",
  "Yersinia pestis",
  "Yersinia pseudotuberculosis IP 32953",
  "Zaire ebolavirus",
  "Zea mays",
  "Zea mays subsp. mays",
];

export default species;
