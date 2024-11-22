import SubscriptionItem from "./SubscriptionItem";

const subscriptions = [
  {
    PlanName: "basic",
    title:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: 9.99,
  },
  {
    PlanName: "Standard Plan",
    title:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    price: 12.99,
  },
  {
    PlanName: "Premium Plan",
    title:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    price: 14.99,
  },
];

function Subscription() {
  return (
    <div className="mt-20 mx-6">
      <div className="space-y-4 text-center lg:text-left">
        <h2 className="text-white text-2xl sm:text-3xl font-bold">
          Choose the plan that's right for you
        </h2>
        <p className="text-grey-60 text-sm sm:text-base">
          Join StreamVibe and select from our flexible subscription options
          tailored to suit your viewing preferences. Get ready for non-stop
          entertainment!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
        {subscriptions.map((subscription) => (
          <SubscriptionItem
            name={subscription.PlanName}
            price={subscription.price}
            title={subscription.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Subscription;
