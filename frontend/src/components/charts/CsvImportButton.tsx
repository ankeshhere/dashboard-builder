import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Button } from "@mui/material";
import { useRef } from "react";

import type { Dataset } from "../../types/dashboard/Dataset";

import { loadDatasetFromCsv } from "../../providers/csv/CsvDataProvider";

interface Props {
  onImport(dataset: Dataset): void;
}

export default function CsvImportButton({ onImport }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFileSelected(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      const dataset = await loadDatasetFromCsv(file);

      onImport(dataset);
    } catch (error) {
      console.error(error);

      alert(error instanceof Error ? error.message : "Unable to import CSV.");
    }

    event.target.value = "";
  }

  return (
    <>
      <input
        ref={inputRef}
        hidden
        type="file"
        accept=".csv"
        onChange={handleFileSelected}
      />

      <Button
        variant="outlined"
        startIcon={<UploadFileIcon />}
        onClick={() => inputRef.current?.click()}
      >
        Import CSV
      </Button>
    </>
  );
}
