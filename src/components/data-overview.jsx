import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  LinearProgress,
} from "@mui/material";
import {
  Database,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

export default function DataOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* ───── Total datasets ───── */}
      <Card>
        <CardHeader
          sx={{ pb: 0.5 }}
          avatar={<Database className="h-4 w-4 text-muted-foreground" />}
          title={
            <Typography variant="subtitle2" color="text.secondary">
              Total Datasets
            </Typography>
          }
        />
        <CardContent sx={{ pt: 0.5 }}>
          <Typography variant="h5" fontWeight={600}>
            12
          </Typography>
          <Typography variant="caption" color="text.secondary">
            +2 from last week
          </Typography>
        </CardContent>
      </Card>

      {/* ───── Data Quality ───── */}
      <Card>
        <CardHeader
          sx={{ pb: 0.5 }}
          avatar={<CheckCircle className="h-4 w-4 text-green-500" />}
          title={
            <Typography variant="subtitle2" color="text.secondary">
              Data Quality
            </Typography>
          }
        />
        <CardContent sx={{ pt: 0.5 }}>
          <Typography variant="h5" fontWeight={600}>
            94%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={94}
            sx={{ mt: 1, height: 4, borderRadius: 2 }}
          />
        </CardContent>
      </Card>

      {/* ───── Active Models ───── */}
      <Card>
        <CardHeader
          sx={{ pb: 0.5 }}
          avatar={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
          title={
            <Typography variant="subtitle2" color="text.secondary">
              Active Models
            </Typography>
          }
        />
        <CardContent sx={{ pt: 0.5 }}>
          <Typography variant="h5" fontWeight={600}>
            8
          </Typography>
          <Typography variant="caption" color="text.secondary">
            3 in production
          </Typography>
        </CardContent>
      </Card>

      {/* ───── Processing Jobs ───── */}
      <Card>
        <CardHeader
          sx={{ pb: 0.5 }}
          avatar={<AlertTriangle className="h-4 w-4 text-yellow-500" />}
          title={
            <Typography variant="subtitle2" color="text.secondary">
              Processing Jobs
            </Typography>
          }
        />
        <CardContent sx={{ pt: 0.5 }}>
          <Typography variant="h5" fontWeight={600}>
            3
          </Typography>
          <Typography variant="caption" color="text.secondary">
            2 running, 1 queued
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
