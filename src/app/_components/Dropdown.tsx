"use client";

// Imports
import { cn } from '@/lib/utils';
import React, { useState, Dispatch, SetStateAction } from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandList, CommandItem, CommandGroup } from "@/components/ui/command";
import { ChevronDown } from "lucide-react";
import { Option } from '@/lib/data';

type Props = {
  "title": string,
  "state": Option,
  "setState": Dispatch<SetStateAction<Option>>,
  "dropdownOptions": Option[]
}

export default function Dropdown({ title, state, setState, dropdownOptions }: Props) {
  const [open, setOpen] = useState<boolean>(false)
  
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm">{title}</span>
      <Popover open={open} onOpenChange={setOpen}>
        {/* Button to open dropdown */}
        <PopoverTrigger asChild>
          <Button className="flex hover:bg-gray justify-between items-center w-24 px-3 rounded-none">
            {state.label}
            <ChevronDown size={20} />
          </Button>
        </PopoverTrigger>

        {/* Content */}
        <PopoverContent className="p-1 w-24 rounded-none" side="bottom" align="end">
          <Command>
            <CommandList>
              {
                dropdownOptions.map((option, index) => (
                  <CommandItem 
                    key={index} 
                    value={option.value}
                    onSelect={(value) => {
                      setState(
                        dropdownOptions.find((item) => item.value === value) || { "value": "id", "label": "ID" }
                      )
                      setOpen(false)
                    }}
                    className={cn("hover:bg-gray rounded-none", state.value === option.value ? "bg-gray" : "")}
                  >
                    {option.label}
                  </CommandItem>
                ))
              }
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}