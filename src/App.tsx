import { Grid, GridColumn } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-material/dist/all.css";
import "./App.css";
import Menu, { categories } from "./components/Menu";
import NoteCell from "./components/NoteCell";
import DateCell from "./components/DateCell";
import useGridData from "./hooks/useGridData";
import { useState } from "react";
import { DropDownListChangeEvent } from "@progress/kendo-react-dropdowns";
import { mapCategoryToValue } from "./utils/categoryConverter";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryChange = (event: DropDownListChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  const mappedCategory = mapCategoryToValue(selectedCategory);

  const { result, dataState, onDataStateChange, onPageChange, total } =
    useGridData(moviesUrl, mappedCategory, apiKey);

  return (
    <div>
      <Menu
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <Grid
        data={result}
        pageable={true}
        onPageChange={onPageChange}
        total={total}
        filterable={true}
        sortable={true}
        onDataStateChange={onDataStateChange}
        {...dataState}
      >
        <GridColumn field="title" title="Título" />
        <GridColumn field="overview" title="Sinopse" />
        <GridColumn field="release_date" title="Lançamento" cell={DateCell} />
        <GridColumn field="vote_average" title="Nota média" cell={NoteCell} />
        <GridColumn field="popularity" title="Grau de popularidade" />
      </Grid>
    </div>
  );
};

export default App;
