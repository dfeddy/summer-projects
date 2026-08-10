// Snippet 1 — A union type
export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

snippet 1 doesnt create a variable, it creates a shape called invoice, anywhere in the code typescrpt will check that it has the 4 variables, The status is unique because it can only return pending or paid.

// Snippet 2 — A function with an async return type
export async function fetchRevenue(): Promise<Revenue[]> {
  /* returns rows from the revenue table */
}

Fetch revenue will take a moment to run bc of async and will hand back a list of revenue items

// Snippet 3 — A typed React prop
type CardProps = {
  title: string;
  value: number;
};
export default function Card({ title, value }: CardProps) {
  return <div>{title}: {value}</div>;
}

defines that card needs to have a title (text) and value (number) to display them on hte page 
