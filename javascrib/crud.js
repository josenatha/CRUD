const cars = [
    {
        id: 1,
        marca: 'Dodge0',
        modelo: 'Challenger GT',
        color: 'Negro', 
        anio: 2000,
        precio: 72347
    },
    {       
         id: 1,
        marca: 'Dodge1',
        modelo: 'Challenger GT',
        color: 'Negro', 
        anio: 2000,
        precio: 72347
    },
    {
        id: 1,
        marca: 'Dodge2',
        modelo: 'Challenger GT',
        color: 'Negro', 
        anio: 2000,
        precio: 72347
    },
    {
        id: 1,
        marca: 'Dodge3',
        modelo: 'Challenger GT',
        color: 'Negro', 
        anio: 2000,
        precio: 72347
    }
]

let editingCar = false;
const tableBody = document.getElementById('table-body-coches')


function clean(){
    tableBody.innerHTML ='<input type="hidden">'
}

function printCars(){
    clean();
    cars.forEach((car) =>  tableBody.innerHTML +=   `<tr>
                                                        <td>${car.marca}</td>
                                                        <td>${car.modelo}</td>
                                                        <td>${car.color}</td>
                                                        <td>${car.anio}</td>
                                                        <td>$ ${car.precio}</td>
                                                        <td>
                                                            <button class="btn btn-outline-danger" onclick="removeCar(${car.id})">Eliminar
                                                            </button>
                                                            <button class="btn btn-outline-warning" onclick="editButton(${car.id})">Editar
                                                            </button>
                                                        </td>
                                                    </tr>`)
   
}

function submitCar() {
    if(editingCar) {
        editCar();
    } else {
        addCar();
    }
}
function editCar() {
    const marca = document.getElementById('marca').value;  
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const anio = document.getElementById('anio').value;
    const precio = document.getElementById('precio').value;
    
    if(precio>0){
        editingCar.marca = marca
        editingCar.modelo = modelo
        editingCar.color = color
        editingCar.anio = anio
        editingCar.precio = precio
        editingCar = false;

        printCars();
    
        document.getElementById('marca').value = ''
        document.getElementById('modelo').value = ''
        document.getElementById('color').value = ''
        document.getElementById('anio').value = ''
        document.getElementById('precio').value = ''    
    }else{
        alert('Nuevo Precio Negativo\nModifique el valor"')
    }  
}
function editButton(id) {
    const car = cars.find((car) => car.id === id);
    document.getElementById('marca').value = car.marca;
    document.getElementById('modelo').value = car.modelo
    document.getElementById('color').value = car.color
    document.getElementById('anio').value = car.anio
    document.getElementById('precio').value = car.precio
    editingCar = car;
}
function addCar() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const anio = document.getElementById('anio').value;
    const precio = document.getElementById('precio').value;
    const newCar = {
        id: cars.length + 1,
        marca: marca,
        modelo: modelo,
        color: color,
        anio: anio,
        precio: precio
    }
 
        cars.push(newCar);
    
    printCars();
}
function removeCar(id) {
    const position = cars.findIndex((car) => car.id === id);
    cars.splice(position, 1);
    printCars();
}

printCars()