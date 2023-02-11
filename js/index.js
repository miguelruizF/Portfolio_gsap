/* gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.section').forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false
    });
});
 */



/* let sections = gsap.utils.toArray("section"),
    currentSection = sections[0];

gsap.defaults({overwrite: 'auto', duration: 0.3});

// stretch out the body height according to however many sections there are. 
gsap.set("body", {height: (sections.length * 100) + "vh"});

// create a ScrollTrigger for each section
sections.forEach((section, i) => {
    ScrollTrigger.create({
    // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
    start: () => (i - .6) * innerHeight,
    end: () => (i + 0.6) * innerHeight,
    // when a new section activates (from either direction), set the section accordinglyl.
    onToggle: self => self.isActive && setSection(section)
    });
});

function setSection(newSection) {
    if (newSection !== currentSection) {
    gsap.to(currentSection, {scale: .2, autoAlpha: 0})
    gsap.to(newSection, {scale: 1, autoAlpha: 1});
    currentSection = newSection;
    }
}
 */


