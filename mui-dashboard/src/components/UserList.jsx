import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

// Displays a list of users with avatars
export default function UserList() {
  const users = [
    { name: "Mark", image: "https://i.pravatar.cc/150?img=11" },
    { name: "John", image: "https://i.pravatar.cc/150?img=12" },
    { name: "Charlie", image: "https://i.pravatar.cc/150?img=13" },
  ];

  return (
    <List sx={{ background: "linear-gradient(135deg, #a77501ff 0%, #c3cfe2 100%)", borderRadius: "8px", padding: "16px" }}>
      {users.map((user) => (
        <ListItem key={user.name} sx={{ background: "white", borderRadius: "6px", mb: 1, boxShadow: "0 2px 8px rgba(102, 126, 234, 0.1)", transition: "all 0.3s ease", "&:hover": { boxShadow: "0 4px 12px rgba(102, 126, 234, 0.2)", transform: "translateX(4px)" } }}>
          <ListItemAvatar>
            <Avatar src={user.image} alt={user.name} />
          </ListItemAvatar>
          <ListItemText primary={user.name} secondary="Active user" />
        </ListItem>
      ))}
    </List>
  );
}
