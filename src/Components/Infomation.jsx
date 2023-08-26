import React from 'react'
import { Link, Outlet } from "react-router-dom";
import {Tabs, Tab, Chip} from "@nextui-org/react";

const Information = () => {
  return (
    <div>
    <ul className="informationComp">
        <li><Link to="/">All</Link></li>
        <li><Link to="/active">Active</Link></li>
        <li><Link to="/completed">Completed</Link></li>
    </ul>
    
    </div>
  )
}

export default Information