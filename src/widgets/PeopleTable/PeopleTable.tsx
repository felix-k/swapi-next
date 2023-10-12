import { PersonType } from "@/src/shared/types";
import { useParamsStore } from "@/src/shared/store";
import { TableView, ColumnType, TableType } from "@/src/shared/ui/TableView";
import { DEFAULT_PAGE_SIZE, fetchPeople } from "@/src/entities/people";

const columns: ColumnType<PersonType>[] = [
  {
    header: "Name",
    accessorKey: "name",
    size: 180,
  },
  {
    header: "Height",
    accessorKey: "height",
    size: 140,
  },
  {
    header: "Mass",
    accessorKey: "mass",
    size: 140,
  },
  {
    header: "Birth year",
    accessorKey: "birthYear",
    size: 140,
  },
  {
    header: "Gender",
    accessorKey: "gender",
    size: 140,
  },
];

async function PeopleTable() {
  const state = useParamsStore.getState();
  const people = await fetchPeople(state);

  const table: TableType<PersonType> = {
    count: people.count,
    pageIndex: state.pageIndex,
    pageSize: DEFAULT_PAGE_SIZE,
    columns: columns,
    rows: people.results,
  };

  return <TableView<PersonType> table={table}></TableView>;
}

export default PeopleTable;
