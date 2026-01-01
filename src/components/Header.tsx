'use client'

import { Button } from '@mui/material'
import AddItem from './AddItem';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);


	const handleAddItem = () => {
    setOpen(true);

	}

  return (
    <>
      <header className="p-4 flex items-center bg-gray-800 text-white shadow-lg">
        <Button
          onClick={() => handleAddItem()}
          variant='outlined'
        >
          ADD ITEM
        </Button>
        <AddItem open={open} setOpen={setOpen} />
      </header>
    </>
  )
}