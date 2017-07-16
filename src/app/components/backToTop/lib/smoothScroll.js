// @flow weak

export const smoothScroll = {
  timer: null,

  stop() {
    clearTimeout(this.timer);
  },

  scrollTo(id, callback) {
    const settings = {
      duration: 1000,
      easing: {
        outQuint(x, t, b, c, d) {
          /* eslint-disable no-param-reassign*/
          return c*((t=t/d-1)*t*t*t*t + 1) + b;
          /* eslint-enable no-param-reassign*/
        }
      }
    };
    let percentage;
    const node        = document.getElementById(id);
    const nodeTop     = node && node.offsetTop    ? node.offsetTop    : 0;
    const nodeHeight  = node && node.offsetHeight ? node.offsetHeight : 0;
    const body        = document.body;
    const html        = document.documentElement;
    const height      = Math.max(
			body && body.scrollHeight ? body.scrollHeight : 0,
			body && body.offsetHeight ? body.offsetHeight : 0,
			html && html.clientHeight ? html.clientHeight : 0,
			html && html.scrollHeight ? html.scrollHeight : 0,
			html && html.offsetHeight ? html.offsetHeight : 0
		);
    const windowHeight      = window.innerHeight;
    const offset            = window.pageYOffset;
    const delta             = nodeTop - offset;
    const bottomScrollableY = height - windowHeight;
    const targetY           = (bottomScrollableY < delta) 
                              ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
                              : delta;

    const startTime = Date.now();
    percentage = 0;

    if (this.timer) {
      clearInterval(this.timer);
    }

    function step() {
      let yScroll;
      const elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(this.timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(this.timer);

        if (callback) {
          callback();
        }
      } else {
        yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
        window.scrollTo(0, yScroll);
        this.timer = setTimeout(step, 10);
      }
    }

    this.timer = setTimeout(step, 10);
  }
};
