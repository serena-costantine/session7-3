function getStudents()
{
    fetch('https://session7-2.onrender.com/students')
      .then(response => response.json())
      .then(json => console.log(json))
}

getStudents();