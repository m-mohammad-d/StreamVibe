import React from "react";

interface Plan {
  name: string;
  price: string;
  content: string;
  devices: string;
  freeTrial: string;
  cancelAnytime: string;
  hdr: string;
  dolbyAtmos: string;
  adFree: string;
  offlineViewing: string;
  familySharing: string;
  isPopular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Basic",
    price: "$9.99/Month",
    content:
      "Access to a wide selection of movies and shows, including some new releases.",
    devices: "Watch on one device simultaneously",
    freeTrial: "7 Days",
    cancelAnytime: "Yes",
    hdr: "No",
    dolbyAtmos: "No",
    adFree: "No",
    offlineViewing: "No",
    familySharing: "No",
  },
  {
    name: "Standard",
    price: "$12.99/Month",
    content:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    devices: "Watch on Two device simultaneously",
    freeTrial: "7 Days",
    cancelAnytime: "Yes",
    hdr: "Yes",
    dolbyAtmos: "Yes",
    adFree: "Yes",
    offlineViewing: "Yes, for select titles.",
    familySharing: "Yes, up to 5 family members.",
    isPopular: true,
  },
  {
    name: "Premium",
    price: "$14.99/Month",
    content:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    devices: "Watch on Four device simultaneously",
    freeTrial: "7 Days",
    cancelAnytime: "Yes",
    hdr: "Yes",
    dolbyAtmos: "Yes",
    adFree: "Yes",
    offlineViewing: "Yes, for all titles.",
    familySharing: "Yes, up to 6 family members.",
  },
];

const PlanComparison: React.FC = () => {
  return (
    <div className="text-white py-12 px-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Compare our plans and find the right one for you
      </h1>
      <p className="text-grey-60 mb-8 text-center max-w-3xl mx-auto">
        StreamVibe offers three different plans to fit your needs: Basic,
        Standard, and Premium. Compare the features of each plan and choose the
        one that’s right for you.
      </p>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 bg-dark-06 border-2 border-dark-15">
                Features
              </th>
              {plans.map((plan, index) => (
                <th
                  key={index}
                  className="p-4 bg-dark-06 border-2 border-dark-15"
                >
                  {plan.name}{" "}
                  {plan.isPopular && (
                    <span className="ml-2 text-xs font-semibold bg-primary-45 text-white px-3 py-1 rounded-lg">
                      Popular
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(plans[0])
              .filter((key) => key !== "name" && key !== "isPopular")
              .map((feature, index) => (
                <tr key={index} className="border-2 border-dark-15">
                  <td className="py-3 px-4 text-grey-75 border-2 border-dark-15 capitalize">
                    {feature.replace(/([A-Z])/g, " $1")}
                  </td>
                  {plans.map((plan, idx) => (
                    <td
                      key={idx}
                      className="py-3 px-4 text-grey-75 border-2 border-dark-15"
                    >
                      {plan[feature as keyof Plan]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlanComparison;
