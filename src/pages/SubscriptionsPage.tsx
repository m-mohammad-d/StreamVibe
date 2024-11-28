import PlanComparison from "../components/PlanComparison";
import Subscription from "../components/Subscription";

function SubscriptionsPage() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <Subscription />
      <PlanComparison />
    </div>
  );
}

export default SubscriptionsPage;