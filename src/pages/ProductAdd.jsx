import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
const schema = z.object({
    title: z.string().min(6),
    price: z.number().min(0),
    description: z.string().optional()
})

const ProductAdd = ({onAdd}) => {
    const {register , handleSubmit , formState:{errors}} = useForm({
        resolver: zodResolver(schema)
    })
  return (
    <div>
      <form onSubmit={handleSubmit((data)=>onAdd(data))}>
        <h1>add product</h1>
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
                <button className='btn btn-primary'> them san pham</button>
            </div>
      </form>
    </div>
  )
}

export default ProductAdd
