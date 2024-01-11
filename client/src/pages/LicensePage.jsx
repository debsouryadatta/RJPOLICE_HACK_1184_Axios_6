import React, { useState } from 'react'
import { Nav2 } from '../components/Nav2'
import { Options } from '../components/LicensePage/Options'
import {Table} from '../components/LicensePage/Table'

const LicensePage = () => {
  const [option, setOption] = useState("pending")

  return (
    <>
    <div>
      <Nav2/>
    </div>
    <div className='flex justify-center mt-10'>
      <Options option={option} setOption={setOption}/>
    </div>
    <div className='flex justify-center'>
      <Table option={option}/>
    </div>
    </>
  )
}

export default LicensePage