$(document).ready(function() {

    // Drag with title
    new jBox('Modal', {
        attach: $('#modalDragOnTitle'),
        width: 400,
        title: 'jBox',
        overlay: false,
        content: '<div>Drag me around by <br>using the title<br><br><input type="text" placeholder="test"></div>',
        draggable: 'title',
        repositionOnOpen: false,
        repositionOnContent: false
    });
    
    // Drag on element
    new jBox('Modal', {
        attach: $('#modalDragOnElement'),
        width: 200,
        title: 'jBox',
        overlay: false,
        createOnInit: true,
        content: 'Drag me around by using <b id="dragElement">this element</b>',
        draggable: $('#dragElement'),
        repositionOnOpen: false,
        repositionOnContent: false
    });
    
    // Drag anywhere
    new jBox('Modal', {
        attach: $('#modalDragAnywhere'),
        width: 200,
        title: 'jBox',
        overlay: false,
        createOnInit: true,
        content: 'Drag me around by clicking anywhere',
        draggable: true,
        repositionOnOpen: false,
        repositionOnContent: false
    });
    
});