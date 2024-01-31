import { parse } from "https://deno.land/std/encoding/yaml.ts";

const config = parse(Deno.readTextFileSync("_quarto.yml"));