export const ItemAbout = ({ icon, title, description }) => {
  return (
    <div className="flex justify-start w-full items-center gap-x-2 py-2 ">
      <div className="flex justify-center items-center text-xl">{icon}</div>
      <span className="text-lg">{title} :</span>
      <span className="text-lg">{description}</span>
    </div>
  );
};
