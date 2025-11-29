import { cn } from "@/app/lib/utils";

const steps = [
  { label: "Order Placed" },
  { label: "Inprogress" },
  { label: "shipped" },
  { label: "Delivered" },
];

export function OrderTimeline({
  currentStep = 1,
  date = "8 June 2023 3:40 PM",
  message = "Your order has been successfully verified.",
}: {
  currentStep?: number;
  date?: string;
  message?: string;
}) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* ---- STEP PROGRESS ---- */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = index <= currentStep;
          const isCurrent = index === currentStep;

          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative"
            >
              {/* connector */}
              {index !== -1 && (
                <div
                  className={cn(
                    "absolute top-2 left-0 h-1 w-full -z-10",
                    isActive ? "bg-foreground" : "bg-ring"
                  )}
                />
              )}

              {/*---------- Arrow Under Current Step ----------*/}
              {isCurrent && (
                <div className="absolute left-1/ w-4 h-4 bg-gray-50 border-l border-t rotate-45 top-17 z-5 "></div>
              )}

              {/* circle */}
              <div
                className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center transition duration-200",
                  isActive
                    ? "border-foreground bg-background"
                    : "border-ring bg-background"
                )}
              >
                {isCurrent && (
                  <div className="w-3 h-3 rounded-full bg-foreground" />
                )}
              </div>

              {/* label */}
              <p
                className={cn(
                  "text-xs mt-2 font-medium",
                  isActive ? "text-foreground" : "text-ring"
                )}
              >
                {step.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* ---- STATUS MESSAGE ---- */}
      <div className="relative mt-8 bg-gray-50 rounded-lg shadow-sm p-4 text-sm text-gray-600 border">
        <div className="font-medium text-gray-500">{date}</div>
        <div className="mt-1 font-semibold text-gray-800">{message}</div>
      </div>
    </div>
  );
}
