//  Show/Hide PDF Toolbars
    
window.toggleToolbars = (function() {

    var toolbar = document.getElementById('toolbar'),
        zToolbar = document.getElementById('zoom-toolbar');
    
    toolbar.style.display = 'none',
    zToolbar.style.display = 'none';

    return function() {
        if(toolbar.style.display) {
            toolbar.style.display = '';
            zToolbar.style.display = '';
        }
        else {
            toolbar.style.display = 'none';
            zToolbar.style.display = 'none';
        }
    }
})();
