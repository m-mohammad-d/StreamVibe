function MovieDescription({ description }: { description: string }) {
  return (
    <div className="bg-dark-10 border-2 border-dark-15 p-6 rounded-xl">
      <h2 className="text-3xl font-semibold text-grey-60 mb-4 pb-2">
        Description
      </h2>
      <p className="text-white leading-relaxed">{description}</p>
    </div>
  );
}

export default MovieDescription;
