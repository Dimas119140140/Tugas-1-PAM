let tableSaya = document.querySelector('#table');

let daftar = [
  
  { no: 1 , nama: 'agus', nIM : 111, nilai: 85, hurufMutu: 'A'},
  { no: 2 , nama: 'inul', nIM : 121, nilai: 76, hurufMutu: 'AB'},
  { no: 3 , nama: 'anang', nIM : 131, nilai: 87, hurufMutu: 'A'},
  { no: 4 , nama: 'coki', nIM : 112, nilai: 50, hurufMutu: 'BC'},
  { no: 5 , nama: 'merdo', nIM : 113, nilai: 65, hurufMutu: 'B'},
  { no: 6 , nama: 'iki', nIM : 116, nilai: 40, hurufMutu: 'C'},
  { no: 7 , nama: 'ucok', nIM : 117, nilai: 40, hurufMutu: 'C'},
  { no: 8 , nama: 'aldi', nIM : 118, nilai: 90, hurufMutu: 'A'},
  { no: 9 , nama: 'anin', nIM : 119, nilai: 15, hurufMutu: 'D'},
  { no: 10 , nama: 'eros', nIM : 323, nilai: 9, hurufMutu: 'E'},

]

let headers = ['No','Nama','NIM','Nilai','Hurufmutu'];

let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.forEach(headerText =>{                               //untuk header
    let header = document.createElement('th');
    let textNode =document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});

table.appendChild(headerRow);

daftar.forEach(emp => {         
    let row = document.createElement('tr');
    Object.values(emp).forEach(text =>{
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);   
    })
    table.appendChild(row);
})
tableSaya.appendChild(table);