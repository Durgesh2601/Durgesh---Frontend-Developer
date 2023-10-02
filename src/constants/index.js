export const formFields = [
  {
    id: 1,
    name: "status",
    label: "Status",
    type: "select",
    options: [
      {
        label: "Active",
        value: "active",
      },
      {
        label: "Retired",
        value: "retired",
      },
      {
        label: "Unknown",
        value: "unknown",
      },
    ],
  },
  {
    id: 2,
    name: "original_launch",
    label: "Original Launch",
    type: "date",
  },
  {
    id: 3,
    name: "type",
    label: "Type",
  },
];

export const ITEMS_PER_PAGE = 10;
