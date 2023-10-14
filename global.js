const IsPopup = (window.opener && window.opener !== window)
const Pages = {
    minecraft:{
        title:'Minecraft 1.5.2',
        icon:'data:image/png;base64,AAAAHGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZgAAAOptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAEOAAEAAAAAAAABvgAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAAamlwcnAAAABLaXBjbwAAABNjb2xybmNseAACAAIABoAAAAAMYXYxQ4EADAAAAAAUaXNwZQAAAAAAAADAAAAAwAAAABBwaXhpAAAAAAMICAgAAAAXaXBtYQAAAAAAAAABAAEEgYIDhAAAAcZtZGF0EgAKChgd7+/YIEBA0IAyrQMRsAHHHHFAwbw1RRdgvYUDGC8T03oLZxKBQZL+YhM8OYbuAWt8a2BmZMe1UQ80GsWrOQkqJFK2y69g/XD8P2DJRM3SpCoWP4L7RIiswkewhVvckArNU1HIu9HOWJFbAgKEPvCDumtiIr7LQeT7B0Iy9CPNBUx0tUYlU5gukgo1aIHO1isgsGYEyVPkUywU5pMJr0PRna6DSY0ykfz+jmFvWImC033iWE4Vtz7/b6Fox50OgpxNuA6vqeDmry/W1082eilP+EUQRhS9E2lskpWZJj9F33yGuHmbSHuVjkxbdAuN+4mtyKSoQWAFhE8m8aew0LQXkaiGodLSGL0tj2t+a58tihQAF9ukMKZWpSYsH7A2K1prAbnzZ7ywxJFqiuzavTDukm/vbujJmejo11rniszibVeLmokMF01ImqOiiBr36+Zc1R6BU1FbU6E38Ui4D6dfu7/C6B6T826mZj2uMyFREu6yR9iQzWNANlkovOC+A/ShxAVtWfSgaJjqXJxzea6F9ClQj066gLiG+6XrHFXi9SWWIR4Gymwz0X3mHpo/8G//7rSBT1QrNBA=',

        html:'<html><head></head><body style="margin: 0px; height: 100vh;"><iframe src="https://cerealistic.github.io/eaglercraft1.5.2/" style="border: none; width: 100%; height: 100%; margin: 0px;"></iframe><script>window.addEventListener("load", function() {setTimeout(function(){window.eaglercraftOpts.mainMenu.splashes = [\'test!\']}, 6001);});</script></body></html>'
    }
}

function LoadPageNoTrace(html, unload, page){
    unload = (unload || unload == null)

    var features = ''

    if (!unload){
        features = 'popup=1,toolbar=0,location=0,width=854,height=480'
    }

    const newwindow = window.open('', null, features)
    const script = document.createElement('script')

    script.src = 'global.js'

    newwindow.document.getElementsByTagName("html")[0].innerHTML = html

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
        title:'Home' // google classroom
    }, {
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAbxJREFUeF7tWz1KA1EQni9GDGzQyhsI3sADZNOktPUIFtbGPpvewiPYWqYxB9AbCN4gjcouKMaMbGAhWEjehH283fdttbAz783vNzMLA9l4Rrd6+J0Xl6o4F+ipqhxtfm/qOyDvongB9GG/n9zNrvBR6YLqJZ1+DlWX96Jy3FRFt5IbsgC6F/Nx77GkXxtgrfzqZyai3a0OaTwRlujsjUojoAz7r7x4bb3n/zoNsjjoJycYZvn1SmXaeKcaFOhAxkgnxZOKnhn4G88CwTPSLH9rC9q7eqSsDhhMcnVlbBM9DcAIYAoQAwiCbUJ1V13MVWB+k7jeVSt9mhWm82kAaxlkBDAFiAEm0KmLiSDouwrU5Unf55rLoG9B67qPBrD2AXV5xPe5jABGAH+I2H6IcBbgLMBZwHfF+vc+zgK+ZwGCYOwgGBQA7CAMW2G2wmyFba3wDmkXFCsxgBhgxAAfjZC1vXXJMXMK0AAeOkFGgHHAYQo4WIAYYC2D0YOgQ5QFTWpOgaC1chCOBrBigIORgyZlBDACjMNQ0HHtIBxTIPqVmeiXpqJfm4t+cbIEzKhXZ6uKEfXydGWEGNfnfwHmvURGnfLKnwAAAABJRU5ErkJggg==',
        title:'Report - Google Docs' // google docs
    }, {
        icon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIklEQVQ4jYWSS0iUURTHf/fe8RvHooE2VlT2FNqUGWmNEYUR9lhEEVJhUIsoXOQuap1Rq6KHNQt3LaPAIOxhlNTChUwLMU3NR1CklUzg6xvPd1ro2KhTHjjcA/e8/uf/hzmmqsUiEheRLhHxp/2TiDxQ1aK5+ZmFeSJSrwuYiMRVNZKuMxnFz51zu9T3GX/6iPGmRqS/F5WAUMEawuUVRI5UYjwPEWl2zlUYY8YMgIjUW2vPBkPfSV6uYbKvJ+uW3rZSojfuABAEQdw5d96oajHQqr7P8IUqpL8X43lEjp3EK4mBtfgt75l4+4po7U3cytWZPbcyjUlTidv642ipDu7foX7bh2zgs92jDhHpUlWdbNmuEw15OvqweqE7ZjboCAEFADrSjs1LkRM7NAt3+bWRebfYudFx9XguwFqbwePs9z/mT/6NLdAHMBpex28W0/C1Y1Zy05VFM75nUwiAZVGT/v5sgdcA3UurOPUrxvXOFhJD7fOmdn4LeNc5NbpkfWimv5mWZ8KXFKdfXqInOYBnc6gsPEjZ8mKssbQOtvEkMczYl0oK8z3un4lgppbYkhZS3Fp7bnD0Jxeba+lODmTFviFcxq29NeRHDUEQ1DnnqtNSjohIo3Nutx+keNz9gmf9zfQkB0ChYMkK9q2KcaLwMJFQGFV9Y4w5YIwZzyBBI2lRLcD9PVXN/SdFqlokInUi0iEiE9P+UUTuqurmufl/AKTzsFGmvUNUAAAAAElFTkSuQmCC',
        title:'screenshot hotkey - Google Search' // google
    }]

    const FalseIdentityIndex = Math.floor(Math.random() * FalseIdentities.length)
    const FalseIdentity = FalseIdentities[FalseIdentityIndex]

    window.addEventListener('beforeunload', function(e){ // pop-up with a warning before unload, as page cannot be restored with back button!
        e.preventDefault();
        e.returnValue = '';
    });

    icon.href = FalseIdentity.icon
    document.title = FalseIdentity.title
} else {
    var Page = document.head.getAttribute('page')

    const Icon = Pages[Page].icon
    const Title = Pages[Page].title

    icon.href = Icon
    document.title = Title
}
