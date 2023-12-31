/*

	Ribosomic | 2023
	credit: https://github.com/0xFE0F

	Do not redistribute!

*/

function IFramePage(url){
    return '<html><head></head><body style="overflow: hidden; margin: 0px; height: 100%;"><iframe id="player" src="' + url + '" style="border: none; width: 100%; height: 100%; margin: 0px;"></iframe></body></html>'
}

var PopupEnabled = true
var PinEnabled = false

const Icons = {
    ['pindark']:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAOJJREFUOE/tlE0OgkAMhV/Vg+BJ5BrDhmEBiacAT2ECC2DDHEM8iRzEUDMo/pCBCYbEjU1mNenX95q2hIWDFubBCsxKFTNzogsTURL64jAlYhSY5crFCjtmdgHop6MmohotzmEgahN4FJgWFU8piaRnzJ0Emiz2LfgDn+3+fQ9tizBbYQ885srZB6IZFvgKqGFrQhxJESwCTIvqBFCzCDAtVA6w7Nfw2qJ8tz7Lsra6WcF/7TcVQ5W2Xe6OwVDFQ6UbSW87p4cXAM494VOJBhKjNF0c6z00zd3YyHSlbYM69/8GluKtFRoIBoQAAAAASUVORK5CYII=',
    ['pinlight']:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAANpJREFUOE/tlEEOgjAQRf/gRfAkchKp4qK3AG/RhWjrRcSTyElaUwWCpLTBNHHjJN113vw/mRlC5KDIPASB2z0viVDZwsagup7F0SdiFsgOPNMaGyJkwOvZaIxBkyS4y5NoXOBZYF5w41OiauHM9QJdFvsW/IFDu3/fw9AiLFbYAxnjqZSinRb4CmhhZoVS1WIXBZgX/AagjQLMC34BwIY11FBj64ssW6s6QT7abzlVGdrl9zGYqOhUZqoW6yU9fABIu4QPJRZIBOW6OMF76Jq7uZGxf78C+ob7CZWtsRV5H7MAAAAAAElFTkSuQmCC',
    ['google']:'https://www.google.com/favicon.ico',

    ['fnaf']:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAA1ZJREFUOE89kktoXGUAhb//PuedTB6dMY+ObYqJaUmsxQoRRKIJbYUaKWiJC6HoKogVpAupIrS46MKFLrQLNwVRF4JB68JFA1qksdiaUjsJTWLaPCfPuZ17ZyZz7/1/SUD3h+8czjni1AFb/ePKsVsrfj9Atj4+cUAEPaVAsaHAsi1CITD0KOVyaXS5VBna0TVE9DOHs8ZXojtpqnoN5gI53GppF3NZ9ucMQcaGGgIXg6lijbIEpwprHs6M47ccyZjehgfizD5TbQIT6+qT42ntAxEX1IcSCWi2TirTSDkoIZTPlhcyV1T8uhiea7L1Sx11IN583FSe1FhZ0zg/YPHd3QqLFUUyLthjC6IxE1+zeLDlUgsU3RnBtRlB3BbECBGDLZZa3Q6/OOZpbz8zYBkj12ocSggyEUFLCqSluFlQ1BTkN2G4x8StCkbveUe7m80/xE4hgPV+Z2K7rxMuj9e47pr4tRpn9woSafh8NoYwLHI49OaiSBTf3HTaK7CwC8jU6a9/fLjx23gl4N27LoOnz5PP/8WTMz+STgvC45d4+ZWTDJ84xGudYJk2o/dKFwtu8OEOIHXhZMQ5Wt+AdDUu39lgytjL0nKBctnbjafrOq8ODfHb1e851W1Sk5JVN+SnvN8lmiK8cO5YdOyxZAM3ljQyRpkqHrcfmozNVEmmUkRlmWfbFel4lIJToTUmKW3Dz9PByE6CyNmexspLzXFiXZ1MLyzSFlP4gcu6ENStusxHLYRtMrsVousm684jSp7LD5N+ereD9qj23mBj5NPTvSkymsVceZ2ibqBSDRhLBdxUEhmJ4YTgK43x2S1+n3U+2qzKC/+tQN8+/bPnLe2dbCB4ZCsCC0Q8TsL1qCYEnrBYC7fZKgsW1+Ti+FLQtmP+P+DFLuOX/IoYSKY7SUmX5ZLDzh8NCVYqRUsmi4/O5J0/6WunenXaj+4CYiZPR239raf2aCf6n6jLPZivMCdjlAKN1lwHU/n7NGeyNCkX013Ajgs2POVfn5dfe0F4RbzRa6n7BZgsKkY6LBqrIcqS6DYUo4rkqsZmEmomLDmSYgB/b0B7QhAzFOLL/jp15UaZmz4c1GG/Lgh0Ra5e8DBUHDRhRcBECaoSkhbc3hQ8l1EcadP5F7zTbRGo40VmAAAAAElFTkSuQmCC',
    ['grass']:'data:image/png;base64,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',
    ['cookie']:'data:image/x-icon;base64,AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAD///8AS3CVAB8jPgA4PV4AFyxJACJAZQAuTG8AGzdaADVcgwCfvs8AKC1SAA0WJwBhlLYAEyI8AEt+pAA2ZJMAAAAAAAAAAAAAAAvUu7AAAAAL1lV4NLAAALuE/63mSwAARv2v1e9kAAtW7s7o39PQC3icnJnJttAEWMHunu73sA2M6jqT/OFAAnnKE6nDT9ALX+41n9OlsABH9+HuGGMAALV40/WI2wAACz2miG2wAAAAAk1LsAAAAAAAAAAAAAD//wAA+B8AAOAHAADAAwAAwAMAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAMADAADAAwAA4AcAAPgfAAD//wAA',
    ['resent']:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQxSURBVFhH7ZZrTBRXFMdn1xV3TUxLFVNTZC1GBA1GSG1smzZpfJTGpqHSYtqklDbVtqRJ6wdT8YsmPqq1iU0MD0tRiq5IKIFQUxpYSaMQBQQbqLwq3RVk2e4iwz5mdmbuqzuTw7rgthEWP5Xfl5kz53/PfZy5515unv89OnjOCEvziCktJXZNvGlhvJFxi3WMM3Ay9pCf7TZvce/g8hs7EUjnjvO9vKlFUD4cVXCDQKjAIkEoo73jY+hIxynhxZpl0DQ6yg606n4S5BwbJiME+tGQMaMDvJ04/EWyTzl8D5FbMrgYIox88/vdwEu1SRBmdpwYGDfWyPiil1GIHCSAGLk4MKjkWLNdz1UZQMqVNg8Z6mVcKYKMKYTh3Kau4c1VC0EyM453/B1jQbg+APFU6LCX4lxrrS+tcgnIpmAZ8iZ0MhoaLa2zMWlzdTa4I6KH58Ose+pohkGfYQST+ZHg1esE7uCmdGP60qP8hgsmcIVQJpA3+PcxMDkufRlnoOxVsB6dfJvniWpKQylVkQ9ev2lFRPtGxwMMZ11u7EutCKVA5ayg7BkNSxf1yQxvqqoFd0QiroC/0yG4KRuenAprd3I9XkWKM+hiVFsXa+T0GeatCQy/rAmCFLqEteuMC44/Hb6zh/xccGf0gBWRiAM4nZWC+0Wc1xachPah5g67+vF6cU1YcNbPowDj+tT3b++Lyamxixqf1+tjNSfAzvVOSIwrAHPm7BeUfBuhsrD/6kQDJhOwsloKUJpFW9oin7yrhxAeXCHo2duivPHSdi3QbPkg7xfdEY9U6AjfhkFoSRfr/NSaZ5VRNT/Np9YHcurWXWmD5QUIM3t2C8o++4Nd9QC/wiRCp9QlFdruVJQ91gJ+/fknIUR07Bv1rS7tduW0TJ9lOH6F4paRYeXrtpO+5LJEaDp3fCIjixi+tdQlhneGKcNfNI24V5eaQT637HT44svC6oG6r/nM6tYfMR4KDUItuXub7ngSSxKg2dyRKeFj4YWFVNxm4jMF7+beF9dWEDoGn7VBkM8a+nlz8QpoGj07Opymw5i4oAsN/F6t0LOyUDsH3vdIW6yUInAxJigM7aprd5iLI54TM2arT972a3juxWAHzxbUg1vjIxEdGAzXuASmbK+s7131/SOfgP96GBl4+cZvmHUrYHN/uDksoDawNMRrQyfOIHptUqOLW8wZCrZlJC43FtUklc/qtjWFDId/6SEFX3aqs6vpY4G473aDK8TbY0JS+bQbEm11MCm19BBIouPNzHLd505fsruoY6N7xemIBSYrgPL/hM4nIVfsVEwu2QuSx8tbXWMxXyHSjaHzSej1ezTwZeNJV3ad+UzCuehT8l+8zgdSSsjD90bcZB+TtlQcu7LqhwUgfXy88Re/5IJXeoX3KDuEm6Ovud+pTW9eWbwI3PPMEwGO+wezVqhcY67JugAAAABJRU5ErkJggg==',
    ['stickmin']:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABYNJREFUWEfFln1M1HUcx193x8MBBwLydALp8SSKIQwwUbS5dCNDNkRqiAarbOYSbUvYXJvzn9pqU5ojhrXVzIdpLcB0uiwfWCgMAgPlQVFQ0QnoMBDhjodr3x/eD467k0PW+vz3+36e3r/Ps4L/mRQz9P8FsBlYDTS/jK2ZAlABauARoAMeThfETAGY/M16HgHtfw1A/O1PwDorjiqB1wH9dEBMJwLewAPgXeDEdJy8SNZeAK8CdUAoEAXkA+LN/bnxp0A98CVwBhi1F6C9AJQi9Eqlcn1OTg55eXmEhoaiUokahJGREe7cuUNBQQFFRUXiuwTYYA8QewAkAFUFB75R7Pj4I8lhV1cXPj4+KJUC1xip1WpaW1sJCgri+PHjZGZmGo1G4wqgYiYpeF/jPuu7q423CA2aLdtJS0ujoaFBcmiisLAwCVhvb68cFa1WS3d391ag2BaIF0VgnbuH58lTF/9mZewrZvqjo6NS+IVDX19fidff349Go6Guro6YmBhZPjg4mI6OjvWASIsF2QIwS6VSPTl7+SZJMcGonRwsFDdt2kRjYyO1tbUyLz09naqqKuFQfjMajTg7OzM0NOQJ/DPZkC0AnT+Wlvtp5wTxRoIYcJak1+ulvA8NDeHgMAZwcHAQFxcXDAYDjo6OslJ7ezs6na4L8LcHwPx5IRHN3x47i4+nKzERFjqyDS8vL3Jzc9m7d6/8JtJQWFhIdna2ma/o6GhRNwsm7wxrEag5erIiztdfy0KdD3N8Ta1uGYU9e/awb98++vr6ZObatWtF4VFdXW2m0NbWRkhIiMhX3ESGNQCj56puS+9Loubg4eZsq4AlR35+fog8m6i4uJjdu3fz+PFjCz3Rtkaj0cznZACO7h6ehl/OjRXW8sXBuDhbFqDZHygUiHpwcnKSnktLS8nKypK6YjL5+/uLzhH7RN4XkwH4RS5c3Hng+7GOWRYdhKt6vJishUK0o5gHOt1YsZaUlLBx40YGBgYsxJOSkqioqAh8vlMk/mQAQTHxife+KjwiMeMitXh5CMC2SbRYZWUlsbGxklBZWZkEwFoEUlJSOH36tNgnt00WJwPwCZsf1V106FeJHzBbw6LQsUFji0S7lZeXk5iYKImIlsvIyLAoQsFLSEigpqZG3Azy4TIZgMrVTTNcdl4stjFavcT6HDDxxQxoamoiPDwcMSHr6+sJDAyUJ6RJbtAwjIfGVcwNUSxDtiIg3kfOVd2Wt8xUrSiGzvDwMKmpqeTn50tgtm/fTk9PD97e4oQYoz+q21i9JES0y/gGs1IDQva3g0fPrNGFzpeVV8XNRaUy05N5Yg6sXLmS+Ph4+e3SpXKWJi5FpVRKU/JKQwfXr19nS2by78Caiem0Ngf8fXwDHh47dVmWE0Kr4uehVJqLJycni6KS7wKTwuHDR9jw9jsM6QdovNtLX7+BrNQkujofBACdUwEQ/KbCH8oiIxaIo2ec4hZo8XK33hViJ9y/f5+Wlhaam1tIz8xh//4C3kzbzK0bjWzdnNICRJoZtJECIeOkUCj0YhtOPDoEQ0TB39sNPy83xD1yrf4q7Q/7eH35a/jP1uDsqEKhUKBQIE3Dv24+IXlZuJiAYqQa7AUg5GLUape6kxevSQZt0YlDReza8SHnL1ygpfUu2gAfPv0kV9ZxVqsx6PVi/o/v7QnGpjrJlqocHK78fLYGjbuHTRATGbXVFURFzOWtNSt41PMUX293m8eI0JsKgJAR+/hueuZ7Tlt3fmYXiF3bsrjZfG342bOnfxqNxlUvUrIHgEk/D/g8PHKRKnvLThbFJKB2cZV4+sFnNFyt5tDBr7nR3DACbAMO2oN2OgBM9oKBD4AMwDRpxKklNlghcM8exyaZlwEwHftTyv4Leq6/MOaNq10AAAAASUVORK5CYII=',
    ['popcap']:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAA3hJREFUOE9tk2lM2wUYh5+/UNoxGKVAuUqAQmZLYZoVGMdwHDsyMKAbGua8YrIMY2KiEmUJg7Z8wgTJjHEfppPpDEQnDMeMchQEJgZ0E1q2bnaFwhiUY4BQlnG0ZiTo4nw/vsfz5f09Av9TqthYXXCwPEMeFJT9cDw1PWN0OBzdFqtV99914dFGgkZ9MiMt3TA3N88y3sjkYbhcbmanJ/AVlvGXSem+0lthGhoybN79A3jl6JGOF0TemVPDI/gERpOkTWBbWhKunUkMTN6n/udB7FcayVXLMZlMnbXnz2c9hGwA8vPzT54oLTXUXPiFV3eoSKz7jNHCIiLaW/CpPcO6CxxLq9Sa5zA2fM2pl1KpqvqworGpybABMJtM7obOP1CkHGT3V9Xc8Q4iamGckcAoxFnpeHl48EAeimthnv5bdxmdsXP8gJY4TbwgvFhYqNMbDBVnfl8iOT6GZ55LZ7CymoTT1VjzDiF2uYj8qYl7/oE8SMtAUfclLxd/xKlMGXq9Ti/oy8vbntTuybkjS2Bn3w8o2y7jeKOYcaUGbcnr2A/kI1m6T8iPDdgPHUEyv8jn2a+R6BxicqjXKHxSU+P2itTilKvZbu7B6RYRnPI0Wwb68JZIWFl3MS8So2j4huX9BxlLzKB3Zh3RrJXgiasIZaUfuH1iUxGp0gn38URh6ce3+SKzWXuRmQdxvl2CtKuFGYkfnsm7WF13c2nYyaqtD6m9F6EgL68tOj45x3f/cdQyL9LePcpE8XsQE8OKAFKJJ8tb/RGzhodzkSmRH+du/cXWrrM4rvcZhTiVSrc3K7NiXFNEoVLGvhPH6D7XTIRtEPGl75EOXWP02Fv4tbbiN3KTro/r+fRXK9qb9Rg7OvQbbywqPOyeFodyOGw7uQvDjJVUEPH+myw8W4C0rYXVbdtYTE5F2vgdte/UYPyiCsXKXeq+vSBsACLDw8sStdrKWcUuCtweKMKC8AsJxNsTfMbHCLlYR09KLpZ9z9PS2kzQaDe/Xbtabh8br9yMsqCKjTaqVZpM36eysIUkE6KIRCJ6gj39l/GdcnBak03kZD+LA+1YLJbOG39a/43yphjBAQFlcWpVZVZ2DmtbAgiNTWBtbZ3J22bEq3N0Go2Yb1wvn5q5V/mYTI9auSM+TqeMUu6OUUbnIAjcttnabcMjPYNm82M6/w2BDFWz6KzmKQAAAABJRU5ErkJggg==', 
    ['1v1']:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAZBJREFUOE9jZKAQMFKonwFugJSUlMjTp09fgwz89+/fP2ZmZmZshqOrY3R0dLSvq6trcHBwcIBpOHPmzBlTU1NTZANwqWO8f//+fQUFBQVkxdHR0ZHLli1bgSyGSx3j27dv34IUCgkJCcE0MDIycjMwMHxDNgCXOnAYqKqqKt26desuiP3/////TExMTNj8j00d2IC+vr6+wsLCQhD71q1bt9TV1dWxGYBNHdiAN2/evBEWFhYGsXNycnLUzuzRYmZiZM45fiPDQIDbIEVTNmPp3VeLNl+7tQlZ3dSpU6eCDQA5G2ajgICA0CkX3fPyPJzyHAt3M3+Nc/n1+9//XwJL9nKhq/v48eN7RlFRUYlXr149RwpAxgW2OksilCSjV959sSxcWSJKadURud88PL/R1YH0MFZXV1e1tLS0gjhPnz59KiMjIxOhJB61wFZvKUhs7YNXq6MPXgzDpg5swKNHjx7JysrKgjj19fV1TU1NzYocHPLXw20f/Pv//x/Xoj3gFIlNHdgAquUFcg2i2AUA3MzFocged+MAAAAASUVORK5CYII=',
}

const IsPopup = document.head.getAttribute('ispopup') || false
const Page = document.head.getAttribute('page')

const Pages = {
    minecraft:{
        minecraft1dot5:{
            title:'Minecraft 1.5.2',
            note:'',

            icon:Icons.grass,
            url:'https://ribosomic.github.io/apps/cavegame.html'
        },

        minecraft1dot8:{
            offline:true,

            title:'Minecraft 1.8.8',
            note:'(Resent client, can\'t run singleplayer!)',

            icon:Icons.resent,
            url:'https://resent.kones.tech/'
        },
    },
    
    cookieclicker:{
        title:'Cookie Clicker',
        note:'',

        icon:Icons.cookie,
        url:'https://stennen.github.io/games/cookies/'
    },

    henrystickmincollection:{
        breakingthebank:{
            title:'Henry Stickmin, Breaking the Bank',
            note:'',

            icon:Icons.stickmin,
            url:'https://files.crazygames.com/ruffle/breaking-the-bank/1/breaking_the_bank.html'
        },

        escapetheprison:{
            title:'Henry Stickmin, Escape the Prison',
            note:'',

            icon:Icons.stickmin,
            url:'https://files.crazygames.com/ruffle/escaping-the-prison/2/escaping_the_prison.html'
        },

        stealingthediamond:{
            nooffline:true,

            title:'Henry Stickmin, Stealing the Diamond',
            note:'',

            icon:Icons.stickmin,
            url:'https://files.crazygames.com/ruffle/stealing-the-diamond/1/stealing_the_diamond.html'
        },

        infiltratingtheairship:{
            title:'Henry Stickmin, Infiltrating the Airship',
            note:'',

            icon:Icons.stickmin,
            url:'https://files.crazygames.com/ruffle/infiltrating-the-airship/2/infiltrating_the_airship.html'
        },

        fleeingthecomplex:{
            title:'Henry Stickmin, Fleeing the Complex',
            note:'',

            icon:Icons.stickmin,
            url:'https://files.crazygames.com/ruffle/fleeing-the-complex/1/fleeing_the_complex.html'
        },
    },

    plantsvszombies:{
        offline:true,

        title:'Plants VS Zombies DS',
        note:'(Small resolution)',

        icon:Icons.popcap,
        url:'https://ribosomic.github.io/apps/pvz.html',

        size:[733,440],
    },

    fortnite:{
        ['1v1lol']:{
            title:'1v1.LOL',
            note:'v3.9',

            icon:Icons['1v1'],
            url:'https://ribosomic.github.io/apps/1v1lol.html'
        },

        ['1v1lolnew']:{
            title:'1v1.LOL',
            note:'(New & Updated, Likely blocked)',

            icon:Icons['1v1'],
            url:'https://d1tm91r4ytbt54.cloudfront.net/4a2bd50a-0f2f-45be-9e66-a2adf5849945/1680626121644/1v1-lol/index.html'
        }
    },

    fnaf:{
        fnaf1:{
            title:'FNAF 1',
            note:'',

            icon:Icons['fnaf'],
            url:'https://ubg98.github.io/FNAF/'
        },

        fnaf2:{
            title:'FNAF 2',
            note:'',

            icon:Icons['fnaf'],
            url:'https://ubg98.github.io/FNAF2/'
        },

        fnaf3:{
            title:'FNAF 3',
            note:'',

            icon:Icons['fnaf'],
            url:'https://ubg98.github.io/FNAF3/'
        },

        fnaf4:{
            title:'FNAF 4',
            note:'',

            icon:Icons['fnaf'],
            url:'https://ubg98.github.io/FNAF4/'
        },

        fnaf5:{
            title:'FNAF 5',
            note:'',

            icon:Icons['fnaf'],
            url:'https://ubg98.github.io/FNAF5/'
        },
    }
}

function LoadPage(page){
    var Page = Pages[page]
    for (var Index of Object.keys(Pages)) {
        if (typeof(Pages[Index]) != 'object'){continue;}
        for (var Index2 of Object.keys(Pages[Index])) {if (Index2 == page){Page = Pages[Index][Index2]; break}}
    }

    return Page
}

function LoadPageHTML(Page){
    return Page.url && IFramePage(Page.url) || Page.html
}

function LoadPageNoTrace(index, unload, nopopup){
    unload = (unload || unload == null)

    const Page = LoadPage(index)
    var features = ''

    if (PopupEnabled && !nopopup){
        const Size = Page.size || [854,480] // default size

        const Width = Size[0]
        const Height = Size[1]

        features = 'popup=1,toolbar=0,location=0,width=' + Width + ',height=' + Height
    }

    const newwindow = window.open('', null, features)
    const script = document.createElement('script')

    script.src = 'resources/global.js'

    newwindow.document.getElementsByTagName("html")[0].innerHTML = LoadPageHTML(Page)

    if (PopupEnabled && !nopopup){
        newwindow.document.head.setAttribute('ispopup', true)
    }

    newwindow.document.head.setAttribute('page', index)
    newwindow.document.head.appendChild(script)

    if (unload){window.close()}
}

function CreateElementFromHTML(htmlString){ // https://stackoverflow.com/a/494348
    var div = document.createElement('div');

    div.innerHTML = htmlString.trim();
  
    return div.firstChild;
}

var icon = document.querySelector("link[rel~='icon']"); // via https://stackoverflow.com/a/2995536

if (!icon){
    icon = document.createElement('link');
    icon.rel = 'icon';

    document.head.appendChild(icon);
}

if (!IsPopup){
    const FalseIdentities = [{
        icon:Icons.google,
        title:'screenshot hotkey - Google Search',
        url:'https://www.google.com/search?q=screenshot+hotkey'
    }, {
        icon:Icons.google,
        title:'google translate - Google Search',
        url:'https://www.google.com/search?q=google+translate'
    }, {
        icon:Icons.google,
        title:'dictionary - Google Search',
        url:'https://www.google.com/search?q=google+translate'
    }, {
        icon:Icons.google,
        title:'spell check - Google Search',
        url:'https://www.google.com/search?q=google+translate'
    }]

    const FalseIdentityIndex = Math.floor(Math.random() * FalseIdentities.length)
    const FalseIdentity = FalseIdentities[FalseIdentityIndex]

    function Panic(){
        window.removeEventListener('beforeunload', Unload)
        window.location.replace(FalseIdentity.url)
    }

    function PinMode(){
        if (PinEnabled){
            const DarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches || false

            const IconIndex = 'pin' + (DarkMode && 'dark' || 'light')
            const Icon = Icons[IconIndex]

            console.log(IconIndex)

            icon.href = Icon
            document.title = 'Pin Me! (Right click)'
        } else {
            icon.href = FalseIdentity.icon
            document.title = FalseIdentity.title
        }
    }

    function Unload(e){
        const msg = 'Are you sure to leave the page?'
        e.returnValue = msg
        return msg
    }

    if (window.location.href.includes('about:blank')){
        window.addEventListener('beforeunload', Unload) // pop-up with a warning before unload, as page cannot be restored with back button!
    }

    icon.href = FalseIdentity.icon
    document.title = FalseIdentity.title
} else {
    // console.log(Page)

    const PageInfo = LoadPage(Page)

    const Icon = PageInfo.icon
    const Title = PageInfo.title

    icon.href = Icon
    document.title = Title
}
