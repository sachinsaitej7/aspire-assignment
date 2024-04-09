import React, { Suspense } from "react";
import { Skeleton } from "antd";
// lazy load the module
const CardsModule = React.lazy(() => import("../modules/cards"));
const PaymentsModule = React.lazy(() => import("../modules/payments"));
const CreditModule = React.lazy(() => import("../modules/credit"));

function ModuleProvider({ activeKey }: { activeKey: string }): JSX.Element {
  let content = null;
  switch (activeKey) {
    case "cards":
      content = <CardsModule />;
      break;
    case "payments":
      content = <PaymentsModule />;
      break;
    case "credit":
      content = <CreditModule />;
      break;
    default:
      content = <div>Module not found</div>;
  }

  return (
    <Suspense
      fallback={
        <div className='px-16 py-16'>
          <Skeleton active />
        </div>
      }
    >
      {content}
    </Suspense>
  );
}

export default ModuleProvider;
