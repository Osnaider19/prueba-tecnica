import { ItemTrends } from "./ItemTrends";

export default function Trends() {
  return (
    <div className="rounded-2xl bg-[#16181C] my-3 py-4 overflow-hidden">
      <h2 className="text-xl font-semibold py-2 px-3">Que está pasando</h2>
      <ItemTrends
        countPost="40,3"
        genres="deportes"
        tilte="mbbapé al real madrid"
      />
      <ItemTrends
        countPost="40,3"
        genres="deportes"
        tilte="mbbapé al real madrid"
      />
      <ItemTrends
        countPost="40,3"
        genres="deportes"
        tilte="mbbapé al real madrid"
      />
    </div>
  );
}
