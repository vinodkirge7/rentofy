import React from 'react'
import Layout from '../components/Layout/Layout'
import { Menu } from '../components/NavigationMenu'
import { Card } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {

    const navigate = useNavigate()
  return (
    <Layout>
        <Card className="card sticky h-screen flex flex-col justify-between py-5">
           <div className='space-y-8 pl-6'>
              <div>
                <span className='logo font-bold text-xl'>
                    Rentofy
                </span>
              </div>
              <div className='space-y-6'>
              {Menu.map((item)=>(

                <div  onClick={()=>navigate(item.path)} className='flex space-x-3 cursor-pointer items-center'>
        
                    {item.icon}
                    <p>{item.title}</p>

                </div>
    
              ))}
              </div>
           </div>
        </Card>
        
    </Layout>
  )
}

export default SideBar