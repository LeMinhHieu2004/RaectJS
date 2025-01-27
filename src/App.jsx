import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import ProductAdd from "./pages/ProductAdd";
import ProductEdit from "./pages/ProductEdit";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import instance from "./axios";


function App() {
	const nav = useNavigate();
	const [products,setProducts] = useState([]);
	useEffect(()=>{
		(async()=>{
			const {data} = await instance.get(`/products`)
			setProducts(data)
		})()
	},[])
	const handleDelete = async(id) =>{
		if(confirm("ban co muon xoa khong")){		
		await instance.delete(`/products/${id}`);
		const newData = products.filter((item)=>item.id !== id && item)
		setProducts(newData)}
	}
	const handleAdd = async(data) =>{
		await instance.post(`/products`,data);
		const newData = instance.get(`/products`)
		setProducts(newData.data)
		nav('/')
	}
	const handleEdit = async(data) =>{
		await instance.patch(`/products/${data.id}`,data);
		const newData = instance.get(`/products`)
		setProducts(newData.data)
		nav('/')
	}
	
	return ( 
		<>
		<header>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/product-add">them san pham</Link>
				</li>
				<li>
					<Link to="/login">dang nhap</Link>
				</li>
				<li>
					<Link to="/register">dang ki</Link>
				</li>
			</ul>
		</header>
		<Routes>
			<Route path="/" element={< Home data={products} deleteProduct={handleDelete}/>} />
			<Route path="/product-add" element={< ProductAdd onAdd={handleAdd}/>} />
			<Route path="/product-edit/:id" element={< ProductEdit onEdit={handleEdit}/>} />
			<Route path="/login" element={< Login/>} />
			<Route path="/register" element={< Register/>} />
		</Routes>
		</>
	);
}

export default App;
