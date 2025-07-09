import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { Layers, TrendingUp, Zap, Eye } from "lucide-react";

/* ───────────────────────────── tool metadata ─────────────────────────── */
const resultAnalysisTools = [
  {
    title: "Pattern Recognition",
    description:
      "Detect spatial and temporal similarities across wells",
    icon: Layers,
    status: "ready",
    buttonText: "Launch Tool",
    variant: "contained",       // MUI variants
    color: "primary",
  },
  {
    title: "Sensitivity Report",
    description:
      "Reservoir productivity parameters analysis report",
    icon: TrendingUp,
    status: "ready",
    buttonText: "Launch Tool",
    variant: "outlined",
    color: "primary",
  },
  {
    title: "Well Planning Insights",
    description:
      "Guides drilling with formation & production analysis",
    icon: Zap,
    status: "ready",
    buttonText: "Launch Tool",
    variant: "text",
    color: "primary",
  },
  {
    title: "Vug Analysis",
    description:
      "Interpret porous zones using AI-enhanced inference",
    icon: Eye,
    status: "ready",
    buttonText: "Launch Tool",
    variant: "contained",
    color: "error",
  },
];

/* ───────────────────────────── component ─────────────────────────────── */
export default function ResultsAnalysisTools() {
  return (
    <div className="space-y-4">
      {/* heading */}
      <div>
        <Typography variant="h5" fontWeight={600}>
          Analysis Results
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Specialized tools for oil-and-gas operations insights
        </Typography>
      </div>

      {/* cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {resultAnalysisTools.map((tool) => (
          <Card
            key={tool.title}
            className="hover:shadow-md transition-shadow"
          >
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
                  color="success"
                  sx={{ textTransform: "capitalize" }}
                />
              }
              sx={{ pb: 1 }}
            />

            <CardContent sx={{ pt: 0 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                mb={2}
              >
                {tool.description}
              </Typography>

              <Button
                fullWidth
                variant={tool.variant}
                color={tool.color}
              >
                {tool.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
