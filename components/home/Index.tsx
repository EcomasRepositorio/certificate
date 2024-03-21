"use client";

import React, { useState } from 'react'
import Input from '../share/Input'
import Label from '../share/label'
import Button from '../share/button'
import Image from 'next/image';
import Module from '../template/module';

const Home = () => {

  const [name, setName ] = useState('');
  const [code, setCode] = useState('');

  const handleChange = (name: string, value: string) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'code') {
      setCode(value);
    }
  }

return (
<div className='p-10'>
<form>
  <div className="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <Label
        htmlFor='first_name'>
          Nombres y Apellidos:
      </Label>
      <Input
        id='name'
        type='text'
        required
        placeholder='Jhon'
        value={name}
        onChange={(e) => handleChange('name', e.target.value)}/>
    </div>
    <div>
    <label htmlFor='code'>Código:</label>
      <input
        id='code'
        type='text'
        name='code'
        value={code}
        onChange={(e) => handleChange('code', e.target.value)}
        required/>
    </div>
  </div>

  <Button type="submit">Submit</Button>
</form>

<div className="grid grid-cols-1 gap-10">
  {[...Array(12)].map((_, index) => (
    <Module key={index} name={name} code={code} />
  ))}
</div>
</div>
  )
}

export default Home;