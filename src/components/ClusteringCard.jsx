import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Slider,
} from "@mui/material";
import { BarChart3 as BarChart } from "lucide-react";   // ⬅️ lucide-react icon

export default function ClusteringCard({ onRunClustering }) {
  const [open, setOpen]   = useState(false);
  const [clusters, setClusters] = useState(3);

  const handleStart = () => {
    setOpen(false);
    onRunClustering?.(clusters);
  };

  return (
    <>
      <Card className="shadow-md">
        <CardHeader
          avatar={<BarChart size={18} />}          {/* lucide icon */}
          title="Clustering Analysis"
          subheader="Unsupervised well segmentation"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Uses k-means to discover cluster groups in multivariate well data. Preview via PCA
            projection.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Start Clustering
          </Button>
        </CardActions>
      </Card>

      {/* dialog – choose cluster count */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Select number of clusters</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>Clusters: {clusters}</Typography>
          <Slider
            value={clusters}
            onChange={(_, v) => setClusters(v)}
            valueLabelDisplay="auto"
            min={2}
            max={10}
            step={1}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleStart}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
