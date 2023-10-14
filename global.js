function IFramePage(url, popup){
    // if (!popup){return '<html><head><link rel="stylesheet" href="style.css"></head><body style="margin: 0px; height: 100vh;"><iframe src="' + url + '" style="border: none; width: 100%; height: 97%; margin: 0px;"></iframe><input type="button" id="panic" value="Panic (F4 Hotkey)" onclick="Panic(this);"></input></body></html>'}

    return '<html><head></head><body style="margin: 0px; height: 100vh;"><iframe src="' + url + '" style="border: none; width: 100%; height: 100%; margin: 0px;"></iframe></body></html>'
}

const IsPopup = document.head.getAttribute('ispopup') || false
const Page = document.head.getAttribute('page')

const Pages = {
    minecraft:{
        title:'Minecraft 1.5.2',
        icon:'data:image/png;base64,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',

        html:IFramePage('https://ribosomic.github.io/cavegame.html')
    },
    
    cookieclicker:{
        title:'Cookie Clicker',
        icon:'data:image/x-icon;base64,AAABAAEAEBAQAAAAAAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAD///8AS3CVAB8jPgA4PV4AFyxJACJAZQAuTG8AGzdaADVcgwCfvs8AKC1SAA0WJwBhlLYAEyI8AEt+pAA2ZJMAAAAAAAAAAAAAAAvUu7AAAAAL1lV4NLAAALuE/63mSwAARv2v1e9kAAtW7s7o39PQC3icnJnJttAEWMHunu73sA2M6jqT/OFAAnnKE6nDT9ALX+41n9OlsABH9+HuGGMAALV40/WI2wAACz2miG2wAAAAAk1LsAAAAAAAAAAAAAD//wAA+B8AAOAHAADAAwAAwAMAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAMADAADAAwAA4AcAAPgfAAD//wAA',

        html:IFramePage('https://stennen.github.io/games/cookies/')
    }
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

var icon = document.querySelector("link[rel~='icon']"); // via https://stackoverflow.com/a/2995536

if (!icon){
    icon = document.createElement('link');
    icon.rel = 'icon';

    document.head.appendChild(icon);
}

if (!IsPopup){
    const FalseIdentities = [{
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABsklEQVQYV6WPMY9MYRSGnzO5K5mrsczINCujkBh3ihU1CX9BMSsKtqTQ6mzDr5BFQiLRSkRoFRu7icIQ3YoCESHL3DEbmfMqzjc3d1BxmvPlS97nPK9J4n8mm75Yvsz00zkzYTYPkwypAbJ4e2xkyBuw0LpvPzfaMpURrgMUAIhgBZGBGgGznIzpGMx4OW7xatLGbBYGJJTecoHHu2h+pZ/vgP8gQ4YQw3GbB1+OQgIgkS80kYvR7igBHLkzaImi+Q1kZKEJuJB71WDvnpy1M1dBsPb0BqNJiWpGqSWN6GRJ05ELubiwvEJ33xLdxSVWT5xHVRclw8ilCoY89STwt7fu0V08BMD687thKM1biKhgM3CtwmhScu3xdSRR7pZVuPInDicDknoA+p0eRecY/U4PgOGH12y83WT783aAHDSrIBlAquBcOXmJ00dOUZ+i02Nw/CwPh4+4+exWfMqQjExuYIDC4vdwfQ7v786FEWSoAYiiucPgwDuGb9bnQlVloCw/stJ+T5F/j4MyrHxyUKCw+NsIIK4pbbAAy8gkWwUu2uzSDKT6+jMIINkdU93xH+YXTrImgXmBBtYAAAAASUVORK5CYII=',
        title:'Home', // google classroom
        url:'https://classroom.google.com/h'
    }, {
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAbxJREFUeF7tWz1KA1EQni9GDGzQyhsI3sADZNOktPUIFtbGPpvewiPYWqYxB9AbCN4gjcouKMaMbGAhWEjehH283fdttbAz783vNzMLA9l4Rrd6+J0Xl6o4F+ipqhxtfm/qOyDvongB9GG/n9zNrvBR6YLqJZ1+DlWX96Jy3FRFt5IbsgC6F/Nx77GkXxtgrfzqZyai3a0OaTwRlujsjUojoAz7r7x4bb3n/zoNsjjoJycYZvn1SmXaeKcaFOhAxkgnxZOKnhn4G88CwTPSLH9rC9q7eqSsDhhMcnVlbBM9DcAIYAoQAwiCbUJ1V13MVWB+k7jeVSt9mhWm82kAaxlkBDAFiAEm0KmLiSDouwrU5Unf55rLoG9B67qPBrD2AXV5xPe5jABGAH+I2H6IcBbgLMBZwHfF+vc+zgK+ZwGCYOwgGBQA7CAMW2G2wmyFba3wDmkXFCsxgBhgxAAfjZC1vXXJMXMK0AAeOkFGgHHAYQo4WIAYYC2D0YOgQ5QFTWpOgaC1chCOBrBigIORgyZlBDACjMNQ0HHtIBxTIPqVmeiXpqJfm4t+cbIEzKhXZ6uKEfXydGWEGNfnfwHmvURGnfLKnwAAAABJRU5ErkJggg==',
        title:'Google Docs', // google docs
        url:'https://docs.google.com/document/u/0/'
    }, {
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIklEQVQ4jYWSS0iUURTHf/fe8RvHooE2VlT2FNqUGWmNEYUR9lhEEVJhUIsoXOQuap1Rq6KHNQt3LaPAIOxhlNTChUwLMU3NR1CklUzg6xvPd1ro2KhTHjjcA/e8/uf/hzmmqsUiEheRLhHxp/2TiDxQ1aK5+ZmFeSJSrwuYiMRVNZKuMxnFz51zu9T3GX/6iPGmRqS/F5WAUMEawuUVRI5UYjwPEWl2zlUYY8YMgIjUW2vPBkPfSV6uYbKvJ+uW3rZSojfuABAEQdw5d96oajHQqr7P8IUqpL8X43lEjp3EK4mBtfgt75l4+4po7U3cytWZPbcyjUlTidv642ipDu7foX7bh2zgs92jDhHpUlWdbNmuEw15OvqweqE7ZjboCAEFADrSjs1LkRM7NAt3+bWRebfYudFx9XguwFqbwePs9z/mT/6NLdAHMBpex28W0/C1Y1Zy05VFM75nUwiAZVGT/v5sgdcA3UurOPUrxvXOFhJD7fOmdn4LeNc5NbpkfWimv5mWZ8KXFKdfXqInOYBnc6gsPEjZ8mKssbQOtvEkMczYl0oK8z3un4lgppbYkhZS3Fp7bnD0Jxeba+lODmTFviFcxq29NeRHDUEQ1DnnqtNSjohIo3Nutx+keNz9gmf9zfQkB0ChYMkK9q2KcaLwMJFQGFV9Y4w5YIwZzyBBI2lRLcD9PVXN/SdFqlokInUi0iEiE9P+UUTuqurmufl/AKTzsFGmvUNUAAAAAElFTkSuQmCC',
        title:'screenshot hotkey - Google Search', // google
        url:'https://www.google.com/search?q=screenshot+hotkey'
    }, {
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAYRJREFUeF7tmzFKxFAQhr8xjZJiBa+gR/AMsmph6xk8gfZewRtY2xgtVrHfGyh4gm1WSQTBdSRCZFGT5aVKXv5UgcwLmXl5//8lvDGWDn9g863gBOPIYQdntHy9x+dzgyc3rlLjwvZ5rXKx6iS/ZY8Fl8BWjxNd/ejGLFnjeGPMfRn8XYAyeVuQOSSr79D/CDM+Eme8fsid+YRR8c5z9DP/e96MWWpsW3HDmX9y3v95bZGBcWpFxtSd3RbDez/EYGp5xjwitQ+bFOPF8ms8bFRc0SqA3gAtAWmARDAuXQ/LRi4gF5ALyAVqXSA9iMMgiuznv88fhWwUQRVAb4CWQBhVdDRaGiARlAvULk7ZYNO3gDhAHCAO6Kizhz2WOEAcIA4QB9RVQCAkEGr4KSoSFAmKBMOQq6PRIkGRoEhQJCgSrKmA9gdof4D2B2h/QBy825JCJYISQYmgRFAi2FJAoximlpnBN00Nvm1u8I2Tg2+draR80M3TVRGibZ8vGySdx//a578AWkc3zCX39KYAAAAASUVORK5CYII=',
        title:'Untitled presentation - Google Slides', // google slides
        url:'https://docs.google.com/presentation/create'
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
