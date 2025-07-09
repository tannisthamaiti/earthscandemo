import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Chip,
  Breadcrumbs,
  Link as MuiLink,
  Snackbar,
  IconButton,
} from "@mui/material";
import {
  Chat as ChatIcon,
  Landscape,
  Close as CloseIcon,
} from "@mui/icons-material";
import ConvexChat from "./ConvexChat";
import PipelineStatusCard from "../components/PipelineStatusCard";

const URLS = {
  totalDatasets: "/upload", // GET returns array or {total}
};

/* ─────────────────────────── Helper: Vug card ─────────────────────────── */
function VugCard({ onClick }) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card className="shadow-sm cursor-pointer h-full" onClick={onClick}>
        <CardHeader avatar={<Landscape />} title="Vug Visualisation" />
        <CardContent>
          <Typography variant="body2">3‑D pore‑network rendering & statistics</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" fullWidth>
            Launch Tool
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();

  /* ─── state ─────────────────────────────────────────── */
  const [stats, setStats] = useState({ datasets: 0 });
  const [showChat, setShowChat] = useState(false);
  const [pipelineState, setPipelineState] = useState("idle");
  const [snackbarOpen, setSnackbarOpen] = useState(false); // analysis‑redirect
  const [showVugCard, setShowVugCard] = useState(false);   // reveal Vug card after 10s

  const timerRef = useRef(null); // 5‑s redirect timer
  const vugTimerRef = useRef(null); // 10‑s card‑reveal timer

  const hasData = stats.datasets > 0;

  /* ─── dataset count ─────────────────────────────────── */
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(URLS.totalDatasets);
        const json = await res.json();
        const total = Array.isArray(json) ? json.length : json?.total || 0;
        setStats({ datasets: total });
      } catch {/* ignore */}
    })();
  }, []);

  /* ─── watch for pipeline completion  ────────────────── */
  useEffect(() => {
    if (pipelineState === "done") {
      setSnackbarOpen(true);
      timerRef.current = setTimeout(() => navigate("/vug-visualisation"), 5000);
    }
    return () => clearTimeout(timerRef.current);
  }, [pipelineState, navigate]);

  const cancelRedirect = () => {
    clearTimeout(timerRef.current);
    setSnackbarOpen(false);
  };

  /* ─── upload click handler ──────────────────────────── */
  const handleUploadClick = () => {
    window.open("/upload", "_blank");
    clearTimeout(vugTimerRef.current);
    vugTimerRef.current = setTimeout(() => setShowVugCard(true), 10000);
  };

  /* ─── render ────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto relative">
        {/* ─── Breadcrumbs ─── */}
        <Box mb={1}>
          <Breadcrumbs aria-label="breadcrumb" separator="›">
            <MuiLink underline="hover" color="inherit" sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>Home</MuiLink>
            <MuiLink underline="hover" color="text.primary" sx={{ cursor: "pointer" }} onClick={() => navigate("/dashboard")}>Dashboard</MuiLink>
          </Breadcrumbs>
        </Box>

        {/* ─── Header ─── */}
        <Typography variant="h4" fontWeight={700}>Well Analytics Dashboard</Typography>
        <Typography variant="body2" color="textSecondary" mb={3}>Comprehensive machine‑learning operations platform for data processing and model management</Typography>

        <Box textAlign="right" mb={2}>
          <Chip label="Project: Oil & Gas Analysis" variant="outlined" size="small" />
        </Box>

        {/* ─── Stats strip ─── */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card variant="outlined" className="h-full cursor-pointer" onClick={handleUploadClick}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="subtitle2">Total Datasets</Typography>
                </Box>
                <Typography variant="h5" fontWeight={600}>{stats.datasets}</Typography>
                <Typography variant="caption" color="textSecondary">{hasData ? "+2 from last week" : "No data yet"}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* ─── Pipeline Status ─── */}
        {(hasData || showVugCard) && <PipelineStatusCard onStatusChange={setPipelineState} />}

        {/* ─── Vug Visualisation card BELOW pipeline ─── */}
        {(hasData || showVugCard) && (
          <Box mt={6}>
            <Grid container spacing={3}>
              <VugCard onClick={() => navigate("/vug-visualisation")} />
            </Grid>
          </Box>
        )}

        {/* ─── Chat toggle ─── */}
        {showChat && (
          <Box sx={{ position: "fixed", bottom: 24, right: 24, width: 360, zIndex: 1300 }}>
            <Card elevation={6}><CardContent><ConvexChat /></CardContent></Card>
          </Box>
        )}

        <Box display="flex" justifyContent="flex-end"><Button variant="contained" startIcon={<ChatIcon />} onClick={() => setShowChat(v => !v)}>{showChat ? "Hide Chat" : "Chat Now!"}</Button></Box>

        {/* ─── Snackbar: pipeline redirect ─── */}
        <Snackbar open={snackbarOpen} message="Analysis complete – opening visualisation in 5 s" action={<><Button color="secondary" size="small" onClick={cancelRedirect}>Cancel</Button><IconButton color="inherit" size="small" onClick={cancelRedirect}><CloseIcon fontSize="small" /></IconButton></>} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} />
      </div>
    </div>
  );
}
