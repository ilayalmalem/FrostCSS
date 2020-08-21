const { Remarkable } = require('remarkable');
var md = new Remarkable();
md.set({
    html: true,
    breaks: true
  });

// Get all .markdown classes
window.addEventListener('load', () => {
    var elements = document.getElementsByClassName('markdown')
    var elementsWithTag = document.querySelectorAll('markdown')

    for (const element of elements) {
        let markdown = element.innerHTML.split('\n');
        var preped= '';

        markdown.forEach((el) => {
            if(el.trim() == ''){
            }
            else {
                preped += el.trim() + '\n';
                preped = preped.replace('&gt;','>')
            }
        })
        element.classList.add('markedowned')
        element.innerHTML = md.render(preped)
    }

    for (const element of elementsWithTag) {
        let markdown = element.innerHTML.split('\n');
        var preped= '';

        markdown.forEach((el) => {
            if(el.trim() == ''){
            }
            else {
                preped += el.trim() + '\n';
                preped = preped.replace('&gt;','>')
            }
        })
        element.classList.add('markedowned')
        element.innerHTML = md.render(preped)
    }
})