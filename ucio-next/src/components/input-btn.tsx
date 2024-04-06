"use client"

import { ClassNameWithProps } from "@/@types/global";
import { Grow, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

const InputButton = ({ className }: ClassNameWithProps) => {
    const [isInputVisible, setInputVisible] = useState<boolean>(true);

    return (
        <div className={`${className ?? ''}`}>
            {!isInputVisible && (
                <Button variant="text" onClick={() => setInputVisible(true)}>
                    Search
                </Button>
            )}

            <Grow in={isInputVisible}>
                <TextField
                    label="Search Keyword"
                    variant="outlined"
                    InputProps={{
                        className: 'h-[50px]'
                    }}
                    InputLabelProps={{
                        classes: {
                          outlined: 'pt-[-40px]'
                        },
                    }}
                />
            </Grow>
        </div>
    )
}
export default InputButton;
