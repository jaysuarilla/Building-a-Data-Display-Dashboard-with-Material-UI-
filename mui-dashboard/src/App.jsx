import { Container, Typography, Box } from "@mui/material";
import ProfileCard from "./components/ProfileCard";
import UserList from "./components/UserList";
import NotificationAvatar from "./components/NotificationAvatar";
import UserTable from "./components/UserTable";
import FAQAccordion from "./components/FAQAccordion";

// Main dashboard layout
export default function App() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, minHeight: "100vh", background: "linear-gradient(135deg, #001a4d 0%, #003d99 100%)", borderRadius: "8px", py: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold", color: "white", mb: 4 }}>
        MUI Dashboard
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 3, mb: 4 }}>
        <Box sx={{ background: "linear-gradient(135deg, #D2B48C 0%, #DEB887 100%)", borderRadius: "8px", p: 3 }}>
          <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold", mb: 2 }}>Profile Card</Typography>
          <ProfileCard />
        </Box>

        <Box sx={{ background: "linear-gradient(135deg, #D2B48C 0%, #DEB887 100%)", borderRadius: "8px", p: 3 }}>
          <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold", mb: 2 }}>User List</Typography>
          <UserList />
        </Box>

        <Box sx={{ background: "linear-gradient(135deg, #D2B48C 0%, #DEB887 100%)", borderRadius: "8px", p: 3 }}>
          <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold", mb: 2 }}>Notifications</Typography>
          <NotificationAvatar />
        </Box>
      </Box>

      <Box mb={4} sx={{ background: "linear-gradient(135deg, #D2B48C 0%, #DEB887 100%)", borderRadius: "8px", p: 3 }}>
        <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold", mb: 2 }}>Users Table</Typography>
        <UserTable />
      </Box>

      <Box mb={4} sx={{ background: "linear-gradient(135deg, #D2B48C 0%, #DEB887 100%)", borderRadius: "8px", p: 3 }}>
        <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold", mb: 2 }}>FAQs</Typography>
        <FAQAccordion />
      </Box>
    </Container>
  );
}
