interface SubscriptionItemProps {
  name: string;
  title: string;
  price: number;
}

function SubscriptionItem({ name, title, price }: SubscriptionItemProps) {
  return (
    <div className="bg-dark-10 border-2 border-dark-15 p-12 space-y-6 rounded-lg">
      <h2 className="text-white text-2xl font-bold">{name}</h2>
      <p className="text-grey-60 text-lg">{title}</p>
      <p className="text-3xl font-bold text-white">
        ${price} <span className="text-sm text-grey-60">/month</span>
      </p>
      <div className="flex gap-6 flex-col md:flex-row">
        <button className="bg-dark-08 text-white py-2 px-6 rounded-lg">
          Start Free Trial
        </button>
        <button className="bg-primary-45 text-white py-2 px-6 rounded-lg hover:bg-primary-50 hover:text-white transition-all">
          Choose Plan
        </button>
      </div>
    </div>
  );
}

export default SubscriptionItem;
