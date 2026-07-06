const stats = [
  {
    value: "10K+",
    label: "Players",
  },
  {
    value: "500+",
    label: "Communities",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap gap-8 pt-6">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-2xl font-bold">{item.value}</h3>

          <p className="text-sm text-gray-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
}