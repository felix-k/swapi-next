"use client";

import { ChangeEvent, useEffect, useRef, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { styled, alpha } from "@mui/material/styles";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { SxProps } from "@mui/system";
import { useDebounce } from "usehooks-ts";
import { useSearchLoading } from "./store";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  height: theme.spacing(6),
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  position: "absolute",
  left: theme.spacing(1.5),
  height: "100%",
}));

const ClearIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  right: theme.spacing(2),
  height: "100%",
}));

const InputWrapper = styled(InputBase)(({ theme }) => ({
  flex: 1,
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    backgroundColor: "inherit",
    width: "100%",
  },
}));

const SearchBar = ({ sx }: { sx?: SxProps }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(searchParams.get("search") || "");
  const debouncedValue = useDebounce(value, 500);
  const refChange = useRef(false);
  const pathname = usePathname();
  const router = useRouter();

  const params = new URLSearchParams(searchParams);

  const navigate = (params: string) => {
    startTransition(() => {
      router.push(pathname + "?" + params.toString(), { scroll: false });
    });

    useSearchLoading.setState({ loading: true });
  };

  useEffect(() => {
    if (!refChange.current) return;

    if (debouncedValue === "") {
      deleteSearchParams();
      refChange.current = false;
      return;
    }

    params.set("search", debouncedValue);
    params.delete("page");
    navigate(params.toString());
    refChange.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  useEffect(() => {
    const { loading } = useSearchLoading.getState();

    if (loading && !isPending) {
      useSearchLoading.setState({ loading: false });
    }
  }, [isPending]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    refChange.current = true;
  };

  const focusSearch = () => {
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const resetSearch = () => {
    setValue("");
    deleteSearchParams();
  };

  const deleteSearchParams = () => {
    params.delete("search");
    params.delete("page");
    navigate(params.toString());
  };

  const handleClear = () => {
    focusSearch();
    setTimeout(() => resetSearch(), 0);
  };

  return (
    <Search sx={sx}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <InputWrapper
        name="search"
        value={value}
        inputRef={inputRef}
        placeholder={"Search"}
        onChange={handleChange}
      />
      {value && (
        <ClearIconWrapper>
          <IconButton
            edge="end"
            size="medium"
            color="inherit"
            onClick={handleClear}
          >
            <CloseIcon />
          </IconButton>
        </ClearIconWrapper>
      )}
    </Search>
  );
};

export default SearchBar;
