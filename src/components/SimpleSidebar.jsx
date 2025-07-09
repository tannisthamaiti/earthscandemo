import React, { useState } from "react";
import {
  Upload,
  Sparkles,
  Database,
  BarChart3,
  Brain,
  Target,
  CheckCircle,
  Settings,
  Home,
  FileText,
  Activity,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  IconButton,
  Divider,
} from "@mui/material";

const workflowSteps = [
  {
    title: "Data Upload",
    url: "/upload",
    icon: Upload,
    status: "completed",
    description: "Upload datasets",
  },
  {
    title: "Data Cleaning",
    url: "/cleaning",
    icon: Sparkles,
    status: "completed",
    description: "Clean and validate data",
  },
  {
    title: "Data Processing",
    url: "/processing",
    icon: Database,
    status: "completed",
    description: "Transform and prepare data",
  },
  {
    title: "Clustering Analysis",
    url: "/clustering",
    icon: BarChart3,
    status: "completed",
    description: "Unsupervised learning",
  },
  {
    title: "Supervised Analysis",
    url: "/supervised",
    icon: Brain,
    status: "completed",
    description: "Model training & validation",
  },
  {
    title: "Results & Evaluation",
    url: "/results",
    icon: Target,
    status: "active",
    description: "Model performance metrics",
  },
];

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Projects", url: "/projects", icon: FileText },
  { title: "Model Registry", url: "/models", icon: Brain },
  { title: "Monitoring", url: "/monitoring", icon: Activity },
  { title: "Settings", url: "/settings", icon: Settings },
];

export default function SimpleSidebar() {
  const [navExpanded, setNavExpanded] = useState(true);
  const [pipelineExpanded, setPipelineExpanded] = useState(true);

  return (
    <aside className="block w-64 border-r bg-gray-100 max-h-screen">
      <Box className="h-full flex flex-col">
        {/* Header */}
        <Box className="flex items-center gap-2 border-b px-4 py-3">
          <Box className="bg-blue-600 text-white p-2 rounded-lg">
            <Brain size={18} />
          </Box>
          <Box>
            <Typography variant="body1" fontWeight="bold">
              MLOps Platform
            </Typography>
            <Typography variant="caption" color="textSecondary">
              v2.1.0
            </Typography>
          </Box>
        </Box>

        {/* Scrollable content */}
        <Box className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
          {/* Navigation Accordion */}
          <Accordion expanded={navExpanded} onChange={() => setNavExpanded(!navExpanded)}>
            <AccordionSummary expandIcon={<ChevronDown size={16} />}>
              <Typography className="text-sm font-medium">Navigation</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {navigationItems.map((item) => (
                  <ListItem button key={item.title}>
                    <ListItemIcon>
                      <item.icon size={18} />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          {/* ML Pipeline Accordion */}
          <Accordion expanded={pipelineExpanded} onChange={() => setPipelineExpanded(!pipelineExpanded)}>
            <AccordionSummary expandIcon={<ChevronDown size={16} />}>
              <Typography className="text-sm font-medium">ML Pipeline</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {workflowSteps.map((step, index) => (
                  <ListItem
                    key={step.title}
                    button
                    className={`rounded-md ${
                      step.status === "active"
                        ? "bg-blue-100"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <ListItemIcon>
                      <Box className="flex items-center gap-2">
                        <span className="h-5 w-5 flex items-center justify-center text-xs rounded-full bg-gray-200">
                          {index + 1}
                        </span>
                        <step.icon size={16} />
                      </Box>
                    </ListItemIcon>
                    <ListItemText
                      primary={step.title}
                      secondary={step.description}
                      primaryTypographyProps={{ className: "text-sm" }}
                      secondaryTypographyProps={{ className: "text-xs text-gray-500" }}
                    />
                    {step.status === "completed" && (
                      <CheckCircle size={14} className="text-green-500 ml-auto" />
                    )}
                    {step.status === "active" && (
                      <span className="ml-auto h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
                    )}
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Footer */}
        <Box className="p-4 mt-auto text-xs text-gray-500 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 inline-block"></span>
          All systems operational
        </Box>
      </Box>
    </aside>
  );
}
