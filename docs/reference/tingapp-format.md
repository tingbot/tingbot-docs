The tingapp format
==================

Tingbot apps are saved in the 'tingapp' format, which contains all the code, resources and configuration needed for the app.

Layout
======

The layout is as follows:

<pre style="line-height: 1.7em; background-color: white; border: 1px solid #eee; padding: 1em;">
  <i class="fa fa-folder-open-o" aria-hidden="true"></i> example.tingapp
  │  <i class="fa fa-file-code-o" aria-hidden="true"></i> main.py (or <i class="fa fa-file-o" aria-hidden="true"></i> main)
  │  <i class="fa fa-file-text-o"></i> app.tbinfo
  │  <i class="fa fa-file-image-o" aria-hidden="true"></i> icon.png
  │  <i class="fa fa-file-text-o"></i> requirements.txt [optional]
  │      ...more code/resources...
</pre>

Taking these in turn-

<a name="main"></a>

### <i class="fa fa-file-code-o" aria-hidden="true"></i>  main[.py] 

This file contains the code that runs when the app is started. If `main` is present in the bundle, and is executable, then it is run directly. Otherwise, `main.py` is called with `python main.py`. 

In both cases the working directory of the app is set to the root of the tingapp before launch.

<a name="tbinfo"></a>

### <i class="fa fa-file-text-o"></i>  app.tbinfo

This file contains information about the app itself. It's a JSON file, and looks like this:

```json
{
    "name": "Pi in the Sty",
    "author": "Farmer Hogget",
    "caption": "Watch your pig, all day, every day",
    "version": "0.1",
    "twitter": "@hogget",
    "website": "http://farmerhogget.tumblr.com",
    "background_color": "1db0e9"
}
```

- `name` The display name of the app, as displayed on the Tingbot home screen. If not specified, uses the filename e.g. "PiInTheSty.tingapp"
- `author` Your name, or pseudonym if you want to mysterious!
- `caption` 1 line description of the app
- `version` The current version of the app. Stick to a conventional format, e.g. '1', '1.2' or '1.2.3'.
- `twitter` Your twitter handle
- `website` A URL that people can go for info on the app - e.g. the Github project URL.
- `background_color` A hex-encoded RGB color value to used for the background behind the app icon. If not specified, a dark grey is used.

<a name="icon"></a>

### <i class="fa fa-file-image-o" aria-hidden="true"></i>  icon.png

An image that is displayed on the Tingbot home screen with the app. The image should be on a transparent background. The image is displayed at 96x96px on the home screen, but a size of 192x192 px is ideal, as the image will be also used on the [Ocean](http://ocean.tingbot.com).

<a name="requirements"></a>

### <i class="fa fa-file-text-o"></i>  requirements.txt [optional]

If you want to use Python modules other than the [Python built-ins](https://docs.python.org/2/library/index.html), [tingbot-python](http://github.com/tingbot/tingbot-python) and [requests](http://docs.python-requests.org/en/master/), you can list them here. The format is as follows

```txt
tingbot-python==0.9.0
pytz
tweepy
scipy==0.18.0
```

Each module should be on its own line, and optionally, you can specify a version number. When releasing an app, it's recommended to specify versions for _every_ module listed - that way, updates to those modules can't break your app in the future.

There's more you can do with requirements files. See the [pip documentation](https://pip.readthedocs.io/en/latest/reference/pip_install/#requirements-file-format) for more information.

External dependencies
=====================

Tingapps should run without requiring any setup on Tingbot OS. If you're making a Tingapp that requires other software to be installed, this should be automatic on first launch.

If your tingapp requires software installed by API, check out [this issue](https://github.com/tingbot/tingbot-python/issues/44) and let us know so we can prioritise accordingly.
