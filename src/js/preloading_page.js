/* Preloader Start */
function preloader() {
    $(() => {

        setInterval(() => {

            let p = $('.preloader');
            p.css('opacity', 0);

            setInterval(
                () => p.remove(),
                parseInt(p.css('--duration')) * 500
            );

        }, 1000)

    });
}
setInterval(() => preloader(), 500);
/* PreLoader End */
