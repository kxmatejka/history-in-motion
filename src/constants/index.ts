const CITIES = {
  athens: {
    gps: {
      lat: 37.98381,
      lon: 23.72754,
    },
  },
  klazomenai: {
    gps: {
      lat: 38.3628,
      lon: 26.76958,
    },
  },
  pityussa: {
    gps: {
      lat: 40.34548,
      lon: 26.6843,
    },
  },
}

export const PEOPLE = [
  {
    name: 'Anaxagoras',
    lifetime: {
      from: -500,
      to: -378,
    },
    residence: [
      {
        period: {
          from: -500,
          to: -480,
        },
        gps: CITIES.klazomenai.gps,
      },
      {
        period: {
          from: -480,
          to: -450,
        },
        gps: CITIES.athens.gps,
      },
      {
        period: {
          from: -450,
          to: -428,
        },
        gps: CITIES.pityussa.gps,
      },
      {
        period: {
          from: -428,
          to: -378,
        },
        gps: CITIES.pityussa.gps,
        state: 'DEAD',
      },
    ],
  },
]
