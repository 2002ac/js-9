function addBook() {
    const title = document.getElementById('Title').value;
    const author = document.getElementById('author').value;
    const color = document.getElementById('color').value;
    const type1 = document.querySelector('input[name="type1"]:checked').value;

    if (title === '')
     {
        alert('Inputlari daxil et');
        return;
    }
    else if (author==='')
     {
        alert('inputu daxil et')
        return;
    }
    else if (type1==='')
     {
        alert('inputu daxil et')
        return;
    }

    const table = document.getElementById('bookTable');
    const newRow = table.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);


    cell1.innerHTML = title;
    cell2.innerHTML = author;
    cell3.innerHTML = type1;
   
    newRow.style.backgroundColor = color;
}