import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import instance from '../axios'
import { useParams } from 'react-router-dom'
const schema = z.object({
    title: z.string().min(6),
    price: z.number().min(0),
    description: z.string().optional()
})

const ProductEdit = ({onEdit}) => {
    const {id} = useParams();
    const {register , handleSubmit , formState:{errors} , reset} = useForm({
        resolver: zodResolver(schema)
    })
    useEffect(()=>{
        (async()=>{
          const {data} =  await instance.get(`/products/${id}`)
          reset(data)
        })()
    },[])
  return (
    <div>
      <form onSubmit={handleSubmit((data)=>onEdit({...data,id}))}>
        <h1>edit product</h1>
            <div className="mb-3">
                <label >title</label>
                <input type="text" className='form-control' {...register("title",{required:true})} />
                {errors.title && <span>title khong duoc ngan qua 6 ki tu</span>}
            </div>
            <div className="mb-3">
                <label >price</label>
                <input type="number" className='form-control' {...register("price",{required:true , valueAsNumber: true})} />
                {errors.price && <span>price khong duoc ngan qua 6 ki tu</span>}
            </div>
            <div className="mb-3">
                <label >description</label>
                <input type="text" className='form-control' {...register("description",{required:true})} />
            </div>
            <div className="mb-3">
                <button className='btn btn-primary'> sua san pham</button>
            </div>
      </form>
    </div>
  )
}

export default ProductEdit
