import Link from "next/link";

export const Subscribe = () => {
  return (
    <div className="p-3 rounded-2xl bg-[#16181C] my-3">
      <p className="font-semibold text-2xl">Suscríbete a Premium</p>
      <p>
        Suscríbete para desbloquear nuevas funciones y, si eres elegible,
        recibir un pago de cuota de ingresos por anuncios.
      </p>
      <Link href={"#"}>
        <span className="py-2 px-3 rounded-2xl bg-[#1A8CD8] my-2 inline-block">
          Suscribirse
        </span>
      </Link>
    </div>
  );
};
