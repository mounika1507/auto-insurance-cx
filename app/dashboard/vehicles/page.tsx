const vehicles = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2025,
    plate: "ABC-1234",
  },
  {
    id: 2,
    make: "Nissan",
    model: "Altima",
    year: 2014,
    plate: "RM-3579",
  },
];
export default function VehiclesPage() {
  return (
    <div>
      <h1>My Vehicles</h1>

      {vehicles.map((vehicle) => (
        <div
          key={vehicle.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <h3>
            {vehicle.make} {vehicle.model}
          </h3>
          <p>Year: {vehicle.year}</p>
          <p>Plate: {vehicle.plate}</p>
        </div>
      ))}
    </div>
  );
}