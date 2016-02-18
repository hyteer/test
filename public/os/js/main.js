
// Right click handler
if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
            alert("You've tried to open context menu"); //here you draw your own menu
            e.preventDefault();
        }, false);
    } else {
        document.attachEvent('oncontextmenu', function() {
            alert("You've tried to open context menu");
            window.event.returnValue = false;
        });
    }
// Popup layer
$(document).ready(function() {

    // Drag with title
    new jBox('Modal', {
        attach: $('#modalDragOnTitle'),
        width: 500,
        title: 'jBox',
        overlay: false,
        content: '<div>Drag me around by <br>using the title<br><br><input type="text" placeholder="test">Below is a iframe.<iframe id="iframeTest" width="400" height="300" src="index-old.html"></iframe></div>',
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