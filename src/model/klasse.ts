import { Kategorie } from "./kategorie";

// This class represents a single grade entry in the system
// It defines the structure and properties that each grade entry must have
export class Klasse {
  constructor(
    // Properties with their types:
    // - The '|' symbol means "or", so "number | null" means "can be a number or null"
    // - The '?' symbol means this property is optional
    
    // ID number for the grade entry (can be a number or null)
    public id: number | null,
    
    // Name of the subject/course (can be a string or null)
    public fachname: string | null,
    
    // The grade/mark value (can be a number or null)
    public not: number | null,
    
    // Reference to a Kategorie object (optional)
    // This connects each grade to a specific category
    public kategorie?: Kategorie,
    
    // Whether the course was passed (optional, can be boolean or null)
    public bestanden?: boolean | null
  ) {}
}