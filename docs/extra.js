$(function () {
    $('.wy-side-nav-search').prepend(
        '<a href="http://tingbot.com"><img src="/images/logo-black.png" class="big-logo"></a>'
    )

    $("a[href*='links/forum']").attr('href', 'http://forum.tingbot.com/');
    $("a[href*='links/github']").attr('href', 'http://github.com/tingbot');
    $("a[href*='links/tingbot-python-docs']").attr('href', 'https://tingbot-python.readthedocs.io/');
    $("a[href*='links/ocean']").attr('href', 'http://ocean.tingbot.com/');
});
