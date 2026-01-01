"use client";

import { Button, Input, Modal, Box } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "convex/_generated/api";

interface AddItemProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function AddItem({ open, setOpen}: AddItemProps) {
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
    const addItemMutation = useMutation(api.items.add);
    
    const handleClose = () => {
        setOpen(false);
        setName("");
        setLocation("");
    }

    const addItem = async () => {
        try {
            await addItemMutation({
                name,
                location,
            });
            handleClose();
        } catch (error) {
            console.error("Error adding item:", error);
        }
    }

	return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <FormGroup>
                    <Input placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                    <div className="flex">
                        <Button type="submit" variant="contained" onClick={addItem}>Add Item</Button>
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                    </div>
                </FormGroup>
            </Box>
        </Modal>
    );
}
