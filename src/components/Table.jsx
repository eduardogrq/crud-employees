
import React from 'react'

const EmployeesTable = () => {

    // Estados
    const [employee, setEmployee] = React.useState([])
    const [currency, setCurrency] = React.useState(true)

    // Ejecutamos la función en solo una ocasión con useEffect
    React.useEffect( () => {
        obtenerDatos()
    }, [])

    // Obtenemos los datos de los empleados
    const obtenerDatos = async () => {
        const data = await fetch('http://localhost:8080')
        const employeesObject = await data.json()
        const {employees} = employeesObject.data
        setEmployee(employees)
    }

    // Formato de moneda
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'MXN',
    });

    let formatterUSD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div>
            <div className="col-12 mb-3">
                <button className="btn btn-outline-success" onClick={() => setCurrency(!currency)}>Cambiar moneda</button>
            </div>

            <table className="table table-striped table-hover table-striped col-12 col-lg-6">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Name</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Salary {currency ? 'MXN' : 'USD'}</th>
                        <th scope="col">Company</th>
                        
                    </tr>
                </thead>
                <tbody>
                {
                    // Iteramos para obtener los datos de cada empleado e imprimirlos en el DOM
                    employee.map((item, index) => {
                        return (
                            <tr key={item._id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <img src={item.image} alt="img"/>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.lastName}</td>
                                <td>{item.age}</td>
                                <td>{item.email}</td>
                                {/* Condicional para cambiar  */}
                                <td className={item.salary > 10000 ? "green" +  " text-right" : "red"+  " text-right"} >{ currency ? formatter.format(item.salary) : formatterUSD.format(item.salary * 21.5)}</td>
                                <td>{item.company}</td>
                                
                            </tr>
                        )
                    })
                }
                </tbody>
                
            </table>

            
        </div>
    )
        
}

export default EmployeesTable;