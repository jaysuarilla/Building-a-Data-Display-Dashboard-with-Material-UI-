import { Avatar, Badge, Stack, List, ListItem, ListItemText, Typography, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";

// Avatar showing unread notification count with professional messages
export default function NotificationAvatar() {
  const notifications = [
    { type: "success", title: "Project Completed", message: "Your dashboard project has been successfully deployed", icon: <CheckCircleIcon sx={{ color: "#4caf50" }} /> },
    { type: "info", title: "System Update", message: "New features are now available in your dashboard", icon: <InfoIcon sx={{ color: "#2196f3" }} /> },
    { type: "warning", title: "Action Required", message: "Please review pending user approvals", icon: <WarningIcon sx={{ color: "#ff9800" }} /> },
  ];

  return (
    <Box>
      <Stack direction="row" spacing={2} sx={{ mb: 2, alignItems: "center" }}>
        <Badge badgeContent={notifications.length} color="error">
          <Avatar sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
            <NotificationsIcon sx={{ color: "white" }} />
          </Avatar>
        </Badge>
        <Typography variant="body2" sx={{ color: "#666" }}>
          {notifications.length} new notifications
        </Typography>
      </Stack>

      <List sx={{ background: "rgba(255, 255, 255, 0.5)", borderRadius: "8px", mt: 2 }}>
        {notifications.map((notif, index) => (
          <ListItem key={index} sx={{ borderBottom: index < notifications.length - 1 ? "1px solid #e0e0e0" : "none", display: "flex", gap: 2 }}>
            {notif.icon}
            <ListItemText
              primary={notif.title}
              secondary={notif.message}
              primaryTypographyProps={{ fontWeight: "bold", color: "#667eea" }}
              secondaryTypographyProps={{ color: "#666", fontSize: "0.9rem" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
