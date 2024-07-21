"use client";

// Imports
import { cn } from "@/lib/utils";
import React, { useState, Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandList, CommandItem, CommandGroup } from "@/components/ui/command";
import { ChevronDown } from "lucide-react";
import { SortOption } from "@/lib/data";

type Props = {
  "sortBy": SortOption,
  "setSortBy": Dispatch<SetStateAction<SortOption>>
}

const sortOptions: SortOption[] = [
  {
    "value": "id",
    "label": "ID"
  },
  {
    "value": "name",
    "label": "Name"
  }
]

export default function Sort({ sortBy, setSortBy }: Props) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm">Sort by</span>
      <Popover open={open} onOpenChange={setOpen}>
        {/* Button to open dropdown */}
        <PopoverTrigger asChild>
          <Button className="flex hover:bg-gray justify-between items-center w-24 px-3 py-1 border rounded-md">
            {sortBy.label}
            <ChevronDown size={20} />
          </Button>
        </PopoverTrigger>

        {/* Content */}
        <PopoverContent className="p-1 w-24" side="bottom" align="end">
          <Command>
            <CommandList>
              {
                sortOptions.map((option, index) => (
                  <CommandItem 
                    key={index} 
                    value={option.value}
                    onSelect={(value) => {
                      setSortBy(
                        sortOptions.find((item) => item.value === value) || { "value": "id", "label": "ID" }
                      )
                      setOpen(false)
                    }}
                    className={cn("hover:bg-gray", sortBy.value === option.value ? "bg-gray" : "")}
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