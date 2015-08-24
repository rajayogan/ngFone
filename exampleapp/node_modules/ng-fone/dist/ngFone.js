angular.module('ngFone', [])

    .service('fonename', function(){

        var deviceinfo = [
            {
                "brandname":"Acer",
                "marketname":"Liquid E3S",
                "labelname":"acer_ZXR",
                "Model":"Z130"
            },
            {
                "brandname":"Acer",
                "marketname":"A1-810",
                "labelname":"mango",
                "Model":"A1-810"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Z205",
                "labelname":"acer_z205",
                "Model":"Z205"
            },
            {
                "brandname":"Acer",
                "marketname":"LiquidMT",
                "labelname":"a4",
                "Model":"Acer Liquid Metal"
            },
            {
                "brandname":"Acer",
                "marketname":"LiquidMT",
                "labelname":"a4",
                "Model":"Liquid Metal"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Z205",
                "labelname":"acer_z205p",
                "Model":"Z205P"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Jade",
                "labelname":"acer_S55",
                "Model":"S55"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid",
                "labelname":"a1",
                "Model":"Acer S100"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab A500",
                "labelname":"picasso",
                "Model":"A500"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab 7",
                "labelname":"acer_aprilia",
                "Model":"A1-713"
            },
            {
                "brandname":"Acer",
                "marketname":"CloudMobile S500",
                "labelname":"a9",
                "Model":"S500"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia One 8",
                "labelname":"vespa8",
                "Model":"B1-810"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid E600",
                "labelname":"e600",
                "Model":"E600"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid X1",
                "labelname":"s3",
                "Model":"S53"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Z520",
                "labelname":"acer_z520",
                "Model":"Z520"
            },
            {
                "brandname":"Acer",
                "marketname":"Icona One 7",
                "labelname":"vespa",
                "Model":"B1-730HD"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab 7",
                "labelname":"acer_apriliahd",
                "Model":"A1-713HD"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab A501",
                "labelname":"picasso",
                "Model":"A501"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid C1",
                "labelname":"I1",
                "Model":"I110"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Jade S",
                "labelname":"acer_S56",
                "Model":"S56"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Z3",
                "labelname":"ZX",
                "Model":"Z130"
            },
            {
                "brandname":"Acer",
                "marketname":"Picasso",
                "labelname":"picasso",
                "Model":"A501"
            },
            {
                "brandname":"Acer",
                "marketname":"TA2",
                "labelname":"ta2",
                "Model":"TA272HUL"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Z5",
                "labelname":"acer_ZXL",
                "Model":"Z150"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid S2",
                "labelname":"a12",
                "Model":"S520"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid E3",
                "labelname":"acer_e3n",
                "Model":"E380"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab A701",
                "labelname":"picasso_mf",
                "Model":"A701"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab A200",
                "labelname":"picasso_e",
                "Model":"A200"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia One 7",
                "labelname":"vespatn",
                "Model":"B1-730"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab A210",
                "labelname":"picasso_e2",
                "Model":"A210"
            },
            {
                "brandname":"Acer",
                "marketname":"Tab 7",
                "labelname":"td070va1",
                "Model":"TD070VA1"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Z500",
                "labelname":"acer_Z500",
                "Model":"Z500"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid S3",
                "labelname":"s3",
                "Model":"S53"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Gallant E350",
                "labelname":"C8",
                "Model":"AK330"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia One 8",
                "labelname":"vespa8",
                "Model":"A1-850"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia One 7",
                "labelname":"G1-725",
                "Model":"G1-725"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab 8",
                "labelname":"ducati2fhd",
                "Model":"A1-840FHD"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab A510",
                "labelname":"picasso_m",
                "Model":"A510"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid E1",
                "labelname":"C10",
                "Model":"V360"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Jade Z",
                "labelname":"acer_S57",
                "Model":"S57"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Z3",
                "labelname":"acer_ZXR",
                "Model":"Z130"
            },
            {
                "brandname":"Acer",
                "marketname":"Picasso",
                "labelname":"ventana",
                "Model":"A500"
            },
            {
                "brandname":"Acer",
                "marketname":"Picasso",
                "labelname":"ventana",
                "Model":"TPA60W"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Z410",
                "labelname":"acer_z410",
                "Model":"Z410"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid S1",
                "labelname":"a10",
                "Model":"S510"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid E3",
                "labelname":"acer_e3",
                "Model":"E380"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab A700",
                "labelname":"picasso_mf",
                "Model":"A700"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab 8",
                "labelname":"ducati2hd3g",
                "Model":"A1-841"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia One 7",
                "labelname":"vespa2",
                "Model":"B1-750"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab 10",
                "labelname":"acer_harley",
                "Model":"A3-A20"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia TalkTab 7",
                "labelname":"acer_a1_724",
                "Model":"A1-724"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Z200",
                "labelname":"acer_z200",
                "Model":"Z200"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid E700",
                "labelname":"acer_e39",
                "Model":"E39"
            },
            {
                "brandname":"Acer",
                "marketname":"Picasso",
                "labelname":"ventana",
                "Model":"G100W"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Z4",
                "labelname":"acer_Z6",
                "Model":"Z160"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Mini",
                "labelname":"C4R",
                "Model":"E310"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid E2",
                "labelname":"C11",
                "Model":"V370"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab A511",
                "labelname":"picasso_m",
                "Model":"A511"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab 8",
                "labelname":"ducati2hd",
                "Model":"A1-840"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia One 7",
                "labelname":"vespa",
                "Model":"B1-730HD"
            },
            {
                "brandname":"Acer",
                "marketname":"Aspire A3",
                "labelname":"aa3-600",
                "Model":"AA3-600"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab 10",
                "labelname":"acer_harleyfhd",
                "Model":"A3-A20FHD"
            },
            {
                "brandname":"Acer",
                "marketname":"Iconia Tab A211",
                "labelname":"picasso_e2",
                "Model":"A211"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid",
                "labelname":"a1",
                "Model":"Acer Liquid"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Gallant E350",
                "labelname":"C8",
                "Model":"E350"
            },
            {
                "brandname":"Acer",
                "marketname":"Liquid Z205",
                "labelname":"acer_z205p",
                "Model":"Z205"
            },
            {
                "brandname":"Acer",
                "marketname":"LiquidMT",
                "labelname":"a4",
                "Model":"Liquid MT"
            },
            {
                "brandname":"Archos",
                "marketname":"Archos ArcBook",
                "labelname":"a101db",
                "Model":"Archos 101 DB"
            },
            {
                "brandname":"Archos",
                "marketname":"Auchan Qilive97R",
                "labelname":"QiLive97R",
                "Model":"QiLive 97R"
            },
            {
                "brandname":"Archos",
                "marketname":"GamePad",
                "labelname":"A70GP",
                "Model":"ARCHOS GAMEPAD"
            },
            {
                "brandname":"Archos",
                "marketname":"Smart Home Tablet",
                "labelname":"hometablet",
                "Model":"Archos Smart Home Tablet"
            },
            {
                "brandname":"Archos",
                "marketname":"101 Cobalt",
                "labelname":"AC101CO",
                "Model":"Archos 101 Cobalt"
            },
            {
                "brandname":"Archos",
                "marketname":"101b XS2",
                "labelname":"ac101bxs2",
                "Model":"ARCHOS 101b XS2"
            },
            {
                "brandname":"Archos",
                "marketname":"45c Platinum",
                "labelname":"ac45cpl",
                "Model":"Archos 45c Platinum"
            },
            {
                "brandname":"Archos",
                "marketname":"50b Helium",
                "labelname":"ac50bhe",
                "Model":"Archos 50b Helium 4G"
            },
            {
                "brandname":"Archos",
                "marketname":"70 Titanium",
                "labelname":"A70TI",
                "Model":"ARCHOS 70 Titanium"
            },
            {
                "brandname":"Archos",
                "marketname":"80 Childpad",
                "labelname":"A80CHP",
                "Model":"ARCHOS 80 CHILDPAD"
            },
            {
                "brandname":"Archos",
                "marketname":"90 Neon",
                "labelname":"a90ne",
                "Model":"Archos 90 Neon"
            },
            {
                "brandname":"Archos",
                "marketname":"97b Platinum",
                "labelname":"AC97BPL",
                "Model":"ARCHOS 97b PLATINUM"
            },
            {
                "brandname":"Archos",
                "marketname":"Archos 70it 2",
                "labelname":"A70it2",
                "Model":"ARCHOS 70it2"
            },
            {
                "brandname":"Archos",
                "marketname":"Auchan Qilive8",
                "labelname":"QiLive8",
                "Model":"QiLive 8"
            },
            {
                "brandname":"Archos",
                "marketname":"101 Childpad",
                "labelname":"A101CHP",
                "Model":"ARCHOS 101 CHILDPAD"
            },
            {
                "brandname":"Archos",
                "marketname":"Bush MyTablet 7",
                "labelname":"ac70bu",
                "Model":"BUSH 7.0 TABLET"
            },
            {
                "brandname":"Archos",
                "marketname":"101 Titanium",
                "labelname":"A101TI",
                "Model":"ARCHOS 101 Titanium"
            },
            {
                "brandname":"Archos",
                "marketname":"45 Helium 4G",
                "labelname":"a45he",
                "Model":"Archos 45 Helium 4G"
            },
            {
                "brandname":"Archos",
                "marketname":"My Tablet 101",
                "labelname":"ac101bu",
                "Model":"BUSH 10.1 TABLET"
            },
            {
                "brandname":"Archos",
                "marketname":"Bush 5\\ Android Phone",
                "labelname":"ac50bne",
                "Model":"BUSH 5 Android\""
            },
            {
                "brandname":"Archos",
                "marketname":"Auchan Qilive 40",
                "labelname":"ql40",
                "Model":"Qilive 40"
            },
            {
                "brandname":"Archos",
                "marketname":"97 Xenon",
                "labelname":"A97XE",
                "Model":"ARCHOS 97 XENON"
            },
            {
                "brandname":"Archos",
                "marketname":"80 Xenon",
                "labelname":"A80XE",
                "Model":"Archos 80 Xenon"
            },
            {
                "brandname":"Archos",
                "marketname":"80 Carbon",
                "labelname":"AC80CA",
                "Model":"ARCHOS 80 Carbon"
            },
            {
                "brandname":"Archos",
                "marketname":"70 Neon",
                "labelname":"ac70ne",
                "Model":"Archos 70 Neon"
            },
            {
                "brandname":"Archos",
                "marketname":"50b Helium",
                "labelname":"ac50bhe",
                "Model":"AC50BHE"
            },
            {
                "brandname":"Archos",
                "marketname":"45 Titanium",
                "labelname":"a45ti",
                "Model":"Archos 45 Titanium"
            },
            {
                "brandname":"Archos",
                "marketname":"101 Xenon",
                "labelname":"a101xe",
                "Model":"Archos 101 Xenon"
            },
            {
                "brandname":"Archos",
                "marketname":"Qilive79",
                "labelname":"Qilive79",
                "Model":"Qilive 79"
            },
            {
                "brandname":"Archos",
                "marketname":"Quechua Tablet 8",
                "labelname":"A80RG11",
                "Model":"A80RG11"
            },
            {
                "brandname":"Archos",
                "marketname":"FamilyPad 2",
                "labelname":"A133FP2",
                "Model":"ARCHOS FAMILYPAD 2"
            },
            {
                "brandname":"Archos",
                "marketname":"Auchan Qilive97",
                "labelname":"QiLive97",
                "Model":"QiLive 97"
            },
            {
                "brandname":"Archos",
                "marketname":"Archos 80 Helium",
                "labelname":"ac80he",
                "Model":"Archos 80 Helium 4G"
            },
            {
                "brandname":"Archos",
                "marketname":"Archos 101 Xenon",
                "labelname":"ac101cxe",
                "Model":"Archos 101c Xenon"
            },
            {
                "brandname":"Archos",
                "marketname":"101 Platinum",
                "labelname":"A101PL",
                "Model":"ARCHOS 101 PLATINUM"
            },
            {
                "brandname":"Archos",
                "marketname":"40c Titanium",
                "labelname":"ac40cti",
                "Model":"Archos 40c Titanium"
            },
            {
                "brandname":"Archos",
                "marketname":"50 Platinum",
                "labelname":"msm8625",
                "Model":"Archos 50 Platinum"
            },
            {
                "brandname":"Archos",
                "marketname":"53 Titanium",
                "labelname":"a53ti",
                "Model":"Archos 53 Titanium"
            },
            {
                "brandname":"Archos",
                "marketname":"79 Platinium",
                "labelname":"AC79PL",
                "Model":"ARCHOS 79 Platinum"
            },
            {
                "brandname":"Archos",
                "marketname":"80 Titanium",
                "labelname":"A80TI",
                "Model":"ARCHOS 80 TITANIUM"
            },
            {
                "brandname":"Archos",
                "marketname":"97 Platinum",
                "labelname":"A97PL",
                "Model":"ARCHOS 97 Platinum"
            },
            {
                "brandname":"Archos",
                "marketname":"Archos 40c Titanium",
                "labelname":"ac40ctiv2",
                "Model":"ARCHOS 40C TIv2"
            },
            {
                "brandname":"Archos",
                "marketname":"Auchan QiLive 45",
                "labelname":"ql45",
                "Model":"Qilive 45"
            },
            {
                "brandname":"Archos",
                "marketname":"Auchan Selecline 10",
                "labelname":"SELECLINE10",
                "Model":"Selecline 10"
            },
            {
                "brandname":"Archos",
                "marketname":"GamePad 2",
                "labelname":"A70GP2",
                "Model":"ARCHOS GAMEPAD2"
            },
            {
                "brandname":"Archos",
                "marketname":"TV Connect",
                "labelname":"LUDO",
                "Model":"ARCHOS LUDOG10"
            },
            {
                "brandname":"Archos",
                "marketname":"Qilive7V2",
                "labelname":"ql70v2",
                "Model":"Qilive 70v2"
            },
            {
                "brandname":"Archos",
                "marketname":"ChefPad",
                "labelname":"A97CFP",
                "Model":"Archos Chefpad"
            },
            {
                "brandname":"Archos",
                "marketname":"Auchan Qilive8QC",
                "labelname":"QiLive8QC",
                "Model":"QiLive 8QC"
            },
            {
                "brandname":"Archos",
                "marketname":"50 Oxygen",
                "labelname":"a50ox",
                "Model":"Archos 50 Oxygen"
            },
            {
                "brandname":"Archos",
                "marketname":"97b Titanium",
                "labelname":"A97BTI",
                "Model":"ARCHOS 97B TITANIUM"
            },
            {
                "brandname":"Archos",
                "marketname":"90b Neon",
                "labelname":"ac90bne",
                "Model":"Archos 90b Neon"
            },
            {
                "brandname":"Archos",
                "marketname":"53 Platinum",
                "labelname":"msm8625",
                "Model":"Archos 53 Platinum"
            },
            {
                "brandname":"Archos",
                "marketname":"79 Neon",
                "labelname":"a79ne",
                "Model":"Archos 79 Neon"
            },
            {
                "brandname":"Archos",
                "marketname":"80 Cobalt",
                "labelname":"A80CO",
                "Model":"ARCHOS 80 COBALT"
            },
            {
                "brandname":"Archos",
                "marketname":"70 Xenon",
                "labelname":"a70xe",
                "Model":"Archos 70 Xenon"
            },
            {
                "brandname":"Archos",
                "marketname":"50b Platinum",
                "labelname":"ac50bpl",
                "Model":"Archos 50b Platinum"
            },
            {
                "brandname":"Archos",
                "marketname":"50 Helium 4G",
                "labelname":"a50he",
                "Model":"Archos 50 Helium 4G"
            },
            {
                "brandname":"Archos",
                "marketname":"Kuno",
                "labelname":"KUNO4",
                "Model":"KUNO4"
            },
            {
                "brandname":"Archos",
                "marketname":"Bush 4\\ Android Phone",
                "labelname":"ac40cti",
                "Model":"Bush 4 Android\""
            },
            {
                "brandname":"Archos",
                "marketname":"Auchan QiLive 50",
                "labelname":"ql50",
                "Model":"Qilive 50"
            },
            {
                "brandname":"Archos",
                "marketname":"Archos 45b Helium",
                "labelname":"ac45bhe",
                "Model":"AC45BHE"
            },
            {
                "brandname":"Archos",
                "marketname":"97 Titanium HD",
                "labelname":"A97TIHD",
                "Model":"ARCHOS 97 TITANIUMHD"
            },
            {
                "brandname":"Archos",
                "marketname":"80 XS",
                "labelname":"A80XSK",
                "Model":"ARCHOS 80XSK"
            },
            {
                "brandname":"Archos",
                "marketname":"79 Xenon",
                "labelname":"a79xe",
                "Model":"Archos 79 Xenon"
            },
            {
                "brandname":"Archos",
                "marketname":"70 Cobalt",
                "labelname":"AC70CO",
                "Model":"ARCHOS 70 Cobalt"
            },
            {
                "brandname":"Archos",
                "marketname":"50 Titanium",
                "labelname":"a50ti",
                "Model":"Archos 50 Titanium"
            },
            {
                "brandname":"Archos",
                "marketname":"45 Platinum",
                "labelname":"msm8625",
                "Model":"Archos 45 Platinum"
            },
            {
                "brandname":"Archos",
                "marketname":"101 XS",
                "labelname":"A101XS",
                "Model":"ARCHOS 101G10"
            },
            {
                "brandname":"Archos",
                "marketname":"80 Platinum",
                "labelname":"A80PL",
                "Model":"ARCHOS 80 Platinum"
            },
            {
                "brandname":"Archos",
                "marketname":"Qilive 97R2",
                "labelname":"qilive97r2",
                "Model":"Qilive 97R-2"
            },
            {
                "brandname":"Archos",
                "marketname":"80b Platinum",
                "labelname":"A80BPL",
                "Model":"ARCHOS 80b PLATINUM"
            },
            {
                "brandname":"Archos",
                "marketname":"101XS2",
                "labelname":"AC101XS2",
                "Model":"ARCHOS 101 XS 2"
            },
            {
                "brandname":"Archos",
                "marketname":"97 Carbon",
                "labelname":"A97C",
                "Model":"ARCHOS 97 CARBON"
            },
            {
                "brandname":"Archos",
                "marketname":"80 G9",
                "labelname":"A80",
                "Model":"ARCHOS 80G9"
            },
            {
                "brandname":"Archos",
                "marketname":"70b Titanium",
                "labelname":"A70BTI",
                "Model":"ARCHOS 70b TITANIUM"
            },
            {
                "brandname":"Archos",
                "marketname":"40 Titanium",
                "labelname":"a40ti",
                "Model":"Archos 40 Titanium"
            },
            {
                "brandname":"Archos",
                "marketname":"50c Oxygen",
                "labelname":"a50cox",
                "Model":"Archos 50c Oxygen"
            },
            {
                "brandname":"Archos",
                "marketname":"50 Neon",
                "labelname":"a50ne",
                "Model":"Archos 50 Neon"
            },
            {
                "brandname":"Archos",
                "marketname":"40b Titanium",
                "labelname":"a40btisr",
                "Model":"Archos 40b Titanium Surround"
            },
            {
                "brandname":"Archos",
                "marketname":"101 Neon",
                "labelname":"A101NE",
                "Model":"Archos 101 Neon"
            },
            {
                "brandname":"Archos",
                "marketname":"Archos 70it 2",
                "labelname":"A70it2",
                "Model":"ARCHOS 70it2G8"
            },
            {
                "brandname":"Archos",
                "marketname":"97 Cobalt",
                "labelname":"AC97CO",
                "Model":"Archos 97 Cobalt"
            },
            {
                "brandname":"Archos",
                "marketname":"Archos 101b Platinum",
                "labelname":"ac101bpl",
                "Model":"Archos 101b Platinium"
            },
            {
                "brandname":"Archos",
                "marketname":"101 G9",
                "labelname":"A101",
                "Model":"ARCHOS 101G9"
            },
            {
                "brandname":"Asus",
                "marketname":"Nexus 7 (2013)",
                "labelname":"deb",
                "Model":"Nexus 7"
            },
            {
                "brandname":"Asus",
                "marketname":"ZenFone 5",
                "labelname":"ASUS_T00J",
                "Model":"ASUS_T00J"
            },
            {
                "brandname":"Asus",
                "marketname":"Eee Pad",
                "labelname":"EeePad",
                "Model":"Transformer TF101G"
            },
            {
                "brandname":"Asus",
                "marketname":"Fonepad 7",
                "labelname":"K012",
                "Model":"K012"
            },
            {
                "brandname":"Asus",
                "marketname":"Fonepad HD7",
                "labelname":"K00E",
                "Model":"K00E"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO Pad 8",
                "labelname":"K011",
                "Model":"K011"
            },
            {
                "brandname":"Asus",
                "marketname":"Memo Pad HD7 Dual SIM",
                "labelname":"ASUS-K00S",
                "Model":"ASUS K00S"
            },
            {
                "brandname":"Asus",
                "marketname":"PadFone Mini",
                "labelname":"ASUS-T00C",
                "Model":"PadFone T00C"
            },
            {
                "brandname":"Asus",
                "marketname":"Padfone mini",
                "labelname":"ASUS-T00S",
                "Model":"ASUS_T00T"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS Fonepad 7 LTE",
                "labelname":"K00Y",
                "Model":"K00Y"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS MeMo Pad ME302C",
                "labelname":"ME302C",
                "Model":"ME302C"
            },
            {
                "brandname":"Asus",
                "marketname":"Asus Pad TF303CL",
                "labelname":"K014",
                "Model":"K014"
            },
            {
                "brandname":"Asus",
                "marketname":"Eee Pad TF101-WiMAX",
                "labelname":"TF101-WiMAX",
                "Model":"TF101-WiMAX"
            },
            {
                "brandname":"Asus",
                "marketname":"Fonepad 7 (FE375CXG)",
                "labelname":"K019_3",
                "Model":"K019"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO Pad 7",
                "labelname":"K017",
                "Model":"K017"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO pad 8 ME581CL",
                "labelname":"K015",
                "Model":"K015"
            },
            {
                "brandname":"Asus",
                "marketname":"Nexus Player",
                "labelname":"fugu",
                "Model":"Nexus Player"
            },
            {
                "brandname":"Asus",
                "marketname":"PadFone mini",
                "labelname":"ASUS_T00E",
                "Model":"ASUS_T00E"
            },
            {
                "brandname":"Asus",
                "marketname":"TF700T",
                "labelname":"TF700T",
                "Model":"ASUS Pad TF700T"
            },
            {
                "brandname":"Asus",
                "marketname":"Transformer Pad",
                "labelname":"TF300T",
                "Model":"ASUS Transformer Pad TF300T"
            },
            {
                "brandname":"Asus",
                "marketname":"ZenFone 5",
                "labelname":"ASUS_T00F1",
                "Model":"ASUS_T00F"
            },
            {
                "brandname":"Asus",
                "marketname":"ZenFone2",
                "labelname":"ASUS_Z00D",
                "Model":"Z00D"
            },
            {
                "brandname":"Asus",
                "marketname":"Zenfone2",
                "labelname":"Z00A_1",
                "Model":"ASUS_Z00AD"
            },
            {
                "brandname":"Asus",
                "marketname":"ZenFone 5",
                "labelname":"ASUS_T00K",
                "Model":"ASUS_T00K"
            },
            {
                "brandname":"Asus",
                "marketname":"ZenFone 4",
                "labelname":"ASUS_T00I",
                "Model":"ASUS_T00I"
            },
            {
                "brandname":"Asus",
                "marketname":"Transformer 10(TF103CE)",
                "labelname":"K010E",
                "Model":"K010E"
            },
            {
                "brandname":"Asus",
                "marketname":"Padfone X",
                "labelname":"ASUS-T00D",
                "Model":"ASUS PadFone X"
            },
            {
                "brandname":"Asus",
                "marketname":"PadFone Infinity Lite",
                "labelname":"ASUS-A80",
                "Model":"PadFone Infinity"
            },
            {
                "brandname":"Asus",
                "marketname":"Memo Pad 7",
                "labelname":"K01U_2",
                "Model":"K01U"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO Pad 7 ME572C",
                "labelname":"K007",
                "Model":"K007"
            },
            {
                "brandname":"Asus",
                "marketname":"Fonepad 7(FE375CXG)",
                "labelname":"K019_2",
                "Model":"K019"
            },
            {
                "brandname":"Asus",
                "marketname":"Fonepad 7",
                "labelname":"K00Z",
                "Model":"K00Z"
            },
            {
                "brandname":"Asus",
                "marketname":"Eee Pad",
                "labelname":"EeePad",
                "Model":"Transformer TF101"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS TransBook Trio",
                "labelname":"TX201LA",
                "Model":"TX201LA"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS Fonepad 8",
                "labelname":"K016_4",
                "Model":"K016"
            },
            {
                "brandname":"Asus",
                "marketname":"Transformer Pad",
                "labelname":"K00C",
                "Model":"K00C"
            },
            {
                "brandname":"Asus",
                "marketname":"ZenFone 4",
                "labelname":"ASUS_T00I",
                "Model":"ASUS_T00I-D"
            },
            {
                "brandname":"Asus",
                "marketname":"ZenFone 5 LTE",
                "labelname":"ASUS_T00P",
                "Model":"ASUS_T00P"
            },
            {
                "brandname":"Asus",
                "marketname":"Transformer Pad Infinity",
                "labelname":"K00C",
                "Model":"K00C"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS ETBW11AA",
                "labelname":"TF101G",
                "Model":"ETBW11AA"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS Fonepad ME371MG",
                "labelname":"ME371MG",
                "Model":"ME371MG"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS Transformer Pad",
                "labelname":"K010_1",
                "Model":"K010"
            },
            {
                "brandname":"Asus",
                "marketname":"Eee Pad Slider",
                "labelname":"SL101",
                "Model":"Slider SL101"
            },
            {
                "brandname":"Asus",
                "marketname":"Fonepad 7",
                "labelname":"K01N_1",
                "Model":"K01N"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO PAD",
                "labelname":"me172v",
                "Model":"ME172V"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO Pad 8",
                "labelname":"K011_1",
                "Model":"K011"
            },
            {
                "brandname":"Asus",
                "marketname":"Nexus 7 (2012)",
                "labelname":"grouper",
                "Model":"Nexus 7"
            },
            {
                "brandname":"Asus",
                "marketname":"PadFone S",
                "labelname":"ASUS_T00N",
                "Model":"ASUS_T00N"
            },
            {
                "brandname":"Asus",
                "marketname":"RTC-700A",
                "labelname":"RTC-tablet",
                "Model":"RTC-tablet"
            },
            {
                "brandname":"Asus",
                "marketname":"Transformer Pad",
                "labelname":"K010_3",
                "Model":"K010"
            },
            {
                "brandname":"Asus",
                "marketname":"ZenFone 4",
                "labelname":"ASUS_T00Q",
                "Model":"ASUS_T00Q"
            },
            {
                "brandname":"Asus",
                "marketname":"ZenFone 6",
                "labelname":"ASUS_T00G",
                "Model":"ASUS_T00G"
            },
            {
                "brandname":"Asus",
                "marketname":"TF700T",
                "labelname":"TF700T",
                "Model":"ASUS Transformer Pad TF700T"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO Pad 7",
                "labelname":"K013C",
                "Model":"K013C"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO Pad ME103K",
                "labelname":"K01E_2",
                "Model":"K01E"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS Transformer Pad",
                "labelname":"K010",
                "Model":"K010"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS Fonepad 8(FE380CG)",
                "labelname":"K016_1",
                "Model":"K016"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS ETBW11AA",
                "labelname":"ETBW11AA",
                "Model":"ETBW11AA"
            },
            {
                "brandname":"Asus",
                "marketname":"Zenfone2",
                "labelname":"Z00A",
                "Model":"ASUS_Z00AD"
            },
            {
                "brandname":"Asus",
                "marketname":"ZenFone 5",
                "labelname":"ASUS_T00J1",
                "Model":"ASUS_T00J"
            },
            {
                "brandname":"Asus",
                "marketname":"Transformer Pad TF303K",
                "labelname":"K01B",
                "Model":"K01B"
            },
            {
                "brandname":"Asus",
                "marketname":"Trans Pad Infinity",
                "labelname":"K00C",
                "Model":"K00C"
            },
            {
                "brandname":"Asus",
                "marketname":"Padfone S",
                "labelname":"ASUS_T00N",
                "Model":"ASUS_T00N"
            },
            {
                "brandname":"Asus",
                "marketname":"PadFone E",
                "labelname":"ASUS-T008",
                "Model":"PadFone T008"
            },
            {
                "brandname":"Asus",
                "marketname":"Memo Pad 7",
                "labelname":"K01U_1",
                "Model":"K01U"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO Pad 7 LTE",
                "labelname":"K00X",
                "Model":"ASUS MeMO Pad 7"
            },
            {
                "brandname":"Asus",
                "marketname":"Fonepad 7 LTE",
                "labelname":"K01Q",
                "Model":"K01Q"
            },
            {
                "brandname":"Asus",
                "marketname":"EeePad Slider SL101",
                "labelname":"SL101",
                "Model":"Slider SL101"
            },
            {
                "brandname":"Asus",
                "marketname":"Cube",
                "labelname":"asus_google_cube",
                "Model":"asus_google_cube"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS Trans AiO P1801",
                "labelname":"P1801-T",
                "Model":"ASUS Tablet P1801-T"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS Fonepad 8",
                "labelname":"K016_3",
                "Model":"K016"
            },
            {
                "brandname":"Asus",
                "marketname":"Zenfone2",
                "labelname":"Z008_1",
                "Model":"ASUS_Z008D"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS Fonepad",
                "labelname":"K00G",
                "Model":"K00G"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS MeMO Pad FHD 10",
                "labelname":"ME302KL",
                "Model":"ME302KL"
            },
            {
                "brandname":"Asus",
                "marketname":"Asus Fonepad Note 6",
                "labelname":"K00G",
                "Model":"K00G"
            },
            {
                "brandname":"Asus",
                "marketname":"Eee Pad TF101",
                "labelname":"TF101",
                "Model":"TF101"
            },
            {
                "brandname":"Asus",
                "marketname":"Fonepad 7",
                "labelname":"K01N_2",
                "Model":"K01N"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO Pad 7",
                "labelname":"K013",
                "Model":"K013"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO Pad ME103K",
                "labelname":"K01E_1",
                "Model":"K01E"
            },
            {
                "brandname":"Asus",
                "marketname":"Nexus 7 (2012)",
                "labelname":"tilapia",
                "Model":"Nexus 7"
            },
            {
                "brandname":"Asus",
                "marketname":"PadFone Xmini",
                "labelname":"ASUS-T00S",
                "Model":"ASUS PadFone X mini"
            },
            {
                "brandname":"Asus",
                "marketname":"T101TA",
                "labelname":"T10xTA",
                "Model":"T10xTA"
            },
            {
                "brandname":"Asus",
                "marketname":"Transformer Pad",
                "labelname":"TF300T",
                "Model":"ASUS Pad TF300T"
            },
            {
                "brandname":"Asus",
                "marketname":"ZenFone 6",
                "labelname":"ASUS_Z002",
                "Model":"ASUS_Z002"
            },
            {
                "brandname":"Asus",
                "marketname":"PadFone-T004",
                "labelname":"ASUS-A86",
                "Model":"PadFone T004"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO pad 8 AST21",
                "labelname":"K015",
                "Model":"AST21"
            },
            {
                "brandname":"Asus",
                "marketname":"ZenFone C",
                "labelname":"ASUS_Z007",
                "Model":"ASUS_Z007"
            },
            {
                "brandname":"Asus",
                "marketname":"ZenFone 5",
                "labelname":"ASUS_T00F",
                "Model":"ASUS_T00F"
            },
            {
                "brandname":"Asus",
                "marketname":"Transformer Pad",
                "labelname":"TF300T",
                "Model":"ASUS Transformer 300"
            },
            {
                "brandname":"Asus",
                "marketname":"T50",
                "labelname":"ASUS_X002",
                "Model":"ASUS_X002"
            },
            {
                "brandname":"Asus",
                "marketname":"PadFone mini",
                "labelname":"ASUS-T00C",
                "Model":"PadFone T00C"
            },
            {
                "brandname":"Asus",
                "marketname":"Nexus 7 (2013)",
                "labelname":"flo",
                "Model":"Nexus 7"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO pad 8 ME581C",
                "labelname":"K01H",
                "Model":"K01H"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO Pad 7",
                "labelname":"K013_1",
                "Model":"K013"
            },
            {
                "brandname":"Asus",
                "marketname":"Fonepad 7 (FE375CG)",
                "labelname":"K019_1",
                "Model":"K019"
            },
            {
                "brandname":"Asus",
                "marketname":"Eee Pad TF101",
                "labelname":"TF101",
                "Model":"Transformer TF101"
            },
            {
                "brandname":"Asus",
                "marketname":"Asus MeMo Pad 7",
                "labelname":"K012_2",
                "Model":"K012_2"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS MeMO Pad Smart 10",
                "labelname":"ME301T",
                "Model":"ME301T"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS Fonepad 7",
                "labelname":"K01F",
                "Model":"K01F"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS Fonepad 8",
                "labelname":"K016_2",
                "Model":"K016"
            },
            {
                "brandname":"Asus",
                "marketname":"ASUS Pad",
                "labelname":"K010",
                "Model":"K010"
            },
            {
                "brandname":"Asus",
                "marketname":"Asus Transformer Pad",
                "labelname":"K018",
                "Model":"K018"
            },
            {
                "brandname":"Asus",
                "marketname":"Eee Pad Transformer",
                "labelname":"TF101",
                "Model":"Transformer TF101"
            },
            {
                "brandname":"Asus",
                "marketname":"Fonepad 7 (FE375CXG)",
                "labelname":"K019_4",
                "Model":"K019"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMO Pad 7",
                "labelname":"K01A",
                "Model":"K01A"
            },
            {
                "brandname":"Asus",
                "marketname":"MeMo Pad HD 7",
                "labelname":"K00U",
                "Model":"K00U"
            },
            {
                "brandname":"Asus",
                "marketname":"Nuvifone",
                "labelname":"a50",
                "Model":"Garmin-Asus A50"
            },
            {
                "brandname":"Best Buy",
                "marketname":"MG103",
                "labelname":"K010",
                "Model":"K010"
            },
            {
                "brandname":"Borqs",
                "marketname":"Falcon",
                "labelname":"falcon",
                "Model":"falcon"
            },
            {
                "brandname":"British Telecom",
                "marketname":"HomeSmartphone d800",
                "labelname":"d800",
                "Model":"BT Home SmartPhone S II"
            },
            {
                "brandname":"Dell",
                "marketname":"Venue 7",
                "labelname":"thunderbird",
                "Model":"Venue 7 HSPA+"
            },
            {
                "brandname":"Dell",
                "marketname":"Venue 8",
                "labelname":"yellowtail",
                "Model":"Venue 8 3830"
            },
            {
                "brandname":"Dell",
                "marketname":"Venue 7",
                "labelname":"Venue7",
                "Model":"Venue 7 3740"
            },
            {
                "brandname":"Dell",
                "marketname":"Venue 7",
                "labelname":"thunderbird",
                "Model":"Venue 7 3730"
            },
            {
                "brandname":"Dell",
                "marketname":"Venue 8",
                "labelname":"BB",
                "Model":"Venue 8 7840"
            },
            {
                "brandname":"Dell",
                "marketname":"Streak",
                "labelname":"streak",
                "Model":"001DL"
            },
            {
                "brandname":"Dell",
                "marketname":"Cloud Connect",
                "labelname":"capri_wyse",
                "Model":"CS-1A13"
            },
            {
                "brandname":"Dell",
                "marketname":"Venue 8",
                "labelname":"Venue8",
                "Model":"Venue8 3840"
            },
            {
                "brandname":"Dell",
                "marketname":"Streak",
                "labelname":"streak",
                "Model":"Dell Streak"
            },
            {
                "brandname":"Dell",
                "marketname":"Streak",
                "labelname":"streak",
                "Model":"Dell M01M"
            },
            {
                "brandname":"Dell",
                "marketname":"Venue 8",
                "labelname":"Venue8",
                "Model":"Venue8 3840 LTE"
            },
            {
                "brandname":"Dell",
                "marketname":"Venue 7",
                "labelname":"LW",
                "Model":"Venue 7 3741"
            },
            {
                "brandname":"Dell",
                "marketname":"Venue 7",
                "labelname":"Venue7",
                "Model":"Venue7 3740"
            },
            {
                "brandname":"Dell",
                "marketname":"Venue 8",
                "labelname":"yellowtail",
                "Model":"Venue 8 HSPA+"
            },
            {
                "brandname":"Dell",
                "marketname":"Venue 7",
                "labelname":"Venue7",
                "Model":"Venue7 3740 LTE"
            },
            {
                "brandname":"Dell",
                "marketname":"Venue 8",
                "labelname":"Venue8",
                "Model":"Venue 8 3840"
            },
            {
                "brandname":"GSmart",
                "marketname":"GSmart SX1",
                "labelname":"bravo",
                "Model":"GSmart SX1"
            },
            {
                "brandname":"Honeywell",
                "marketname":"70eLW0",
                "labelname":"dblack_wo",
                "Model":"Dolphin 70e Black"
            },
            {
                "brandname":"Honeywell",
                "marketname":"70eLWN",
                "labelname":"dblack_wn",
                "Model":"Dolphin 70e Black"
            },
            {
                "brandname":"HP",
                "marketname":"Pro Slate 10 EE G1",
                "labelname":"bulldog",
                "Model":"HP Pro Slate 10 EE G1"
            },
            {
                "brandname":"HP",
                "marketname":"7 G2",
                "labelname":"redwood",
                "Model":"HP 7 G2"
            },
            {
                "brandname":"HP",
                "marketname":"8 G2",
                "labelname":"maple",
                "Model":"HP 8 G2"
            },
            {
                "brandname":"HP",
                "marketname":"Slate 8 Pro",
                "labelname":"dogwood",
                "Model":"HP Slate 8 Pro"
            },
            {
                "brandname":"HP",
                "marketname":"Slate 8 Plus",
                "labelname":"vogue",
                "Model":"HP Slate 8 Plus"
            },
            {
                "brandname":"HP",
                "marketname":"Slate 6 VoiceTab Plus",
                "labelname":"mekong",
                "Model":"HP Slate 6 VoiceTab Plus"
            },
            {
                "brandname":"HP",
                "marketname":"7.1",
                "labelname":"Holly",
                "Model":"HP 7.1"
            },
            {
                "brandname":"HP",
                "marketname":"Slate 10 HD",
                "labelname":"bonsai10",
                "Model":"HP Slate 10 HD"
            },
            {
                "brandname":"HP",
                "marketname":"Slate 7 HD",
                "labelname":"bonsai10",
                "Model":"HP Slate 10 HD"
            },
            {
                "brandname":"HP",
                "marketname":"Slate7 Plus",
                "labelname":"birch",
                "Model":"HP Slate 7 Plus"
            },
            {
                "brandname":"HP",
                "marketname":"Pro Slate 10 EE G1",
                "labelname":"terrier",
                "Model":"HP Pro Slate 10 EE G1"
            },
            {
                "brandname":"HP",
                "marketname":"7 Tablet",
                "labelname":"Mesquite",
                "Model":"HP 7"
            },
            {
                "brandname":"HP",
                "marketname":"Pro Slate 12",
                "labelname":"dane",
                "Model":"HP Pro Slate 12"
            },
            {
                "brandname":"HP",
                "marketname":"7 Voice Tab",
                "labelname":"klondike",
                "Model":"HP 7 VoiceTab"
            },
            {
                "brandname":"HP",
                "marketname":"Voice Tab 7",
                "labelname":"almond",
                "Model":"HP Slate 7 Voice Tab"
            },
            {
                "brandname":"HP",
                "marketname":"7 VoiceTab",
                "labelname":"yukon",
                "Model":"HP 7 VoiceTab"
            },
            {
                "brandname":"HP",
                "marketname":"Pro Slate 8",
                "labelname":"malamute",
                "Model":"HP Pro Slate 8"
            },
            {
                "brandname":"HP",
                "marketname":"Slate 7 Extreme",
                "labelname":"olive",
                "Model":"HP Slate7 Extreme"
            },
            {
                "brandname":"HP",
                "marketname":"Slate21",
                "labelname":"phobos",
                "Model":"Slate 21"
            },
            {
                "brandname":"HP",
                "marketname":"7 Plus",
                "labelname":"Ilex",
                "Model":"HP 7 Plus"
            },
            {
                "brandname":"HP",
                "marketname":"Pro Slate 10 EE G1",
                "labelname":"hound",
                "Model":"HP Pro Slate 10 EE G1"
            },
            {
                "brandname":"HP",
                "marketname":"Slate 17",
                "labelname":"franky",
                "Model":"HP Slate 17"
            },
            {
                "brandname":"HP",
                "marketname":"Slate 7 Voice Tab",
                "labelname":"almond",
                "Model":"HP Slate 7 Voice Tab"
            },
            {
                "brandname":"HP",
                "marketname":"Bonsai 10 HD",
                "labelname":"bonsai10",
                "Model":"HP Slate 10 HD"
            },
            {
                "brandname":"HP",
                "marketname":"Tablet 10",
                "labelname":"balsa",
                "Model":"HP_10_Tablet"
            },
            {
                "brandname":"HP",
                "marketname":"10 Plus",
                "labelname":"torsa",
                "Model":"HP 10 Plus"
            },
            {
                "brandname":"HP",
                "marketname":"10",
                "labelname":"spruce",
                "Model":"HP 10"
            },
            {
                "brandname":"HP",
                "marketname":"8",
                "labelname":"Fir",
                "Model":"HP 8"
            },
            {
                "brandname":"HP",
                "marketname":"Slate8 Pro",
                "labelname":"fig",
                "Model":"HP Slate 8 Pro"
            },
            {
                "brandname":"HP",
                "marketname":"SlateBook 14",
                "labelname":"200a",
                "Model":"HP SlateBook 14 PC"
            },
            {
                "brandname":"HP",
                "marketname":"Slate 7 HD",
                "labelname":"bonsai7",
                "Model":"HP Slate 7 HD"
            },
            {
                "brandname":"HP",
                "marketname":"Slate 10 Plus",
                "labelname":"linkplus",
                "Model":"HP Slate 10 Plus"
            },
            {
                "brandname":"HP",
                "marketname":"7 Plus G2",
                "labelname":"deschutes",
                "Model":"HP 7 Plus G2"
            },
            {
                "brandname":"HP",
                "marketname":"Pro Slate 10 EE G1",
                "labelname":"poodle",
                "Model":"HP Pro Slate 10 EE G1"
            },
            {
                "brandname":"HP",
                "marketname":"Slate 6 Voice Tab",
                "labelname":"pomegranate",
                "Model":"HP Slate 6 Voice Tab"
            },
            {
                "brandname":"HP",
                "marketname":"Slate 7 VoiceTab Ultra",
                "labelname":"charm",
                "Model":"HP Slate 7 VoiceTab Ultra"
            },
            {
                "brandname":"HP",
                "marketname":"Slate 6 Voice Tab II",
                "labelname":"avocado",
                "Model":"HP Slate 6 Voice Tab II"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 300",
                "labelname":"g3u",
                "Model":"HTC_0P6A1"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 500 dual sim",
                "labelname":"z4dug",
                "Model":"HTC 5060"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 516",
                "labelname":"htc_v2_dug",
                "Model":"HTC C2"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 601",
                "labelname":"zaracl",
                "Model":"HTC0P4E1"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 620G dual sim",
                "labelname":"htc_a31mg_dug",
                "Model":"HTC 0PE65"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 816",
                "labelname":"htc_a5ul",
                "Model":"HTC_D816x"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire D626w",
                "labelname":"htc_a32ml_dtul",
                "Model":"HTC D626w"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire V",
                "labelname":"primods",
                "Model":"HTC PRO_DS"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC EVO 4G LTE",
                "labelname":"jewel",
                "Model":"EVO"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC J One",
                "labelname":"m7wlj",
                "Model":"HTL22"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One",
                "labelname":"m7cdug",
                "Model":"HTC One dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (E8)",
                "labelname":"htc_mecul",
                "Model":"HTC_M8Sx"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (M8 Eye)",
                "labelname":"htc_melsuhl",
                "Model":"HTC 0P6B9"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (M8)",
                "labelname":"htc_m8dwg",
                "Model":"HTC M8d"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One M9",
                "labelname":"htc_himauhl",
                "Model":"HTC_M9u"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One X",
                "labelname":"evita",
                "Model":"HTC One X"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One mini 2",
                "labelname":"htc_memul",
                "Model":"HTC_M8MINx"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Velocity 4G",
                "labelname":"holiday",
                "Model":"HTC Raider X710e"
            },
            {
                "brandname":"HTC",
                "marketname":"HTCDesire612VZW",
                "labelname":"htc_a3qhdcl",
                "Model":"HTC331ZLVW"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC_Amaze_4G",
                "labelname":"ruby",
                "Model":"HTC Amaze 4G"
            },
            {
                "brandname":"HTC",
                "marketname":"Nexus 9",
                "labelname":"flounder",
                "Model":"Nexus 9"
            },
            {
                "brandname":"HTC",
                "marketname":"Sensation 4G",
                "labelname":"pyramid",
                "Model":"HTC Sensation Z710a"
            },
            {
                "brandname":"HTC",
                "marketname":"Wildfire S",
                "labelname":"marvel",
                "Model":"HTC Wildfire S"
            },
            {
                "brandname":"HTC",
                "marketname":"myTouch 4G",
                "labelname":"glacier",
                "Model":"HTC Panache"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Wildfire S A515c",
                "labelname":"marvelc",
                "Model":"HTC-PG762"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One remix",
                "labelname":"htc_memwl",
                "Model":"HTC6515LVW"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One XL",
                "labelname":"evita",
                "Model":"HTC_One_XL"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One SC",
                "labelname":"cp2dcg",
                "Model":"HTC One SC T528d"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (M8)",
                "labelname":"htc_m8wl",
                "Model":"HTC6525LVW"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (M8)",
                "labelname":"htc_m8",
                "Model":"HTC One_M8"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (E8) dual sim",
                "labelname":"htc_mecdug",
                "Model":"HTC_M8Sy"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One",
                "labelname":"m7cdwg",
                "Model":"HTC One dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC ONE SV",
                "labelname":"k2u",
                "Model":"HTC K2_U"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Hero",
                "labelname":"hero",
                "Model":"ERA G2 Touch"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire X",
                "labelname":"protou",
                "Model":"HTC POO_U"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire EYE",
                "labelname":"htc_eyeul",
                "Model":"HTC 0PFH11"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 820s",
                "labelname":"htc_a50ml_dtul",
                "Model":"HTC D820ts"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 7060",
                "labelname":"cp5dug",
                "Model":"HTC_7060"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 610",
                "labelname":"htc_a3qhdul",
                "Model":"HTC_0P9O2"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 526GPLUS",
                "labelname":"htc_v02_u",
                "Model":"HTC 0PL41"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 510",
                "labelname":"htc_a11chl",
                "Model":"0PCV1"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 310",
                "labelname":"htc_v1_dug",
                "Model":"HTC Desire 310 dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC D816d",
                "labelname":"htc_a5dwg",
                "Model":"HTC_D816d"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC 7060",
                "labelname":"cp5dug",
                "Model":"HTC_7060"
            },
            {
                "brandname":"HTC",
                "marketname":"G1",
                "labelname":"dream",
                "Model":"HTC Dream"
            },
            {
                "brandname":"HTC",
                "marketname":"EVO 3D",
                "labelname":"shooter",
                "Model":"HTCEVOV4G"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire VC",
                "labelname":"primodd",
                "Model":"HTC Desire VC"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire 820",
                "labelname":"htc_a51ul",
                "Model":"HTC 0PFJ4"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire 516 dual sim",
                "labelname":"htc_v2_dcg",
                "Model":"HTC Desire 516 dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"Chacha",
                "labelname":"chacha",
                "Model":"HTC ChaCha A810e"
            },
            {
                "brandname":"HTC",
                "marketname":"AT&T HTC One X+",
                "labelname":"evitareul",
                "Model":"HTC One X+"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC J Butterfly",
                "labelname":"dlxj",
                "Model":"HTL21"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One",
                "labelname":"m7cdug",
                "Model":"HTC 802w"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (E8)",
                "labelname":"htc_mecul",
                "Model":"HTC One_E8"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (M8 EYE)",
                "labelname":"htc_melsuhl",
                "Model":"HTC One_M8 Eye"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (M8)",
                "labelname":"htc_m8dug",
                "Model":"HTC One_M8 dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One M9",
                "labelname":"htc_himauhl",
                "Model":"HTC_0PJA10"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One X",
                "labelname":"endeavoru",
                "Model":"HTC S720e"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One mini",
                "labelname":"m4",
                "Model":"HTC_PO582"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Velocity 4G",
                "labelname":"holiday",
                "Model":"HTC PH39100"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC 9060",
                "labelname":"m7",
                "Model":"HTC 801e"
            },
            {
                "brandname":"HTC",
                "marketname":"myTouch 3G",
                "labelname":"sapphire",
                "Model":"HTC Magic"
            },
            {
                "brandname":"HTC",
                "marketname":"Thunderbolt",
                "labelname":"mecha",
                "Model":"HTC Mecha"
            },
            {
                "brandname":"HTC",
                "marketname":"Puccini",
                "labelname":"puccinilte",
                "Model":"HTC PG09410"
            },
            {
                "brandname":"HTC",
                "marketname":"Incredible 2",
                "labelname":"vivow",
                "Model":"HTC IncredibleS S710d"
            },
            {
                "brandname":"HTC",
                "marketname":"HTCEVODesign4G",
                "labelname":"kingdom",
                "Model":"HTC Hero S"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Wildfire S A515c",
                "labelname":"marvelc",
                "Model":"USCCADR6230US"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Onex X",
                "labelname":"endeavoru",
                "Model":"HTC One X"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One XL",
                "labelname":"evitautl",
                "Model":"HTC EVA_UTL"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One SV",
                "labelname":"k2cl",
                "Model":"C525c"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One 801e",
                "labelname":"m7",
                "Model":"HTC One 801s"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (M8)",
                "labelname":"htc_m8",
                "Model":"HTC_0P6B"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (E8) dual sim",
                "labelname":"htc_mecdwg",
                "Model":"HTC 0PAJ4"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One",
                "labelname":"m7wls",
                "Model":"HTCONE"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One",
                "labelname":"m7",
                "Model":"HTC 801e"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Hero",
                "labelname":"hero",
                "Model":"T-Mobile G2 Touch"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire815G",
                "labelname":"htc_a5mgp_u",
                "Model":"HTC Desire 816G"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire V",
                "labelname":"primods",
                "Model":"HTC Desire Q"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 820s",
                "labelname":"htc_a50ml_dtul",
                "Model":"HTC D820us"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 7088",
                "labelname":"cp5dtu",
                "Model":"HTC 7088"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 610",
                "labelname":"htc_a3qhdul",
                "Model":"HTC_D610x"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 526GPLUS",
                "labelname":"htc_v02_u",
                "Model":"HTC Desire 526G"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 510",
                "labelname":"htc_a11ul",
                "Model":"HTC 0PCV20"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 310",
                "labelname":"htc_v1_u",
                "Model":"HTC_D310n"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC D820 Mini",
                "labelname":"htc_a31dtul",
                "Model":"HTC D820mt"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC 710C",
                "labelname":"htc_a5chl",
                "Model":"710C"
            },
            {
                "brandname":"HTC",
                "marketname":"G2",
                "labelname":"vision",
                "Model":"HTC Vision"
            },
            {
                "brandname":"HTC",
                "marketname":"EVO 3D",
                "labelname":"shooter",
                "Model":"PG86100"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire VC",
                "labelname":"primodd",
                "Model":"HTC Desire VC T328d"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire 820",
                "labelname":"htc_a51ul",
                "Model":"HTC Desire 820"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire 516 dual sim",
                "labelname":"htc_v2_dug",
                "Model":"HTC Desire 516 dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"Chacha",
                "labelname":"chacha",
                "Model":"HTC ChaChaCha A810e"
            },
            {
                "brandname":"HTC",
                "marketname":"Aria",
                "labelname":"liberty",
                "Model":"HTC Aria"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 200",
                "labelname":"gtou",
                "Model":"HTC_Desire_200"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 320",
                "labelname":"htc_v01_u",
                "Model":"HTC 0PF120"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 516",
                "labelname":"htc_v2_dcg",
                "Model":"HTC D516d"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 616 dual sim",
                "labelname":"htc_v3_dug",
                "Model":"HTC V3"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire V",
                "labelname":"primods",
                "Model":"HTC Desire U dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC EVO 3D X515m",
                "labelname":"shooteru",
                "Model":"HTC EVO 3D X515a"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Hero",
                "labelname":"hero",
                "Model":"dopod A6288"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One",
                "labelname":"m7",
                "Model":"HTC_PN071"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire",
                "labelname":"bravo",
                "Model":"X06HT"
            },
            {
                "brandname":"HTC",
                "marketname":"Droid DNA",
                "labelname":"dlx",
                "Model":"HTC6435LRA"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (E8)",
                "labelname":"htc_mectl",
                "Model":"HTC M8St"
            },
            {
                "brandname":"HTC",
                "marketname":"Wildfire S",
                "labelname":"marvel",
                "Model":"HTC Wildfire S A510e"
            },
            {
                "brandname":"HTC",
                "marketname":"Sensation 4G",
                "labelname":"pyramid",
                "Model":"HTC-Z710a"
            },
            {
                "brandname":"HTC",
                "marketname":"Nexus One",
                "labelname":"passion",
                "Model":"Nexus One"
            },
            {
                "brandname":"HTC",
                "marketname":"Hero",
                "labelname":"heroc",
                "Model":"HERO200"
            },
            {
                "brandname":"HTC",
                "marketname":"HTCEVODesign4G",
                "labelname":"kingdom",
                "Model":"HTC Acquire"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Velocity 4G",
                "labelname":"holiday",
                "Model":"HTC-X710a"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One mini 601E",
                "labelname":"m4",
                "Model":"HTC_One_mini_601e"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One XL",
                "labelname":"evita",
                "Model":"HTC One X"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One S",
                "labelname":"villec2",
                "Model":"HTC Z560e"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (M8)",
                "labelname":"htc_m8wl",
                "Model":"HTC One_M8"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (M8)",
                "labelname":"htc_m8",
                "Model":"HTC M8w"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (E8) dual sim",
                "labelname":"htc_mecdug",
                "Model":"HTC One_E8 dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One",
                "labelname":"m7cdwg",
                "Model":"HTC One dual 802d"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC ONE S",
                "labelname":"ville",
                "Model":"HTC One S"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Explorer A310e",
                "labelname":"pico",
                "Model":"HTC Explorer A310b"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire V",
                "labelname":"primods",
                "Model":"HTC T328w"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire EYE",
                "labelname":"htc_eyetuhl",
                "Model":"HTC_M910x"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 816G dual sim",
                "labelname":"htc_a5mgp_dug",
                "Model":"HTC D816h"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 700 dual sim",
                "labelname":"cp5dwg",
                "Model":"HTC_709d"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 609d",
                "labelname":"cp3dcg",
                "Model":"HTC 609d"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 516",
                "labelname":"htc_v2_dug",
                "Model":"HTC V2"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 5088",
                "labelname":"z4td",
                "Model":"HTC 5088"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 310",
                "labelname":"htc_v1_dug",
                "Model":"HTC D310w"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Butterfly s 9060",
                "labelname":"dlpdug",
                "Model":"HTC 9060"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC 606w",
                "labelname":"cp3dug",
                "Model":"HTC PO49120"
            },
            {
                "brandname":"HTC",
                "marketname":"Flyer",
                "labelname":"flyer",
                "Model":"HTC_Flyer_P512_NA"
            },
            {
                "brandname":"HTC",
                "marketname":"Droid Incredible",
                "labelname":"inc",
                "Model":"ADR6300"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire S",
                "labelname":"saga",
                "Model":"HTC Desire S"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire 626",
                "labelname":"htc_a32ul",
                "Model":"HTC_D630x"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire 510",
                "labelname":"htc_a11ul8x26",
                "Model":"HTC Desire 510"
            },
            {
                "brandname":"HTC",
                "marketname":"Chacha",
                "labelname":"chacha",
                "Model":"HTC ChaCha A810b"
            },
            {
                "brandname":"HTC",
                "marketname":"AT&T HTC One X+",
                "labelname":"evitareul",
                "Model":"HTC EVARE_UL"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (M8)",
                "labelname":"htc_m8",
                "Model":"HTC_M8x"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One M9",
                "labelname":"htc_himauhl",
                "Model":"0PJA10"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One SV BLK",
                "labelname":"k2plccl",
                "Model":"HTC One SV"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One max",
                "labelname":"t6whl",
                "Model":"HTC0P3P7"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC T528w",
                "labelname":"cp2dug",
                "Model":"HTC Desire L dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"HTCEVODesign4G",
                "labelname":"kingdom",
                "Model":"PH44100"
            },
            {
                "brandname":"HTC",
                "marketname":"Incredible S",
                "labelname":"vivo",
                "Model":"HTC_S710E"
            },
            {
                "brandname":"HTC",
                "marketname":"Sensation 4G",
                "labelname":"pyramid",
                "Model":"HTC Sensation"
            },
            {
                "brandname":"HTC",
                "marketname":"Wildfire CDMA",
                "labelname":"bee",
                "Model":"HTC Bee"
            },
            {
                "brandname":"HTC",
                "marketname":"myTouch 3G Slide",
                "labelname":"espresso",
                "Model":"T-Mobile myTouch 3G Slide"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC909d",
                "labelname":"dlpdwg",
                "Model":"HTC 919d"
            },
            {
                "brandname":"HTC",
                "marketname":"myTouch 3G",
                "labelname":"sapphire",
                "Model":"T-Mobile myTouch 3G"
            },
            {
                "brandname":"HTC",
                "marketname":"Wildfire",
                "labelname":"buzz",
                "Model":"HTC Wildfire"
            },
            {
                "brandname":"HTC",
                "marketname":"Puccini",
                "labelname":"puccinilte",
                "Model":"HTC-P715a"
            },
            {
                "brandname":"HTC",
                "marketname":"Incredible S",
                "labelname":"vivo",
                "Model":"HTC Incredible S"
            },
            {
                "brandname":"HTC",
                "marketname":"HTCEVODesign4G",
                "labelname":"kingdom",
                "Model":"HTC Kingdom"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC desire 608t",
                "labelname":"cp3dtg",
                "Model":"HTC 608t"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Salsa C510e",
                "labelname":"icong",
                "Model":"HTC Salsa C510b"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One max",
                "labelname":"t6ul",
                "Model":"HTC_One_max"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One SV",
                "labelname":"k2ul",
                "Model":"HTC K2_UL"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One E8 dual",
                "labelname":"htc_mecdwg",
                "Model":"HTC_M8Sd"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (M8)",
                "labelname":"htc_m8",
                "Model":"HTC_0P6B6"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (E8) dual sim",
                "labelname":"htc_mecdwg",
                "Model":"HTC One_E8 dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (E8)",
                "labelname":"htc_mecdwg",
                "Model":"HTC M8Sd"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One",
                "labelname":"m7",
                "Model":"HTC One 801e"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Hero",
                "labelname":"hero",
                "Model":"T-Mobile_G2_Touch"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC EVO 3D ISW12HT",
                "labelname":"shooterk",
                "Model":"ISW12HT"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire V",
                "labelname":"primods",
                "Model":"HTC Desire U"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 820s",
                "labelname":"htc_a50ml_dtul",
                "Model":"HTC Desire 820s dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 709d",
                "labelname":"cp5dwg",
                "Model":"HTC 709d"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 616 dual sim",
                "labelname":"htc_v3_dug",
                "Model":"HTC D616w"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 600c Dual SIM",
                "labelname":"cp3dcg",
                "Model":"HTC 609d"
            },
            {
                "brandname":"HTC",
                "marketname":"Wildfire S",
                "labelname":"marvel",
                "Model":"HTC-A510a"
            },
            {
                "brandname":"HTC",
                "marketname":"Thunderbolt",
                "labelname":"mecha",
                "Model":"ADR6400L"
            },
            {
                "brandname":"HTC",
                "marketname":"One XL",
                "labelname":"evita",
                "Model":"HTC One XL"
            },
            {
                "brandname":"HTC",
                "marketname":"Incredible 2",
                "labelname":"vivow",
                "Model":"ADR6350"
            },
            {
                "brandname":"HTC",
                "marketname":"HTCEVODesign4G",
                "labelname":"kingdom",
                "Model":"HTC EVO Design C715e"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 510",
                "labelname":"htc_a11ul",
                "Model":"HTC_0PCV2"
            },
            {
                "brandname":"HTC",
                "marketname":"Evo 4G",
                "labelname":"supersonic",
                "Model":"PC36100"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC 5060 dual sim",
                "labelname":"z4dug",
                "Model":"HTC Desire 500 dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC 9060",
                "labelname":"m7cdug",
                "Model":"HTC 802w"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One",
                "labelname":"m7cdtu",
                "Model":"HTC 802t 16GB"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Butterfly",
                "labelname":"dlxu",
                "Model":"HTC DLX_U"
            },
            {
                "brandname":"HTC",
                "marketname":"Flyer",
                "labelname":"flyer",
                "Model":"HTC Flyer"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 310",
                "labelname":"htc_v1_u",
                "Model":"HTC_V1"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC DROID DNA",
                "labelname":"dlx",
                "Model":"HTC6435LRA"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC 9060",
                "labelname":"dlxpul",
                "Model":"HTC 901e"
            },
            {
                "brandname":"HTC",
                "marketname":"G2",
                "labelname":"vision",
                "Model":"T-Mobile G2"
            },
            {
                "brandname":"HTC",
                "marketname":"EVO LTE 4G",
                "labelname":"jewel",
                "Model":"EVO"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire VC",
                "labelname":"primodd",
                "Model":"HTC PRO_DD"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire D820mini",
                "labelname":"htc_a31dtul",
                "Model":"HTC D820mt"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One",
                "labelname":"m7cdtu",
                "Model":"HTC 802t"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (E8)",
                "labelname":"htc_mectl",
                "Model":"HTC One_E8"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One X",
                "labelname":"endeavoru",
                "Model":"HTC One X"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One mini",
                "labelname":"m4",
                "Model":"HTC_One_mini_601e"
            },
            {
                "brandname":"HTC",
                "marketname":"KDDI Infobar A02",
                "labelname":"imnj",
                "Model":"HTX21"
            },
            {
                "brandname":"HTC",
                "marketname":"Sensation 4G",
                "labelname":"pyramid",
                "Model":"HTC Sensation 4G"
            },
            {
                "brandname":"HTC",
                "marketname":"myTouch 4G Slide",
                "labelname":"doubleshot",
                "Model":"myTouch_4G_Slide"
            },
            {
                "brandname":"HTC",
                "marketname":"Wildfire S",
                "labelname":"marvel",
                "Model":"HTC Wildfire S A510b"
            },
            {
                "brandname":"HTC",
                "marketname":"Sensation 4G",
                "labelname":"pyramid",
                "Model":"HTC Sensation Z710e"
            },
            {
                "brandname":"HTC",
                "marketname":"Nexus 9 LTE",
                "labelname":"flounder_lte",
                "Model":"Nexus 9"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC_Amaze_4G",
                "labelname":"ruby",
                "Model":"HTC Ruby"
            },
            {
                "brandname":"HTC",
                "marketname":"HTCDesire612VZW",
                "labelname":"htc_a3qhdcl",
                "Model":"HTC331ZLVWPP"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Velocity 4G",
                "labelname":"holiday",
                "Model":"HTC Velocity 4G X710s"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One mini 2",
                "labelname":"htc_memul",
                "Model":"HTC_One_mini_2"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One X+",
                "labelname":"enrc2b",
                "Model":"HTC One X+"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One S",
                "labelname":"ville",
                "Model":"HTC VLE_U"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (M8)",
                "labelname":"htc_m8whl",
                "Model":"831C"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (M8 Eye)",
                "labelname":"htc_melsuhl",
                "Model":"HTC One_M8 Eye"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One (E8)",
                "labelname":"htc_mecwhl",
                "Model":"0PAJ5"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC One",
                "labelname":"m7cdwg",
                "Model":"HTC 802d"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC ONE",
                "labelname":"m7cdug",
                "Model":"HTC One dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Explorer A310e",
                "labelname":"pico",
                "Model":"HTC Explorer"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire V",
                "labelname":"primods",
                "Model":"HTC T327w"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire EYE",
                "labelname":"htc_eyetuhl",
                "Model":"HTC 0PFH2"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 816G dual",
                "labelname":"htc_a5mgp_dug",
                "Model":"HTC Desire 816G dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 620G dual sim",
                "labelname":"htc_a31mg_dug",
                "Model":"HTC_D620h"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire 516 dual sim",
                "labelname":"htc_v2_dug",
                "Model":"HTC V2"
            },
            {
                "brandname":"HTC",
                "marketname":"Chacha",
                "labelname":"chacha",
                "Model":"HTC Status"
            },
            {
                "brandname":"HTC",
                "marketname":"Aria",
                "labelname":"liberty",
                "Model":"HTC Aria A6380"
            },
            {
                "brandname":"HTC",
                "marketname":"HTCOneMaxVZW",
                "labelname":"t6wl",
                "Model":"HTC6600LVW"
            },
            {
                "brandname":"HTC",
                "marketname":"Legend",
                "labelname":"legend",
                "Model":"HTC Legend"
            },
            {
                "brandname":"HTC",
                "marketname":"Sensation 4G",
                "labelname":"pyramid",
                "Model":"HTC Sensation XE with Beats Audio"
            },
            {
                "brandname":"HTC",
                "marketname":"Wildfire CDMA",
                "labelname":"bee",
                "Model":"HTC Wildfire"
            },
            {
                "brandname":"HTC",
                "marketname":"myTouch 4G",
                "labelname":"glacier",
                "Model":"HTC Glacier"
            },
            {
                "brandname":"HTC",
                "marketname":"EVO Shift 4G",
                "labelname":"speedy",
                "Model":"PG06100"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire VC",
                "labelname":"primodd",
                "Model":"HTC T328d"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire D820mini",
                "labelname":"htc_a31dtul",
                "Model":"HTC D820mu"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire",
                "labelname":"bravo",
                "Model":"HTC Desire"
            },
            {
                "brandname":"HTC",
                "marketname":"Aria",
                "labelname":"liberty",
                "Model":"HTC Gratia A6380"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC 0P9C8",
                "labelname":"htc_a5dwgl",
                "Model":"HTC Desire 816 dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"Aria",
                "labelname":"liberty",
                "Model":"HTC Liberty"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire",
                "labelname":"bravoc",
                "Model":"PB99400"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire 620 dual sim",
                "labelname":"htc_a31dtul",
                "Model":"HTC_D620u"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire HD",
                "labelname":"ace",
                "Model":"001HT"
            },
            {
                "brandname":"HTC",
                "marketname":"Droid DNA",
                "labelname":"dlx",
                "Model":"HTC6435LVW"
            },
            {
                "brandname":"HTC",
                "marketname":"Flyer",
                "labelname":"flyer",
                "Model":"HTC Flyer P510e"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC 601e",
                "labelname":"m4",
                "Model":"HTC 601e"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Butterfly",
                "labelname":"dlxu",
                "Model":"HTC X920e"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 300",
                "labelname":"g3u",
                "Model":"HTC 301e"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 500",
                "labelname":"z4u",
                "Model":"HTC_Desire_500"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 516",
                "labelname":"htc_v2_dtg",
                "Model":"HTC D516t"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 601",
                "labelname":"zara",
                "Model":"HTC_0P4E2"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 620",
                "labelname":"htc_a31ul",
                "Model":"HTC 0PE64"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 816",
                "labelname":"htc_a5ul",
                "Model":"HTC_0P9C2"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 826",
                "labelname":"htc_a52dtul",
                "Model":"HTC D826w"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire V",
                "labelname":"primods",
                "Model":"HTC PROMIN_U"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC EVO 3D X515m",
                "labelname":"shooteru",
                "Model":"HTC Inspire 3D"
            },
            {
                "brandname":"HTC",
                "marketname":"Butterfly S",
                "labelname":"dlxpul",
                "Model":"HTC Butterfly s"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire 320",
                "labelname":"htc_v01_u",
                "Model":"HTC 0PF11"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire 626",
                "labelname":"htc_a32dcgl",
                "Model":"HTC D626d"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire HD",
                "labelname":"ace",
                "Model":"HTC Desire HD A9191"
            },
            {
                "brandname":"HTC",
                "marketname":"Droid Eris",
                "labelname":"desirec",
                "Model":"Eris"
            },
            {
                "brandname":"HTC",
                "marketname":"Flyer",
                "labelname":"flyer",
                "Model":"HTC Flyer P511e"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC 606w",
                "labelname":"cp3dug",
                "Model":"HTC Desire 600"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Butterfly",
                "labelname":"dlxub1",
                "Model":"HTC DLXUB1"
            },
            {
                "brandname":"HTC",
                "marketname":"Butterfly S",
                "labelname":"dlxpul",
                "Model":"HTC_Butterfly_s_901s"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire 320",
                "labelname":"htc_v01_u",
                "Model":"HTC Desire 320"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire 626",
                "labelname":"htc_a32ul",
                "Model":"HTC_D626x"
            },
            {
                "brandname":"HTC",
                "marketname":"Desire HD",
                "labelname":"ace",
                "Model":"Inspire HD"
            },
            {
                "brandname":"HTC",
                "marketname":"Droid Eris",
                "labelname":"desirec",
                "Model":"Pulse"
            },
            {
                "brandname":"HTC",
                "marketname":"Flyer",
                "labelname":"flyer",
                "Model":"HTC Flyer P512"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC 606w",
                "labelname":"cp3dug",
                "Model":"HTC Desire 600 dual sim"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Butterfly 2",
                "labelname":"htc_b2ul",
                "Model":"HTC_B810x"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 300",
                "labelname":"g3u",
                "Model":"HTC_Desire_300"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 501",
                "labelname":"htc_csnu",
                "Model":"HTC_603h"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 516",
                "labelname":"htc_v2_dug",
                "Model":"HTC D516w"
            },
            {
                "brandname":"HTC",
                "marketname":"HTC Desire 606w",
                "labelname":"cp3dug",
                "Model":"HTC 606w"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y300",
                "labelname":"hwY300-0151",
                "Model":"HUAWEI Y300-0151"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y330-U07",
                "labelname":"hwY330-U07",
                "Model":"HUAWEI Y330-U07"
            },
            {
                "brandname":"Huawei",
                "marketname":"G730",
                "labelname":"hwG730-T00",
                "Model":"HUAWEI G730-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G700",
                "labelname":"hwG700-T00",
                "Model":"HUAWEI G700-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G629-UL00",
                "labelname":"HWG629-UL",
                "Model":"HUAWEI G629-UL00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G610-U20",
                "labelname":"hwG610-U20",
                "Model":"HUAWEI G610-U20"
            },
            {
                "brandname":"Huawei",
                "marketname":"G606",
                "labelname":"HWG606",
                "Model":"HUAWEI G606-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G6-C00",
                "labelname":"hwG6-C00",
                "Model":"HUAWEI G6-C00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G526",
                "labelname":"hwG526-L33",
                "Model":"G526-L33"
            },
            {
                "brandname":"Huawei",
                "marketname":"C8812",
                "labelname":"hwc8812",
                "Model":"HUAWEI C8812"
            },
            {
                "brandname":"Huawei",
                "marketname":"D2",
                "labelname":"hwD2-6070",
                "Model":"HUAWEI D2-6070"
            },
            {
                "brandname":"Huawei",
                "marketname":"G510",
                "labelname":"hwG510-0100",
                "Model":"HuaweiG510-0100-orange"
            },
            {
                "brandname":"Huawei",
                "marketname":"G535-L11",
                "labelname":"hwG535-L11",
                "Model":"HUAWEI G535-L11"
            },
            {
                "brandname":"Huawei",
                "marketname":"G6-L22",
                "labelname":"hwG6-L22",
                "Model":"HUAWEI G6-L22"
            },
            {
                "brandname":"Huawei",
                "marketname":"G610",
                "labelname":"hwG610-U00",
                "Model":"G610-U00"
            },
            {
                "brandname":"Huawei",
                "marketname":"C8815",
                "labelname":"hwC8815",
                "Model":"HUAWEI C8815"
            },
            {
                "brandname":"Huawei",
                "marketname":"G350",
                "labelname":"hwg350",
                "Model":"HUAWEI G350"
            },
            {
                "brandname":"Huawei",
                "marketname":"G521-L076",
                "labelname":"HWG521-L",
                "Model":"HUAWEI G521-L076"
            },
            {
                "brandname":"Huawei",
                "marketname":"G535-L11",
                "labelname":"hwG535-L11",
                "Model":"Orange Gova"
            },
            {
                "brandname":"Huawei",
                "marketname":"G6-U00",
                "labelname":"hwG6-U00",
                "Model":"HUAWEI G6-U00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G610",
                "labelname":"hwG610-U30",
                "Model":"HUAWEI G610-U30"
            },
            {
                "brandname":"Huawei",
                "marketname":"G620-L72",
                "labelname":"hwG620-L72",
                "Model":"HUAWEI G620-L72"
            },
            {
                "brandname":"Huawei",
                "marketname":"G660-L075",
                "labelname":"hwG660-L075",
                "Model":"HUAWEI G660-L075"
            },
            {
                "brandname":"Huawei",
                "marketname":"G700-U20",
                "labelname":"hwG700-U20",
                "Model":"HUAWEI G700-U20"
            },
            {
                "brandname":"Huawei",
                "marketname":"G730-U251",
                "labelname":"hwG730-U251",
                "Model":"HUAWEI G730-U251"
            },
            {
                "brandname":"Huawei",
                "marketname":"G750-T01M",
                "labelname":"hwG750-T01M",
                "Model":"HUAWEI G750-T01M"
            },
            {
                "brandname":"Huawei",
                "marketname":"H30-L02",
                "labelname":"hwH30",
                "Model":"HONOR H30-L02"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad 10 Link+",
                "labelname":"hws10231l",
                "Model":"SpeedTAB"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad M1 8.0",
                "labelname":"hws8301l",
                "Model":"MediaPad M1 8.0 (LTE)"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad X1 7.0",
                "labelname":"hw7d501l",
                "Model":"MediaPad X1"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI Y536-A1",
                "labelname":"hwY536A1",
                "Model":"HUAWEI Y536A1"
            },
            {
                "brandname":"Huawei",
                "marketname":"IDEOS",
                "labelname":"u8150",
                "Model":"Ideos"
            },
            {
                "brandname":"Huawei",
                "marketname":"MT2-L05",
                "labelname":"hwmt2-l05",
                "Model":"HUAWEI MT2-L05"
            },
            {
                "brandname":"Huawei",
                "marketname":"MediaPad Vogue",
                "labelname":"hws7601u",
                "Model":"MediaPad 7 Lite II"
            },
            {
                "brandname":"Huawei",
                "marketname":"P6",
                "labelname":"hwp6-t00",
                "Model":"HUAWEI P6-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"P7-L09",
                "labelname":"hwp7",
                "Model":"HUAWEI P7-L09"
            },
            {
                "brandname":"Huawei",
                "marketname":"S7",
                "labelname":"hws7951w",
                "Model":"MediaPad 7 Lite+"
            },
            {
                "brandname":"Huawei",
                "marketname":"T-Mobile Pulse",
                "labelname":"U8100",
                "Model":"Videocon_V7400"
            },
            {
                "brandname":"Huawei",
                "marketname":"U8220",
                "labelname":"U8220",
                "Model":"Pulse"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y210",
                "labelname":"oay210",
                "Model":"Orinoquia Auyantepui Y210"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y221-U22",
                "labelname":"HWY221-U",
                "Model":"HUAWEI Y221-U22"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y300",
                "labelname":"hwY300-0151",
                "Model":"Pelephone-Y300-"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y320-U151",
                "labelname":"HWY320-U",
                "Model":"HUAWEI Y320-U151"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y330",
                "labelname":"hwY330-U21",
                "Model":"HUAWEI Y330-U21"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y330-U15",
                "labelname":"hwY330-U15",
                "Model":"HUAWEI Y330-U15"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y511-U251",
                "labelname":"HWY511-U",
                "Model":"HUAWEI Y511-U251"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y520-U33",
                "labelname":"HWY520-U",
                "Model":"HUAWEI Y520-U33"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y540-U01",
                "labelname":"HWY540-U",
                "Model":"HUAWEI Y540-U01"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y600",
                "labelname":"HWY600-U",
                "Model":"HUAWEI Y600-U151"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y625-U21",
                "labelname":"HWY625-U",
                "Model":"HUAWEI Y625-U21"
            },
            {
                "brandname":"Huawei",
                "marketname":"hw204HW",
                "labelname":"hw204HW",
                "Model":"204HW"
            },
            {
                "brandname":"Huawei",
                "marketname":"G510",
                "labelname":"hwG510-0100",
                "Model":"HUAWEI G510-0100"
            },
            {
                "brandname":"Huawei",
                "marketname":"C8817L",
                "labelname":"hwC8817L",
                "Model":"HUAWEI C8817L"
            },
            {
                "brandname":"Huawei",
                "marketname":"Ascend D",
                "labelname":"hwu9500",
                "Model":"U9500"
            },
            {
                "brandname":"Huawei",
                "marketname":"Gran_Roraima",
                "labelname":"hws7721u",
                "Model":"Orinoquia Gran Roraima + S7-722u"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI G7-L01",
                "labelname":"hwG7-L01",
                "Model":"G7-L01"
            },
            {
                "brandname":"Huawei",
                "marketname":"Honor3",
                "labelname":"hwH30-U10",
                "Model":"H30-U10"
            },
            {
                "brandname":"Huawei",
                "marketname":"M835",
                "labelname":"hwm835",
                "Model":"HUAWEI-M835"
            },
            {
                "brandname":"Huawei",
                "marketname":"MT7-TL10",
                "labelname":"hwmt7",
                "Model":"HUAWEI MT7-TL10"
            },
            {
                "brandname":"Huawei",
                "marketname":"MediaPad7",
                "labelname":"hws7601w",
                "Model":"MediaPad 7 Vogue"
            },
            {
                "brandname":"Huawei",
                "marketname":"P6S-U06",
                "labelname":"hwp6s-u06",
                "Model":"HUAWEI P6 S-U06"
            },
            {
                "brandname":"Huawei",
                "marketname":"S10",
                "labelname":"hws10201l",
                "Model":"MediaPad 10 LINK"
            },
            {
                "brandname":"Huawei",
                "marketname":"SC-CL00",
                "labelname":"HWSC-CL00",
                "Model":"HUAWEI SC-CL00"
            },
            {
                "brandname":"Huawei",
                "marketname":"T102",
                "labelname":"hwt102",
                "Model":"T102 PAD"
            },
            {
                "brandname":"Huawei",
                "marketname":"V858",
                "labelname":"hwu8160",
                "Model":"MTC 950"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y220-T10",
                "labelname":"hwy220-t10",
                "Model":"HUAWEI Y220-T10"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y300",
                "labelname":"hwY300-0100",
                "Model":"HUAWEI Ascend Y300"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y320",
                "labelname":"hwy320-c00",
                "Model":"HUAWEI Y320-C00"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y321",
                "labelname":"hwy321-c00",
                "Model":"HUAWEI Y321-C00"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y360-U12",
                "labelname":"HWY360-U",
                "Model":"HUAWEI Y360-U12"
            },
            {
                "brandname":"Huawei",
                "marketname":"G615-U10",
                "labelname":"hwG615-U10",
                "Model":"HUAWEI G615-U10"
            },
            {
                "brandname":"Huawei",
                "marketname":"G630-U00",
                "labelname":"hwG630-U00",
                "Model":"HUAWEI G630-U00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G700-T01",
                "labelname":"hwG700-T01",
                "Model":"HUAWEI G700-T01"
            },
            {
                "brandname":"Huawei",
                "marketname":"G730-L075",
                "labelname":"hwG730-L075",
                "Model":"HUAWEI G730-L075"
            },
            {
                "brandname":"Huawei",
                "marketname":"G750-T00",
                "labelname":"hwG750-T00",
                "Model":"HUAWEI G750-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"H30-L01",
                "labelname":"hwH30",
                "Model":"HONOR H30-L01"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad 10 Link+",
                "labelname":"hws10231l",
                "Model":"MediaPad 10 Link+"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad M1 8.0",
                "labelname":"hws8301l",
                "Model":"CNPC Security Pad S1"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad M1 8.0",
                "labelname":"hws8301l",
                "Model":"S8-306L"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI P6",
                "labelname":"hwp6-u06",
                "Model":"HUAWEI P6-U06"
            },
            {
                "brandname":"Huawei",
                "marketname":"Honor3",
                "labelname":"hwhn3-u01",
                "Model":"HUAWEI HN3-U01"
            },
            {
                "brandname":"Huawei",
                "marketname":"MT2-L02",
                "labelname":"hwmt2-l02",
                "Model":"HUAWEI MT2-L02"
            },
            {
                "brandname":"Huawei",
                "marketname":"Mate",
                "labelname":"hwmt1-t00",
                "Model":"HUAWEI MT1-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"P2",
                "labelname":"hwp2-6070",
                "Model":"HUAWEI P2-6070"
            },
            {
                "brandname":"Huawei",
                "marketname":"P7-L05",
                "labelname":"hwp7",
                "Model":"HUAWEI P7-L05"
            },
            {
                "brandname":"Huawei",
                "marketname":"S7",
                "labelname":"hws7701u",
                "Model":"MediaPad 7 Youth"
            },
            {
                "brandname":"Huawei",
                "marketname":"T-Mobile Pulse",
                "labelname":"U8100",
                "Model":"Tactile internet"
            },
            {
                "brandname":"Huawei",
                "marketname":"T802",
                "labelname":"hwt802",
                "Model":"T802 PAD"
            },
            {
                "brandname":"Huawei",
                "marketname":"Vogue7",
                "labelname":"hws7601u",
                "Model":"MediaPad 7 Lite II"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y221-U03",
                "labelname":"QAY221-U",
                "Model":"ORINOQUIA Auyantepui+Y221-U03"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y300",
                "labelname":"hwY300-0100",
                "Model":"HUAWEI Y300-0100"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y320-U01",
                "labelname":"HWY320",
                "Model":"HUAWEI Y320-U01"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y330",
                "labelname":"hwY330-U05",
                "Model":"Bucare Y330-U05"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y330-U11",
                "labelname":"hwY330-U11",
                "Model":"HUAWEI Y330-U11"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y511-T00",
                "labelname":"HWY511-T",
                "Model":"HUAWEI Y511-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"V858",
                "labelname":"hwu8160",
                "Model":"Vodafone 858"
            },
            {
                "brandname":"Huawei",
                "marketname":"T802",
                "labelname":"hwt802",
                "Model":"MT-803G"
            },
            {
                "brandname":"Huawei",
                "marketname":"S7",
                "labelname":"hws7601w",
                "Model":"MediaPad 7 Vogue"
            },
            {
                "brandname":"Huawei",
                "marketname":"P7-L00",
                "labelname":"hwp7",
                "Model":"HUAWEI P7-L00"
            },
            {
                "brandname":"Huawei",
                "marketname":"M868",
                "labelname":"hwm868",
                "Model":"HUAWEI M868"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y520-U12",
                "labelname":"HWY520-U",
                "Model":"HUAWEI Y520-U12"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y535",
                "labelname":"HWY535-C00",
                "Model":"HUAWEI Y535-C00"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y550-L03",
                "labelname":"hwY550-L03",
                "Model":"Personal Huawei Y550"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y625-U03",
                "labelname":"KVY625-U",
                "Model":"Kavak Y625-U03"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y635-L03",
                "labelname":"hwY635",
                "Model":"HUAWEI Y635-L03"
            },
            {
                "brandname":"Huawei",
                "marketname":"MT2-L01",
                "labelname":"hwmt2-l01",
                "Model":"HUAWEI MT2-L01"
            },
            {
                "brandname":"Huawei",
                "marketname":"Vogue7",
                "labelname":"hws7601u",
                "Model":"MediaPad 7 Classic"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y518-T00",
                "labelname":"HWY518-T",
                "Model":"HUAWEI Y518-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"B199",
                "labelname":"hwB199",
                "Model":"HUAWEI B199"
            },
            {
                "brandname":"Huawei",
                "marketname":"C8818",
                "labelname":"hwC8818",
                "Model":"HUAWEI C8818"
            },
            {
                "brandname":"Huawei",
                "marketname":"G510",
                "labelname":"hwG510-0100",
                "Model":"HuaweiG510-0100"
            },
            {
                "brandname":"Huawei",
                "marketname":"G527",
                "labelname":"hwG527-U081",
                "Model":"G527-U081"
            },
            {
                "brandname":"Huawei",
                "marketname":"G6-L11",
                "labelname":"hwG6-L11",
                "Model":"HUAWEI G6-L11"
            },
            {
                "brandname":"Huawei",
                "marketname":"G610",
                "labelname":"hwG610-T00",
                "Model":"HUAWEI G610-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G610C",
                "labelname":"hwG610-C00",
                "Model":"HUAWEI G610-C00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G700",
                "labelname":"hwG700-U00",
                "Model":"HUAWEI G700-U00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G730",
                "labelname":"hwG730-U00",
                "Model":"HUAWEI G730-U00"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad 10 Link+",
                "labelname":"hws10231l",
                "Model":"402HW"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y530-U051",
                "labelname":"hwY530-U051",
                "Model":"HUAWEI Y530"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y550-L03",
                "labelname":"hwY550-L03",
                "Model":"HUAWEI Y550-L03"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y600D-C00",
                "labelname":"HWY600D-C00",
                "Model":"HUAWEI Y600D-C00"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y635-CL00",
                "labelname":"hwY635",
                "Model":"HUAWEI Y635-CL00"
            },
            {
                "brandname":"Huawei",
                "marketname":"t1_8p0",
                "labelname":"hws8701",
                "Model":"S8-701w"
            },
            {
                "brandname":"Huawei",
                "marketname":"t1_8p0",
                "labelname":"hws8701",
                "Model":"S8-701u"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y625-U51",
                "labelname":"HWY625-U",
                "Model":"HUAWEI Y625-U51"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y600-U40",
                "labelname":"HWY600-U",
                "Model":"HUAWEI Y600-U40"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y550-L03",
                "labelname":"hwY550-L03",
                "Model":"HUAWEI Y550"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y530",
                "labelname":"hwY530-U00",
                "Model":"HUAWEI Y530-U00"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y516-",
                "labelname":"HWY516-T",
                "Model":"HUAWEI Y516-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y360-U03",
                "labelname":"HWY360-U",
                "Model":"HUAWEI Y360-U03"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y330-U01",
                "labelname":"hwY330-U01",
                "Model":"Luno"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y321",
                "labelname":"HWY321-U",
                "Model":"HUAWEI Y321-U051"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y301A2",
                "labelname":"hwY301A2",
                "Model":"Huawei Y301A2"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y221-U53",
                "labelname":"HWY221-U",
                "Model":"HUAWEI Y221-U53"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y220",
                "labelname":"HWY220-U",
                "Model":"Y220-U17"
            },
            {
                "brandname":"Huawei",
                "marketname":"V858",
                "labelname":"hwu8160",
                "Model":"Huawei 858"
            },
            {
                "brandname":"Huawei",
                "marketname":"C8816",
                "labelname":"hwC8816",
                "Model":"HUAWEI C8816"
            },
            {
                "brandname":"Huawei",
                "marketname":"G350",
                "labelname":"hwg350",
                "Model":"HUAWEI G350-U00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G521-L176",
                "labelname":"HWG521-L",
                "Model":"HUAWEI G521-L176"
            },
            {
                "brandname":"Huawei",
                "marketname":"G535-L11",
                "labelname":"hwG535-L11",
                "Model":"Speedsurfer"
            },
            {
                "brandname":"Huawei",
                "marketname":"G6-U10",
                "labelname":"hwG6-U10",
                "Model":"HUAWEI G6-U10"
            },
            {
                "brandname":"Huawei",
                "marketname":"G610-T01",
                "labelname":"hwG610-T01",
                "Model":"HUAWEI G610-T01"
            },
            {
                "brandname":"Huawei",
                "marketname":"G620S-L03",
                "labelname":"hwG620S-L03",
                "Model":"HUAWEI G620"
            },
            {
                "brandname":"Huawei",
                "marketname":"G7-L03",
                "labelname":"hwG7-L03",
                "Model":"HUAWEI G7"
            },
            {
                "brandname":"Huawei",
                "marketname":"G716",
                "labelname":"hwG716-L070",
                "Model":"HUAWEI G716-L070"
            },
            {
                "brandname":"Huawei",
                "marketname":"G730-U27",
                "labelname":"hwG730-U27",
                "Model":"HUAWEI G730-U27"
            },
            {
                "brandname":"Huawei",
                "marketname":"G750-T20",
                "labelname":"hwG750-T20",
                "Model":"HUAWEI G750-T20"
            },
            {
                "brandname":"Huawei",
                "marketname":"H60",
                "labelname":"hwH60",
                "Model":"H60-L01"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad 7 Youth2",
                "labelname":"hws7721u",
                "Model":"MediaPad 7 Youth 2"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad M1 8.0",
                "labelname":"hws8301l",
                "Model":"MediaPad M1 8.0 (WIFI)"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad X1 7.0",
                "labelname":"hw7d501l",
                "Model":"MediaPad X1 7.0"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI Y610",
                "labelname":"HWY610-U",
                "Model":"HUAWEI Y610-U00"
            },
            {
                "brandname":"Huawei",
                "marketname":"M220",
                "labelname":"hwmediaqm220",
                "Model":"M220c"
            },
            {
                "brandname":"Huawei",
                "marketname":"MT2L03LITE",
                "labelname":"hwMT2L03LITE",
                "Model":"MT2L03"
            },
            {
                "brandname":"Huawei",
                "marketname":"MediaPad Vogue",
                "labelname":"hws7601u",
                "Model":"MediaPad 7 Vogue"
            },
            {
                "brandname":"Huawei",
                "marketname":"P6",
                "labelname":"hwp6-t00",
                "Model":"HUAWEI P6-T00V"
            },
            {
                "brandname":"Huawei",
                "marketname":"P7-L10",
                "labelname":"hwp7",
                "Model":"HUAWEI P7-L10"
            },
            {
                "brandname":"Huawei",
                "marketname":"S7",
                "labelname":"hws7951w",
                "Model":"Telpad Dual S"
            },
            {
                "brandname":"Huawei",
                "marketname":"T101",
                "labelname":"hwt101",
                "Model":"T-101"
            },
            {
                "brandname":"Huawei",
                "marketname":"U8220",
                "labelname":"U8220",
                "Model":"U8220PLUS"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y220",
                "labelname":"HWY220-U",
                "Model":"Y220-U00"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y221-U33",
                "labelname":"HWY221-U",
                "Model":"HUAWEI Y221-U33"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y300-0000",
                "labelname":"hwY300-0000",
                "Model":"HUAWEI Y300-0000"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y320-U30",
                "labelname":"HWY320-U",
                "Model":"HUAWEI Y320-U30"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y330-C00",
                "labelname":"hwY330-C00",
                "Model":"HUAWEI Y330-C00"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y330-U17",
                "labelname":"hwY330-U17",
                "Model":"HUAWEI Y330-U17"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y511-U30",
                "labelname":"HWY511-U",
                "Model":"HUAWEI Y511-U30"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y523-L076",
                "labelname":"HWY523",
                "Model":"HUAWEI Y523-L076"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y550-L01",
                "labelname":"hwY550-L01",
                "Model":"HUAWEI Y550-L01"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y600",
                "labelname":"HWY600-U",
                "Model":"HUAWEI Y600-U20"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y625-U32",
                "labelname":"HWY625-U",
                "Model":"HUAWEI Y625-U32"
            },
            {
                "brandname":"Huawei",
                "marketname":"m881",
                "labelname":"hwm881",
                "Model":"HUAWEI M881"
            },
            {
                "brandname":"Huawei",
                "marketname":"T102",
                "labelname":"hwt102",
                "Model":"QH-10"
            },
            {
                "brandname":"Huawei",
                "marketname":"S7",
                "labelname":"hws7961w",
                "Model":"Telpad Quad S"
            },
            {
                "brandname":"Huawei",
                "marketname":"S10",
                "labelname":"hws10103l",
                "Model":"MediaPad 10 FHD"
            },
            {
                "brandname":"Huawei",
                "marketname":"P6S-L04",
                "labelname":"hwp6s-l04",
                "Model":"302HW"
            },
            {
                "brandname":"Huawei",
                "marketname":"MediaPad7",
                "labelname":"hws7601us",
                "Model":"MediaPad 7 Vogue"
            },
            {
                "brandname":"Huawei",
                "marketname":"MT7-TL00",
                "labelname":"hwmt7",
                "Model":"HUAWEI MT7-TL00"
            },
            {
                "brandname":"Huawei",
                "marketname":"M620",
                "labelname":"M620",
                "Model":"TB01"
            },
            {
                "brandname":"Huawei",
                "marketname":"Honor3",
                "labelname":"hwH30-T10",
                "Model":"H30-T10"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI P6",
                "labelname":"hwp6-u06",
                "Model":"HUAWEI Ascend P6"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad M1 8.0",
                "labelname":"hws8301l",
                "Model":"S8-303LT"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad M1 8.0",
                "labelname":"hws8301l",
                "Model":"403HW"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI G630",
                "labelname":"hwG630-T00",
                "Model":"HUAWEI G630-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G7500",
                "labelname":"HWG7500",
                "Model":"HUAWEI G7500"
            },
            {
                "brandname":"Huawei",
                "marketname":"G740",
                "labelname":"hwG740-L00",
                "Model":"G740-L00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G730",
                "labelname":"hwG730-C00",
                "Model":"HUAWEI G730-C00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G7-TL00",
                "labelname":"hwG7-TL00",
                "Model":"HUAWEI G7-TL00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G628-TL00",
                "labelname":"HWG628-TL",
                "Model":"HUAWEI G628-TL00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G610-U15",
                "labelname":"hwG610-U15",
                "Model":"HUAWEI G610-U15"
            },
            {
                "brandname":"Huawei",
                "marketname":"Honor3",
                "labelname":"hwhn3-u00",
                "Model":"HUAWEI HN3-U00"
            },
            {
                "brandname":"Huawei",
                "marketname":"M865",
                "labelname":"hwm865",
                "Model":"USCCADR3305"
            },
            {
                "brandname":"Huawei",
                "marketname":"MT7-UL00",
                "labelname":"hwmt7",
                "Model":"HUAWEI MT7-UL00"
            },
            {
                "brandname":"Huawei",
                "marketname":"P7 mini",
                "labelname":"hwP7Mini",
                "Model":"HUAWEI P7 mini"
            },
            {
                "brandname":"Huawei",
                "marketname":"S7",
                "labelname":"hws7601c",
                "Model":"MediaPad 7 Vogue"
            },
            {
                "brandname":"Huawei",
                "marketname":"T-Mobile Pulse",
                "labelname":"U8100",
                "Model":"Huawei_8100-9"
            },
            {
                "brandname":"Huawei",
                "marketname":"T801",
                "labelname":"hwt801",
                "Model":"T801 PAD"
            },
            {
                "brandname":"Huawei",
                "marketname":"V858",
                "labelname":"hwu8160",
                "Model":"MTC Mini"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y221-U03",
                "labelname":"HWY221-U",
                "Model":"HUAWEI Y221-U03"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y320-T00",
                "labelname":"HWY320-T00",
                "Model":"HUAWEI Y320-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y325-T00",
                "labelname":"HWY325-T",
                "Model":"HUAWEI Y325-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y330-U08",
                "labelname":"hwY330-U08",
                "Model":"HUAWEI Y330-U08"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y360-U23",
                "labelname":"HWY360-U",
                "Model":"HUAWEI Y360-U23"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y520-U03",
                "labelname":"HWY520-U",
                "Model":"HUAWEI Y520-U03"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y530-U051",
                "labelname":"hwY530-U051",
                "Model":"HUAWEI Y530-U051"
            },
            {
                "brandname":"Huawei",
                "marketname":"G6-U34",
                "labelname":"hwG6-U34",
                "Model":"HUAWEI G6-U34"
            },
            {
                "brandname":"Huawei",
                "marketname":"G6",
                "labelname":"hwG6-T00",
                "Model":"HUAWEI G6-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G526",
                "labelname":"hwG526-L22",
                "Model":"G526-L22"
            },
            {
                "brandname":"Huawei",
                "marketname":"Youth",
                "labelname":"hws7701u",
                "Model":"Orinoquia Gran Roraima S7-702u"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y625-U13",
                "labelname":"HWY625-U",
                "Model":"HUAWEI Y625-U13"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y600",
                "labelname":"HWY600-U",
                "Model":"HUAWEI Y600-U00"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y535D-C00",
                "labelname":"HWY535D-C00",
                "Model":"HUAWEI Y535D-C00"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y520-U22",
                "labelname":"HWY520-U",
                "Model":"HUAWEI Y520-U22"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y511-U10",
                "labelname":"HWY511-U",
                "Model":"HUAWEI Y511-U10"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y330-U11",
                "labelname":"hwY330-U11",
                "Model":"V8510"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y330",
                "labelname":"hwY330-U05",
                "Model":"HUAWEI Y330-U05"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y320-U10",
                "labelname":"HWY320-U",
                "Model":"HUAWEI Y320-U10"
            },
            {
                "brandname":"Huawei",
                "marketname":"G510",
                "labelname":"hwG510-0010",
                "Model":"HUAWEI G510-0010"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y221-U12",
                "labelname":"HWY221-U",
                "Model":"HUAWEI Y221-U12"
            },
            {
                "brandname":"Huawei",
                "marketname":"Vogue7",
                "labelname":"hws7601u",
                "Model":"MediaPad 7 Vogue"
            },
            {
                "brandname":"Huawei",
                "marketname":"U8120",
                "labelname":"U8120",
                "Model":"Vodafone 845"
            },
            {
                "brandname":"Huawei",
                "marketname":"T-Mobile Pulse",
                "labelname":"U8100",
                "Model":"U8100"
            },
            {
                "brandname":"Huawei",
                "marketname":"S7",
                "labelname":"hws7930u",
                "Model":"Orinoquia Roraima S7-932u"
            },
            {
                "brandname":"Huawei",
                "marketname":"P7-L07",
                "labelname":"hwp7",
                "Model":"HUAWEI P7-L07"
            },
            {
                "brandname":"Huawei",
                "marketname":"P6",
                "labelname":"hwp6-c00",
                "Model":"HUAWEI P6-C00"
            },
            {
                "brandname":"Huawei",
                "marketname":"Mate2",
                "labelname":"hwmt2-c00",
                "Model":"HUAWEI MT2-C00"
            },
            {
                "brandname":"Huawei",
                "marketname":"MT2-L03",
                "labelname":"hwMT2L03",
                "Model":"MT2L03"
            },
            {
                "brandname":"Huawei",
                "marketname":"IDEOS",
                "labelname":"U8150",
                "Model":"Comet"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI P6",
                "labelname":"hwp6-u06",
                "Model":"HUAWEI P6-U06-orange"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad X1 7.0",
                "labelname":"hw7d501l",
                "Model":"7D-501u"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad M1 8.0",
                "labelname":"hws8301l",
                "Model":"MediaPad M1 8.0"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad 10 Link+",
                "labelname":"hws10231l",
                "Model":"S10-232L"
            },
            {
                "brandname":"Huawei",
                "marketname":"H30-L01M",
                "labelname":"hwH30",
                "Model":"HONOR H30-L01M"
            },
            {
                "brandname":"Huawei",
                "marketname":"G750-T01",
                "labelname":"hwG750-T01",
                "Model":"HUAWEI G750-T01"
            },
            {
                "brandname":"Huawei",
                "marketname":"G730-U10",
                "labelname":"hwG730-U10",
                "Model":"HUAWEI G730-U10"
            },
            {
                "brandname":"Huawei",
                "marketname":"G700-U10",
                "labelname":"hwG700-U10",
                "Model":"HUAWEI G700-U10"
            },
            {
                "brandname":"Huawei",
                "marketname":"G630-U251",
                "labelname":"hwG630-U251",
                "Model":"HUAWEI G630-U251"
            },
            {
                "brandname":"Huawei",
                "marketname":"G616-L076",
                "labelname":"HWG616-L",
                "Model":"HUAWEI G616-L076"
            },
            {
                "brandname":"Huawei",
                "marketname":"G610",
                "labelname":"hwG610-U00",
                "Model":"HUAWEI G610-U00"
            },
            {
                "brandname":"Huawei",
                "marketname":"G6-L33",
                "labelname":"hwG6-L33",
                "Model":"HUAWEI G6-L33"
            },
            {
                "brandname":"Huawei",
                "marketname":"G535-L11",
                "labelname":"hwG535-L11",
                "Model":"Kestrel"
            },
            {
                "brandname":"Huawei",
                "marketname":"G520",
                "labelname":"hwG520-5000",
                "Model":"HUAWEI G520-5000"
            },
            {
                "brandname":"Huawei",
                "marketname":"G350",
                "labelname":"HWG350",
                "Model":"HUAWEI G350-U20"
            },
            {
                "brandname":"Huawei",
                "marketname":"C8813DQ",
                "labelname":"hwC8813DQ",
                "Model":"HUAWEI C8813DQ"
            },
            {
                "brandname":"Huawei",
                "marketname":"C8816D",
                "labelname":"hwC8816D",
                "Model":"HUAWEI C8816D"
            },
            {
                "brandname":"Huawei",
                "marketname":"G506",
                "labelname":"hwG506-U151",
                "Model":"HUAWEI G506-U151"
            },
            {
                "brandname":"Huawei",
                "marketname":"G526",
                "labelname":"hwG526-L11",
                "Model":"G526-L11"
            },
            {
                "brandname":"Huawei",
                "marketname":"G535-L11",
                "labelname":"hwG535-L11",
                "Model":"Ultym5"
            },
            {
                "brandname":"Huawei",
                "marketname":"G6-U251",
                "labelname":"hwG6-U251",
                "Model":"HUAWEI G6-U251"
            },
            {
                "brandname":"Huawei",
                "marketname":"G610-T11",
                "labelname":"hwG610-T11",
                "Model":"HUAWEI G610-T11"
            },
            {
                "brandname":"Huawei",
                "marketname":"G620S-L03",
                "labelname":"hwG620S-L03",
                "Model":"Personal Huawei G620S"
            },
            {
                "brandname":"Huawei",
                "marketname":"G7-L03",
                "labelname":"hwG7-L03",
                "Model":"HUAWEI G7-L03"
            },
            {
                "brandname":"Huawei",
                "marketname":"G718",
                "labelname":"hwg718",
                "Model":"HUAWEI G718"
            },
            {
                "brandname":"Huawei",
                "marketname":"G730-U30",
                "labelname":"hwG730-U30",
                "Model":"HUAWEI G730-U30"
            },
            {
                "brandname":"Huawei",
                "marketname":"G750-U10",
                "labelname":"hwG750-U10",
                "Model":"HUAWEI G750-U10"
            },
            {
                "brandname":"Huawei",
                "marketname":"H60-J1",
                "labelname":"hwH60",
                "Model":"HW-H60-J1"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad 7 Youth2",
                "labelname":"hws7721u",
                "Model":"S7-721u"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad M1 8.0",
                "labelname":"hws8301l",
                "Model":"S8-303L"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI MediaPad X1 7.0",
                "labelname":"hw7d501l",
                "Model":"X1 7.0"
            },
            {
                "brandname":"Huawei",
                "marketname":"HUAWEI Y618",
                "labelname":"HWY618-T",
                "Model":"HUAWEI Y618-T00"
            },
            {
                "brandname":"Huawei",
                "marketname":"M220",
                "labelname":"hwmediaqm220",
                "Model":"dTV01"
            },
            {
                "brandname":"Huawei",
                "marketname":"MT7-CL00",
                "labelname":"hwmt7",
                "Model":"HUAWEI MT7-CL00"
            },
            {
                "brandname":"Huawei",
                "marketname":"MediaPad Youth",
                "labelname":"hws7701w",
                "Model":"MediaPad 7 Youth"
            },
            {
                "brandname":"Huawei",
                "marketname":"P6S",
                "labelname":"hwP6s-l04",
                "Model":"P6 S-L04"
            },
            {
                "brandname":"Huawei",
                "marketname":"P7-L12",
                "labelname":"hwp7",
                "Model":"HUAWEI P7-L12"
            },
            {
                "brandname":"Huawei",
                "marketname":"S7",
                "labelname":"hws7961w",
                "Model":"Telpad QS"
            },
            {
                "brandname":"Huawei",
                "marketname":"T101",
                "labelname":"hwt101",
                "Model":"T101 PAD"
            },
            {
                "brandname":"Huawei",
                "marketname":"U8687",
                "labelname":"hwu8687",
                "Model":"Huawei-U8687"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y220",
                "labelname":"HWY220-U",
                "Model":"Y220-U05"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y221-U43",
                "labelname":"HWY221-U",
                "Model":"HUAWEI Y221-U43"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y301A1",
                "labelname":"hwY301A1",
                "Model":"Huawei Y301A1"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y320-U351",
                "labelname":"HWY320-U",
                "Model":"HUAWEI Y320-U351"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y330-U01",
                "labelname":"hwY330-U01",
                "Model":"HUAWEI Y330-U01"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y336-A1",
                "labelname":"hwY336-A1",
                "Model":"HUAWEI Y336-A1"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y511-U30",
                "labelname":"HWY511-U",
                "Model":"VIETTEL V8506"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y523-L176",
                "labelname":"HWY523",
                "Model":"HUAWEI Y523-L176"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y550-L02",
                "labelname":"hwY550-L02",
                "Model":"HUAWEI Y550-L02"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y600-U351",
                "labelname":"HWY600-U",
                "Model":"HUAWEI Y600-U351"
            },
            {
                "brandname":"Huawei",
                "marketname":"Y625-U43",
                "labelname":"HWY625-U",
                "Model":"HUAWEI Y625-U43"
            },
            {
                "brandname":"Huawei",
                "marketname":"t1_8p0",
                "labelname":"hws8701",
                "Model":"MediaPad T1 8.0"
            },
            {
                "brandname":"Huawei",
                "marketname":"C8817E",
                "labelname":"hwC8817E",
                "Model":"HUAWEI C8817E"
            },
            {
                "brandname":"Huawei",
                "marketname":"A199",
                "labelname":"hwa199",
                "Model":"HUAWEI A199"
            },
            {
                "brandname":"Huawei",
                "marketname":"G740",
                "labelname":"hwG740-L00",
                "Model":"Orange Yumo"
            },
            {
                "brandname":"Intel",
                "marketname":"TR10CS1 (PVT2)",
                "labelname":"TR10CS1_4",
                "Model":"TR10CS1"
            },
            {
                "brandname":"Intel",
                "marketname":"Orange avec Intel Inside",
                "labelname":"AZ210B",
                "Model":"AZ210B"
            },
            {
                "brandname":"Intel",
                "marketname":"Etisalat E-20",
                "labelname":"zeeyabeach",
                "Model":"BT230"
            },
            {
                "brandname":"Intel",
                "marketname":"TR10CD1(PVT2)",
                "labelname":"TR10CD1_6",
                "Model":"TR10CD1"
            },
            {
                "brandname":"Intel",
                "marketname":"Xolo X500",
                "labelname":"zeeyabeach",
                "Model":"Xolo_X500"
            },
            {
                "brandname":"Intel",
                "marketname":"Yolo",
                "labelname":"zeeyabeach",
                "Model":"BT210"
            },
            {
                "brandname":"Intel",
                "marketname":"Orange San Diego",
                "labelname":"AZ210A",
                "Model":"AZ210A"
            },
            {
                "brandname":"Intel",
                "marketname":"TR10CD1(PVT2)",
                "labelname":"TR10CD1_4",
                "Model":"TR10CD1"
            },
            {
                "brandname":"Kobo",
                "marketname":"Kobo Arc",
                "labelname":"zeus",
                "Model":"Arc"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo B8080",
                "labelname":"B8080",
                "Model":"Lenovo B8080-F"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo S60",
                "labelname":"sisleylw",
                "Model":"Lenovo S60-w"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo TAB 2 A7-30HC",
                "labelname":"A7-30HC",
                "Model":"Lenovo 2 A7-30HC"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenvo S960",
                "labelname":"S960_ROW",
                "Model":"Lenovo S960"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S61",
                "labelname":"ideatv_S61",
                "Model":"ideatv S61"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S850e",
                "labelname":"sichuan",
                "Model":"Lenovo S850e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S870e",
                "labelname":"S870e",
                "Model":"LNV-Lenovo S870e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S686",
                "labelname":"Alaska",
                "Model":"Lenovo S686"
            },
            {
                "brandname":"Lenovo",
                "marketname":"P780",
                "labelname":"P780_ROW",
                "Model":"Lenovo P780"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo S90",
                "labelname":"sisleye",
                "Model":"Lenovo S90-e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo K50",
                "labelname":"aio_otfp",
                "Model":"Lenovo K50-t5"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A7-30H",
                "labelname":"A7-30H",
                "Model":"Lenovo TAB 2 A7-30H"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A396",
                "labelname":"A396_TY",
                "Model":"Lenovo A396_TY"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A3300",
                "labelname":"A3300-T",
                "Model":"Lenovo A3300-T"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo",
                "labelname":"A880",
                "Model":"Lenovo A880"
            },
            {
                "brandname":"Lenovo",
                "marketname":"K800",
                "labelname":"K800",
                "Model":"Lenovo K800"
            },
            {
                "brandname":"Lenovo",
                "marketname":"IdeaTab A1020",
                "labelname":"A1020T",
                "Model":"IdeaTabA1020-T"
            },
            {
                "brandname":"Lenovo",
                "marketname":"B6000-H",
                "labelname":"B6000",
                "Model":"Lenovo B6000-H"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A766",
                "labelname":"A766",
                "Model":"Lenovo A766"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A656",
                "labelname":"A656",
                "Model":"Lenovo A656"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A375e",
                "labelname":"A375e",
                "Model":"LNV-Lenovo A375e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A278t",
                "labelname":"A278t",
                "Model":"Lenovo A278t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"60K72",
                "labelname":"ideatv_K72",
                "Model":"ideatv K72"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S870e",
                "labelname":"S870e",
                "Model":"Lenovo S870e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S720",
                "labelname":"S720",
                "Model":"Lenovo S720"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo S930_ROW",
                "labelname":"S930_ROW",
                "Model":"Lenovo S930"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo  TAB 2 A7-30HC",
                "labelname":"A7-30HC",
                "Model":"Lenovo TAB 2 A7-30HC"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A1000-G",
                "labelname":"A1000G",
                "Model":"IdeaTabA1000-G"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A269",
                "labelname":"A269",
                "Model":"Lenovo A269"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A369i",
                "labelname":"A369i",
                "Model":"Lenovo A369i"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A1000",
                "labelname":"A1000F",
                "Model":"IdeaTabA1000-F"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A750e",
                "labelname":"athenae",
                "Model":"Lenovo A750e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A860e",
                "labelname":"artini",
                "Model":"Lenovo A860e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"IdeaTab A1000",
                "labelname":"A1000LF",
                "Model":"LenovoA1000L-F"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S820e",
                "labelname":"applee",
                "Model":"Lenovo S820e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S6000L",
                "labelname":"S6000L",
                "Model":"Lenovo S6000L-F"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo YogaTbalet2-830F",
                "labelname":"YT2",
                "Model":"YOGA Tablet 2-830F"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo TAB 2 A7-10F",
                "labelname":"Tab2A7-10F",
                "Model":"Tab2A7-10F"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo S60",
                "labelname":"sisleylt",
                "Model":"Lenovo S60-t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A828",
                "labelname":"A858",
                "Model":"Lenovo A858"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A680",
                "labelname":"A680",
                "Model":"Lenovo A680_ROW"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A380e",
                "labelname":"A380e",
                "Model":"LNV-Lenovo A380e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A3300",
                "labelname":"A3300-GV",
                "Model":"LenovoA3300-GV"
            },
            {
                "brandname":"Lenovo",
                "marketname":"LIFETAB E7310",
                "labelname":"LIFETAB_E7310",
                "Model":"LIFETAB_E7310"
            },
            {
                "brandname":"Lenovo",
                "marketname":"IdeaTab S6000",
                "labelname":"S6000",
                "Model":"IdeaTab S6000-H"
            },
            {
                "brandname":"Lenovo",
                "marketname":"IdeaTV",
                "labelname":"msm8660_surf",
                "Model":"ideatv K91"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A850",
                "labelname":"A850_ROW",
                "Model":"Lenovo A850"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A720e",
                "labelname":"andorrap",
                "Model":"Lenovo A720e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A516",
                "labelname":"A516",
                "Model":"Lenovo A516"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A369",
                "labelname":"A369",
                "Model":"Lenovo A369"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A218t",
                "labelname":"A218t",
                "Model":"Lenovo A218t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"IdeaTab S6000",
                "labelname":"S6000",
                "Model":"Vodafone Smart Tab III 10"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A208t",
                "labelname":"A208t",
                "Model":"Lenovo A208t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A308t",
                "labelname":"A308t",
                "Model":"Lenovo A308t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A390t",
                "labelname":"A390t",
                "Model":"Lenovo A390t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A706",
                "labelname":"armani",
                "Model":"Lenovo A706"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A830",
                "labelname":"A830",
                "Model":"Lenovo A830"
            },
            {
                "brandname":"Lenovo",
                "marketname":"E4002",
                "labelname":"E4002",
                "Model":"MEDION E4002"
            },
            {
                "brandname":"Lenovo",
                "marketname":"IdeaTab A5000",
                "labelname":"A5000E",
                "Model":"IdeaTabA5000-E"
            },
            {
                "brandname":"Lenovo",
                "marketname":"K900",
                "labelname":"K900_ROW",
                "Model":"Lenovo K900_ROW"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A2105",
                "labelname":"Lenovo_A2105",
                "Model":"Lenovo_A2105"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A3500",
                "labelname":"A3500HV",
                "Model":"Lenovo A3500-HV"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A560",
                "labelname":"A560_msm8610",
                "Model":"LNV-Lenovo A560"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A780e",
                "labelname":"A780e",
                "Model":"LNV-Lenovo A780e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo P70",
                "labelname":"P70-A",
                "Model":"Lenovo P70-A"
            },
            {
                "brandname":"Lenovo",
                "marketname":"LIFETAB E7310",
                "labelname":"LIFETAB_E7310",
                "Model":"LIFETAB_E7312"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A516",
                "labelname":"A516_ROW",
                "Model":"Lenovo A516"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A370e",
                "labelname":"A370e",
                "Model":"LNV-Lenovo A370e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A630",
                "labelname":"A630e",
                "Model":"LNV-Lenovo A630e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A760",
                "labelname":"audi",
                "Model":"Lenovo A760"
            },
            {
                "brandname":"Lenovo",
                "marketname":"B6000-F",
                "labelname":"B6000",
                "Model":"Lenovo B6000-F"
            },
            {
                "brandname":"Lenovo",
                "marketname":"IdeaTab A1010",
                "labelname":"A1010T",
                "Model":"IdeaTabA1010-T"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Indigo",
                "labelname":"Indigo",
                "Model":"ThinkPad Tablet"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo",
                "labelname":"A708t",
                "Model":"Lenovo A708t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A3300",
                "labelname":"A3300-HV",
                "Model":"LenovoA3300-HV"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A395e",
                "labelname":"A395e",
                "Model":"LNV-Lenovo A395e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A7-30GC",
                "labelname":"A7-30GC",
                "Model":"Lenovo TAB 2 A7-30GC"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo K50",
                "labelname":"aio_otfp",
                "Model":"Lenovo K50-T5"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo S650_ROW",
                "labelname":"S650_ROW",
                "Model":"Lenovo S650"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo TAB 2 A7-30TC",
                "labelname":"A7-30TC",
                "Model":"Lenovo 2 A7-30TC"
            },
            {
                "brandname":"Lenovo",
                "marketname":"P780",
                "labelname":"P780",
                "Model":"Lenovo P780"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S680",
                "labelname":"seoul",
                "Model":"Lenovo S680"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S868",
                "labelname":"S868t",
                "Model":"Lenovo S868t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A3300",
                "labelname":"A3300-H",
                "Model":"LenovoA3300-H"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo TAB 2 A10",
                "labelname":"A10-70L",
                "Model":"Lenovo TAB 2 A10-70L"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo TAB S8-50LC",
                "labelname":"S8-50LC",
                "Model":"Lenovo S8-50LC"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S5000",
                "labelname":"S5000",
                "Model":"Lenovo S5000-F"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S820",
                "labelname":"S820_ROW",
                "Model":"Lenovo S820"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S920",
                "labelname":"S920",
                "Model":"Lenovo S920"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A385e",
                "labelname":"A385e",
                "Model":"LNV-Lenovo A385e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S960",
                "labelname":"S960",
                "Model":"Lenovo S960"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S820",
                "labelname":"S820_ROW",
                "Model":"Lenovo S820_ROW"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S5000",
                "labelname":"S5000",
                "Model":"Lenovo S5000-H"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo X2",
                "labelname":"X2-EU",
                "Model":"Lenovo X2-EU"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo TAB 2 A10",
                "labelname":"A10-70LC",
                "Model":"Lenovo TAB 2 A10-70LC"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo P70",
                "labelname":"P70-t",
                "Model":"Lenovo P70-t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A785e",
                "labelname":"A785e",
                "Model":"LNV-Lenovo A785e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A588t",
                "labelname":"LenovoA588t",
                "Model":"LenovoA588t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A3500-F",
                "labelname":"A3500F",
                "Model":"EveryPad2"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A2800",
                "labelname":"A2800-d",
                "Model":"Lenovo A2800-d"
            },
            {
                "brandname":"Lenovo",
                "marketname":"LIFETAB E10310",
                "labelname":"LIFETAB_E10310",
                "Model":"LIFETAB_E10310"
            },
            {
                "brandname":"Lenovo",
                "marketname":"IdeaTab S6000",
                "labelname":"S6000",
                "Model":"IdeaTab S6000-F"
            },
            {
                "brandname":"Lenovo",
                "marketname":"IdeaTab A3000",
                "labelname":"A3000",
                "Model":"IdeaTab A3000-H"
            },
            {
                "brandname":"Lenovo",
                "marketname":"B6000-HV",
                "labelname":"B6000",
                "Model":"Lenovo B6000-HV"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A770e",
                "labelname":"athenaep",
                "Model":"Lenovo A770e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A658T",
                "labelname":"A658t",
                "Model":"Lenovo A658t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A376",
                "labelname":"A376",
                "Model":"Lenovo A376"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A3000",
                "labelname":"A3000",
                "Model":"Lenovo A3000-H"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A10",
                "labelname":"A10",
                "Model":"IdeaPadA10"
            },
            {
                "brandname":"Lenovo",
                "marketname":"EveryPad",
                "labelname":"A3000",
                "Model":"IdeaTab A3000-F"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A850",
                "labelname":"A850",
                "Model":"Lenovo A850"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A706_ROW",
                "labelname":"armani_row",
                "Model":"Lenovo A706_ROW"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A398t",
                "labelname":"A398t",
                "Model":"Lenovo A398t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S90-L",
                "labelname":"sisleyr_amx",
                "Model":"Lenovo S90-L"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S820",
                "labelname":"S820",
                "Model":"Lenovo S820"
            },
            {
                "brandname":"Lenovo",
                "marketname":"P780",
                "labelname":"P780_ROW",
                "Model":"Lenovo P780_ROW"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo TAB A10-80HC",
                "labelname":"A10_80HC",
                "Model":"TAB A10-80HC"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo TAB 2 A10",
                "labelname":"A10-70F",
                "Model":"Lenovo TAB 2 A10-70F"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo K910e",
                "labelname":"kitone",
                "Model":"LNV-Lenovo K910e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A7000",
                "labelname":"A7000-a",
                "Model":"Lenovo A7000-a"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A505e",
                "labelname":"A505e",
                "Model":"LNV-Lenovo A505e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A3300-GV",
                "labelname":"A3300-GV",
                "Model":"LenovoA3300-GV"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo  X2",
                "labelname":"X2-AP",
                "Model":"Lenovo X2-AP"
            },
            {
                "brandname":"Lenovo",
                "marketname":"K900",
                "labelname":"K900",
                "Model":"Lenovo K900"
            },
            {
                "brandname":"Lenovo",
                "marketname":"IdeaTab A3000",
                "labelname":"A3000",
                "Model":"Vodafone Smart Tab III 7"
            },
            {
                "brandname":"Lenovo",
                "marketname":"B8000-H",
                "labelname":"B8000",
                "Model":"Lenovo B8000-H"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A820e",
                "labelname":"andorra",
                "Model":"Lenovo A820e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A678t",
                "labelname":"A678t",
                "Model":"Lenovo A678t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A390",
                "labelname":"A390",
                "Model":"Lenovo A390_ROW"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A305E",
                "labelname":"A305e",
                "Model":"Lenovo A305e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A1000L",
                "labelname":"A1000LF",
                "Model":"IdeaTabA1000L-F"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A318t",
                "labelname":"A318t",
                "Model":"Lenovo A318t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A2107A",
                "labelname":"A2107A-H",
                "Model":"A2107A-H"
            },
            {
                "brandname":"Lenovo",
                "marketname":"Lenovo A690e",
                "labelname":"A690e",
                "Model":"LNV-Lenovo A690e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S898t",
                "labelname":"S898t",
                "Model":"Lenovo S898t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"S750",
                "labelname":"S750",
                "Model":"Lenovo S750"
            },
            {
                "brandname":"Lenovo",
                "marketname":"B8000-F",
                "labelname":"B8000",
                "Model":"Lenovo B8000-F"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A820",
                "labelname":"A820",
                "Model":"Lenovo A820"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A670t",
                "labelname":"A670t",
                "Model":"Lenovo A670t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A378t",
                "labelname":"A378t",
                "Model":"Lenovo A378t"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A305E",
                "labelname":"A305e",
                "Model":"LNV-Lenovo A305e"
            },
            {
                "brandname":"Lenovo",
                "marketname":"A269i",
                "labelname":"A269i",
                "Model":"Lenovo A269i"
            },
            {
                "brandname":"LGE",
                "marketname":"L Fino",
                "labelname":"l70pn",
                "Model":"LG-D290"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 2X",
                "labelname":"p990_CIS-xxx",
                "Model":"LG-P990"
            },
            {
                "brandname":"LGE",
                "marketname":"Nexus 4",
                "labelname":"mako",
                "Model":"Nexus 4"
            },
            {
                "brandname":"LGE",
                "marketname":"LG optimus LTE2",
                "labelname":"d1lu",
                "Model":"LG-F160LV"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Spirit LTE",
                "labelname":"c70",
                "Model":"LG-H440AR"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus Zone 2",
                "labelname":"w3c",
                "Model":"VS415PP"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus One",
                "labelname":"thunderg",
                "Model":"LG-P504"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus LTE Tag",
                "labelname":"cayman",
                "Model":"LG-F120L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L9",
                "labelname":"u2",
                "Model":"LG-P765"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7 II",
                "labelname":"vee7e",
                "Model":"LG-P713GO"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7",
                "labelname":"u0",
                "Model":"LG-P705"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 II",
                "labelname":"vee5ss",
                "Model":"LG-E450"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L4 II Tri",
                "labelname":"vee4ts",
                "Model":"LG-E470f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3 II",
                "labelname":"vee3e",
                "Model":"LG-E431g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3 II",
                "labelname":"vee3ds",
                "Model":"LG-E435g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3",
                "labelname":"e0",
                "Model":"LG-E400f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L1II",
                "labelname":"v1",
                "Model":"LG-E411g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus HUB",
                "labelname":"univa_open-eu",
                "Model":"LG-E510"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G Pro",
                "labelname":"geefhd",
                "Model":"LG-F240K"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geehrc",
                "Model":"LG-F180S"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geehdc",
                "Model":"L-01E"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus 3D",
                "labelname":"cosmopolitan",
                "Model":"LG-SU760"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Lucid",
                "labelname":"cayman",
                "Model":"VS840 4G"
            },
            {
                "brandname":"LGE",
                "marketname":"LG L39C",
                "labelname":"l4ii_cdma",
                "Model":"LGL39C"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-F400S"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-AS990"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G2",
                "labelname":"g2",
                "Model":"LG-D801"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex2",
                "labelname":"z2",
                "Model":"LG-H955"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex",
                "labelname":"zee",
                "Model":"LG-D958"
            },
            {
                "brandname":"LGE",
                "marketname":"LG F70",
                "labelname":"f70",
                "Model":"LGL31L"
            },
            {
                "brandname":"LGE",
                "marketname":"L90 Dual",
                "labelname":"w7dsn",
                "Model":"LG-D410"
            },
            {
                "brandname":"LGE",
                "marketname":"L70",
                "labelname":"w5",
                "Model":"LG-D320AR"
            },
            {
                "brandname":"LGE",
                "marketname":"L60",
                "labelname":"lo_1",
                "Model":"LG-X135"
            },
            {
                "brandname":"LGE",
                "marketname":"L30 Sporty",
                "labelname":"luv30ds",
                "Model":"LG-D125"
            },
            {
                "brandname":"LGE",
                "marketname":"L Bello",
                "labelname":"luv80ds",
                "Model":"LG-D335"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Stylus",
                "labelname":"b2lss",
                "Model":"LG-D693TR"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Beat",
                "labelname":"jagnm",
                "Model":"LG-D722J"
            },
            {
                "brandname":"LGE",
                "marketname":"G2 MINI",
                "labelname":"g2mss",
                "Model":"LG-D610"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pro2",
                "labelname":"b1",
                "Model":"LG-F350K"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pad 7.0 LTE",
                "labelname":"e7lte",
                "Model":"LGUK410"
            },
            {
                "brandname":"LGE",
                "marketname":"F60",
                "labelname":"e2nac",
                "Model":"LG-D393"
            },
            {
                "brandname":"LGE",
                "marketname":"Escape",
                "labelname":"l1a",
                "Model":"LG-P870"
            },
            {
                "brandname":"LGE",
                "marketname":"AKA",
                "labelname":"aka",
                "Model":"LG-F520L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Thrill 4G",
                "labelname":"cosmopolitan",
                "Model":"LG-P925"
            },
            {
                "brandname":"LGE",
                "marketname":"LG optimus it L-05D",
                "labelname":"l_dcm",
                "Model":"L-05D"
            },
            {
                "brandname":"LGE",
                "marketname":"Nexus 5",
                "labelname":"hammerhead",
                "Model":"Nexus 5"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 2X",
                "labelname":"p990_EUR-xx",
                "Model":"LG-P990"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 3D",
                "labelname":"cosmo_MEA-XXX",
                "Model":"LG-P920"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 4X HD",
                "labelname":"x3",
                "Model":"LG-P880"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"bproj_262-XXX",
                "Model":"LG-P970"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"lgp970",
                "Model":"LG-P970"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F3",
                "labelname":"fx3",
                "Model":"LG-LS720"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Spirit",
                "labelname":"gelato_eur-xx",
                "Model":"LG-P690"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F5",
                "labelname":"l1v",
                "Model":"AS870 4G"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_214-04",
                "Model":"LG-E510"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_open-br",
                "Model":"LG-E510f"
            },
            {
                "brandname":"LGE",
                "marketname":"Android TV",
                "labelname":"eden",
                "Model":"LG Google TV G3 KR"
            },
            {
                "brandname":"LGE",
                "marketname":"Eve",
                "labelname":"EVE",
                "Model":"LG-KH5200"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pad 7.0",
                "labelname":"e7wifi",
                "Model":"LG-V400"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pro Lite",
                "labelname":"luv90ss",
                "Model":"LG-D682"
            },
            {
                "brandname":"LGE",
                "marketname":"G pad 8.0 LTE",
                "labelname":"e8lte",
                "Model":"LG-V490"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Beat",
                "labelname":"jagn",
                "Model":"LG-F470K"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Stylus",
                "labelname":"b2ldsn",
                "Model":"LG-D690n"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L40",
                "labelname":"w3",
                "Model":"LG-D160"
            },
            {
                "brandname":"LGE",
                "marketname":"070 touch",
                "labelname":"w3voip",
                "Model":"LG-FL40L"
            },
            {
                "brandname":"LGE",
                "marketname":"Enact",
                "labelname":"fx3q",
                "Model":"VS890 4G"
            },
            {
                "brandname":"LGE",
                "marketname":"F60",
                "labelname":"e2n",
                "Model":"LG-D390n"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pad 7.0 LTE",
                "labelname":"e7lte",
                "Model":"LG-V410"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pro Lite",
                "labelname":"luv90ss",
                "Model":"LG-D682TR"
            },
            {
                "brandname":"LGE",
                "marketname":"G2 MINI",
                "labelname":"g2mds",
                "Model":"LG-D618"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Beat",
                "labelname":"jagn",
                "Model":"LG-F470S"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Stylus",
                "labelname":"b2lss",
                "Model":"LG-D693AR"
            },
            {
                "brandname":"LGE",
                "marketname":"Intuition",
                "labelname":"batman_vzw",
                "Model":"VS950 4G"
            },
            {
                "brandname":"LGE",
                "marketname":"L20",
                "labelname":"luv20ts",
                "Model":"LG-D107"
            },
            {
                "brandname":"LGE",
                "marketname":"L50 Sporty",
                "labelname":"luv50ssn",
                "Model":"LG-D213"
            },
            {
                "brandname":"LGE",
                "marketname":"L70",
                "labelname":"w5",
                "Model":"LG-D320"
            },
            {
                "brandname":"LGE",
                "marketname":"L90",
                "labelname":"w7n",
                "Model":"LG-D405"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Esteem",
                "labelname":"MS910",
                "Model":"LG-MS910"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex",
                "labelname":"zee",
                "Model":"LG-D956"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L5",
                "labelname":"m4",
                "Model":"LG-E612g"
            },
            {
                "brandname":"LGE",
                "marketname":"Ice cream Smart",
                "labelname":"vfpv",
                "Model":"LG-F440L"
            },
            {
                "brandname":"LGE",
                "marketname":"L20",
                "labelname":"luv20ss",
                "Model":"LG-D100"
            },
            {
                "brandname":"LGE",
                "marketname":"L50 Sporty",
                "labelname":"luv50ss",
                "Model":"LG-D213AR"
            },
            {
                "brandname":"LGE",
                "marketname":"L7 II",
                "labelname":"vee7e",
                "Model":"LG-P712"
            },
            {
                "brandname":"LGE",
                "marketname":"L90",
                "labelname":"w7",
                "Model":"LG-D400"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Escape2",
                "labelname":"c70n",
                "Model":"LG-H443"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus LTE",
                "labelname":"lgp935",
                "Model":"LG-P935"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Net Dual",
                "labelname":"gelatods_cis-xxx",
                "Model":"LG-P698"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"thunder_kor-05",
                "Model":"LG-SU370"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"thunderc",
                "Model":"VM670"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Pad",
                "labelname":"v901tr",
                "Model":"LG-V901"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Q2",
                "labelname":"bssq",
                "Model":"LG-LU6500"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu",
                "labelname":"batman",
                "Model":"LG-F100S"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu2",
                "labelname":"vu2u",
                "Model":"LG-F200L"
            },
            {
                "brandname":"LGE",
                "marketname":"PRADA 3.0",
                "labelname":"p2",
                "Model":"LG-P940h"
            },
            {
                "brandname":"LGE",
                "marketname":"Swift",
                "labelname":"swift",
                "Model":"GT540"
            },
            {
                "brandname":"LGE",
                "marketname":"Wine Smart",
                "labelname":"vfp",
                "Model":"LG-F480L"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu",
                "labelname":"vu10",
                "Model":"LG-P895qb"
            },
            {
                "brandname":"LGE",
                "marketname":"PRADA 3.0",
                "labelname":"p2",
                "Model":"L-02D"
            },
            {
                "brandname":"LGE",
                "marketname":"Spectrum 2",
                "labelname":"d1lv",
                "Model":"VS930 4G"
            },
            {
                "brandname":"LGE",
                "marketname":"Thrill 4G",
                "labelname":"p925",
                "Model":"LG-P925"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Pro",
                "labelname":"muscat",
                "Model":"LG-C660R"
            },
            {
                "brandname":"LGE",
                "marketname":"AKA",
                "labelname":"aka",
                "Model":"LG-F520S"
            },
            {
                "brandname":"LGE",
                "marketname":"Eve",
                "labelname":"EVE",
                "Model":"GW620"
            },
            {
                "brandname":"LGE",
                "marketname":"F60",
                "labelname":"e2nam",
                "Model":"LGMS395"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pad 8.0",
                "labelname":"e8wifi",
                "Model":"LG-V480"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pro2",
                "labelname":"b1",
                "Model":"LG-F350L"
            },
            {
                "brandname":"LGE",
                "marketname":"G2 MINI",
                "labelname":"g2mss",
                "Model":"LG-D610AR"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Beat",
                "labelname":"jagnm",
                "Model":"LG-D727"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Stylus",
                "labelname":"b2lssn",
                "Model":"LG-D693n"
            },
            {
                "brandname":"LGE",
                "marketname":"L Bello",
                "labelname":"luv80ds",
                "Model":"LG-D335E"
            },
            {
                "brandname":"LGE",
                "marketname":"L30 Sporty",
                "labelname":"luv30ss",
                "Model":"LG-D120"
            },
            {
                "brandname":"LGE",
                "marketname":"L60",
                "labelname":"lo_1",
                "Model":"LG-X137"
            },
            {
                "brandname":"LGE",
                "marketname":"Wine Smart",
                "labelname":"vfp",
                "Model":"LG-F480K"
            },
            {
                "brandname":"LGE",
                "marketname":"Spray",
                "labelname":"e2jps",
                "Model":"402LG"
            },
            {
                "brandname":"LGE",
                "marketname":"PRADA 3.0",
                "labelname":"p2",
                "Model":"LG-P940"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu2",
                "labelname":"vu2sk",
                "Model":"LG-F200S"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu",
                "labelname":"batman",
                "Model":"LG-F100L"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Q",
                "labelname":"lgl55c",
                "Model":"LGL55C"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Pad",
                "labelname":"v901kr",
                "Model":"LG-V901"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"thunderc",
                "Model":"LS670"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"su370",
                "Model":"LG-SU370"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Net Dual",
                "labelname":"gelatods_are-xxx",
                "Model":"LG-P698"
            },
            {
                "brandname":"LGE",
                "marketname":"Ally",
                "labelname":"aloha",
                "Model":"AS740"
            },
            {
                "brandname":"LGE",
                "marketname":"Eve",
                "labelname":"EVE",
                "Model":"LG GW620F"
            },
            {
                "brandname":"LGE",
                "marketname":"F60",
                "labelname":"e2nav",
                "Model":"VS810PP"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pro Lite",
                "labelname":"luv90ds",
                "Model":"LG-D686"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pro2",
                "labelname":"b1w",
                "Model":"LG-D838"
            },
            {
                "brandname":"LGE",
                "marketname":"G2 MINI",
                "labelname":"g2mv",
                "Model":"LG-D625"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 S",
                "labelname":"jag3gss",
                "Model":"LG-D723"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Vigor",
                "labelname":"jagnm",
                "Model":"LG-D725"
            },
            {
                "brandname":"LGE",
                "marketname":"L Fino",
                "labelname":"l70p",
                "Model":"LG-D290"
            },
            {
                "brandname":"LGE",
                "marketname":"L45",
                "labelname":"lo_2",
                "Model":"LG-X130g"
            },
            {
                "brandname":"LGE",
                "marketname":"L60",
                "labelname":"lo_1",
                "Model":"LG-X145"
            },
            {
                "brandname":"LGE",
                "marketname":"L70",
                "labelname":"w5ds",
                "Model":"LG-D325"
            },
            {
                "brandname":"LGE",
                "marketname":"LG AKA",
                "labelname":"aka",
                "Model":"LG-H788"
            },
            {
                "brandname":"LGE",
                "marketname":"LG F70",
                "labelname":"f70n",
                "Model":"LG-F370K"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex",
                "labelname":"zee",
                "Model":"LG-F340L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex2",
                "labelname":"z2",
                "Model":"LGUS995"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G2",
                "labelname":"g2",
                "Model":"LG-D802TR"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-D852"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LGUS990"
            },
            {
                "brandname":"LGE",
                "marketname":"LG L80 Single",
                "labelname":"w6",
                "Model":"LG-D370"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Lucid 3",
                "labelname":"x5",
                "Model":"VS876"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus F7",
                "labelname":"fx1",
                "Model":"LG-AS780"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geehrc",
                "Model":"LG-E975K"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G Pro",
                "labelname":"geefhd",
                "Model":"LG-E980"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus HUB",
                "labelname":"univa_222-01",
                "Model":"LG-E510"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L1II",
                "labelname":"v1",
                "Model":"LG-E410B"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L1II",
                "labelname":"v1ds",
                "Model":"LG-E420"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3",
                "labelname":"e0",
                "Model":"LGL35G"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3 II",
                "labelname":"vee3e",
                "Model":"LG-E425c"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L4 II",
                "labelname":"vee4ss",
                "Model":"LG-E440g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 II",
                "labelname":"vee5ds",
                "Model":"LG-E455"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 II",
                "labelname":"vee5ss",
                "Model":"LG-E450g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7",
                "labelname":"u0",
                "Model":"LG-P708g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L70",
                "labelname":"w5",
                "Model":"LG-D321"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L9",
                "labelname":"u2",
                "Model":"LG-P778"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus LTE Tag",
                "labelname":"lge_120_skt",
                "Model":"LG-F120S"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus One",
                "labelname":"thunderg",
                "Model":"LG-P505R"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Pecan",
                "labelname":"pecan",
                "Model":"LG-P350g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Viper 4G LTE",
                "labelname":"cayman",
                "Model":"LG-LS840"
            },
            {
                "brandname":"LGE",
                "marketname":"LG-AS876",
                "labelname":"x5",
                "Model":"AS876"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus  EX",
                "labelname":"x2",
                "Model":"LG-SU880"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 2X",
                "labelname":"p999",
                "Model":"LG-P999"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 3D",
                "labelname":"p920",
                "Model":"LG-P920h"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Big",
                "labelname":"justin",
                "Model":"LG-LU6800"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"bproj_334-020",
                "Model":"LG-P970h"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"lgp970",
                "Model":"LG-P970h"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F3",
                "labelname":"fx3",
                "Model":"LG-P655K"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F6",
                "labelname":"f6",
                "Model":"LG-D505"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_730-01",
                "Model":"LG-E510g"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_ssv-xxx",
                "Model":"LG-E510g"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L40",
                "labelname":"w3",
                "Model":"LG-D165AR"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L5",
                "labelname":"m4",
                "Model":"LG-L40G"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Mach",
                "labelname":"hub",
                "Model":"LG-LU3000"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Net Dual",
                "labelname":"gelatods_open-br",
                "Model":"LG-P698f"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"thunder_kor-08",
                "Model":"LG-LU3700"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"thunderc",
                "Model":"thunderc"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Pad",
                "labelname":"v909",
                "Model":"LG-V909"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Slider",
                "labelname":"VM701",
                "Model":"LG-VM701"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu",
                "labelname":"batman_lgu",
                "Model":"LG-F100L"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu:",
                "labelname":"batman_dcm",
                "Model":"L-06D"
            },
            {
                "brandname":"LGE",
                "marketname":"PecanV",
                "labelname":"pecanV",
                "Model":"LG-P355"
            },
            {
                "brandname":"LGE",
                "marketname":"Swift",
                "labelname":"swift",
                "Model":"GT540R"
            },
            {
                "brandname":"LGE",
                "marketname":"Y25",
                "labelname":"y25",
                "Model":"LGL15G"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus LTE",
                "labelname":"lgp930",
                "Model":"LG-P930"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L5",
                "labelname":"m4",
                "Model":"LG-E612f"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_viv-br",
                "Model":"LG-E510f"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_ent-cl",
                "Model":"LG-E510g"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"lgc800g",
                "Model":"LG-C800G"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F5",
                "labelname":"l1e",
                "Model":"LG-P875h"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Exceed 2",
                "labelname":"w5c",
                "Model":"LG-VS450PP"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"ku5900",
                "Model":"LG-KU5900"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"bproj_214-03",
                "Model":"LG-P970"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 3D MAX",
                "labelname":"cx2",
                "Model":"LG-SU870"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 3D",
                "labelname":"cosmo_EUR-XXX",
                "Model":"LG-P920"
            },
            {
                "brandname":"LGE",
                "marketname":"L70",
                "labelname":"w5",
                "Model":"LGAS323"
            },
            {
                "brandname":"LGE",
                "marketname":"LBello",
                "labelname":"luv80ss",
                "Model":"LG-D331"
            },
            {
                "brandname":"LGE",
                "marketname":"LG F70",
                "labelname":"f70n",
                "Model":"LG-D315"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex",
                "labelname":"zee",
                "Model":"LG-D959"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex2",
                "labelname":"z2",
                "Model":"LG-H959"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G2",
                "labelname":"g2",
                "Model":"LG-D802"
            },
            {
                "brandname":"LGE",
                "marketname":"L50 Sporty",
                "labelname":"luv50ds",
                "Model":"LG-D227"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-D850"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LGL24"
            },
            {
                "brandname":"LGE",
                "marketname":"LG L80 Dual",
                "labelname":"w6ds",
                "Model":"LG-D380"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Lucid",
                "labelname":"cayman",
                "Model":"VS840PP"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus Elite",
                "labelname":"m3s",
                "Model":"LG-LS696"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geehdc",
                "Model":"LGL21"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geehrc4g",
                "Model":"LG-F180L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G Pro",
                "labelname":"geefhd",
                "Model":"LG-F240S"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus HUB",
                "labelname":"univa_tur-xx",
                "Model":"LG-E510"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L1II",
                "labelname":"v1ds",
                "Model":"LG-E415f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3",
                "labelname":"e0",
                "Model":"LG-E400g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3 II",
                "labelname":"vee3ds",
                "Model":"LG-E435k"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L4 II",
                "labelname":"vee4ss",
                "Model":"LG-E440"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 Dual",
                "labelname":"m4ds",
                "Model":"LG-E615"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 II",
                "labelname":"vee5ss",
                "Model":"LG-E450B"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7",
                "labelname":"u0",
                "Model":"LG-P705f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7 II",
                "labelname":"vee7e",
                "Model":"LG-P713TR"
            },
            {
                "brandname":"LGE",
                "marketname":"TBD",
                "labelname":"aka",
                "Model":"LG-F520K"
            },
            {
                "brandname":"LGE",
                "marketname":"Smart Dios V8700",
                "labelname":"SE_TF",
                "Model":"ref_SCTF"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Zone",
                "labelname":"e0v",
                "Model":"LG-VS410PP"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu",
                "labelname":"lge_325_skt",
                "Model":"LG-F100S"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Sol",
                "labelname":"victor",
                "Model":"LG-E730f"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Plus",
                "labelname":"m3_acg_us",
                "Model":"LG-AS695"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Pad",
                "labelname":"l06c",
                "Model":"L-06C"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"thunderc",
                "Model":"LG-LW690"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"ku3700",
                "Model":"LG-KU3700"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Net",
                "labelname":"gelato_302-610",
                "Model":"LG-P690b"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus LIFE",
                "labelname":"l1_dcm",
                "Model":"L-02E"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L40",
                "labelname":"w3ds",
                "Model":"LG-D175f"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_tlf-es",
                "Model":"LG-E510"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_740-01",
                "Model":"LG-E510g"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Fuel",
                "labelname":"w3c",
                "Model":"LGL34C"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F3",
                "labelname":"fx3",
                "Model":"LG-P659H"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Chat",
                "labelname":"hazel",
                "Model":"LG-C555"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"bproj_ARE-XXX",
                "Model":"LG-P970"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"LGL85C",
                "Model":"LGL85C"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 3D Cube",
                "labelname":"cx2",
                "Model":"LG-SU870"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 2X",
                "labelname":"star",
                "Model":"LG-SU660"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 2",
                "labelname":"as680",
                "Model":"LG-AS680"
            },
            {
                "brandname":"LGE",
                "marketname":"Marquee",
                "labelname":"L-07C",
                "Model":"L-07C"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Volt",
                "labelname":"x5",
                "Model":"LGLS740"
            },
            {
                "brandname":"LGE",
                "marketname":"LG SUNSET",
                "labelname":"c50",
                "Model":"LGL33L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus One",
                "labelname":"thunderg",
                "Model":"LG-P509"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus One",
                "labelname":"thunderg",
                "Model":"LG-P500"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L9 (NFC)",
                "labelname":"u2",
                "Model":"LG-P760"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7II",
                "labelname":"vee7ds",
                "Model":"LG-P715"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7",
                "labelname":"u0",
                "Model":"LGL96G"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 II",
                "labelname":"vee5ss",
                "Model":"LG-E451g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 II",
                "labelname":"vee5ds",
                "Model":"LG-E455g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L9",
                "labelname":"u2",
                "Model":"LG-P768"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus LTE Tag",
                "labelname":"cayman",
                "Model":"LG-F120S"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus One",
                "labelname":"thunderg",
                "Model":"LG-P505"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Pecan",
                "labelname":"pecan",
                "Model":"LG-P350"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex",
                "labelname":"zee",
                "Model":"LG-D951"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex2",
                "labelname":"z2",
                "Model":"LG-F510L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Pad F7.0",
                "labelname":"e7iilte",
                "Model":"LGLK430"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G2",
                "labelname":"g2",
                "Model":"LG-F320L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-D858"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3 Cat.6",
                "labelname":"tiger6",
                "Model":"LG-F460L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Leon",
                "labelname":"my50ds",
                "Model":"LG-H324"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus 3D",
                "labelname":"cosmopolitan",
                "Model":"LG-P920"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7 II",
                "labelname":"vee7e",
                "Model":"LG-P712"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Spirit 4G LTE",
                "labelname":"c70n",
                "Model":"LG-H440n"
            },
            {
                "brandname":"LGE",
                "marketname":"Marquee",
                "labelname":"bproj_CIS-xxx",
                "Model":"LG-P970"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 2X",
                "labelname":"p990",
                "Model":"LG-P990h"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F5",
                "labelname":"l1e",
                "Model":"LG-P870h"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus GK",
                "labelname":"gvfhd",
                "Model":"LG-F220K"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L5",
                "labelname":"m4",
                "Model":"LG-E610v"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus LTE",
                "labelname":"i_u",
                "Model":"LG-LU6200"
            },
            {
                "brandname":"LGE",
                "marketname":"PRADA 3.0",
                "labelname":"p2",
                "Model":"LG-KU5400"
            },
            {
                "brandname":"LGE",
                "marketname":"Spirit 4G",
                "labelname":"l1m",
                "Model":"LG-MS870"
            },
            {
                "brandname":"LGE",
                "marketname":"VU3",
                "labelname":"vu3",
                "Model":"LG-F300K"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Pad",
                "labelname":"v900asia",
                "Model":"LG-V900"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L4 II",
                "labelname":"vee4ss",
                "Model":"LG-E465g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3 II",
                "labelname":"vee3e",
                "Model":"LG-E425g"
            },
            {
                "brandname":"LGE",
                "marketname":"Android TV G3",
                "labelname":"eden",
                "Model":"LG Google TV G3"
            },
            {
                "brandname":"LGE",
                "marketname":"F60",
                "labelname":"e2",
                "Model":"LG-D390"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pad 7.0",
                "labelname":"e7wifi",
                "Model":"LG-V400Y1"
            },
            {
                "brandname":"LGE",
                "marketname":"G2 MINI",
                "labelname":"g2m",
                "Model":"LG-D620"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Beat",
                "labelname":"jagn",
                "Model":"LG-F470L"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Stylus",
                "labelname":"b2lss",
                "Model":"LG-D693"
            },
            {
                "brandname":"LGE",
                "marketname":"L20",
                "labelname":"luv20ss",
                "Model":"LG-D100AR"
            },
            {
                "brandname":"LGE",
                "marketname":"L7 II",
                "labelname":"vee7e",
                "Model":"LG-P714"
            },
            {
                "brandname":"LGE",
                "marketname":"L90",
                "labelname":"w7",
                "Model":"LG-D405"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex",
                "labelname":"zee",
                "Model":"LG-D955"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex2",
                "labelname":"z2",
                "Model":"LG-F510S"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G2",
                "labelname":"g2",
                "Model":"LG-F320S"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-D858HK"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3 Cat.6",
                "labelname":"tiger6",
                "Model":"LG-F460S"
            },
            {
                "brandname":"LGE",
                "marketname":"VU3",
                "labelname":"vu3",
                "Model":"LG-F300L"
            },
            {
                "brandname":"LGE",
                "marketname":"F60",
                "labelname":"e2",
                "Model":"LG-D390AR"
            },
            {
                "brandname":"LGE",
                "marketname":"L7 II Dual",
                "labelname":"vee7ds",
                "Model":"LG-P716"
            },
            {
                "brandname":"LGE",
                "marketname":"L90",
                "labelname":"w7",
                "Model":"LG-D415"
            },
            {
                "brandname":"LGE",
                "marketname":"L90",
                "labelname":"w7n",
                "Model":"LG-D400"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G2",
                "labelname":"g2",
                "Model":"LG-LS980"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-D859"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Gx",
                "labelname":"omega",
                "Model":"LG-F310L"
            },
            {
                "brandname":"LGE",
                "marketname":"F60",
                "labelname":"e2ds",
                "Model":"LG-D392"
            },
            {
                "brandname":"LGE",
                "marketname":"L90",
                "labelname":"w7ds",
                "Model":"LG-D410"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G2",
                "labelname":"g2",
                "Model":"VS980 4G"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-F400K"
            },
            {
                "brandname":"LGE",
                "marketname":"VU3",
                "labelname":"vu3",
                "Model":"LG-F300S"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3 Dual",
                "labelname":"e1",
                "Model":"LG-E405"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L1II",
                "labelname":"v1ts",
                "Model":"LG-E475f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L1II",
                "labelname":"v1",
                "Model":"LG-E410f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus HUB",
                "labelname":"univa_cis-xxx",
                "Model":"LG-E510"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G Pro",
                "labelname":"geefhd",
                "Model":"LG-E981h"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geehrc",
                "Model":"LG-E976"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus F7",
                "labelname":"fx1",
                "Model":"LG-US780"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Motion 4G",
                "labelname":"l0",
                "Model":"LG-MS770"
            },
            {
                "brandname":"LGE",
                "marketname":"LG L80 Single",
                "labelname":"w6",
                "Model":"LG-D375"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"VS985 4G"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-D855"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G2",
                "labelname":"g2",
                "Model":"LG-D805"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Pad 8.3",
                "labelname":"awifi",
                "Model":"LG-V500"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex",
                "labelname":"zee",
                "Model":"LG-LS995"
            },
            {
                "brandname":"LGE",
                "marketname":"LG F70",
                "labelname":"f70n",
                "Model":"LG-F370S"
            },
            {
                "brandname":"LGE",
                "marketname":"LG DOUBLEPLAY",
                "labelname":"lgc729",
                "Model":"LG-C729"
            },
            {
                "brandname":"LGE",
                "marketname":"L70",
                "labelname":"w5n",
                "Model":"LG-D329"
            },
            {
                "brandname":"LGE",
                "marketname":"L65",
                "labelname":"w55",
                "Model":"LG-D280"
            },
            {
                "brandname":"LGE",
                "marketname":"L50 Sporty",
                "labelname":"luv50ds",
                "Model":"LG-D221"
            },
            {
                "brandname":"LGE",
                "marketname":"L Fino",
                "labelname":"l70pds",
                "Model":"LG-D295"
            },
            {
                "brandname":"LGE",
                "marketname":"GPAD 7.0 LTE",
                "labelname":"e7lte",
                "Model":"VK410"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Net",
                "labelname":"gelato_sea-xx",
                "Model":"LG-P690"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus LTE",
                "labelname":"i_skt",
                "Model":"LG-SU640"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L5",
                "labelname":"m4",
                "Model":"LG-E610"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus GJ",
                "labelname":"geehdc",
                "Model":"LG-E975w"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F3",
                "labelname":"fx3",
                "Model":"LGMS659"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus EX",
                "labelname":"x2",
                "Model":"IS11LG"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"blackg",
                "Model":"LG-P970"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 3D MAX",
                "labelname":"cx2",
                "Model":"LG-P720h"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 2X",
                "labelname":"su660",
                "Model":"LG-SU660"
            },
            {
                "brandname":"LGE",
                "marketname":"AKA",
                "labelname":"aka",
                "Model":"LG-H788"
            },
            {
                "brandname":"LGE",
                "marketname":"Eve",
                "labelname":"EVE",
                "Model":"LG GW620"
            },
            {
                "brandname":"LGE",
                "marketname":"F60",
                "labelname":"e2nas",
                "Model":"LGLS660"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pro Lite",
                "labelname":"luv90ds",
                "Model":"LG-D685"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pro2",
                "labelname":"b1",
                "Model":"LG-F350S"
            },
            {
                "brandname":"LGE",
                "marketname":"G2 MINI",
                "labelname":"g2mss",
                "Model":"LG-D610TR"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 S",
                "labelname":"jag3gds",
                "Model":"LG-D724"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Vigor",
                "labelname":"jagc",
                "Model":"LGLS885"
            },
            {
                "brandname":"LGE",
                "marketname":"L Bello",
                "labelname":"luv80ds",
                "Model":"LG-D337"
            },
            {
                "brandname":"LGE",
                "marketname":"L30 Sporty",
                "labelname":"luv30ss",
                "Model":"LG-D120AR"
            },
            {
                "brandname":"LGE",
                "marketname":"L60",
                "labelname":"lo_1",
                "Model":"LG-X140"
            },
            {
                "brandname":"LGE",
                "marketname":"L70",
                "labelname":"w5c",
                "Model":"LGLS620"
            },
            {
                "brandname":"LGE",
                "marketname":"LBello",
                "labelname":"luv80ss",
                "Model":"LG-D331AR"
            },
            {
                "brandname":"LGE",
                "marketname":"LG F70",
                "labelname":"f70n",
                "Model":"LG-D315l"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex",
                "labelname":"zee",
                "Model":"LG-F340K"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex2",
                "labelname":"z2",
                "Model":"LGLS996"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G2",
                "labelname":"g2",
                "Model":"LG-D802T"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-D851"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LGLS990"
            },
            {
                "brandname":"LGE",
                "marketname":"LG L80 Dual",
                "labelname":"w6ds",
                "Model":"LG-D385"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Lucid 2",
                "labelname":"l1v",
                "Model":"VS870 4G"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus F3Q",
                "labelname":"fx3q",
                "Model":"LG-D520"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geehrc",
                "Model":"LG-E975"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geehrc4g",
                "Model":"LG-LS970"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G Pro",
                "labelname":"geefhd4g",
                "Model":"LG-F240L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L1II",
                "labelname":"v1",
                "Model":"LG-E410"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L1II",
                "labelname":"v1ds",
                "Model":"LG-E415g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3",
                "labelname":"e0",
                "Model":"LG-L38C"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3 II",
                "labelname":"vee3e",
                "Model":"LG-E425"
            },
            {
                "brandname":"LGE",
                "marketname":"Ally",
                "labelname":"aloha",
                "Model":"Aloha"
            },
            {
                "brandname":"LGE",
                "marketname":"Eve",
                "labelname":"EVE",
                "Model":"LG GW620R"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pad 10.1",
                "labelname":"e9wifi",
                "Model":"LG-V700"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pro Lite",
                "labelname":"luv90nfc",
                "Model":"LG-D683"
            },
            {
                "brandname":"LGE",
                "marketname":"G Vista",
                "labelname":"b2l",
                "Model":"LG-D631"
            },
            {
                "brandname":"LGE",
                "marketname":"G2 mini 4G LTE",
                "labelname":"g2mv",
                "Model":"LG-D625"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 S",
                "labelname":"jagnm",
                "Model":"LG-D722"
            },
            {
                "brandname":"LGE",
                "marketname":"GA7800",
                "labelname":"eden",
                "Model":"LG Android TV V4"
            },
            {
                "brandname":"LGE",
                "marketname":"L Fino",
                "labelname":"l70p",
                "Model":"LG-D290AR"
            },
            {
                "brandname":"LGE",
                "marketname":"L45",
                "labelname":"lo_2_ds",
                "Model":"LG-X132"
            },
            {
                "brandname":"LGE",
                "marketname":"L60",
                "labelname":"lo_1",
                "Model":"LG-X147"
            },
            {
                "brandname":"LGE",
                "marketname":"L70",
                "labelname":"w5n",
                "Model":"LG-D320"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Connect 4G",
                "labelname":"cayman",
                "Model":"LG-MS840"
            },
            {
                "brandname":"LGE",
                "marketname":"LG F70",
                "labelname":"f70n",
                "Model":"LG-F370L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex",
                "labelname":"zee",
                "Model":"LG-F340S"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Pad 8.0 LTE",
                "labelname":"e8lte",
                "Model":"LG-P490L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G2",
                "labelname":"g2",
                "Model":"LG-D803"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-D852G"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LGV31"
            },
            {
                "brandname":"LGE",
                "marketname":"LG L80 Single",
                "labelname":"w6",
                "Model":"LG-D373"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Magna",
                "labelname":"my90ds",
                "Model":"LG-H502"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus F7",
                "labelname":"fx1",
                "Model":"LG-LG870"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geehrc",
                "Model":"LG-E975T"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G Pro",
                "labelname":"geefhd",
                "Model":"LG-E980h"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus HUB",
                "labelname":"univa_arb-xx",
                "Model":"LG-E510"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L1II",
                "labelname":"v1",
                "Model":"LG-E410c"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L1II",
                "labelname":"v1ds",
                "Model":"LG-E420f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3",
                "labelname":"e0_open_eur",
                "Model":"LG-E400"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3 II",
                "labelname":"vee3e",
                "Model":"LG-E425f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L4 II",
                "labelname":"vee4ss",
                "Model":"LG-E465f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 II",
                "labelname":"vee5ds",
                "Model":"LG-E455f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 II",
                "labelname":"vee5ss",
                "Model":"LG-E450j"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7",
                "labelname":"u0",
                "Model":"LG-T280"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L70",
                "labelname":"w5",
                "Model":"LGMS323"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L9",
                "labelname":"u2",
                "Model":"LGMS769"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus LTE3",
                "labelname":"fx1sk",
                "Model":"LG-F260S"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus One",
                "labelname":"thunderg",
                "Model":"LG-P506"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Revolution",
                "labelname":"bryce",
                "Model":"VS910 4G"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Volt",
                "labelname":"my70ds",
                "Model":"LG-H422"
            },
            {
                "brandname":"LGE",
                "marketname":"LG-E985T",
                "labelname":"gvarfhd",
                "Model":"LG-E985"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus  LTE",
                "labelname":"l1a",
                "Model":"LG-P870"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 2X",
                "labelname":"star",
                "Model":"LG-P990"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 3D",
                "labelname":"su760",
                "Model":"LG-SU760"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Big",
                "labelname":"lu6800",
                "Model":"LG-LU6800"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"bproj_724-xxx",
                "Model":"LG-P970h"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Chat",
                "labelname":"hazel",
                "Model":"LG-C550"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F3",
                "labelname":"fx3",
                "Model":"LG-P659"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F6",
                "labelname":"f6",
                "Model":"LGMS500"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_730-03",
                "Model":"LG-E510g"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_tcl-mx",
                "Model":"LG-E510f"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L40",
                "labelname":"w3ds",
                "Model":"LG-D170"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L7II",
                "labelname":"vee7ds",
                "Model":"LG-P716"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Mach",
                "labelname":"lu3000",
                "Model":"LG-LU3000"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Net Dual",
                "labelname":"gelatods_sea-xxx",
                "Model":"LG-P698"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"thunderc",
                "Model":"LG-CX670"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus PAD LTE",
                "labelname":"express",
                "Model":"LG-LU8300"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Pad",
                "labelname":"v909mkt",
                "Model":"LG-V909"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Sol",
                "labelname":"victor",
                "Model":"LG-E730"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu",
                "labelname":"batman_skt",
                "Model":"LG-F100S"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Z",
                "labelname":"su950",
                "Model":"SU950"
            },
            {
                "brandname":"LGE",
                "marketname":"Shine Plus with Google",
                "labelname":"alohag",
                "Model":"LG-C710h"
            },
            {
                "brandname":"LGE",
                "marketname":"Swift",
                "labelname":"swift",
                "Model":"GT540f"
            },
            {
                "brandname":"LGE",
                "marketname":"Y25",
                "labelname":"y25c",
                "Model":"LGL16C"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L4 II",
                "labelname":"vee4ss",
                "Model":"LG-E440f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 Dual",
                "labelname":"m4ds",
                "Model":"LG-E615f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 II",
                "labelname":"vee5ss",
                "Model":"LG-E450f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7",
                "labelname":"u0",
                "Model":"LG-P705g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7 II",
                "labelname":"vee7e",
                "Model":"LG-P714"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L9",
                "labelname":"u2",
                "Model":"LG-P769"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus LTE Tag",
                "labelname":"lge_120_kt",
                "Model":"LG-F120K"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus One",
                "labelname":"thunderg",
                "Model":"LG-P505CH"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Pecan",
                "labelname":"pecan",
                "Model":"LG-P350f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Venice",
                "labelname":"u0_cdma",
                "Model":"LG-LG730"
            },
            {
                "brandname":"LGE",
                "marketname":"LG optimus it L-05E",
                "labelname":"L05E",
                "Model":"L-05E"
            },
            {
                "brandname":"LGE",
                "marketname":"Optiimus Black",
                "labelname":"bproj_208-01",
                "Model":"LG-P970"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 2X",
                "labelname":"p990hN",
                "Model":"LG-P990hN"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 3D",
                "labelname":"p920",
                "Model":"LG-P920"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 4X HD",
                "labelname":"x3",
                "Model":"LG-P880g"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"bproj_302-220",
                "Model":"LG-P970g"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"lgp970",
                "Model":"LG-P970g"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 S",
                "labelname":"jagnm",
                "Model":"LG-D722AR"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Beat",
                "labelname":"jagdsnm",
                "Model":"LG-D726"
            },
            {
                "brandname":"LGE",
                "marketname":"G Vista",
                "labelname":"b2lds",
                "Model":"LG-D690"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pro Lite",
                "labelname":"luv90nfc",
                "Model":"LG-D684"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pad 10.1",
                "labelname":"e9wifin",
                "Model":"LG-V700n"
            },
            {
                "brandname":"LGE",
                "marketname":"Eve",
                "labelname":"EVE",
                "Model":"LG GW620g"
            },
            {
                "brandname":"LGE",
                "marketname":"Ally",
                "labelname":"aloha",
                "Model":"US740"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F3",
                "labelname":"fx3",
                "Model":"LG-P655H"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F6",
                "labelname":"f6",
                "Model":"LG-D500"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_724-05",
                "Model":"LG-E510f"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_open-de",
                "Model":"LG-E510"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L40",
                "labelname":"w3",
                "Model":"LG-D165"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L5",
                "labelname":"m4",
                "Model":"LG-E617G"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Mach",
                "labelname":"LU3000",
                "Model":"LG-LU3000"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Net Dual",
                "labelname":"gelatods_ind-xxx",
                "Model":"LG-P698"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex2",
                "labelname":"z2",
                "Model":"LG-H950"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"thunder_kor-08",
                "Model":"LG-KU3700"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"thunderc",
                "Model":"Vortex"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Pad",
                "labelname":"v905r",
                "Model":"LG-V905R"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Q2",
                "labelname":"bssq_450-06",
                "Model":"LG-LU6500"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu",
                "labelname":"batman_dcm",
                "Model":"L-06DJOJO"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu2",
                "labelname":"vu2u",
                "Model":"LG-F200LS"
            },
            {
                "brandname":"LGE",
                "marketname":"PRADA 3.0",
                "labelname":"p2",
                "Model":"LG-SU540"
            },
            {
                "brandname":"LGE",
                "marketname":"Swift",
                "labelname":"swift",
                "Model":"GT540GO"
            },
            {
                "brandname":"LGE",
                "marketname":"Wine Smart",
                "labelname":"vfp",
                "Model":"LG-F480S"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 2X",
                "labelname":"p990",
                "Model":"LG-P990H"
            },
            {
                "brandname":"LGE",
                "marketname":"Marquee",
                "labelname":"LS855",
                "Model":"LG-LS855"
            },
            {
                "brandname":"LGE",
                "marketname":"LG optimus LTE2",
                "labelname":"d1lsk",
                "Model":"LG-F160S"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Spirit",
                "labelname":"my70",
                "Model":"LG-H420"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus LTE Tag",
                "labelname":"cayman",
                "Model":"LG-AS840"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L9",
                "labelname":"u2",
                "Model":"LG-D700"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7 II",
                "labelname":"vee7e",
                "Model":"LG-P710"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3 II",
                "labelname":"vee3ds",
                "Model":"LG-E435"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3",
                "labelname":"e0",
                "Model":"LG-E400R"
            },
            {
                "brandname":"LGE",
                "marketname":"Thrill 4G",
                "labelname":"cosmo_310-410",
                "Model":"LG-P925"
            },
            {
                "brandname":"LGE",
                "marketname":"Spectrum",
                "labelname":"i_vzw",
                "Model":"VS920 4G"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus chat",
                "labelname":"elini",
                "Model":"L-04C"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu",
                "labelname":"vu10",
                "Model":"LG-P895"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Spirit",
                "labelname":"gelato_505-01",
                "Model":"LG-P690f"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Pro",
                "labelname":"muscat",
                "Model":"LG-C660"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Pad",
                "labelname":"v900",
                "Model":"LG-V900"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"thunderc",
                "Model":"LG-MS690"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Net",
                "labelname":"gelato_cis-xx",
                "Model":"LG-P690"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus LTE",
                "labelname":"i_dcm",
                "Model":"L-01D"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L40",
                "labelname":"w3ts",
                "Model":"LG-D180f"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_ufn-mx",
                "Model":"LG-E510g"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_clr-br",
                "Model":"LG-E510f"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus G Pro",
                "labelname":"geevl04e",
                "Model":"L-04E"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F3",
                "labelname":"fx3",
                "Model":"LGL25L"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Core",
                "labelname":"u0_cdma",
                "Model":"LGL86C"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"bproj_EUR-XXX",
                "Model":"LG-P970"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"black",
                "Model":"LG-KU5900"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 3D MAX",
                "labelname":"cx2",
                "Model":"LG-P720"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 2X",
                "labelname":"star_450-05",
                "Model":"LG-SU660"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 2X",
                "labelname":"p990",
                "Model":"LG-P990"
            },
            {
                "brandname":"LGE",
                "marketname":"Marquee",
                "labelname":"LG855",
                "Model":"LG-LG855"
            },
            {
                "brandname":"LGE",
                "marketname":"LG optimus LTE2",
                "labelname":"d1lkt",
                "Model":"LG-F160K"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Spectrum",
                "labelname":"VS920",
                "Model":"VS920 4G"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus Regard",
                "labelname":"l0",
                "Model":"LG-LW770"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus One",
                "labelname":"thunderg",
                "Model":"LG-P500h"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L9 II",
                "labelname":"l9ii",
                "Model":"LG-D605"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7II",
                "labelname":"vee7ds",
                "Model":"LG-P716"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7",
                "labelname":"vee7ds",
                "Model":"LG-P715"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 II",
                "labelname":"vee5ss",
                "Model":"LG-E460"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 II",
                "labelname":"vee5nfc",
                "Model":"LG-E460"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L4 II Dual",
                "labelname":"vee4ds",
                "Model":"LG-E445"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3 II",
                "labelname":"vee3e",
                "Model":"LG-E425j"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3 Dual",
                "labelname":"e1",
                "Model":"LG-E405f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3",
                "labelname":"e0",
                "Model":"LG-E400"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L1II",
                "labelname":"v1",
                "Model":"LG-E410g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus HUB",
                "labelname":"univa_esa-xx",
                "Model":"LG-E510"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G Pro",
                "labelname":"geefhd",
                "Model":"LG-E986"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geehrc",
                "Model":"LG-E977"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geeb",
                "Model":"LG-E970"
            },
            {
                "brandname":"LGE",
                "marketname":"LG OPTIMUS M+",
                "labelname":"m3_mpcs_us",
                "Model":"LG-MS695"
            },
            {
                "brandname":"LGE",
                "marketname":"LG L80 Single",
                "labelname":"w6",
                "Model":"LG-D375AR"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3 A",
                "labelname":"tigers",
                "Model":"LG-F410S"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-D856"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G2",
                "labelname":"g2",
                "Model":"LG-D806"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Pad 8.3 LTE",
                "labelname":"altev",
                "Model":"VK810 4G"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex",
                "labelname":"zee",
                "Model":"LGL23"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex",
                "labelname":"zee",
                "Model":"LG-D950"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Enlighten",
                "labelname":"VS700",
                "Model":"LG-VS700"
            },
            {
                "brandname":"LGE",
                "marketname":"L70",
                "labelname":"w5ts",
                "Model":"LG-D340f8"
            },
            {
                "brandname":"LGE",
                "marketname":"L65",
                "labelname":"w55ds",
                "Model":"LG-D285"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L1II",
                "labelname":"v1",
                "Model":"LG-E410i"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G Pro",
                "labelname":"geefhd",
                "Model":"LG-E988"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geehrc",
                "Model":"LG-E987"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geeb",
                "Model":"LG-E971"
            },
            {
                "brandname":"LGE",
                "marketname":"LG OPTIMUS ZIP",
                "labelname":"lgl75c",
                "Model":"LGL75C"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Leon",
                "labelname":"my50",
                "Model":"LG-H320"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3 Cat.6",
                "labelname":"tiger6",
                "Model":"LG-F460K"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-D857"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G2",
                "labelname":"g2",
                "Model":"LG-F320K"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Pad 8.3 homeBoy",
                "labelname":"awifi070u",
                "Model":"LG-V507L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex2",
                "labelname":"z2",
                "Model":"LG-F510K"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G Flex",
                "labelname":"zee",
                "Model":"LG-D950G"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Enlighten",
                "labelname":"VS700",
                "Model":"LG-VS700PP"
            },
            {
                "brandname":"LGE",
                "marketname":"L70 CDMA",
                "labelname":"w5c",
                "Model":"LGL41C"
            },
            {
                "brandname":"LGE",
                "marketname":"L65",
                "labelname":"w55n",
                "Model":"LG-D280"
            },
            {
                "brandname":"LGE",
                "marketname":"L50 Sporty",
                "labelname":"luv50ss",
                "Model":"LG-D213"
            },
            {
                "brandname":"LGE",
                "marketname":"L20",
                "labelname":"luv20ds",
                "Model":"LG-D105"
            },
            {
                "brandname":"LGE",
                "marketname":"Gx2",
                "labelname":"b2ln",
                "Model":"LG-F430L"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Screen",
                "labelname":"liger",
                "Model":"LG-F490L"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Beat",
                "labelname":"jagdsnm",
                "Model":"LG-D729"
            },
            {
                "brandname":"LGE",
                "marketname":"G pad 8.0",
                "labelname":"e8wifi",
                "Model":"LG-V480"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pro Lite",
                "labelname":"luv90ss",
                "Model":"LG-D681"
            },
            {
                "brandname":"LGE",
                "marketname":"Wine Smart",
                "labelname":"vfp",
                "Model":"LG-D486"
            },
            {
                "brandname":"LGE",
                "marketname":"Splendor",
                "labelname":"u0_cdma",
                "Model":"LG-US730"
            },
            {
                "brandname":"LGE",
                "marketname":"PRADA 3.0",
                "labelname":"p2",
                "Model":"LG-LU5400"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu2",
                "labelname":"vu2kt",
                "Model":"LG-F200K"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Vu",
                "labelname":"325",
                "Model":"LG-F100L"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Pro",
                "labelname":"muscat",
                "Model":"LG-C660h"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Pad",
                "labelname":"v901ar",
                "Model":"LG-V901"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"thunderc",
                "Model":"LG-US670"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus One",
                "labelname":"lu3700",
                "Model":"LG-LU3700"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Net",
                "labelname":"lgl45c",
                "Model":"LGL45C"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus LTE",
                "labelname":"iproj",
                "Model":"LG-P936"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus L5",
                "labelname":"m4",
                "Model":"LG-E612"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_usc-mx",
                "Model":"LG-E510g"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"univa_ctm-xxx",
                "Model":"LG-E510g"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Hub",
                "labelname":"lgc800",
                "Model":"LG-C800"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus F5",
                "labelname":"l1e",
                "Model":"LG-P875"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus EX",
                "labelname":"x2_450-05",
                "Model":"LG-SU880"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"bproj_sea-xxx",
                "Model":"LG-P970"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus Black",
                "labelname":"blackg",
                "Model":"LG-P970h"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 3D MAX",
                "labelname":"cx2",
                "Model":"LG-P725"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 3D",
                "labelname":"cosmo_450-05",
                "Model":"LG-SU760"
            },
            {
                "brandname":"LGE",
                "marketname":"Optimus 2X",
                "labelname":"p990_262-xx",
                "Model":"LG-P990"
            },
            {
                "brandname":"LGE",
                "marketname":"My touch 4G",
                "labelname":"e739",
                "Model":"LG-E739"
            },
            {
                "brandname":"LGE",
                "marketname":"LG optimus LTE2",
                "labelname":"d1lu",
                "Model":"LG-F160L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Spirit LTE",
                "labelname":"c70",
                "Model":"LG-H440"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus Select",
                "labelname":"u0_cdma",
                "Model":"LG-AS730"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus One",
                "labelname":"thunderg",
                "Model":"LG-P503"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus LTE Tag",
                "labelname":"cayman",
                "Model":"LG-F120K"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L9",
                "labelname":"u2",
                "Model":"LG-P760"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7 II",
                "labelname":"vee7e",
                "Model":"LG-P713"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L7",
                "labelname":"u0",
                "Model":"LG-P700"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L5 II",
                "labelname":"vee5nfc",
                "Model":"LG-E460f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L4 II Dual",
                "labelname":"vee4ds",
                "Model":"LG-E467f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3 II",
                "labelname":"vee3e",
                "Model":"LG-E430"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3 II",
                "labelname":"vee3ds",
                "Model":"LG-E435f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L3",
                "labelname":"e0",
                "Model":"LG-E400b"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus L1II",
                "labelname":"v1",
                "Model":"LG-E411f"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus HUB",
                "labelname":"univa_eur-xx",
                "Model":"LG-E510"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G Pro",
                "labelname":"geefhd",
                "Model":"LG-E989"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geehrc",
                "Model":"LG-F180K"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus G",
                "labelname":"geeb",
                "Model":"LG-E973"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Optimus 3D",
                "labelname":"cosmopolitan",
                "Model":"LG-P925g"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Leon TV",
                "labelname":"my50ds",
                "Model":"LG-H326"
            },
            {
                "brandname":"LGE",
                "marketname":"LG Gx",
                "labelname":"omegar",
                "Model":"LG-F310LR"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"LG-F400L"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G3",
                "labelname":"g3",
                "Model":"AS985"
            },
            {
                "brandname":"LGE",
                "marketname":"LG G2",
                "labelname":"g2",
                "Model":"LG-D800"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pad 10.1 LTE",
                "labelname":"e9lte",
                "Model":"VK700"
            },
            {
                "brandname":"LGE",
                "marketname":"Eve",
                "labelname":"EVE",
                "Model":"LG-GW620"
            },
            {
                "brandname":"LGE",
                "marketname":"Android TV",
                "labelname":"eden",
                "Model":"LG Android TV V4"
            },
            {
                "brandname":"LGE",
                "marketname":"Android TV",
                "labelname":"cosmo",
                "Model":"LG Google TV"
            },
            {
                "brandname":"LGE",
                "marketname":"Eve",
                "labelname":"EVE",
                "Model":"LG KH5200"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pad 10.1 LTE",
                "labelname":"e9lte",
                "Model":"LG-VK700"
            },
            {
                "brandname":"LGE",
                "marketname":"G Pro Lite",
                "labelname":"luv90ss",
                "Model":"LG-D680"
            },
            {
                "brandname":"LGE",
                "marketname":"G Vista",
                "labelname":"x10",
                "Model":"VS880"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 Beat",
                "labelname":"jagdsnm",
                "Model":"LG-D728"
            },
            {
                "brandname":"LGE",
                "marketname":"G3 S",
                "labelname":"jagnm",
                "Model":"LG-D725PR"
            },
            {
                "brandname":"LGE",
                "marketname":"Gpad 7.0",
                "labelname":"e7wifi",
                "Model":"LG-V400"
            },
            {
                "brandname":"Motorola",
                "marketname":"Flipout",
                "labelname":"umts_ruth",
                "Model":"MB511"
            },
            {
                "brandname":"Motorola",
                "marketname":"CLIQ",
                "labelname":"morrison",
                "Model":"morrison"
            },
            {
                "brandname":"Motorola",
                "marketname":"Defy Mini",
                "labelname":"TinBoost",
                "Model":"XT321"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid",
                "labelname":"umts_sholes",
                "Model":"XT701"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid MAXX",
                "labelname":"obake-maxx",
                "Model":"XT1080"
            },
            {
                "brandname":"Motorola",
                "marketname":"Backflip",
                "labelname":"motus",
                "Model":"ME600"
            },
            {
                "brandname":"Motorola",
                "marketname":"DROID RAZR HD",
                "labelname":"vanquish_u",
                "Model":"XT925"
            },
            {
                "brandname":"Motorola",
                "marketname":"Defy Mini",
                "labelname":"TinBoost",
                "Model":"XT320"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid",
                "labelname":"umts_sholes",
                "Model":"Milestone"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid II",
                "labelname":"cdma_droid2we",
                "Model":"DROID2 GLOBAL"
            },
            {
                "brandname":"Motorola",
                "marketname":"RAZR D3",
                "labelname":"hawk40_umts",
                "Model":"XT920"
            },
            {
                "brandname":"Motorola",
                "marketname":"Photon 4G",
                "labelname":"sunfire",
                "Model":"MB855"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motosmart",
                "labelname":"argonmini_umts",
                "Model":"XT389"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motorola RAZR HD",
                "labelname":"vanquish",
                "Model":"DROID RAZR HD"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motoluxe",
                "labelname":"umts_irock",
                "Model":"XT627"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto X",
                "labelname":"victara",
                "Model":"XT1097"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto MAXX",
                "labelname":"quark_umts",
                "Model":"XT1225"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G",
                "labelname":"falcon_umts",
                "Model":"XT939G"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto E",
                "labelname":"condor_umts",
                "Model":"XT1023"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto Defy XT",
                "labelname":"XT535",
                "Model":"XT535"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTOROLA ELECTRIFY 2",
                "labelname":"cdma_yangtze",
                "Model":"XT881"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G w",
                "labelname":"peregrine",
                "Model":"XT1040"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G",
                "labelname":"peregrine",
                "Model":"XT1045"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO E",
                "labelname":"condor_umts",
                "Model":"XT1021"
            },
            {
                "brandname":"Motorola",
                "marketname":"Electrify M",
                "labelname":"solstice",
                "Model":"XT901"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid Razr M",
                "labelname":"scorpion_mini_t",
                "Model":"201M"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid 4",
                "labelname":"cdma_maserati",
                "Model":"DROID4"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid",
                "labelname":"miler",
                "Model":"A854"
            },
            {
                "brandname":"Motorola",
                "marketname":"Defy",
                "labelname":"umts_jordan",
                "Model":"ME525"
            },
            {
                "brandname":"Motorola",
                "marketname":"Cliq-XT",
                "labelname":"zeppelin",
                "Model":"MB501"
            },
            {
                "brandname":"Motorola",
                "marketname":"Atrix",
                "labelname":"olympus",
                "Model":"ME860"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid X",
                "labelname":"cdma_shadow",
                "Model":"MB810"
            },
            {
                "brandname":"Motorola",
                "marketname":"Flipout",
                "labelname":"umts_ruth",
                "Model":"MotoMB511"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G",
                "labelname":"falcon_umts",
                "Model":"XT1002"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G",
                "labelname":"titan_umtsds",
                "Model":"titan_niibr_ds"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO X",
                "labelname":"victara",
                "Model":"XT1093"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTOROLA RAZR i",
                "labelname":"smi",
                "Model":"XT890"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto Defy XT",
                "labelname":"tinboostplus_cdma",
                "Model":"XT557"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G",
                "labelname":"falcon_cdma",
                "Model":"XT1031"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G",
                "labelname":"titan_umts",
                "Model":"XT1063"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto X",
                "labelname":"ghost",
                "Model":"XT1053"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motoluxe",
                "labelname":"ironmax_umts",
                "Model":"XT615"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motoroi",
                "labelname":"sholest",
                "Model":"XT720"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motorola Razr V",
                "labelname":"umts_yangtze",
                "Model":"XT886"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motosmart",
                "labelname":"silversmart_umts",
                "Model":"XT305"
            },
            {
                "brandname":"Motorola",
                "marketname":"RAZR D1",
                "labelname":"hawk35_umts",
                "Model":"XT914"
            },
            {
                "brandname":"Motorola",
                "marketname":"XOOM",
                "labelname":"umts_hubble",
                "Model":"MZ601"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G",
                "labelname":"titan_umtsds",
                "Model":"XT1068"
            },
            {
                "brandname":"Motorola",
                "marketname":"Citrus",
                "labelname":"cdma_ciena",
                "Model":"WX442"
            },
            {
                "brandname":"Motorola",
                "marketname":"DROID Turbo",
                "labelname":"quark",
                "Model":"XT1254"
            },
            {
                "brandname":"Motorola",
                "marketname":"Defy Mini",
                "labelname":"tinboost_umts",
                "Model":"XT321"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid",
                "labelname":"umts_sholes",
                "Model":"XT720"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motoluxe",
                "labelname":"XT682",
                "Model":"XT682"
            },
            {
                "brandname":"Motorola",
                "marketname":"CLIQ",
                "labelname":"morrison",
                "Model":"MB200"
            },
            {
                "brandname":"Motorola",
                "marketname":"Backflip",
                "labelname":"motus",
                "Model":"MB300"
            },
            {
                "brandname":"Motorola",
                "marketname":"DROID RAZR HD",
                "labelname":"vanquish_u",
                "Model":"RAZR HD"
            },
            {
                "brandname":"Motorola",
                "marketname":"Defy",
                "labelname":"umts_jordan",
                "Model":"unknown"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid",
                "labelname":"umts_sholes",
                "Model":"A853"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid II",
                "labelname":"cdma_droid2",
                "Model":"DROID2"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid X",
                "labelname":"cdma_shadow",
                "Model":"DROIDX"
            },
            {
                "brandname":"Motorola",
                "marketname":"Flipout",
                "labelname":"umts_ruth",
                "Model":"ME511"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO E",
                "labelname":"condor_umtsds",
                "Model":"XT1022"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G",
                "labelname":"titan_umts",
                "Model":"XT1064"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO X",
                "labelname":"ghost",
                "Model":"XT1058"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTOROLA RAZR M",
                "labelname":"smq_t",
                "Model":"201M"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto Defy XT",
                "labelname":"tinboostplus_cdma",
                "Model":"XT556"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G",
                "labelname":"falcon_cdma",
                "Model":"XT1028"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G",
                "labelname":"titan_udstv",
                "Model":"XT1069"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto X",
                "labelname":"ghost",
                "Model":"XT1050"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motoluxe",
                "labelname":"XT611",
                "Model":"XT611"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motoroi",
                "labelname":"sholest",
                "Model":"Motorola XT720"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motorola Razr V",
                "labelname":"umts_yangtze",
                "Model":"XT885"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motosmart",
                "labelname":"silversmart_umts",
                "Model":"XT303"
            },
            {
                "brandname":"Motorola",
                "marketname":"Quench XT3",
                "labelname":"XT502",
                "Model":"Motorola-XT502"
            },
            {
                "brandname":"Motorola",
                "marketname":"XOOM",
                "labelname":"stingray",
                "Model":"Xoom"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid Pro",
                "labelname":"cdma_venus2",
                "Model":"Milestone PLUS"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid X",
                "labelname":"cdma_shadow",
                "Model":"Milestone X"
            },
            {
                "brandname":"Motorola",
                "marketname":"Iron Rock",
                "labelname":"umts_irock",
                "Model":"XT627"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G",
                "labelname":"falcon_umts",
                "Model":"XT1032"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G LTE",
                "labelname":"peregrine",
                "Model":"XT1040"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO X",
                "labelname":"victara",
                "Model":"XT1095"
            },
            {
                "brandname":"Motorola",
                "marketname":"Milestone2",
                "labelname":"umts_milestone2",
                "Model":"A953"
            },
            {
                "brandname":"Motorola",
                "marketname":"XOOM",
                "labelname":"wingray",
                "Model":"Xoom"
            },
            {
                "brandname":"Motorola",
                "marketname":"RAZR D3",
                "labelname":"hawk40_umts",
                "Model":"XT919"
            },
            {
                "brandname":"Motorola",
                "marketname":"Photon 4G",
                "labelname":"sunfire",
                "Model":"ISW11M"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motosmart",
                "labelname":"XT390",
                "Model":"XT390"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motorola Photon",
                "labelname":"asanti_c",
                "Model":"XT897S"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motoluxe",
                "labelname":"umts_irock",
                "Model":"XT626"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto X",
                "labelname":"ghost",
                "Model":"XT1060"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G w",
                "labelname":"peregrine",
                "Model":"XT1040"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G",
                "labelname":"falcon_umts",
                "Model":"XT1034"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto E",
                "labelname":"condor_umts",
                "Model":"XT1021"
            },
            {
                "brandname":"Motorola",
                "marketname":"Milestone2",
                "labelname":"umts_milestone2",
                "Model":"MotoA953"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO X",
                "labelname":"victara",
                "Model":"XT1097"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G w",
                "labelname":"peregrine",
                "Model":"XT1039"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G",
                "labelname":"peregrine",
                "Model":"XT1042"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO E",
                "labelname":"condor_cdma",
                "Model":"XT830C"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid X2",
                "labelname":"daytona",
                "Model":"Milestone X2"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid RAZR",
                "labelname":"umts_spyder",
                "Model":"XT910"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid 3",
                "labelname":"cdma_solana",
                "Model":"DROID3"
            },
            {
                "brandname":"Motorola",
                "marketname":"Devour",
                "labelname":"calgary",
                "Model":"calgary"
            },
            {
                "brandname":"Motorola",
                "marketname":"Defy",
                "labelname":"umts_jordan",
                "Model":"MB526"
            },
            {
                "brandname":"Motorola",
                "marketname":"Citrus",
                "labelname":"cdma_ciena",
                "Model":"XT301"
            },
            {
                "brandname":"Motorola",
                "marketname":"Atrix HD",
                "labelname":"qinara",
                "Model":"MB886"
            },
            {
                "brandname":"Motorola",
                "marketname":"Cliq-XT",
                "labelname":"zeppelin",
                "Model":"ME501"
            },
            {
                "brandname":"Motorola",
                "marketname":"Defy",
                "labelname":"umts_jordan",
                "Model":"ME525+"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid",
                "labelname":"sholes",
                "Model":"Droid"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid II",
                "labelname":"cdma_droid2",
                "Model":"A955"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid Ultra",
                "labelname":"obake",
                "Model":"XT1080"
            },
            {
                "brandname":"Motorola",
                "marketname":"DROID RAZR M",
                "labelname":"scorpion_mini",
                "Model":"XT907"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO E",
                "labelname":"condor_umts",
                "Model":"XT1023"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G",
                "labelname":"titan_umts",
                "Model":"XT1063"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO X",
                "labelname":"ghost",
                "Model":"XT1053"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTOROLA RAZR HD",
                "labelname":"vanquish_u",
                "Model":"RAZR HD"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto Defy XT",
                "labelname":"tinboostplus_cdma",
                "Model":"XT555C"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto E",
                "labelname":"condor_umtsds",
                "Model":"XT1022"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G",
                "labelname":"falcon_umtsds",
                "Model":"XT1033"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto X",
                "labelname":"ghost",
                "Model":"XT1049"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto X",
                "labelname":"victara",
                "Model":"XT1098"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motoroi",
                "labelname":"sholest",
                "Model":"Milestone XT720"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motorola RAZR M",
                "labelname":"smq",
                "Model":"XT907"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motosmart",
                "labelname":"argonmini_umts",
                "Model":"XT390"
            },
            {
                "brandname":"Motorola",
                "marketname":"Photon 4G",
                "labelname":"sunfire",
                "Model":"Motorola Electrify"
            },
            {
                "brandname":"Motorola",
                "marketname":"Spice",
                "labelname":"sesame",
                "Model":"XT300"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto E",
                "labelname":"condor_cdma",
                "Model":"XT1019"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G",
                "labelname":"falcon_umts",
                "Model":"XT1008"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G",
                "labelname":"titan_umtsds",
                "Model":"XT1068"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto X",
                "labelname":"ghost",
                "Model":"XT1056"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motoluxe",
                "labelname":"ironmaxct_cdma",
                "Model":"Motorola MOT-XT681"
            },
            {
                "brandname":"Motorola",
                "marketname":"Atrix",
                "labelname":"olympus",
                "Model":"MB861"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motorola Master Touch",
                "labelname":"umts_primus",
                "Model":"XT621"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motorola XOOM 2",
                "labelname":"pasteur",
                "Model":"MZ617"
            },
            {
                "brandname":"Motorola",
                "marketname":"Opus One",
                "labelname":"rubicon",
                "Model":"Motorola Titanium"
            },
            {
                "brandname":"Motorola",
                "marketname":"RAZR D1",
                "labelname":"hawk35_umts",
                "Model":"XT916"
            },
            {
                "brandname":"Motorola",
                "marketname":"XOOM",
                "labelname":"wifi_hubble",
                "Model":"MZ606"
            },
            {
                "brandname":"Motorola",
                "marketname":"RAZR D1",
                "labelname":"hawk35_umts",
                "Model":"XT918"
            },
            {
                "brandname":"Motorola",
                "marketname":"Opus One",
                "labelname":"rubicon",
                "Model":"Titanium"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motosmart",
                "labelname":"XT389",
                "Model":"XT389"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motorola Photon",
                "labelname":"asanti_c",
                "Model":"XT897"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motoluxe",
                "labelname":"ironmaxtv_umts",
                "Model":"XT687"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto X",
                "labelname":"ghost",
                "Model":"XT1058"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G w",
                "labelname":"peregrine",
                "Model":"XT1045"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G",
                "labelname":"falcon_umts",
                "Model":"XT1032"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto E",
                "labelname":"condor_udstv",
                "Model":"XT1025"
            },
            {
                "brandname":"Motorola",
                "marketname":"Milestone2",
                "labelname":"umts_milestone2",
                "Model":"ME722"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO X",
                "labelname":"victara",
                "Model":"XT1096"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G LTE",
                "labelname":"peregrine",
                "Model":"XT1045"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G",
                "labelname":"peregrine",
                "Model":"XT1039"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO E",
                "labelname":"condor_cdma",
                "Model":"XT1019"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid X",
                "labelname":"cdma_shadow",
                "Model":"MotoroiX"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid Pro",
                "labelname":"cdma_venus2",
                "Model":"XT610"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid",
                "labelname":"umts_sholes",
                "Model":"umts"
            },
            {
                "brandname":"Motorola",
                "marketname":"Defy Pro",
                "labelname":"XT560",
                "Model":"XT560"
            },
            {
                "brandname":"Motorola",
                "marketname":"Defy",
                "labelname":"umts_jordan",
                "Model":"MB525"
            },
            {
                "brandname":"Motorola",
                "marketname":"Citrus",
                "labelname":"cdma_ciena",
                "Model":"WX445"
            },
            {
                "brandname":"Motorola",
                "marketname":"Atrix",
                "labelname":"olympus",
                "Model":"MB860"
            },
            {
                "brandname":"Motorola",
                "marketname":"Charm",
                "labelname":"umts_basil",
                "Model":"MB502"
            },
            {
                "brandname":"Motorola",
                "marketname":"DROID RAZR i",
                "labelname":"smi",
                "Model":"XT890"
            },
            {
                "brandname":"Motorola",
                "marketname":"Defy Mini",
                "labelname":"tinboost_umts",
                "Model":"XT320"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid",
                "labelname":"umts_sholes",
                "Model":"XT702"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid Mini",
                "labelname":"obakem",
                "Model":"XT1030"
            },
            {
                "brandname":"Motorola",
                "marketname":"Droid X",
                "labelname":"cdma_shadow",
                "Model":"ME811"
            },
            {
                "brandname":"Motorola",
                "marketname":"Glam XT800",
                "labelname":"titanium",
                "Model":"XT800"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G",
                "labelname":"falcon_umts",
                "Model":"XT1003"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO G LTE",
                "labelname":"peregrine",
                "Model":"XT1039"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO X",
                "labelname":"victara",
                "Model":"XT1094"
            },
            {
                "brandname":"Motorola",
                "marketname":"Master Touch",
                "labelname":"umts_primus",
                "Model":"XT621"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto Defy XT",
                "labelname":"tinboostplus_umts",
                "Model":"XT535"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G",
                "labelname":"falcon_cdma",
                "Model":"XT937C"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G",
                "labelname":"titan_umts",
                "Model":"XT1064"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto X",
                "labelname":"ghost",
                "Model":"XT1055"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motoluxe",
                "labelname":"ironmax_umts",
                "Model":"XT685"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motorola Atrix HD",
                "labelname":"qinara",
                "Model":"MB886"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motorola XOOM 2",
                "labelname":"fleming",
                "Model":"MZ609"
            },
            {
                "brandname":"Motorola",
                "marketname":"Nexus 6",
                "labelname":"shamu",
                "Model":"Nexus 6"
            },
            {
                "brandname":"Motorola",
                "marketname":"RAZR D1",
                "labelname":"hawk35_umts",
                "Model":"XT915"
            },
            {
                "brandname":"Motorola",
                "marketname":"XOOM",
                "labelname":"umts_hubble",
                "Model":"MZ605"
            },
            {
                "brandname":"Motorola",
                "marketname":"XOOM",
                "labelname":"wifi_hubble",
                "Model":"MZ604"
            },
            {
                "brandname":"Motorola",
                "marketname":"MOTO X",
                "labelname":"victara",
                "Model":"XT1092"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto G",
                "labelname":"titan_udstv",
                "Model":"titan_retbr_dstv"
            },
            {
                "brandname":"Motorola",
                "marketname":"Moto X",
                "labelname":"ghost",
                "Model":"XT1052"
            },
            {
                "brandname":"Motorola",
                "marketname":"Motoluxe",
                "labelname":"XT615",
                "Model":"XT615"
            },
            {
                "brandname":"Motorola",
                "marketname":"XOOM",
                "labelname":"umts_everest",
                "Model":"MZ601"
            },
            {
                "brandname":"Nikon",
                "marketname":"COOLPIX",
                "labelname":"S800c",
                "Model":"COOLPIX S800c"
            },
            {
                "brandname":"OnePlus",
                "marketname":"OnePlus One",
                "labelname":"A0001",
                "Model":"A0001"
            },
            {
                "brandname":"OnePlus",
                "marketname":"OnePlus One",
                "labelname":"A0001",
                "Model":"One"
            },
            {
                "brandname":"Panasonic",
                "marketname":"FZ-A1",
                "labelname":"toughpad",
                "Model":"FZ-A1B"
            },
            {
                "brandname":"Panasonic",
                "marketname":"Elite 12",
                "labelname":"Elite12",
                "Model":"Elite"
            },
            {
                "brandname":"Panasonic",
                "marketname":"Panasonic P41 HD",
                "labelname":"P41HD",
                "Model":"Panasonic P41HD"
            },
            {
                "brandname":"Panasonic",
                "marketname":"Elite 16",
                "labelname":"Elite16",
                "Model":"Elite"
            },
            {
                "brandname":"Panasonic",
                "marketname":"ELUGA Power",
                "labelname":"P-07D",
                "Model":"P-07D"
            },
            {
                "brandname":"Panasonic",
                "marketname":"ELUGA P",
                "labelname":"P-03E",
                "Model":"P-03E"
            },
            {
                "brandname":"Panasonic",
                "marketname":"ELUGA U",
                "labelname":"ELUGA_U",
                "Model":"Panasonic ELUGA U"
            },
            {
                "brandname":"Panasonic",
                "marketname":"Elite 18",
                "labelname":"Elite18",
                "Model":"Elite"
            },
            {
                "brandname":"Panasonic",
                "marketname":"Panasonic P61",
                "labelname":"P61",
                "Model":"Panasonic_P61"
            },
            {
                "brandname":"Panasonic",
                "marketname":"SV-ME1000",
                "labelname":"K1",
                "Model":"Panasonic SV-ME1000"
            },
            {
                "brandname":"Panasonic",
                "marketname":"FZ-B2",
                "labelname":"fz_b2bb",
                "Model":"FZ-B2B"
            },
            {
                "brandname":"Panasonic",
                "marketname":"UN-MT300",
                "labelname":"A1",
                "Model":"Panasonic UN-MT300"
            },
            {
                "brandname":"Panasonic",
                "marketname":"HDPSEB v2",
                "labelname":"HDPSEBv2",
                "Model":"HD PSEB v2"
            },
            {
                "brandname":"Panasonic",
                "marketname":"ELUGA X",
                "labelname":"P-02E",
                "Model":"P-02E"
            },
            {
                "brandname":"Panasonic",
                "marketname":"ELUGA V",
                "labelname":"P-06D",
                "Model":"P-06D"
            },
            {
                "brandname":"Panasonic",
                "marketname":"ELUGA U2",
                "labelname":"ELUGA_U2",
                "Model":"Panasonic ELUGA U2"
            },
            {
                "brandname":"Panasonic",
                "marketname":"VHS v2",
                "labelname":"VHS",
                "Model":"Video Handset"
            },
            {
                "brandname":"Panasonic",
                "marketname":"SM17",
                "labelname":"SM17",
                "Model":"Smart Monitor 17"
            },
            {
                "brandname":"Panasonic",
                "marketname":"ELUGA",
                "labelname":"pana2_4o",
                "Model":"dL1"
            },
            {
                "brandname":"Panasonic",
                "marketname":"KX-PRXA10",
                "labelname":"KX-PRXA10",
                "Model":"Panasonic KX-PRXA10"
            },
            {
                "brandname":"Panasonic",
                "marketname":"ELUGA dL1",
                "labelname":"pana2_4v",
                "Model":"Panasonic_dL1"
            },
            {
                "brandname":"Panasonic",
                "marketname":"LUMIX CM1",
                "labelname":"DMC-CM1",
                "Model":"DMC-CM1"
            },
            {
                "brandname":"Panasonic",
                "marketname":"Elite 11",
                "labelname":"Elite11",
                "Model":"Elite"
            },
            {
                "brandname":"Panasonic",
                "marketname":"UN-W700",
                "labelname":"F1",
                "Model":"Panasonic UN-W700"
            },
            {
                "brandname":"Panasonic",
                "marketname":"KX-PRXA15",
                "labelname":"KX-PRXA15",
                "Model":"Panasonic KX-PRXA15"
            },
            {
                "brandname":"Panasonic",
                "marketname":"Boukenkun-reciever",
                "labelname":"VW_RCBKK1",
                "Model":"VW_RCBKK1"
            },
            {
                "brandname":"Polaroid",
                "marketname":"Polaroid PTAB751",
                "labelname":"STJR76",
                "Model":"PTAB751"
            },
            {
                "brandname":"Polaroid",
                "marketname":"PTAB1051-PTAB1055",
                "labelname":"RCT6203W46",
                "Model":"PTAB1051_PTAB1055"
            },
            {
                "brandname":"Polaroid",
                "marketname":"Infinite",
                "labelname":"MID1324",
                "Model":"MID 1324"
            },
            {
                "brandname":"Polaroid",
                "marketname":"Polaroid V7",
                "labelname":"nuclear-M7021",
                "Model":"V7"
            },
            {
                "brandname":"Polaroid",
                "marketname":"Polaroid MID1028",
                "labelname":"MID1028",
                "Model":"MID1028"
            },
            {
                "brandname":"Polaroid",
                "marketname":"POLAROID A7_PTAB735",
                "labelname":"A7_PTAB735",
                "Model":"HS-7DTB39"
            },
            {
                "brandname":"Polaroid",
                "marketname":"Polaroid A7X_PTAB735X",
                "labelname":"PTAB735X",
                "Model":"A7X_PTAB735X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy K Zoom",
                "labelname":"m2a3g",
                "Model":"SM-C111M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy M Style",
                "labelname":"vastoicmcc",
                "Model":"GT-I8258"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 6.3",
                "labelname":"melius3g",
                "Model":"GT-I9208"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 6.3",
                "labelname":"meliusltelgt",
                "Model":"SHV-E310L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega2",
                "labelname":"mega2lte",
                "Model":"SM-G750F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mini",
                "labelname":"GT-S5570I",
                "Model":"GT-S5570I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mini2",
                "labelname":"GT-S6500L",
                "Model":"GT-S6500L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy NX",
                "labelname":"u0lteue",
                "Model":"EK-GN120A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"GT-N7000",
                "Model":"GT-N7000"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"SGH-I717R",
                "Model":"SGH-I717R"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"lt03ltelgt",
                "Model":"SM-P605L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4notelteusc",
                "Model":"SCH-I925U"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4notewifiany",
                "Model":"SHW-M480W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 8.0",
                "labelname":"konalte",
                "Model":"GT-N5120"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tbelteskt",
                "Model":"SM-N915S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tbltecan",
                "Model":"SM-N915W8"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Pro 12.2",
                "labelname":"v1a3g",
                "Model":"SM-P901"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Pro 12.2",
                "labelname":"viennaltevzw",
                "Model":"SM-P905V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t03gcmcc",
                "Model":"GT-N7108"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0ltecan",
                "Model":"SGH-T889V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0lteusc",
                "Model":"SCH-R950"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hlte",
                "Model":"SM-N9007"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hlteskt",
                "Model":"SM-N900S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3 Neo",
                "labelname":"frescoltektt",
                "Model":"SM-N750K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3 Neo",
                "labelname":"hllte",
                "Model":"SM-N7505L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"treltektt",
                "Model":"SM-N910K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trlteatt",
                "Model":"SM-N910F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trltetmo",
                "Model":"SM-N910T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Player 4.2",
                "labelname":"YP-GI1",
                "Model":"YP-GI1"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket",
                "labelname":"GT-S5300B",
                "Model":"GT-S5300B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"corsica",
                "Model":"GT-S5312L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"corsicave3g",
                "Model":"GT-S5310I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Plus",
                "labelname":"coriplus",
                "Model":"GT-S5301B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pop",
                "labelname":"superiorlteskt",
                "Model":"SHV-E220S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pro",
                "labelname":"GT-B7510",
                "Model":"GT-B7510"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy R-Style",
                "labelname":"jaguarl",
                "Model":"SHV-E170L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"GT-I9000B",
                "Model":"GT-I9000B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"GT-I9050",
                "Model":"GT-I9050"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"SHW-M110S",
                "Model":"SHW-M110S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S BlazeQ",
                "labelname":"apexqtmo",
                "Model":"SGH-T699"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Duos",
                "labelname":"kyleopen",
                "Model":"GT-S7562"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Glide",
                "labelname":"SGH-I927R",
                "Model":"SAMSUNG-SGH-I927R"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"GT-I9100",
                "Model":"GT-I9100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"SCH-R760X",
                "Model":"SCH-R760X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"t1cmcc",
                "Model":"GT-I9108"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 HD LTE",
                "labelname":"SHV-E120K",
                "Model":"SHV-E120K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 Plus",
                "labelname":"s2ve",
                "Model":"GT-I9105"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"c1att",
                "Model":"SGH-I748"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2dcm",
                "Model":"SC-06D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2tfnvzw",
                "Model":"SCH-S968C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"m0apt",
                "Model":"SCH-I939"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"m3dcm",
                "Model":"GravityQuad"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Mini",
                "labelname":"goldenltebmc",
                "Model":"SM-G730W8"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Neo",
                "labelname":"s3ve3gds",
                "Model":"GT-I9300I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"ja3g",
                "Model":"GT-I9500"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jflteaio",
                "Model":"SAMSUNG-SGH-I337Z"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jfltespr",
                "Model":"SPH-L720"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jfvelte",
                "Model":"GT-I9515"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Active",
                "labelname":"jactivelteatt",
                "Model":"SGH-I537"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranolte",
                "Model":"GT-I9195L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranoltelra",
                "Model":"SCH-I435L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Zoom",
                "labelname":"mproject3g",
                "Model":"SM-C101"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"k3g",
                "Model":"SM-G900H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klteacg",
                "Model":"SM-G900R7"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klteskt",
                "Model":"SM-G900S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 Active",
                "labelname":"klteactive",
                "Model":"SM-G870F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 Mini",
                "labelname":"kminilte",
                "Model":"SM-G800F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 mini LTE",
                "labelname":"kminilte",
                "Model":"SM-G800Y"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zerofltechn",
                "Model":"SM-G9200"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zerofltetmo",
                "Model":"SM-G920T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"zeroltebmc",
                "Model":"SM-G925W8"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"zerolteusc",
                "Model":"SM-G925R4"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Spica",
                "labelname":"spica",
                "Model":"GT-I5700L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Stellar",
                "labelname":"jaspervzw",
                "Model":"SCH-I200"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"GT-P1000R",
                "Model":"GT-P1000R"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"SHW-M180L",
                "Model":"SHW-M180L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1",
                "labelname":"SC-01D",
                "Model":"SC-01D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1 N",
                "labelname":"GT-P7501",
                "Model":"GT-P7501"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 4 Active",
                "labelname":"rubenslte",
                "Model":"SM-T365Y"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 7.0 Plus",
                "labelname":"SC-02D",
                "Model":"SC-02D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"GT-P7300",
                "Model":"GT-P7300"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"SGH-I957M",
                "Model":"SAMSUNG-SGH-I957M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"SHW-M305W",
                "Model":"SHW-M305W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab Pro 8.4",
                "labelname":"mondrianlte",
                "Model":"SM-T325"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab S 10.5",
                "labelname":"chagallwifi",
                "Model":"SM-T800"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 10.1",
                "labelname":"espresso10att",
                "Model":"SAMSUNG-SGH-I497"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 10.1",
                "labelname":"espresso10wifi",
                "Model":"GT-P5110"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 7.0",
                "labelname":"espressowifi",
                "Model":"GT-P3110"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 7.0",
                "labelname":"lt023g",
                "Model":"SM-T211"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 7.0",
                "labelname":"lt02wifi",
                "Model":"SM-T210"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 8.0",
                "labelname":"lt01wifi",
                "Model":"SM-T310"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 Lite 7.0",
                "labelname":"fortunave3g",
                "Model":"SM-G530H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 10.0",
                "labelname":"matisse3g",
                "Model":"SM-T531"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 10.1",
                "labelname":"matissewifi",
                "Model":"SM-T530"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degaslte",
                "Model":"SM-T235"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degaswifi",
                "Model":"SM-T230NY"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 8.0",
                "labelname":"milletlte",
                "Model":"SM-T335"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 8.0",
                "labelname":"milletwifiue",
                "Model":"SM-T330NU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"SCT21",
                "Model":"SCT21"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagalllte",
                "Model":"SM-T805Y"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagallltevzw",
                "Model":"SM-T807V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 8.4",
                "labelname":"klimtltecan",
                "Model":"SM-T705W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend",
                "labelname":"kyleve3gcmcc",
                "Model":"GT-S7568I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend Lite",
                "labelname":"kylevess",
                "Model":"GT-S7390L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend2",
                "labelname":"kyleplusctc",
                "Model":"SCH-I739"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend3",
                "labelname":"cs02ve3g",
                "Model":"SM-G3508J"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy W",
                "labelname":"SGH-T679M",
                "Model":"SGH-T679M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Win",
                "labelname":"deloslteskt",
                "Model":"SHV-E500S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Xcover",
                "labelname":"GT-S5690",
                "Model":"GT-S5690"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y",
                "labelname":"GT-S5360B",
                "Model":"GT-S5360B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y Duos",
                "labelname":"GT-S6102",
                "Model":"GT-S6102"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y Pro",
                "labelname":"GT-B5510L",
                "Model":"GT-B5510L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young",
                "labelname":"royss",
                "Model":"GT-S6310L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Admire",
                "labelname":"SCH-R720",
                "Model":"SCH-R720"
            },
            {
                "brandname":"Samsung",
                "marketname":"Droid Charge",
                "labelname":"SCH-I510",
                "Model":"SCH-I510"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy (China)",
                "labelname":"GT-B9062",
                "Model":"GT-B9062"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3ltechn",
                "Model":"SM-A3000"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3ulte",
                "Model":"SM-A300Y"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5ltezh",
                "Model":"SM-A5000"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A7",
                "labelname":"a7alte",
                "Model":"SM-A700F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S5830",
                "Model":"GT-S5830"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S5830T",
                "Model":"GT-S5830T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"heat3gou",
                "Model":"SM-G310R5"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Duos",
                "labelname":"GT-S6352",
                "Model":"GT-S6352"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Duos",
                "labelname":"SCH-i589",
                "Model":"SCH-i589"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Style",
                "labelname":"heat3gtfnvzw",
                "Model":"SM-S765C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace2 X",
                "labelname":"kylessopen",
                "Model":"GT-S7560"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace3",
                "labelname":"loganrelte",
                "Model":"GT-S7275B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace4",
                "labelname":"vivalto3mve3g",
                "Model":"SM-G316H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace4 Lite",
                "labelname":"vivalto",
                "Model":"SM-G3139D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Alpha",
                "labelname":"slte",
                "Model":"SM-G850FQ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Alpha",
                "labelname":"sltelgt",
                "Model":"SM-G850L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Attain",
                "labelname":"SCH-R920",
                "Model":"SCH-R920"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Camera",
                "labelname":"gd1can",
                "Model":"EK-GC100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Camera",
                "labelname":"u0lte",
                "Model":"EK-GN100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core",
                "labelname":"afyonltecan",
                "Model":"SM-G386W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core LTE",
                "labelname":"cs03lte",
                "Model":"SM-G3518"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Plus",
                "labelname":"cs02ve3g",
                "Model":"SM-G3502L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Prime",
                "labelname":"coreprimelte",
                "Model":"SM-G360FY"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Prime",
                "labelname":"rossalte",
                "Model":"SM-G3608"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core2",
                "labelname":"kanas",
                "Model":"SM-G355H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Discover",
                "labelname":"amazing3gcri",
                "Model":"SCH-R740C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy E7",
                "labelname":"e73g",
                "Model":"SM-E700H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Europa",
                "labelname":"GT-I5510",
                "Model":"GT-I5510"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Express",
                "labelname":"expressatt",
                "Model":"SAMSUNG-SGH-I437P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevis",
                "Model":"GT-S6810B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevisnvess",
                "Model":"GT-S6790N"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fit",
                "labelname":"GT-S5670",
                "Model":"GT-S5670"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Gio",
                "labelname":"GT-S5660L",
                "Model":"GT-S5660L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Golden",
                "labelname":"ks02ltektt",
                "Model":"SHV-E400K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand",
                "labelname":"baffinrd",
                "Model":"GT-I9118"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Duos",
                "labelname":"baffin",
                "Model":"GT-I9082"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Neo",
                "labelname":"baffinlitedtv",
                "Model":"GT-I9063T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Prime",
                "labelname":"fortuna3g",
                "Model":"SM-G530H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Prime",
                "labelname":"fortunaltectc",
                "Model":"SM-G5309W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand duos",
                "labelname":"baffin",
                "Model":"GT-I9082i"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand2",
                "labelname":"ms013gdtv",
                "Model":"SM-G7102T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Indulge",
                "labelname":"SCH-R910",
                "Model":"SCH-R910"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy J1",
                "labelname":"j1lte",
                "Model":"SM-J100G"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy K Zoom",
                "labelname":"m2alte",
                "Model":"SM-C115M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 5.8",
                "labelname":"crater",
                "Model":"GT-I9152"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 6.3",
                "labelname":"meliuslte",
                "Model":"GT-I9205"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 6.3",
                "labelname":"meliusltespr",
                "Model":"SPH-L600"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega2",
                "labelname":"vasta3g",
                "Model":"SM-G750H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mini",
                "labelname":"GT-S5578",
                "Model":"GT-S5578"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Music",
                "labelname":"ivoryss",
                "Model":"GT-S6010"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Nexus",
                "labelname":"maguro",
                "Model":"Galaxy Nexus"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"SC-05D",
                "Model":"SC-05D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"SHV-E160K",
                "Model":"SHV-E160K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4notelte",
                "Model":"GT-N8020"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4noterf",
                "Model":"GT-N8000"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4notewifiww",
                "Model":"GT-N8010"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 8.0",
                "labelname":"konawifi",
                "Model":"GT-N5110"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tblte",
                "Model":"SM-N915F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tbltespr",
                "Model":"SM-N915P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Pro 12.2",
                "labelname":"v1awifikx",
                "Model":"SM-P900"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t03g",
                "Model":"GT-N7100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t03gcuduos",
                "Model":"GT-N7102"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0ltedcm",
                "Model":"SC-02E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"SC-02F",
                "Model":"SC-02F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hlte",
                "Model":"SM-N9009"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hltetmo",
                "Model":"SM-N900T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3 Neo",
                "labelname":"frescolteskt",
                "Model":"SM-N750S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"tre3caltektt",
                "Model":"SM-N916K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trelteskt",
                "Model":"SM-N910S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trltechn",
                "Model":"SM-N9100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trlteusc",
                "Model":"SM-N910R4"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Player 5.8",
                "labelname":"harrison",
                "Model":"YP-GP1"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket",
                "labelname":"GT-S5302",
                "Model":"GT-S5302"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"corsicass",
                "Model":"GT-S5310B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"corsicaveds3gvj",
                "Model":"GT-S5312C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket SS",
                "labelname":"corsicave3g",
                "Model":"GT-S5310C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Precedent",
                "labelname":"SCH-M828C",
                "Model":"SCH-M828C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pro",
                "labelname":"GT-B7510L",
                "Model":"GT-B7510L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Reverb",
                "labelname":"iconvmu",
                "Model":"SPH-M950"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"GT-I9000T",
                "Model":"GT-I9000T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"SCH-I500",
                "Model":"SCH-I500"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"SPH-D700",
                "Model":"SPH-D700"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Captivate",
                "labelname":"SGH-I896",
                "Model":"SGH-I896"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Duos2",
                "labelname":"kyleprods",
                "Model":"GT-S7582"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Plus",
                "labelname":"GT-I9001",
                "Model":"GT-I9001"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"GT-I9100P",
                "Model":"GT-I9100P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"SGH-S959G",
                "Model":"SGH-S959G"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 Duos TV",
                "labelname":"logandsdtv",
                "Model":"GT-S7273T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 HD LTE",
                "labelname":"SHV-E120S",
                "Model":"SHV-E120S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 Skyrocket",
                "labelname":"SGH-I727",
                "Model":"SAMSUNG-SGH-I727"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"c1lgt",
                "Model":"SHV-E210L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2lterefreshspr",
                "Model":"SPH-L710T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2usc",
                "Model":"SCH-R530U"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"m0cmcc",
                "Model":"GT-I9308"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Duos",
                "labelname":"arubaslim",
                "Model":"GT-I8262B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Mini",
                "labelname":"goldenve3g",
                "Model":"GT-I8200L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Neo Plus",
                "labelname":"s3ve3g",
                "Model":"GT-I9300I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jaltektt",
                "Model":"SHV-E300K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jfltecan",
                "Model":"SGH-I337M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jfltetfntmo",
                "Model":"SGH-S970G"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jfwifi",
                "Model":"GT-I9505X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Duos",
                "labelname":"ja3gchnduos",
                "Model":"GT-I9502"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranolte",
                "Model":"GT-I9195X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranolteusc",
                "Model":"SCH-R890"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Zoom",
                "labelname":"mprojectltelgt",
                "Model":"SM-C105L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klte",
                "Model":"SM-G9009W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klteatt",
                "Model":"SAMSUNG-SM-G900A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"kltetmo",
                "Model":"SM-G900T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 Active",
                "labelname":"kltecanactive",
                "Model":"SM-G870W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 Mini",
                "labelname":"kminilteusc",
                "Model":"SM-G800R4"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zeroflte",
                "Model":"SM-G920I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zerofltectc",
                "Model":"SM-G9209"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zerofltevzw",
                "Model":"SM-G920V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"zeroltektt",
                "Model":"SM-G925K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Spica",
                "labelname":"GT-I5700",
                "Model":"GT-I5700"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Spica",
                "labelname":"spica",
                "Model":"GT-i5700"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Style Duos",
                "labelname":"aruba3gduosctc",
                "Model":"SCH-I829"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"GT-P1010",
                "Model":"GT-P1010"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"SHW-M180W",
                "Model":"SHW-M180W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1",
                "labelname":"SGH-T859",
                "Model":"SGH-T859"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1 v",
                "labelname":"p3",
                "Model":"GT-P7100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 7.0 Plus",
                "labelname":"GT-P6200",
                "Model":"GT-P6200"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 7.0 Plus",
                "labelname":"SHW-M430W",
                "Model":"SHW-M430W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"GT-P7320",
                "Model":"GT-P7320"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"SGH-I957R",
                "Model":"SAMSUNG-SGH-I957R"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab Pro 10.1",
                "labelname":"picassolte",
                "Model":"SM-T525"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab Pro 8.4",
                "labelname":"mondrianwifi",
                "Model":"SM-T320X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab S 8.4",
                "labelname":"klimtlte",
                "Model":"SM-T705"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 10.1",
                "labelname":"espresso10rf",
                "Model":"GT-P5100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 7.0",
                "labelname":"espressorf",
                "Model":"GT-P3100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3",
                "labelname":"lt01wifikx",
                "Model":"SM-T310"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 7.0",
                "labelname":"lt023gdtv",
                "Model":"SM-T211M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 7.0",
                "labelname":"lt02wifilgt",
                "Model":"SM-T210L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 8.0",
                "labelname":"lt02lduwifi",
                "Model":"SM-T210X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 Lite 7.0",
                "labelname":"goyavewifi",
                "Model":"SM-T113"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 10.0",
                "labelname":"matisselteatt",
                "Model":"SAMSUNG-SM-T537A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 10.1",
                "labelname":"matissewifikx",
                "Model":"SM-T530"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degasltespr",
                "Model":"SM-T237P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degaswifibmwzc",
                "Model":"SM-T230NY"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 8.0",
                "labelname":"milletltektt",
                "Model":"SM-T335K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 Active",
                "labelname":"rubenslte",
                "Model":"SM-T365M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagallhltelgt",
                "Model":"SM-T805L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagalllteatt",
                "Model":"SAMSUNG-SM-T807A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagallwifi",
                "Model":"SM-T800X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 8.4",
                "labelname":"klimtwifikx",
                "Model":"SM-T700"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend Duos",
                "labelname":"kylepluschn",
                "Model":"GT-S7572"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend Plus",
                "labelname":"kylepro",
                "Model":"GT-S7580E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend3",
                "labelname":"cs02cmcc",
                "Model":"SM-G3508"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy U",
                "labelname":"SHW-M130L",
                "Model":"SHW-M130L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Win",
                "labelname":"delos3gcmcc",
                "Model":"GT-I8558"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Win Pro",
                "labelname":"wilcox3g",
                "Model":"SM-G3818"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Xcover",
                "labelname":"GT-S5690M",
                "Model":"GT-S5690M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y",
                "labelname":"GT-S5360T",
                "Model":"GT-S5360T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y Duos",
                "labelname":"GT-S6102E",
                "Model":"GT-S6102E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y Pro Duos",
                "labelname":"GT-B5512B",
                "Model":"GT-B5512B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young",
                "labelname":"royssdtv",
                "Model":"GT-S6313T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young2 Pro",
                "labelname":"young2ve3g",
                "Model":"SM-G130BU"
            },
            {
                "brandname":"Samsung",
                "marketname":"IceTouch",
                "labelname":"gokey",
                "Model":"YP-GH1"
            },
            {
                "brandname":"Samsung",
                "marketname":"Nexus S",
                "labelname":"crespo4g",
                "Model":"Nexus S 4G"
            },
            {
                "brandname":"Samsung",
                "marketname":"Samsung Galaxy S4",
                "labelname":"jflteMetroPCS",
                "Model":"SGH-M919N"
            },
            {
                "brandname":"Samsung",
                "marketname":"Transform",
                "labelname":"SPH-M920",
                "Model":"SPH-M920"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"SGH-I717",
                "Model":"SGH-I717"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Nexus",
                "labelname":"toroplus",
                "Model":"Galaxy Nexus"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Music Duos",
                "labelname":"ivory",
                "Model":"GT-S6012B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mini",
                "labelname":"SGH-T499Y",
                "Model":"SGH-T499Y"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy M Pro2",
                "labelname":"lucas",
                "Model":"GT-B7810"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy J1",
                "labelname":"j1nlte",
                "Model":"SM-J100MU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand2",
                "labelname":"ms01lte",
                "Model":"SM-G7105H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand",
                "labelname":"baffin3gduosctc",
                "Model":"SCH-I879"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Gio",
                "labelname":"SCH-i569",
                "Model":"SCH-i569"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fresh",
                "labelname":"kylevess",
                "Model":"GT-S7390"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevisvess",
                "Model":"GT-S6790"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevis3g",
                "Model":"GT-S6812i"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy E7",
                "labelname":"e7ltechn",
                "Model":"SM-E7000"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core",
                "labelname":"arubaslimss",
                "Model":"GT-I8260L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Centura",
                "labelname":"amazing3gtrf",
                "Model":"SCH-S738C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Camera",
                "labelname":"gd1lteskt",
                "Model":"EK-KC120S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Apollo",
                "labelname":"GT-I5800",
                "Model":"GT-I5800"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Alpha",
                "labelname":"slte",
                "Model":"SM-G850Y"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace3",
                "labelname":"loganrelte",
                "Model":"GT-S7275Y"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace3",
                "labelname":"logan",
                "Model":"GT-S7270L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace 4",
                "labelname":"vivaltods5m",
                "Model":"SM-G313HY"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S5838",
                "Model":"GT-S5838"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S5830D",
                "Model":"GT-S5830D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A7",
                "labelname":"a7ltechn",
                "Model":"SM-A7000"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5ulte",
                "Model":"SM-A500Y"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5lte",
                "Model":"SM-A500G"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3ltedd",
                "Model":"SM-A300G"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A",
                "labelname":"archer",
                "Model":"archer"
            },
            {
                "brandname":"Samsung",
                "marketname":"Europa",
                "labelname":"GT-I5500M",
                "Model":"GT-I5500M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Captivate Glide",
                "labelname":"SGH-I927",
                "Model":"SAMSUNG-SGH-I927"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young2",
                "labelname":"young2ds2g",
                "Model":"SM-G130E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Hennessy",
                "labelname":"hennessy3gduosctc",
                "Model":"SCH-W789"
            },
            {
                "brandname":"Samsung",
                "marketname":"Nexus 10",
                "labelname":"manta",
                "Model":"Nexus 10"
            },
            {
                "brandname":"Samsung",
                "marketname":"Roy VE DTV",
                "labelname":"royvedtv",
                "Model":"GT-S6293T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Sidekick",
                "labelname":"SGH-T839",
                "Model":"SGH-T839"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2tfnspr",
                "Model":"SCH-S960L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"m0",
                "Model":"GT-I9300T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"m3",
                "Model":"GT-I9305T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Mini",
                "labelname":"goldenlteatt",
                "Model":"SAMSUNG-SM-G730A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Neo",
                "labelname":"s3ve3gdd",
                "Model":"GT-I9300I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"SC-04E",
                "Model":"SC-04E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jflte",
                "Model":"GT-I9508C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jflterefreshspr",
                "Model":"SPH-L720T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jftdd",
                "Model":"GT-I9507V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Active",
                "labelname":"jactivelteatt",
                "Model":"SAMSUNG-SGH-I537"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranolte",
                "Model":"GT-I9195"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranoltekx",
                "Model":"SHV-E370D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranovolteatt",
                "Model":"SAMSUNG-SGH-I257"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"SCL23",
                "Model":"SCL23"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klteMetroPCS",
                "Model":"SM-G900T1"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"kltelra",
                "Model":"SM-G900R6"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"lentislteskt",
                "Model":"SM-G906S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 Mini",
                "labelname":"kmini3g",
                "Model":"SM-G800H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 mini",
                "labelname":"kminiwifi",
                "Model":"SM-G800X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zerofltebmc",
                "Model":"SM-G920W8"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zerofltespr",
                "Model":"SM-G920P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"zerolteatt",
                "Model":"SAMSUNG-SM-G925A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"zeroltetmo",
                "Model":"SM-G925T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Spica",
                "labelname":"spica",
                "Model":"GT-I5700"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Star2 Plus",
                "labelname":"higgs2g",
                "Model":"SM-G350E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"GT-P1000N",
                "Model":"GT-P1000N"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"SHW-M180K",
                "Model":"SHW-M180K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1",
                "labelname":"GT-P7510",
                "Model":"GT-P7510"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1",
                "labelname":"SHW-M380W",
                "Model":"SHW-M380W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 4 Active",
                "labelname":"rubenslte",
                "Model":"SM-T365"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 7.0 Plus",
                "labelname":"GT-P6211",
                "Model":"GT-P6211"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 7.7 Plus",
                "labelname":"SC-01E",
                "Model":"SC-01E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"SGH-I957D",
                "Model":"SGH-I957D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"SHV-E140S",
                "Model":"SHV-E140S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab Pro 12.2",
                "labelname":"v2wifi",
                "Model":"SM-T900X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab Q",
                "labelname":"q7",
                "Model":"SM-T2519"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab S 8.4",
                "labelname":"klimtwifi",
                "Model":"SM-T700"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 10.1",
                "labelname":"espresso10vzw",
                "Model":"SCH-I915"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 7.0",
                "labelname":"espressovzw",
                "Model":"SCH-i705"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 10.1",
                "labelname":"santos10wifi",
                "Model":"GT-P5210XD1"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 7.0",
                "labelname":"lt02ltetmo",
                "Model":"SM-T217T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 8.0",
                "labelname":"lt01lte",
                "Model":"SM-T315T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 Lite",
                "labelname":"goyawifi",
                "Model":"SM-T110"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4",
                "labelname":"matissewifigoogle",
                "Model":"SM-T530NN"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 10.1",
                "labelname":"matissevewifi",
                "Model":"SM-T533"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degas3g",
                "Model":"SM-T232"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degaswifi",
                "Model":"SM-T230"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 8.0",
                "labelname":"millet3g",
                "Model":"SM-T331"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 8.0",
                "labelname":"milletwifi",
                "Model":"SM-T330"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 Nook 10.1",
                "labelname":"matissewifiopenbnn",
                "Model":"SM-T530NU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagalllte",
                "Model":"SM-T805M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagalllteusc",
                "Model":"SM-T807R4"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 8.4",
                "labelname":"klimtlteatt",
                "Model":"SAMSUNG-SM-T707A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend",
                "labelname":"kyleve",
                "Model":"GT-S7392L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend Lite",
                "labelname":"kylevess",
                "Model":"GT-S7390"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend2",
                "labelname":"gardave3gcmcc",
                "Model":"GT-S7898I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend3",
                "labelname":"cs02ve3g",
                "Model":"SM-G3502I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy W",
                "labelname":"GT-I8150T",
                "Model":"GT-I8150T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Win",
                "labelname":"delosltelgt",
                "Model":"SHV-E500L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Win2",
                "labelname":"coreprimeltedtv",
                "Model":"SM-G360BT"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y",
                "labelname":"GT-S5360",
                "Model":"GT-S5360"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y",
                "labelname":"SCH-i509",
                "Model":"SCH-i509"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y Pro",
                "labelname":"GT-B5510B",
                "Model":"GT-B5510B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young",
                "labelname":"royss",
                "Model":"GT-S6310B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young2",
                "labelname":"young23gdtv",
                "Model":"SM-G130BT"
            },
            {
                "brandname":"Samsung",
                "marketname":"Gem",
                "labelname":"SCH-I100",
                "Model":"SCH-I100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Montblanc",
                "labelname":"montblanc3gctc",
                "Model":"SM-W2014"
            },
            {
                "brandname":"Samsung",
                "marketname":"Roy VE DTV",
                "labelname":"royssvedtv",
                "Model":"GT-S6293T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Samsung Homesync",
                "labelname":"spcwifiany",
                "Model":"GT-B9150"
            },
            {
                "brandname":"Samsung",
                "marketname":"olleh",
                "labelname":"ik1",
                "Model":"SMT-E5015"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranovelte",
                "Model":"GT-I9195I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Zoom",
                "labelname":"mprojectqlte",
                "Model":"SM-C105"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klte",
                "Model":"SM-G900MD"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"kltelgt",
                "Model":"SM-G900L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"lentisltelgt",
                "Model":"SM-G906L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 LTE-A",
                "labelname":"kccat6",
                "Model":"SM-G901F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 mini",
                "labelname":"kminilteatt",
                "Model":"SAMSUNG-SM-G800A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zeroflteatt",
                "Model":"SAMSUNG-SM-G920A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zeroflteskt",
                "Model":"SM-G920S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"zerolte",
                "Model":"SM-G925X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"zeroltespr",
                "Model":"SM-G925P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Spica",
                "labelname":"GT-I5700L",
                "Model":"GT-I5700L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Star Trios",
                "labelname":"mintts",
                "Model":"GT-S5283B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"GT-P1000M",
                "Model":"GT-P1000M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"SGH-T849",
                "Model":"SGH-T849"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1",
                "labelname":"GT-P7503",
                "Model":"GT-P7503"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1",
                "labelname":"SHW-M380S",
                "Model":"SHW-M380S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 4 8.0",
                "labelname":"milletwifikx",
                "Model":"SM-T330"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 7.0 Plus",
                "labelname":"GT-P6210",
                "Model":"GT-P6210"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"lentisltektt",
                "Model":"SM-G906K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klte",
                "Model":"SM-G900M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"m3",
                "Model":"GT-I9305"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2xar",
                "Model":"SCH-R530X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2can",
                "Model":"SGH-T999V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy J1",
                "labelname":"j1nlte",
                "Model":"SM-J100Y"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy E7",
                "labelname":"e7ltectc",
                "Model":"SM-E7009"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A7",
                "labelname":"a7ltechn",
                "Model":"SM-A700YD"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5ultektt",
                "Model":"SM-A500K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5lte",
                "Model":"SM-A500M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3lteslk",
                "Model":"SM-A300F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a33g",
                "Model":"SM-A300H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 7.7",
                "labelname":"SCH-I815",
                "Model":"SCH-I815"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"SGH-I957D",
                "Model":"SAMSUNG-SGH-I957D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"SHV-E140L",
                "Model":"SHV-E140L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab Pro 12.2",
                "labelname":"v2wifi",
                "Model":"SM-T900"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab Pro 8.4",
                "labelname":"mondrianwifiue",
                "Model":"SM-T320NU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab S 8.4",
                "labelname":"klimtltevzw",
                "Model":"SM-T707V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 10.1",
                "labelname":"espresso10tmo",
                "Model":"SGH-T779"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 7.0",
                "labelname":"espressovzw",
                "Model":"SCH-I705"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 10.1",
                "labelname":"santos10wifi",
                "Model":"GT-P5210"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 7.0",
                "labelname":"lt02ltespr",
                "Model":"SM-T217S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 8.0",
                "labelname":"lt01lte",
                "Model":"SM-T315"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 Lite",
                "labelname":"goya3g",
                "Model":"SM-T111M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3V 7.0",
                "labelname":"goyavewifixtc",
                "Model":"SM-T113NU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 10.0",
                "labelname":"matisseltevzw",
                "Model":"SM-T537V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degas3g",
                "Model":"SM-T231"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degasvelte",
                "Model":"SM-T239M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degaswifiue",
                "Model":"SM-T230NU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 8.0",
                "labelname":"milletltevzw",
                "Model":"SM-T337V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 Active",
                "labelname":"rubenswifichn",
                "Model":"SM-T360"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagalllte",
                "Model":"SM-T805"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagallltetmo",
                "Model":"SM-T807T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 8.4",
                "labelname":"klimtlte",
                "Model":"SM-T705M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend",
                "labelname":"kyleve",
                "Model":"GT-S7392"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend Duos",
                "labelname":"kyleve",
                "Model":"GT-S7562C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend2",
                "labelname":"garda3gcmcc",
                "Model":"GT-S7898"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend3",
                "labelname":"cs02ve3g",
                "Model":"SM-G3502C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy W",
                "labelname":"GT-I8150B",
                "Model":"GT-I8150B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Win",
                "labelname":"delos3gss",
                "Model":"GT-I8550E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Win Pro",
                "labelname":"wilcoxds",
                "Model":"SM-G3812"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Xcover2",
                "labelname":"skomer",
                "Model":"GT-S7710L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y",
                "labelname":"SCH-I509",
                "Model":"SCH-I509"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y Pro",
                "labelname":"GT-B5510",
                "Model":"GT-B5510"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young",
                "labelname":"royss",
                "Model":"GT-S6310"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young2",
                "labelname":"young23g",
                "Model":"SM-G130U"
            },
            {
                "brandname":"Samsung",
                "marketname":"Garda",
                "labelname":"gardalteMetroPCS",
                "Model":"SGH-T399N"
            },
            {
                "brandname":"Samsung",
                "marketname":"Moment",
                "labelname":"SPH-M900",
                "Model":"SPH-M900"
            },
            {
                "brandname":"Samsung",
                "marketname":"Repp",
                "labelname":"SCH-R680",
                "Model":"SCH-R680"
            },
            {
                "brandname":"Samsung",
                "marketname":"Samsung Homesync",
                "labelname":"spcwifi",
                "Model":"GT-B9150"
            },
            {
                "brandname":"Samsung",
                "marketname":"VinsQ(M910)",
                "labelname":"SPH-M910",
                "Model":"SPH-M910"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"ks01lte",
                "Model":"GT-I9506"
            },
            {
                "brandname":"Samsung",
                "marketname":"Captivate Glide",
                "labelname":"SGH-I927",
                "Model":"SGH-I927"
            },
            {
                "brandname":"Samsung",
                "marketname":"Europa",
                "labelname":"GT-I5503T",
                "Model":"GT-I5503T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3lte",
                "Model":"SM-A300F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3ltezh",
                "Model":"SM-A3000"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5lte",
                "Model":"SM-A500XZ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5ultelgt",
                "Model":"SM-A500L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A7",
                "labelname":"a7ltectc",
                "Model":"SM-A7009"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S5830F",
                "Model":"GT-S5830F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S5839i",
                "Model":"GT-S5839i"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace 4",
                "labelname":"vivaltods5m",
                "Model":"SM-G313M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Duos",
                "labelname":"SCH-I579",
                "Model":"SCH-i579"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Plus",
                "labelname":"GT-S7500T",
                "Model":"GT-S7500T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Style",
                "labelname":"heatqlte",
                "Model":"SM-G357FZ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace3",
                "labelname":"logan",
                "Model":"SCH-I679"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace3 Duos",
                "labelname":"loganlite3g",
                "Model":"GT-S7272C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace4",
                "labelname":"vivalto5mve3g",
                "Model":"SM-G316MY"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace4 Neo",
                "labelname":"vivalto3mve3gltn",
                "Model":"SM-G316ML"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Alpha",
                "labelname":"slteatt",
                "Model":"SAMSUNG-SM-G850A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Apollo",
                "labelname":"GT-I5800",
                "Model":"GT-I5800L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Beam",
                "labelname":"GT-I8250",
                "Model":"GT-I8250"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Camera",
                "labelname":"gd1ltevzw",
                "Model":"EK-GC120"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Chat",
                "labelname":"zanin",
                "Model":"GT-B5330"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core 2",
                "labelname":"kanas",
                "Model":"SM-G355H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Max",
                "labelname":"kleoslte",
                "Model":"SM-G5108"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Plus",
                "labelname":"cs02ve3gss",
                "Model":"SM-G350M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Prime",
                "labelname":"coreprimeltespr",
                "Model":"SM-G360P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Prime",
                "labelname":"rossaltexsa",
                "Model":"SM-G360GY"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core2",
                "labelname":"kanas3g",
                "Model":"SM-G3556D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy E5",
                "labelname":"e53g",
                "Model":"SM-E500H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy E7",
                "labelname":"e7ltehktw",
                "Model":"SM-E7000"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Exhibit",
                "labelname":"codinavid",
                "Model":"SGH-T599V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Express",
                "labelname":"expressziglteatt",
                "Model":"SAMSUNG-SGH-I437Z"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevis3gcmcc",
                "Model":"GT-S6818"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevisvess",
                "Model":"GT-S6790E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fresh",
                "labelname":"kylevess",
                "Model":"GT-S7390E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Gio",
                "labelname":"SHW-M290K",
                "Model":"SHW-M290K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand",
                "labelname":"baffincmcc",
                "Model":"GT-I9128"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand",
                "labelname":"baffinvektt",
                "Model":"SHV-E275K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Max",
                "labelname":"grandmaxltechn",
                "Model":"SM-G720AX"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Neo Plus",
                "labelname":"grandneove3g",
                "Model":"GT-I9060C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Prime",
                "labelname":"fortunalte",
                "Model":"SM-G5306W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Prime",
                "labelname":"fortunaltezt",
                "Model":"SM-G530MU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand2",
                "labelname":"ms013g",
                "Model":"SM-G7102"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand2",
                "labelname":"ms01lte",
                "Model":"SM-G7105L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy J",
                "labelname":"hltejs01tw",
                "Model":"SGH-N075T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy K",
                "labelname":"SHW-M130K",
                "Model":"SHW-M130K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy M Style",
                "labelname":"SHW-M340L",
                "Model":"SHW-M340L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 5.8",
                "labelname":"cratertd3g",
                "Model":"GT-I9158"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 6.3",
                "labelname":"meliusltecan",
                "Model":"SGH-I527M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega Plus",
                "labelname":"craterq3g",
                "Model":"GT-I9158P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mini",
                "labelname":"GT-S5570",
                "Model":"GT-S5570"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mini2",
                "labelname":"GT-S6500",
                "Model":"GT-S6500"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy NX",
                "labelname":"u0lte",
                "Model":"EK-GN120"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"GT-I9220",
                "Model":"GT-I9220"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"SGH-I717D",
                "Model":"SGH-I717D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"lt033g",
                "Model":"SM-P602"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4notelteskt",
                "Model":"SHV-E230S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4notewifi",
                "Model":"GT-N8013"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 8.0",
                "labelname":"kona3g",
                "Model":"GT-N5100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tbeltektt",
                "Model":"SM-N915K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tblte",
                "Model":"SM-N915X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tbltevzw",
                "Model":"SM-N915V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Pro 12.2",
                "labelname":"viennalteatt",
                "Model":"SAMSUNG-SM-P907A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t03gchnduos",
                "Model":"GT-N7102"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0lteatt",
                "Model":"SAMSUNG-SGH-I317"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0ltespr",
                "Model":"SPH-L900"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hlte",
                "Model":"SM-N9005"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hltektt",
                "Model":"SM-N900K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3 Duos",
                "labelname":"hlte",
                "Model":"SM-N9002"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3 Neo",
                "labelname":"hl3gds",
                "Model":"SM-N7502"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"tre3g",
                "Model":"SM-N910H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trlte",
                "Model":"SM-N910X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trltechnzh",
                "Model":"SM-N9100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Player 4",
                "labelname":"YP-GB1",
                "Model":"YP-GB1"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Player 50",
                "labelname":"YP-G50",
                "Model":"YP-G50"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"corsica",
                "Model":"GT-S5312"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"corsicass",
                "Model":"GT-S5310L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"d2aio",
                "Model":"SAMSUNG-SGH-I747Z"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket2",
                "labelname":"pocket23g",
                "Model":"SM-G110M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Prevail",
                "labelname":"SPH-M820",
                "Model":"SPH-M820-BST"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Q",
                "labelname":"SGH-T589W",
                "Model":"SGH-T589W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Rush",
                "labelname":"prevail2spr",
                "Model":"SPH-M830"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"GT-I9010",
                "Model":"GT-I9010"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"SGH-T959V",
                "Model":"SGH-T959V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Aviator",
                "labelname":"SCH-R930",
                "Model":"SCH-R930"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S DUOS",
                "labelname":"kyleopen",
                "Model":"GT-S7562L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Epic",
                "labelname":"SPH-D700",
                "Model":"SPH-D700"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Vibrant",
                "labelname":"SGH-T959D",
                "Model":"SGH-T959D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"GT-I9210T",
                "Model":"GT-I9210T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"SHW-M250L",
                "Model":"SHW-M250L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 Epic",
                "labelname":"SPH-D710VMUB",
                "Model":"SPH-D710VMUB"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 LTE",
                "labelname":"SGH-I727R",
                "Model":"SGH-I727R"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 X",
                "labelname":"SGH-T989D",
                "Model":"SGH-T989D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2cri",
                "Model":"SCH-R530C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2spr",
                "Model":"SPH-L710"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"m0",
                "Model":"GT-I9300"
            },
            {
                "brandname":"Samsung",
                "marketname":"Amazing",
                "labelname":"amazingtrf",
                "Model":"SGH-S730M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Europa",
                "labelname":"GT-I5500B",
                "Model":"GT-I5500B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy 070",
                "labelname":"hendrix",
                "Model":"YP-GI2"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3ltechn",
                "Model":"SM-A300X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a53g",
                "Model":"SM-A500H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5ltezt",
                "Model":"SM-A500YZ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A7",
                "labelname":"a7lte",
                "Model":"SM-A700FD"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S5830B",
                "Model":"GT-S5830B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S5830i",
                "Model":"GT-S5830i"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"heatlte",
                "Model":"SM-G357M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Duos",
                "labelname":"GT-S6802",
                "Model":"GT-S6802"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Plus",
                "labelname":"GT-S7500",
                "Model":"GT-S7500"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Style",
                "labelname":"heat3gtfnvzw",
                "Model":"SM-S766C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace2 X",
                "labelname":"kylessopen",
                "Model":"GT-S7560M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace3",
                "labelname":"loganrelte",
                "Model":"GT-S7275R"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace4",
                "labelname":"vivalto5mve3g",
                "Model":"SM-G316HU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace4 Lite",
                "labelname":"vivalto3g",
                "Model":"SM-G313H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Alpha",
                "labelname":"slte",
                "Model":"SM-G850M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Alpha",
                "labelname":"slteskt",
                "Model":"SM-G850S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Avant",
                "labelname":"afyonltetmo",
                "Model":"SM-G386T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Camera",
                "labelname":"gd1ktt",
                "Model":"EK-KC100K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Camera",
                "labelname":"u0lte",
                "Model":"EK-GN120"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core",
                "labelname":"arubaslim",
                "Model":"GT-I8262"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Lite",
                "labelname":"victorlte",
                "Model":"SM-G3586V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Plus",
                "labelname":"cs02ve3gdtv",
                "Model":"SM-G3502T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Prime",
                "labelname":"coreprimelte",
                "Model":"SM-G360M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Prime",
                "labelname":"rossaltectc",
                "Model":"SM-G3609"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core2",
                "labelname":"kanas",
                "Model":"SM-G355HQ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Discover",
                "labelname":"amazingtrfcd",
                "Model":"SCH-S735C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy E7",
                "labelname":"e7lte",
                "Model":"SM-E700F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Exhibit",
                "labelname":"codinaMetroPCS",
                "Model":"SGH-T599N"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Express",
                "labelname":"expresslte",
                "Model":"GT-I8730"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevis",
                "Model":"GT-S6810E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevisp",
                "Model":"GT-S6810M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fit",
                "labelname":"GT-S5670B",
                "Model":"GT-S5670B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Gio",
                "labelname":"GT-S5660M",
                "Model":"GT-S5660M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Golden",
                "labelname":"ks02lteskt",
                "Model":"SHV-E400S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand",
                "labelname":"baffinss",
                "Model":"GT-I9080E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Duos",
                "labelname":"baffin",
                "Model":"GT-I9082L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Neo",
                "labelname":"baffinq3g",
                "Model":"GT-I9168"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Prime",
                "labelname":"fortuna3gdtv",
                "Model":"SM-G530BT"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Prime",
                "labelname":"fortunaltezh",
                "Model":"SM-G5308W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand-Max",
                "labelname":"grandmaxltekx",
                "Model":"SM-G720N0"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand2",
                "labelname":"ms013gss",
                "Model":"SM-G710"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Indulge",
                "labelname":"SCH-R915",
                "Model":"SCH-R915"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy J1",
                "labelname":"j1lte",
                "Model":"SM-J100M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy K Zoom",
                "labelname":"m2altecan",
                "Model":"SM-C115W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 5.8",
                "labelname":"crater3gctc",
                "Model":"SCH-P709"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 6.3",
                "labelname":"meliuslteMetroPCS",
                "Model":"SGH-M819N"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 6.3",
                "labelname":"meliuslteusc",
                "Model":"SCH-R960"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega2",
                "labelname":"vastalte",
                "Model":"SM-G7508Q"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mini",
                "labelname":"SGH-T499",
                "Model":"SGH-T499"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Music",
                "labelname":"ivoryss",
                "Model":"GT-S6010L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Nexus",
                "labelname":"maguro",
                "Model":"Galaxy X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"SCH-i889",
                "Model":"SCH-i889"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"SHV-E160L",
                "Model":"SHV-E160L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4noteltektt",
                "Model":"SHV-E230K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4noterf",
                "Model":"GT-N8005"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 8",
                "labelname":"konalteatt",
                "Model":"SAMSUNG-SGH-I467"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 8.0",
                "labelname":"konawifiany",
                "Model":"SHW-M500W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tblte",
                "Model":"SM-N915FY"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tbltetmo",
                "Model":"SM-N915T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Pro 12.2",
                "labelname":"viennalte",
                "Model":"SM-P905"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t03g",
                "Model":"GT-N7100T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t03gcuduos",
                "Model":"GT-N7102i"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0ltektt",
                "Model":"SHV-E250K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"SCL22",
                "Model":"SCL22"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hlte",
                "Model":"SM-N900U"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hlteusc",
                "Model":"SM-N900R4"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3 Neo",
                "labelname":"hl3g",
                "Model":"SM-N750"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"tre3caltelgt",
                "Model":"SM-N916L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trhplte",
                "Model":"SM-N910U"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trltechn",
                "Model":"SM-N9106W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trltevzw",
                "Model":"SM-N910V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Player 5.8",
                "labelname":"harrisonkrktt",
                "Model":"YP-GP1"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket",
                "labelname":"GT-S5302B",
                "Model":"GT-S5302B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"corsicass",
                "Model":"GT-S5310E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"corsicaveds3gvj",
                "Model":"GT-S5312M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket SS",
                "labelname":"corsicave3g",
                "Model":"GT-S5310M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Premier",
                "labelname":"superior",
                "Model":"GT-I9260"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Proclaim",
                "labelname":"SCH-S720C",
                "Model":"SCH-S720C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Round",
                "labelname":"flteskt",
                "Model":"SM-G910S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"GT-I9003",
                "Model":"GT-I9003"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"SCH-S950C",
                "Model":"SCH-S950C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"loganlte",
                "Model":"GT-S7275"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Continuum",
                "labelname":"SCH-I400",
                "Model":"SCH-I400"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Duos2",
                "labelname":"kyleprods",
                "Model":"GT-S7582L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Stratosphere",
                "labelname":"SCH-I405",
                "Model":"SCH-I405"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"GT-I9100T",
                "Model":"GT-I9100T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"SGH-T989",
                "Model":"SGH-T989"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 Epic",
                "labelname":"SCH-R760",
                "Model":"SCH-R760"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 LTE",
                "labelname":"GT-I9210",
                "Model":"GT-I9210"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 Skyrocket",
                "labelname":"SGH-I727",
                "Model":"SGH-I727"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"c1skt",
                "Model":"SHV-E210S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2ltetmo",
                "Model":"SGH-T999L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2vmu",
                "Model":"SPH-L710"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"m0ctc",
                "Model":"SCH-I939"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Mini",
                "labelname":"golden",
                "Model":"GT-I8190"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Neo",
                "labelname":"s3ve3g",
                "Model":"GT-I9300I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Neo Plus",
                "labelname":"s3ve3g",
                "Model":"GT-I9308I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jaltelgt",
                "Model":"SHV-E300L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jfltecan",
                "Model":"SGH-M919V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jfltetmo",
                "Model":"SGH-M919"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"m3",
                "Model":"GT-I9305N"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 LTE-A",
                "labelname":"ks01lteskt",
                "Model":"SHV-E330S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranolte",
                "Model":"GT-I9197"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranoltevzw",
                "Model":"SCH-I435"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Zoom",
                "labelname":"mprojectlteskt",
                "Model":"SM-C105S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klte",
                "Model":"SM-G900F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"kltecan",
                "Model":"SM-G900W8"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klteusc",
                "Model":"SM-G900R4"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 Dual SIM",
                "labelname":"klte",
                "Model":"SM-G900FD"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 mini",
                "labelname":"kmini3g",
                "Model":"SM-G800HQ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zeroflte",
                "Model":"SM-G920X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zerofltektt",
                "Model":"SM-G920K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"SCV31",
                "Model":"SCV31"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"zeroltelgt",
                "Model":"SM-G925L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Spica",
                "labelname":"GT-I5700",
                "Model":"GT-I5700L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Star",
                "labelname":"mint",
                "Model":"GT-S5282"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"GT-P1000",
                "Model":"GT-P1000"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"GT-P1013",
                "Model":"GT-P1013"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"SMT-i9100",
                "Model":"SMT-i9100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1",
                "labelname":"SHW-M300W",
                "Model":"SHW-M300W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 3V 7.0",
                "labelname":"goyave3g5M",
                "Model":"SM-T116NY"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 7.0 Plus",
                "labelname":"GT-P6200L",
                "Model":"GT-P6200L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 7.7",
                "labelname":"GT-P6800",
                "Model":"GT-P6800"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"SCH-P739",
                "Model":"SCH-P739"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"SGH-I957R",
                "Model":"SGH-I957R"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab Pro 10.1",
                "labelname":"picassowifi",
                "Model":"SM-T520"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab Pro 8.4",
                "labelname":"mondrianwifikx",
                "Model":"SM-T320"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab S 8.4",
                "labelname":"klimtlte",
                "Model":"SM-T705C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 10.1",
                "labelname":"espresso10spr",
                "Model":"SPH-P500"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 7.0",
                "labelname":"espressorf",
                "Model":"GT-P3100B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 10.1",
                "labelname":"santos103g",
                "Model":"GT-P5200"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 7.0",
                "labelname":"lt02lte",
                "Model":"SM-T215"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 8.0",
                "labelname":"lt013g",
                "Model":"SM-T311"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 Kids",
                "labelname":"lt02kidswifi",
                "Model":"SM-T2105"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 VE 7.0",
                "labelname":"goyave3g",
                "Model":"SM-T116"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 10.0",
                "labelname":"matisselteusc",
                "Model":"SM-T537R4"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 10.1",
                "labelname":"matissewifiue",
                "Model":"SM-T530NU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degasltevzw",
                "Model":"SM-T237V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degaswifidtv",
                "Model":"SM-T230NT"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 8.0",
                "labelname":"milletltelgt",
                "Model":"SM-T335L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 Active",
                "labelname":"rubensltekx",
                "Model":"SM-T365F0"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagallhlteskt",
                "Model":"SM-T805S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagallltecan",
                "Model":"SM-T805W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagallwifikx",
                "Model":"SM-T800"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tap Pro 10.1",
                "labelname":"picassolte",
                "Model":"SM-T525"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend Duos",
                "labelname":"kyleve",
                "Model":"GT-S7390"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend Plus",
                "labelname":"kylepro",
                "Model":"GT-S7580L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend3",
                "labelname":"cs02ctc",
                "Model":"SM-G3509"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Victory",
                "labelname":"goghspr",
                "Model":"SPH-L300"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Win",
                "labelname":"delos3gduosctc",
                "Model":"SCH-I869"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Win Pro",
                "labelname":"wilcoxctc",
                "Model":"SM-G3819"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Xcover",
                "labelname":"GT-S5690R",
                "Model":"GT-S5690R"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y",
                "labelname":"GT-S5363",
                "Model":"GT-S5363"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y Plus",
                "labelname":"coriplusds",
                "Model":"GT-S5303"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y TV",
                "labelname":"GT-S5367",
                "Model":"GT-S5367"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young",
                "labelname":"royssnfc",
                "Model":"GT-S6310N"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy player 70 Plus",
                "labelname":"YP-GB70D",
                "Model":"YP-GB70D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Illusion",
                "labelname":"SCH-I110",
                "Model":"SCH-I110"
            },
            {
                "brandname":"Samsung",
                "marketname":"ProXpress M4580",
                "labelname":"fiber-athena",
                "Model":"samsung-printer-tablet"
            },
            {
                "brandname":"Samsung",
                "marketname":"Samsung Galaxy S4 Zoom",
                "labelname":"mprojectltektt",
                "Model":"SM-C105K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Transform Ultra",
                "labelname":"SPH-M930",
                "Model":"SPH-M930"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Mini",
                "labelname":"golden",
                "Model":"GT-I8190T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Neo",
                "labelname":"s3ve3g",
                "Model":"GT-I9301Q"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Slim",
                "labelname":"wilcoxds",
                "Model":"SM-G3812B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jflte",
                "Model":"GT-I9508"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jfltelra",
                "Model":"SCH-I545L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jftdd",
                "Model":"GT-I9507"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Active",
                "labelname":"jactivelte",
                "Model":"GT-I9295"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranods",
                "Model":"GT-I9192"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranoltektt",
                "Model":"SHV-E370K"
            },
            {
                "brandname":"Samsung",
                "marketname":"China Telecom",
                "labelname":"kylevectc",
                "Model":"SCH-I699I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Europa",
                "labelname":"GT-I5510L",
                "Model":"GT-I5510L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3lte",
                "Model":"SM-A300M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3ltezt",
                "Model":"SM-A300YZ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5ltechn",
                "Model":"SM-A5000"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5ulteskt",
                "Model":"SM-A500F1"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A7",
                "labelname":"a7ltektt",
                "Model":"SM-A700K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S5830G",
                "Model":"GT-S5830G"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S6358",
                "Model":"GT-S6358"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace 4",
                "labelname":"vivaltods5m",
                "Model":"SM-G313MY"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Duos",
                "labelname":"SCH-I589",
                "Model":"SCH-I589"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Plus",
                "labelname":"GT-S7500W",
                "Model":"GT-S7500W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace2",
                "labelname":"GT-I8160",
                "Model":"GT-I8160"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace3",
                "labelname":"logan3gcmcc",
                "Model":"GT-S7278"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace3 Duos",
                "labelname":"loganu3gcmcc",
                "Model":"GT-S7278U"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace4",
                "labelname":"vivaltolte",
                "Model":"SM-G313F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Admire",
                "labelname":"SCH-R820",
                "Model":"SCH-R820"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Alpha",
                "labelname":"sltecan",
                "Model":"SM-G850W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Apollo",
                "labelname":"GT-I5800D",
                "Model":"GT-I5800D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Beam",
                "labelname":"GT-I8530",
                "Model":"GT-I8530"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Camera",
                "labelname":"gd1skt",
                "Model":"EK-KC100S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Chat",
                "labelname":"zanin",
                "Model":"GT-B5330B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Advance",
                "labelname":"cane3g",
                "Model":"GT-I8580"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Max Duos",
                "labelname":"kleoslte",
                "Model":"SM-G5108Q"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Prime",
                "labelname":"core33g",
                "Model":"SM-G360H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Acclaim",
                "labelname":"SCH-R880",
                "Model":"SCH-R880"
            },
            {
                "brandname":"Samsung",
                "marketname":"DoubleTime",
                "labelname":"SGH-I857",
                "Model":"SAMSUNG-SGH-I857"
            },
            {
                "brandname":"Samsung",
                "marketname":"GALAXY Camera",
                "labelname":"gd1",
                "Model":"EK-GC100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3lte",
                "Model":"SM-A300YZ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3ulte",
                "Model":"SM-A300XU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5ltectc",
                "Model":"SM-A5009"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A7",
                "labelname":"a73g",
                "Model":"SM-A700H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A7",
                "labelname":"a7lteskt",
                "Model":"SM-A700S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S5830M",
                "Model":"GT-S5830M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"SHW-M240S",
                "Model":"SHW-M240S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Advance",
                "labelname":"GT-S6800",
                "Model":"GT-S6800"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Duos",
                "labelname":"SCH-i579",
                "Model":"SCH-i579"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Q",
                "labelname":"SGH-I827D",
                "Model":"SGH-I827D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace2",
                "labelname":"GT-I8160P",
                "Model":"GT-I8160P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace3",
                "labelname":"loganlte",
                "Model":"GT-S7275"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace4",
                "labelname":"vivalto3g",
                "Model":"SM-G313ML"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace4",
                "labelname":"vivaltonfc3g",
                "Model":"SM-G313HN"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Alpha",
                "labelname":"slte",
                "Model":"SM-G850F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Alpha",
                "labelname":"sltektt",
                "Model":"SM-G850K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Appeal",
                "labelname":"SGH-I827",
                "Model":"SAMSUNG-SGH-I827"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Camera",
                "labelname":"gd1att",
                "Model":"SAMSUNG-EK-GC100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Camera",
                "labelname":"gd1wifiany",
                "Model":"EK-GC110"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core",
                "labelname":"afyonlteMetroPCS",
                "Model":"SM-G386T1"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core LTE",
                "labelname":"afyonlte",
                "Model":"SM-G386F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Plus",
                "labelname":"cs023g",
                "Model":"SM-G3502"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Prime",
                "labelname":"coreprimelte",
                "Model":"SM-G360F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Prime",
                "labelname":"rossalte",
                "Model":"SM-G3606"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Safe",
                "labelname":"arubaslimss",
                "Model":"SHW-M585D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core2",
                "labelname":"kanas3gnfc",
                "Model":"SM-G355HN"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy E5",
                "labelname":"e5ltetw",
                "Model":"SM-E500YZ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Europa",
                "labelname":"GT-I5508",
                "Model":"GT-I5508"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Express",
                "labelname":"expressatt",
                "Model":"SAMSUNG-SGH-I437"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevis",
                "Model":"GT-S6810"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevisds",
                "Model":"GT-S6812B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame Lite Duos",
                "labelname":"nevisw",
                "Model":"GT-S6792L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Gio",
                "labelname":"GT-S5660B",
                "Model":"GT-S5660B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Golden",
                "labelname":"ks02lte",
                "Model":"GT-I9235"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand",
                "labelname":"baffinlteskt",
                "Model":"SHV-E270S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand",
                "labelname":"baffinvetd3g",
                "Model":"GT-I9128I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Neo",
                "labelname":"baffinlite",
                "Model":"GT-I9082C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Neo+",
                "labelname":"baffinq3gduosctc",
                "Model":"SCH-I879E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Prime",
                "labelname":"fortunalte",
                "Model":"SM-G530M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Prime",
                "labelname":"grandprimelteaio",
                "Model":"SAMSUNG-SM-G530AZ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand2",
                "labelname":"ms013g",
                "Model":"SM-G7109"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand2",
                "labelname":"ms01lteskt",
                "Model":"SM-G710S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy J1",
                "labelname":"j1lte",
                "Model":"SM-J100F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy K Zoom",
                "labelname":"m2alte",
                "Model":"SM-C115"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 2",
                "labelname":"mega23g",
                "Model":"SM-G750H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 6.3",
                "labelname":"melius3gduosctc",
                "Model":"SCH-P729"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 6.3",
                "labelname":"meliuslteskt",
                "Model":"SHV-E310S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega2",
                "labelname":"mega2lteatt",
                "Model":"SAMSUNG-SM-G750A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mini",
                "labelname":"GT-S5570L",
                "Model":"GT-S5570L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mini2",
                "labelname":"GT-S6500T",
                "Model":"GT-S6500T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Neo",
                "labelname":"SHW-M220L",
                "Model":"SHW-M220L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"GT-N7005",
                "Model":"GT-N7005"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"SGH-T879",
                "Model":"SGH-T879"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"lt03lteskt",
                "Model":"SM-P605S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4noteltevzw",
                "Model":"SCH-I925"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4notewifiktt",
                "Model":"SHW-M485W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 8.0",
                "labelname":"konaltecan",
                "Model":"SGH-I467M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tblte",
                "Model":"SM-N9150"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tbltechn",
                "Model":"SM-N9150"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Pro 12.2",
                "labelname":"v1awifi",
                "Model":"SM-P900"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"SC-02E",
                "Model":"SC-02E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t03gctc",
                "Model":"SCH-N719"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0ltecmcc",
                "Model":"GT-N7108D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0ltevzw",
                "Model":"SCH-I605"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hlte",
                "Model":"SM-N9008V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hltespr",
                "Model":"SM-N900P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3 Neo",
                "labelname":"frescoltelgt",
                "Model":"SM-N750L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3 Neo",
                "labelname":"hllte",
                "Model":"SM-N7507"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"treltelgt",
                "Model":"SM-N910L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trltecan",
                "Model":"SM-N910W8"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trltetmo",
                "Model":"SM-N910T2"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Player 5",
                "labelname":"YP-G70",
                "Model":"YP-G70"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket",
                "labelname":"GT-S5300L",
                "Model":"GT-S5300L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"corsicass",
                "Model":"GT-S5310"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"corsicave3g",
                "Model":"GT-S5310N"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Plus",
                "labelname":"coriplus",
                "Model":"GT-S5301L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pop (CDMA)",
                "labelname":"SCH-i559",
                "Model":"SCH-i559"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pro",
                "labelname":"GT-B7510B",
                "Model":"GT-B7510B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy R-Style",
                "labelname":"jaguars",
                "Model":"SHV-E170S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"GT-I9000M",
                "Model":"GT-I9000M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"SC-02B",
                "Model":"SC-02B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"SHW-M190S",
                "Model":"SHW-M190S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Captivate",
                "labelname":"SGH-I896",
                "Model":"SAMSUNG-SGH-I896"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Duos",
                "labelname":"kyletdcmcc",
                "Model":"GT-S7568"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Lightray",
                "labelname":"SCH-R940",
                "Model":"SCH-R940"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"GT-I9100M",
                "Model":"GT-I9100M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"SGH-I777",
                "Model":"SAMSUNG-SGH-I777"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 Duos",
                "labelname":"SCH-i929",
                "Model":"SCH-i929"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 HD LTE",
                "labelname":"SHV-E120L",
                "Model":"SHV-E120L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 Plus",
                "labelname":"s2vep",
                "Model":"GT-I9105P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"c1ktt",
                "Model":"SHV-E210K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2lteMetroPCS",
                "Model":"SGH-T999N"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2tmo",
                "Model":"SGH-T999"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"m0chn",
                "Model":"GT-I9300"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"m3dcm",
                "Model":"SC-03E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Mini",
                "labelname":"goldenltevzw",
                "Model":"SM-G730V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Neo",
                "labelname":"s3ve3gdsdd",
                "Model":"GT-I9300I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"ja3gduosctc",
                "Model":"SCH-I959"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jflteatt",
                "Model":"SAMSUNG-SGH-I337"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jfltetfnatt",
                "Model":"SM-S975L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jfvelte",
                "Model":"GT-I9515L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Active",
                "labelname":"jactivelteskt",
                "Model":"SHV-E470S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranolte",
                "Model":"GT-I9195T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranoltespr",
                "Model":"SPH-L520"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Zoom",
                "labelname":"mprojectlteatt",
                "Model":"SAMSUNG-SM-C105A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klte",
                "Model":"SM-G9008W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klteaio",
                "Model":"SAMSUNG-SM-G900AZ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"kltespr",
                "Model":"SM-G900P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 Active",
                "labelname":"klteattactive",
                "Model":"SAMSUNG-SM-G870A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 Mini",
                "labelname":"kminilte",
                "Model":"SM-G800Y"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zeroflte",
                "Model":"SM-G920F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zerofltechn",
                "Model":"SM-G9208"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zeroflteusc",
                "Model":"SM-G920R4"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"zeroltechn",
                "Model":"SM-G9250"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"zeroltevzw",
                "Model":"SM-G925V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Spica",
                "labelname":"spica",
                "Model":"GT-I5700R"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Stellar",
                "labelname":"jaspervzw",
                "Model":"SCH-I200PP"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"GT-P1000T",
                "Model":"GT-P1000T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"SHW-M180S",
                "Model":"SHW-M180S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1",
                "labelname":"SCH-I905",
                "Model":"SCH-I905"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1 N",
                "labelname":"GT-P7511",
                "Model":"GT-P7511"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 7.0",
                "labelname":"SPH-P100",
                "Model":"SPH-P100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 7.0 Plus",
                "labelname":"SGH-T869",
                "Model":"SGH-T869"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"GT-P7310",
                "Model":"GT-P7310"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"SGH-I957M",
                "Model":"SGH-I957M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab Plus 7.0",
                "labelname":"goyave3gsea",
                "Model":"SM-T116BU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab Pro 8.4",
                "labelname":"mondrianwifi",
                "Model":"SM-T320"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab S 8.4",
                "labelname":"SC-03G",
                "Model":"SC-03G"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 10.1",
                "labelname":"espresso10can",
                "Model":"SGH-I497"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 10.1",
                "labelname":"espresso10wifi",
                "Model":"GT-P5113"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 7.0",
                "labelname":"espressowifi",
                "Model":"GT-P3113"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 7.0",
                "labelname":"lt023g",
                "Model":"SM-T212"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 7.0",
                "labelname":"lt02wifi",
                "Model":"SM-T210R"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 8.0",
                "labelname":"lt01wifi",
                "Model":"SM-T310X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 Lite 7.0",
                "labelname":"goyave3g",
                "Model":"SM-T116NQ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 10.0",
                "labelname":"matisselte",
                "Model":"SM-T535"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 10.1",
                "labelname":"matissewifi",
                "Model":"SM-T530X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degaslte",
                "Model":"SM-T235Y"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degaswifi",
                "Model":"SM-T230X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 8.0",
                "labelname":"milletlteatt",
                "Model":"SAMSUNG-SM-T337A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 Active",
                "labelname":"rubenslte",
                "Model":"SM-T365"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagallhltektt",
                "Model":"SM-T805K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagalllte",
                "Model":"SM-T807"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagallwifi",
                "Model":"SM-T800"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 8.4",
                "labelname":"klimtwifi",
                "Model":"SM-T700"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend Duos",
                "labelname":"kyleichn",
                "Model":"GT-S7562i"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend Plus",
                "labelname":"kylepro",
                "Model":"GT-S7580"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend3",
                "labelname":"cs023g",
                "Model":"SM-G3502U"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend3",
                "labelname":"cs02ve3g",
                "Model":"SM-G3509I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy W",
                "labelname":"q7lteskt",
                "Model":"SM-T255S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Win Duos",
                "labelname":"delos3gchn",
                "Model":"GT-I8552"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Xcover",
                "labelname":"GT-S5690L",
                "Model":"GT-S5690L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y",
                "labelname":"GT-S5360L",
                "Model":"GT-S5360L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y Duos",
                "labelname":"GT-S6102B",
                "Model":"GT-S6102B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y Pro Duos",
                "labelname":"GT-B5512",
                "Model":"GT-B5512"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young",
                "labelname":"royss",
                "Model":"GT-S6310T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young2",
                "labelname":"young2nfc3g",
                "Model":"SM-G130HN"
            },
            {
                "brandname":"Samsung",
                "marketname":"Homesync",
                "labelname":"spcwifi",
                "Model":"GT-B9150"
            },
            {
                "brandname":"Samsung",
                "marketname":"Nexus S",
                "labelname":"crespo",
                "Model":"Nexus S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Rugby Smart",
                "labelname":"SGH-I847",
                "Model":"SAMSUNG-SGH-I847"
            },
            {
                "brandname":"Samsung",
                "marketname":"Transfix",
                "labelname":"SCH-R730",
                "Model":"SCH-R730"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Prime",
                "labelname":"coreprimeltetfnvzw",
                "Model":"SM-S820L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Safe",
                "labelname":"arubaslimss",
                "Model":"GT-I8260E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core2",
                "labelname":"kanas3gcmcc",
                "Model":"SM-G3558"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy E5",
                "labelname":"e5lte",
                "Model":"SM-E500F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Europa",
                "labelname":"GT-I5500",
                "Model":"GT-I5500"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Exhibit2",
                "labelname":"SGH-T679",
                "Model":"SGH-T679"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Express2",
                "labelname":"wilcoxlte",
                "Model":"SM-G3815"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevis3gcmcc",
                "Model":"GT-S6818V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevisvess",
                "Model":"GT-S6790L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fresh",
                "labelname":"kylevess",
                "Model":"GT-S7390G"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Gio",
                "labelname":"SHW-M290S",
                "Model":"SHW-M290S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand",
                "labelname":"baffincmcc",
                "Model":"GT-I9128V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand",
                "labelname":"baffinveskt",
                "Model":"SHV-E275S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Neo",
                "labelname":"baffinlite",
                "Model":"GT-I9060"
            },
            {
                "brandname":"Samsung",
                "marketname":"VinsQ",
                "labelname":"SPH-M910",
                "Model":"SPH-M910"
            },
            {
                "brandname":"Samsung",
                "marketname":"Replenish",
                "labelname":"SPH-M580BST",
                "Model":"SPH-M580BST"
            },
            {
                "brandname":"Samsung",
                "marketname":"Infuse",
                "labelname":"SGH-I997R",
                "Model":"SAMSUNG-SGH-I997R"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young2",
                "labelname":"young23g",
                "Model":"SM-G130M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young",
                "labelname":"roydtv",
                "Model":"GT-S6313T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y Pop",
                "labelname":"GT-S6108",
                "Model":"GT-S6108"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y",
                "labelname":"GT-S5369",
                "Model":"GT-S5369"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Win",
                "labelname":"delos3geur",
                "Model":"GT-I8552B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy W",
                "labelname":"GT-I8150",
                "Model":"GT-I8150"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1",
                "labelname":"GT-P7500D",
                "Model":"GT-P7500D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"SCH-I800",
                "Model":"SCH-I800"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Star Plus",
                "labelname":"logan2g",
                "Model":"GT-S7262"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"zerolte",
                "Model":"SM-G925I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zerofltemtr",
                "Model":"SM-G920T1"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"kwifi",
                "Model":"SM-G900X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"kltektt",
                "Model":"SM-G900K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klte",
                "Model":"SM-G900I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"ks01ltelgt",
                "Model":"SHV-E330L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jfltevzw",
                "Model":"SCH-I545"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jfltecsp",
                "Model":"SCH-R970X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jflte",
                "Model":"GT-I9505"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Mini",
                "labelname":"golden",
                "Model":"GT-I8190N"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"m0skt",
                "Model":"SHW-M440S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2vzw",
                "Model":"SCH-I535PP"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2spi",
                "Model":"SCH-L710"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2can",
                "Model":"SGH-I747M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 Epic",
                "labelname":"SPH-D710BST",
                "Model":"SPH-D710BST"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"SHW-M250K",
                "Model":"SHW-M250K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"GT-I9108",
                "Model":"GT-I9108"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Advance",
                "labelname":"GT-I9070P",
                "Model":"GT-I9070P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"SGH-I897",
                "Model":"SAMSUNG-SGH-I897"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"GT-I9008L",
                "Model":"GT-I9008L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Rugby Pro",
                "labelname":"comancheatt",
                "Model":"SAMSUNG-SGH-I547"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Q",
                "labelname":"SGH-T589R",
                "Model":"SGH-T589R"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket",
                "labelname":"coriplusds",
                "Model":"GT-S5303"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Player 3.6",
                "labelname":"YP-GS1",
                "Model":"YP-GS1"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trltechn",
                "Model":"SM-N9109W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trlte",
                "Model":"SM-N910G"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"htdlte",
                "Model":"SM-N9007"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hltecan",
                "Model":"SM-N900W8"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"ha3g",
                "Model":"SM-N9000Q"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0lteskt",
                "Model":"SHV-E250S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0lte",
                "Model":"GT-N7105T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"lt033g",
                "Model":"SM-P601"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Neo Plus",
                "labelname":"grandneove3g",
                "Model":"GT-I9060I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Prime",
                "labelname":"fortunalte",
                "Model":"SM-G5308W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Prime",
                "labelname":"fortunaltezt",
                "Model":"SM-G530Y"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand2",
                "labelname":"ms013g",
                "Model":"SM-G7106"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand2",
                "labelname":"ms01ltektt",
                "Model":"SM-G710K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy J1",
                "labelname":"j13g",
                "Model":"SM-J100H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy K Zoom",
                "labelname":"m2a3g",
                "Model":"SM-C111"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy M Style",
                "labelname":"SHW-M340S",
                "Model":"SHW-M340S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 6.3",
                "labelname":"melius3g",
                "Model":"GT-I9200"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 6.3",
                "labelname":"meliusltektt",
                "Model":"SHV-E310K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega Plus",
                "labelname":"megapluslte",
                "Model":"GT-I9158V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Baffin",
                "labelname":"baffinltelgt",
                "Model":"SHV-E270L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Europa",
                "labelname":"GT-I5500L",
                "Model":"GT-I5500L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A",
                "labelname":"archer",
                "Model":"SHW-M100S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3ltectc",
                "Model":"SM-A3009"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5lte",
                "Model":"SM-A500F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5ulte",
                "Model":"SM-A500FU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A7",
                "labelname":"a7lte",
                "Model":"SM-A700X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S5830C",
                "Model":"GT-S5830C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S5831i",
                "Model":"GT-S5831i"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace 4",
                "labelname":"vivaltods5m",
                "Model":"SM-G313HU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Duos",
                "labelname":"GT-S6802B",
                "Model":"GT-S6802B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Plus",
                "labelname":"GT-S7500L",
                "Model":"GT-S7500L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Style",
                "labelname":"heatnfc3g",
                "Model":"SM-G310HN"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace3",
                "labelname":"logan",
                "Model":"GT-S7270"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace3",
                "labelname":"loganrelte",
                "Model":"GT-S7275T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace4",
                "labelname":"vivalto5mve3g",
                "Model":"SM-G316M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace4 Lite",
                "labelname":"vivalto3mve3gltn",
                "Model":"SM-G316U"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Alpha",
                "labelname":"slte",
                "Model":"SM-G850X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Amp",
                "labelname":"kyleatt",
                "Model":"SAMSUNG-SGH-I407"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Axiom",
                "labelname":"infiniteusc",
                "Model":"SCH-R830"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Camera",
                "labelname":"gd1ltelgt",
                "Model":"EK-KC120L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Camera 2",
                "labelname":"sf2wifi",
                "Model":"EK-GC200"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core",
                "labelname":"arubaslimss",
                "Model":"GT-I8260"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Lite",
                "labelname":"victorlte",
                "Model":"SM-G3589W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Plus",
                "labelname":"cs02ve3gss",
                "Model":"SM-G350L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Prime",
                "labelname":"coreprimelteaio",
                "Model":"SAMSUNG-SM-G360AZ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core2",
                "labelname":"kanas",
                "Model":"SM-G355M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Duos",
                "labelname":"aruba3gcmcc",
                "Model":"GT-I8268"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy E7",
                "labelname":"e7lte",
                "Model":"SM-E700M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Exhibit",
                "labelname":"codinatmo",
                "Model":"SGH-T599"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Express",
                "labelname":"expresslte",
                "Model":"GT-I8730T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevis",
                "Model":"GT-S6810L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevisp",
                "Model":"GT-S6810P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fit",
                "labelname":"GT-S5670L",
                "Model":"GT-S5670L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Gio",
                "labelname":"GT-S5660V",
                "Model":"GT-S5660V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Golden 2",
                "labelname":"pateklte",
                "Model":"SM-W2015"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand",
                "labelname":"baffinss",
                "Model":"GT-I9080L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Max",
                "labelname":"grandmaxltechn",
                "Model":"SM-G7200"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Neo",
                "labelname":"baffinq3g",
                "Model":"GT-I9168I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand2",
                "labelname":"ms01lte",
                "Model":"SM-G7105"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Infinite",
                "labelname":"infinite3gduosctc",
                "Model":"SCH-I759"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy J1",
                "labelname":"j1nlte",
                "Model":"SM-J100FN"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy K Zoom",
                "labelname":"m2altelgt",
                "Model":"SM-C115L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 5.8",
                "labelname":"craterss",
                "Model":"GT-I9150"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega 6.3",
                "labelname":"meliuslteatt",
                "Model":"SAMSUNG-SGH-I527"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega Plus",
                "labelname":"craterq3g",
                "Model":"GT-I9152P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mega2",
                "labelname":"vastaltezh",
                "Model":"SM-G7508Q"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mini",
                "labelname":"SGH-T499V",
                "Model":"SGH-T499V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Music Duos",
                "labelname":"ivory",
                "Model":"GT-S6012"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Nexus",
                "labelname":"toro",
                "Model":"Galaxy Nexus"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"SGH-I717",
                "Model":"SAMSUNG-SGH-I717"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"SHV-E160S",
                "Model":"SHV-E160S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4noteltelgt",
                "Model":"SHV-E230L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4noterfktt",
                "Model":"SHW-M480K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"SCL24",
                "Model":"SCL24"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tblte",
                "Model":"SM-N915G"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tblteusc",
                "Model":"SM-N915R4"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Pro 12.2",
                "labelname":"viennalte",
                "Model":"SM-P905M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t03gchn",
                "Model":"GT-N7100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0lte",
                "Model":"GT-N7105"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0ltelgt",
                "Model":"SHV-E250L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"ha3g",
                "Model":"SM-N900"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hlteatt",
                "Model":"SAMSUNG-SM-N900A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hltevzw",
                "Model":"SM-N900V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3 Neo",
                "labelname":"hl3g",
                "Model":"SM-N7500Q"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"tre3calteskt",
                "Model":"SM-N916S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trlte",
                "Model":"SM-N910F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trltechn",
                "Model":"SM-N9108V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Player",
                "labelname":"YP-GB70",
                "Model":"YP-GB70"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Player 5.8",
                "labelname":"harrisonkrlgt",
                "Model":"YP-GP1"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket",
                "labelname":"coriplus",
                "Model":"GT-S5301"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"corsicass",
                "Model":"GT-S5310G"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket2",
                "labelname":"pocket23g",
                "Model":"SM-G110B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Premier",
                "labelname":"superiorcmcc",
                "Model":"GT-I9268"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Q",
                "labelname":"SGH-T589",
                "Model":"SGH-T589"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Rugby",
                "labelname":"comanchecan",
                "Model":"SGH-I547C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"GT-I9003L",
                "Model":"GT-I9003L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"SCH-i909",
                "Model":"SCH-i909"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Advance",
                "labelname":"GT-I9070",
                "Model":"GT-I9070"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S DUOS",
                "labelname":"kyleopen",
                "Model":"GT-S7562"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Duos3",
                "labelname":"vivalto3gvn",
                "Model":"SM-G313HZ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Vibrant",
                "labelname":"SGH-T959",
                "Model":"SGH-T959"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"GT-I9103",
                "Model":"GT-I9103"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"SHV-E110S",
                "Model":"SHV-E110S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 Epic",
                "labelname":"SPH-D710",
                "Model":"SPH-D710"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 LTE",
                "labelname":"SC-03D",
                "Model":"SC-03D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 Wimax",
                "labelname":"ISW11SC",
                "Model":"ISW11SC"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2att",
                "Model":"SAMSUNG-SGH-I747"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2mtr",
                "Model":"SCH-R530M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2vzw",
                "Model":"SCH-I535"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"m0ctcduos",
                "Model":"SCH-I939D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Mini",
                "labelname":"golden",
                "Model":"GT-I8190L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Neo",
                "labelname":"s3ve3g",
                "Model":"GT-I9301I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3 Progre",
                "labelname":"SCL21",
                "Model":"SCL21"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jalteskt",
                "Model":"SHV-E300S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jfltecri",
                "Model":"SCH-R970C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"jflteusc",
                "Model":"SCH-R970"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4",
                "labelname":"ks01ltektt",
                "Model":"SHV-E330K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serrano3g",
                "Model":"GT-I9190"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranoltebmc",
                "Model":"SGH-I257M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S4 Mini",
                "labelname":"serranove3g",
                "Model":"GT-I9192I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klte",
                "Model":"SM-G900FQ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"klteduoszn",
                "Model":"SM-G9006W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5",
                "labelname":"kltevzw",
                "Model":"SM-G900V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 K Sport",
                "labelname":"kltesprsports",
                "Model":"SM-G860P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S5 mini",
                "labelname":"kminilte",
                "Model":"SM-G800M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zeroflteaio",
                "Model":"SAMSUNG-SM-G920AZ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6",
                "labelname":"zerofltelgt",
                "Model":"SM-G920L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"zerolte",
                "Model":"SM-G925F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S6 Edge",
                "labelname":"zerolteskt",
                "Model":"SM-G925S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Spica",
                "labelname":"GT-I5700",
                "Model":"GT-I5700R"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Star",
                "labelname":"mintss",
                "Model":"GT-S5280"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"GT-P1000L",
                "Model":"GT-P1000L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab",
                "labelname":"SC-01C",
                "Model":"SC-01C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1",
                "labelname":"GT-P7500",
                "Model":"GT-P7500"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 10.1",
                "labelname":"SHW-M380K",
                "Model":"SHW-M380K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 4 8.0",
                "labelname":"milletwifi",
                "Model":"SM-T330X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 7.0 Plus",
                "labelname":"GT-P6201",
                "Model":"GT-P6201"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 7.7",
                "labelname":"GT-P6810",
                "Model":"GT-P6810"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"SGH-I957",
                "Model":"SAMSUNG-SGH-I957"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab 8.9",
                "labelname":"SHV-E140K",
                "Model":"SHV-E140K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab Pro 12.2",
                "labelname":"v2lte",
                "Model":"SM-T905"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab Pro 8.4",
                "labelname":"mondrianwifiue",
                "Model":"SM-T320"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab S 8.4",
                "labelname":"klimtlte",
                "Model":"SM-T705Y"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab2 7.0",
                "labelname":"espressorf",
                "Model":"GT-P3105"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 10.1",
                "labelname":"santos10lte",
                "Model":"GT-P5220"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 7.0",
                "labelname":"lt02lteatt",
                "Model":"SAMSUNG-SM-T217A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 8.0",
                "labelname":"lt013g",
                "Model":"SM-T312"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3 Lite",
                "labelname":"goya3g",
                "Model":"SM-T111"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab3V 7.0",
                "labelname":"goyave3gsea",
                "Model":"SM-T116NU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"403SC",
                "Model":"403SC"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degasvelte",
                "Model":"SM-T239"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 7.0",
                "labelname":"degaswifiopenbnn",
                "Model":"SM-T230NU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 8.0",
                "labelname":"milletltetmo",
                "Model":"SM-T337T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tab4 Active",
                "labelname":"rubenswifi",
                "Model":"SM-T360"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 10.5",
                "labelname":"chagallltespr",
                "Model":"SM-T807P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy TabS 8.4",
                "labelname":"klimtlte",
                "Model":"SM-T705"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Tap Pro 8.4",
                "labelname":"mondrianwifi",
                "Model":"SM-T320"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend Duos",
                "labelname":"kyleve",
                "Model":"GT-S7392"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend Plus",
                "labelname":"kylepro",
                "Model":"GT-S7583T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Trend3",
                "labelname":"cs02ve",
                "Model":"SM-G3508I"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Victory",
                "labelname":"goghvmu",
                "Model":"SPH-L300"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Win",
                "labelname":"delos3geur",
                "Model":"GT-I8552"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Win Pro",
                "labelname":"wilcoxctc",
                "Model":"SM-G3819D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Xcover2",
                "labelname":"skomer",
                "Model":"GT-S7710"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y",
                "labelname":"GT-S5368",
                "Model":"GT-S5368"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Y Plus",
                "labelname":"coriplusds",
                "Model":"GT-S5303B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young",
                "labelname":"roy",
                "Model":"GT-S6312"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Young2",
                "labelname":"young23g",
                "Model":"SM-G130H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy win",
                "labelname":"delos3gss",
                "Model":"GT-I8550L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Infuse",
                "labelname":"SGH-I997",
                "Model":"SAMSUNG-SGH-I997"
            },
            {
                "brandname":"Samsung",
                "marketname":"Replenish",
                "labelname":"SPH-M580",
                "Model":"SPH-M580"
            },
            {
                "brandname":"Samsung",
                "marketname":"Samsung Garda",
                "labelname":"gardaltetmo",
                "Model":"SGH-T399"
            },
            {
                "brandname":"Samsung",
                "marketname":"Transform Ultra",
                "labelname":"SPH-M930BST",
                "Model":"SPH-M930BST"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mini",
                "labelname":"GT-S5570B",
                "Model":"GT-S5570B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Mini2",
                "labelname":"GT-S6500D",
                "Model":"GT-S6500D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy NX",
                "labelname":"u0lte",
                "Model":"EK-GN120A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"GT-I9228",
                "Model":"GT-I9228"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note",
                "labelname":"SGH-I717M",
                "Model":"SGH-I717M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"lt03ltektt",
                "Model":"SM-P605K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4noteltespr",
                "Model":"SPH-P600"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 10.1",
                "labelname":"p4notewifi43241any",
                "Model":"SHW-M486W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note 8.0",
                "labelname":"kona3g",
                "Model":"GT-N5105"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tbeltelgt",
                "Model":"SM-N915L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Edge",
                "labelname":"tblteatt",
                "Model":"SAMSUNG-SM-N915A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note II",
                "labelname":"t0lteatt",
                "Model":"SAMSUNG-SGH-I317"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note Pro 12.2",
                "labelname":"viennaltekx",
                "Model":"SM-P905F0"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t03gchnduos",
                "Model":"GT-N7102i"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0ltecan",
                "Model":"SGH-I317M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note2",
                "labelname":"t0ltetmo",
                "Model":"SGH-T889"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hlte",
                "Model":"SM-N9006"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3",
                "labelname":"hltelgt",
                "Model":"SM-N900L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3 Duos",
                "labelname":"hlte",
                "Model":"SM-N9008"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note3 Neo",
                "labelname":"hllte",
                "Model":"SM-N7505"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trelte",
                "Model":"SM-N910C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trlteatt",
                "Model":"SAMSUNG-SM-N910A"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Note4",
                "labelname":"trltespr",
                "Model":"SM-N910P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Player 4.0",
                "labelname":"YP-G1",
                "Model":"YP-G1"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket",
                "labelname":"GT-S5300",
                "Model":"GT-S5300"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"corsica",
                "Model":"GT-S5312B"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Neo",
                "labelname":"corsicass",
                "Model":"GT-S5310T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket Plus",
                "labelname":"coriplus",
                "Model":"GT-S5301"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Pocket2",
                "labelname":"pocket2ss3g",
                "Model":"SM-G110H"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Prevail2",
                "labelname":"raybst",
                "Model":"SPH-M840"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy R-Style",
                "labelname":"jaguark",
                "Model":"SHV-E170K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"GT-I9000",
                "Model":"GT-I9000"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"GT-I9018",
                "Model":"GT-I9018"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S",
                "labelname":"SGH-T959W",
                "Model":"SGH-T959W"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Blaze",
                "labelname":"SGH-T769",
                "Model":"SGH-T769"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Duos",
                "labelname":"kylechn",
                "Model":"GT-S7562"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S Fascinate",
                "labelname":"SGH-T959P",
                "Model":"SGH-T959P"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S duos",
                "labelname":"kyleichn",
                "Model":"GT-S7566"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"SC-02C",
                "Model":"SC-02C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2",
                "labelname":"SHW-M250S",
                "Model":"SHW-M250S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 HD LTE",
                "labelname":"SGH-I757M",
                "Model":"SGH-I757M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S2 Plus",
                "labelname":"GT-I9100G",
                "Model":"GT-I9100G"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"SC-03E",
                "Model":"SC-03E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy S3",
                "labelname":"d2dcm",
                "Model":"Gravity"
            },
            {
                "brandname":"Samsung",
                "marketname":"Absolute",
                "labelname":"GT-B9120",
                "Model":"GT-B9120"
            },
            {
                "brandname":"Samsung",
                "marketname":"Conquer",
                "labelname":"SPH-D600",
                "Model":"SPH-D600"
            },
            {
                "brandname":"Samsung",
                "marketname":"Exhibit",
                "labelname":"SGH-T759",
                "Model":"SGH-T759"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3lte",
                "Model":"SM-A300XZ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A3",
                "labelname":"a3ulte",
                "Model":"SM-A300FU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5ltechn",
                "Model":"SM-A500X"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A5",
                "labelname":"a5ulteskt",
                "Model":"SM-A500S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy A7",
                "labelname":"a7ltelgt",
                "Model":"SM-A700L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"GT-S5830L",
                "Model":"GT-S5830L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace",
                "labelname":"SCH-I619",
                "Model":"SCH-I619"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace 4 Lite",
                "labelname":"vivalto3g",
                "Model":"SM-G313U"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Duos",
                "labelname":"SCH-I589",
                "Model":"SCH-i589"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace Plus",
                "labelname":"GT-S7508",
                "Model":"GT-S7508"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace2",
                "labelname":"GT-I8160L",
                "Model":"GT-I8160L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace3",
                "labelname":"logands",
                "Model":"GT-S7272"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace3 Duos TV",
                "labelname":"logandsdtv",
                "Model":"GT-S7273T"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Ace4",
                "labelname":"vivaltolte",
                "Model":"SM-G313MU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Admire 2",
                "labelname":"goghcri",
                "Model":"SCH-R830C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Alpha",
                "labelname":"sltechn",
                "Model":"SM-G8508S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Apollo",
                "labelname":"GT-I5801",
                "Model":"GT-I5801"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Camera",
                "labelname":"gd1",
                "Model":"EK-GC100"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Camera",
                "labelname":"gd1wifi",
                "Model":"EK-GC110"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Chat",
                "labelname":"zanin",
                "Model":"GT-B5330L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Advance",
                "labelname":"cane3gskt",
                "Model":"SHW-M570S"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Plus",
                "labelname":"cs02",
                "Model":"SM-G350"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Prime",
                "labelname":"core33g",
                "Model":"SM-G360HU"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Prime",
                "labelname":"coreprimeltevzw",
                "Model":"SM-G360V"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core Safe",
                "labelname":"arubaslimss",
                "Model":"SHW-M580D"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Core2",
                "labelname":"kanas3gctc",
                "Model":"SM-G3559"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy E5",
                "labelname":"e5lte",
                "Model":"SM-E500M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Europa",
                "labelname":"GT-I5503",
                "Model":"GT-I5503"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Exhilarate",
                "labelname":"SGH-I577",
                "Model":"SAMSUNG-SGH-I577"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"SCH-I629",
                "Model":"SCH-I629"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevisds",
                "Model":"GT-S6812"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Fame",
                "labelname":"nevisw",
                "Model":"GT-S6812C"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Gio",
                "labelname":"GT-S5660",
                "Model":"GT-S5660"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Golden",
                "labelname":"ks02lte",
                "Model":"GT-I9230"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand",
                "labelname":"baffinltektt",
                "Model":"SHV-E270K"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand",
                "labelname":"baffinvetd3g",
                "Model":"GT-I9128E"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Neo",
                "labelname":"baffinlite",
                "Model":"GT-I9060L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Neo Plus",
                "labelname":"grandneove3g",
                "Model":"GT-I9060M"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Prime",
                "labelname":"fortunalte",
                "Model":"SM-G530F"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand Prime",
                "labelname":"grandprimelte",
                "Model":"SM-G530FZ"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand2",
                "labelname":"ms013g",
                "Model":"SM-G7108"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy Grand2",
                "labelname":"ms01ltelgt",
                "Model":"SM-G710L"
            },
            {
                "brandname":"Samsung",
                "marketname":"Galaxy J1",
                "labelname":"j13g",
                "Model":"SM-J100ML"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3 Dual",
                "labelname":"D6633",
                "Model":"D6633"
            },
            {
                "brandname":"Sony",
                "marketname":"Sony",
                "labelname":"D2302",
                "Model":"D2302"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E",
                "labelname":"C1504",
                "Model":"C1504"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E1 dual",
                "labelname":"D2105",
                "Model":"D2105"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia L",
                "labelname":"C2104",
                "Model":"C2104"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia M2 dual",
                "labelname":"D2302",
                "Model":"D2302"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia SP",
                "labelname":"M35h",
                "Model":"M35h"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia T3",
                "labelname":"D5102",
                "Model":"D5102"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Tipo",
                "labelname":"ST21i",
                "Model":"ST21i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z Ultra",
                "labelname":"C6802",
                "Model":"C6802"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z1",
                "labelname":"C6916",
                "Model":"C6916"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z2",
                "labelname":"D6502",
                "Model":"D6502"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z2 Tablet",
                "labelname":"SO-05F",
                "Model":"SO-05F"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia acro S",
                "labelname":"LT26w",
                "Model":"LT26w"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z",
                "labelname":"SO-02E",
                "Model":"SO-02E"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia M2 Aqua",
                "labelname":"D2406",
                "Model":"D2406"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia miro",
                "labelname":"ST23a",
                "Model":"ST23a"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia ZR",
                "labelname":"C5306",
                "Model":"C5306"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3 Tablet Compact",
                "labelname":"SGP621",
                "Model":"SGP621"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3",
                "labelname":"D6643",
                "Model":"D6643"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z2 Tablet",
                "labelname":"SGP521",
                "Model":"SGP521"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z1",
                "labelname":"SOL23",
                "Model":"SOL23"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z Ultra",
                "labelname":"XL39h",
                "Model":"XL39h"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z",
                "labelname":"C6603",
                "Model":"C6603"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Tablet Z",
                "labelname":"SGP311",
                "Model":"SGP311"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia T2 Ultra",
                "labelname":"D5316",
                "Model":"D5316"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia SL",
                "labelname":"LT26ii",
                "Model":"LT26ii"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia M2",
                "labelname":"D2303",
                "Model":"D2303"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Go",
                "labelname":"ST27a",
                "Model":"ST27a"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E1",
                "labelname":"D2114",
                "Model":"D2114"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia C",
                "labelname":"C2304",
                "Model":"C2304"
            },
            {
                "brandname":"Sony",
                "marketname":"NW-Z1000",
                "labelname":"icx1216",
                "Model":"NW-Z1000Series"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia J1 Compact",
                "labelname":"D5788",
                "Model":"D5788"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3 Compact",
                "labelname":"D5803",
                "Model":"D5803"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3v",
                "labelname":"D6708",
                "Model":"D6708"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia active",
                "labelname":"ST17i",
                "Model":"ST17i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia ray",
                "labelname":"ST18i",
                "Model":"ST18i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia pro",
                "labelname":"MK16i",
                "Model":"MK16i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia acro HD",
                "labelname":"SO-03D",
                "Model":"SO-03D"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3",
                "labelname":"SOL26",
                "Model":"SOL26"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z1f",
                "labelname":"SO-02F",
                "Model":"SO-02F"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z1",
                "labelname":"C6906",
                "Model":"C6906"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z",
                "labelname":"L36h",
                "Model":"L36h"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Tablet Z",
                "labelname":"SGP351",
                "Model":"SGP351"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia T2 Ultra dual",
                "labelname":"D5322",
                "Model":"D5322"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia SP",
                "labelname":"C5306",
                "Model":"C5306"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia M2 Aqua",
                "labelname":"D2403",
                "Model":"D2403"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia mini pro",
                "labelname":"SK17a",
                "Model":"SK17a"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia ZL2",
                "labelname":"SOL25",
                "Model":"SOL25"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3 Tablet Compact",
                "labelname":"SGP612",
                "Model":"SGP612"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3",
                "labelname":"D6616",
                "Model":"D6616"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z2 Tablet",
                "labelname":"SGP512",
                "Model":"SGP512"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z1",
                "labelname":"SO-01F",
                "Model":"SO-01F"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z Ultra",
                "labelname":"SOL24",
                "Model":"SOL24"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z",
                "labelname":"C6602",
                "Model":"C6602"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Tablet S",
                "labelname":"txs03",
                "Model":"SGPT13"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia T2 Ultra",
                "labelname":"D5306",
                "Model":"D5306"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia S",
                "labelname":"LT26i",
                "Model":"LT26i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia M dual",
                "labelname":"C2005",
                "Model":"C2005"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E3 Dual",
                "labelname":"D2212",
                "Model":"D2212"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E1",
                "labelname":"D2005",
                "Model":"D2005"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia A2",
                "labelname":"SO-04F",
                "Model":"SO-04F"
            },
            {
                "brandname":"Sony",
                "marketname":"NW-F880 Series",
                "labelname":"icx1237",
                "Model":"WALKMAN"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia J",
                "labelname":"ST26i",
                "Model":"ST26i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E1 dual",
                "labelname":"D2104",
                "Model":"D2104"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia C3 Dual",
                "labelname":"D2502",
                "Model":"D2502"
            },
            {
                "brandname":"Sony",
                "marketname":"Tablet P",
                "labelname":"nbx02",
                "Model":"Sony Tablet P"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E",
                "labelname":"C1505",
                "Model":"C1505"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E3",
                "labelname":"D2202",
                "Model":"D2202"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia L",
                "labelname":"C2105",
                "Model":"C2105"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Miro",
                "labelname":"ST23i",
                "Model":"ST23i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia SP",
                "labelname":"M35t",
                "Model":"M35t"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia T3",
                "labelname":"D5103",
                "Model":"D5103"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Tipo",
                "labelname":"ST21i2",
                "Model":"ST21i2"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z Ultra",
                "labelname":"C6806",
                "Model":"C6806"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z1",
                "labelname":"C6943",
                "Model":"C6943"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z2",
                "labelname":"D6503",
                "Model":"D6503"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z2 Tablet",
                "labelname":"SOT21",
                "Model":"SOT21"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia ion",
                "labelname":"LT28i",
                "Model":"LT28i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia ZL",
                "labelname":"L35h",
                "Model":"L35h"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3 Tablet Compact",
                "labelname":"SGP611",
                "Model":"SGP611"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3",
                "labelname":"D6603",
                "Model":"D6603"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z2 Tablet",
                "labelname":"SGP511",
                "Model":"SGP511"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z1",
                "labelname":"L39u",
                "Model":"L39u"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z Ultra",
                "labelname":"SGP412",
                "Model":"SGP412"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia V",
                "labelname":"LT25i",
                "Model":"LT25i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Tablet S",
                "labelname":"txs03",
                "Model":"SGPT12"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia T2 Ultra",
                "labelname":"D5303",
                "Model":"D5303"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia PLAY",
                "labelname":"R800i",
                "Model":"R800i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia M dual",
                "labelname":"C2004",
                "Model":"C2004"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E3",
                "labelname":"D2243",
                "Model":"D2243"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E1",
                "labelname":"D2004",
                "Model":"D2004"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia A",
                "labelname":"SO-04E",
                "Model":"SO-04E"
            },
            {
                "brandname":"Sony",
                "marketname":"NW-F800",
                "labelname":"icx1227",
                "Model":"WALKMAN"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3 Compact",
                "labelname":"D5833",
                "Model":"D5833"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia ZL",
                "labelname":"C6502",
                "Model":"C6502"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia arc S",
                "labelname":"LT18i",
                "Model":"LT18i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia sola",
                "labelname":"MT27i",
                "Model":"MT27i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia neo L",
                "labelname":"MT25i",
                "Model":"MT25i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia ZR",
                "labelname":"C5503",
                "Model":"C5503"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3",
                "labelname":"SO-01G",
                "Model":"SO-01G"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z2 Tablet",
                "labelname":"SGP561",
                "Model":"SGP561"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z1 Compact",
                "labelname":"M51w",
                "Model":"M51w"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z1",
                "labelname":"C6903",
                "Model":"C6903"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z",
                "labelname":"C6616",
                "Model":"C6616"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Tablet Z",
                "labelname":"SGP321",
                "Model":"SGP321"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia T2 Ultra",
                "labelname":"D5322",
                "Model":"D5322"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia SP",
                "labelname":"C5303",
                "Model":"C5303"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia M2",
                "labelname":"D2306",
                "Model":"D2306"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia tipo dual",
                "labelname":"ST21a2",
                "Model":"ST21a2"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia ion",
                "labelname":"LT28h",
                "Model":"LT28h"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia ZL",
                "labelname":"C6506",
                "Model":"C6506"
            },
            {
                "brandname":"Sony",
                "marketname":"NW-ZX1",
                "labelname":"icx1240",
                "Model":"WALKMAN"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia C",
                "labelname":"C2305",
                "Model":"C2305"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E1 Dual",
                "labelname":"D2104",
                "Model":"D2104"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Go",
                "labelname":"ST27i",
                "Model":"ST27i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia M2",
                "labelname":"D2305",
                "Model":"D2305"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia SP",
                "labelname":"C5302",
                "Model":"C5302"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia T2 Ultra",
                "labelname":"D5316N",
                "Model":"D5316N"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Tablet Z",
                "labelname":"SGP312",
                "Model":"SGP312"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z",
                "labelname":"C6606",
                "Model":"C6606"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z1",
                "labelname":"C6902",
                "Model":"C6902"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z1 Compact",
                "labelname":"D5503",
                "Model":"D5503"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z2 Tablet",
                "labelname":"SGP551",
                "Model":"SGP551"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3",
                "labelname":"D6653",
                "Model":"D6653"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3 Tablet Compact",
                "labelname":"SGP641",
                "Model":"SGP641"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia ZR",
                "labelname":"C5502",
                "Model":"C5502"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia miro",
                "labelname":"ST23i",
                "Model":"ST23i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia J",
                "labelname":"ST26a",
                "Model":"ST26a"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E1 Dual",
                "labelname":"D2105",
                "Model":"D2105"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia C3",
                "labelname":"D2533",
                "Model":"D2533"
            },
            {
                "brandname":"Sony",
                "marketname":"NWZ-Z1000",
                "labelname":"icx1216",
                "Model":"NWZ-Z1000Series"
            },
            {
                "brandname":"Sony",
                "marketname":"BRAVIA Smart Stick",
                "labelname":"NSZGU1",
                "Model":"NSZ-GU1"
            },
            {
                "brandname":"Sony",
                "marketname":"Tablet S",
                "labelname":"nbx03",
                "Model":"Sony Tablet S"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E dual",
                "labelname":"C1604",
                "Model":"C1604"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E3",
                "labelname":"D2203",
                "Model":"D2203"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia M",
                "labelname":"C1904",
                "Model":"C1904"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia P",
                "labelname":"LT22i",
                "Model":"LT22i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia T",
                "labelname":"LT30a",
                "Model":"LT30a"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia T3",
                "labelname":"D5106",
                "Model":"D5106"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia U",
                "labelname":"ST25a",
                "Model":"ST25a"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z Ultra",
                "labelname":"C6833",
                "Model":"C6833"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3",
                "labelname":"401SO",
                "Model":"401SO"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z2",
                "labelname":"SO-03F",
                "Model":"SO-03F"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z1",
                "labelname":"L39t",
                "Model":"L39t"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z Ultra",
                "labelname":"C6843",
                "Model":"C6843"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia U",
                "labelname":"ST25i",
                "Model":"ST25i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia TX",
                "labelname":"LT29i",
                "Model":"LT29i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia T",
                "labelname":"LT30p",
                "Model":"LT30p"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia PLAY",
                "labelname":"R800a",
                "Model":"R800a"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia M",
                "labelname":"C1905",
                "Model":"C1905"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E3",
                "labelname":"D2206",
                "Model":"D2206"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E dual",
                "labelname":"C1605",
                "Model":"C1605"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia E1 dual",
                "labelname":"D2114",
                "Model":"D2114"
            },
            {
                "brandname":"Sony",
                "marketname":"Internet TV",
                "labelname":"eagle",
                "Model":"Internet TV Box"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z1",
                "labelname":"L39h",
                "Model":"L39h"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z2",
                "labelname":"D6543",
                "Model":"D6543"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z2a",
                "labelname":"D6563",
                "Model":"D6563"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia Z3 Compact",
                "labelname":"SO-02G",
                "Model":"SO-02G"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia ZL",
                "labelname":"C6503",
                "Model":"C6503"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia go",
                "labelname":"ST27i",
                "Model":"ST27i"
            },
            {
                "brandname":"Sony",
                "marketname":"Xperia tipo",
                "labelname":"ST21a",
                "Model":"ST21a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Live with Walkman",
                "labelname":"WT19a",
                "Model":"WT19a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia arc",
                "labelname":"LT15a",
                "Model":"LT15a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia X10",
                "labelname":"X10i",
                "Model":"X10i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia UL",
                "labelname":"SOL22",
                "Model":"SOL22"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia T",
                "labelname":"LT30at",
                "Model":"LT30at"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Play",
                "labelname":"R800i",
                "Model":"R800i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia J",
                "labelname":"ST26i",
                "Model":"ST26i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Acro",
                "labelname":"IS11S",
                "Model":"IS11S"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia live",
                "labelname":"WT19a",
                "Model":"WT19a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia neo",
                "labelname":"MT15i",
                "Model":"MT15i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia ray",
                "labelname":"ST18i",
                "Model":"ST18i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia pro",
                "labelname":"MK16a",
                "Model":"MK16a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia mini pro",
                "labelname":"SK17a",
                "Model":"SK17a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia go",
                "labelname":"ST27i",
                "Model":"ST27i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Z1",
                "labelname":"C6943",
                "Model":"C6943"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia X10 mini",
                "labelname":"SonyEricssonE10a",
                "Model":"E10a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia X10",
                "labelname":"SO-01B",
                "Model":"SO-01B"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Tablet Z",
                "labelname":"SGP321",
                "Model":"SGP321"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia SL",
                "labelname":"LT26ii",
                "Model":"LT26ii"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia pro",
                "labelname":"MK16i",
                "Model":"MK16i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia mini pro",
                "labelname":"SK17i",
                "Model":"SK17i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia ion",
                "labelname":"LT28at",
                "Model":"LT28at"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia acro HD",
                "labelname":"IS12S",
                "Model":"IS12S"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia X10",
                "labelname":"SonyEricssonSO-01B",
                "Model":"SO-01B"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Tablet Z",
                "labelname":"SGP341",
                "Model":"SGP341"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia PLAY",
                "labelname":"R800at",
                "Model":"R800at"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia C",
                "labelname":"S39h",
                "Model":"S39h"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Live with Walkman(TM)",
                "labelname":"WT19a",
                "Model":"WT19a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia tipo dual",
                "labelname":"ST21i2",
                "Model":"ST21i2"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia ray",
                "labelname":"ST18a",
                "Model":"ST18a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia neo",
                "labelname":"MT15a",
                "Model":"MT15a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia ion",
                "labelname":"LT28i",
                "Model":"LT28i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia active",
                "labelname":"ST17i",
                "Model":"ST17i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia X8",
                "labelname":"E15i",
                "Model":"E15i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia X10",
                "labelname":"X10a",
                "Model":"X10a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia U",
                "labelname":"ST25i",
                "Model":"ST25i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia T",
                "labelname":"LT30a",
                "Model":"LT30a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia SP",
                "labelname":"M35c",
                "Model":"M35c"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia PLAY",
                "labelname":"R800i",
                "Model":"R800i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia GX",
                "labelname":"SO-04D",
                "Model":"SO-04D"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"X10 Xperia Mini",
                "labelname":"robyn",
                "Model":"E10i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Acro",
                "labelname":"SO-02C",
                "Model":"SO-02C"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Neo",
                "labelname":"MT15i",
                "Model":"MT15i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Play",
                "labelname":"Zeus",
                "Model":"Zeus"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia T",
                "labelname":"LT30p",
                "Model":"LT30p"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia V",
                "labelname":"LT25c",
                "Model":"LT25c"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia X10 Mini",
                "labelname":"E10i",
                "Model":"E10i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Z Ultra",
                "labelname":"C6806",
                "Model":"C6806"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia arc",
                "labelname":"LT15i",
                "Model":"LT15i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia mini",
                "labelname":"S51SE",
                "Model":"S51SE"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia neo L",
                "labelname":"MT25i",
                "Model":"MT25i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia sola",
                "labelname":"MT27i",
                "Model":"MT27i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia neo V",
                "labelname":"MT11i",
                "Model":"MT11i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia PLAY",
                "labelname":"SO-01D",
                "Model":"SO-01D"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Go",
                "labelname":"ST27i",
                "Model":"ST27i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia AX",
                "labelname":"SO-01E",
                "Model":"SO-01E"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia A",
                "labelname":"SO-04E",
                "Model":"SO-04E"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Go",
                "labelname":"ST27a",
                "Model":"ST27a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia PLAY",
                "labelname":"R800x",
                "Model":"R800x"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia SX",
                "labelname":"SO-05D",
                "Model":"SO-05D"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Z",
                "labelname":"SO-02E",
                "Model":"SO-02E"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Arc",
                "labelname":"LT15i",
                "Model":"LT15i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia P",
                "labelname":"LT22i",
                "Model":"LT22i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia S",
                "labelname":"LT26i",
                "Model":"LT26i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia TX",
                "labelname":"LT29i",
                "Model":"LT29i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia V",
                "labelname":"LT25i",
                "Model":"LT25i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia X10 Mini",
                "labelname":"SonyEricssonE10i",
                "Model":"E10i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Z1",
                "labelname":"C6903",
                "Model":"C6903"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia arc S",
                "labelname":"LT18a",
                "Model":"LT18a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia mini",
                "labelname":"ST15a",
                "Model":"ST15a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia neo V",
                "labelname":"MT11a",
                "Model":"MT11a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia tipo",
                "labelname":"ST21i",
                "Model":"ST21i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Tablet Z",
                "labelname":"SO-03E",
                "Model":"SO-03E"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia X10",
                "labelname":"SonyEricssonX10iv",
                "Model":"X10i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia X10 mini pro",
                "labelname":"SonyEricssonU20a",
                "Model":"U20a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia acro S",
                "labelname":"LT26w",
                "Model":"LT26w"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia ion",
                "labelname":"LT28h",
                "Model":"LT28h"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Live with Walkman",
                "labelname":"WT19i",
                "Model":"WT19i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Arc",
                "labelname":"SO-01C",
                "Model":"SO-01C"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia PLAY",
                "labelname":"R800a",
                "Model":"R800a"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia S",
                "labelname":"SO-02D",
                "Model":"SO-02D"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Tablet Z",
                "labelname":"SGP311",
                "Model":"SGP311"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia VL",
                "labelname":"SOL21",
                "Model":"SOL21"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia X10 Mini Pro",
                "labelname":"U20i",
                "Model":"U20i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia Z1",
                "labelname":"C6906",
                "Model":"C6906"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia arc S",
                "labelname":"LT18i",
                "Model":"LT18i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia mini",
                "labelname":"ST15i",
                "Model":"ST15i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia miro",
                "labelname":"ST23i",
                "Model":"ST23i"
            },
            {
                "brandname":"Sony Ericsson",
                "marketname":"Xperia ray",
                "labelname":"SO-03C",
                "Model":"SO-03C"
            },
            {
                "brandname":"Verizon Wireless",
                "marketname":"Ellipsis 7 (QMV7A)",
                "labelname":"QMV7A",
                "Model":"QMV7A"
            },
            {
                "brandname":"Verizon Wireless",
                "marketname":"Ellipsis 7 (QMV7B)",
                "labelname":"QMV7A",
                "Model":"QMV7B"
            },
            {
                "brandname":"Verizon Wireless",
                "marketname":"Ellipsis 7",
                "labelname":"QMV7A",
                "Model":"QMV7B"
            },
            {
                "brandname":"Verizon Wireless",
                "marketname":"Ellipsis 8",
                "labelname":"QTAQZ3",
                "Model":"QTAQZ3"
            },
            {
                "brandname":"Verizon Wireless",
                "marketname":"Ellipsis 7",
                "labelname":"QMV7A",
                "Model":"QMV7A"
            },
            {
                "brandname":"Vertu",
                "marketname":"Signature Touch",
                "labelname":"odin",
                "Model":"Signature Touch"
            },
            {
                "brandname":"ViewSonic",
                "marketname":"VSD241 Smart Display",
                "labelname":"VSD241",
                "Model":"VSD241"
            },
            {
                "brandname":"Vizio",
                "marketname":"StreamPlayer",
                "labelname":"VAP430",
                "Model":"VAP430"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM NOTE 1LTETD",
                "labelname":"dior",
                "Model":"HM NOTE 1LTE"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM 1SC",
                "labelname":"armani",
                "Model":"HM 1SW"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM NOTE 1LTETD",
                "labelname":"dior",
                "Model":"HM NOTE 1LTEW"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM 2LTE-CT",
                "labelname":"HM2014812",
                "Model":"2014812"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM 1SLTETD",
                "labelname":"HM2014501",
                "Model":"2014501"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM NOTE 1S CT",
                "labelname":"gucci",
                "Model":"HM NOTE 1S"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM 1STD",
                "labelname":"HM2014011",
                "Model":"2014011"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"China",
                "labelname":"braveheart",
                "Model":"MiTV"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"China",
                "labelname":"casablanca",
                "Model":"MiBOX1S"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM 2LTE-IN",
                "labelname":"HM2014818",
                "Model":"2014818"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"MI 2",
                "labelname":"aries",
                "Model":"MI 2S"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM 2LTE-CU",
                "labelname":"HM2014811",
                "Model":"2014811"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM 2LTE-CMCC",
                "labelname":"HM2014813",
                "Model":"2014813"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"Hong Mi",
                "labelname":"HM2013022",
                "Model":"2013022"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM NOTE 1S CT",
                "labelname":"gucci",
                "Model":"gucci"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"MI 4LTE",
                "labelname":"cancro",
                "Model":"MI 4W"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM 2LTE-SA",
                "labelname":"HM2014817",
                "Model":"2014817"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM 1SC",
                "labelname":"armani",
                "Model":"HM 1AC"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"MI 2",
                "labelname":"aries",
                "Model":"MI 2"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"MI 4LTE-CT",
                "labelname":"cancro",
                "Model":"MI 4LTE"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"China",
                "labelname":"HM2013023",
                "Model":"2013023"
            },
            {
                "brandname":"Xiaomi",
                "marketname":"HM 2LTE-BR",
                "labelname":"HM2014819",
                "Model":"2014819"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V793",
                "labelname":"P175A60",
                "Model":"ZTE KIS Flex"
            },
            {
                "brandname":"ZTE",
                "marketname":"TURKCELL T50",
                "labelname":"msm8226",
                "Model":"TURKCELL TURBO T50"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE_Q801C",
                "labelname":"ZTE-Q801C",
                "Model":"ZTE Q801C"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE-U V760",
                "labelname":"ztenj73_gb",
                "Model":"moii E598"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V975",
                "labelname":"redhookbay",
                "Model":"V975"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V829",
                "labelname":"P172A30",
                "Model":"ZTE Blade G Plus"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V815W",
                "labelname":"P172R10",
                "Model":"ZTE Kis II Max"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V813W",
                "labelname":"P172B20",
                "Model":"ZTE Blade C2 Plus"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V807",
                "labelname":"P177E01",
                "Model":"ZTE BLADE C"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V795",
                "labelname":"P172D01",
                "Model":"ZTE KIS II"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V791",
                "labelname":"P175A40",
                "Model":"V791"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE STAR",
                "labelname":"msm8226",
                "Model":"ZTE Star 1"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE N919D",
                "labelname":"ZTE-N919D",
                "Model":"N919D"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Kis 3",
                "labelname":"ZTE-P821E10",
                "Model":"MEO Smart A16"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Grand X Quad Lite",
                "labelname":"P188F07",
                "Model":"Amazing A6"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE C310",
                "labelname":"P172D04",
                "Model":"ZTE Blade C310"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade L3",
                "labelname":"P182A20",
                "Model":"Blade L3"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade G Lux",
                "labelname":"P172F10",
                "Model":"Orange Tado"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9S",
                "labelname":"V9S",
                "Model":"myPadP4"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"Light"
            },
            {
                "brandname":"ZTE",
                "marketname":"STARTRAIL 4",
                "labelname":"P172E10",
                "Model":"Avea inTouch 3"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"V8402"
            },
            {
                "brandname":"ZTE",
                "marketname":"Orange Reyo",
                "labelname":"P172D10",
                "Model":"Avea inTouch 3 Large"
            },
            {
                "brandname":"ZTE",
                "marketname":"N860",
                "labelname":"arthur",
                "Model":"Warp"
            },
            {
                "brandname":"ZTE",
                "marketname":"Grand X",
                "labelname":"P175A20",
                "Model":"ZTE-U V970M"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"a5"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"San Francisco"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"Beeline E400"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"ZTE X850"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"Carl"
            },
            {
                "brandname":"ZTE",
                "marketname":"N918St",
                "labelname":"N918St",
                "Model":"BGH Joy Smart AXS II D"
            },
            {
                "brandname":"ZTE",
                "marketname":"Grand X In",
                "labelname":"mfld_pr2",
                "Model":"ZTE Grand X In"
            },
            {
                "brandname":"ZTE",
                "marketname":"Bouygues Telecom Bs 402",
                "labelname":"P172G10",
                "Model":"Amazing A4C"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"XCD35"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"Movistar Prime"
            },
            {
                "brandname":"ZTE",
                "marketname":"009Z",
                "labelname":"bladeplus",
                "Model":"ZTE V886J"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V793",
                "labelname":"P175A60",
                "Model":"Telcel T20"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V5S",
                "labelname":"P189F13",
                "Model":"ZTE Grand Memo lite"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Q509T",
                "labelname":"P632T31",
                "Model":"ZTE Blade A450"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE LEO M1",
                "labelname":"V883M",
                "Model":"V883M"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Grand X Quad Lite",
                "labelname":"P188F07",
                "Model":"ZTE V967S"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Grand X 2",
                "labelname":"P682F06",
                "Model":"Amazing A7"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade Q Lux",
                "labelname":"P632A10",
                "Model":"ZTE Fit 4G Smart"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade L2",
                "labelname":"P182A10",
                "Model":"BGH Joy Smart AXS D"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade G Lux",
                "labelname":"P172F10",
                "Model":"BGH Joy Smart A6"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"RTK V9"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE_Q801L",
                "labelname":"ZTE-Q801L",
                "Model":"ZTE Q801L"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE-V6500",
                "labelname":"V6500",
                "Model":"Etisalat Smartphone"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V975",
                "labelname":"redhookbay",
                "Model":"ZTE Geek"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V829",
                "labelname":"P172A30",
                "Model":"ZTE Blade G Pro"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V815W",
                "labelname":"P172R10",
                "Model":"ZTE Maxx"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V815W",
                "labelname":"P172R10",
                "Model":"Amazing A4S"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V807",
                "labelname":"P177E01",
                "Model":"ZTE V889S"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V795",
                "labelname":"P172D01",
                "Model":"ZTE KIS II PRO"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V793",
                "labelname":"P175A60",
                "Model":"Amazing A3"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Switch X1",
                "labelname":"deepblue",
                "Model":"ZTE V796"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE N9835",
                "labelname":"chovar",
                "Model":"N9835"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Kis 3",
                "labelname":"ZTE-P821E10",
                "Model":"MOCHE SMART A16"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Grand X Quad Lite",
                "labelname":"P188F07",
                "Model":"V8602"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE GEEK II Pro",
                "labelname":"ztexasp92_wet_jb9",
                "Model":"ZTE M1001"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE_Q701C",
                "labelname":"ZTE-Q701C",
                "Model":"ZTE Q701C"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE-U V760",
                "labelname":"ztenj73_gb",
                "Model":"ZTE-U V857"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V970",
                "labelname":"whistler",
                "Model":"UZTE V970"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V829",
                "labelname":"P172A30",
                "Model":"V8507"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V815W",
                "labelname":"P172R10",
                "Model":"ZTE Blade Q1"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V811W",
                "labelname":"P821E10",
                "Model":"ZTE V811"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V807",
                "labelname":"P177E01",
                "Model":"V8501"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V795",
                "labelname":"P172D01",
                "Model":"ZTE B795"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V769M",
                "labelname":"V769M",
                "Model":"ZTE LEO Q2"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE STAR",
                "labelname":"msm8226",
                "Model":"ZTE S2002"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE N818",
                "labelname":"ZTE-N818",
                "Model":"N818"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Kis 3",
                "labelname":"ZTE-P821E10",
                "Model":"MEO SMART A16"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Grand X 2",
                "labelname":"P682F06",
                "Model":"ZTE V969"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade Vec",
                "labelname":"P692S20_Q82",
                "Model":"ZTE Geek 2"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade L2",
                "labelname":"P182A10",
                "Model":"MEO Smart A75"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade G Lux",
                "labelname":"P172F10",
                "Model":"MEO Smart A40"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9A",
                "labelname":"v9plus",
                "Model":"myPad P3"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"Beeline M2"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"ZTE-U X850"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"TaiWan Mobile T2"
            },
            {
                "brandname":"ZTE",
                "marketname":"NX507J",
                "labelname":"NX507J",
                "Model":"NX507H"
            },
            {
                "brandname":"ZTE",
                "marketname":"N720",
                "labelname":"N720",
                "Model":"ZTE_U N720"
            },
            {
                "brandname":"ZTE",
                "marketname":"Grand X",
                "labelname":"P175A20",
                "Model":"ZTE V970M"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"ZTE-U V880"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"RTK V8"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"BLADE_N880"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade Q Lux",
                "labelname":"P632A10",
                "Model":"BGH Joy Smart A7G"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade G Lux",
                "labelname":"P172F10",
                "Model":"ZTE Kis3 max"
            },
            {
                "brandname":"ZTE",
                "marketname":"X501_USA_Cricket",
                "labelname":"X501",
                "Model":"X501_USA_RS"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"Light Tab"
            },
            {
                "brandname":"ZTE",
                "marketname":"STARTRAIL 4",
                "labelname":"P172E10",
                "Model":"ZTE Blade Q"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"Vip Droid"
            },
            {
                "brandname":"ZTE",
                "marketname":"Orange Reyo",
                "labelname":"P172D10",
                "Model":"Blade Q Maxi"
            },
            {
                "brandname":"ZTE",
                "marketname":"N910",
                "labelname":"arthur4g",
                "Model":"ZTE-N910"
            },
            {
                "brandname":"ZTE",
                "marketname":"Grand X",
                "labelname":"P175A20",
                "Model":"tmn smart a18"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade III",
                "labelname":"atlas40",
                "Model":"Skate Pro"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"V8502"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"Kyivstar Spark"
            },
            {
                "brandname":"ZTE",
                "marketname":"U880",
                "labelname":"U880",
                "Model":"ZTE-T U880"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"ZTE-C N600"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"MTC 916"
            },
            {
                "brandname":"ZTE",
                "marketname":"N918St",
                "labelname":"N918St",
                "Model":"ZTE N918St"
            },
            {
                "brandname":"ZTE",
                "marketname":"Grand X Pro",
                "labelname":"P177A20",
                "Model":"Blade Super"
            },
            {
                "brandname":"ZTE",
                "marketname":"Bouygues Telecom Bs 402",
                "labelname":"P172G10",
                "Model":"ZTE Blade Q Mini"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"ZTE Libra"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"N880"
            },
            {
                "brandname":"ZTE",
                "marketname":"Avea inTouch 4",
                "labelname":"msm8916_32",
                "Model":"ZTE Blade V220"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE_LEO_Q1",
                "labelname":"hct72_wet_jb3",
                "Model":"ZTE V765M"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V889M",
                "labelname":"P175A10",
                "Model":"UZTE V889M"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V817",
                "labelname":"ZTE-V817",
                "Model":"V817"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V815W",
                "labelname":"P172R10",
                "Model":"KIS II Max"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V809",
                "labelname":"P172A10",
                "Model":"ZTE Blade C2"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V807",
                "labelname":"P177E01",
                "Model":"Amazing A4"
            },
            {
                "brandname":"ZTE",
                "marketname":"myPad P5",
                "labelname":"K78",
                "Model":"Amazing_P5"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"003Z"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"Optimus San Francisco"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"ZTE-BLADE"
            },
            {
                "brandname":"ZTE",
                "marketname":"Grand X",
                "labelname":"P175A20",
                "Model":"ZTE Grand X Classic"
            },
            {
                "brandname":"ZTE",
                "marketname":"K97",
                "labelname":"K97",
                "Model":"ZTE K97"
            },
            {
                "brandname":"ZTE",
                "marketname":"NE501J",
                "labelname":"NE501J",
                "Model":"V5"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"Movistar Link"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"ZTE-LINK"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"A100"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"TT101"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade G Lux",
                "labelname":"P172F10",
                "Model":"Blade G Lux"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE S118",
                "labelname":"P189S10",
                "Model":"Grand S Lite"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V72",
                "labelname":"V72",
                "Model":"myPad P4 Lite"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V793",
                "labelname":"P175A60",
                "Model":"tmn smart a6"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V807",
                "labelname":"P177E01",
                "Model":"Leopard MF900"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V809",
                "labelname":"P172A10",
                "Model":"meo smart a12"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V815W",
                "labelname":"P172R10",
                "Model":"UZTE GRAND V7"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V829",
                "labelname":"P172A30",
                "Model":"BGH Joy Smart A3"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V965",
                "labelname":"P188F03",
                "Model":"ZTE R880H"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE-U V760",
                "labelname":"ztenj73_gb",
                "Model":"Telenor Touch Mini"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE_LEO_Q1",
                "labelname":"hct72_wet_jb3",
                "Model":"ZTE LEO Q1"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V987",
                "labelname":"P188F04",
                "Model":"ZTE Grand X"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V887",
                "labelname":"P177A10",
                "Model":"tmn smart a20"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V815W",
                "labelname":"P172R10",
                "Model":"ZTE V816W"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V815W",
                "labelname":"P172R10",
                "Model":"BGH Joy Smart A5d"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZXY-ZTE_V6700",
                "labelname":"V6700",
                "Model":"ZTE V6700"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE_LEO_Q1",
                "labelname":"hct72_wet_jb3",
                "Model":"V765M"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V987",
                "labelname":"P188F04",
                "Model":"UZTE GRAND X Quad"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V887",
                "labelname":"P177A10",
                "Model":"ZTE Blade L"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V815W",
                "labelname":"P172R10",
                "Model":"ZTE T815"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V815W",
                "labelname":"P172R10",
                "Model":"B8405"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V808",
                "labelname":"P172E01",
                "Model":"UZTE V808"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V795",
                "labelname":"P172D01",
                "Model":"ZTE Kis II"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V793",
                "labelname":"P175A60",
                "Model":"Cellcom 4G"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE T28",
                "labelname":"bluetick",
                "Model":"ZTE T28 Prepaid"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE N986",
                "labelname":"P188F02",
                "Model":"N986"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Kis 3",
                "labelname":"ZTE-P821E10",
                "Model":"ZTE V811"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Grand X Quad Lite",
                "labelname":"P188F07",
                "Model":"ZTE Grand X2"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Grand Memo LTE",
                "labelname":"Grand-Memo",
                "Model":"ZTE Grand Memo"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE_LEO_Q1",
                "labelname":"hct72_wet_jb3",
                "Model":"mobifone M9001"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE-U V760",
                "labelname":"ztenj73_gb",
                "Model":"ZTE-U V856"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V965",
                "labelname":"P188F03",
                "Model":"ZTE V880H"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V829",
                "labelname":"P172A30",
                "Model":"Blade G Pro"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V815W",
                "labelname":"P172R10",
                "Model":"ZTE Blade Buzz"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V811",
                "labelname":"ZTE-V811",
                "Model":"Beeline Smart2"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V807",
                "labelname":"P177E01",
                "Model":"UZTE V807"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V795",
                "labelname":"P172D01",
                "Model":"V795(A3S)"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V769M",
                "labelname":"V769M",
                "Model":"V769M"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE STAR",
                "labelname":"msm8226",
                "Model":"ZTE GEEK II Pro 4G"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE N799D",
                "labelname":"ZTE-N799D",
                "Model":"N799D"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Grand X2 In",
                "labelname":"redhookbay",
                "Model":"Grand X2 In"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Grand X 2",
                "labelname":"P682F06",
                "Model":"ZTE V968"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade Vec",
                "labelname":"P692S20_Q82",
                "Model":"Blade Vec"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade L2",
                "labelname":"P182A10",
                "Model":"Blade L2"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade G Lux",
                "labelname":"P172F10",
                "Model":"DIGICEL DL800"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9A",
                "labelname":"v9plus",
                "Model":"my Pad P3"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"BLACK 03"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"ZTE-U V852"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"RTK D1"
            },
            {
                "brandname":"ZTE",
                "marketname":"NX40X_APT",
                "labelname":"NX40X",
                "Model":"NX40X"
            },
            {
                "brandname":"ZTE",
                "marketname":"N720",
                "labelname":"N720",
                "Model":"ZTE-U N720"
            },
            {
                "brandname":"ZTE",
                "marketname":"Grand X",
                "labelname":"P175A20",
                "Model":"ZTE V970"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"ZTE-Libra"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"Orange Tactile internet 2"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"BASE lutea"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade Q Lux",
                "labelname":"P632A10",
                "Model":"Beeline Pro"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade G Lux",
                "labelname":"P172F10",
                "Model":"ZTE V830W"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE BLADE III",
                "labelname":"atlas40",
                "Model":"Skate Pro"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"MTC 1055"
            },
            {
                "brandname":"ZTE",
                "marketname":"Spro 2",
                "labelname":"msm8974",
                "Model":"MF97V"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"XCD 28"
            },
            {
                "brandname":"ZTE",
                "marketname":"Orange Reyo",
                "labelname":"P172D10",
                "Model":"ZTE Blade Q Maxi"
            },
            {
                "brandname":"ZTE",
                "marketname":"N918St",
                "labelname":"N918St",
                "Model":"BGH Joy Smart AXS II"
            },
            {
                "brandname":"ZTE",
                "marketname":"Grand X In",
                "labelname":"mfld_pr2",
                "Model":"STARADDICT II Plus"
            },
            {
                "brandname":"ZTE",
                "marketname":"Bouygues Telecom Bs 402",
                "labelname":"P172G10",
                "Model":"A4C"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"WayteQ Libra"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"MF8604"
            },
            {
                "brandname":"ZTE",
                "marketname":"BASE Lutea 2",
                "labelname":"skate",
                "Model":"BASE Lutea 2"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"Netphone 701"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"ZTE V880"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"Android Edition StarTrail"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"Orange San Francisco"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"ZTE-C N880S"
            },
            {
                "brandname":"ZTE",
                "marketname":"NE501J",
                "labelname":"NE501J",
                "Model":"ZTE_V5"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"ZTE-RACER"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"BASE Tab"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"V9C"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V795",
                "labelname":"P172D01",
                "Model":"BGH Joy Smart A1"
            },
            {
                "brandname":"ZTE",
                "marketname":"Grand X",
                "labelname":"P175A20",
                "Model":"Grand X(M)"
            },
            {
                "brandname":"ZTE",
                "marketname":"Grand X Pro",
                "labelname":"P177A20",
                "Model":"KPN Smart 300"
            },
            {
                "brandname":"ZTE",
                "marketname":"N986D",
                "labelname":"P188F10",
                "Model":"N986+"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"MTS-SP100"
            },
            {
                "brandname":"ZTE",
                "marketname":"Racer",
                "labelname":"mooncake",
                "Model":"ZTE-C N600+"
            },
            {
                "brandname":"ZTE",
                "marketname":"U9180",
                "labelname":"U9180",
                "Model":"ZTE U9180"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"TO101"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade G Lux",
                "labelname":"P172F10",
                "Model":"BGH Joy Smart A6d"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade V",
                "labelname":"ZTE-Blade-V",
                "Model":"Vodafone Blade V"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE LEO S1",
                "labelname":"V972M",
                "Model":"V972M"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Q509T",
                "labelname":"P632T31",
                "Model":"ZTE Blade V2 Lite"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V72",
                "labelname":"V72",
                "Model":"MT7A"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Z932L",
                "labelname":"warplte",
                "Model":"Z932L"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V807",
                "labelname":"P177E01",
                "Model":"Beeline E700"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V809",
                "labelname":"P172A10",
                "Model":"ZTE T809"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V815W",
                "labelname":"P172R10",
                "Model":"SMART Start"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V818",
                "labelname":"P172F01",
                "Model":"ZTE Blade 2"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V965",
                "labelname":"P188F03",
                "Model":"ZTE Blade G2"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE-U V760",
                "labelname":"ztenj73_gb",
                "Model":"MD Smart"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE_LEO_Q1",
                "labelname":"hct72_wet_jb3",
                "Model":"ZTE_CLARO_Q1"
            },
            {
                "brandname":"ZTE",
                "marketname":"009Z",
                "labelname":"bladeplus",
                "Model":"ZTE V882"
            },
            {
                "brandname":"ZTE",
                "marketname":"Blade",
                "labelname":"blade",
                "Model":"ZTE-LIBRA"
            },
            {
                "brandname":"ZTE",
                "marketname":"NX40X",
                "labelname":"NX402",
                "Model":"NX402"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"V9c"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V809",
                "labelname":"P172A10",
                "Model":"BGH Joy Smart A2"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V797",
                "labelname":"P172D03",
                "Model":"VIETTEL V8411"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE V793",
                "labelname":"P175A60",
                "Model":"M9000"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE T86",
                "labelname":"msm8226",
                "Model":"Amazing X1"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Q509T",
                "labelname":"P632T31",
                "Model":"Amazing X5"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Kis Pro",
                "labelname":"nice",
                "Model":"Optimus Zali"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Grand X Quad Lite",
                "labelname":"P188F07",
                "Model":"ZTE Skate 2"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Grand S II",
                "labelname":"P541T50",
                "Model":"ZTE S221"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade Q Lux",
                "labelname":"P632A10",
                "Model":"ZTE Blade A430"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade L2",
                "labelname":"P182A10",
                "Model":"BGH Joy Smart AXS"
            },
            {
                "brandname":"ZTE",
                "marketname":"ZTE Blade C370",
                "labelname":"ZTE_Blade_C370",
                "Model":"NOS NOVU"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"One Pad"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"V9e"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9",
                "labelname":"v9",
                "Model":"myPad P2"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9A",
                "labelname":"v9plus",
                "Model":"Light Tab 2"
            },
            {
                "brandname":"ZTE",
                "marketname":"V9A",
                "labelname":"v9plus",
                "Model":"ZTE V9A"
            }
        ];
        var gotDevice = {};

// returns the marketname of the mobile.
        return {
            getmobilename: function (modelno) {
                for (var i = 0; i < deviceinfo.length; i++) {
                    if (modelno == deviceinfo[i].Model) {
                        gotDevice = {
                            brandname: deviceinfo[i].brandname,
                            marketname: deviceinfo[i].marketname,
                            labelname: deviceinfo[i].labelname,
                            model: deviceinfo[i].Model
                        }
                        return gotDevice;
                    }
                }

            }
        }
    })