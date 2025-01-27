import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import instance from '../axios'
import { useNavigate } from 'react-router-dom'
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

const Register = () => {
    const nav = useNavigate();
    const {register , handleSubmit , formState:{errors}} = useForm({
        resolver: zodResolver(schema)
    })
    const onSubmit =async (data) =>{
await instance.post(`/register`,data)
nav('/login')
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>dang ki</h1>
            <div className="mb-3">
                <label >email</label>
                <input type="text" className='form-control' {...register("email",{required:true})} />
                {errors.email && <span>email khong dung dinh dang</span>}
            </div>
            <div className="mb-3">
                <label >password</label>
                <input type="password" className='form-control' {...register("password",{required:true })} />
                {errors.password && <span>mat khau khong duoc ngan qua 6 ki tu</span>}
            </div>
            <div className="mb-3">
                <button className='btn btn-primary'> dang ki</button>
            </div>
      </form>
    </div>
  )
}

export default Register;
