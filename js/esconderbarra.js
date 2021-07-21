document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('click', function(e) {
        let sidebar = document.querySelector('#sidebar-wrapper');
        sidebar.classList.toggle('active');

        //         // if (sidebar.classList.contains('active')) {
        //         //     if (e.target.nodeName != 'A') {
        //         //         sidebar.classList.remove('active');
        //         //         console.log(sidebar);
        //         //     }
        //         // }
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');

        }

        //console.log(e.target);
    })
})