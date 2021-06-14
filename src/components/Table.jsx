
import React from 'react'
import PostForm from './PostForm'

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
            <div className="col-12 text-center">
                <div className="col-12 col-lg-6 offset-lg-3">
                    {/* Condicional para cambiar entre false and true */}
                    <button className="btn m-2 btn-outline-success" onClick={() => setCurrency(!currency)}>Change Currency</button>
                    <button type="button" className=" m-2 btn btn-outline-success" data-toggle="modal" data-target="#createModal">Create Employee</button>
                </div>
                
                <table className="table table-dark text-center col-12 col-md-6 offset-lg-3">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Total employees</th>
                            <th scope="col">Currency</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{employee.length}</th>
                            <th>{ currency ? "MXN" : "USD" }</th>
                        </tr>

                    </tbody>
                </table>
            </div>


            {/* Form para creación de empleados */}
            <PostForm />

            <table className="table table-hover table-striped col-12">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Salary {currency ? 'MXN' : 'USD'}</th>
                        <th scope="col">Company</th>
                    </tr>
                </thead>
                <tbody className="col-6">
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
                                {/* Condicional para cambiar clase de color */}
                                <td className={ item.salary > 10000 ? "green" +  " text-right" : "red"+  " text-right"} >{ currency ? formatter.format(item.salary) : formatterUSD.format(item.salary * 21.5)}</td>
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