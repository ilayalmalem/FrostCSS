// Wait for dom load

window.addEventListener('load',() => {
    // Take all hero sections 
    var heroSections = document.getElementsByClassName('hero-section')
    for (const section of heroSections) {
        console.log(section)
        let childs = section.children;
        for (const child of childs) {
            console.log(child)
            if(child.classList.contains('hero-image')) {
                var heroImage = child;
                section.style.backgroundImage = `url(${heroImage.getAttribute('src')})`
            }
        }
    }
})