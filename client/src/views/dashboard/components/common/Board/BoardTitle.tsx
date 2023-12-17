import { useRef } from "react";
import { useClickOutside } from "@/views/dashboard/hooks/useClickOutside";

type Props = {
  id: string;
  name: string | undefined;
  openEditDocumentTitle: boolean;
  setSelectedValue: (value: { id: string; name: string }) => void;
  setOpenEditDocumentTitle: (value: boolean) => void;
  handleEditDocumentName: () => void;
};

export const BoardTitle = ({
  id,
  name,
  openEditDocumentTitle,
  setSelectedValue,
  setOpenEditDocumentTitle,
  handleEditDocumentName,
}: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClickOutside = () => {
    handleEditDocumentName();
    setOpenEditDocumentTitle(false);
  };

  useClickOutside(ref, () => {
    handleClickOutside();
  });

  return openEditDocumentTitle ? (
    <input
      ref={ref}
      defaultValue={name}
      onChange={(e) =>
        setSelectedValue({
          id: id as string,
          name: e.target.value,
        })
      }
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleEditDocumentName();
          setOpenEditDocumentTitle(false);
        }
      }}
      className="font-light text-sm"
    />
  ) : (
    <span className="font-light text-sm">
      {name?.length === 0 ? "Untitled" : name}
    </span>
  );
};
