import { Country } from "./country.interface.ts";

// const readCountries = async (
//     fileName: string = "./data/countries.json"
// ): Promise<Array<Country>> => {
//     const countries: string = new TextDecoder("utf-8").decode(
//         await Deno.readFile(fileName)
//     );

//     return countries;
// };

const capitalize = (s: string): string => {
    return s.charAt(0).toUpperCase() + s.slice(1);
};

export { capitalize };
