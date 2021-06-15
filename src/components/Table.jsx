
import React from 'react'
import PostForm from './PostForm'
import EditForm from './EditForm'


const EmployeesTable = () => {

    // Estados
    const [employee, setEmployee] = React.useState([])
    const [currency, setCurrency] = React.useState(true)

    // Ejecutamos la función en solo una ocasión con useEffect
    // React.useEffect( () => {
    //     obtenerDatos()
    // }, [])

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

    obtenerDatos()

    return (
        <div>
            <div className="col-12 text-center">
                <div className="col-12 col-lg-6 offset-lg-3">
                    {/* Condicional para cambiar entre false and true */}
                    <button className="btn m-2 btn-outline-success" onClick={() => setCurrency(!currency)}>Change Currency</button>
                    <button type="button" className=" m-2 btn btn-outline-success" data-toggle="modal" data-target="#createModal">Create Employee</button>
                </div>
                
                <table className="table table-dark text-center col-12 col-lg-6 offset-lg-3">
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

            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-hover table-striped col-12">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Last name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Salary {currency ? 'MXN' : 'USD'}</th>
                            <th>Company</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="col-6">
                    {
                        // Iteramos para obtener los datos de cada empleado e imprimirlos en el DOM
                        employee.map((item, index) => {
                            let {_id, name, lastName, age, email, salary, company, image} = item
                            return (
                                <tr key={_id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <img className="img-size" src={image} alt="img"/>
                                    </td>
                                    <td>{name}</td>
                                    <td>{lastName}</td>
                                    <td>{age}</td>
                                    <td>{email}</td>
                                    {/* Condicional para cambiar clase de color */}
                                    <td className={ salary > 10000 ? "green text-right" : "red text-right"} >{ currency ? formatter.format(salary) : formatterUSD.format(salary * 21.5)}</td>
                                    <td >{company}</td>

                                    <td>
                                        
                                        <i className="fas fa-edit cursor-pointer" data-toggle="modal" data-target="#editModal" onClick={() => {}}></i>

                                        <EditForm 
                                            id={_id}
                                            name={name}
                                            lastName={lastName}
                                            age={age}
                                            email={email}
                                            salary={salary}
                                            company={company}
                                            image={image}
                                        />
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }
                    </tbody>
                    
                </table>
            </div>

            

            
        </div>
    )
        
}

export default EmployeesTable;