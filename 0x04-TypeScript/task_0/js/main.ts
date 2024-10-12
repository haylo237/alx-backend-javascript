interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Njike',
  lastName: 'Abed',
  age: 20,
  location: 'Buea'
};

const student2: Student = {
  firstName: 'Michele',
  lastName: 'Arielle',
  age: 19,
  location: 'Yaounde'
}

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');


  studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

renderTable();
