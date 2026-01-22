import { Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";

// Displays a simple profile/product card
export default function ProfileCard() {
  return (
    <Card sx={{ maxWidth: 500, width: "100%", boxShadow: "0 8px 32px rgba(102, 126, 234, 0.2)", transition: "transform 0.3s ease, boxShadow 0.3s ease", "&:hover": { transform: "translateY(-8px)", boxShadow: "0 12px 40px rgba(102, 126, 234, 0.3)" } }}>
      <CardMedia
        component="img"
        height="240"
        image="https://i.pravatar.cc/150?img=33"
        alt="Profile"
      />
      <CardContent sx={{ background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
        <Typography variant="h6">Nathan Baker</Typography>
        <Typography variant="body2" color="text.secondary">
          Frontend Developer passionate about React and UI design.
        </Typography>
      </CardContent>
      <CardActions sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
        <Button size="small" sx={{ color: "white", "&:hover": { background: "rgba(255, 255, 255, 0.1)" }, "& .MuiTouchRipple-root": { color: "white" } }}>View</Button>
        <Button size="small" sx={{ color: "white", "&:hover": { background: "rgba(255, 255, 255, 0.1)" }, "& .MuiTouchRipple-root": { color: "white" } }}>Contact</Button>
      </CardActions>
    </Card>
  );
}
