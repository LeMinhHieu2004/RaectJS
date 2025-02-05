import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({data,deleteProduct}) => {
  return (
    <div>
      <table className="table table-bordered table-stripted">
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>price</th>
                <th>description</th>
                <th>acction</th>
            </tr>
        </thead>
        <tbody>
            {data?.map(item=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>deleteProduct(item.id)}> delete</button>
                        <Link className='btn btn-warning' to={`/product-edit/${item.id}`}>update</Link>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
