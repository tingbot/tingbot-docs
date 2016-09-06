Tingbot OS
==========

Download: check the [the latest release](https://github.com/tingbot/tingbot-os/releases/latest) on Github.

Tingbot OS is a customised Raspbian "Jessie" Linux. If you're familiar with Linux, feel free to SSH in and have a poke around! The default user has username 'pi' and password 'raspberry'. 

Apps
----

Apps on the home screen are stored in `/apps`. There are also two symlinks in this folder, `/apps/home` and `/apps/startup`.

- `/apps/home` This symlink points to the app to run when the 'home' button combo is pressed, or when an app exits. By default, this points to our 'home screen', the [springboard](http://github.com/tingbot/springboard).
- `/apps/startup` This symlink points to the app to launch at startup. If your Tingbot is running only one app most of the time, it makes sense to run that at startup. By default this points to `/app/home`.

For example, to change the startup link, SSH into the Tingbot and do-

    ln -snf /path/to/your/app.tingapp /apps/startup

Logs
----

When working on a Tingbot app, it can be useful to see the logs of the running app. On Tingbot, you can view the log stream of the current app by using the `tbtail` command.

Updates
-------

Updates can be installed from the Springboard settings pane, or SSH in and run the `tbupgrade` command.

More info
---------

For more information on Tingbot OS, check out the Github repos-

**Tingbot OS**  
[<i class="fa fa-github" aria-hidden="true"></i> tingbot/tingbot-os](https://github.com/tingbot/tingbot-os)  
Builds the tingbot-os.deb file and disk images

**tbprocessd**  
[<i class="fa fa-github" aria-hidden="true"></i> tingbot/tbprocessd](https://github.com/tingbot/tbprocessd)  
Daemon process that manages the running of apps on Tingbot OS

**springboard**  
[<i class="fa fa-github" aria-hidden="true"></i> tingbot/springboard](https://github.com/tingbot/springboard)  
The Tingbot home screen
