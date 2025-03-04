import { Kategorie } from "./kategorie";

export class Klasse {
  constructor(
    public id: number | null,
    public fachname: string | null,
    public not: number | null,
    public kategorie?: Kategorie,
    public bestanden?: boolean | null
  ) {}
}