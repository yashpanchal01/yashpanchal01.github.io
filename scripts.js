document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        console.log('Adding event listener to', link);
        link.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Link clicked:', link.href);
            document.body.classList.add('fade-out');
            setTimeout(() => {
                console.log('Navigating to', link.href);
                window.location.href = link.href;
            }, 500);
        });
    });
});
