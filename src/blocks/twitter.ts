window['twttr'] = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window['twttr'] || {};
    if (fjs.parentNode === null) {
        return;
    }
    if (d.getElementById(id)) {
        return t;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };

    return t;
}(document, 'script', 'twitter-wjs'));

const tweets = document.getElementsByClassName('twitter-tweet');

for (const key in tweets) {
    if (!tweets.hasOwnProperty(key)) {
        continue;
    }

    const tweet = <HTMLElement>tweets[key];
    const tweetId = tweet.getAttribute('dataTweetId');
    if (tweetId) {
        twttr.ready(tw => {
            tw.widgets.createTweet(
                tweetId, tweet,
                {
                    conversation: 'all',    // or all
                    cards: 'visible',  // or visible
                    linkColor: '#cc0000', // default is blue
                    theme: 'light', // or dark
                    align: 'center'
                }).then(() => {
                    tweet.classList.add('loaded');
                });
        });
    }
}
