import { CheckCircle, Circle, Clock } from "lucide-react";
import { LinearProgress } from "@mui/material";

const steps = [
  { name: "Upload",     status: "completed" },
  { name: "Clean",      status: "completed" },
  { name: "Process",    status: "active"    },
  { name: "Cluster",    status: "pending"   },
  { name: "Supervise",  status: "pending"   },
  { name: "Results",    status: "pending"   },
];

export default function WorkflowProgress() {
  const completed = steps.filter((s) => s.status === "completed").length;
  const progress  = (completed / steps.length) * 100; // 0–100

  return (
    <div className="space-y-4">
      {/* header row */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Pipeline Progress</h3>
        <span className="text-sm text-muted-foreground">
          {completed}/{steps.length} completed
        </span>
      </div>

      {/* progress bar */}
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: 8, borderRadius: 1 }}   /* h-2 in Tailwind ≈ 8 px */
      />

      {/* step icons + labels */}
      <div className="flex items-center justify-between pt-2">
        {steps.map((step) => (
          <div key={step.name} className="flex flex-col items-center gap-1">
            {step.status === "completed" && (
              <CheckCircle className="h-5 w-5 text-green-500" />
            )}
            {step.status === "active" && (
              <Clock className="h-5 w-5 text-blue-500" />
            )}
            {step.status === "pending" && (
              <Circle className="h-5 w-5 text-muted-foreground" />
            )}

            <span
              className={`text-xs ${
                step.status === "active"
                  ? "text-blue-600 font-medium"
                  : step.status === "completed"
                  ? "text-green-600"
                  : "text-muted-foreground"
              }`}
            >
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
