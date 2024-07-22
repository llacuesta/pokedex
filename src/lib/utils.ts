// Imports
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { TYPES, STAT } from "./data"

// merge tailwind classes (provided by shadcn)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// determine pokemon weakness
function weaknessChart(type: (typeof TYPES)[number]) {
  switch(type) {
    case "normal":
      return {
        weakTo: ["rock", "steel", "ghost"],
        weakAgainst: ["fighting"],
      } 
    case "fighting":
      return {
        weakTo: ["flying", "poison", "bug", "psychic", "fairy"],
        weakAgainst: ["flying", "psychic", "fairy"],
      } 
    case "flying":
      return {
        weakTo: ["rock", "steel", "electric"],
        weakAgainst: ["rock", "electric", "ice"],
      } 
    case "poison":
      return {
        weakTo: ["poison", "ground", "rock", "ghost"],
        weakAgainst: ["ground", "psychic"],
      } 
    case "ground":
      return {
        weakTo: ["bug", "grass"],
        weakAgainst: ["water", "grass", "ice"],
      } 
    case "rock":
      return {
        weakTo: ["fighting", "ground", "steel"],
        weakAgainst: ["fighting", "ground", "steel", "water", "grass"],
      } 
    case "bug":
      return {
        weakTo: ["fighting", "flying", "poison", "ghost", "steel", "fire", "fairy"],
        weakAgainst: ["flying", "rock", "fire"],
      } 
    case "ghost":
      return {
        weakTo: ["normal", "dark"],
        weakAgainst: ["ghost", "dark"],
      } 
    case "steel":
      return {
        weakTo: ["steel", "fire", "water", "electric"],
        weakAgainst: ["fighting", "ground", "fire"],
      }
    case "fire":
      return {
        weakTo: ["rock", "fire", "water", "dragon"],
        weakAgainst: ["ground", "rock", "water"],
      }
    case "water":
      return {
        weakTo: ["water", "grass", "dragon"],
        weakAgainst: ["grass", "electric"],
      }
    case "grass":
      return {
        weakTo: ["flying", "poison", "bug", "steel", "fire", "grass", "dragon"],
        weakAgainst: ["flying", "poison", "bug", "fire", "ice"],
      }
    case "electric":
      return {
        weakTo: ["grass", "electric", "dragon"],
        weakAgainst: ["ground"],
      }
    case "psychic":
      return {
        weakTo: ["steel", "psychic", "dark"],
        weakAgainst: ["bug", "ghost", "dark"],
      }
    case "ice":
      return {
        weakTo: ["steel", "fire", "water"],
        weakAgainst: ["fighting", "rock", "steel", "fire"],
      }
    case "dragon":
      return {
        weakTo: ["steel", "fairy"],
        weakAgainst: ["ice", "dragon", "fairy"],
      }
    case "dark":
      return {
        weakTo: ["fighting", "dark", "fairy"],
        weakAgainst: ["fighting", "bug", "fairy"],
      }
    case "fairy":
      return {
        weakTo: ["poision", "steel", "fire"],
        weakAgainst: ["poison", "steel"],
      }
  }
}

export function determineTypeWeakness(types: (typeof TYPES)[number][]) {
  const [type1, type2] = types
  const type1Weakness = weaknessChart(type1)
  const type2Weakness = type2 ? weaknessChart(type2) : { weakTo: [], weakAgainst: [] }

  // return combined weaknesses
  return {
    weakTo: [...new Set([...type1Weakness.weakTo, ...type2Weakness.weakTo])],
    weakAgainst: [...new Set([...type1Weakness.weakAgainst, ...type2Weakness.weakAgainst])]
  }
}

export function abbreviateStat(stat: (typeof STAT)[number]) {
  switch(stat) {
    case "hp":
      return "HP";
    case "attack":
      return "ATK";
    case "defense":
      return "DEF";
    case "special-attack":
      return "SPA";
    case "special-defense":
      return "SPD";
    case "speed":
      return "SPE";
    default:
      return "???";
  }
}