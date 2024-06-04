import { Typography, Avatar } from "@mui/material";

const UpcomingReservations = () => {
  const mockReservations = [
    {
      id: 1,
      fullName: "Mufi Bompas",
      time: "9:55 PM",
      partySize: 1,
    },
    {
      id: 2,
      fullName: "Zolly Ould",
      time: "11:09 PM",
      partySize: 2,
    },
    {
      id: 3,
      fullName: "Tedi Probey",
      time: "11:34 PM",
      partySize: 3,
    },
    {
      id: 4,
      fullName: "Caryl Liell",
      time: "2:05 AM",
      partySize: 4,
    },
    {
      id: 5,
      fullName: "Lucian Debow",
      time: "7:29 AM",
      partySize: 5,
    },
  ];

  const RenderReservations = () => {
    return mockReservations?.map((reservation) => (
      <div className="reservations-cards" key={reservation.id}>
        <Avatar
          alt={reservation.fullName}
          src="https://avatar.iran.liara.run/public"
          sx={{ width: 56, height: 56 }}
        />
        <div className="reservations-cards-content">
          <Typography variant="body1">{reservation.fullName}</Typography>
          <Typography variant="body2">{reservation.time}</Typography>
          <Typography variant="body2">
            {reservation.partySize} People
          </Typography>
        </div>
      </div>
    ));
  };

  return (
    <div className="upcoming-reservations-wrapper">
      <Typography variant="h6">Upcoming Reservations</Typography>
      <div className="reservations-card-wrapper">
        <RenderReservations />
      </div>
    </div>
  );
};

export default UpcomingReservations;
