/* AnalysisCards.jsx — all-MUI, no TypeScript helpers */
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import {
  BarChart3,
  Brain,
  TrendingUp,
  Target,
  Zap,
  Eye,
  Play,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Tool metadata                                                              */
/* -------------------------------------------------------------------------- */
const analysisTools = [
  {
    title: "Clustering Analysis",
    description:
      "Discover hidden patterns and group similar data points using unsupervised learning algorithms",
    icon: BarChart3,
    status: "ready",
    algorithms: ["K-Means", "DBSCAN", "Hierarchical"],
    action: "Start Clustering",
  },
  {
    title: "Classification Models",
    description:
      "Build predictive models using supervised learning techniques for classification tasks",
    icon: Brain,
    status: "pending",
    algorithms: ["Random Forest", "SVM", "Neural Networks"],
    action: "Train Models",
  },
  {
    title: "Regression Analysis",
    description:
      "Predict continuous values and understand relationships between variables",
    icon: TrendingUp,
    status: "pending",
    algorithms: ["Linear", "Polynomial", "Ridge"],
    action: "Run Analysis",
  },
  {
    title: "Model Evaluation",
    description:
      "Comprehensive performance metrics and validation results for your trained models",
    icon: Target,
    status: "pending",
    algorithms: ["Cross-validation", "ROC-AUC", "Confusion Matrix"],
    action: "View Results",
  },
  {
    title: "Feature Engineering",
    description:
      "Automated feature selection and engineering to improve model performance",
    icon: Zap,
    status: "available",
    algorithms: ["PCA", "Feature Selection", "Scaling"],
    action: "Optimize Features",
  },
  {
    title: "Model Monitoring",
    description:
      "Real-time monitoring of model performance and data-drift detection",
    icon: Eye,
    status: "available",
    algorithms: ["Drift Detection", "Performance Tracking", "Alerts"],
    action: "Monitor Models",
  },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */
export default function AnalysisCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {analysisTools.map((tool) => {
        const statusColor =
          tool.status === "ready"
            ? "success"
            : tool.status === "pending"
            ? "warning"
            : "default";

        return (
          <Card key={tool.title} className="relative">
            {/* ---------- header ---------- */}
            <CardHeader
              avatar={<tool.icon size={24} className="text-primary" />}
              title={
                <Typography variant="subtitle1" fontWeight={600}>
                  {tool.title}
                </Typography>
              }
              subheader={
                <Chip
                  label={tool.status}
                  size="small"
                  color={statusColor}
                  sx={{ textTransform: "capitalize" }}
                />
              }
            />

            {/* ---------- content ---------- */}
            <CardContent>
              <Typography variant="body2" color="text.secondary" mb={1}>
                {tool.description}
              </Typography>

              <Typography
                variant="caption"
                fontWeight={500}
                color="text.secondary"
              >
                Available algorithms
              </Typography>
              <div className="flex flex-wrap gap-1 mt-1 mb-4">
                {tool.algorithms.map((algo) => (
                  <Chip key={algo} label={algo} size="small" variant="outlined" />
                ))}
              </div>
            </CardContent>

            {/* ---------- action button ---------- */}
            <CardActions>
              <Button
                fullWidth
                variant={tool.status === "ready" ? "contained" : "outlined"}
                color={tool.status === "available" ? "primary" : "inherit"}
                disabled={tool.status === "pending"}
                startIcon={<Play size={16} />}
              >
                {tool.action}
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
