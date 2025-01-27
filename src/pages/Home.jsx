import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({data,deleteProduct}) => {
  return (
    <div>
      <table className="table table-bordered table-stripted">
        <thead>
            <tr>
                <td>id</td>
                <td>title</td>
                <td>price</td>
                <td>description</td>
                <td>acction</td>
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
