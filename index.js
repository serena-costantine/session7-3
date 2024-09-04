function getStudents() {
    fetch('https://session7-2.onrender.com/students')
        .then(response => response.json())
        .then(json => {
            var select_users = document.getElementById('select_users');
            json.forEach(st => {
                var opt = document.createElement('option');
                opt.innerHTML = st.name;
                select_users.appendChild(opt);
            });
        });
}

getStudents();
