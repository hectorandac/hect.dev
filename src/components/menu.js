import { Squeeze as Hamburger } from 'hamburger-react'
import React, { useState } from "react"

export default function Menu() {
    const [isActive, setActive] = useState(false)
    return <Hamburger toggled={isActive} toggle={setActive} color="#FFC247"/>
}