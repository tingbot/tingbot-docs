<style>
    /* make the 'support' supernav button highlighted */
    .supernav-item-docs {
        background-color: transparent;
    }
    .supernav-item-support {
        background-color: #f3f3f3;
    }
</style>

# Frequently asked questions

## Hardware

### What power supply should I use with my Tingbot?

!!! answer
    We suggest using one of the official Raspberry Pi PSU’s that's rated 2.5A. If you are using a different power supply that has a lower Amp level, you may experience white screens on the Tingbot module. This indicates there may be a lack of power to fully power the Tingbot.

### Nothing appears on the screen

!!! answer
    Failure may be due to boot problem. See [Is my Tingbot failing to boot?](#is-my-tingbot-failing-to-boot)

    Failure may be due to poor power supply. See [What power supply should I use?](#what-power-supply-should-i-use-with-my-tingbot)

    Failure may be due to a faulty screen. See [Is my screen faulty?](#is-my-screen-faulty)

### Is my Tingbot failing to boot?

!!! answer
    Without, say, an HDMI monitor plugged into the HDMI connector then the first time the Tingbot is powered up we rely on the Tingbot screen to provide the evidence that the boot sequence is progressing as normal.

    A symptom of a failure to boot is a screen that remains white for longer than the 10 seconds it takes the boot sequence to load the device driver for the screen and start to display the boot sequence output.

    A common reason for Tide OS failing to boot is the fact that the SD card has not been imaged properly. Please refer back to [the setup guide](guides/setup/) to make sure that it’s not the SD card image at fault.

    If the SD card has been properly set up and the screen is still remaining blank then another likely culprit is a power supply that can’t cope with the power requirements of the Pi + screen.

    See [What power supply should I use?](#what-power-supply-should-i-use-with-my-tingbot) to help eliminate this as the cause of a non-booting Tingbot.

### Is my screen faulty?

!!! answer
    A screen that remains white once booting problems due to SD card or power supply issues having been investigated and discounted as potential issues may have experienced a hardware failure. Such hardware failures will be very rare due to the fact that during the manufacture of the screens their functionality has been tested and the test procedures passed. However, there is a remote possibility that, during transit/delivery, the screen may have suffered a failure in a component or connection. Ideally, the SD card and power supply used would be tested with another Tingbot to eliminate either as the reason for failure.


### Why are the buttons not working?

!!! answer
    The most common reason is the button board is wired up incorrectly or that the some of the wires became disconnected during the final case assembly. See [How do I check the wiring of the button board?](#how-do-i-check-the-wiring-of-the-button-board)

### How do I check the wiring of the button board?

!!! answer
    The wiring of the button board is shown as part of the assembly guide provided with each Tingbot. There’s also, now, a more accessible version with annotated photographs - see the [updated assembly instructions](guides/tingbot-assembly-instructions-v2.pdf). Make sure your wiring matches [this diagram](http://i.imgur.com/DYWuEgB.jpg) before you continue. If in doubt, go back and double-check. An incorrectly wired button board will mean that the buttons won’t work. This may not be apparent until the Tingbot is booted up for the first time and attempts are made to scroll through the app screen with the left and right buttons and/or attempting to return to the home screen by holding down both inner buttons at the same time.

    Hint: There is slight possibility that, during the routing of the ribbon cable and the positioning of the screen and button board in the plastic end pieces, tension on the wires may have pulled some cable(s) out of the right-angle connector so please check - visually - for this before ‘wrapping’ the case. Further hint: Don’t wrap the case before booting up the Tingbot for the first time and using the buttons to make sure the wiring is OK.

## Software
### TBA

## Miscellaneous

### Can Tingbot be used with Emulation Station?

!!! answer
    Yes. See [How is Tingbot configured to use Emulation Station](#how-is-tingbot-configured-to-use-emulation-station).

### How is Tingbot configured to use Emulation Station?

!!! answer
    The first part of this tutorial refers mainly to the [First Installation · RetroPie/RetroPie-Setup Wiki](https://github.com/retropie/retropie-setup/wiki/First-Installation) instructions. Note: the recommendation is that setting up and configuring a standard Retropie installation is best done with a Raspberry Pi connected to an HDMI monitor. Once the standard installation is done we will explain how to configure Retropie to use a Tingbot's screen.

    The first step is to download the Raspberry Pi 2/3 image from the [Retropie pre-made image page](https://retropie.org.uk/download/#Pre-made_images_for_the_Raspberry_Pi).

    Using Etcher - see [Use Etcher...](http://docs.tingbot.com/guides/setup/#use-etcher-to-burn-the-tingbot-os-disk-image) for a refresher - this image can then be copied to an SD-card. (Note: Etcher can automatically uncompress the .gz'ed image so there is no need to do this manually so you can skip the [Extract](https://github.com/retropie/retropie-setup/wiki/First-Installation#extract) and [Install RetroPie Image on SD Card](https://github.com/retropie/retropie-setup/wiki/First-Installation#install-retropie-image-on-sd-card) instructions of the First Installation guide.

    The next step is undertake the [Configurations](https://github.com/retropie/retropie-setup/wiki/First-Installation#configurations) to configure your controls for both Emulationstation and RetroArch Emulators. Note: a less complex set of configurations has been documented by Adafruit in their [Configure Input](https://learn.adafruit.com/running-opengl-based-games-and-emulators-on-adafruit-pitft-displays/retropie-setup#configure-input) section of the [RetroPie Setup... | Adafruit Learning System](https://learn.adafruit.com/running-opengl-based-games-and-emulators-on-adafruit-pitft-displays/retropie-setup) page.

    Once the controls are configured the next step is [Configuring Wifi](https://github.com/retropie/retropie-setup/wiki/First-Installation#configuring-wifi) if you are not going to use a wired Ethernet connection. Prior to configuring the Retorpie image to use the Tingbot screen it is recommended that [Installing additional Emulators / Ports](https://github.com/retropie/retropie-setup/wiki/First-Installation#installing-additional-emulators--ports) and/or [Transferring Roms](https://github.com/retropie/retropie-setup/wiki/First-Installation#transferring-roms) is done whilst the HDMI display is attached to the Raspberry Pi. However, these steps can be done after the Tingbot screen is set up. Again, Adafruit provides some similar advice in the [Networking](https://learn.adafruit.com/running-opengl-based-games-and-emulators-on-adafruit-pitft-displays/retropie-setup#networking) section of their tutorial.

    #### Setting up the Tingbot screen

    Once controls (input) and networking have been configured it is now time to configure the image to make use of the Tingbot screen. The first step is to insert our new Retropie SCD card into the Tingbot and power up. Since we haven't yet set up the system to use the Tingbot display it will stay white and no boot up messages will appear on the screen. This is to be expected. Again, Adafruit has produced a comprehensive tutorial on their [PiTFT Setup](https://learn.adafruit.com/running-opengl-based-games-and-emulators-on-adafruit-pitft-displays/pitft-setup) and we will be referring to parts of this and adding any Tingbot-specif steps that are required. Since configuring for the screen will involve command line input you should login to the system remotely.

    Once logged the following commands should be copied one line at a time and pasted into the command line. These commands configure the system to enable the HDMI dsplay (framebuffer *fb*) to be mirrored (copied *cp*) to the Tingbot display.

    ```
    sudo apt-get update
    sudo apt-get install cmake git
    git clone https://github.com/tasanakorn/rpi-fbcp
    cd rpi-fbcp/
    mkdir build
    cd build/
    cmake ..
    make
    sudo install fbcp /usr/local/bin/fbcp
    ```

    Now we need to arrange for *fbcp* to be launched as part of the boot sequence. This is done by adding `/usr/local/bin/fbcp &` before the final `exit 0` in the file `/etc/rc.local`. This step is illustratred well in [PiTFT Setup](https://learn.adafruit.com/running-opengl-based-games-and-emulators-on-adafruit-pitft-displays/pitft-setup), as is the setting up of a font better suited to a 320x240 display. Next, edit the `/boot/config.txt` file to add the following four lines:

    ```
    hdmi_force_hotplug=1
    hdmi_group=2
    hdmi_mode=87
    hdmi_cvt=320 240 60 1 0 0 0
    ```

    The next step in that Adafruit tutorial is to simply add their screen overlay but since the Tingbot screen overlay is not (yet) included as part of the Raspbian distribution we will need to download this now and install it manually by copying and pasting each of the following four lines into the command line:

    ```
    mkdir ~/tingbot_enable && cd ~/tingbot_enable
    wget https://github.com/tingbot/tingbot-os/raw/master/root/opt/tingbot-os/tingbot-overlay.dtb
    sudo cp tingbot-overlay.dtb /boot/overlays/tingbot.dtbo
    sudo bash -c 'printf "\ndtparam=spi=on\ndtoverlay=tingbot:xohms=80\n" >> /boot/config.txt'
    ```

    Now everything should be set up so `sudo reboot` the Tingbot and after a few seconds the Tingbot screen should burst into life and the Retropie Splash Screen should be displayed.

### Can Tingbot be used with Raspbian?

!!! answer
    Yes. See [How is Tingbot configured to use Raspbian](#how-is-tingbot-configured-to-use-raspbian).

### How is Tingbot configured to use Raspbian?

!!! answer
    Details to follow.

<style>
    .admonition.answer .admonition-title {
        display: none;
    }
    h3 {
        cursor: pointer;
    }
    h3 + .admonition.answer {
        display: none;
    }
    h3.open + .admonition.answer {
        display: block;
    }
    .faq-disclosure {
        margin-right: 4px;
        min-width: 15px;
    }
</style>

<script>
    $('h3').prepend($('<i class="faq-disclosure fa fa-caret-right" aria-hidden="true"></i>'))

    function updateCaret(el) {
        if ($(el).hasClass('open')) {
            $('.faq-disclosure', el).removeClass('fa-caret-right');
            $('.faq-disclosure', el).addClass('fa-caret-down');
        } else {
            $('.faq-disclosure', el).removeClass('fa-caret-down');
            $('.faq-disclosure', el).addClass('fa-caret-right');
        }
    }

    function openTargetedQuestion() {
        $('.open').removeClass('open').each(updateCaret);

        $(location.hash).addClass('open');
        updateCaret($(location.hash)[0]);
    }

    window.addEventListener("hashchange", openTargetedQuestion, false);

    if (location.hash) {
        openTargetedQuestion();
    }

    $('h3').click(function () {
        location.hash = this.id;
    });
</script>
