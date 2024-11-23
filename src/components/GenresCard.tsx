function GenresCard({ title }: { title: string }) {
  return (
    <div className="bg-dark-10 border-2 border-dark-15 rounded p-4">
      <img src="/icon-logo.png" className="w-full h-48 object-cover rounded" />
      <h3 className="mt-8 text-2xl text-white text-center">{title}</h3>
    </div>
  );
}

export default GenresCard;
