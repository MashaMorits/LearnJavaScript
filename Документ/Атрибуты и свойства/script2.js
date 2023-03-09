let links = document.querySelectorAll('a');


links.forEach(link => {

    let linkHref = link.getAttribute('href')
    
    if ( linkHref && linkHref.includes('://') && !linkHref.includes('http://internal.com') ) {
        link.style.color = 'orange';
    }
});