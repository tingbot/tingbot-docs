# Hardware

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

    A common reason for Tide OS failing to boot is the fact that the SD card has not been imaged properly. Please refer back to <insert the set up guide link here> to make sure that it’s not the SD card image at fault.

    If the SD card has been properly set up and the screen is still remaining blank then another likely culprit is a power supply that can’t cope with the power requirements of the Pi + screen.

    See [What power supply should I use?](#what-power-supply-should-i-use-with-my-tingbot) to help eliminate this as the cause of a non-booting Tingbot.

### Is my screen faulty?

!!! answer
    A screen that remains white once booting problems due to SD card or power supply issues having been investigated and discounted as potential issues may have experienced a hardware failure. Such hardware failures will be rare due to the fact that during the manufacture of the screens their functionality has been tested and the test procedures passed. However, there is a remote possibility that, during transit/delivery, the screen may have suffered a failure in a component or connection. Ideally, the SD card and power supply used would be tested with another Tingbot to eliminate either as the reason for failure.


### Why are the buttons not working?

!!! answer
    The most common reason is the button board is wired up incorrectly. See [How do I check the wiring of the button board?](#how-do-i-check-the-wiring-of-the-button-board)

### How do I check the wiring of the button board?

!!! answer
    The wiring of the button board is shown as part of the assembly guide. There’s also, now, a more accessible version with annotated photographs <insert link here>. An incorrectly wired button board will mean that the buttons won’t work. This may not be apparent until the Tingbot is booted up for the first time and attempts are made to scroll through the app screen with the left and right buttons and/or attempting to return to the home screen by holding down both inner buttons at the same time.  
    
    Hint: There is slight possibility that, during the routing of the ribbon cable and the positioning of the screen and button board in the plastic end pieces, tension on the wires may have pulled some cable(s) out of the right-angle connector so please check - visually - for this before ‘wrapping’ the case. Further hint: Don’t wrap the case before booting up the Tingbot for the first time and using the buttons to make sure the wiring is OK.


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

    function openTargettedQuestion() {
        $('.open').removeClass('open').each(updateCaret);

        $(location.hash).addClass('open');
        updateCaret($(location.hash)[0]);
    }

    window.addEventListener("hashchange", openTargettedQuestion, false);

    if (location.hash) {
        openTargettedQuestion();
    }

    $('h3').click(function () {
        location.hash = this.id;
    });
</script>
