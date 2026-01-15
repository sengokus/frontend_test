import Select from "react-select";

export type SortField = "name" | "company" | "email";
export type SortDirection = "ascending" | "descending";

export type ControlsProps = {
  sortField: SortField;
  sortDirection: SortDirection;
  onSortFieldChange: (field: SortField) => void;
  onSortDirectionChange: (direction: SortDirection) => void;
};

const Controls = ({
  sortField,
  sortDirection,
  onSortFieldChange,
  onSortDirectionChange,
}: ControlsProps) => {
  const fieldOptions: { label: string; value: SortField }[] = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions: { label: string; value: SortDirection }[] = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          value={fieldOptions.find((option) => option.value === sortField)}
          onChange={(field: { value: SortField }) =>
            onSortFieldChange(field.value)
          }
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          value={directionOptions.find(
            (option) => option.value === sortDirection
          )}
          onChange={(direction: { value: SortDirection }) =>
            onSortDirectionChange(direction.value)
          }
        />
      </div>
    </div>
  );
};

export default Controls;
