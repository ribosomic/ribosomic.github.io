/*

	Ribosomic | 2023
	credit: https://github.com/0xFE0F

	Do not redistribute!

*/

function IFramePage(url, popup){
    return '<html><head></head><body style="margin: 0px; height: 100%;"><iframe id="player" src="' + url + '" style="border: none; width: 100%; height: 100%; margin: 0px;"></iframe></body></html>'
}

const Icons = {
    grass:'data:image/png;base64,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',
    cookie:'data:image/x-icon;base64,AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAD///8AS3CVAB8jPgA4PV4AFyxJACJAZQAuTG8AGzdaADVcgwCfvs8AKC1SAA0WJwBhlLYAEyI8AEt+pAA2ZJMAAAAAAAAAAAAAAAvUu7AAAAAL1lV4NLAAALuE/63mSwAARv2v1e9kAAtW7s7o39PQC3icnJnJttAEWMHunu73sA2M6jqT/OFAAnnKE6nDT9ALX+41n9OlsABH9+HuGGMAALV40/WI2wAACz2miG2wAAAAAk1LsAAAAAAAAAAAAAD//wAA+B8AAOAHAADAAwAAwAMAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAMADAADAAwAA4AcAAPgfAAD//wAA',
    google:'https://www.google.com/favicon.ico', // 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIklEQVQ4jYWSS0iUURTHf/fe8RvHooE2VlT2FNqUGWmNEYUR9lhEEVJhUIsoXOQuap1Rq6KHNQt3LaPAIOxhlNTChUwLMU3NR1CklUzg6xvPd1ro2KhTHjjcA/e8/uf/hzmmqsUiEheRLhHxp/2TiDxQ1aK5+ZmFeSJSrwuYiMRVNZKuMxnFz51zu9T3GX/6iPGmRqS/F5WAUMEawuUVRI5UYjwPEWl2zlUYY8YMgIjUW2vPBkPfSV6uYbKvJ+uW3rZSojfuABAEQdw5d96oajHQqr7P8IUqpL8X43lEjp3EK4mBtfgt75l4+4po7U3cytWZPbcyjUlTidv642ipDu7foX7bh2zgs92jDhHpUlWdbNmuEw15OvqweqE7ZjboCAEFADrSjs1LkRM7NAt3+bWRebfYudFx9XguwFqbwePs9z/mT/6NLdAHMBpex28W0/C1Y1Zy05VFM75nUwiAZVGT/v5sgdcA3UurOPUrxvXOFhJD7fOmdn4LeNc5NbpkfWimv5mWZ8KXFKdfXqInOYBnc6gsPEjZ8mKssbQOtvEkMczYl0oK8z3un4lgppbYkhZS3Fp7bnD0Jxeba+lODmTFviFcxq29NeRHDUEQ1DnnqtNSjohIo3Nutx+keNz9gmf9zfQkB0ChYMkK9q2KcaLwMJFQGFV9Y4w5YIwZzyBBI2lRLcD9PVXN/SdFqlokInUi0iEiE9P+UUTuqurmufl/AKTzsFGmvUNUAAAAAElFTkSuQmCC',
    resent:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQxSURBVFhH7ZZrTBRXFMdn1xV3TUxLFVNTZC1GBA1GSG1smzZpfJTGpqHSYtqklDbVtqRJ6wdT8YsmPqq1iU0MD0tRiq5IKIFQUxpYSaMQBQQbqLwq3RVk2e4iwz5mdmbuqzuTw7rgthEWP5Xfl5kz53/PfZy5515unv89OnjOCEvziCktJXZNvGlhvJFxi3WMM3Ay9pCf7TZvce/g8hs7EUjnjvO9vKlFUD4cVXCDQKjAIkEoo73jY+hIxynhxZpl0DQ6yg606n4S5BwbJiME+tGQMaMDvJ04/EWyTzl8D5FbMrgYIox88/vdwEu1SRBmdpwYGDfWyPiil1GIHCSAGLk4MKjkWLNdz1UZQMqVNg8Z6mVcKYKMKYTh3Kau4c1VC0EyM453/B1jQbg+APFU6LCX4lxrrS+tcgnIpmAZ8iZ0MhoaLa2zMWlzdTa4I6KH58Ose+pohkGfYQST+ZHg1esE7uCmdGP60qP8hgsmcIVQJpA3+PcxMDkufRlnoOxVsB6dfJvniWpKQylVkQ9ev2lFRPtGxwMMZ11u7EutCKVA5ayg7BkNSxf1yQxvqqoFd0QiroC/0yG4KRuenAprd3I9XkWKM+hiVFsXa+T0GeatCQy/rAmCFLqEteuMC44/Hb6zh/xccGf0gBWRiAM4nZWC+0Wc1xachPah5g67+vF6cU1YcNbPowDj+tT3b++Lyamxixqf1+tjNSfAzvVOSIwrAHPm7BeUfBuhsrD/6kQDJhOwsloKUJpFW9oin7yrhxAeXCHo2duivPHSdi3QbPkg7xfdEY9U6AjfhkFoSRfr/NSaZ5VRNT/Np9YHcurWXWmD5QUIM3t2C8o++4Nd9QC/wiRCp9QlFdruVJQ91gJ+/fknIUR07Bv1rS7tduW0TJ9lOH6F4paRYeXrtpO+5LJEaDp3fCIjixi+tdQlhneGKcNfNI24V5eaQT637HT44svC6oG6r/nM6tYfMR4KDUItuXub7ngSSxKg2dyRKeFj4YWFVNxm4jMF7+beF9dWEDoGn7VBkM8a+nlz8QpoGj07Opymw5i4oAsN/F6t0LOyUDsH3vdIW6yUInAxJigM7aprd5iLI54TM2arT972a3juxWAHzxbUg1vjIxEdGAzXuASmbK+s7131/SOfgP96GBl4+cZvmHUrYHN/uDksoDawNMRrQyfOIHptUqOLW8wZCrZlJC43FtUklc/qtjWFDId/6SEFX3aqs6vpY4G473aDK8TbY0JS+bQbEm11MCm19BBIouPNzHLd505fsruoY6N7xemIBSYrgPL/hM4nIVfsVEwu2QuSx8tbXWMxXyHSjaHzSej1ezTwZeNJV3ad+UzCuehT8l+8zgdSSsjD90bcZB+TtlQcu7LqhwUgfXy88Re/5IJXeoX3KDuEm6Ovud+pTW9eWbwI3PPMEwGO+wezVqhcY67JugAAAABJRU5ErkJggg==',
    stickmin:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABYNJREFUWEfFln1M1HUcx193x8MBBwLydALp8SSKIQwwUbS5dCNDNkRqiAarbOYSbUvYXJvzn9pqU5ojhrXVzIdpLcB0uiwfWCgMAgPlQVFQ0QnoMBDhjodr3x/eD467k0PW+vz3+36e3r/Ps4L/mRQz9P8FsBlYDTS/jK2ZAlABauARoAMeThfETAGY/M16HgHtfw1A/O1PwDorjiqB1wH9dEBMJwLewAPgXeDEdJy8SNZeAK8CdUAoEAXkA+LN/bnxp0A98CVwBhi1F6C9AJQi9Eqlcn1OTg55eXmEhoaiUokahJGREe7cuUNBQQFFRUXiuwTYYA8QewAkAFUFB75R7Pj4I8lhV1cXPj4+KJUC1xip1WpaW1sJCgri+PHjZGZmGo1G4wqgYiYpeF/jPuu7q423CA2aLdtJS0ujoaFBcmiisLAwCVhvb68cFa1WS3d391ag2BaIF0VgnbuH58lTF/9mZewrZvqjo6NS+IVDX19fidff349Go6Guro6YmBhZPjg4mI6OjvWASIsF2QIwS6VSPTl7+SZJMcGonRwsFDdt2kRjYyO1tbUyLz09naqqKuFQfjMajTg7OzM0NOQJ/DPZkC0AnT+Wlvtp5wTxRoIYcJak1+ulvA8NDeHgMAZwcHAQFxcXDAYDjo6OslJ7ezs6na4L8LcHwPx5IRHN3x47i4+nKzERFjqyDS8vL3Jzc9m7d6/8JtJQWFhIdna2ma/o6GhRNwsm7wxrEag5erIiztdfy0KdD3N8Ta1uGYU9e/awb98++vr6ZObatWtF4VFdXW2m0NbWRkhIiMhX3ESGNQCj56puS+9Loubg4eZsq4AlR35+fog8m6i4uJjdu3fz+PFjCz3Rtkaj0cznZACO7h6ehl/OjRXW8sXBuDhbFqDZHygUiHpwcnKSnktLS8nKypK6YjL5+/uLzhH7RN4XkwH4RS5c3Hng+7GOWRYdhKt6vJishUK0o5gHOt1YsZaUlLBx40YGBgYsxJOSkqioqAh8vlMk/mQAQTHxife+KjwiMeMitXh5CMC2SbRYZWUlsbGxklBZWZkEwFoEUlJSOH36tNgnt00WJwPwCZsf1V106FeJHzBbw6LQsUFji0S7lZeXk5iYKImIlsvIyLAoQsFLSEigpqZG3Azy4TIZgMrVTTNcdl4stjFavcT6HDDxxQxoamoiPDwcMSHr6+sJDAyUJ6RJbtAwjIfGVcwNUSxDtiIg3kfOVd2Wt8xUrSiGzvDwMKmpqeTn50tgtm/fTk9PD97e4oQYoz+q21i9JES0y/gGs1IDQva3g0fPrNGFzpeVV8XNRaUy05N5Yg6sXLmS+Ph4+e3SpXKWJi5FpVRKU/JKQwfXr19nS2by78Caiem0Ngf8fXwDHh47dVmWE0Kr4uehVJqLJycni6KS7wKTwuHDR9jw9jsM6QdovNtLX7+BrNQkujofBACdUwEQ/KbCH8oiIxaIo2ec4hZo8XK33hViJ9y/f5+Wlhaam1tIz8xh//4C3kzbzK0bjWzdnNICRJoZtJECIeOkUCj0YhtOPDoEQ0TB39sNPy83xD1yrf4q7Q/7eH35a/jP1uDsqEKhUKBQIE3Dv24+IXlZuJiAYqQa7AUg5GLUape6kxevSQZt0YlDReza8SHnL1ygpfUu2gAfPv0kV9ZxVqsx6PVi/o/v7QnGpjrJlqocHK78fLYGjbuHTRATGbXVFURFzOWtNSt41PMUX293m8eI0JsKgJAR+/hueuZ7Tlt3fmYXiF3bsrjZfG342bOnfxqNxlUvUrIHgEk/D/g8PHKRKnvLThbFJKB2cZV4+sFnNFyt5tDBr7nR3DACbAMO2oN2OgBM9oKBD4AMwDRpxKklNlghcM8exyaZlwEwHftTyv4Leq6/MOaNq10AAAAASUVORK5CYII=',
}

const IsPopup = document.head.getAttribute('ispopup') || false
const Page = document.head.getAttribute('page')

const Pages = {
    minecraft:{
        minecraft1dot5:{
            title:'Minecraft 1.5.2',
            note:'',

            icon:Icons.grass,
            url:'https://ribosomic.github.io/cavegame.html'
        },

        minecraft1dot8:{
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
}

for (var Index of Object.keys(Pages)) { // make all url pages into iframe html pages
    if (Pages[Index].url && !Pages[Index].html){Pages[Index].html = IFramePage(Pages[Index].url)}
}

var PopupEnabled = true

function LoadPageNoTrace(html, unload, page, nopopup){
    unload = (unload || unload == null)

    var features = ''

    if (PopupEnabled && !nopopup){
        features = 'popup=1,toolbar=0,location=0,width=854,height=480'
    }

    const newwindow = window.open('', null, features)
    const script = document.createElement('script')

    script.src = 'global.js'

    newwindow.document.getElementsByTagName("html")[0].innerHTML = html

    if (PopupEnabled && !nopopup){
        newwindow.document.head.setAttribute('ispopup', true)
    }

    newwindow.document.head.setAttribute('page', page)
    newwindow.document.head.appendChild(script)

    if (unload){window.close()}
}

function LoadPage(page){
    return Pages[page]
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
    const Icon = Pages[Page].icon
    const Title = Pages[Page].title

    icon.href = Icon
    document.title = Title
}
