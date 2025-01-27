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

const Login = () => {
    const nav = useNavigate();
    const {register , handleSubmit , formState:{errors}} = useForm({
        resolver: zodResolver(schema)
    })
    const onSubmit =async (data) =>{
       const relust= await instance.post(`/login`,data)
       localStorage.setItem("user",JSON.stringify(relust.data))
    nav('/')
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>dang nhap</h1>
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
                <button className='btn btn-primary'> dang nhap</button>
            </div>
      </form>
    </div>
  )
}

export default Login;
